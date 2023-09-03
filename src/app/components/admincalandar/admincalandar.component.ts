import { Component, ChangeDetectorRef, OnInit, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminapicalandarService } from 'src/app/service/adminapicalandar.service';
import { Router } from '@angular/router';

declare var $: any;
let eventGuid = 0;

@Component({
  selector: 'app-admincalandar',
  templateUrl: './admincalandar.component.html',
  styleUrls: ['./admincalandar.component.css']
})
export class AdmincalandarComponent implements OnInit {
  calandar: any[] = [];
  submitted = false;

  private calendarVisibleSubject = new Subject<boolean>();
  private calendarOptionsSubject = new Subject<CalendarOptions>();
  private currentEventsSubject = new Subject<EventApi[]>();
  calendarVisible = true; // Default value
  calendarOptions: CalendarOptions; // Default value
  currentEvents: EventApi[] = []; // Default value
  newEvent: { id: string; title: string; start: string; end: string; allDay: boolean; };

  constructor(
    private changeDetector: ChangeDetectorRef,
    private apiService: AdminapicalandarService,
    private router: Router,
    private ngZone: NgZone,
    public fb: FormBuilder
  ) {
    
    this.readcalandar();
  }

  ngOnInit(): void {
    
    this.calendarVisibleSubject.subscribe(value => this.calendarVisible = value);
    this.calendarOptionsSubject.subscribe(options => this.calendarOptions = options);
    this.currentEventsSubject.subscribe(events => {
      this.currentEvents = events;
      this.changeDetector.detectChanges();
    });



    this.apiService.getCalandars().subscribe(data => {
      this.calandar = data; // En supposant que la réponse de votre API est un tableau d'événements
    });


    this.calendarOptions = { plugins: [interactionPlugin, dayGridPlugin,timeGridPlugin,listPlugin,],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      
      initialView: 'dayGridMonth',
      weekends: true,
      editable: false,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventsSet: this.handleEvents.bind(this)
    };
  }


  createEventId() {
    return String(eventGuid++);
  }

  handleWeekendsToggle() {
    this.calendarOptionsSubject.next({
      ...this.calendarOptions,
      weekends: !this.calendarOptions.weekends
    });
  }


  removecalandar(calandarId: string) {
    if (window.confirm('Are you sure?')) {
      // Trouver l'index de l'calandar dans le tableau calandar
      const index = this.calandar.findIndex((calandarItem) => calandarItem._id === calandarId);
      if (index !== -1) {
        // Supprimer l'calandar de la base de données en utilisant l'ID de l'calandar
        this.apiService.deleteCalandar(calandarId).subscribe(
          () => {
            // Utiliser la méthode splice pour supprimer l'calandar du tableau
            this.calandar.splice(index, 1);
            // Rediriger vers la page adminlistcalandar après la suppression
            this.router.navigateByUrl('/admincalandar');
          },
          (error) => {
            // Gérer les erreurs ici, si nécessaire
            console.log(error);
          }
        );
      }
    }
  }


  handleEvents(events: EventApi[]) {
    this.currentEventsSubject.next(events);
  }


  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Veuillez entrer un nouveau titre pour votre événement');
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    if (title) {
      this.newEvent = {
        id: this.createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      };
      // Ajoutez l'événement au calendrier
      calendarApi.addEvent(this.newEvent);
      // Ajoutez la nouvelle tâche dans la base de données et réagissez en conséquence
      this.apiService.createCalandar(this.newEvent).subscribe({
        complete: () => {
          console.log('Event and task successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/admincalandar'));
        },
      });
    }
  }


  readcalandar() {
    this.apiService.getCalandars().subscribe((data) => {
      this.calandar = data;

      // Formatez les données récupérées pour les événements du calendrier
      const formattedEvents = this.calandar.map(event => ({
        id: event.idcalandar,
        title: event.title,
        start: event.start,
      }));

      // Mettez à jour les options du calendrier pour inclure les événements de la base de données
      this.calendarOptionsSubject.next({
        ...this.calendarOptions,
        initialEvents: formattedEvents
      });
      console.log(this.calandar)
    });
 
  }


  ngAfterViewInit() {
    $(document).ready(function () {
      // Initialisation de DataTables avec la fonctionnalité de recherche et de pagination
      $('#calandar-list-table').DataTable({
        searching: true, // Activer la recherche
        lengthMenu: [5, 10, 50, 100], // Nombre d'éléments par page
        pageLength: 5 // Nombre d'éléments affichés par défaut par page
        // Autres options de configuration de DataTables, le cas échéant
      });
    });
  }


  public openPDF(): void {
    let DATA: any = document.getElementById('calandar-list-table');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

}

















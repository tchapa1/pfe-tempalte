import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AdmincreateuserComponent } from './components/admincreateuser/admincreateuser.component';
import { AdminedituserComponent } from './components/adminedituser/adminedituser.component';
import { AdmindetailuserComponent } from './components/admindetailuser/admindetailuser.component';
import { AdminlistuserComponent } from './components/adminlistuser/adminlistuser.component';
import { AdmincreateprofileComponent } from './components/admincreateprofile/admincreateprofile.component';
import { AdmineditprofileComponent } from './components/admineditprofile/admineditprofile.component';
import { AdmindetailprofileComponent } from './components/admindetailprofile/admindetailprofile.component';
import { AdminlistprofileComponent } from './components/adminlistprofile/adminlistprofile.component';
import { AdmincreatepostComponent } from './components/admincreatepost/admincreatepost.component';
import { AdmineditpostComponent } from './components/admineditpost/admineditpost.component';
import { AdmindetailpostComponent } from './components/admindetailpost/admindetailpost.component';
import { AdminlistpostComponent } from './components/adminlistpost/adminlistpost.component';
import { AdmincreatecongeComponent } from './components/admincreateconge/admincreateconge.component';
import { AdmineditcongeComponent } from './components/admineditconge/admineditconge.component';
import { AdmindetailcongeComponent } from './components/admindetailconge/admindetailconge.component';
import { AdminlistcongeComponent } from './components/adminlistconge/adminlistconge.component';
import { AdmincreateabsenceComponent } from './components/admincreateabsence/admincreateabsence.component';
import { AdmineditabsenceComponent } from './components/admineditabsence/admineditabsence.component';
import { AdmindetailabsenceComponent } from './components/admindetailabsence/admindetailabsence.component';
import { AdminlistabsenceComponent } from './components/adminlistabsence/adminlistabsence.component';
import { AdmincreateprojetComponent } from './components/admincreateprojet/admincreateprojet.component';
import { AdmineditprojetComponent } from './components/admineditprojet/admineditprojet.component';
import { AdmindetailprojetComponent } from './components/admindetailprojet/admindetailprojet.component';
import { AdminlistprojetComponent } from './components/adminlistprojet/adminlistprojet.component';
import { AdmincreatetacheComponent } from './components/admincreatetache/admincreatetache.component';
import { AdminedittacheComponent } from './components/adminedittache/adminedittache.component';
import { AdmindetailtacheComponent } from './components/admindetailtache/admindetailtache.component';
import { AdminlisttacheComponent } from './components/adminlisttache/adminlisttache.component';
import { AdmincreatenotificationComponent } from './components/admincreatenotification/admincreatenotification.component';
import { AdmineditnotificationComponent } from './components/admineditnotification/admineditnotification.component';
import { AdmindetailnotificationComponent } from './components/admindetailnotification/admindetailnotification.component';
import { AdminlistnotificationComponent } from './components/adminlistnotification/adminlistnotification.component';
import { AdmincreateavancementprojetComponent } from './components/admincreateavancementprojet/admincreateavancementprojet.component';
import { AdmineditavancementprojetComponent } from './components/admineditavancementprojet/admineditavancementprojet.component';
import { AdmindetailavancementprojetComponent } from './components/admindetailavancementprojet/admindetailavancementprojet.component';
import { AdminlistavancementprojetComponent } from './components/adminlistavancementprojet/adminlistavancementprojet.component';
import { AdmincreateavancementtacheComponent } from './components/admincreateavancementtache/admincreateavancementtache.component';
import { AdmineditavancementtacheComponent } from './components/admineditavancementtache/admineditavancementtache.component';
import { AdmindetailavancementtacheComponent } from './components/admindetailavancementtache/admindetailavancementtache.component';
import { AdminlistavancementtacheComponent } from './components/adminlistavancementtache/adminlistavancementtache.component';
import { AdmincreategroupeComponent } from './components/admincreategroupe/admincreategroupe.component';
import { AdmineditgroupeComponent } from './components/admineditgroupe/admineditgroupe.component';
import { AdmindetailgroupeComponent } from './components/admindetailgroupe/admindetailgroupe.component';
import { AdminlistgroupeComponent } from './components/adminlistgroupe/adminlistgroupe.component';
import { AdmincreatemessageComponent } from './components/admincreatemessage/admincreatemessage.component';
import { AdmineditmessageComponent } from './components/admineditmessage/admineditmessage.component';
import { AdmindetailmessageComponent } from './components/admindetailmessage/admindetailmessage.component';
import { AdminlistmessageComponent } from './components/adminlistmessage/adminlistmessage.component';
import { DgcreateuserComponent } from './components/dgcreateuser/dgcreateuser.component';
import { DgdetailuserComponent } from './components/dgdetailuser/dgdetailuser.component';
import { DgcreateprofileComponent } from './components/dgcreateprofile/dgcreateprofile.component';
import { DglistpostComponent } from './components/dglistpost/dglistpost.component';
import { DgeditcongeComponent } from './components/dgeditconge/dgeditconge.component';
import { DglistcongeComponent } from './components/dglistconge/dglistconge.component';
import { DgeditabsenceComponent } from './components/dgeditabsence/dgeditabsence.component';
import { DglistabsenceComponent } from './components/dglistabsence/dglistabsence.component';
import { DgeditprojetComponent } from './components/dgeditprojet/dgeditprojet.component';
import { DglistprojetComponent } from './components/dglistprojet/dglistprojet.component';
import { DgedittacheComponent } from './components/dgedittache/dgedittache.component';
import { DglisttacheComponent } from './components/dglisttache/dglisttache.component';
import { DgeditnotificationComponent } from './components/dgeditnotification/dgeditnotification.component';
import { DglistnotificationComponent } from './components/dglistnotification/dglistnotification.component';
import { DgeditavancementprojetComponent } from './components/dgeditavancementprojet/dgeditavancementprojet.component';
import { DglistavancementprojetComponent } from './components/dglistavancementprojet/dglistavancementprojet.component';
import { DgeditavancementtacheComponent } from './components/dgeditavancementtache/dgeditavancementtache.component';
import { DglistavancementtacheComponent } from './components/dglistavancementtache/dglistavancementtache.component';
import { DgeditgroupeComponent } from './components/dgeditgroupe/dgeditgroupe.component';
import { DglistgroupeComponent } from './components/dglistgroupe/dglistgroupe.component';
import { DgeditmessageComponent } from './components/dgeditmessage/dgeditmessage.component';
import { DgedituserComponent } from './components/dgedituser/dgedituser.component';
import { DglistuserComponent } from './components/dglistuser/dglistuser.component';
import { DgeditprofileComponent } from './components/dgeditprofile/dgeditprofile.component';
import { DglistprofileComponent } from './components/dglistprofile/dglistprofile.component';
import { DgcreatepostComponent } from './components/dgcreatepost/dgcreatepost.component';
import { DgeditpostComponent } from './components/dgeditpost/dgeditpost.component';
import { DgcreatecongeComponent } from './components/dgcreateconge/dgcreateconge.component';
import { DgcreateabsenceComponent } from './components/dgcreateabsence/dgcreateabsence.component';
import { DgcreateprojetComponent } from './components/dgcreateprojet/dgcreateprojet.component';
import { DgcreatetacheComponent } from './components/dgcreatetache/dgcreatetache.component';
import { DgcreatenotificationComponent } from './components/dgcreatenotification/dgcreatenotification.component';
import { DgcreateavancementprojetComponent } from './components/dgcreateavancementprojet/dgcreateavancementprojet.component';
import { DgcreateavancementtacheComponent } from './components/dgcreateavancementtache/dgcreateavancementtache.component';
import { DgcreategroupeComponent } from './components/dgcreategroupe/dgcreategroupe.component';
import { DgcreatemessageComponent } from './components/dgcreatemessage/dgcreatemessage.component';
import { DglistmessageComponent } from './components/dglistmessage/dglistmessage.component';
import { DgdetailprofileComponent } from './components/dgdetailprofile/dgdetailprofile.component';
import { DgdetailpostComponent } from './components/dgdetailpost/dgdetailpost.component';
import { DgdetailcongeComponent } from './components/dgdetailconge/dgdetailconge.component';
import { DgdetailabsenceComponent } from './components/dgdetailabsence/dgdetailabsence.component';
import { DgdetailprojetComponent } from './components/dgdetailprojet/dgdetailprojet.component';
import { DgdetailtacheComponent } from './components/dgdetailtache/dgdetailtache.component';
import { DgdetailnotificationComponent } from './components/dgdetailnotification/dgdetailnotification.component';
import { DgdetailavancementprojetComponent } from './components/dgdetailavancementprojet/dgdetailavancementprojet.component';
import { DgdetailavancementtacheComponent } from './components/dgdetailavancementtache/dgdetailavancementtache.component';
import { DgdetailgroupeComponent } from './components/dgdetailgroupe/dgdetailgroupe.component';
import { DgdetailmessageComponent } from './components/dgdetailmessage/dgdetailmessage.component';
import { RhcreateuserComponent } from './components/rhcreateuser/rhcreateuser.component';
import { RhedituserComponent } from './components/rhedituser/rhedituser.component';
import { RhdetailuserComponent } from './components/rhdetailuser/rhdetailuser.component';
import { RhlistuserComponent } from './components/rhlistuser/rhlistuser.component';
import { RhcreateprofileComponent } from './components/rhcreateprofile/rhcreateprofile.component';
import { RheditprofileComponent } from './components/rheditprofile/rheditprofile.component';
import { RhdetailprofileComponent } from './components/rhdetailprofile/rhdetailprofile.component';
import { RhlistprofileComponent } from './components/rhlistprofile/rhlistprofile.component';
import { RhcreatepostComponent } from './components/rhcreatepost/rhcreatepost.component';
import { RheditpostComponent } from './components/rheditpost/rheditpost.component';
import { RhdetailpostComponent } from './components/rhdetailpost/rhdetailpost.component';
import { RhlistpostComponent } from './components/rhlistpost/rhlistpost.component';
import { RhcreatecongeComponent } from './components/rhcreateconge/rhcreateconge.component';
import { RheditcongeComponent } from './components/rheditconge/rheditconge.component';
import { RhdetailcongeComponent } from './components/rhdetailconge/rhdetailconge.component';
import { RhlistcongeComponent } from './components/rhlistconge/rhlistconge.component';
import { RhcreateabsenceComponent } from './components/rhcreateabsence/rhcreateabsence.component';
import { RheditabsenceComponent } from './components/rheditabsence/rheditabsence.component';
import { RhdetailabsenceComponent } from './components/rhdetailabsence/rhdetailabsence.component';
import { RhlistabsenceComponent } from './components/rhlistabsence/rhlistabsence.component';
import { RhcreateprojetComponent } from './components/rhcreateprojet/rhcreateprojet.component';
import { RheditprojetComponent } from './components/rheditprojet/rheditprojet.component';
import { RhdetailprojetComponent } from './components/rhdetailprojet/rhdetailprojet.component';
import { RhlistprojetComponent } from './components/rhlistprojet/rhlistprojet.component';
import { RhcreatetacheComponent } from './components/rhcreatetache/rhcreatetache.component';
import { RhedittacheComponent } from './components/rhedittache/rhedittache.component';
import { RhdetailtacheComponent } from './components/rhdetailtache/rhdetailtache.component';
import { RhlisttacheComponent } from './components/rhlisttache/rhlisttache.component';
import { RhcreatenotificationComponent } from './components/rhcreatenotification/rhcreatenotification.component';
import { RheditnotificationComponent } from './components/rheditnotification/rheditnotification.component';
import { RhdetailnotificationComponent } from './components/rhdetailnotification/rhdetailnotification.component';
import { RhlistnotificationComponent } from './components/rhlistnotification/rhlistnotification.component';
import { RhcreateavancementprojetComponent } from './components/rhcreateavancementprojet/rhcreateavancementprojet.component';
import { RheditavancementprojetComponent } from './components/rheditavancementprojet/rheditavancementprojet.component';
import { RhdetailavancementprojetComponent } from './components/rhdetailavancementprojet/rhdetailavancementprojet.component';
import { RhlistavancementprojetComponent } from './components/rhlistavancementprojet/rhlistavancementprojet.component';
import { RhcreateavancementtacheComponent } from './components/rhcreateavancementtache/rhcreateavancementtache.component';
import { RheditavancementtacheComponent } from './components/rheditavancementtache/rheditavancementtache.component';
import { RhdetailavancementtacheComponent } from './components/rhdetailavancementtache/rhdetailavancementtache.component';
import { RhlistavancementtacheComponent } from './components/rhlistavancementtache/rhlistavancementtache.component';
import { RhcreategroupeComponent } from './components/rhcreategroupe/rhcreategroupe.component';
import { RheditgroupeComponent } from './components/rheditgroupe/rheditgroupe.component';
import { RhdetailgroupeComponent } from './components/rhdetailgroupe/rhdetailgroupe.component';
import { RhlistgroupeComponent } from './components/rhlistgroupe/rhlistgroupe.component';
import { RhcreatemessageComponent } from './components/rhcreatemessage/rhcreatemessage.component';
import { RheditmessageComponent } from './components/rheditmessage/rheditmessage.component';
import { RhdetailmessageComponent } from './components/rhdetailmessage/rhdetailmessage.component';
import { RhlistmessageComponent } from './components/rhlistmessage/rhlistmessage.component';
import { ChefcreateuserComponent } from './components/chefcreateuser/chefcreateuser.component';
import { ChefdetailuserComponent } from './components/chefdetailuser/chefdetailuser.component';
import { ChefcreateprofileComponent } from './components/chefcreateprofile/chefcreateprofile.component';
import { ChefdetailprofileComponent } from './components/chefdetailprofile/chefdetailprofile.component';
import { ChefcreatepostComponent } from './components/chefcreatepost/chefcreatepost.component';
import { ChefdetailpostComponent } from './components/chefdetailpost/chefdetailpost.component';
import { ChefcreatecongeComponent } from './components/chefcreateconge/chefcreateconge.component';
import { ChefdetailcongeComponent } from './components/chefdetailconge/chefdetailconge.component';
import { ChefcreateabsenceComponent } from './components/chefcreateabsence/chefcreateabsence.component';
import { ChefdetailabsenceComponent } from './components/chefdetailabsence/chefdetailabsence.component';
import { ChefcreateprojetComponent } from './components/chefcreateprojet/chefcreateprojet.component';
import { ChefdetailprojetComponent } from './components/chefdetailprojet/chefdetailprojet.component';
import { ChefcreatetacheComponent } from './components/chefcreatetache/chefcreatetache.component';
import { ChefdetailtacheComponent } from './components/chefdetailtache/chefdetailtache.component';
import { ChefcreatenotificationComponent } from './components/chefcreatenotification/chefcreatenotification.component';
import { ChefdetailnotificationComponent } from './components/chefdetailnotification/chefdetailnotification.component';
import { ChefcreateavancementprojetComponent } from './components/chefcreateavancementprojet/chefcreateavancementprojet.component';
import { ChefdetailavancementprojetComponent } from './components/chefdetailavancementprojet/chefdetailavancementprojet.component';
import { ChefcreateavancementtacheComponent } from './components/chefcreateavancementtache/chefcreateavancementtache.component';
import { ChefdetailavancementtacheComponent } from './components/chefdetailavancementtache/chefdetailavancementtache.component';
import { ChefcreategroupeComponent } from './components/chefcreategroupe/chefcreategroupe.component';
import { ChefdetailgroupeComponent } from './components/chefdetailgroupe/chefdetailgroupe.component';
import { ChefcreatemessageComponent } from './components/chefcreatemessage/chefcreatemessage.component';
import { ChefdetailmessageComponent } from './components/chefdetailmessage/chefdetailmessage.component';
import { ChefedituserComponent } from './components/chefedituser/chefedituser.component';
import { CheflistuserComponent } from './components/cheflistuser/cheflistuser.component';
import { ChefeditprofileComponent } from './components/chefeditprofile/chefeditprofile.component';
import { CheflistprofileComponent } from './components/cheflistprofile/cheflistprofile.component';
import { ChefeditpostComponent } from './components/chefeditpost/chefeditpost.component';
import { CheflistpostComponent } from './components/cheflistpost/cheflistpost.component';
import { ChefeditcongeComponent } from './components/chefeditconge/chefeditconge.component';
import { CheflistcongeComponent } from './components/cheflistconge/cheflistconge.component';
import { ChefeditabsenceComponent } from './components/chefeditabsence/chefeditabsence.component';
import { CheflistabsenceComponent } from './components/cheflistabsence/cheflistabsence.component';
import { ChefeditprojetComponent } from './components/chefeditprojet/chefeditprojet.component';
import { CheflistprojetComponent } from './components/cheflistprojet/cheflistprojet.component';
import { ChefedittacheComponent } from './components/chefedittache/chefedittache.component';
import { CheflisttacheComponent } from './components/cheflisttache/cheflisttache.component';
import { ChefeditnotificationComponent } from './components/chefeditnotification/chefeditnotification.component';
import { CheflistnotificationComponent } from './components/cheflistnotification/cheflistnotification.component';
import { ChefeditavancementprojetComponent } from './components/chefeditavancementprojet/chefeditavancementprojet.component';
import { CheflistavancementprojetComponent } from './components/cheflistavancementprojet/cheflistavancementprojet.component';
import { ChefeditavancementtacheComponent } from './components/chefeditavancementtache/chefeditavancementtache.component';
import { CheflistavancementtacheComponent } from './components/cheflistavancementtache/cheflistavancementtache.component';
import { ChefeditgroupeComponent } from './components/chefeditgroupe/chefeditgroupe.component';
import { CheflistgroupeComponent } from './components/cheflistgroupe/cheflistgroupe.component';
import { ChefeditmessageComponent } from './components/chefeditmessage/chefeditmessage.component';
import { CheflistmessageComponent } from './components/cheflistmessage/cheflistmessage.component';
import { CoordinateurcreateuserComponent } from './components/coordinateurcreateuser/coordinateurcreateuser.component';
import { CoordinateurdetailuserComponent } from './components/coordinateurdetailuser/coordinateurdetailuser.component';
import { CoordinateurcreateprofileComponent } from './components/coordinateurcreateprofile/coordinateurcreateprofile.component';
import { CoordinateurdetailprofileComponent } from './components/coordinateurdetailprofile/coordinateurdetailprofile.component';
import { CoordinateurcreatepostComponent } from './components/coordinateurcreatepost/coordinateurcreatepost.component';
import { CoordinateurdetailpostComponent } from './components/coordinateurdetailpost/coordinateurdetailpost.component';
import { CoordinateurcreatecongeComponent } from './components/coordinateurcreateconge/coordinateurcreateconge.component';
import { CoordinateurdetailcongeComponent } from './components/coordinateurdetailconge/coordinateurdetailconge.component';
import { CoordinateurcreateabsenceComponent } from './components/coordinateurcreateabsence/coordinateurcreateabsence.component';
import { CoordinateurdetailabsenceComponent } from './components/coordinateurdetailabsence/coordinateurdetailabsence.component';
import { CoordinateurcreateprojetComponent } from './components/coordinateurcreateprojet/coordinateurcreateprojet.component';
import { CoordinateurdetailprojetComponent } from './components/coordinateurdetailprojet/coordinateurdetailprojet.component';
import { CoordinateurcreatetacheComponent } from './components/coordinateurcreatetache/coordinateurcreatetache.component';
import { CoordinateurdetailtacheComponent } from './components/coordinateurdetailtache/coordinateurdetailtache.component';
import { CoordinateurcreatenotificationComponent } from './components/coordinateurcreatenotification/coordinateurcreatenotification.component';
import { CoordinateurdetailnotificationComponent } from './components/coordinateurdetailnotification/coordinateurdetailnotification.component';
import { CoordinateurcreateavancementprojetComponent } from './components/coordinateurcreateavancementprojet/coordinateurcreateavancementprojet.component';
import { CoordinateurdetailavancementprojetComponent } from './components/coordinateurdetailavancementprojet/coordinateurdetailavancementprojet.component';
import { CoordinateurcreateavancementtacheComponent } from './components/coordinateurcreateavancementtache/coordinateurcreateavancementtache.component';
import { CoordinateurdetailavancementtacheComponent } from './components/coordinateurdetailavancementtache/coordinateurdetailavancementtache.component';
import { CoordinateurcreategroupeComponent } from './components/coordinateurcreategroupe/coordinateurcreategroupe.component';
import { CoordinateurdetailgroupeComponent } from './components/coordinateurdetailgroupe/coordinateurdetailgroupe.component';
import { CoordinateurcreatemessageComponent } from './components/coordinateurcreatemessage/coordinateurcreatemessage.component';
import { CoordinateurdetailmessageComponent } from './components/coordinateurdetailmessage/coordinateurdetailmessage.component';
import { CoordinateuredituserComponent } from './components/coordinateuredituser/coordinateuredituser.component';
import { CoordinateurlistuserComponent } from './components/coordinateurlistuser/coordinateurlistuser.component';
import { CoordinateureditprofileComponent } from './components/coordinateureditprofile/coordinateureditprofile.component';
import { CoordinateurlistprofileComponent } from './components/coordinateurlistprofile/coordinateurlistprofile.component';
import { CoordinateureditpostComponent } from './components/coordinateureditpost/coordinateureditpost.component';
import { CoordinateurlistpostComponent } from './components/coordinateurlistpost/coordinateurlistpost.component';
import { CoordinateureditcongeComponent } from './components/coordinateureditconge/coordinateureditconge.component';
import { CoordinateurlistcongeComponent } from './components/coordinateurlistconge/coordinateurlistconge.component';
import { CoordinateureditabsenceComponent } from './components/coordinateureditabsence/coordinateureditabsence.component';
import { CoordinateurlistabsenceComponent } from './components/coordinateurlistabsence/coordinateurlistabsence.component';
import { CoordinateureditprojetComponent } from './components/coordinateureditprojet/coordinateureditprojet.component';
import { CoordinateurlistprojetComponent } from './components/coordinateurlistprojet/coordinateurlistprojet.component';
import { CoordinateuredittacheComponent } from './components/coordinateuredittache/coordinateuredittache.component';
import { CoordinateurlisttacheComponent } from './components/coordinateurlisttache/coordinateurlisttache.component';
import { CoordinateureditnotificationComponent } from './components/coordinateureditnotification/coordinateureditnotification.component';
import { CoordinateurlistnotificationComponent } from './components/coordinateurlistnotification/coordinateurlistnotification.component';
import { CoordinateureditavancementprojetComponent } from './components/coordinateureditavancementprojet/coordinateureditavancementprojet.component';
import { CoordinateurlistavancementprojetComponent } from './components/coordinateurlistavancementprojet/coordinateurlistavancementprojet.component';
import { CoordinateureditavancementtacheComponent } from './components/coordinateureditavancementtache/coordinateureditavancementtache.component';
import { CoordinateurlistavancementtacheComponent } from './components/coordinateurlistavancementtache/coordinateurlistavancementtache.component';
import { CoordinateureditgroupeComponent } from './components/coordinateureditgroupe/coordinateureditgroupe.component';
import { CoordinateurlistgroupeComponent } from './components/coordinateurlistgroupe/coordinateurlistgroupe.component';
import { CoordinateureditmessageComponent } from './components/coordinateureditmessage/coordinateureditmessage.component';
import { CoordinateurlistmessageComponent } from './components/coordinateurlistmessage/coordinateurlistmessage.component';
import { ModeleurcreateuserComponent } from './components/modeleurcreateuser/modeleurcreateuser.component';
import { ModeleurdetailuserComponent } from './components/modeleurdetailuser/modeleurdetailuser.component';
import { ModeleurcreateprofileComponent } from './components/modeleurcreateprofile/modeleurcreateprofile.component';
import { ModeleurdetailprofileComponent } from './components/modeleurdetailprofile/modeleurdetailprofile.component';
import { ModeleurcreatepostComponent } from './components/modeleurcreatepost/modeleurcreatepost.component';
import { ModeleurdetailpostComponent } from './components/modeleurdetailpost/modeleurdetailpost.component';
import { ModeleurcreatecongeComponent } from './components/modeleurcreateconge/modeleurcreateconge.component';
import { ModeleurdetailcongeComponent } from './components/modeleurdetailconge/modeleurdetailconge.component';
import { ModeleurcreateabsenceComponent } from './components/modeleurcreateabsence/modeleurcreateabsence.component';
import { ModeleurdetailabsenceComponent } from './components/modeleurdetailabsence/modeleurdetailabsence.component';
import { ModeleurcreateprojetComponent } from './components/modeleurcreateprojet/modeleurcreateprojet.component';
import { ModeleurdetailprojetComponent } from './components/modeleurdetailprojet/modeleurdetailprojet.component';
import { ModeleurcreatetacheComponent } from './components/modeleurcreatetache/modeleurcreatetache.component';
import { ModeleurdetailtacheComponent } from './components/modeleurdetailtache/modeleurdetailtache.component';
import { ModeleurcreatenotificationComponent } from './components/modeleurcreatenotification/modeleurcreatenotification.component';
import { ModeleurdetailnotificationComponent } from './components/modeleurdetailnotification/modeleurdetailnotification.component';
import { ModeleurcreateavancementprojetComponent } from './components/modeleurcreateavancementprojet/modeleurcreateavancementprojet.component';
import { ModeleurdetailavancementprojetComponent } from './components/modeleurdetailavancementprojet/modeleurdetailavancementprojet.component';
import { ModeleurcreateavancementtacheComponent } from './components/modeleurcreateavancementtache/modeleurcreateavancementtache.component';
import { ModeleurdetailavancementtacheComponent } from './components/modeleurdetailavancementtache/modeleurdetailavancementtache.component';
import { ModeleurcreategroupeComponent } from './components/modeleurcreategroupe/modeleurcreategroupe.component';
import { ModeleurdetailgroupeComponent } from './components/modeleurdetailgroupe/modeleurdetailgroupe.component';
import { ModeleurcreatemessageComponent } from './components/modeleurcreatemessage/modeleurcreatemessage.component';
import { ModeleurdetailmessageComponent } from './components/modeleurdetailmessage/modeleurdetailmessage.component';
import { ModeleuredituserComponent } from './components/modeleuredituser/modeleuredituser.component';
import { ModeleurlistuserComponent } from './components/modeleurlistuser/modeleurlistuser.component';
import { ModeleureditprofileComponent } from './components/modeleureditprofile/modeleureditprofile.component';
import { ModeleurlistprofileComponent } from './components/modeleurlistprofile/modeleurlistprofile.component';
import { ModeleureditpostComponent } from './components/modeleureditpost/modeleureditpost.component';
import { ModeleurlistpostComponent } from './components/modeleurlistpost/modeleurlistpost.component';
import { ModeleureditcongeComponent } from './components/modeleureditconge/modeleureditconge.component';
import { ModeleurlistcongeComponent } from './components/modeleurlistconge/modeleurlistconge.component';
import { ModeleureditabsenceComponent } from './components/modeleureditabsence/modeleureditabsence.component';
import { ModeleurlistabsenceComponent } from './components/modeleurlistabsence/modeleurlistabsence.component';
import { ModeleureditprojetComponent } from './components/modeleureditprojet/modeleureditprojet.component';
import { ModeleurlistprojetComponent } from './components/modeleurlistprojet/modeleurlistprojet.component';
import { ModeleuredittacheComponent } from './components/modeleuredittache/modeleuredittache.component';
import { ModeleurlisttacheComponent } from './components/modeleurlisttache/modeleurlisttache.component';
import { ModeleureditnotificationComponent } from './components/modeleureditnotification/modeleureditnotification.component';
import { ModeleurlistnotificationComponent } from './components/modeleurlistnotification/modeleurlistnotification.component';
import { ModeleureditavancementprojetComponent } from './components/modeleureditavancementprojet/modeleureditavancementprojet.component';
import { ModeleurlistavancementprojetComponent } from './components/modeleurlistavancementprojet/modeleurlistavancementprojet.component';
import { ModeleureditavancementtacheComponent } from './components/modeleureditavancementtache/modeleureditavancementtache.component';
import { ModeleurlistavancementtacheComponent } from './components/modeleurlistavancementtache/modeleurlistavancementtache.component';
import { ModeleureditgroupeComponent } from './components/modeleureditgroupe/modeleureditgroupe.component';
import { ModeleurlistgroupeComponent } from './components/modeleurlistgroupe/modeleurlistgroupe.component';
import { ModeleureditmessageComponent } from './components/modeleureditmessage/modeleureditmessage.component';
import { ModeleurlistmessageComponent } from './components/modeleurlistmessage/modeleurlistmessage.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { ModeleurfooterComponent } from './components/modeleurfooter/modeleurfooter.component';
import { CoordinateurfooterComponent } from './components/coordinateurfooter/coordinateurfooter.component';
import { RhfooterComponent } from './components/rhfooter/rhfooter.component';
import { DgfooterComponent } from './components/dgfooter/dgfooter.component';
import { CheffooterComponent } from './components/cheffooter/cheffooter.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { ModeleurheaderComponent } from './components/modeleurheader/modeleurheader.component';
import { CoordinateurheaderComponent } from './components/coordinateurheader/coordinateurheader.component';
import { RhheaderComponent } from './components/rhheader/rhheader.component';
import { DgheaderComponent } from './components/dgheader/dgheader.component';
import { ChefheaderComponent } from './components/chefheader/chefheader.component';
import { AdminmenuComponent } from './components/adminmenu/adminmenu.component';
import { ModeleurmenuComponent } from './components/modeleurmenu/modeleurmenu.component';
import { CoordinateurmenuComponent } from './components/coordinateurmenu/coordinateurmenu.component';
import { RhmenuComponent } from './components/rhmenu/rhmenu.component';
import { DgmenuComponent } from './components/dgmenu/dgmenu.component';
import { ChefmenuComponent } from './components/chefmenu/chefmenu.component';
import { IndexapplicationComponent } from './components/indexapplication/indexapplication.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmincreateuserComponent,
    AdminedituserComponent,
    AdmindetailuserComponent,
    AdminlistuserComponent,
    AdmincreateprofileComponent,
    AdmineditprofileComponent,
    AdmindetailprofileComponent,
    AdminlistprofileComponent,
    AdmincreatepostComponent,
    AdmineditpostComponent,
    AdmindetailpostComponent,
    AdminlistpostComponent,
    AdmincreatecongeComponent,
    AdmineditcongeComponent,
    AdmindetailcongeComponent,
    AdminlistcongeComponent,
    AdmincreateabsenceComponent,
    AdmineditabsenceComponent,
    AdmindetailabsenceComponent,
    AdminlistabsenceComponent,
    AdmincreateprojetComponent,
    AdmineditprojetComponent,
    AdmindetailprojetComponent,
    AdminlistprojetComponent,
    AdmincreatetacheComponent,
    AdminedittacheComponent,
    AdmindetailtacheComponent,
    AdminlisttacheComponent,
    AdmincreatenotificationComponent,
    AdmineditnotificationComponent,
    AdmindetailnotificationComponent,
    AdminlistnotificationComponent,
    AdmincreateavancementprojetComponent,
    AdmineditavancementprojetComponent,
    AdmindetailavancementprojetComponent,
    AdminlistavancementprojetComponent,
    AdmincreateavancementtacheComponent,
    AdmineditavancementtacheComponent,
    AdmindetailavancementtacheComponent,
    AdminlistavancementtacheComponent,
    AdmincreategroupeComponent,
    AdmineditgroupeComponent,
    AdmindetailgroupeComponent,
    AdminlistgroupeComponent,
    AdmincreatemessageComponent,
    AdmineditmessageComponent,
    AdmindetailmessageComponent,
    AdminlistmessageComponent,
    DgcreateuserComponent,
    DgdetailuserComponent,
    DgcreateprofileComponent,
    DglistpostComponent,
    DgeditcongeComponent,
    DglistcongeComponent,
    DgeditabsenceComponent,
    DglistabsenceComponent,
    DgeditprojetComponent,
    DglistprojetComponent,
    DgedittacheComponent,
    DglisttacheComponent,
    DgeditnotificationComponent,
    DglistnotificationComponent,
    DgeditavancementprojetComponent,
    DglistavancementprojetComponent,
    DgeditavancementtacheComponent,
    DglistavancementtacheComponent,
    DgeditgroupeComponent,
    DglistgroupeComponent,
    DgeditmessageComponent,
    DgedituserComponent,
    DglistuserComponent,
    DgeditprofileComponent,
    DglistprofileComponent,
    DgcreatepostComponent,
    DgeditpostComponent,
    DgcreatecongeComponent,
    DgcreateabsenceComponent,
    DgcreateprojetComponent,
    DgcreatetacheComponent,
    DgcreatenotificationComponent,
    DgcreateavancementprojetComponent,
    DgcreateavancementtacheComponent,
    DgcreategroupeComponent,
    DgcreatemessageComponent,
    DglistmessageComponent,
    DgdetailprofileComponent,
    DgdetailpostComponent,
    DgdetailcongeComponent,
    DgdetailabsenceComponent,
    DgdetailprojetComponent,
    DgdetailtacheComponent,
    DgdetailnotificationComponent,
    DgdetailavancementprojetComponent,
    DgdetailavancementtacheComponent,
    DgdetailgroupeComponent,
    DgdetailmessageComponent,
    RhcreateuserComponent,
    RhedituserComponent,
    RhdetailuserComponent,
    RhlistuserComponent,
    RhcreateprofileComponent,
    RheditprofileComponent,
    RhdetailprofileComponent,
    RhlistprofileComponent,
    RhcreatepostComponent,
    RheditpostComponent,
    RhdetailpostComponent,
    RhlistpostComponent,
    RhcreatecongeComponent,
    RheditcongeComponent,
    RhdetailcongeComponent,
    RhlistcongeComponent,
    RhcreateabsenceComponent,
    RheditabsenceComponent,
    RhdetailabsenceComponent,
    RhlistabsenceComponent,
    RhcreateprojetComponent,
    RheditprojetComponent,
    RhdetailprojetComponent,
    RhlistprojetComponent,
    RhcreatetacheComponent,
    RhedittacheComponent,
    RhdetailtacheComponent,
    RhlisttacheComponent,
    RhcreatenotificationComponent,
    RheditnotificationComponent,
    RhdetailnotificationComponent,
    RhlistnotificationComponent,
    RhcreateavancementprojetComponent,
    RheditavancementprojetComponent,
    RhdetailavancementprojetComponent,
    RhlistavancementprojetComponent,
    RhcreateavancementtacheComponent,
    RheditavancementtacheComponent,
    RhdetailavancementtacheComponent,
    RhlistavancementtacheComponent,
    RhcreategroupeComponent,
    RheditgroupeComponent,
    RhdetailgroupeComponent,
    RhlistgroupeComponent,
    RhcreatemessageComponent,
    RheditmessageComponent,
    RhdetailmessageComponent,
    RhlistmessageComponent,
    ChefcreateuserComponent,
    ChefdetailuserComponent,
    ChefcreateprofileComponent,
    ChefdetailprofileComponent,
    ChefcreatepostComponent,
    ChefdetailpostComponent,
    ChefcreatecongeComponent,
    ChefdetailcongeComponent,
    ChefcreateabsenceComponent,
    ChefdetailabsenceComponent,
    ChefcreateprojetComponent,
    ChefdetailprojetComponent,
    ChefcreatetacheComponent,
    ChefdetailtacheComponent,
    ChefcreatenotificationComponent,
    ChefdetailnotificationComponent,
    ChefcreateavancementprojetComponent,
    ChefdetailavancementprojetComponent,
    ChefcreateavancementtacheComponent,
    ChefdetailavancementtacheComponent,
    ChefcreategroupeComponent,
    ChefdetailgroupeComponent,
    ChefcreatemessageComponent,
    ChefdetailmessageComponent,
    ChefedituserComponent,
    CheflistuserComponent,
    ChefeditprofileComponent,
    CheflistprofileComponent,
    ChefeditpostComponent,
    CheflistpostComponent,
    ChefeditcongeComponent,
    CheflistcongeComponent,
    ChefeditabsenceComponent,
    CheflistabsenceComponent,
    ChefeditprojetComponent,
    CheflistprojetComponent,
    ChefedittacheComponent,
    CheflisttacheComponent,
    ChefeditnotificationComponent,
    CheflistnotificationComponent,
    ChefeditavancementprojetComponent,
    CheflistavancementprojetComponent,
    ChefeditavancementtacheComponent,
    CheflistavancementtacheComponent,
    ChefeditgroupeComponent,
    CheflistgroupeComponent,
    ChefeditmessageComponent,
    CheflistmessageComponent,
    CoordinateurcreateuserComponent,
    CoordinateurdetailuserComponent,
    CoordinateurcreateprofileComponent,
    CoordinateurdetailprofileComponent,
    CoordinateurcreatepostComponent,
    CoordinateurdetailpostComponent,
    CoordinateurcreatecongeComponent,
    CoordinateurdetailcongeComponent,
    CoordinateurcreateabsenceComponent,
    CoordinateurdetailabsenceComponent,
    CoordinateurcreateprojetComponent,
    CoordinateurdetailprojetComponent,
    CoordinateurcreatetacheComponent,
    CoordinateurdetailtacheComponent,
    CoordinateurcreatenotificationComponent,
    CoordinateurdetailnotificationComponent,
    CoordinateurcreateavancementprojetComponent,
    CoordinateurdetailavancementprojetComponent,
    CoordinateurcreateavancementtacheComponent,
    CoordinateurdetailavancementtacheComponent,
    CoordinateurcreategroupeComponent,
    CoordinateurdetailgroupeComponent,
    CoordinateurcreatemessageComponent,
    CoordinateurdetailmessageComponent,
    CoordinateuredituserComponent,
    CoordinateurlistuserComponent,
    CoordinateureditprofileComponent,
    CoordinateurlistprofileComponent,
    CoordinateureditpostComponent,
    CoordinateurlistpostComponent,
    CoordinateureditcongeComponent,
    CoordinateurlistcongeComponent,
    CoordinateureditabsenceComponent,
    CoordinateurlistabsenceComponent,
    CoordinateureditprojetComponent,
    CoordinateurlistprojetComponent,
    CoordinateuredittacheComponent,
    CoordinateurlisttacheComponent,
    CoordinateureditnotificationComponent,
    CoordinateurlistnotificationComponent,
    CoordinateureditavancementprojetComponent,
    CoordinateurlistavancementprojetComponent,
    CoordinateureditavancementtacheComponent,
    CoordinateurlistavancementtacheComponent,
    CoordinateureditgroupeComponent,
    CoordinateurlistgroupeComponent,
    CoordinateureditmessageComponent,
    CoordinateurlistmessageComponent,
    ModeleurcreateuserComponent,
    ModeleurdetailuserComponent,
    ModeleurcreateprofileComponent,
    ModeleurdetailprofileComponent,
    ModeleurcreatepostComponent,
    ModeleurdetailpostComponent,
    ModeleurcreatecongeComponent,
    ModeleurdetailcongeComponent,
    ModeleurcreateabsenceComponent,
    ModeleurdetailabsenceComponent,
    ModeleurcreateprojetComponent,
    ModeleurdetailprojetComponent,
    ModeleurcreatetacheComponent,
    ModeleurdetailtacheComponent,
    ModeleurcreatenotificationComponent,
    ModeleurdetailnotificationComponent,
    ModeleurcreateavancementprojetComponent,
    ModeleurdetailavancementprojetComponent,
    ModeleurcreateavancementtacheComponent,
    ModeleurdetailavancementtacheComponent,
    ModeleurcreategroupeComponent,
    ModeleurdetailgroupeComponent,
    ModeleurcreatemessageComponent,
    ModeleurdetailmessageComponent,
    ModeleuredituserComponent,
    ModeleurlistuserComponent,
    ModeleureditprofileComponent,
    ModeleurlistprofileComponent,
    ModeleureditpostComponent,
    ModeleurlistpostComponent,
    ModeleureditcongeComponent,
    ModeleurlistcongeComponent,
    ModeleureditabsenceComponent,
    ModeleurlistabsenceComponent,
    ModeleureditprojetComponent,
    ModeleurlistprojetComponent,
    ModeleuredittacheComponent,
    ModeleurlisttacheComponent,
    ModeleureditnotificationComponent,
    ModeleurlistnotificationComponent,
    ModeleureditavancementprojetComponent,
    ModeleurlistavancementprojetComponent,
    ModeleureditavancementtacheComponent,
    ModeleurlistavancementtacheComponent,
    ModeleureditgroupeComponent,
    ModeleurlistgroupeComponent,
    ModeleureditmessageComponent,
    ModeleurlistmessageComponent,
    AdminfooterComponent,
    ModeleurfooterComponent,
    CoordinateurfooterComponent,
    RhfooterComponent,
    DgfooterComponent,
    CheffooterComponent,
    AdminheaderComponent,
    ModeleurheaderComponent,
    CoordinateurheaderComponent,
    RhheaderComponent,
    DgheaderComponent,
    ChefheaderComponent,
    AdminmenuComponent,
    ModeleurmenuComponent,
    CoordinateurmenuComponent,
    RhmenuComponent,
    DgmenuComponent,
    ChefmenuComponent,
    IndexapplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

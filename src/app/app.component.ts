import {
    Component,
    Input
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() searchText: string;
  foundPatients: Patient[];
  patients = [
      new Patient({'firstName': 'Primus','lastName': 'Ianuarius', 'emailAddress': 'p.i@email.co', 'profileImage': 'assets/profiles/pi.png', 'doctorName': 'Brutus'}),
      new Patient({'firstName': 'Secundus', 'lastName': 'Februarius', 'emailAddress': 's.f@email.co', 'profileImage': 'assets/profiles/sf.png', 'doctorName': 'Pulvillus'}),
      new Patient({'firstName': 'Tertius', 'lastName': 'Intercalarius', 'emailAddress': 't.i@email.co', 'profileImage': 'assets/profiles/ti.png', 'doctorName': 'Poplicola'}),
      new Patient({'firstName': 'Quartus', 'lastName': 'Martius', 'emailAddress': 'q.m@email.co', 'profileImage': 'assets/profiles/qm.png', 'doctorName': 'Poplicola'}),
      new Patient({'firstName': 'Quintus', 'lastName': 'Aprilis', 'emailAddress': 'q.a@email.co', 'profileImage': 'assets/profiles/qa.png', 'doctorName': 'Lartius'}),
      new Patient({'firstName': 'Sextus', 'lastName': 'Maius', 'emailAddress': 's.m@email.co', 'profileImage': 'assets/profiles/sm.png', 'doctorName': 'Volusus'}),
      new Patient({'firstName': 'Septius', 'lastName': 'Iunius', 'emailAddress': 's.i@email.co', 'profileImage': 'assets/profiles/si.png', 'doctorName': 'Poplicola'}),
      new Patient({'firstName': 'Octavus', 'lastName': 'Sextilis', 'emailAddress': 'o.s@email.co', 'profileImage': 'assets/profiles/so.png', 'doctorName': 'Lanatus'}),
      new Patient({'firstName': 'Nonus', 'lastName': 'September', 'emailAddress': 'n.s@email.co', 'profileImage': 'assets/profiles/ns.png', 'doctorName': 'Tricostus'}),
      new Patient({'firstName': 'Decimus', 'lastName': 'October', 'emailAddress': 'd.o@email.co', 'profileImage': 'assets/profiles/do.png', 'doctorName': 'Aurcunus'}),
      new Patient({'firstName': 'Undecimus', 'lastName': 'November', 'emailAddress': 'u.n@email.co', 'profileImage': 'assets/profiles/un.png', 'doctorName': 'Aurcunus'}),
      new Patient({'firstName': 'Duodecimus', 'lastName': 'December', 'emailAddress': 'd.d@email.co', 'profileImage': 'assets/profiles/dd.png', 'doctorName': 'Brutus'})
  ];

  // Consider making this generate from the info in Patient
  patientProperties() : Array<string> {
    return Object.keys(this.patients[0]);
  }

  // Extend this to accept the 'name' and 'doctor' specifiers
  search(searchText: string): void {
      // Reset Found Patients
      this.foundPatients = [];

      // Pull apart the search string to see if there's a column target
      let searchTerms = searchText.split(" ");
      let firstTermRegex = new RegExp(searchTerms[0], 'i');
      if (searchTerms.length > 1) {
          var secondTermRegex = new RegExp(searchTerms[1], 'i');
      }
      let candidateKeys = this.patientProperties().filter( a => firstTermRegex.exec(a));

      if(typeof candidateKeys !== 'undefined' && candidateKeys.length > 0) {
          let prop = candidateKeys[0];
          for (var i = 0; i < this.patients.length; i++) {
              if (secondTermRegex.exec(this.patients[i][prop])) {
                console.log(this.patients[i]);
                this.foundPatients.push(this.patients[i]);
              }
          };
      } else {
          for (var i = 0; i < this.patients.length; i++) {
              if (firstTermRegex.exec((<any>Object).values(this.patients[i]))) {
                console.log(this.patients[i]);
                this.foundPatients.push(this.patients[i]);
              }
          };
      }
  }
}

export class Patient {
    firstName: string;
    lastName: string;
    emailAddress: string;
    profileImage: string;
    doctorName: string;

    constructor( fields: {
        firstName: string;
        lastName: string;
        emailAddress: string;
        profileImage: string;
        doctorName: string;
    }) {
        Object.assign(this, fields);
    }
}

import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { DetailContactPage } from '../../pages/detail-contact/detail-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  //   public people = [{
  //     gender: "male",
  //         name: {
  //         title: "mr",
  //         first: "rolf",
  //         last: "hegdal"
  //       },
  //         location: {
  //         street: "ljan terrasse 346",
  //         city: "vear",
  //         state: "rogaland",
  //         postcode: "3095",
  //         coordinates: {
  //         latitude: "54.8646",
  //         longitude: "-97.3136"
  //         },
  //         timezone: {
  //         offset: "-10:00",
  //         description: "Hawaii"
  //         }
  //       },
  //         email: "rolf.hegdal@example.com",
  //         login: {
  //         uuid: "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
  //         username: "bluefrog786",
  //         password: "ingrid",
  //         salt: "GtRFz4NE",
  //         md5: "5c581c5748fc8c35bd7f16eac9efbb55",
  //         sha1: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
  //         sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
  //       },
  //         dob: {
  //         date: "1975-11-12T06:34:44Z",
  //         age: 42
  //       },
  //         registered: {
  //         date: "2015-11-04T22:09:36Z",
  //         age: 2
  //       },
  //         phone: "66976498",
  //         cell: "40652479",
  //         id: {
  //         name: "FN",
  //         value: "12117533881"
  //       },
  //         picture: {
  //         large: "https://randomuser.me/api/portraits/men/65.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
  //       },
  //       nat: "NO"
  //   },
  //   {
  //       "gender":"female",
  //       "name":{
  //        "title":"mrs",
  //        "first":"ana",
  //        "last":"sjåstad"
  //     },
  //       "location":{
  //        "street":"sjursøya 5460",
  //        "city":"tveteneåsen",
  //        "state":"sør-trøndelag",
  //        "postcode":"3915",
  //        "coordinates":{
  //         "latitude":"-68.6146",
  //         "longitude":"110.7065"
  //        },
  //        "timezone":{
  //           "offset":"-3:30",
  //           "description":"Newfoundland"
  //        }
  //     },
  //       "email":"ana.sjåstad@example.com",
  //       "login":{
  //        "uuid":"1b557ceb-df83-401a-baa6-a6ee83657d37",
  //        "username":"greenostrich477",
  //        "password":"norman",
  //        "salt":"0IobfNoO",
  //        "md5":"26daa5db2145c155d3deeeecb41d9c25",
  //        "sha1":"b5f0a193355c0a710ae977d598df03b728de076a",
  //        "sha256":"f7fdfd490165b77b18e1fcaf24ce798175668d76c9e76f4bde6d641926763f91"
  //     },
  //       "dob":{
  //        "date":"1992-10-18T11:39:39Z",
  //        "age":26
  //     },
  //     "registered":{
  //        "date":"2017-02-07T03:06:20Z",
  //        "age":1
  //     },
  //     "phone":"34348247",
  //     "cell":"99646795",
  //     "id":{
  //        "name":"FN",
  //        "value":"18109208546"
  //     },
  //     "picture":{
  //        "large":"https://randomuser.me/api/portraits/women/51.jpg",
  //        "medium":"https://randomuser.me/api/portraits/med/women/51.jpg",
  //        "thumbnail":"https://randomuser.me/api/portraits/thumb/women/51.jpg"
  //     },
  //     "nat":"NO"
  // },
  // {
  //   "gender":"male",
  //          "name":{
  //             "title":"mr",
  //             "first":"isaac",
  //             "last":"richardson"
  //          },
  //          "location":{
  //             "street":"1287 main street",
  //             "city":"wolverhampton",
  //             "state":"derbyshire",
  //             "postcode":"BZ9 2NN",
  //             "coordinates":{
  //                "latitude":"-2.3693",
  //                "longitude":"-51.3048"
  //             },
  //             "timezone":{
  //                "offset":"+1:00",
  //                "description":"Brussels, Copenhagen, Madrid, Paris"
  //             }
  //          },
  //          "email":"isaac.richardson@example.com",
  //          "login":{
  //             "uuid":"6c726f4c-2baf-4d00-b248-1744f35c3361",
  //             "username":"crazyleopard166",
  //             "password":"blackbir",
  //             "salt":"hSP01bbp",
  //             "md5":"eba7411d3c1141adfb67cd2563ab652a",
  //             "sha1":"5af0afb569c95bc82d63a03d0d8fd416726faae2",
  //             "sha256":"6ca9f0fd1be246083854d7abd26f0e722a84f3bac62ffec1906795aedf425b55"
  //          },
  //          "dob":{
  //             "date":"1969-11-24T01:54:16Z",
  //             "age":49
  //          },
  //          "registered":{
  //             "date":"2006-10-30T22:41:41Z",
  //             "age":12
  //          },
  //          "phone":"015396 64778",
  //          "cell":"0736-588-740",
  //          "id":{
  //             "name":"NINO",
  //             "value":"OW 23 55 11 E"
  //          },
  //          "picture":{
  //             "large":"https://randomuser.me/api/portraits/men/31.jpg",
  //             "medium":"https://randomuser.me/api/portraits/med/men/31.jpg",
  //             "thumbnail":"https://randomuser.me/api/portraits/thumb/men/31.jpg"
  //          },
  //          "nat":"GB"
  // }]
  //   public person = {
  //         gender: "male",
  //         name: {
  //         title: "mr",
  //         first: "rolf",
  //         last: "hegdal"
  //       },
  //         location: {
  //         street: "ljan terrasse 346",
  //         city: "vear",
  //         state: "rogaland",
  //         postcode: "3095",
  //         coordinates: {
  //         latitude: "54.8646",
  //         longitude: "-97.3136"
  //         },
  //         timezone: {
  //         offset: "-10:00",
  //         description: "Hawaii"
  //         }
  //       },
  //         email: "rolf.hegdal@example.com",
  //         login: {
  //         uuid: "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
  //         username: "bluefrog786",
  //         password: "ingrid",
  //         salt: "GtRFz4NE",
  //         md5: "5c581c5748fc8c35bd7f16eac9efbb55",
  //         sha1: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
  //         sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
  //       },
  //         dob: {
  //         date: "1975-11-12T06:34:44Z",
  //         age: 42
  //       },
  //         registered: {
  //         date: "2015-11-04T22:09:36Z",
  //         age: 2
  //       },
  //         phone: "66976498",
  //         cell: "40652479",
  //         id: {
  //         name: "FN",
  //         value: "12117533881"
  //       },
  //         picture: {
  //         large: "https://randomuser.me/api/portraits/men/65.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
  //       },
  //       nat: "NO"
  //   }

  public people = [];
  public peopleAll = [];
  public page = 0;
  public genderType = "";
  public errorMessage: string;
  public reloadData = false;

  constructor(public navCtrl: NavController, public service: PeopleProvider, public actionSheetCtrl: ActionSheetController) {
    this.service.getPeopleFromApi()
      .subscribe(
        (response) => {
          console.log(response);
          this.people = response["results"]
          this.peopleAll = response["results"]
        },
        (error) => {
          console.log(error)
        }
      )
  }

  doRefresh(e) {
    this.service.getPeopleFromApi()
      .subscribe(
        (response) => {
          console.log(response);
          this.people = response["results"]
          e.complete()
        },
        (error) => {
          console.log(error)
          e.complete()
        }
      )
  }

  doInfinite(e) {
    this.service.getPeopleFromApi()
      .subscribe(
        data => this.people.push(...data["results"]),
        err => console.log(err),
        () => e.complete()
      )
  }


  toggleReloadData() {
    this.reloadData = !this.reloadData
  }

  pushPerson(user) {
    this.navCtrl.push(DetailContactPage, user)
  }

  searchPerson(e) {
    console.log(e.target.value)
    this.people = this.people.filter((person) => {
      return person.name.first.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ||
        person.name.last.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    })
    console.log(this.people)
  }

  actionFilter() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Filter your contact',
      buttons: [
        {
          text: 'Male',
          role: 'male',
          handler: () => {
            this.genderType = "male"
            this.page = 0
            this.service.getpeopleFilterGender(this.genderType, this.page)
              .subscribe(
                (response) => {
                  console.log(response);
                  this.people = response["results"]
                  this.peopleAll = this.people
                  this.page = this.page + 1
                },
                (error) => console.log(error))
          }
        }, {
          text: 'Female',
          role: 'female',
          handler: () => {
            this.genderType = "female"
            this.page = 0
            this.service.getpeopleFilterGender(this.genderType, this.page)
              .subscribe(
                (response) => {
                  console.log(response);
                  this.people = response["results"]
                  this.peopleAll = this.people
                  this.page = this.page + 1
                },
                (error) => console.log(error))
          }
        }, {
          text: 'No Filter',
          role: 'no filter',
          handler: () => {
            this.genderType = ""
            this.page = 0
            this.service.getpeopleFilterGender(this.genderType, this.page)
              .subscribe(
                (response) => {
                  console.log(response);
                  this.people = response["results"]
                  this.peopleAll = this.people
                  this.page = this.page + 1
                },
                (error) => console.log(error))
          }
        }
      ]
    });
    actionSheet.present();
  }

}

import * as angular from 'angular';

class PatientsController {
  constructor() {

  }
}

export const patients = {
  template: `
    <div class="container-fluid">
      <div class="row">
        <search-patient class="col-md-4"></search-patient>
         <patients-list class="col-md-8"></patients-list>
      </div>
    </div>
  `,
  controller: PatientsController
}

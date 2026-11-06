import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,Hi as ar,Hr as Me,Ja as vt,Li as ZO,Mi as Y$1,Mr as Jc,Ri as Zg,Vi as _u,Wt as bze,Xa as wn,Xt as ere,Yi as eF,ca as jk,da as kI,ea as ge,er as An,fi as Rb,gi as Tk,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,rt as Qae,ui as R,va as nk,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var oe=()=>({property:`name`});var ae=o=>[o];var re=()=>({name:`Jhon`});var U=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&_u(0,`po-dynamic-view`,0),a&2&&Rb(`p-fields`,Bk(3,ae,jk(2,oe)))(`p-value`,jk(5,re))},dependencies:[bze],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dynamic View Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return r.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dynamic-view-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+r.sampleCodeButtonIcon),Ig(),nm(` `,r.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,me,r.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,U],encapsulation:2,changeDetection:1})}return o})();var X=(()=>{class o{fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,divider:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]},{property:`hobbies`,label:`Hobbies`,gridColumns:12,divider:`Additional Information`}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`,hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-employee`]],standalone:!1,decls:2,vars:3,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`,`p-text-wrap`]],template:function(a,r){a&1&&(Jc(0,`po-page-default`,0),_u(1,`po-dynamic-view`,1),Zg()),a&2&&(Ig(),Rb(`p-fields`,r.fields)(`p-value`,r.employee)(`p-text-wrap`,!0))},dependencies:[bze,Tze],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o});var Q=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-employee-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dynamic View - Employee`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return r.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-employee',
  templateUrl: './sample-po-dynamic-view-employee.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewEmployeeComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      divider: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    },
    {
      property: 'hobbies',
      label: 'Hobbies',
      gridColumns: 12,
      divider: 'Additional Information'
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1',
    hobbies:
      'Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.\\n' +
      'Pr\xE1tica de corrida ao ar livre.\\n' +
      'Jogos de tabuleiro e videogames.\\n' +
      'Culin\xE1ria, especialmente cozinha italiana.'
  };
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dynamic-view-employee`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+r.sampleCodeButtonIcon),Ig(),nm(` `,r.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,se,r.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,X],encapsulation:2,changeDetection:1})}return o})();var F=(()=>{class o{httpClient=p(kI);headers=new wn({"X-PO-No-Message":`true`});url;filterParams;getObjectByValue(l,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(Y$1(r=>`items`in r?r.items:r))}setConfig(l,a){this.url=l,this.filterParams=a}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var K=(()=>{class o{employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`A`,wage:8000.5,availability:`Available`,cities:[{city:`São Paulo`,id:`SP`},{city:`Joinville`,id:`SC`},{city:`Belo Horizonte`,id:`MG`}],admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,profile:`admin`,image:`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`};fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`cities`,isArrayOrObject:!0,fieldLabel:`city`,fieldValue:`id`,concatLabelValue:!0},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`image`,divider:`Image`,image:!0,alt:`image`,height:`250`}];_newService=p(F);ngOnInit(){this._newService.setConfig(`https://po-sample-api.onrender.com/v1/hotels`,{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:`name`,divider:`Personal data by load customization`,order:1},{property:`cpf`,tag:!0,color:`color-07`,order:2},{property:`rg`,tag:!0,color:`color-07`,order:3},{property:`wage`,type:`string`,tag:!0,color:`color-07`},{property:`genre`,visible:!1},{property:`job`,tag:!1},{searchService:this._newService,fieldLabel:`address_city`,property:`city`}]}}checkProfile(){if(this.employee.profile===`admin`)return`confidential`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load`]],standalone:!1,features:[Me([F])],decls:2,vars:3,consts:[[`p-title`,`Employee on Load`],[3,`p-fields`,`p-load`,`p-value`]],template:function(a,r){a&1&&(Jc(0,`po-page-default`,0),_u(1,`po-dynamic-view`,1),Zg()),a&2&&(Ig(),Rb(`p-fields`,r.fields)(`p-load`,r.customEmployeeData.bind(r))(`p-value`,r.employee))},dependencies:[bze,Tze],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dynamic View - Employee on load`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return r.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';
import { SamplePoDynamicViewEmployeeOnLoadService } from './sample-po-dynamic-view-employee-on-load.service';

@Component({
  selector: 'sample-po-dynamic-view-employee-on-load',
  templateUrl: './sample-po-dynamic-view-employee-on-load.component.html',
  providers: [SamplePoDynamicViewEmployeeOnLoadService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewEmployeeOnLoadComponent implements OnInit {
  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'A',
    wage: 8000.5,
    availability: 'Available',
    cities: [
      {
        city: 'S\xE3o Paulo',
        id: 'SP'
      },
      {
        city: 'Joinville',
        id: 'SC'
      },
      {
        city: 'Belo Horizonte',
        id: 'MG'
      }
    ],
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    profile: 'admin',
    image: 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg'
  };

  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'cities', isArrayOrObject: true, fieldLabel: 'city', fieldValue: 'id', concatLabelValue: true },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    { property: 'image', divider: 'Image', image: true, alt: 'image', height: '250' }
  ];

  private _newService = inject(SamplePoDynamicViewEmployeeOnLoadService);

  ngOnInit(): void {
    this._newService.setConfig('https://po-sample-api.onrender.com/v1/hotels', { id: 1485976673002 });
  }

  customEmployeeData() {
    return {
      value: {
        cpf: this.checkProfile(),
        rg: this.checkProfile(),
        wage: this.checkProfile()
      },
      fields: [
        { property: 'name', divider: 'Personal data by load customization', order: 1 },
        { property: 'cpf', tag: true, color: 'color-07', order: 2 },
        { property: 'rg', tag: true, color: 'color-07', order: 3 },
        { property: 'wage', type: 'string', tag: true, color: 'color-07' },
        { property: 'genre', visible: false },
        { property: 'job', tag: false },
        {
          searchService: this._newService,
          fieldLabel: 'address_city',
          property: 'city'
        }
      ]
    };
  }

  private checkProfile(): string {
    if (this.employee.profile === 'admin') {
      return 'confidential';
    }
  }
}
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDynamicViewEmployeeOnLoadService {
  private httpClient = inject(HttpClient);

  readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-No-Message': 'true'
  });

  url: string;
  filterParams;

  getObjectByValue(value: string | Array<any>, filterParams?: any): Observable<Array<any> | { [key: string]: any }> {
    return this.httpClient
      .get(this.url, {
        headers: this.headers,
        params: this.filterParams
      })
      .pipe(map((response: any) => ('items' in response ? response.items : response)));
  }

  setConfig(url: string, filterParams) {
    this.url = url;
    this.filterParams = filterParams;
  }
}
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-dynamic-view-employee-on-load`),Zg(),_u(27,`hr`)),a&2&&(Ig(5),yk(`po-icon `+r.sampleCodeButtonIcon),Ig(),nm(` `,r.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ee,r.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,K],encapsulation:2,changeDetection:1})}return o})();var $=(()=>{class o{fields=[{property:`name`,container:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,container:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,container:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,container:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-container`]],standalone:!1,decls:2,vars:2,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&(Jc(0,`po-page-default`,0),_u(1,`po-dynamic-view`,1),Zg()),a&2&&(Ig(),Rb(`p-fields`,r.fields)(`p-value`,r.employee))},dependencies:[bze,Tze],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-container-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dynamic View - Employee on load`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return r.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-container',
  templateUrl: './sample-po-dynamic-view-container.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewContainerComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', container: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', container: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', container: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      container: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1'
  };
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dynamic-view-container`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+r.sampleCodeButtonIcon),Ig(),nm(` `,r.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ye,r.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,$],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-view-doc`]],standalone:!1,decls:1565,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewField[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`object`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`href`,`https://angular.io/api/common/CurrencyPipe`],[`href`,`https://angular.io/api/common/DatePipe`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<{`,`label:`,`string;`,`value:`,`string`],[`pan`,``,1,`docs-api-property-type`,`number;`,`}>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewRequest`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`]],template:function(a,r){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),Zg()(),_u(4,`div`,2),Jc(5,`h3`,3),Tk(6,`Componente`),Zg(),Jc(7,`h4`,4)(8,`code`,5),Tk(9,`PoDynamicViewComponent`),Zg()(),Jc(10,`div`,2)(11,`p`),Tk(12,`Componente para listar dados dinamicamente a partir de uma lista de objetos.`),Zg(),Jc(13,`blockquote`)(14,`p`),Tk(15,`Por padrão esse componente cria `),Jc(16,`code`),Tk(17,`po-info`),Zg(),Tk(18,` para exibição, é possível criar `),Jc(19,`code`),Tk(20,`po-tag`),Zg(),Tk(21,` passando a propriedade { tag: true }. `),Zg()()(),Jc(22,`div`,6)(23,`h4`,7),Tk(24,`Seletor`),Zg(),Jc(25,`pre`,8),Tk(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),Zg()(),Jc(27,`h4`,9),Tk(28,`Propriedades`),Zg(),Jc(29,`table`,10)(30,`tr`,11)(31,`th`,12),Tk(32,`Nome`),Zg(),Jc(33,`th`,12),Tk(34,`Tipo`),Zg(),Jc(35,`th`,12),Tk(36,`Padrão`),Zg(),Jc(37,`th`,12),Tk(38,`Descrição`),Zg()(),Jc(39,`tr`,13)(40,`td`,14)(41,`div`,15)(42,`span`,16),Tk(43,` p-components-size`),_u(44,`br`),Zg()()(),Jc(45,`td`,17)(46,`code`,18),Tk(47,`string`),Zg()(),Jc(48,`td`,19)(49,`p`)(50,`code`),Tk(51,`medium`),Zg()()(),Jc(52,`td`,20)(53,`em`)(54,`strong`),Tk(55,`(opcional)`),Zg()(),Jc(56,`p`),Tk(57,`Define o tamanho dos componentes no template entre `),Jc(58,`code`),Tk(59,`small`),Zg(),Tk(60,` ou `),Jc(61,`code`),Tk(62,`medium`),Zg(),Tk(63,`.`),Zg(),Jc(64,`blockquote`)(65,`p`),Tk(66,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(67,`code`),Tk(68,`medium`),Zg(),Tk(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(70,`a`,21),Tk(71,`po-theme`),Zg(),Tk(72,`.`),Zg()()()(),Jc(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),Tk(77,` p-fields`),_u(78,`br`),Zg()()(),Jc(79,`td`,17)(80,`code`,22),Tk(81,`PoDynamicViewField[]`),Zg()(),Jc(82,`td`,19)(83,`p`)(84,`code`),Tk(85,`[]`),Zg()()(),Jc(86,`td`,20)(87,`em`)(88,`strong`),Tk(89,`(opcional)`),Zg()(),Jc(90,`p`),Tk(91,`Lista de objetos que implementam a interface `),Jc(92,`code`),Tk(93,`PoDynamicView`),Zg(),Tk(94,`.`),Zg(),Jc(95,`blockquote`)(96,`p`),Tk(97,`Ex: `),Jc(98,`code`),Tk(99,`[ { property: 'age' } ]`),Zg()()(),Jc(100,`p`),Tk(101,`Regras de tipagem e formatação dos valores exibidos:`),Zg(),Jc(102,`ul`)(103,`li`),Tk(104,`Caso o `),Jc(105,`em`),Tk(106,`type`),Zg(),Tk(107,` informado seja `),Jc(108,`em`),Tk(109,`currency`),Zg(),Tk(110,` e não seja informado o `),Jc(111,`em`),Tk(112,`format`),Zg(),Tk(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),Zg(),Jc(114,`li`),Tk(115,`Caso o `),Jc(116,`em`),Tk(117,`type`),Zg(),Tk(118,` informado seja `),Jc(119,`em`),Tk(120,`date`),Zg(),Tk(121,` e não seja informado o `),Jc(122,`em`),Tk(123,`format`),Zg(),Tk(124,` o mesmo recebe 'dd/MM/yyyy' como formato padrão.`),Zg(),Jc(125,`li`),Tk(126,`Caso o `),Jc(127,`em`),Tk(128,`type`),Zg(),Tk(129,` informado seja `),Jc(130,`em`),Tk(131,`dateTime`),Zg(),Tk(132,` e não seja informado o `),Jc(133,`em`),Tk(134,`format`),Zg(),Tk(135,` o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padrão.`),Zg(),Jc(136,`li`),Tk(137,`Caso o `),Jc(138,`em`),Tk(139,`type`),Zg(),Tk(140,` informado seja `),Jc(141,`em`),Tk(142,`number`),Zg(),Tk(143,` e não seja informado o `),Jc(144,`em`),Tk(145,`format`),Zg(),Tk(146,` o mesmo não será formatado.`),Zg(),Jc(147,`li`),Tk(148,`Caso o `),Jc(149,`em`),Tk(150,`type`),Zg(),Tk(151,` informado seja `),Jc(152,`em`),Tk(153,`time`),Zg(),Tk(154,` e não seja informado o `),Jc(155,`em`),Tk(156,`format`),Zg(),Tk(157,` o mesmo recebe 'HH:mm:ss.ffffff' como formato padrão.`),Zg()(),Jc(158,`blockquote`)(159,`p`),Tk(160,`As propriedades informadas serão exibidas mesmo não contendo valor de referência no objeto da propriedade `),Jc(161,`code`),Tk(162,`p-value`),Zg(),Tk(163,`.`),Zg()()()(),Jc(164,`tr`,13)(165,`td`,14)(166,`div`,15)(167,`span`,16),Tk(168,` p-load`),_u(169,`br`),Zg()()(),Jc(170,`td`,17)(171,`code`,18),Tk(172,`string `),Zg(),Jc(173,`code`,23),Tk(174,` Function`),Zg()(),Jc(175,`td`,19),Tk(176,`-`),Zg(),Jc(177,`td`,20)(178,`em`)(179,`strong`),Tk(180,`(opcional)`),Zg()(),Jc(181,`p`),Tk(182,`Possibilita executar uma função quando o componente é inicializado.`),Zg(),Jc(183,`p`),Tk(184,`A propriedade aceita os seguintes tipos:`),Zg(),Jc(185,`ul`)(186,`li`)(187,`strong`),Tk(188,`String`),Zg(),Tk(189,`: Endpoint usado pelo componente para requisição via `),Jc(190,`code`),Tk(191,`POST`),Zg(),Tk(192,`.`),Zg(),Jc(193,`li`)(194,`strong`),Tk(195,`Function`),Zg(),Tk(196,`: Método que será executado na inicialização do componente.`),Zg()(),Jc(197,`p`),Tk(198,`Para os dois tipos de utilização da propriedade espera-se o seguinte retorno:`),Zg(),Jc(199,`pre`)(200,`code`),Tk(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),Zg()(),Jc(202,`blockquote`)(203,`p`)(204,`strong`),Tk(205,`value`),Zg(),Tk(206,`: any = atribui novo valor do model.`),Zg()(),Jc(207,`blockquote`)(208,`p`)(209,`strong`),Tk(210,`fields`),Zg(),Tk(211,`: `),Jc(212,`code`),Tk(213,`Array<PoDynamicViewField>`),Zg(),Tk(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),Zg()(),Jc(215,`ul`)(216,`li`),Tk(217,`Para esconder/remover campos precisa informar no field a propriedade `),Jc(218,`code`),Tk(219,`visible = false`),Zg(),Tk(220,`.`),Zg()()()(),Jc(221,`tr`,13)(222,`td`,14)(223,`div`,15)(224,`span`,16),Tk(225,` p-show-all-value`),_u(226,`br`),Zg()()(),Jc(227,`td`,17)(228,`code`,24),Tk(229,`boolean`),Zg()(),Jc(230,`td`,19)(231,`p`)(232,`code`),Tk(233,`false`),Zg()()(),Jc(234,`td`,20)(235,`em`)(236,`strong`),Tk(237,`(opcional)`),Zg()(),Jc(238,`p`),Tk(239,`Indica se exibirá todas as informações contidas dentro do objeto informado na propriedade `),Jc(240,`code`),Tk(241,`p-value`),Zg(),Tk(242,`.`),Zg()()(),Jc(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),Tk(247,` p-text-wrap`),_u(248,`br`),Zg()()(),Jc(249,`td`,17)(250,`code`,24),Tk(251,`boolean`),Zg()(),Jc(252,`td`,19)(253,`p`)(254,`code`),Tk(255,`false`),Zg()()(),Jc(256,`td`,20)(257,`em`)(258,`strong`),Tk(259,`(opcional)`),Zg()(),Jc(260,`p`),Tk(261,`Permite a quebra de linha no texto do `),Jc(262,`code`),Tk(263,`p-value`),Zg(),Tk(264,`, aplicando-a onde há `),Jc(265,`code`),Tk(266,`\\n`),Zg(),Tk(267,`.`),Zg(),Jc(268,`pre`)(269,`code`),Tk(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),Zg()(),Jc(271,`p`),Tk(272,`Saída:`),Zg(),Jc(273,`pre`)(274,`code`),Tk(275,`Primeira linha
Segunda linha
`),Zg()()()(),Jc(276,`tr`,13)(277,`td`,14)(278,`div`,15)(279,`span`,16),Tk(280,` p-value`),_u(281,`br`),Zg()()(),Jc(282,`td`,17)(283,`code`,25),Tk(284,`object`),Zg()(),Jc(285,`td`,19),Tk(286,`-`),Zg(),Jc(287,`td`,20)(288,`p`),Tk(289,`Objeto que será utilizado para exibir as informações dinâmicas, o valor será recuperado através do atributo `),Jc(290,`em`),Tk(291,`property`),Zg(),Tk(292,`
dos objetos contidos na propridade `),Jc(293,`code`),Tk(294,`p-fields`),Zg(),Tk(295,`.`),Zg(),Jc(296,`blockquote`)(297,`p`),Tk(298,`Ex: `),Jc(299,`code`),Tk(300,`{ age: '35' }`),Zg()()()()()(),Jc(301,`h3`),Tk(302,`Interfaces`),Zg(),Jc(303,`h4`,26)(304,`code`,5),Tk(305,`PoDynamicViewRequest`),Zg()(),Jc(306,`div`,2)(307,`p`),Tk(308,`Define o tipo de busca customizada para um campo em específico.`),Zg()(),Jc(309,`h4`,9),Tk(310,`Métodos`),Zg(),Jc(311,`table`,27)(312,`tr`,13)(313,`th`,28)(314,`div`,15)(315,`h4`)(316,`span`,16),Tk(317,` getObjectByValue `),Zg()()()()(),Jc(318,`tr`,20)(319,`td`,20)(320,`p`),Tk(321,`Método responsável por enviar um valor que será buscado no serviço.`),Zg()()()(),Jc(322,`h5`)(323,`b`),Tk(324,`Parâmetros`),Zg()(),Jc(325,`table`,10)(326,`tr`,11)(327,`th`,12),Tk(328,`Nome`),Zg(),Jc(329,`th`,12),Tk(330,`Tipo`),Zg(),Jc(331,`th`,12),Tk(332,`Descrição`),Zg()(),Jc(333,`tr`,13)(334,`td`,14),Tk(335,` value`),Zg(),Jc(336,`td`,17)(337,`code`,18),Tk(338,` string `),Zg(),Jc(339,`code`,29),Tk(340,` Array<any> `),Zg()(),Jc(341,`td`,20)(342,`p`),Tk(343,`Valor único a ser buscado na fonte de dados.`),Zg()()(),Jc(344,`tr`,13)(345,`td`,14),Tk(346,` filterParams`),Zg(),Jc(347,`td`,17)(348,`code`,30),Tk(349,` any `),Zg()(),Jc(350,`td`,20)(351,`p`),Tk(352,`Valor opcional para informar filtros customizados.`),Zg()()()(),_u(353,`br`),Jc(354,`h4`,26)(355,`code`,5),Tk(356,`PoDynamicViewField`),Zg()(),Jc(357,`div`,2)(358,`p`),Tk(359,` Interface para definição das propriedades dos campos de visualização que serão criados dinamicamente.`),Zg()(),Jc(360,`h4`,9),Tk(361,`Propriedades`),Zg(),Jc(362,`table`,10)(363,`tr`,11)(364,`th`,12),Tk(365,`Nome`),Zg(),Jc(366,`th`,12),Tk(367,`Tipo`),Zg(),Jc(368,`th`,12),Tk(369,`Descrição`),Zg()(),Jc(370,`tr`,13)(371,`td`,14)(372,`div`,15)(373,`span`,16),Tk(374,` alt`),_u(375,`br`),Zg()()(),Jc(376,`td`,17)(377,`code`,18),Tk(378,`string`),Zg()(),Jc(379,`td`,20)(380,`em`)(381,`strong`),Tk(382,`(opcional)`),Zg()(),Jc(383,`p`),Tk(384,`Defini o texto alternativo descrevendo a imagem.`),Zg(),Jc(385,`p`),Tk(386,`Exemplo de utilização:`),Zg(),Jc(387,`pre`)(388,`code`),Tk(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),Zg()(),Jc(390,`p`)(391,`strong`),Tk(392,`Componentes compatíveis:`),Zg(),Jc(393,`code`),Tk(394,`po-image`),Zg(),Tk(395,`.`),Zg()()(),Jc(396,`tr`,13)(397,`td`,14)(398,`div`,15)(399,`span`,16),Tk(400,` booleanFalse`),_u(401,`br`),Zg()()(),Jc(402,`td`,17)(403,`code`,18),Tk(404,`string`),Zg()(),Jc(405,`td`,20)(406,`em`)(407,`strong`),Tk(408,`(opcional)`),Zg()(),Jc(409,`p`),Tk(410,`Texto exibido quando o valor do componente for `),Jc(411,`em`),Tk(412,`false`),Zg(),Tk(413,`.`),Zg()()(),Jc(414,`tr`,13)(415,`td`,14)(416,`div`,15)(417,`span`,16),Tk(418,` booleanTrue`),_u(419,`br`),Zg()()(),Jc(420,`td`,17)(421,`code`,18),Tk(422,`string`),Zg()(),Jc(423,`td`,20)(424,`em`)(425,`strong`),Tk(426,`(opcional)`),Zg()(),Jc(427,`p`),Tk(428,`Texto exibido quando o valor do componente for `),Jc(429,`em`),Tk(430,`true`),Zg(),Tk(431,`.`),Zg()()(),Jc(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),Tk(436,` color`),_u(437,`br`),Zg()()(),Jc(438,`td`,17)(439,`code`,18),Tk(440,`string`),Zg()(),Jc(441,`td`,20)(442,`em`)(443,`strong`),Tk(444,`(opcional)`),Zg()(),Jc(445,`p`),Tk(446,`Determina a cor da tag. As maneiras de customizar as cores são:`),Zg(),Jc(447,`ul`)(448,`li`),Tk(449,`Hexadeximal, por exemplo `),Jc(450,`code`),Tk(451,`#c64840`),Zg(),Tk(452,`;`),Zg(),Jc(453,`li`),Tk(454,`RGB, como `),Jc(455,`code`),Tk(456,`rgb(0, 0, 165)`),Zg(),Tk(457,`;`),Zg(),Jc(458,`li`),Tk(459,`O nome da cor, por exemplo `),Jc(460,`code`),Tk(461,`blue`),Zg(),Tk(462,`;`),Zg(),Jc(463,`li`),Tk(464,`Usando uma das cores do tema do PO:`),Zg(),Jc(465,`li`),Tk(466,`Valores válidos:`),Jc(467,`ul`)(468,`li`),_u(469,`span`,31),Jc(470,`code`),Tk(471,`color-01`),Zg()(),Jc(472,`li`),_u(473,`span`,32),Jc(474,`code`),Tk(475,`color-02`),Zg()(),Jc(476,`li`),_u(477,`span`,33),Jc(478,`code`),Tk(479,`color-03`),Zg()(),Jc(480,`li`),_u(481,`span`,34),Jc(482,`code`),Tk(483,`color-04`),Zg()(),Jc(484,`li`),_u(485,`span`,35),Jc(486,`code`),Tk(487,`color-05`),Zg()(),Jc(488,`li`),_u(489,`span`,36),Jc(490,`code`),Tk(491,`color-06`),Zg()(),Jc(492,`li`),_u(493,`span`,37),Jc(494,`code`),Tk(495,`color-07`),Zg()(),Jc(496,`li`),_u(497,`span`,38),Jc(498,`code`),Tk(499,`color-08`),Zg()(),Jc(500,`li`),_u(501,`span`,39),Jc(502,`code`),Tk(503,`color-09`),Zg()(),Jc(504,`li`),_u(505,`span`,40),Jc(506,`code`),Tk(507,`color-10`),Zg()(),Jc(508,`li`),_u(509,`span`,41),Jc(510,`code`),Tk(511,`color-11`),Zg()(),Jc(512,`li`),_u(513,`span`,42),Jc(514,`code`),Tk(515,`color-12`),Zg()()()()()()(),Jc(516,`tr`,13)(517,`td`,14)(518,`div`,15)(519,`span`,16),Tk(520,` concatLabelValue`),_u(521,`br`),Zg()()(),Jc(522,`td`,17)(523,`code`,24),Tk(524,`boolean`),Zg()(),Jc(525,`td`,20)(526,`em`)(527,`strong`),Tk(528,`(opcional)`),Zg()(),Jc(529,`p`),Tk(530,`Permite que seja exibido em tela, de forma concatenada as propriedades `),Jc(531,`code`),Tk(532,`fieldLabel`),Zg(),Tk(533,` + `),Jc(534,`code`),Tk(535,`fieldValue`),Zg(),Tk(536,`.
A ordem sempre ser\xE1 `),Jc(537,`code`),Tk(538,`fieldLabel`),Zg(),Tk(539,` e depois `),Jc(540,`code`),Tk(541,`fieldValue`),Zg(),Tk(542,`, não sendo possível alterar.`),Zg(),Jc(543,`blockquote`)(544,`p`),Tk(545,`Propriedade funciona corretamente caso as propriedades `),Jc(546,`code`),Tk(547,`fieldLabel`),Zg(),Tk(548,` e `),Jc(549,`code`),Tk(550,`fielValue`),Zg(),Tk(551,` sejam válidas.`),Zg()()()(),Jc(552,`tr`,13)(553,`td`,14)(554,`div`,15)(555,`span`,16),Tk(556,` container`),_u(557,`br`),Zg()()(),Jc(558,`td`,17)(559,`code`,18),Tk(560,`string`),Zg()(),Jc(561,`td`,20)(562,`em`)(563,`strong`),Tk(564,`(opcional)`),Zg()(),Jc(565,`p`),Tk(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),Zg(),Jc(567,`p`),Tk(568,`Está propriedade é do tipo string, o valor que será titulo do contianer`),Zg()()(),Jc(569,`tr`,13)(570,`td`,14)(571,`div`,15)(572,`span`,16),Tk(573,` divider`),_u(574,`br`),Zg()()(),Jc(575,`td`,17)(576,`code`,18),Tk(577,`string`),Zg()(),Jc(578,`td`,20)(579,`em`)(580,`strong`),Tk(581,`(opcional)`),Zg()(),Jc(582,`p`),Tk(583,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),Zg()()(),Jc(584,`tr`,13)(585,`td`,14)(586,`div`,15)(587,`span`,16),Tk(588,` fieldLabel`),_u(589,`br`),Zg()()(),Jc(590,`td`,17)(591,`code`,18),Tk(592,`string`),Zg()(),Jc(593,`td`,20)(594,`em`)(595,`strong`),Tk(596,`(opcional)`),Zg()(),Jc(597,`p`),Tk(598,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),Zg(),Jc(599,`p`),Tk(600,`O valor padrão é: `),Jc(601,`code`),Tk(602,`label`),Zg(),Tk(603,`.`),Zg()()(),Jc(604,`tr`,13)(605,`td`,14)(606,`div`,15)(607,`span`,16),Tk(608,` fieldValue`),_u(609,`br`),Zg()()(),Jc(610,`td`,17)(611,`code`,18),Tk(612,`string`),Zg()(),Jc(613,`td`,20)(614,`em`)(615,`strong`),Tk(616,`(opcional)`),Zg()(),Jc(617,`p`),Tk(618,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),Zg(),Jc(619,`p`),Tk(620,`O valor padrão é: `),Jc(621,`code`),Tk(622,`value`),Zg(),Tk(623,`.`),Zg()()(),Jc(624,`tr`,13)(625,`td`,14)(626,`div`,15)(627,`span`,16),Tk(628,` format`),_u(629,`br`),Zg()()(),Jc(630,`td`,17)(631,`code`,18),Tk(632,`string `),Zg(),Jc(633,`code`,43),Tk(634,` Array<string>`),Zg()(),Jc(635,`td`,20)(636,`em`)(637,`strong`),Tk(638,`(opcional)`),Zg()(),Jc(639,`p`),Tk(640,`Define o formato de exibição para o valor de um campo.`),Zg(),Jc(641,`ul`)(642,`li`)(643,`p`),Tk(644,`Quando `),Jc(645,`code`),Tk(646,`format`),Zg(),Tk(647,` é uma `),Jc(648,`code`),Tk(649,`string`),Zg(),Tk(650,`, o formato aplicado depende da propriedade `),Jc(651,`strong`),Tk(652,`type`),Zg(),Tk(653,` segue como usar cada tipo:`),Zg(),Jc(654,`ul`)(655,`li`)(656,`code`),Tk(657,`currency`),Zg(),Tk(658,`: Utiliza códigos de moeda definidos pelo `),Jc(659,`a`,44),Tk(660,`CurrencyPipe`),Zg(),Tk(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),Zg(),Jc(662,`li`)(663,`code`),Tk(664,`date`),Zg(),Tk(665,`: Adota formatos de data especificados pelo `),Jc(666,`a`,45),Tk(667,`DatePipe`),Zg(),Tk(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),Zg(),Jc(669,`li`)(670,`code`),Tk(671,`time`),Zg(),Tk(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),Zg(),Jc(673,`li`)(674,`code`),Tk(675,`number`),Zg(),Tk(676,`: Usa especificações do `),Jc(677,`a`,46),Tk(678,`DecimalPipe`),Zg(),Tk(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Jc(680,`code`),Tk(681,`50`),Zg(),Tk(682,`, formato `),Jc(683,`code`),Tk(684,`'1.2-5'`),Zg(),Tk(685,`, resulta em `),Jc(686,`code`),Tk(687,`50.00`),Zg(),Tk(688,`.`),Zg()()(),Jc(689,`li`)(690,`p`),Tk(691,`Quando `),Jc(692,`code`),Tk(693,`format`),Zg(),Tk(694,` é um `),Jc(695,`code`),Tk(696,`Array<string>`),Zg(),Tk(697,`:`),Zg(),Jc(698,`ul`)(699,`li`),Tk(700,`Cada elemento do array representa uma propriedade do objeto.`),Zg(),Jc(701,`li`),Tk(702,`Os valores dessas propriedades são concatenados, separados pelo padrão ' - '.`),Zg(),Jc(703,`li`),Tk(704,`Exemplo: Para `),Jc(705,`code`),Tk(706,`format: ["id", "name"]`),Zg(),Tk(707,` e um objeto `),Jc(708,`code`),Tk(709,`{ id: 1, name: 'Carlos Diego' }`),Zg(),Tk(710,`,
o resultado ser\xE1 `),Jc(711,`code`),Tk(712,`'1 - Carlos Diego'`),Zg(),Tk(713,`.`),Zg()()()()()(),Jc(714,`tr`,13)(715,`td`,14)(716,`div`,15)(717,`span`,16),Tk(718,` gridColumns`),_u(719,`br`),Zg()()(),Jc(720,`td`,17)(721,`code`,47),Tk(722,`number`),Zg()(),Jc(723,`td`,20)(724,`em`)(725,`strong`),Tk(726,`(opcional)`),Zg()(),Jc(727,`p`),Tk(728,`Tamanho de exibição do campo em telas.`),Zg(),Jc(729,`p`),Tk(730,`Deve ser usado o sistema de `),Jc(731,`strong`),Tk(732,`grid`),Zg(),Tk(733,` do PO (1 ... 12 colunas).`),Zg(),Jc(734,`blockquote`)(735,`p`),Tk(736,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),Zg()()()(),Jc(737,`tr`,13)(738,`td`,14)(739,`div`,15)(740,`span`,16),Tk(741,` gridLgColumns`),_u(742,`br`),Zg()()(),Jc(743,`td`,17)(744,`code`,47),Tk(745,`number`),Zg()(),Jc(746,`td`,20)(747,`em`)(748,`strong`),Tk(749,`(opcional)`),Zg()(),Jc(750,`p`),Tk(751,`Tamanho de exibição do campo em telas grandes (lg).`),Zg(),Jc(752,`p`),Tk(753,`Deve ser usado o sistema de `),Jc(754,`strong`),Tk(755,`grid`),Zg(),Tk(756,` do PO (1 ... 12 colunas).`),Zg(),Jc(757,`blockquote`)(758,`p`),Tk(759,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(760,`code`),Tk(761,`gridColumns`),Zg(),Tk(762,`.`),Zg()()()(),Jc(763,`tr`,13)(764,`td`,14)(765,`div`,15)(766,`span`,16),Tk(767,` gridLgPull`),_u(768,`br`),Zg()()(),Jc(769,`td`,17)(770,`code`,47),Tk(771,`number`),Zg()(),Jc(772,`td`,20)(773,`em`)(774,`strong`),Tk(775,`(opcional)`),Zg()(),Jc(776,`p`),Tk(777,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),Zg(),Jc(778,`p`),Tk(779,`Deve ser usado o sistema de `),Jc(780,`strong`),Tk(781,`grid`),Zg(),Tk(782,` do PO (1 ... 11 colunas).`),Zg(),Jc(783,`blockquote`)(784,`p`),Tk(785,`Esta propriedade não funciona com a propriedade `),Jc(786,`code`),Tk(787,`gridColumns`),Zg(),Tk(788,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(789,`tr`,13)(790,`td`,14)(791,`div`,15)(792,`span`,16),Tk(793,` gridMdColumns`),_u(794,`br`),Zg()()(),Jc(795,`td`,17)(796,`code`,47),Tk(797,`number`),Zg()(),Jc(798,`td`,20)(799,`em`)(800,`strong`),Tk(801,`(opcional)`),Zg()(),Jc(802,`p`),Tk(803,`Tamanho de exibição do campo em telas médias (md).`),Zg(),Jc(804,`p`),Tk(805,`Deve ser usado o sistema de `),Jc(806,`strong`),Tk(807,`grid`),Zg(),Tk(808,` do PO (1 ... 12 colunas).`),Zg(),Jc(809,`blockquote`)(810,`p`),Tk(811,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(812,`code`),Tk(813,`gridColumns`),Zg(),Tk(814,`.`),Zg()()()(),Jc(815,`tr`,13)(816,`td`,14)(817,`div`,15)(818,`span`,16),Tk(819,` gridMdPull`),_u(820,`br`),Zg()()(),Jc(821,`td`,17)(822,`code`,47),Tk(823,`number`),Zg()(),Jc(824,`td`,20)(825,`em`)(826,`strong`),Tk(827,`(opcional)`),Zg()(),Jc(828,`p`),Tk(829,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),Zg(),Jc(830,`p`),Tk(831,`Deve ser usado o sistema de `),Jc(832,`strong`),Tk(833,`grid`),Zg(),Tk(834,` do PO (1 ... 11 colunas).`),Zg(),Jc(835,`blockquote`)(836,`p`),Tk(837,`Esta propriedade não funciona com a propriedade `),Jc(838,`code`),Tk(839,`gridColumns`),Zg(),Tk(840,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(841,`tr`,13)(842,`td`,14)(843,`div`,15)(844,`span`,16),Tk(845,` gridSmColumns`),_u(846,`br`),Zg()()(),Jc(847,`td`,17)(848,`code`,47),Tk(849,`number`),Zg()(),Jc(850,`td`,20)(851,`em`)(852,`strong`),Tk(853,`(opcional)`),Zg()(),Jc(854,`p`),Tk(855,`Tamanho de exibição do campo em telas menores (sm).`),Zg(),Jc(856,`p`),Tk(857,`Deve ser usado o sistema de `),Jc(858,`strong`),Tk(859,`grid`),Zg(),Tk(860,` do PO (1 ... 12 colunas).`),Zg(),Jc(861,`blockquote`)(862,`p`),Tk(863,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(864,`code`),Tk(865,`gridColumns`),Zg(),Tk(866,`.`),Zg()()()(),Jc(867,`tr`,13)(868,`td`,14)(869,`div`,15)(870,`span`,16),Tk(871,` gridSmPull`),_u(872,`br`),Zg()()(),Jc(873,`td`,17)(874,`code`,47),Tk(875,`number`),Zg()(),Jc(876,`td`,20)(877,`em`)(878,`strong`),Tk(879,`(opcional)`),Zg()(),Jc(880,`p`),Tk(881,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),Zg(),Jc(882,`p`),Tk(883,`Deve ser usado o sistema de `),Jc(884,`strong`),Tk(885,`grid`),Zg(),Tk(886,` do PO (1 ... 11 colunas).`),Zg(),Jc(887,`blockquote`)(888,`p`),Tk(889,`Esta propriedade não funciona com a propriedade `),Jc(890,`code`),Tk(891,`gridColumns`),Zg(),Tk(892,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(893,`tr`,13)(894,`td`,14)(895,`div`,15)(896,`span`,16),Tk(897,` gridXlColumns`),_u(898,`br`),Zg()()(),Jc(899,`td`,17)(900,`code`,47),Tk(901,`number`),Zg()(),Jc(902,`td`,20)(903,`em`)(904,`strong`),Tk(905,`(opcional)`),Zg()(),Jc(906,`p`),Tk(907,`Tamanho de exibição do campo em telas extra grandes (xl).`),Zg(),Jc(908,`p`),Tk(909,`Deve ser usado o sistema de `),Jc(910,`strong`),Tk(911,`grid`),Zg(),Tk(912,` do PO (1 ... 12 colunas).`),Zg(),Jc(913,`blockquote`)(914,`p`),Tk(915,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(916,`code`),Tk(917,`gridColumns`),Zg(),Tk(918,`.`),Zg()()()(),Jc(919,`tr`,13)(920,`td`,14)(921,`div`,15)(922,`span`,16),Tk(923,` gridXlPull`),_u(924,`br`),Zg()()(),Jc(925,`td`,17)(926,`code`,47),Tk(927,`number`),Zg()(),Jc(928,`td`,20)(929,`em`)(930,`strong`),Tk(931,`(opcional)`),Zg()(),Jc(932,`p`),Tk(933,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),Zg(),Jc(934,`p`),Tk(935,`Deve ser usado o sistema de `),Jc(936,`strong`),Tk(937,`grid`),Zg(),Tk(938,` do PO (1 ... 11 colunas).`),Zg(),Jc(939,`blockquote`)(940,`p`),Tk(941,`Esta propriedade não funciona com a propriedade `),Jc(942,`code`),Tk(943,`gridColumns`),Zg(),Tk(944,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(945,`tr`,13)(946,`td`,14)(947,`div`,15)(948,`span`,16),Tk(949,` height`),_u(950,`br`),Zg()()(),Jc(951,`td`,17)(952,`code`,18),Tk(953,`string`),Zg()(),Jc(954,`td`,20)(955,`em`)(956,`strong`),Tk(957,`(opcional)`),Zg()(),Jc(958,`p`),Tk(959,`Defini o texto alternativo descrevendo a imagem.`),Zg(),Jc(960,`p`),Tk(961,`Exemplo de utilização:`),Zg(),Jc(962,`pre`)(963,`code`),Tk(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),Zg()(),Jc(965,`p`)(966,`strong`),Tk(967,`Componentes compatíveis:`),Zg(),Jc(968,`code`),Tk(969,`po-image`),Zg(),Tk(970,`.`),Zg()()(),Jc(971,`tr`,13)(972,`td`,14)(973,`div`,15)(974,`span`,16),Tk(975,` icon`),_u(976,`br`),Zg()()(),Jc(977,`td`,17)(978,`code`,18),Tk(979,`string`),Zg()(),Jc(980,`td`,20)(981,`em`)(982,`strong`),Tk(983,`(opcional)`),Zg()(),Jc(984,`p`),Tk(985,`Define um ícone que será exibido ao lado do valor para o campo do tipo `),Jc(986,`em`),Tk(987,`tag`),Zg(),Tk(988,`.`),Zg(),Jc(989,`blockquote`)(990,`p`),Tk(991,`Veja os valores válidos na `),Jc(992,`a`,48),Tk(993,`biblioteca de ícones`),Zg(),Tk(994,`.`),Zg()()()(),Jc(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),Tk(999,` image`),_u(1e3,`br`),Zg()()(),Jc(1001,`td`,17)(1002,`code`,24),Tk(1003,`boolean`),Zg()(),Jc(1004,`td`,20)(1005,`em`)(1006,`strong`),Tk(1007,`(opcional)`),Zg()(),Jc(1008,`p`),Tk(1009,`Possibilita a utilização de imagem.`),Zg(),Jc(1010,`p`),Tk(1011,`Exemplo de utilização:`),Zg(),Jc(1012,`pre`)(1013,`code`),Tk(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),Zg()(),Jc(1015,`ul`)(1016,`li`),Tk(1017,`@default `),Jc(1018,`code`),Tk(1019,`false`),Zg()()(),Jc(1020,`p`)(1021,`strong`),Tk(1022,`Componentes compatíveis:`),Zg(),Jc(1023,`code`),Tk(1024,`po-image`),Zg(),Tk(1025,`.`),Zg()()(),Jc(1026,`tr`,13)(1027,`td`,14)(1028,`div`,15)(1029,`span`,16),Tk(1030,` isArrayOrObject`),_u(1031,`br`),Zg()()(),Jc(1032,`td`,17)(1033,`code`,24),Tk(1034,`boolean`),Zg()(),Jc(1035,`td`,20)(1036,`em`)(1037,`strong`),Tk(1038,`(opcional)`),Zg()(),Jc(1039,`p`),Tk(1040,`Define que a propriedade `),Jc(1041,`code`),Tk(1042,`property`),Zg(),Tk(1043,` é uma lista ou um objeto.`),Zg(),Jc(1044,`blockquote`)(1045,`p`),Tk(1046,`Por padrão, espera-se que a lista ou o objeto esteja com as propriedades `),Jc(1047,`code`),Tk(1048,`label`),Zg(),Tk(1049,` e `),Jc(1050,`code`),Tk(1051,`value`),Zg(),Tk(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Jc(1053,`code`),Tk(1054,`fieldLabel`),Zg(),Tk(1055,` e `),Jc(1056,`code`),Tk(1057,`fieldValue`),Zg(),Tk(1058,`.
\xC9 ignorada caso a propriedade `),Jc(1059,`code`),Tk(1060,`searchService`),Zg(),Tk(1061,` esteja sendo utilizada.`),Zg()()()(),Jc(1062,`tr`,13)(1063,`td`,14)(1064,`div`,15)(1065,`span`,16),Tk(1066,` key`),_u(1067,`br`),Zg()()(),Jc(1068,`td`,17)(1069,`code`,24),Tk(1070,`boolean`),Zg()(),Jc(1071,`td`,20)(1072,`em`)(1073,`strong`),Tk(1074,`(opcional)`),Zg()(),Jc(1075,`p`),Tk(1076,`Identificador`),Zg()()(),Jc(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),Tk(1081,` label`),_u(1082,`br`),Zg()()(),Jc(1083,`td`,17)(1084,`code`,18),Tk(1085,`string`),Zg()(),Jc(1086,`td`,20)(1087,`em`)(1088,`strong`),Tk(1089,`(opcional)`),Zg()(),Jc(1090,`p`),Tk(1091,`Rótulo do campo exibido.`),Zg(),Jc(1092,`p`),Tk(1093,`Caso não seja informado, será utilizado como `),Jc(1094,`code`),Tk(1095,`label`),Zg(),Tk(1096,` o valor da propriedade `),Jc(1097,`code`),Tk(1098,`property`),Zg(),Tk(1099,` com a primeira letra em maiúsculo.`),Zg()()(),Jc(1100,`tr`,13)(1101,`td`,14)(1102,`div`,15)(1103,`span`,16),Tk(1104,` offsetColumns`),_u(1105,`br`),Zg()()(),Jc(1106,`td`,17)(1107,`code`,47),Tk(1108,`number`),Zg()(),Jc(1109,`td`,20)(1110,`em`)(1111,`strong`),Tk(1112,`(opcional)`),Zg()(),Jc(1113,`p`),Tk(1114,`Tamanho do espaço de exibição do campo em telas.`),Zg(),Jc(1115,`p`),Tk(1116,`Deve ser usado o sistema de `),Jc(1117,`strong`),Tk(1118,`grid`),Zg(),Tk(1119,` do PO (1 ... 12 colunas).`),Zg(),Jc(1120,`blockquote`)(1121,`p`),Tk(1122,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),Zg()()()(),Jc(1123,`tr`,13)(1124,`td`,14)(1125,`div`,15)(1126,`span`,16),Tk(1127,` offsetLgColumns`),_u(1128,`br`),Zg()()(),Jc(1129,`td`,17)(1130,`code`,47),Tk(1131,`number`),Zg()(),Jc(1132,`td`,20)(1133,`em`)(1134,`strong`),Tk(1135,`(opcional)`),Zg()(),Jc(1136,`p`),Tk(1137,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),Zg(),Jc(1138,`p`),Tk(1139,`Deve ser usado o sistema de `),Jc(1140,`strong`),Tk(1141,`grid`),Zg(),Tk(1142,` do PO (1 ... 12 colunas).`),Zg(),Jc(1143,`blockquote`)(1144,`p`),Tk(1145,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(1146,`code`),Tk(1147,`offsetColumns`),Zg(),Tk(1148,`.`),Zg()()()(),Jc(1149,`tr`,13)(1150,`td`,14)(1151,`div`,15)(1152,`span`,16),Tk(1153,` offsetMdColumns`),_u(1154,`br`),Zg()()(),Jc(1155,`td`,17)(1156,`code`,47),Tk(1157,`number`),Zg()(),Jc(1158,`td`,20)(1159,`em`)(1160,`strong`),Tk(1161,`(opcional)`),Zg()(),Jc(1162,`p`),Tk(1163,`Tamanho do espaço de exibição do campo em telas médias (md).`),Zg(),Jc(1164,`p`),Tk(1165,`Deve ser usado o sistema de `),Jc(1166,`strong`),Tk(1167,`grid`),Zg(),Tk(1168,` do PO (1 ... 12 colunas).`),Zg(),Jc(1169,`blockquote`)(1170,`p`),Tk(1171,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(1172,`code`),Tk(1173,`offsetColumns`),Zg(),Tk(1174,`.`),Zg()()()(),Jc(1175,`tr`,13)(1176,`td`,14)(1177,`div`,15)(1178,`span`,16),Tk(1179,` offsetSmColumns`),_u(1180,`br`),Zg()()(),Jc(1181,`td`,17)(1182,`code`,47),Tk(1183,`number`),Zg()(),Jc(1184,`td`,20)(1185,`em`)(1186,`strong`),Tk(1187,`(opcional)`),Zg()(),Jc(1188,`p`),Tk(1189,`Tamanho do espaço de exibição do campo em telas menores (sm).`),Zg(),Jc(1190,`p`),Tk(1191,`Deve ser usado o sistema de `),Jc(1192,`strong`),Tk(1193,`grid`),Zg(),Tk(1194,` do PO (1 ... 12 colunas).`),Zg(),Jc(1195,`blockquote`)(1196,`p`),Tk(1197,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(1198,`code`),Tk(1199,`offsetColumns`),Zg(),Tk(1200,`.`),Zg()()()(),Jc(1201,`tr`,13)(1202,`td`,14)(1203,`div`,15)(1204,`span`,16),Tk(1205,` offsetXlColumns`),_u(1206,`br`),Zg()()(),Jc(1207,`td`,17)(1208,`code`,47),Tk(1209,`number`),Zg()(),Jc(1210,`td`,20)(1211,`em`)(1212,`strong`),Tk(1213,`(opcional)`),Zg()(),Jc(1214,`p`),Tk(1215,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),Zg(),Jc(1216,`p`),Tk(1217,`Deve ser usado o sistema de `),Jc(1218,`strong`),Tk(1219,`grid`),Zg(),Tk(1220,` do PO (1 ... 12 colunas).`),Zg(),Jc(1221,`blockquote`)(1222,`p`),Tk(1223,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(1224,`code`),Tk(1225,`offsetColumns`),Zg(),Tk(1226,`.`),Zg()()()(),Jc(1227,`tr`,13)(1228,`td`,14)(1229,`div`,15)(1230,`span`,16),Tk(1231,` options`),_u(1232,`br`),Zg()()(),Jc(1233,`td`,17)(1234,`code`,49),Tk(1235,`Array<{ label: string; value: string `),Zg(),Jc(1236,`code`,50),Tk(1237,` number;
}>`),Zg()(),Jc(1238,`td`,20)(1239,`em`)(1240,`strong`),Tk(1241,`(opcional)`),Zg()(),Jc(1242,`p`),Tk(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),Zg(),Jc(1244,`p`),Tk(1245,`Exemplo de utilização:`),Zg(),Jc(1246,`pre`)(1247,`code`),Tk(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),Zg()(),Jc(1249,`pre`)(1250,`code`),Tk(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),Zg()()()(),Jc(1252,`tr`,13)(1253,`td`,14)(1254,`div`,15)(1255,`span`,16),Tk(1256,` optionsMulti`),_u(1257,`br`),Zg()()(),Jc(1258,`td`,17)(1259,`code`,24),Tk(1260,`boolean`),Zg()(),Jc(1261,`td`,20)(1262,`em`)(1263,`strong`),Tk(1264,`(opcional)`),Zg()(),Jc(1265,`p`),Tk(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),Zg()()(),Jc(1267,`tr`,13)(1268,`td`,14)(1269,`div`,15)(1270,`span`,16),Tk(1271,` optionsService`),_u(1272,`br`),Zg()()(),Jc(1273,`td`,17)(1274,`code`,18),Tk(1275,`string `),Zg(),Jc(1276,`code`,51),Tk(1277,` PoComboFilter `),Zg(),Jc(1278,`code`,52),Tk(1279,` PoMultiselectFilter`),Zg()(),Jc(1280,`td`,20)(1281,`em`)(1282,`strong`),Tk(1283,`(opcional)`),Zg()(),Jc(1284,`p`),Tk(1285,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Jc(1286,`strong`),Tk(1287,`Importante`),Zg()(),Jc(1288,`blockquote`)(1289,`p`),Tk(1290,`Para que funcione corretamente, é importante que o serviço siga o `),Jc(1291,`a`,53),Tk(1292,`guia de API do PO UI`),Zg(),Tk(1293,`.`),Zg()()()(),Jc(1294,`tr`,13)(1295,`td`,14)(1296,`div`,15)(1297,`span`,16),Tk(1298,` order`),_u(1299,`br`),Zg()()(),Jc(1300,`td`,17)(1301,`code`,47),Tk(1302,`number`),Zg()(),Jc(1303,`td`,20)(1304,`em`)(1305,`strong`),Tk(1306,`(opcional)`),Zg()(),Jc(1307,`p`),Tk(1308,`Informa a ordem de exibição do campo.`),Zg(),Jc(1309,`p`),Tk(1310,`Exemplo de utilização:`),Zg(),Jc(1311,`pre`)(1312,`code`),Tk(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),Zg()(),Jc(1314,`p`),Tk(1315,`Na exibição a ordem ficará dessa forma:`),Zg(),Jc(1316,`pre`)(1317,`code`),Tk(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),Zg()(),Jc(1319,`p`),Tk(1320,`Só serão aceitos valores com números inteiros maiores do que zero.`),Zg(),Jc(1321,`p`),Tk(1322,`Campos sem `),Jc(1323,`code`),Tk(1324,`order`),Zg(),Tk(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),Zg()()(),Jc(1326,`tr`,13)(1327,`td`,14)(1328,`div`,15)(1329,`span`,16),Tk(1330,` params`),_u(1331,`br`),Zg()()(),Jc(1332,`td`,17)(1333,`code`,54),Tk(1334,`any`),Zg()(),Jc(1335,`td`,20)(1336,`em`)(1337,`strong`),Tk(1338,`(opcional)`),Zg()(),Jc(1339,`p`),Tk(1340,`Objeto que será enviado como parâmetro nas requisições de busca `),Jc(1341,`code`),Tk(1342,`searchService`),Zg(),Tk(1343,` ou `),Jc(1344,`code`),Tk(1345,`optionsService`),Zg(),Tk(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),Zg(),Jc(1347,`p`),Tk(1348,`Por exemplo, para o parâmetro `),Jc(1349,`code`),Tk(1350,`{ age: 23 }`),Zg(),Tk(1351,` a URL da requisição ficaria:`),Zg(),Jc(1352,`p`)(1353,`code`),Tk(1354,`url + /1?age=23`),Zg()()()(),Jc(1355,`tr`,13)(1356,`td`,14)(1357,`div`,15)(1358,`span`,16),Tk(1359,` property`),_u(1360,`br`),Zg()()(),Jc(1361,`td`,17)(1362,`code`,18),Tk(1363,`string`),Zg()(),Jc(1364,`td`,20)(1365,`p`),Tk(1366,`Nome de referência do campo.`),Zg()()(),Jc(1367,`tr`,13)(1368,`td`,14)(1369,`div`,15)(1370,`span`,16),Tk(1371,` searchService`),_u(1372,`br`),Zg()()(),Jc(1373,`td`,17)(1374,`code`,18),Tk(1375,`string `),Zg(),Jc(1376,`code`,55),Tk(1377,` PoDynamicViewRequest`),Zg()(),Jc(1378,`td`,20)(1379,`em`)(1380,`strong`),Tk(1381,`(opcional)`),Zg()(),Jc(1382,`p`),Tk(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Jc(1384,`strong`),Tk(1385,`Importante:`),Zg()(),Jc(1386,`blockquote`)(1387,`p`),Tk(1388,`A propriedade `),Jc(1389,`code`),Tk(1390,`property`),Zg(),Tk(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Jc(1392,`a`,53),Tk(1393,`guia de API do PO UI`),Zg(),Tk(1394,`.`),Zg()()()(),Jc(1395,`tr`,13)(1396,`td`,14)(1397,`div`,15)(1398,`span`,16),Tk(1399,` tag`),_u(1400,`br`),Zg()()(),Jc(1401,`td`,17)(1402,`code`,24),Tk(1403,`boolean`),Zg()(),Jc(1404,`td`,20)(1405,`em`)(1406,`strong`),Tk(1407,`(opcional)`),Zg()(),Jc(1408,`p`),Tk(1409,`Indica se o campo será um `),Jc(1410,`code`),Tk(1411,`po-tag`),Zg(),Tk(1412,`.`),Zg()()(),Jc(1413,`tr`,13)(1414,`td`,14)(1415,`div`,15)(1416,`span`,16),Tk(1417,` textColor`),_u(1418,`br`),Zg()()(),Jc(1419,`td`,17)(1420,`code`,18),Tk(1421,`string`),Zg()(),Jc(1422,`td`,20)(1423,`em`)(1424,`strong`),Tk(1425,`(opcional)`),Zg()(),Jc(1426,`p`),Tk(1427,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),Zg(),Jc(1428,`ul`)(1429,`li`),Tk(1430,`Hexadeximal, por exemplo `),Jc(1431,`code`),Tk(1432,`#c64840`),Zg(),Tk(1433,`;`),Zg(),Jc(1434,`li`),Tk(1435,`RGB, como `),Jc(1436,`code`),Tk(1437,`rgb(0, 0, 165)`),Zg(),Tk(1438,`;`),Zg(),Jc(1439,`li`),Tk(1440,`O nome da cor, por exemplo `),Jc(1441,`code`),Tk(1442,`blue`),Zg(),Tk(1443,`;`),Zg()()()(),Jc(1444,`tr`,13)(1445,`td`,14)(1446,`div`,15)(1447,`span`,16),Tk(1448,` type`),_u(1449,`br`),Zg()()(),Jc(1450,`td`,17)(1451,`code`,18),Tk(1452,`string `),Zg(),Jc(1453,`code`,56),Tk(1454,` PoDynamicFieldType`),Zg()(),Jc(1455,`td`,20)(1456,`em`)(1457,`strong`),Tk(1458,`(opcional)`),Zg()(),Jc(1459,`p`),Tk(1460,`Tipo do valor campo.`),Zg(),Jc(1461,`p`),Tk(1462,`Valores válidos:`),Zg(),Jc(1463,`ul`)(1464,`li`)(1465,`code`),Tk(1466,`boolean`),Zg(),Tk(1467,`: Valores `),Jc(1468,`em`),Tk(1469,`booleanos`),Zg(),Tk(1470,`.`),Zg(),Jc(1471,`li`)(1472,`code`),Tk(1473,`currency`),Zg(),Tk(1474,`: Valores monetários.`),Zg(),Jc(1475,`li`)(1476,`code`),Tk(1477,`decimal`),Zg(),Tk(1478,`: Valores decimais.`),Zg(),Jc(1479,`li`)(1480,`code`),Tk(1481,`date`),Zg(),Tk(1482,`: Valores de datas.`),Jc(1483,`ul`)(1484,`li`),Tk(1485,`Aceita os tipos `),Jc(1486,`strong`),Tk(1487,`string`),Zg(),Tk(1488,` e `),Jc(1489,`strong`),Tk(1490,`Date`),Zg(),Tk(1491,` padr\xE3o do Javascript,
por exemplo: `),Jc(1492,`code`),Tk(1493,`'2017-11-28'`),Zg(),Tk(1494,` ou `),Jc(1495,`code`),Tk(1496,`new Date(2017, 10, 28)`),Zg(),Tk(1497,`.`),Zg()()(),Jc(1498,`li`)(1499,`code`),Tk(1500,`dateTime`),Zg(),Tk(1501,`: Valor de data com horário.`),Jc(1502,`ul`)(1503,`li`),Tk(1504,`Aceita o tipo `),Jc(1505,`em`),Tk(1506,`string`),Zg(),Tk(1507,` no formato `),Jc(1508,`strong`),Tk(1509,`ISO-8601`),Zg(),Tk(1510,` extendido `),Jc(1511,`strong`),Tk(1512,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),Zg(),Tk(1513,`
e o tipo `),Jc(1514,`strong`),Tk(1515,`Date`),Zg(),Tk(1516,` padrão do Javascript, por exemplo: `),Jc(1517,`code`),Tk(1518,`'2017-11-28T00:00:00-02:00'`),Zg(),Tk(1519,` ou `),Jc(1520,`code`),Tk(1521,`new Date(2017, 10, 28)`),Zg(),Tk(1522,`.`),Zg()()(),Jc(1523,`li`)(1524,`code`),Tk(1525,`number`),Zg(),Tk(1526,`: Valores numéricos.`),Zg(),Jc(1527,`li`)(1528,`code`),Tk(1529,`string`),Zg(),Tk(1530,`: Textos.`),Zg(),Jc(1531,`li`)(1532,`code`),Tk(1533,`time`),Zg(),Tk(1534,`: Valor do horário.`),Jc(1535,`ul`)(1536,`li`),Tk(1537,`Aceita o tipo `),Jc(1538,`strong`),Tk(1539,`string`),Zg(),Tk(1540,` nos formatos `),Jc(1541,`strong`),Tk(1542,`'HH:mm:ss'`),Zg(),Tk(1543,` ou `),Jc(1544,`strong`),Tk(1545,`'HH:mm:ss.ffffff'`),Zg(),Tk(1546,`, por exemplo: `),Jc(1547,`code`),Tk(1548,`'23:12:45'`),Zg(),Tk(1549,`.`),Zg()()()()()(),Jc(1550,`tr`,13)(1551,`td`,14)(1552,`div`,15)(1553,`span`,16),Tk(1554,` visible`),_u(1555,`br`),Zg()()(),Jc(1556,`td`,17)(1557,`code`,24),Tk(1558,`boolean`),Zg()(),Jc(1559,`td`,20)(1560,`em`)(1561,`strong`),Tk(1562,`(opcional)`),Zg()(),Jc(1563,`p`),Tk(1564,`Indica se o campo será visível.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function fe(o,he){if(o&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(l);let r=nk();return H_(r.changeTab(`web`))}),_u(1,`sample-po-dynamic-view-basic-view`)(2,`sample-po-dynamic-view-employee-view`)(3,`sample-po-dynamic-view-employee-on-load-view`)(4,`sample-po-dynamic-view-container-view`),Zg()}if(o&2){let l=nk();Rb(`p-active`,l.activeTab===`web`)}}var ve=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Dynamic View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,r){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,fe,5,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),_u(4,`sample-po-dynamic-view-doc`),Zg()()()),a&2&&(Rb(`p-actions`,r.actions),Ig(2),BO(r.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,r.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Z,Q,Y,ee,te],encapsulation:2,changeDetection:1})}return o})()}];var ne=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(ve),WV]})}return o})();var at=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,ne]})}return o})();export{at as DocPoDynamicViewModule};
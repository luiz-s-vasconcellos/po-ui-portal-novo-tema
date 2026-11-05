import{t as r}from"./chunk-zystk1pz.js";import{$i as h,Ai as _O,Cn as oi,Da as pe$1,Fa as rg,Ga as vx,Ha as v_,Ii as b,Ja as we,L as Joe,Mr as I1,Ra as ue,Si as Xx,Ut as bre,Wa as vo,Xt as ere,Ya as wg,aa as iu,ai as Sn,b as Fu,dr as DO,gr as Dx,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,nr as Ag,or as Bx,qr as Ok,ro as yo,rr as Ax,rt as Qae,sa as jc,si as T,ui as UE,va as mt,wr as Fx,xa as nu}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var se=()=>({property:`name`,required:!0,showRequired:!0});var ce=o=>[o];var te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-fields`]],template:function(a,m){a&1&&nu(0,`po-dynamic-form`,0),a&2&&UE(`p-fields`,DO(2,ce,_O(1,se)))},dependencies:[Joe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,m){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Dynamic Form Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return m.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-dynamic-form-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+m.sampleCodeButtonIcon),rg(),Ag(` `,m.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ee,m.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,te],encapsulation:2,changeDetection:1})}return o})();var X=(()=>{class o{getCity(r){switch(r){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(r){return{fields:[r.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=T({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Se=[`dynamicForm`];var oe=(()=>{class o{poNotification=h(Fu);registerService=h(X);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,divider:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,divider:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,divider:`Work data`,range:!0,gridColumns:5,gridSmColumns:12},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`employeeCode`,label:`Employee code`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`999`,decimalsLength:0},{property:`overtime`,label:`Overtime hours`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`>>9.9<<`,decimalsLength:3,optional:!0},{property:`hobbies`,divider:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:bre.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(r){return setTimeout(()=>{let a=this.registerService.getCity(r.value.state);this.updateDynamicFormField(`city`,{options:a,loading:!1})},500),{value:{city:void 0},fields:[{property:`city`,gridColumns:6,disabled:!1,loading:!0}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}updateDynamicFormField(r$1,a){let m=this.dynamicForm?.fields??this.fields,l=m.findIndex(I=>I.property===r$1);l>=0&&(m[l]=r(r({},m[l]),a),this.fields=[...m])}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-register`]],viewQuery:function(a,m){if(a&1&&iu(Se,7),a&2){let l;yo(l=vo())&&(m.dynamicForm=l.first)}},standalone:!1,features:[we([X])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,m){if(a&1){let l=Ax();nu(0,`po-dynamic-form`,1,0)(2,`br`),jc(3,`div`,2)(4,`po-button`,3),mt(`p-click`,function(){v_(l);let R=Bx(1);return m.poNotification.success(`Data saved successfully!`),__(R.form.reset())}),wg()()}if(a&2){let l=Bx(1);UE(`p-fields`,m.fields)(`p-load`,m.onLoadFields.bind(m))(`p-validate`,m.onChangeFields.bind(m))(`p-validate-fields`,m.validateFields)(`p-value`,m.person),rg(4),UE(`p-disabled`,l?.form.invalid)}},dependencies:[oi,Joe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-register-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,m){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Dynamic Form - Register`),wg(),jc(4,`a`,2),mt(`click`,function(){return m.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum,
  PoDynamicFormComponent
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);
  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      displayFormat: '>>>,>>>,>>9.99',
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'employeeCode',
      label: 'Employee code',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 6,
      displayFormat: '999',
      decimalsLength: 0
    },
    {
      property: 'overtime',
      label: 'Overtime hours',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 6,
      displayFormat: '>>9.9<<',
      decimalsLength: 3,
      optional: true
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];
  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    setTimeout(() => {
      const options = this.registerService.getCity(changedValue.value.state);
      this.updateDynamicFormField('city', { options, loading: false });
    }, 500);
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          disabled: false,
          loading: true
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }

  private updateDynamicFormField(property: string, updates: Partial<PoDynamicFormField>): void {
    const currentFields = this.dynamicForm?.fields ?? this.fields;
    const index = currentFields.findIndex(field => field.property === property);
    if (index >= 0) {
      currentFields[index] = { ...currentFields[index], ...updates };
      this.fields = [...currentFields];
    }
  }
}
`),wg(),jc(21,`label`,6),lO(22,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),wg()()()()(),jc(25,`po-container`),nu(26,`sample-po-dynamic-form-register`),wg(),nu(27,`hr`)),a&2&&(rg(5),Xx(`po-icon `+m.sampleCodeButtonIcon),rg(),Ag(` `,m.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ge,m.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,oe],encapsulation:2,changeDetection:1})}return o})();var J=(()=>{class o{getCity(r){switch(r){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(r){return{fields:[r.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=T({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ve=[`dynamicForm`];var re=(()=>{class o{poNotification=h(Fu);registerService=h(J);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,container:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthday`)},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`,keydown:this.onKeyDown.bind(this,`secretKey`)},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,container:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,container:`Work data`,range:!0,gridColumns:5,gridSmColumns:12,help:`Enter or select a valid date range.`,additionalHelpTooltip:`Ensure the start date is earlier than or equal to the end date.`,keydown:this.onKeyDown.bind(this,`vacation`)},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`revenue`,label:`Revenue`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>,>,>>>,>>9`,decimalsLength:0},{property:`adjustment`,label:`Adjustment`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>9.99`,optional:!0},{property:`hobbies`,container:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0,listboxControlPosition:`top`},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0,listboxControlPosition:`top`},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0,listboxControlPosition:`top`},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:bre.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`,customAction:{icon:`an an-download`,visible:!0},customActionClick:r=>{console.log(`Iniciar download para o arquivo:`,r.name)}}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(r){return{value:{city:void 0},fields:[{property:`city`,gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onKeyDown(r,a){a.code===`F9`&&this.dynamicForm.showAdditionalHelp(r)}onLoadFields(r){return this.registerService.getUserDocument(r)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-container`]],viewQuery:function(a,m){if(a&1&&iu(ve,7),a&2){let l;yo(l=vo())&&(m.dynamicForm=l.first)}},standalone:!1,features:[we([J])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,m){if(a&1){let l=Ax();nu(0,`po-dynamic-form`,1,0)(2,`br`),jc(3,`div`,2)(4,`po-button`,3),mt(`p-click`,function(){v_(l);let R=Bx(1);return m.poNotification.success(`Data saved successfully!`),__(R.form.reset())}),wg()()}if(a&2){let l=Bx(1);UE(`p-fields`,m.fields)(`p-load`,m.onLoadFields.bind(m))(`p-validate`,m.onChangeFields.bind(m))(`p-validate-fields`,m.validateFields)(`p-value`,m.person),rg(4),UE(`p-disabled`,l?.form.invalid)}},dependencies:[oi,Joe],encapsulation:2,changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-container-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,m){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Dynamic Form - Container`),wg(),jc(4,`a`,2),mt(`click`,function(){return m.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      displayFormat: '>>>,>>>,>>9.99',
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'revenue',
      label: 'Revenue',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 6,
      displayFormat: '->>,>,>>>,>>9',
      decimalsLength: 0
    },
    {
      property: 'adjustment',
      label: 'Adjustment',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 6,
      displayFormat: '->>9.99',
      optional: true
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),wg(),jc(21,`label`,6),lO(22,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts`),wg(),jc(23,`pre`,9),lO(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),wg()()()()(),jc(25,`po-container`),nu(26,`sample-po-dynamic-form-container`),wg(),nu(27,`hr`)),a&2&&(rg(5),Xx(`po-icon `+m.sampleCodeButtonIcon),rg(),Ag(` `,m.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,he,m.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,re],encapsulation:2,changeDetection:1})}return o})();var le=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-doc`]],standalone:!1,decls:5363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-load`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`id`,`po-dynamic-form-load`],[`id`,`po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFormField`],[`id`,`po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(a,m){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),lO(6,`Componente`),wg(),jc(7,`h4`,4)(8,`code`,5),lO(9,`PoDynamicFormComponent`),wg()(),jc(10,`div`,2)(11,`p`),lO(12,`Componente para criação de formulários dinâmicos a partir de uma lista de objetos.`),wg(),jc(13,`p`),lO(14,`Também é possível verificar se o formulário está válido e informar valores para a exibição de informações. `),wg()(),jc(15,`div`,6)(16,`h4`,7),lO(17,`Seletor`),wg(),jc(18,`pre`,8),lO(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),wg()(),jc(20,`h4`,9),lO(21,`Propriedades`),wg(),jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),lO(25,`Nome`),wg(),jc(26,`th`,12),lO(27,`Tipo`),wg(),jc(28,`th`,12),lO(29,`Padrão`),wg(),jc(30,`th`,12),lO(31,`Descrição`),wg()(),jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),lO(36,` p-auto-focus`),nu(37,`br`),wg()()(),jc(38,`td`,17)(39,`code`,18),lO(40,`string`),wg()(),jc(41,`td`,19),lO(42,`-`),wg(),jc(43,`td`,20)(44,`em`)(45,`strong`),lO(46,`(opcional)`),wg()(),jc(47,`p`),lO(48,`Nome da propriedade, atribuída ao `),jc(49,`code`),lO(50,`PoDynamicFormField.property`),wg(),lO(51,`, que iniciará o campo com foco.`),wg()()(),jc(52,`tr`,13)(53,`td`,14)(54,`div`,15)(55,`span`,16),lO(56,` p-components-size`),nu(57,`br`),wg()()(),jc(58,`td`,17)(59,`code`,18),lO(60,`string`),wg()(),jc(61,`td`,19)(62,`p`)(63,`code`),lO(64,`medium`),wg()()(),jc(65,`td`,20)(66,`em`)(67,`strong`),lO(68,`(opcional)`),wg()(),jc(69,`p`),lO(70,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(71,`ul`)(72,`li`)(73,`code`),lO(74,`small`),wg(),lO(75,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(76,`li`)(77,`code`),lO(78,`medium`),wg(),lO(79,`: aplica a medida medium de cada componente.`),wg()(),jc(80,`blockquote`)(81,`p`),lO(82,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(83,`code`),lO(84,`medium`),wg(),lO(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(86,`a`,21),lO(87,`po-theme`),wg(),lO(88,`.`),wg()()()(),jc(89,`tr`,13)(90,`td`,14)(91,`div`,15)(92,`span`,16),lO(93,` p-fields`),nu(94,`br`),wg()()(),jc(95,`td`,17)(96,`code`,22),lO(97,`Array<PoDynamicFormField>`),wg()(),jc(98,`td`,19)(99,`p`)(100,`code`),lO(101,`[]`),wg()()(),jc(102,`td`,20)(103,`p`),lO(104,`Coleção de objetos que implementam a interface `),jc(105,`code`),lO(106,`PoDynamicFormField`),wg(),lO(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),wg(),jc(108,`blockquote`)(109,`p`),lO(110,`Ex: `),jc(111,`code`),lO(112,`[ { property: 'name' } ]`),wg()()(),jc(113,`p`),lO(114,`Regras de tipagem e criação dos componentes:`),wg(),jc(115,`ul`)(116,`li`),lO(117,`Caso o `),jc(118,`em`),lO(119,`type`),wg(),lO(120,` informado seja `),jc(121,`em`),lO(122,`boolean`),wg(),lO(123,` o componente criado será o `),jc(124,`code`),lO(125,`po-switch`),wg(),lO(126,`.`),wg(),jc(127,`li`),lO(128,`Caso o `),jc(129,`em`),lO(130,`type`),wg(),lO(131,` informado seja `),jc(132,`em`),lO(133,`currency`),wg(),lO(134,` e não seja informado um `),jc(135,`em`),lO(136,`mask`),wg(),lO(137,` ou `),jc(138,`em`),lO(139,`pattern`),wg(),lO(140,` o componente criado será o `),jc(141,`code`),lO(142,`po-decimal`),wg(),lO(143,`,
caso seja informado um `),jc(144,`em`),lO(145,`mask`),wg(),lO(146,` ou `),jc(147,`em`),lO(148,`pattern`),wg(),lO(149,` o componente criado será o `),jc(150,`code`),lO(151,`po-input`),wg(),lO(152,`.`),wg(),jc(153,`li`),lO(154,`Caso o `),jc(155,`em`),lO(156,`type`),wg(),lO(157,` informado seja `),jc(158,`em`),lO(159,`number`),wg(),lO(160,` e não seja informado um `),jc(161,`em`),lO(162,`mask`),wg(),lO(163,` ou `),jc(164,`em`),lO(165,`pattern`),wg(),lO(166,` o componente criado será o `),jc(167,`code`),lO(168,`po-number`),wg(),lO(169,`, caso seja
informado um `),jc(170,`em`),lO(171,`mask`),wg(),lO(172,` ou `),jc(173,`em`),lO(174,`pattern`),wg(),lO(175,` o componente criado será o `),jc(176,`code`),lO(177,`po-input`),wg(),lO(178,`.`),wg(),jc(179,`li`),lO(180,`Caso a lista possua a propriedade `),jc(181,`code`),lO(182,`options`),wg(),lO(183,` e a mesma possua até 3 itens o componente criado será o `),jc(184,`code`),lO(185,`po-radio-group`),wg(),lO(186,`
ou `),jc(187,`code`),lO(188,`po-checkbox-group`),wg(),lO(189,` se informar a propriedade `),jc(190,`code`),lO(191,`optionsMulti`),wg(),lO(192,`.`),wg(),jc(193,`li`),lO(194,`Caso a mesma possua 3 ou mais itens, será criado o componente `),jc(195,`code`),lO(196,`po-select`),wg(),lO(197,` ou, `),jc(198,`code`),lO(199,`po-multiselect`),wg(),lO(200,` se a propriedade `),jc(201,`code`),lO(202,`optionsMulti`),wg(),lO(203,`
for verdadeira.`),wg(),jc(204,`li`),lO(205,`Caso o `),jc(206,`em`),lO(207,`type`),wg(),lO(208,` informado seja `),jc(209,`em`),lO(210,`date`),wg(),lO(211,` ou `),jc(212,`em`),lO(213,`datetime`),wg(),lO(214,` o componente criado será o `),jc(215,`code`),lO(216,`po-datepicker`),wg(),lO(217,`.`),wg(),jc(218,`li`),lO(219,`Caso seja informado a propriedade `),jc(220,`code`),lO(221,`optionsService`),wg(),lO(222,` o componente criado será o `),jc(223,`code`),lO(224,`po-combo`),wg(),lO(225,`.`),wg(),jc(226,`li`),lO(227,`Caso o `),jc(228,`em`),lO(229,`type`),wg(),lO(230,` informado seja `),jc(231,`em`),lO(232,`time`),wg(),lO(233,` o componente criado será um `),jc(234,`code`),lO(235,`po-input`),wg(),lO(236,` podendo receber um `),jc(237,`em`),lO(238,`mask`),wg(),lO(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),jc(240,`em`),lO(241,`mask`),wg(),lO(242,` o componente será criado com a máscara '99:99' por padrão.`),wg(),jc(243,`li`),lO(244,`Caso a lista possua a propriedade `),jc(245,`code`),lO(246,`rows`),wg(),lO(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),jc(248,`code`),lO(249,`po-textarea`),wg(),lO(250,`, caso o valor da propriedade `),jc(251,`code`),lO(252,`rows`),wg(),lO(253,` seja menor que 3 o componente criado será o `),jc(254,`code`),lO(255,`po-input`),wg(),lO(256,`.`),wg(),jc(257,`li`),lO(258,`Caso seja informada a propriedade `),jc(259,`code`),lO(260,`secret`),wg(),lO(261,` o componente criado será o `),jc(262,`code`),lO(263,`po-password`),wg(),lO(264,`.`),wg(),jc(265,`li`),lO(266,`Caso o `),jc(267,`em`),lO(268,`type`),wg(),lO(269,` informado seja `),jc(270,`em`),lO(271,`string`),wg(),lO(272,` o componente criado será o `),jc(273,`code`),lO(274,`po-input`),wg(),lO(275,`.`),jc(276,`blockquote`)(277,`p`),lO(278,`Ao alterar o valor das `),jc(279,`code`),lO(280,`properties`),wg(),lO(281,`, visibilidade e/ou agrupamentos via container, os `),jc(282,`code`),lO(283,`fields`),wg(),lO(284,` que utilizam serviço podem refazer as chamadas para as API's.`),wg()()()()()(),jc(285,`tr`,13)(286,`td`,14)(287,`div`,23)(288,`span`,24),lO(289,` (p-form)`),nu(290,`br`),wg()()(),jc(291,`td`,17)(292,`code`,25),lO(293,`EventEmitter`),wg()(),jc(294,`td`,19),lO(295,`-`),wg(),jc(296,`td`,20)(297,`em`)(298,`strong`),lO(299,`(opcional)`),wg()(),jc(300,`p`),lO(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),wg(),jc(302,`p`),lO(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),jc(304,`em`),lO(305,`template reference`),wg(),lO(306,` e através do `),jc(307,`em`),lO(308,`output`),wg(),lO(309,`, veja os exemplos abaixo:`),wg(),jc(310,`blockquote`)(311,`p`)(312,`em`),lO(313,`template reference`),wg()()(),jc(314,`pre`)(315,`code`,26),lO(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),wg()(),jc(317,`blockquote`)(318,`p`)(319,`em`),lO(320,`Output`),wg()()(),jc(321,`pre`)(322,`code`,26),lO(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),wg()(),jc(324,`pre`)(325,`code`,27),lO(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),wg()(),jc(327,`blockquote`)(328,`p`),lO(329,`Caso a propriedade `),jc(330,`code`),lO(331,`p-group-form`),wg(),lO(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),wg()()()(),jc(333,`tr`,13)(334,`td`,14)(335,`div`,15)(336,`span`,16),lO(337,` p-group-form`),nu(338,`br`),wg()()(),jc(339,`td`,17)(340,`code`,28),lO(341,`boolean`),wg()(),jc(342,`td`,19),lO(343,`-`),wg(),jc(344,`td`,20)(345,`em`)(346,`strong`),lO(347,`(opcional)`),wg()(),jc(348,`p`),lO(349,`Ao informar esta propriedade, o componente passará a utilizar o formulário pai para criar os `),jc(350,`code`),lO(351,`FormControl`),wg(),lO(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),wg(),jc(353,`pre`)(354,`code`,26),lO(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),wg()()()(),jc(356,`tr`,13)(357,`td`,14)(358,`div`,15)(359,`span`,16),lO(360,` p-load`),nu(361,`br`),wg()()(),jc(362,`td`,17)(363,`code`,18),lO(364,`string `),wg(),jc(365,`code`,29),lO(366,` Function`),wg()(),jc(367,`td`,19),lO(368,`-`),wg(),jc(369,`td`,20)(370,`em`)(371,`strong`),lO(372,`(opcional)`),wg()(),jc(373,`p`),lO(374,`Função ou serviço que será executado na inicialização do componente.`),wg(),jc(375,`p`),lO(376,`A propriedade aceita os seguintes tipos:`),wg(),jc(377,`ul`)(378,`li`)(379,`code`),lO(380,`string`),wg(),lO(381,`: `),jc(382,`em`),lO(383,`Endpoint`),wg(),lO(384,` usado pelo componente para requisição via `),jc(385,`code`),lO(386,`POST`),wg(),lO(387,`.`),wg(),jc(388,`li`)(389,`code`),lO(390,`function`),wg(),lO(391,`: Método que será executado.`),wg()(),jc(392,`p`),lO(393,`Ao ser executado, irá receber como parâmetro o objeto informado no `),jc(394,`code`),lO(395,`p-value`),wg(),lO(396,`.`),wg(),jc(397,`p`),lO(398,`O retorno desta função deve ser do tipo `),jc(399,`a`,30),lO(400,`PoDynamicFormLoad`),wg(),lO(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),wg(),jc(402,`p`),lO(403,`Por exemplo:`),wg(),jc(404,`pre`)(405,`code`),lO(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),wg()(),jc(407,`p`),lO(408,`Para referenciar a sua função utilize a propriedade `),jc(409,`code`),lO(410,`bind`),wg(),lO(411,`, por exemplo:`),wg(),jc(412,`pre`)(413,`code`),lO(414,`[p-load]="onLoadFields.bind(this)"
`),wg()()()(),jc(415,`tr`,13)(416,`td`,14)(417,`div`,15)(418,`span`,16),lO(419,` p-validate`),nu(420,`br`),wg()()(),jc(421,`td`,17)(422,`code`,18),lO(423,`string `),wg(),jc(424,`code`,29),lO(425,` Function`),wg()(),jc(426,`td`,19),lO(427,`-`),wg(),jc(428,`td`,20)(429,`em`)(430,`strong`),lO(431,`(opcional)`),wg()(),jc(432,`p`),lO(433,`Função ou serviço para validar as `),jc(434,`strong`),lO(435,`mudanças do formulário`),wg(),lO(436,`.`),wg(),jc(437,`p`),lO(438,`A propriedade aceita os seguintes tipos:`),wg(),jc(439,`ul`)(440,`li`)(441,`code`),lO(442,`string`),wg(),lO(443,`: `),jc(444,`em`),lO(445,`Endpoint`),wg(),lO(446,` usado pelo componente para requisição via `),jc(447,`code`),lO(448,`POST`),wg(),lO(449,`.`),wg(),jc(450,`li`)(451,`code`),lO(452,`function`),wg(),lO(453,`: Método que será executado.`),wg()(),jc(454,`p`),lO(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),jc(456,`code`),lO(457,`PoDynamicFormFieldChanged`),wg()(),jc(458,`p`),lO(459,`O retorno desta função deve ser do tipo `),jc(460,`a`,31),lO(461,`PoDynamicFormValidation`),wg(),lO(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),wg(),jc(463,`pre`)(464,`code`),lO(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),wg()(),jc(466,`p`),lO(467,`Para referenciar a sua função utilize a propriedade `),jc(468,`code`),lO(469,`bind`),wg(),lO(470,`, por exemplo:`),wg(),jc(471,`pre`)(472,`code`),lO(473,`[p-validate]="this.myFunction.bind(this)"
`),wg()(),jc(474,`blockquote`)(475,`p`),lO(476,`Se houver uma lista de campos para validação definida em `),jc(477,`code`),lO(478,`p-validate-fields`),wg(),lO(479,`, a propriedade `),jc(480,`code`),lO(481,`validate`),wg(),lO(482,` só receberá o disparo para os campos equivalentes.`),wg()()()(),jc(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),lO(487,` p-validate-fields`),nu(488,`br`),wg()()(),jc(489,`td`,17)(490,`code`,32),lO(491,`Array<string>`),wg()(),jc(492,`td`,19),lO(493,`-`),wg(),jc(494,`td`,20)(495,`em`)(496,`strong`),lO(497,`(opcional)`),wg()(),jc(498,`p`),lO(499,`Lista que define os campos que irão disparar o validate do form.`),wg()()(),jc(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),lO(504,` p-validate-on-input`),nu(505,`br`),wg()()(),jc(506,`td`,17)(507,`code`,28),lO(508,`boolean`),wg()(),jc(509,`td`,19),lO(510,`-`),wg(),jc(511,`td`,20)(512,`em`)(513,`strong`),lO(514,`(opcional)`),wg()(),jc(515,`p`),lO(516,`Ao informar esta propriedade, o componente passará a emitir o valor a cada caractere digitado.`),wg(),jc(517,`p`),lO(518,`Pode ser aplicado nos seguintes componentes:`),wg(),jc(519,`ul`)(520,`li`),lO(521,`po-input`),wg(),jc(522,`li`),lO(523,`po-number`),wg(),jc(524,`li`),lO(525,`po-decimal`),wg(),jc(526,`li`),lO(527,`po-textarea`),wg(),jc(528,`li`),lO(529,`po-password`),wg()(),jc(530,`p`),lO(531,`Deve informar os campos que deseja receber as emissões na propriedade `),jc(532,`code`),lO(533,`p-validate-fields`),wg(),lO(534,`.`),wg()()(),jc(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),lO(539,` p-value`),nu(540,`br`),wg()()(),jc(541,`td`,17)(542,`code`,33),lO(543,`any`),wg()(),jc(544,`td`,19),lO(545,`-`),wg(),jc(546,`td`,20)(547,`p`),lO(548,`Objeto que será utilizado como valor para exibir as informações, será recuperado e preenchido através do atributo `),jc(549,`em`),lO(550,`property`),wg(),lO(551,`
dos objetos contidos na propridade `),jc(552,`code`),lO(553,`p-fields`),wg(),lO(554,`.`),wg(),jc(555,`p`),lO(556,`Pode iniciar com valor ou apenas com um objeto vazio que será preenchido conforme descrito acima.`),wg(),jc(557,`blockquote`)(558,`p`),lO(559,`Ex: `),jc(560,`code`),lO(561,`{ name: 'po' }`),wg()()()()()(),jc(562,`h3`,9),lO(563,`Métodos`),wg(),jc(564,`table`,34)(565,`tr`,13)(566,`th`,35)(567,`div`,15)(568,`h4`)(569,`span`,16),lO(570,` focus `),wg()()()()(),jc(571,`tr`,20)(572,`td`,20)(573,`p`),lO(574,`Função que atribui foco ao campo desejado.`),wg(),jc(575,`p`),lO(576,`Para utilizá-la é necessário capturar a instância do `),jc(577,`code`),lO(578,`dynamic form`),wg(),lO(579,`, como por exemplo:`),wg(),jc(580,`pre`)(581,`code`,26),lO(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),wg()(),jc(583,`pre`)(584,`code`,36),lO(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),wg()()()()(),jc(586,`h5`)(587,`b`),lO(588,`Parâmetros`),wg()(),jc(589,`table`,10)(590,`tr`,11)(591,`th`,12),lO(592,`Nome`),wg(),jc(593,`th`,12),lO(594,`Tipo`),wg(),jc(595,`th`,12),lO(596,`Descrição`),wg()(),jc(597,`tr`,13)(598,`td`,14),lO(599,` property`),wg(),jc(600,`td`,17)(601,`code`,37),lO(602,` string `),wg()(),jc(603,`td`,20)(604,`p`),lO(605,`Nome da propriedade atribuída ao `),jc(606,`code`),lO(607,`PoDynamicFormField.property`),wg(),lO(608,`.`),wg()()()(),nu(609,`br`),jc(610,`table`,34)(611,`tr`,13)(612,`th`,35)(613,`div`,15)(614,`h4`)(615,`span`,16),lO(616,` showAdditionalHelp `),wg()()()()(),jc(617,`tr`,20)(618,`td`,20)(619,`p`),lO(620,`Método que exibe `),jc(621,`code`),lO(622,`p-helper`),wg(),lO(623,` ou executa a ação definida em `),jc(624,`code`),lO(625,`p-helper{eventOnClick}`),wg(),lO(626,` ou em `),jc(627,`code`),lO(628,`p-additionalHelp`),wg(),lO(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(630,`code`),lO(631,`keydown`),wg(),lO(632,`.`),wg(),jc(633,`pre`)(634,`code`),lO(635,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),wg()()()()(),jc(636,`h5`)(637,`b`),lO(638,`Parâmetros`),wg()(),jc(639,`table`,10)(640,`tr`,11)(641,`th`,12),lO(642,`Nome`),wg(),jc(643,`th`,12),lO(644,`Tipo`),wg(),jc(645,`th`,12),lO(646,`Descrição`),wg()(),jc(647,`tr`,13)(648,`td`,14),lO(649,` property`),wg(),jc(650,`td`,17)(651,`code`,37),lO(652,` string `),wg()(),jc(653,`td`,20)(654,`p`),lO(655,`Identificador da coluna.`),wg()()()(),nu(656,`br`),jc(657,`h3`),lO(658,`Interfaces`),wg(),jc(659,`h4`,38)(660,`code`,5),lO(661,`PoDynamicFormField`),wg()(),jc(662,`div`,2)(663,`p`),lO(664,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente.`),wg()(),jc(665,`h4`,9),lO(666,`Propriedades`),wg(),jc(667,`table`,10)(668,`tr`,11)(669,`th`,12),lO(670,`Nome`),wg(),jc(671,`th`,12),lO(672,`Tipo`),wg(),jc(673,`th`,12),lO(674,`Descrição`),wg()(),jc(675,`tr`,13)(676,`td`,14)(677,`div`,15)(678,`span`,16),lO(679,` additionalHelp`),nu(680,`br`),wg()()(),jc(681,`td`,17)(682,`code`,29),lO(683,`Function`),wg()(),jc(684,`td`,20)(685,`em`)(686,`strong`),lO(687,`(opcional)`),wg()(),jc(688,`p`),lO(689,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(690,`blockquote`)(691,`p`),lO(692,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),wg()()()(),jc(693,`tr`,13)(694,`td`,14)(695,`div`,15)(696,`span`,16),lO(697,` additionalHelpTooltip`),nu(698,`br`),wg()()(),jc(699,`td`,17)(700,`code`,18),lO(701,`string`),wg()(),jc(702,`td`,20)(703,`em`)(704,`strong`),lO(705,`(opcional)`),wg()(),jc(706,`p`),lO(707,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(708,`code`),lO(709,`po-helper`),wg(),lO(710,`.
`),jc(711,`strong`),lO(712,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(713,`blockquote`)(714,`p`),lO(715,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),wg()()()(),jc(716,`tr`,13)(717,`td`,14)(718,`div`,15)(719,`span`,16),lO(720,` advancedFilters`),nu(721,`br`),wg()()(),jc(722,`td`,17)(723,`code`,39),lO(724,`Array<PoLookupAdvancedFilter>`),wg()(),jc(725,`td`,20)(726,`em`)(727,`strong`),lO(728,`(opcional)`),wg()(),jc(729,`p`),lO(730,`Lista de objetos dos campos que serão criados na busca avançada.`),wg(),jc(731,`blockquote`)(732,`p`),lO(733,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),wg()(),jc(734,`p`),lO(735,`Exemplo de URL com busca avançada:`),wg(),jc(736,`p`)(737,`code`),lO(738,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),wg()(),jc(739,`p`),lO(740,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),wg(),jc(741,`p`)(742,`code`),lO(743,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),wg()()()(),jc(744,`tr`,13)(745,`td`,14)(746,`div`,15)(747,`span`,16),lO(748,` appendBox`),nu(749,`br`),wg()()(),jc(750,`td`,17)(751,`code`,28),lO(752,`boolean`),wg()(),jc(753,`td`,20)(754,`em`)(755,`strong`),lO(756,`(opcional)`),wg()(),jc(757,`p`),lO(758,`Define que o `),jc(759,`code`),lO(760,`listbox`),wg(),lO(761,` e/ou popover (`),jc(762,`code`),lO(763,`p-helper`),wg(),lO(764,` e/ou `),jc(765,`code`),lO(766,`p-error-limit`),wg(),lO(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),wg(),jc(768,`blockquote`)(769,`p`),lO(770,`Quando utilizado com `),jc(771,`code`),lO(772,`p-helper`),wg(),lO(773,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(774,`tr`,13)(775,`td`,14)(776,`div`,15)(777,`span`,16),lO(778,` autoHeight`),nu(779,`br`),wg()()(),jc(780,`td`,17)(781,`code`,28),lO(782,`boolean`),wg()(),jc(783,`td`,20)(784,`em`)(785,`strong`),lO(786,`(opcional)`),wg()(),jc(787,`p`),lO(788,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),wg(),jc(789,`p`)(790,`strong`),lO(791,`Componentes compatíveis:`),wg(),jc(792,`code`),lO(793,`po-multiselect`),wg(),lO(794,`, `),jc(795,`code`),lO(796,`po-lookup`),wg(),lO(797,`.`),wg()()(),jc(798,`tr`,13)(799,`td`,14)(800,`div`,15)(801,`span`,16),lO(802,` autoUpload`),nu(803,`br`),wg()()(),jc(804,`td`,17)(805,`code`,28),lO(806,`boolean`),wg()(),jc(807,`td`,20)(808,`em`)(809,`strong`),lO(810,`(opcional)`),wg()(),jc(811,`p`),lO(812,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),wg(),jc(813,`p`)(814,`strong`),lO(815,`Componente compatível`),wg(),lO(816,`: `),jc(817,`code`),lO(818,`po-upload`),wg()()()(),jc(819,`tr`,13)(820,`td`,14)(821,`div`,15)(822,`span`,16),lO(823,` booleanFalse`),nu(824,`br`),wg()()(),jc(825,`td`,17)(826,`code`,18),lO(827,`string`),wg()(),jc(828,`td`,20)(829,`em`)(830,`strong`),lO(831,`(opcional)`),wg()(),jc(832,`p`),lO(833,`Texto exibido quando o valor do componente for `),jc(834,`em`),lO(835,`false`),wg(),lO(836,`.`),wg()()(),jc(837,`tr`,13)(838,`td`,14)(839,`div`,15)(840,`span`,16),lO(841,` booleanTrue`),nu(842,`br`),wg()()(),jc(843,`td`,17)(844,`code`,18),lO(845,`string`),wg()(),jc(846,`td`,20)(847,`em`)(848,`strong`),lO(849,`(opcional)`),wg()(),jc(850,`p`),lO(851,`Texto exibido quando o valor do componente for `),jc(852,`em`),lO(853,`true`),wg(),lO(854,`.`),wg()()(),jc(855,`tr`,13)(856,`td`,14)(857,`div`,15)(858,`span`,16),lO(859,` changeOnEnter`),nu(860,`br`),wg()()(),jc(861,`td`,17)(862,`code`,28),lO(863,`boolean`),wg()(),jc(864,`td`,20)(865,`em`)(866,`strong`),lO(867,`(opcional)`),wg()(),jc(868,`p`),lO(869,`Indica que o evento `),jc(870,`code`),lO(871,`p-change`),wg(),lO(872,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),jc(873,`code`),lO(874,`po-combo`),wg(),lO(875,`.`),wg()()(),jc(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),lO(880,` changeVisibleColumns`),nu(881,`br`),wg()()(),jc(882,`td`,17)(883,`code`,29),lO(884,`Function`),wg()(),jc(885,`td`,20)(886,`em`)(887,`strong`),lO(888,`(opcional)`),wg()(),jc(889,`p`),lO(890,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),wg(),jc(891,`p`),lO(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg(),jc(893,`p`)(894,`strong`),lO(895,`Componente compatível`),wg(),lO(896,`: `),jc(897,`code`),lO(898,`po-lookup`),wg()()()(),jc(899,`tr`,13)(900,`td`,14)(901,`div`,15)(902,`span`,16),lO(903,` clean`),nu(904,`br`),wg()()(),jc(905,`td`,17)(906,`code`,28),lO(907,`boolean`),wg()(),jc(908,`td`,20)(909,`em`)(910,`strong`),lO(911,`(opcional)`),wg()(),jc(912,`p`),lO(913,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg(),jc(914,`p`)(915,`strong`),lO(916,`Componentes compatíveis:`),wg(),jc(917,`code`),lO(918,`po-datepicker`),wg(),lO(919,`, `),jc(920,`code`),lO(921,`po-datepicker-range`),wg(),lO(922,`, `),jc(923,`code`),lO(924,`po-input`),wg(),lO(925,`, `),jc(926,`code`),lO(927,`po-number`),wg(),lO(928,`, `),jc(929,`code`),lO(930,`po-decimal`),wg(),lO(931,`,
`),jc(932,`code`),lO(933,`po-combo`),wg(),lO(934,`, `),jc(935,`code`),lO(936,`po-lookup`),wg(),lO(937,`, `),jc(938,`code`),lO(939,`po-password`),wg(),lO(940,`, `),jc(941,`code`),lO(942,`po-timepicker`),wg(),lO(943,`.`),wg()()(),jc(944,`tr`,13)(945,`td`,14)(946,`div`,15)(947,`span`,16),lO(948,` columnRestoreManager`),nu(949,`br`),wg()()(),jc(950,`td`,17)(951,`code`,29),lO(952,`Function`),wg()(),jc(953,`td`,20)(954,`em`)(955,`strong`),lO(956,`(opcional)`),wg()(),jc(957,`p`),lO(958,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),wg(),jc(959,`p`),lO(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg(),jc(961,`p`)(962,`strong`),lO(963,`Componente compatível`),wg(),lO(964,`: `),jc(965,`code`),lO(966,`po-lookup`),wg()()()(),jc(967,`tr`,13)(968,`td`,14)(969,`div`,15)(970,`span`,16),lO(971,` columns`),nu(972,`br`),wg()()(),jc(973,`td`,17)(974,`code`,40),lO(975,`Array<PoLookupColumn> `),wg(),jc(976,`code`,41),lO(977,` number`),wg()(),jc(978,`td`,20)(979,`em`)(980,`strong`),lO(981,`(opcional)`),wg()(),jc(982,`p`),lO(983,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),jc(984,`code`),lO(985,`searchService`),wg(),lO(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),jc(987,`a`,42)(988,`code`),lO(989,`PoLookupColumn`),wg()(),lO(990,`.`),wg(),jc(991,`blockquote`)(992,`p`),lO(993,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),jc(994,`em`),lO(995,`label`),wg(),lO(996,` e `),jc(997,`em`),lO(998,`value`),wg(),lO(999,` para valores
de tela e do model respectivamente.`),wg()(),jc(1e3,`p`)(1001,`strong`),lO(1002,`Componentes compatíveis:`),wg(),jc(1003,`code`),lO(1004,`po-radio-group`),wg(),lO(1005,`, `),jc(1006,`code`),lO(1007,`po-lookup`),wg(),lO(1008,`, `),jc(1009,`code`),lO(1010,`po-checkbox-group`),wg(),lO(1011,`.`),wg()()(),jc(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),lO(1016,` compactLabel`),nu(1017,`br`),wg()()(),jc(1018,`td`,17)(1019,`code`,28),lO(1020,`boolean`),wg()(),jc(1021,`td`,20)(1022,`em`)(1023,`strong`),lO(1024,`(opcional)`),wg()(),jc(1025,`p`),lO(1026,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(1027,`p`),lO(1028,`Quando habilitado (`),jc(1029,`code`),lO(1030,`true`),wg(),lO(1031,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(1032,`ul`)(1033,`li`)(1034,`code`),lO(1035,`po-label`),wg()(),jc(1036,`li`)(1037,`code`),lO(1038,`p-requirement (showRequired)`),wg()(),jc(1039,`li`)(1040,`code`),lO(1041,`po-helper`),wg()()(),jc(1042,`p`),lO(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(1044,`p`),lO(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(1046,`ul`)(1047,`li`)(1048,`code`),lO(1049,`--field-container-title-justify`),wg()(),jc(1050,`li`)(1051,`code`),lO(1052,`--field-container-title-flex`),wg()()(),jc(1053,`p`),lO(1054,`Exemplo:`),wg(),jc(1055,`pre`)(1056,`code`),lO(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(1058,`p`),lO(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(1060,`tr`,13)(1061,`td`,14)(1062,`div`,15)(1063,`span`,16),lO(1064,` container`),nu(1065,`br`),wg()()(),jc(1066,`td`,17)(1067,`code`,18),lO(1068,`string`),wg()(),jc(1069,`td`,20)(1070,`em`)(1071,`strong`),lO(1072,`(opcional)`),wg()(),jc(1073,`p`),lO(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),wg(),jc(1075,`p`),lO(1076,`Está propriedade é do tipo string, o valor que será titulo do contianer`),wg()()(),jc(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),lO(1081,` customAction`),nu(1082,`br`),wg()()(),jc(1083,`td`,17)(1084,`code`,43),lO(1085,`PoProgressAction`),wg()(),jc(1086,`td`,20)(1087,`em`)(1088,`strong`),lO(1089,`(opcional)`),wg()(),jc(1090,`p`),lO(1091,`Define uma ação personalizada no componente `),jc(1092,`code`),lO(1093,`po-upload`),wg(),lO(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),wg(),jc(1095,`p`)(1096,`strong`),lO(1097,`Componente compatível`),wg(),lO(1098,`: `),jc(1099,`code`),lO(1100,`po-upload`),wg(),lO(1101,`,`),wg(),jc(1102,`p`)(1103,`strong`),lO(1104,`Exemplo de configuração`),wg(),lO(1105,`:`),wg(),jc(1106,`pre`)(1107,`code`,44),lO(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),wg()()()(),jc(1109,`tr`,13)(1110,`td`,14)(1111,`div`,15)(1112,`span`,16),lO(1113,` customActionClick`),nu(1114,`br`),wg()()(),jc(1115,`td`,17)(1116,`code`,45),lO(1117,`(file: PoUploadFile) => void`),wg()(),jc(1118,`td`,20)(1119,`em`)(1120,`strong`),lO(1121,`(opcional)`),wg()(),jc(1122,`p`),lO(1123,`Evento emitido ao clicar na ação personalizada configurada no `),jc(1124,`code`),lO(1125,`p-custom-action`),wg(),lO(1126,`.`),wg(),jc(1127,`p`)(1128,`strong`),lO(1129,`Componente compatível`),wg(),lO(1130,`: `),jc(1131,`code`),lO(1132,`po-upload`),wg(),lO(1133,`,`),wg(),jc(1134,`p`),lO(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),wg(),jc(1136,`p`)(1137,`strong`),lO(1138,`Parâmetro do evento`),wg(),lO(1139,`:`),wg(),jc(1140,`ul`)(1141,`li`)(1142,`code`),lO(1143,`file`),wg(),lO(1144,`: O arquivo associado ao botão de ação. Este objeto é da classe `),jc(1145,`code`),lO(1146,`PoUploadFile`),wg(),lO(1147,` e contém informações sobre o arquivo, como nome, status e progresso.`),wg()(),jc(1148,`p`)(1149,`strong`),lO(1150,`Exemplo de uso`),wg(),lO(1151,`:`),wg(),jc(1152,`pre`)(1153,`code`,44),lO(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),wg()()()(),jc(1155,`tr`,13)(1156,`td`,14)(1157,`div`,15)(1158,`span`,16),lO(1159,` debounceTime`),nu(1160,`br`),wg()()(),jc(1161,`td`,17)(1162,`code`,41),lO(1163,`number`),wg()(),jc(1164,`td`,20)(1165,`em`)(1166,`strong`),lO(1167,`(opcional)`),wg()(),jc(1168,`p`),lO(1169,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),jc(1170,`code`),lO(1171,`p-filter-service`),wg(),lO(1172,`).`),wg(),jc(1173,`p`)(1174,`strong`),lO(1175,`Componentes compatíveis:`),wg(),jc(1176,`code`),lO(1177,`po-combo`),wg(),lO(1178,`, `),jc(1179,`code`),lO(1180,`po-multiselect`),wg(),lO(1181,`.`),wg()()(),jc(1182,`tr`,13)(1183,`td`,14)(1184,`div`,15)(1185,`span`,16),lO(1186,` decimalsLength`),nu(1187,`br`),wg()()(),jc(1188,`td`,17)(1189,`code`,41),lO(1190,`number`),wg()(),jc(1191,`td`,20)(1192,`em`)(1193,`strong`),lO(1194,`(opcional)`),wg()(),jc(1195,`p`),lO(1196,`Quantidade máxima de casas decimais.`),wg(),jc(1197,`blockquote`)(1198,`p`),lO(1199,`Esta propriedade só pode ser utilizada quando o `),jc(1200,`code`),lO(1201,`type`),wg(),lO(1202,` for `),jc(1203,`em`),lO(1204,`currency`),wg(),lO(1205,` ou `),jc(1206,`em`),lO(1207,`decimal`),wg(),lO(1208,`.`),wg()(),jc(1209,`blockquote`)(1210,`p`),lO(1211,`Quando utilizado com `),jc(1212,`code`),lO(1213,`displayFormat`),wg(),lO(1214,`, será respeitado o valor `),jc(1215,`strong`),lO(1216,`mais restritivo`),wg(),lO(1217,` entre esta propriedade e o número de casas decimais definido no formato.`),wg()()()(),jc(1218,`tr`,13)(1219,`td`,14)(1220,`div`,15)(1221,`span`,16),lO(1222,` directory`),nu(1223,`br`),wg()()(),jc(1224,`td`,17)(1225,`code`,28),lO(1226,`boolean`),wg()(),jc(1227,`td`,20)(1228,`em`)(1229,`strong`),lO(1230,`(opcional)`),wg()(),jc(1231,`p`),lO(1232,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),wg(),jc(1233,`blockquote`)(1234,`p`),lO(1235,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),wg()(),jc(1236,`blockquote`)(1237,`p`),lO(1238,`Definição não suportada pelo browser `),jc(1239,`strong`),lO(1240,`Internet Explorer`),wg(),lO(1241,`, todavia será possível a seleção de arquivos padrão.`),wg()(),jc(1242,`p`)(1243,`strong`),lO(1244,`Componente compatível`),wg(),lO(1245,`: `),jc(1246,`code`),lO(1247,`po-upload`),wg()()()(),jc(1248,`tr`,13)(1249,`td`,14)(1250,`div`,15)(1251,`span`,16),lO(1252,` disabled`),nu(1253,`br`),wg()()(),jc(1254,`td`,17)(1255,`code`,28),lO(1256,`boolean`),wg()(),jc(1257,`td`,20)(1258,`em`)(1259,`strong`),lO(1260,`(opcional)`),wg()(),jc(1261,`p`),lO(1262,`Desabilita o campo caso informar o valor `),jc(1263,`em`),lO(1264,`true`),wg(),lO(1265,`.`),wg()()(),jc(1266,`tr`,13)(1267,`td`,14)(1268,`div`,15)(1269,`span`,16),lO(1270,` disabledInitFilter`),nu(1271,`br`),wg()()(),jc(1272,`td`,17)(1273,`code`,28),lO(1274,`boolean`),wg()(),jc(1275,`td`,20)(1276,`em`)(1277,`strong`),lO(1278,`(opcional)`),wg()(),jc(1279,`p`),lO(1280,`Desabilita o filtro inicial no serviço do `),jc(1281,`code`),lO(1282,`po-combo`),wg(),lO(1283,`, que é executado no primeiro clique no campo.`),wg()()(),jc(1284,`tr`,13)(1285,`td`,14)(1286,`div`,15)(1287,`span`,16),lO(1288,` disabledTabFilter`),nu(1289,`br`),wg()()(),jc(1290,`td`,17)(1291,`code`,28),lO(1292,`boolean`),wg()(),jc(1293,`td`,20)(1294,`em`)(1295,`strong`),lO(1296,`(opcional)`),wg()(),jc(1297,`p`),lO(1298,`Se verdadeiro, desabilitará a busca de um item via TAB no `),jc(1299,`code`),lO(1300,`po-combo`),wg(),lO(1301,`.`),wg()()(),jc(1302,`tr`,13)(1303,`td`,14)(1304,`div`,15)(1305,`span`,16),lO(1306,` displayFormat`),nu(1307,`br`),wg()()(),jc(1308,`td`,17)(1309,`code`,18),lO(1310,`string`),wg()(),jc(1311,`td`,20)(1312,`em`)(1313,`strong`),lO(1314,`(opcional)`),wg()(),jc(1315,`p`),lO(1316,`Define uma máscara de formatação numérica avançada para o campo.`),wg(),jc(1317,`p`),lO(1318,`Simbologia suportada:`),wg(),jc(1319,`ul`)(1320,`li`)(1321,`code`),lO(1322,`9`),wg(),lO(1323,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),wg(),jc(1324,`li`)(1325,`code`),lO(1326,`>`),wg(),lO(1327,`: Supressão de zero à esquerda (dígito não obrigatório);`),wg(),jc(1328,`li`)(1329,`code`),lO(1330,`<`),wg(),lO(1331,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),wg(),jc(1332,`li`)(1333,`code`),lO(1334,`.`),wg(),lO(1335,`: Separador decimal (convertido conforme locale);`),wg(),jc(1336,`li`)(1337,`code`),lO(1338,`,`),wg(),lO(1339,`: Separador de milhar/grupo (convertido conforme locale);`),wg(),jc(1340,`li`)(1341,`code`),lO(1342,`-`),wg(),lO(1343,`: Sinal negativo (deve ser o primeiro caractere do formato).`),wg()(),jc(1344,`blockquote`)(1345,`p`),lO(1346,`Quando utilizado com `),jc(1347,`code`),lO(1348,`decimalsLength`),wg(),lO(1349,` ou `),jc(1350,`code`),lO(1351,`thousandMaxlength`),wg(),lO(1352,`, será respeitado o valor `),jc(1353,`strong`),lO(1354,`mais restritivo`),wg(),lO(1355,` entre a propriedade e o formato.`),wg()(),jc(1356,`p`),lO(1357,`Exemplos: `),jc(1358,`code`),lO(1359,`'>>>,>>>,>>9.99'`),wg(),lO(1360,`, `),jc(1361,`code`),lO(1362,`'->>9.99'`),wg(),lO(1363,`, `),jc(1364,`code`),lO(1365,`'999.9'`),wg()(),jc(1366,`blockquote`)(1367,`p`),lO(1368,`Esta propriedade só pode ser utilizada quando o `),jc(1369,`code`),lO(1370,`type`),wg(),lO(1371,` for `),jc(1372,`em`),lO(1373,`currency`),wg(),lO(1374,` ou `),jc(1375,`em`),lO(1376,`decimal`),wg(),lO(1377,`.`),wg()(),jc(1378,`p`)(1379,`strong`),lO(1380,`Componente compatível:`),wg(),jc(1381,`code`),lO(1382,`po-decimal`),wg(),lO(1383,`.`),wg()()(),jc(1384,`tr`,13)(1385,`td`,14)(1386,`div`,15)(1387,`span`,16),lO(1388,` divider`),nu(1389,`br`),wg()()(),jc(1390,`td`,17)(1391,`code`,18),lO(1392,`string`),wg()(),jc(1393,`td`,20)(1394,`em`)(1395,`strong`),lO(1396,`(opcional)`),wg()(),jc(1397,`p`),lO(1398,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),wg()()(),jc(1399,`tr`,13)(1400,`td`,14)(1401,`div`,15)(1402,`span`,16),lO(1403,` dragDrop`),nu(1404,`br`),wg()()(),jc(1405,`td`,17)(1406,`code`,28),lO(1407,`boolean`),wg()(),jc(1408,`td`,20)(1409,`em`)(1410,`strong`),lO(1411,`(opcional)`),wg()(),jc(1412,`p`),lO(1413,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),wg(),jc(1414,`blockquote`)(1415,`p`),lO(1416,`Recomendamos utilizar apenas um `),jc(1417,`code`),lO(1418,`po-upload`),wg(),lO(1419,` com esta funcionalidade por tela.`),wg()(),jc(1420,`p`)(1421,`strong`),lO(1422,`Componente compatível`),wg(),lO(1423,`: `),jc(1424,`code`),lO(1425,`po-upload`),wg()()()(),jc(1426,`tr`,13)(1427,`td`,14)(1428,`div`,15)(1429,`span`,16),lO(1430,` dragDropHeight`),nu(1431,`br`),wg()()(),jc(1432,`td`,17)(1433,`code`,41),lO(1434,`number`),wg()(),jc(1435,`td`,20)(1436,`em`)(1437,`strong`),lO(1438,`(opcional)`),wg()(),jc(1439,`p`),lO(1440,`Define em `),jc(1441,`em`),lO(1442,`pixels`),wg(),lO(1443,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),jc(1444,`code`),lO(1445,`160px`),wg(),lO(1446,`.`),wg(),jc(1447,`blockquote`)(1448,`p`),lO(1449,`Esta propriedade funciona somente se a propriedade `),jc(1450,`code`),lO(1451,`p-drag-drop`),wg(),lO(1452,` estiver habilitada.`),wg()(),jc(1453,`p`)(1454,`strong`),lO(1455,`Componente compatível`),wg(),lO(1456,`: `),jc(1457,`code`),lO(1458,`po-upload`),wg()()()(),jc(1459,`tr`,13)(1460,`td`,14)(1461,`div`,15)(1462,`span`,16),lO(1463,` errorAsyncFunction`),nu(1464,`br`),wg()()(),jc(1465,`td`,17)(1466,`code`,46),lO(1467,`(value) => Observable<boolean>`),wg()(),jc(1468,`td`,20)(1469,`em`)(1470,`strong`),lO(1471,`(opcional)`),wg()(),jc(1472,`p`),lO(1473,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(1474,`code`),lO(1475,`change`),wg(),lO(1476,` ou `),jc(1477,`code`),lO(1478,`change-model`),wg(),lO(1479,`, dependendo do valor da propriedade `),jc(1480,`code`),lO(1481,`triggerMode`),wg(),lO(1482,`.`),wg(),jc(1483,`blockquote`)(1484,`p`),lO(1485,`Retorna `),jc(1486,`code`),lO(1487,`Observable com o valor true`),wg(),lO(1488,` para sinalizar o erro `),jc(1489,`code`),lO(1490,`false`),wg(),lO(1491,` para indicar que não há erro.`),wg()(),jc(1492,`p`)(1493,`strong`),lO(1494,`Componente compatível`),wg(),lO(1495,`: `),jc(1496,`code`),lO(1497,`po-datepicker`),wg()()()(),jc(1498,`tr`,13)(1499,`td`,14)(1500,`div`,15)(1501,`span`,16),lO(1502,` errorAsyncProperties`),nu(1503,`br`),wg()()(),jc(1504,`td`,17)(1505,`code`,47),lO(1506,`ErrorAsyncProperties`),wg()(),jc(1507,`td`,20)(1508,`em`)(1509,`strong`),lO(1510,`(opcional)`),wg()(),jc(1511,`p`),lO(1512,`Realiza alguma validação customizada assíncrona no componente.`),wg(),jc(1513,`p`)(1514,`strong`),lO(1515,`Componentes compatíveis:`),wg(),jc(1516,`code`),lO(1517,`po-input`),wg(),lO(1518,`, `),jc(1519,`code`),lO(1520,`po-number`),wg(),lO(1521,`, `),jc(1522,`code`),lO(1523,`po-decimal`),wg(),lO(1524,`, `),jc(1525,`code`),lO(1526,`po-password`),wg(),lO(1527,`.`),wg()()(),jc(1528,`tr`,13)(1529,`td`,14)(1530,`div`,15)(1531,`span`,16),lO(1532,` errorLimit`),nu(1533,`br`),wg()()(),jc(1534,`td`,17)(1535,`code`,28),lO(1536,`boolean`),wg()(),jc(1537,`td`,20)(1538,`em`)(1539,`strong`),lO(1540,`(opcional)`),wg()(),jc(1541,`p`),lO(1542,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(1543,`blockquote`)(1544,`p`),lO(1545,`Caso essa propriedade seja definida como `),jc(1546,`code`),lO(1547,`true`),wg(),lO(1548,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()(),jc(1549,`p`)(1550,`strong`),lO(1551,`Componentes compatíveis:`),wg(),jc(1552,`code`),lO(1553,`po-checkbox-group`),wg(),lO(1554,`, `),jc(1555,`code`),lO(1556,`po-combo`),wg(),lO(1557,`, `),jc(1558,`code`),lO(1559,`po-datepicker`),wg(),lO(1560,`, `),jc(1561,`code`),lO(1562,`po-datepicker-range`),wg(),lO(1563,`, `),jc(1564,`code`),lO(1565,`po-decimal`),wg(),lO(1566,`, `),jc(1567,`code`),lO(1568,`po-input`),wg(),lO(1569,`, `),jc(1570,`code`),lO(1571,`po-lookup`),wg(),lO(1572,`, `),jc(1573,`code`),lO(1574,`po-multiselect`),wg(),lO(1575,`, `),jc(1576,`code`),lO(1577,`po-number`),wg(),lO(1578,`, `),jc(1579,`code`),lO(1580,`po-password`),wg(),lO(1581,`, `),jc(1582,`code`),lO(1583,`po-radio-group`),wg(),lO(1584,`, `),jc(1585,`code`),lO(1586,`po-select`),wg(),lO(1587,`,
`),jc(1588,`code`),lO(1589,`po-switch`),wg(),lO(1590,`, `),jc(1591,`code`),lO(1592,`po-textarea`),wg(),lO(1593,`, `),jc(1594,`code`),lO(1595,`po-timepicker`),wg(),lO(1596,`.`),wg()()(),jc(1597,`tr`,13)(1598,`td`,14)(1599,`div`,15)(1600,`span`,16),lO(1601,` errorMessage`),nu(1602,`br`),wg()()(),jc(1603,`td`,17)(1604,`code`,18),lO(1605,`string`),wg()(),jc(1606,`td`,20)(1607,`em`)(1608,`strong`),lO(1609,`(opcional)`),wg()(),jc(1610,`p`),lO(1611,`Mensagem que será apresentada quando o campo ficar inválido.`),wg(),jc(1612,`p`),lO(1613,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),wg(),jc(1614,`ul`)(1615,`li`),lO(1616,`pattern;`),wg(),jc(1617,`li`),lO(1618,`minValue;`),wg(),jc(1619,`li`),lO(1620,`maxValue;`),wg(),jc(1621,`li`),lO(1622,`required;`),wg()(),jc(1623,`blockquote`)(1624,`p`),lO(1625,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),jc(1626,`code`),lO(1627,`po-datepicker`),wg(),lO(1628,`, `),jc(1629,`code`),lO(1630,`po-input`),wg(),lO(1631,`, `),jc(1632,`code`),lO(1633,`po-number`),wg(),lO(1634,`, `),jc(1635,`code`),lO(1636,`po-decimal`),wg(),lO(1637,`, `),jc(1638,`code`),lO(1639,`po-password`),wg(),lO(1640,`, `),jc(1641,`code`),lO(1642,`po-timepicker`),wg(),lO(1643,`, \xE9 necess\xE1rio que a propriedade
`),jc(1644,`code`),lO(1645,`requiredFieldErrorMessage`),wg(),lO(1646,` esteja como `),jc(1647,`code`),lO(1648,`true`),wg(),lO(1649,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),jc(1650,`code`),lO(1651,`po-datepicker-range`),wg(),lO(1652,`, `),jc(1653,`code`),lO(1654,`po-select`),wg(),lO(1655,`, `),jc(1656,`code`),lO(1657,`po-checkbox-group`),wg(),lO(1658,`, `),jc(1659,`code`),lO(1660,`po-radio-group`),wg(),lO(1661,`, `),jc(1662,`code`),lO(1663,`po-multiselect`),wg(),lO(1664,`, `),jc(1665,`code`),lO(1666,`po-combo`),wg(),lO(1667,`,
`),jc(1668,`code`),lO(1669,`po-lookup`),wg(),lO(1670,` e `),jc(1671,`code`),lO(1672,`po-textarea`),wg(),lO(1673,` não é necessário passar a propriedade `),jc(1674,`code`),lO(1675,`requiredFieldErrorMessage`),wg(),lO(1676,`.`),wg()(),jc(1677,`p`)(1678,`strong`),lO(1679,`Componentes compatíveis:`),wg(),jc(1680,`code`),lO(1681,`po-checkbox-group`),wg(),lO(1682,`, `),jc(1683,`code`),lO(1684,`po-combo`),wg(),lO(1685,`, `),jc(1686,`code`),lO(1687,`po-datepicker`),wg(),lO(1688,`, `),jc(1689,`code`),lO(1690,`po-datepicker-range`),wg(),lO(1691,`, `),jc(1692,`code`),lO(1693,`po-decimal`),wg(),lO(1694,`, `),jc(1695,`code`),lO(1696,`po-input`),wg(),lO(1697,`, `),jc(1698,`code`),lO(1699,`po-lookup`),wg(),lO(1700,`, `),jc(1701,`code`),lO(1702,`po-multiselect`),wg(),lO(1703,`, `),jc(1704,`code`),lO(1705,`po-number`),wg(),lO(1706,`, `),jc(1707,`code`),lO(1708,`po-password`),wg(),lO(1709,`, `),jc(1710,`code`),lO(1711,`po-radio-group`),wg(),lO(1712,`, `),jc(1713,`code`),lO(1714,`po-select`),wg(),lO(1715,`,
`),jc(1716,`code`),lO(1717,`po-switch`),wg(),lO(1718,`, `),jc(1719,`code`),lO(1720,`po-textarea`),wg(),lO(1721,`, `),jc(1722,`code`),lO(1723,`po-timepicker`),wg(),lO(1724,`.`),wg()()(),jc(1725,`tr`,13)(1726,`td`,14)(1727,`div`,15)(1728,`span`,16),lO(1729,` fieldLabel`),nu(1730,`br`),wg()()(),jc(1731,`td`,17)(1732,`code`,18),lO(1733,`string`),wg()(),jc(1734,`td`,20)(1735,`em`)(1736,`strong`),lO(1737,`(opcional)`),wg()(),jc(1738,`p`),lO(1739,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),wg(),jc(1740,`p`),lO(1741,`O valor padrão é: `),jc(1742,`code`),lO(1743,`label`),wg(),lO(1744,`.`),wg(),jc(1745,`blockquote`)(1746,`p`),lO(1747,`Esta propriedade pode ser utilizada em conjunto com: `),jc(1748,`code`),lO(1749,`options`),wg(),lO(1750,`, `),jc(1751,`code`),lO(1752,`optionsService`),wg(),lO(1753,` e `),jc(1754,`code`),lO(1755,`searchService`),wg(),lO(1756,`.`),wg()()()(),jc(1757,`tr`,13)(1758,`td`,14)(1759,`div`,15)(1760,`span`,16),lO(1761,` fieldValue`),nu(1762,`br`),wg()()(),jc(1763,`td`,17)(1764,`code`,18),lO(1765,`string`),wg()(),jc(1766,`td`,20)(1767,`em`)(1768,`strong`),lO(1769,`(opcional)`),wg()(),jc(1770,`p`),lO(1771,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),wg(),jc(1772,`p`),lO(1773,`O valor padrão é: `),jc(1774,`code`),lO(1775,`value`),wg(),lO(1776,`.`),wg(),jc(1777,`blockquote`)(1778,`p`),lO(1779,`Esta propriedade pode ser utilizada em conjunto com: `),jc(1780,`code`),lO(1781,`options`),wg(),lO(1782,`, `),jc(1783,`code`),lO(1784,`optionsService`),wg(),lO(1785,` e `),jc(1786,`code`),lO(1787,`searchService`),wg(),lO(1788,`.`),wg()()()(),jc(1789,`tr`,13)(1790,`td`,14)(1791,`div`,15)(1792,`span`,16),lO(1793,` filterMinlength`),nu(1794,`br`),wg()()(),jc(1795,`td`,17)(1796,`code`,41),lO(1797,`number`),wg()(),jc(1798,`td`,20)(1799,`em`)(1800,`strong`),lO(1801,`(opcional)`),wg()(),jc(1802,`p`),lO(1803,`Valor mínimo de caracteres para realizar o filtro no serviço do `),jc(1804,`code`),lO(1805,`po-combo`),wg(),lO(1806,`.`),wg()()(),jc(1807,`tr`,13)(1808,`td`,14)(1809,`div`,15)(1810,`span`,16),lO(1811,` filterMode`),nu(1812,`br`),wg()()(),jc(1813,`td`,17)(1814,`code`,48),lO(1815,`PoMultiselectFilterMode`),wg()(),jc(1816,`td`,20)(1817,`em`)(1818,`strong`),lO(1819,`(opcional)`),wg()(),jc(1820,`p`),lO(1821,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),jc(1822,`code`),lO(1823,`startsWith`),wg(),lO(1824,`, `),jc(1825,`code`),lO(1826,`contains`),wg(),lO(1827,` ou `),jc(1828,`code`),lO(1829,`endsWith`),wg(),lO(1830,`.`),wg(),jc(1831,`blockquote`)(1832,`p`),lO(1833,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),wg()(),jc(1834,`p`)(1835,`strong`),lO(1836,`Componente compatível:`),wg(),jc(1837,`code`),lO(1838,`po-multiselect`),wg(),lO(1839,`.`),wg()()(),jc(1840,`tr`,13)(1841,`td`,14)(1842,`div`,15)(1843,`span`,16),lO(1844,` forceBooleanComponentType`),nu(1845,`br`),wg()()(),jc(1846,`td`,17)(1847,`code`,49),lO(1848,`ForceBooleanComponentEnum`),wg()(),jc(1849,`td`,20)(1850,`em`)(1851,`strong`),lO(1852,`(opcional)`),wg()(),jc(1853,`p`),lO(1854,`Valores aceitos:`),wg(),jc(1855,`ul`)(1856,`li`),lO(1857,`ForceBooleanComponentEnum.switch`),wg(),jc(1858,`li`),lO(1859,`ForceBooleanComponentEnum.checkbox`),wg()()()(),jc(1860,`tr`,13)(1861,`td`,14)(1862,`div`,15)(1863,`span`,16),lO(1864,` forceOptionsComponentType`),nu(1865,`br`),wg()()(),jc(1866,`td`,17)(1867,`code`,50),lO(1868,`ForceOptionComponentEnum`),wg()(),jc(1869,`td`,20)(1870,`em`)(1871,`strong`),lO(1872,`(opcional)`),wg()(),jc(1873,`p`),lO(1874,`pode ser utilizada em conjunto com a propriedade `),jc(1875,`code`),lO(1876,`options`),wg(),lO(1877,` forçando o componente a renderizar um `),jc(1878,`code`),lO(1879,`po-select`),wg(),lO(1880,` ou `),jc(1881,`code`),lO(1882,`po-radio-group`),wg(),lO(1883,`.`),wg(),jc(1884,`p`),lO(1885,`Valores aceitos:`),wg(),jc(1886,`ul`)(1887,`li`),lO(1888,`ForceOptionComponentEnum.radioGroup`),wg(),jc(1889,`li`),lO(1890,`ForceOptionComponentEnum.select`),wg()(),jc(1891,`blockquote`)(1892,`p`),lO(1893,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),jc(1894,`code`),lO(1895,`optionsMulti`),wg(),lO(1896,` e `),jc(1897,`code`),lO(1898,`optionsService`),wg(),lO(1899,`.`),wg()()()(),jc(1900,`tr`,13)(1901,`td`,14)(1902,`div`,15)(1903,`span`,16),lO(1904,` formField`),nu(1905,`br`),wg()()(),jc(1906,`td`,17)(1907,`code`,18),lO(1908,`string`),wg()(),jc(1909,`td`,20)(1910,`em`)(1911,`strong`),lO(1912,`(opcional)`),wg()(),jc(1913,`p`),lO(1914,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),jc(1915,`code`),lO(1916,`url`),wg(),lO(1917,`.`),wg(),jc(1918,`blockquote`)(1919,`p`),lO(1920,`O valor default é `),jc(1921,`code`),lO(1922,`files`),wg()()(),jc(1923,`p`)(1924,`strong`),lO(1925,`Componente compatível`),wg(),lO(1926,`: `),jc(1927,`code`),lO(1928,`po-upload`),wg()()()(),jc(1929,`tr`,13)(1930,`td`,14)(1931,`div`,15)(1932,`span`,16),lO(1933,` format`),nu(1934,`br`),wg()()(),jc(1935,`td`,17)(1936,`code`,18),lO(1937,`string `),wg(),jc(1938,`code`,32),lO(1939,` Array<string>`),wg()(),jc(1940,`td`,20)(1941,`em`)(1942,`strong`),lO(1943,`(opcional)`),wg()(),jc(1944,`p`),lO(1945,`Formato de exibição no campo.`),wg(),jc(1946,`p`),lO(1947,`Ao utilizar esta propriedade com o `),jc(1948,`code`),lO(1949,`type`),wg(),jc(1950,`em`),lO(1951,`PoDynamicFieldType.Date`),wg(),lO(1952,` ou `),jc(1953,`em`),lO(1954,`PoDynamicFieldType.DateTime`),wg(),lO(1955,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),wg(),jc(1956,`p`),lO(1957,`Valores válidos:`),wg(),jc(1958,`ul`)(1959,`li`),lO(1960,`dd/mm/yyyy`),wg(),jc(1961,`li`),lO(1962,`mm/dd/yyyy`),wg(),jc(1963,`li`),lO(1964,`yyyy/mm/dd`),wg()(),jc(1965,`p`),lO(1966,`Ao utilizar com o `),jc(1967,`code`),lO(1968,`type`),wg(),jc(1969,`em`),lO(1970,`PoDynamicFieldType.Time`),wg(),lO(1971,`, define o formato de exibição do horário:`),wg(),jc(1972,`p`),lO(1973,`Valores válidos:`),wg(),jc(1974,`ul`)(1975,`li`)(1976,`code`),lO(1977,`24`),wg(),lO(1978,`: formato de 24 horas (padrão)`),wg(),jc(1979,`li`)(1980,`code`),lO(1981,`12`),wg(),lO(1982,`: formato de 12 horas com indicador AM/PM`),wg()(),jc(1983,`p`),lO(1984,`Também pode-se utilizar em conjunto com `),jc(1985,`code`),lO(1986,`searchService`),wg(),lO(1987,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),wg(),jc(1988,`p`)(1989,`strong`),lO(1990,`Componentes compatíveis:`),wg(),jc(1991,`code`),lO(1992,`po-datepicker`),wg(),lO(1993,`, `),jc(1994,`code`),lO(1995,`po-datetimepicker`),wg(),lO(1996,`, `),jc(1997,`code`),lO(1998,`po-timepicker`),wg(),lO(1999,`, `),jc(2e3,`code`),lO(2001,`po-lookup`),wg(),lO(2002,`.`),wg()()(),jc(2003,`tr`,13)(2004,`td`,14)(2005,`div`,15)(2006,`span`,16),lO(2007,` formatModel`),nu(2008,`br`),wg()()(),jc(2009,`td`,17)(2010,`code`,28),lO(2011,`boolean`),wg()(),jc(2012,`td`,20)(2013,`em`)(2014,`strong`),lO(2015,`(opcional)`),wg()(),jc(2016,`p`),lO(2017,`Indica se o `),jc(2018,`code`),lO(2019,`model`),wg(),lO(2020,` receberá o valor formatado pelas propriedades `),jc(2021,`code`),lO(2022,`p-label-on`),wg(),lO(2023,` e `),jc(2024,`code`),lO(2025,`p-label-off`),wg(),lO(2026,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),wg(),jc(2027,`p`),lO(2028,`O valor padrão é: `),jc(2029,`code`),lO(2030,`false`),wg(),lO(2031,`.`),wg(),jc(2032,`blockquote`)(2033,`p`),lO(2034,`Esta propriedade está disponivel apenas para o `),jc(2035,`code`),lO(2036,`swicth`),wg(),lO(2037,`.`),wg()()()(),jc(2038,`tr`,13)(2039,`td`,14)(2040,`div`,15)(2041,`span`,16),lO(2042,` formatTime`),nu(2043,`br`),wg()()(),jc(2044,`td`,17)(2045,`code`,18),lO(2046,`string`),wg()(),jc(2047,`td`,20)(2048,`em`)(2049,`strong`),lO(2050,`(opcional)`),wg()(),jc(2051,`p`),lO(2052,`Define o formato de exibição do timer (`),jc(2053,`code`),lO(2054,`'12'`),wg(),lO(2055,` ou `),jc(2056,`code`),lO(2057,`'24'`),wg(),lO(2058,`).`),wg(),jc(2059,`p`)(2060,`strong`),lO(2061,`Componente compatível:`),wg(),jc(2062,`code`),lO(2063,`po-datetimepicker`),wg()()()(),jc(2064,`tr`,13)(2065,`td`,14)(2066,`div`,15)(2067,`span`,16),lO(2068,` gridColumns`),nu(2069,`br`),wg()()(),jc(2070,`td`,17)(2071,`code`,41),lO(2072,`number`),wg()(),jc(2073,`td`,20)(2074,`em`)(2075,`strong`),lO(2076,`(opcional)`),wg()(),jc(2077,`p`),lO(2078,`Tamanho de exibição do campo em telas.`),wg(),jc(2079,`p`),lO(2080,`Deve ser usado o sistema de `),jc(2081,`strong`),lO(2082,`grid`),wg(),lO(2083,` do PO (1 ... 12 colunas).`),wg(),jc(2084,`blockquote`)(2085,`p`),lO(2086,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(2087,`tr`,13)(2088,`td`,14)(2089,`div`,15)(2090,`span`,16),lO(2091,` gridLgColumns`),nu(2092,`br`),wg()()(),jc(2093,`td`,17)(2094,`code`,41),lO(2095,`number`),wg()(),jc(2096,`td`,20)(2097,`em`)(2098,`strong`),lO(2099,`(opcional)`),wg()(),jc(2100,`p`),lO(2101,`Tamanho de exibição do campo em telas grandes (lg).`),wg(),jc(2102,`p`),lO(2103,`Deve ser usado o sistema de `),jc(2104,`strong`),lO(2105,`grid`),wg(),lO(2106,` do PO (1 ... 12 colunas).`),wg(),jc(2107,`blockquote`)(2108,`p`),lO(2109,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(2110,`code`),lO(2111,`gridColumns`),wg(),lO(2112,`.`),wg()()()(),jc(2113,`tr`,13)(2114,`td`,14)(2115,`div`,15)(2116,`span`,16),lO(2117,` gridLgPull`),nu(2118,`br`),wg()()(),jc(2119,`td`,17)(2120,`code`,41),lO(2121,`number`),wg()(),jc(2122,`td`,20)(2123,`em`)(2124,`strong`),lO(2125,`(opcional)`),wg()(),jc(2126,`p`),lO(2127,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),wg(),jc(2128,`p`),lO(2129,`Deve ser usado o sistema de `),jc(2130,`strong`),lO(2131,`grid`),wg(),lO(2132,` do PO (1 ... 11 colunas).`),wg(),jc(2133,`blockquote`)(2134,`p`),lO(2135,`Esta propriedade não funciona com a propriedade `),jc(2136,`code`),lO(2137,`gridColumns`),wg(),lO(2138,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(2139,`tr`,13)(2140,`td`,14)(2141,`div`,15)(2142,`span`,16),lO(2143,` gridMdColumns`),nu(2144,`br`),wg()()(),jc(2145,`td`,17)(2146,`code`,41),lO(2147,`number`),wg()(),jc(2148,`td`,20)(2149,`em`)(2150,`strong`),lO(2151,`(opcional)`),wg()(),jc(2152,`p`),lO(2153,`Tamanho de exibição do campo em telas médias (md).`),wg(),jc(2154,`p`),lO(2155,`Deve ser usado o sistema de `),jc(2156,`strong`),lO(2157,`grid`),wg(),lO(2158,` do PO (1 ... 12 colunas).`),wg(),jc(2159,`blockquote`)(2160,`p`),lO(2161,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(2162,`code`),lO(2163,`gridColumns`),wg(),lO(2164,`.`),wg()()()(),jc(2165,`tr`,13)(2166,`td`,14)(2167,`div`,15)(2168,`span`,16),lO(2169,` gridMdPull`),nu(2170,`br`),wg()()(),jc(2171,`td`,17)(2172,`code`,41),lO(2173,`number`),wg()(),jc(2174,`td`,20)(2175,`em`)(2176,`strong`),lO(2177,`(opcional)`),wg()(),jc(2178,`p`),lO(2179,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),wg(),jc(2180,`p`),lO(2181,`Deve ser usado o sistema de `),jc(2182,`strong`),lO(2183,`grid`),wg(),lO(2184,` do PO (1 ... 11 colunas).`),wg(),jc(2185,`blockquote`)(2186,`p`),lO(2187,`Esta propriedade não funciona com a propriedade `),jc(2188,`code`),lO(2189,`gridColumns`),wg(),lO(2190,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(2191,`tr`,13)(2192,`td`,14)(2193,`div`,15)(2194,`span`,16),lO(2195,` gridSmColumns`),nu(2196,`br`),wg()()(),jc(2197,`td`,17)(2198,`code`,41),lO(2199,`number`),wg()(),jc(2200,`td`,20)(2201,`em`)(2202,`strong`),lO(2203,`(opcional)`),wg()(),jc(2204,`p`),lO(2205,`Tamanho de exibição do campo em telas menores (sm).`),wg(),jc(2206,`p`),lO(2207,`Deve ser usado o sistema de `),jc(2208,`strong`),lO(2209,`grid`),wg(),lO(2210,` do PO (1 ... 12 colunas).`),wg(),jc(2211,`blockquote`)(2212,`p`),lO(2213,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(2214,`code`),lO(2215,`gridColumns`),wg(),lO(2216,`.`),wg()()()(),jc(2217,`tr`,13)(2218,`td`,14)(2219,`div`,15)(2220,`span`,16),lO(2221,` gridSmPull`),nu(2222,`br`),wg()()(),jc(2223,`td`,17)(2224,`code`,41),lO(2225,`number`),wg()(),jc(2226,`td`,20)(2227,`em`)(2228,`strong`),lO(2229,`(opcional)`),wg()(),jc(2230,`p`),lO(2231,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),wg(),jc(2232,`p`),lO(2233,`Deve ser usado o sistema de `),jc(2234,`strong`),lO(2235,`grid`),wg(),lO(2236,` do PO (1 ... 11 colunas).`),wg(),jc(2237,`blockquote`)(2238,`p`),lO(2239,`Esta propriedade não funciona com a propriedade `),jc(2240,`code`),lO(2241,`gridColumns`),wg(),lO(2242,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(2243,`tr`,13)(2244,`td`,14)(2245,`div`,15)(2246,`span`,16),lO(2247,` gridXlColumns`),nu(2248,`br`),wg()()(),jc(2249,`td`,17)(2250,`code`,41),lO(2251,`number`),wg()(),jc(2252,`td`,20)(2253,`em`)(2254,`strong`),lO(2255,`(opcional)`),wg()(),jc(2256,`p`),lO(2257,`Tamanho de exibição do campo em telas extra grandes (xl).`),wg(),jc(2258,`p`),lO(2259,`Deve ser usado o sistema de `),jc(2260,`strong`),lO(2261,`grid`),wg(),lO(2262,` do PO (1 ... 12 colunas).`),wg(),jc(2263,`blockquote`)(2264,`p`),lO(2265,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(2266,`code`),lO(2267,`gridColumns`),wg(),lO(2268,`.`),wg()()()(),jc(2269,`tr`,13)(2270,`td`,14)(2271,`div`,15)(2272,`span`,16),lO(2273,` gridXlPull`),nu(2274,`br`),wg()()(),jc(2275,`td`,17)(2276,`code`,41),lO(2277,`number`),wg()(),jc(2278,`td`,20)(2279,`em`)(2280,`strong`),lO(2281,`(opcional)`),wg()(),jc(2282,`p`),lO(2283,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),wg(),jc(2284,`p`),lO(2285,`Deve ser usado o sistema de `),jc(2286,`strong`),lO(2287,`grid`),wg(),lO(2288,` do PO (1 ... 11 colunas).`),wg(),jc(2289,`blockquote`)(2290,`p`),lO(2291,`Esta propriedade não funciona com a propriedade `),jc(2292,`code`),lO(2293,`gridColumns`),wg(),lO(2294,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(2295,`tr`,13)(2296,`td`,14)(2297,`div`,15)(2298,`span`,16),lO(2299,` headers`),nu(2300,`br`),wg()()(),jc(2301,`td`,17)(2302,`code`,51),lO(2303,`{ [name: string]: string `),wg(),jc(2304,`code`,52),lO(2305,` Array<string>;
}`),wg()(),jc(2306,`td`,20)(2307,`em`)(2308,`strong`),lO(2309,`(opcional)`),wg()(),jc(2310,`p`),lO(2311,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),wg(),jc(2312,`p`)(2313,`strong`),lO(2314,`Componente compatível`),wg(),lO(2315,`: `),jc(2316,`code`),lO(2317,`po-upload`),wg()()()(),jc(2318,`tr`,13)(2319,`td`,14)(2320,`div`,15)(2321,`span`,16),lO(2322,` help`),nu(2323,`br`),wg()()(),jc(2324,`td`,17)(2325,`code`,18),lO(2326,`string`),wg()(),jc(2327,`td`,20)(2328,`em`)(2329,`strong`),lO(2330,`(opcional)`),wg()(),jc(2331,`p`),lO(2332,`Texto de ajuda.`),wg()()(),jc(2333,`tr`,13)(2334,`td`,14)(2335,`div`,15)(2336,`span`,16),lO(2337,` helper`),nu(2338,`br`),wg()()(),jc(2339,`td`,17)(2340,`code`,18),lO(2341,`string `),wg(),jc(2342,`code`,53),lO(2343,` PoHelperOptions`),wg()(),jc(2344,`td`,20)(2345,`em`)(2346,`strong`),lO(2347,`(opcional)`),wg()(),jc(2348,`p`),lO(2349,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),wg()()(),jc(2350,`tr`,13)(2351,`td`,14)(2352,`div`,15)(2353,`span`,16),lO(2354,` hideLabelStatus`),nu(2355,`br`),wg()()(),jc(2356,`td`,17)(2357,`code`,28),lO(2358,`boolean`),wg()(),jc(2359,`td`,20)(2360,`em`)(2361,`strong`),lO(2362,`(opcional)`),wg()(),jc(2363,`p`),lO(2364,`Indica se o status do `),jc(2365,`code`),lO(2366,`model`),wg(),lO(2367,` será escondido visualmente ao lado do switch`),wg()()(),jc(2368,`tr`,13)(2369,`td`,14)(2370,`div`,15)(2371,`span`,16),lO(2372,` hidePasswordPeek`),nu(2373,`br`),wg()()(),jc(2374,`td`,17)(2375,`code`,28),lO(2376,`boolean`),wg()(),jc(2377,`td`,20)(2378,`em`)(2379,`strong`),lO(2380,`(opcional)`),wg()(),jc(2381,`p`),lO(2382,`Permite esconder a função de espiar a senha digitada no `),jc(2383,`code`),lO(2384,`po-password`),wg(),lO(2385,`.`),wg()()(),jc(2386,`tr`,13)(2387,`td`,14)(2388,`div`,15)(2389,`span`,16),lO(2390,` hideRestrictionsInfo`),nu(2391,`br`),wg()()(),jc(2392,`td`,17)(2393,`code`,28),lO(2394,`boolean`),wg()(),jc(2395,`td`,20)(2396,`em`)(2397,`strong`),lO(2398,`(opcional)`),wg()(),jc(2399,`p`),lO(2400,`Oculta visualmente as informações de restrições para o upload.`),wg(),jc(2401,`p`)(2402,`strong`),lO(2403,`Componente compatível`),wg(),lO(2404,`: `),jc(2405,`code`),lO(2406,`po-upload`),wg()()()(),jc(2407,`tr`,13)(2408,`td`,14)(2409,`div`,15)(2410,`span`,16),lO(2411,` hideSearch`),nu(2412,`br`),wg()()(),jc(2413,`td`,17)(2414,`code`,28),lO(2415,`boolean`),wg()(),jc(2416,`td`,20)(2417,`em`)(2418,`strong`),lO(2419,`(opcional)`),wg()(),jc(2420,`p`),lO(2421,`Esconde o campo de pesquisa existente dentro do dropdown do `),jc(2422,`code`),lO(2423,`po-multiselect`),wg(),lO(2424,`.`),wg()()(),jc(2425,`tr`,13)(2426,`td`,14)(2427,`div`,15)(2428,`span`,16),lO(2429,` hideSelectAll`),nu(2430,`br`),wg()()(),jc(2431,`td`,17)(2432,`code`,28),lO(2433,`boolean`),wg()(),jc(2434,`td`,20)(2435,`em`)(2436,`strong`),lO(2437,`(opcional)`),wg()(),jc(2438,`p`),lO(2439,`Indica se o campo "Selecionar todos" do `),jc(2440,`code`),lO(2441,`po-multiselect`),wg(),lO(2442,` será escondido.`),wg()()(),jc(2443,`tr`,13)(2444,`td`,14)(2445,`div`,15)(2446,`span`,16),lO(2447,` hideSelectButton`),nu(2448,`br`),wg()()(),jc(2449,`td`,17)(2450,`code`,28),lO(2451,`boolean`),wg()(),jc(2452,`td`,20)(2453,`em`)(2454,`strong`),lO(2455,`(opcional)`),wg()(),jc(2456,`p`),lO(2457,`Omite o botão de seleção de arquivos.`),wg(),jc(2458,`blockquote`)(2459,`p`),lO(2460,`Caso o valor definido seja `),jc(2461,`code`),lO(2462,`true`),wg(),lO(2463,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(2464,`code`),lO(2465,`selectFiles()`),wg(),lO(2466,` para seleção de arquivos.`),wg()(),jc(2467,`p`)(2468,`strong`),lO(2469,`Componente compatível`),wg(),lO(2470,`: `),jc(2471,`code`),lO(2472,`po-upload`),wg()()()(),jc(2473,`tr`,13)(2474,`td`,14)(2475,`div`,15)(2476,`span`,16),lO(2477,` hideSendButton`),nu(2478,`br`),wg()()(),jc(2479,`td`,17)(2480,`code`,28),lO(2481,`boolean`),wg()(),jc(2482,`td`,20)(2483,`em`)(2484,`strong`),lO(2485,`(opcional)`),wg()(),jc(2486,`p`),lO(2487,`Omite o botão de envio de arquivos.`),wg(),jc(2488,`blockquote`)(2489,`p`),lO(2490,`Caso o valor definido seja `),jc(2491,`code`),lO(2492,`true`),wg(),lO(2493,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(2494,`code`),lO(2495,`sendFiles()`),wg(),lO(2496,` para envio do(s) arquivo(s) selecionado(s).`),wg()(),jc(2497,`p`)(2498,`strong`),lO(2499,`Componente compatível`),wg(),lO(2500,`: `),jc(2501,`code`),lO(2502,`po-upload`),wg()()()(),jc(2503,`tr`,13)(2504,`td`,14)(2505,`div`,15)(2506,`span`,16),lO(2507,` icon`),nu(2508,`br`),wg()()(),jc(2509,`td`,17)(2510,`code`,18),lO(2511,`string `),wg(),jc(2512,`code`,54),lO(2513,` TemplateRef<void>`),wg()(),jc(2514,`td`,20)(2515,`em`)(2516,`strong`),lO(2517,`(opcional)`),wg()(),jc(2518,`p`),lO(2519,`Define o ícone que será exibido no início do campo.`),wg(),jc(2520,`blockquote`)(2521,`p`),lO(2522,`Esta propriedade só pode ser utilizado nos campos:`),wg()(),jc(2523,`ul`)(2524,`li`),lO(2525,`Input;`),wg(),jc(2526,`li`),lO(2527,`Number;`),wg(),jc(2528,`li`),lO(2529,`Decimal;`),wg(),jc(2530,`li`),lO(2531,`Combo;`),wg(),jc(2532,`li`),lO(2533,`Password;`),wg()(),jc(2534,`blockquote`)(2535,`p`),lO(2536,`Veja a disponibilidade de ícones em `),jc(2537,`a`,55),lO(2538,`biblioteca de ícones`),wg(),lO(2539,`.`),wg()()()(),jc(2540,`tr`,13)(2541,`td`,14)(2542,`div`,15)(2543,`span`,16),lO(2544,` infiniteScroll`),nu(2545,`br`),wg()()(),jc(2546,`td`,17)(2547,`code`,28),lO(2548,`boolean`),wg()(),jc(2549,`td`,20)(2550,`em`)(2551,`strong`),lO(2552,`(opcional)`),wg()(),jc(2553,`p`),lO(2554,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),wg(),jc(2555,`p`)(2556,`strong`),lO(2557,`Componentes compatíveis:`),wg(),jc(2558,`code`),lO(2559,`po-combo`),wg(),lO(2560,`, `),jc(2561,`code`),lO(2562,`po-lookup`),wg(),lO(2563,`.`),wg()()(),jc(2564,`tr`,13)(2565,`td`,14)(2566,`div`,15)(2567,`span`,16),lO(2568,` infiniteScrollDistance`),nu(2569,`br`),wg()()(),jc(2570,`td`,17)(2571,`code`,41),lO(2572,`number`),wg()(),jc(2573,`td`,20)(2574,`em`)(2575,`strong`),lO(2576,`(opcional)`),wg()(),jc(2577,`p`),lO(2578,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),jc(2579,`strong`),lO(2580,`Exemplos`),wg(),jc(2581,`code`),lO(2582,`{ infiniteScrollDistance: 80 }`),wg(),lO(2583,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),wg(),jc(2584,`p`)(2585,`strong`),lO(2586,`Componente compatível:`),wg(),jc(2587,`code`),lO(2588,`po-combo`),wg(),lO(2589,`.`),wg()()(),jc(2590,`tr`,13)(2591,`td`,14)(2592,`div`,15)(2593,`span`,16),lO(2594,` invalidValue`),nu(2595,`br`),wg()()(),jc(2596,`td`,17)(2597,`code`,28),lO(2598,`boolean`),wg()(),jc(2599,`td`,20)(2600,`em`)(2601,`strong`),lO(2602,`(opcional)`),wg()(),jc(2603,`p`),lO(2604,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),jc(2605,`code`),lO(2606,`p-field-error-message`),wg(),lO(2607,`.`),wg(),jc(2608,`blockquote`)(2609,`p`),lO(2610,`Caso essa propriedade seja definida como `),jc(2611,`code`),lO(2612,`true`),wg(),lO(2613,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),wg()(),jc(2614,`p`)(2615,`strong`),lO(2616,`Componente compatível`),wg(),lO(2617,`: `),jc(2618,`code`),lO(2619,`po-switch`),wg()()()(),jc(2620,`tr`,13)(2621,`td`,14)(2622,`div`,15)(2623,`span`,16),lO(2624,` isoFormat`),nu(2625,`br`),wg()()(),jc(2626,`td`,17)(2627,`code`,56),lO(2628,`PoDatepickerIsoFormat`),wg()(),jc(2629,`td`,20)(2630,`em`)(2631,`strong`),lO(2632,`(opcional)`),wg()(),jc(2633,`p`),lO(2634,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),wg(),jc(2635,`blockquote`)(2636,`p`),lO(2637,`Veja os valores válidos no `),jc(2638,`code`),lO(2639,`PoDatepickerIsoFormat`),wg(),lO(2640,`.`),wg()(),jc(2641,`p`)(2642,`strong`),lO(2643,`Componente compatível:`),wg(),jc(2644,`code`),lO(2645,`po-datepicker`),wg()()()(),jc(2646,`tr`,13)(2647,`td`,14)(2648,`div`,15)(2649,`span`,16),lO(2650,` key`),nu(2651,`br`),wg()()(),jc(2652,`td`,17)(2653,`code`,28),lO(2654,`boolean`),wg()(),jc(2655,`td`,20)(2656,`em`)(2657,`strong`),lO(2658,`(opcional)`),wg()(),jc(2659,`p`),lO(2660,`Identificador`),wg()()(),jc(2661,`tr`,13)(2662,`td`,14)(2663,`div`,15)(2664,`span`,16),lO(2665,` keydown`),nu(2666,`br`),wg()()(),jc(2667,`td`,17)(2668,`code`,29),lO(2669,`Function`),wg()(),jc(2670,`td`,20)(2671,`em`)(2672,`strong`),lO(2673,`(opcional)`),wg()(),jc(2674,`p`),lO(2675,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(2676,`code`),lO(2677,`KeyboardEvent`),wg(),lO(2678,` com informações sobre a tecla.`),wg()()(),jc(2679,`tr`,13)(2680,`td`,14)(2681,`div`,15)(2682,`span`,16),lO(2683,` label`),nu(2684,`br`),wg()()(),jc(2685,`td`,17)(2686,`code`,18),lO(2687,`string`),wg()(),jc(2688,`td`,20)(2689,`em`)(2690,`strong`),lO(2691,`(opcional)`),wg()(),jc(2692,`p`),lO(2693,`Rótulo do campo exibido.`),wg(),jc(2694,`p`),lO(2695,`Caso não seja informado, será utilizado como `),jc(2696,`code`),lO(2697,`label`),wg(),lO(2698,` o valor da propriedade `),jc(2699,`code`),lO(2700,`property`),wg(),lO(2701,` com a primeira letra em maiúsculo.`),wg()()(),jc(2702,`tr`,13)(2703,`td`,14)(2704,`div`,15)(2705,`span`,16),lO(2706,` labelPosition`),nu(2707,`br`),wg()()(),jc(2708,`td`,17)(2709,`code`,57),lO(2710,`PoSwitchLabelPosition`),wg()(),jc(2711,`td`,20)(2712,`em`)(2713,`strong`),lO(2714,`(opcional)`),wg()(),jc(2715,`p`),lO(2716,`Posição de exibição do rótulo do PoSwitch.`),wg(),jc(2717,`blockquote`)(2718,`p`),lO(2719,`Por padrão exibe à direita.`),wg()()()(),jc(2720,`tr`,13)(2721,`td`,14)(2722,`div`,15)(2723,`span`,16),lO(2724,` listboxControlPosition`),nu(2725,`br`),wg()()(),jc(2726,`td`,17)(2727,`code`,58),lO(2728,`'top' `),wg(),jc(2729,`code`,59),lO(2730,` 'bottom'`),wg()(),jc(2731,`td`,20)(2732,`em`)(2733,`strong`),lO(2734,`(opcional)`),wg()(),jc(2735,`p`),lO(2736,`Define a direção preferida para exibição do `),jc(2737,`code`),lO(2738,`listbox`),wg(),lO(2739,` em relação ao campo (`),jc(2740,`code`),lO(2741,`top`),wg(),lO(2742,` ou `),jc(2743,`code`),lO(2744,`bottom`),wg(),lO(2745,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),wg(),jc(2746,`p`)(2747,`strong`),lO(2748,`Componentes compatíveis:`),wg(),jc(2749,`code`),lO(2750,`po-multiselect`),wg(),lO(2751,`, `),jc(2752,`code`),lO(2753,`po-combo`),wg(),lO(2754,`.`),wg()()(),jc(2755,`tr`,13)(2756,`td`,14)(2757,`div`,15)(2758,`span`,16),lO(2759,` literals`),nu(2760,`br`),wg()()(),jc(2761,`td`,17)(2762,`code`,60),lO(2763,`PoLookupLiterals `),wg(),jc(2764,`code`,61),lO(2765,` PoMultiselectLiterals `),wg(),jc(2766,`code`,62),lO(2767,` PoComboLiterals `),wg(),jc(2768,`code`,63),lO(2769,` PoDatepickerRangeLiterals `),wg(),jc(2770,`code`,64),lO(2771,` PoUploadLiterals`),wg()(),jc(2772,`td`,20)(2773,`em`)(2774,`strong`),lO(2775,`(opcional)`),wg()(),jc(2776,`p`),lO(2777,`Objeto com as literais usadas para os seguintes componentes: `),jc(2778,`code`),lO(2779,`po-lookup`),wg(),lO(2780,`, `),jc(2781,`code`),lO(2782,`po-multiselect`),wg(),lO(2783,`, `),jc(2784,`code`),lO(2785,`po-combo`),wg(),lO(2786,` e `),jc(2787,`code`),lO(2788,`po-datepicker-range`),wg(),lO(2789,`.`),wg(),jc(2790,`blockquote`)(2791,`p`),lO(2792,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),wg()(),jc(2793,`p`)(2794,`strong`),lO(2795,`Componentes compatíveis:`),wg(),jc(2796,`code`),lO(2797,`po-lookup`),wg(),lO(2798,`, `),jc(2799,`code`),lO(2800,`po-multiselect`),wg(),lO(2801,`, `),jc(2802,`code`),lO(2803,`po-combo`),wg(),lO(2804,`, `),jc(2805,`code`),lO(2806,`po-datepicker-range`),wg()()()(),jc(2807,`tr`,13)(2808,`td`,14)(2809,`div`,15)(2810,`span`,16),lO(2811,` loading`),nu(2812,`br`),wg()()(),jc(2813,`td`,17)(2814,`code`,28),lO(2815,`boolean`),wg()(),jc(2816,`td`,20)(2817,`em`)(2818,`strong`),lO(2819,`(opcional)`),wg()(),jc(2820,`p`),lO(2821,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),wg(),jc(2822,`blockquote`)(2823,`p`),lO(2824,`Por padrão é `),jc(2825,`code`),lO(2826,`false`),wg(),lO(2827,`.`),wg()(),jc(2828,`p`)(2829,`strong`),lO(2830,`Componentes compatíveis:`),wg(),jc(2831,`code`),lO(2832,`po-datepicker`),wg(),lO(2833,`, `),jc(2834,`code`),lO(2835,`po-datepicker-range`),wg(),lO(2836,`, `),jc(2837,`code`),lO(2838,`po-number`),wg(),lO(2839,`, `),jc(2840,`code`),lO(2841,`po-decimal`),wg(),lO(2842,`,
`),jc(2843,`code`),lO(2844,`po-input`),wg(),lO(2845,`, `),jc(2846,`code`),lO(2847,`po-select`),wg(),lO(2848,`, `),jc(2849,`code`),lO(2850,`po-switch`),wg(),lO(2851,`, `),jc(2852,`code`),lO(2853,`po-combo`),wg(),lO(2854,`, `),jc(2855,`code`),lO(2856,`po-lookup`),wg(),lO(2857,`, `),jc(2858,`code`),lO(2859,`po-multiselect`),wg(),lO(2860,`,
`),jc(2861,`code`),lO(2862,`po-textarea`),wg(),lO(2863,`, `),jc(2864,`code`),lO(2865,`po-password`),wg(),lO(2866,`, `),jc(2867,`code`),lO(2868,`po-upload`),wg(),lO(2869,`.`),wg()()(),jc(2870,`tr`,13)(2871,`td`,14)(2872,`div`,15)(2873,`span`,16),lO(2874,` locale`),nu(2875,`br`),wg()()(),jc(2876,`td`,17)(2877,`code`,18),lO(2878,`string`),wg()(),jc(2879,`td`,20)(2880,`em`)(2881,`strong`),lO(2882,`(opcional)`),wg()(),jc(2883,`p`),lO(2884,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),jc(2885,`a`,65)(2886,`code`),lO(2887,`I18n`),wg()()(),jc(2888,`p`),lO(2889,`Exemplo de utilização:`),wg(),jc(2890,`pre`)(2891,`code`),lO(2892,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),wg()(),jc(2893,`blockquote`)(2894,`p`),lO(2895,`Para ver quais linguagens suportadas acesse `),jc(2896,`a`,65)(2897,`code`),lO(2898,`I18n`),wg()()()(),jc(2899,`p`)(2900,`strong`),lO(2901,`Componentes compatíveis:`),wg(),jc(2902,`code`),lO(2903,`po-datepicker`),wg(),lO(2904,`, `),jc(2905,`code`),lO(2906,`po-decimal`),wg(),lO(2907,`, `),jc(2908,`code`),lO(2909,`po-timepicker`),wg(),lO(2910,`.`),wg()()(),jc(2911,`tr`,13)(2912,`td`,14)(2913,`div`,15)(2914,`span`,16),lO(2915,` mask`),nu(2916,`br`),wg()()(),jc(2917,`td`,17)(2918,`code`,18),lO(2919,`string`),wg()(),jc(2920,`td`,20)(2921,`em`)(2922,`strong`),lO(2923,`(opcional)`),wg()(),jc(2924,`p`),lO(2925,`Máscara para o campo.`),wg(),jc(2926,`p`)(2927,`strong`),lO(2928,`Componente compatível:`),wg(),jc(2929,`code`),lO(2930,`po-input`),wg(),lO(2931,`.`),wg(),jc(2932,`blockquote`)(2933,`p`),lO(2934,`também é atribuído ao utilizar a propriedade `),jc(2935,`code`),lO(2936,`type: time`),wg(),lO(2937,`.`),wg()(),jc(2938,`blockquote`)(2939,`p`),lO(2940,`Incompatível com `),jc(2941,`code`),lO(2942,`po-decimal`),wg(),lO(2943,`.`),wg()()()(),jc(2944,`tr`,13)(2945,`td`,14)(2946,`div`,15)(2947,`span`,16),lO(2948,` maskFormatModel`),nu(2949,`br`),wg()()(),jc(2950,`td`,17)(2951,`code`,28),lO(2952,`boolean`),wg()(),jc(2953,`td`,20)(2954,`em`)(2955,`strong`),lO(2956,`(opcional)`),wg()(),jc(2957,`p`),lO(2958,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),jc(2959,`code`),lO(2960,`false`),wg(),lO(2961,`.`),wg(),jc(2962,`p`)(2963,`strong`),lO(2964,`Componente compatível:`),wg(),jc(2965,`code`),lO(2966,`po-input`),wg(),lO(2967,`.`),wg(),jc(2968,`blockquote`)(2969,`p`),lO(2970,`também é atribuído ao utilizar a propriedade `),jc(2971,`code`),lO(2972,`type: time`),wg(),lO(2973,`.`),wg()()()(),jc(2974,`tr`,13)(2975,`td`,14)(2976,`div`,15)(2977,`span`,16),lO(2978,` maskNoLengthValidation`),nu(2979,`br`),wg()()(),jc(2980,`td`,17)(2981,`code`,28),lO(2982,`boolean`),wg()(),jc(2983,`td`,20)(2984,`em`)(2985,`strong`),lO(2986,`(opcional)`),wg()(),jc(2987,`p`),lO(2988,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(2989,`code`),lO(2990,`minLength`),wg(),lO(2991,`) e máximo (`),jc(2992,`code`),lO(2993,`maxLength`),wg(),lO(2994,`) quando há uma máscara (`),jc(2995,`code`),lO(2996,`p-mask`),wg(),lO(2997,`) definida.`),wg(),jc(2998,`ul`)(2999,`li`),lO(3e3,`Quando `),jc(3001,`code`),lO(3002,`true`),wg(),lO(3003,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(3004,`li`),lO(3005,`Quando `),jc(3006,`code`),lO(3007,`false`),wg(),lO(3008,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(3009,`p`)(3010,`strong`),lO(3011,`Componentes compatíveis:`),wg(),jc(3012,`code`),lO(3013,`po-input`),wg(),lO(3014,`, `),jc(3015,`code`),lO(3016,`po-decimal`),wg(),lO(3017,`.`),wg(),jc(3018,`blockquote`)(3019,`p`),lO(3020,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(3021,`code`),lO(3022,`p-mask-format-model`),wg(),lO(3023,`.`),wg()(),jc(3024,`p`),lO(3025,`Exemplo:`),wg(),jc(3026,`pre`)(3027,`code`),lO(3028,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),wg()(),jc(3029,`ul`)(3030,`li`),lO(3031,`Entrada: `),jc(3032,`code`),lO(3033,`11.111.111/1111-11`),wg(),lO(3034,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),wg()()()(),jc(3035,`tr`,13)(3036,`td`,14)(3037,`div`,15)(3038,`span`,16),lO(3039,` maxLength`),nu(3040,`br`),wg()()(),jc(3041,`td`,17)(3042,`code`,41),lO(3043,`number`),wg()(),jc(3044,`td`,20)(3045,`em`)(3046,`strong`),lO(3047,`(opcional)`),wg()(),jc(3048,`p`),lO(3049,`Tamanho máximo de caracteres.`),wg(),jc(3050,`p`)(3051,`strong`),lO(3052,`Componentes compatíveis:`),wg(),jc(3053,`code`),lO(3054,`po-input`),wg(),lO(3055,`, `),jc(3056,`code`),lO(3057,`po-number`),wg(),lO(3058,`, `),jc(3059,`code`),lO(3060,`po-decimal`),wg(),lO(3061,`, `),jc(3062,`code`),lO(3063,`po-textarea`),wg(),lO(3064,`, `),jc(3065,`code`),lO(3066,`po-password`),wg(),lO(3067,`.`),wg()()(),jc(3068,`tr`,13)(3069,`td`,14)(3070,`div`,15)(3071,`span`,16),lO(3072,` maxTime`),nu(3073,`br`),wg()()(),jc(3074,`td`,17)(3075,`code`,18),lO(3076,`string`),wg()(),jc(3077,`td`,20)(3078,`em`)(3079,`strong`),lO(3080,`(opcional)`),wg()(),jc(3081,`p`),lO(3082,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),jc(3083,`code`),lO(3084,`HH:mm`),wg(),lO(3085,` ou `),jc(3086,`code`),lO(3087,`HH:mm:ss`),wg(),lO(3088,`.`),wg(),jc(3089,`p`)(3090,`strong`),lO(3091,`Componente compatível:`),wg(),jc(3092,`code`),lO(3093,`po-datetimepicker`),wg(),lO(3094,`, `),jc(3095,`code`),lO(3096,`po-timepicker`),wg()()()(),jc(3097,`tr`,13)(3098,`td`,14)(3099,`div`,15)(3100,`span`,16),lO(3101,` maxValue`),nu(3102,`br`),wg()()(),jc(3103,`td`,17)(3104,`code`,18),lO(3105,`string `),wg(),jc(3106,`code`,41),lO(3107,` number`),wg()(),jc(3108,`td`,20)(3109,`em`)(3110,`strong`),lO(3111,`(opcional)`),wg()(),jc(3112,`p`),lO(3113,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),jc(3114,`em`),lO(3115,`number`),wg(),lO(3116,`, `),jc(3117,`em`),lO(3118,`date`),wg(),lO(3119,`, `),jc(3120,`em`),lO(3121,`dateTime`),wg(),lO(3122,` ou `),jc(3123,`em`),lO(3124,`time`),wg(),lO(3125,`.`),wg(),jc(3126,`blockquote`)(3127,`p`),lO(3128,`Para `),jc(3129,`code`),lO(3130,`po-timepicker`),wg(),lO(3131,`, o valor deve estar no formato `),jc(3132,`code`),lO(3133,`HH:mm`),wg(),lO(3134,` ou `),jc(3135,`code`),lO(3136,`HH:mm:ss`),wg(),lO(3137,`.`),wg()(),jc(3138,`p`)(3139,`strong`),lO(3140,`Componentes compatíveis:`),wg(),jc(3141,`code`),lO(3142,`po-datepicker`),wg(),lO(3143,`, `),jc(3144,`code`),lO(3145,`po-datepicker-range`),wg(),lO(3146,`, `),jc(3147,`code`),lO(3148,`po-number`),wg(),lO(3149,`, `),jc(3150,`code`),lO(3151,`po-decimal`),wg(),lO(3152,`, `),jc(3153,`code`),lO(3154,`po-timepicker`),wg()()()(),jc(3155,`tr`,13)(3156,`td`,14)(3157,`div`,15)(3158,`span`,16),lO(3159,` minLength`),nu(3160,`br`),wg()()(),jc(3161,`td`,17)(3162,`code`,41),lO(3163,`number`),wg()(),jc(3164,`td`,20)(3165,`em`)(3166,`strong`),lO(3167,`(opcional)`),wg()(),jc(3168,`p`),lO(3169,`Tamanho mínimo de caracteres.`),wg(),jc(3170,`p`)(3171,`strong`),lO(3172,`Componentes compatíveis:`),wg(),jc(3173,`code`),lO(3174,`po-input`),wg(),lO(3175,`, `),jc(3176,`code`),lO(3177,`po-number`),wg(),lO(3178,`, `),jc(3179,`code`),lO(3180,`po-decimal`),wg(),lO(3181,`, `),jc(3182,`code`),lO(3183,`po-textarea`),wg(),lO(3184,`, `),jc(3185,`code`),lO(3186,`po-password`),wg(),lO(3187,`.`),wg()()(),jc(3188,`tr`,13)(3189,`td`,14)(3190,`div`,15)(3191,`span`,16),lO(3192,` minTime`),nu(3193,`br`),wg()()(),jc(3194,`td`,17)(3195,`code`,18),lO(3196,`string`),wg()(),jc(3197,`td`,20)(3198,`em`)(3199,`strong`),lO(3200,`(opcional)`),wg()(),jc(3201,`p`),lO(3202,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),jc(3203,`code`),lO(3204,`HH:mm`),wg(),lO(3205,` ou `),jc(3206,`code`),lO(3207,`HH:mm:ss`),wg(),lO(3208,`.`),wg(),jc(3209,`p`)(3210,`strong`),lO(3211,`Componente compatível:`),wg(),jc(3212,`code`),lO(3213,`po-datetimepicker`),wg(),lO(3214,`, `),jc(3215,`code`),lO(3216,`po-timepicker`),wg()()()(),jc(3217,`tr`,13)(3218,`td`,14)(3219,`div`,15)(3220,`span`,16),lO(3221,` minValue`),nu(3222,`br`),wg()()(),jc(3223,`td`,17)(3224,`code`,18),lO(3225,`string `),wg(),jc(3226,`code`,41),lO(3227,` number`),wg()(),jc(3228,`td`,20)(3229,`em`)(3230,`strong`),lO(3231,`(opcional)`),wg()(),jc(3232,`p`),lO(3233,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),jc(3234,`em`),lO(3235,`number`),wg(),lO(3236,`, `),jc(3237,`em`),lO(3238,`date`),wg(),lO(3239,`, `),jc(3240,`em`),lO(3241,`dateTime`),wg(),lO(3242,` ou `),jc(3243,`em`),lO(3244,`time`),wg(),lO(3245,`.`),wg(),jc(3246,`blockquote`)(3247,`p`),lO(3248,`Para `),jc(3249,`code`),lO(3250,`po-timepicker`),wg(),lO(3251,`, o valor deve estar no formato `),jc(3252,`code`),lO(3253,`HH:mm`),wg(),lO(3254,` ou `),jc(3255,`code`),lO(3256,`HH:mm:ss`),wg(),lO(3257,`.`),wg()(),jc(3258,`p`)(3259,`strong`),lO(3260,`Componentes compatíveis:`),wg(),jc(3261,`code`),lO(3262,`po-datepicker`),wg(),lO(3263,`, `),jc(3264,`code`),lO(3265,`po-datepicker-range`),wg(),lO(3266,`, `),jc(3267,`code`),lO(3268,`po-number`),wg(),lO(3269,`, `),jc(3270,`code`),lO(3271,`po-decimal`),wg(),lO(3272,`, `),jc(3273,`code`),lO(3274,`po-timepicker`),wg()()()(),jc(3275,`tr`,13)(3276,`td`,14)(3277,`div`,15)(3278,`span`,16),lO(3279,` minuteInterval`),nu(3280,`br`),wg()()(),jc(3281,`td`,17)(3282,`code`,41),lO(3283,`number`),wg()(),jc(3284,`td`,20)(3285,`em`)(3286,`strong`),lO(3287,`(opcional)`),wg()(),jc(3288,`p`),lO(3289,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),wg()()(),jc(3290,`tr`,13)(3291,`td`,14)(3292,`div`,15)(3293,`span`,16),lO(3294,` mode`),nu(3295,`br`),wg()()(),jc(3296,`td`,17)(3297,`code`,66),lO(3298,`'month-year' `),wg(),jc(3299,`code`,67),lO(3300,` 'year'`),wg()(),jc(3301,`td`,20)(3302,`em`)(3303,`strong`),lO(3304,`(opcional)`),wg()(),jc(3305,`p`),lO(3306,`Define o modo de seleção do `),jc(3307,`code`),lO(3308,`po-datepicker`),wg(),lO(3309,`.`),wg(),jc(3310,`p`),lO(3311,`Valores aceitos:`),wg(),jc(3312,`ul`)(3313,`li`)(3314,`code`),lO(3315,`'month-year'`),wg(),lO(3316,`: exibe seleção de mês e ano (formato `),jc(3317,`code`),lO(3318,`MM/YYYY`),wg(),lO(3319,`)`),wg(),jc(3320,`li`)(3321,`code`),lO(3322,`'year'`),wg(),lO(3323,`: exibe seleção apenas de ano (formato `),jc(3324,`code`),lO(3325,`YYYY`),wg(),lO(3326,`)`),wg()(),jc(3327,`p`)(3328,`strong`),lO(3329,`Componente compatível:`),wg(),jc(3330,`code`),lO(3331,`po-datepicker`),wg()()()(),jc(3332,`tr`,13)(3333,`td`,14)(3334,`div`,15)(3335,`span`,16),lO(3336,` modelFormat`),nu(3337,`br`),wg()()(),jc(3338,`td`,17)(3339,`code`,68),lO(3340,`PoTimepickerModelFormat`),wg()(),jc(3341,`td`,20)(3342,`em`)(3343,`strong`),lO(3344,`(opcional)`),wg()(),jc(3345,`p`),lO(3346,`Define o formato do valor do horário a ser utilizado no model do `),jc(3347,`code`),lO(3348,`po-timepicker`),wg(),lO(3349,`.`),wg(),jc(3350,`blockquote`)(3351,`p`),lO(3352,`Veja os valores válidos no `),jc(3353,`code`),lO(3354,`PoTimepickerModelFormat`),wg(),lO(3355,`.`),wg()(),jc(3356,`p`)(3357,`strong`),lO(3358,`Componente compatível:`),wg(),jc(3359,`code`),lO(3360,`po-timepicker`),wg()()()(),jc(3361,`tr`,13)(3362,`td`,14)(3363,`div`,15)(3364,`span`,16),lO(3365,` multiple`),nu(3366,`br`),wg()()(),jc(3367,`td`,17)(3368,`code`,28),lO(3369,`boolean`),wg()(),jc(3370,`td`,20)(3371,`em`)(3372,`strong`),lO(3373,`(opcional)`),wg()(),jc(3374,`p`),lO(3375,`Permite a seleção de múltiplos itens.`),wg(),jc(3376,`p`)(3377,`strong`),lO(3378,`Componentes compatíveis:`),wg(),jc(3379,`code`),lO(3380,`po-lookup`),wg(),lO(3381,`, `),jc(3382,`code`),lO(3383,`po-upload`),wg()()()(),jc(3384,`tr`,13)(3385,`td`,14)(3386,`div`,15)(3387,`span`,16),lO(3388,` noAutocomplete`),nu(3389,`br`),wg()()(),jc(3390,`td`,17)(3391,`code`,28),lO(3392,`boolean`),wg()(),jc(3393,`td`,20)(3394,`em`)(3395,`strong`),lO(3396,`(opcional)`),wg()(),jc(3397,`p`),lO(3398,`Define a propriedade nativa `),jc(3399,`code`),lO(3400,`autocomplete`),wg(),lO(3401,` do campo como off.`),wg(),jc(3402,`p`)(3403,`strong`),lO(3404,`Componentes compatíveis:`),wg(),jc(3405,`code`),lO(3406,`po-datepicker`),wg(),lO(3407,`, `),jc(3408,`code`),lO(3409,`po-datepicker-range`),wg(),lO(3410,`, `),jc(3411,`code`),lO(3412,`po-input`),wg(),lO(3413,`, `),jc(3414,`code`),lO(3415,`po-number`),wg(),lO(3416,`, `),jc(3417,`code`),lO(3418,`po-decimal`),wg(),lO(3419,`,
`),jc(3420,`code`),lO(3421,`po-lookup`),wg(),lO(3422,`, `),jc(3423,`code`),lO(3424,`po-password`),wg(),lO(3425,`, `),jc(3426,`code`),lO(3427,`po-timepicker`),wg(),lO(3428,`.`),wg()()(),jc(3429,`tr`,13)(3430,`td`,14)(3431,`div`,15)(3432,`span`,16),lO(3433,` offsetColumns`),nu(3434,`br`),wg()()(),jc(3435,`td`,17)(3436,`code`,41),lO(3437,`number`),wg()(),jc(3438,`td`,20)(3439,`em`)(3440,`strong`),lO(3441,`(opcional)`),wg()(),jc(3442,`p`),lO(3443,`Tamanho do espaço de exibição do campo em telas.`),wg(),jc(3444,`p`),lO(3445,`Deve ser usado o sistema de `),jc(3446,`strong`),lO(3447,`grid`),wg(),lO(3448,` do PO (1 ... 12 colunas).`),wg(),jc(3449,`blockquote`)(3450,`p`),lO(3451,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(3452,`tr`,13)(3453,`td`,14)(3454,`div`,15)(3455,`span`,16),lO(3456,` offsetLgColumns`),nu(3457,`br`),wg()()(),jc(3458,`td`,17)(3459,`code`,41),lO(3460,`number`),wg()(),jc(3461,`td`,20)(3462,`em`)(3463,`strong`),lO(3464,`(opcional)`),wg()(),jc(3465,`p`),lO(3466,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),wg(),jc(3467,`p`),lO(3468,`Deve ser usado o sistema de `),jc(3469,`strong`),lO(3470,`grid`),wg(),lO(3471,` do PO (1 ... 12 colunas).`),wg(),jc(3472,`blockquote`)(3473,`p`),lO(3474,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3475,`code`),lO(3476,`offsetColumns`),wg(),lO(3477,`.`),wg()()()(),jc(3478,`tr`,13)(3479,`td`,14)(3480,`div`,15)(3481,`span`,16),lO(3482,` offsetMdColumns`),nu(3483,`br`),wg()()(),jc(3484,`td`,17)(3485,`code`,41),lO(3486,`number`),wg()(),jc(3487,`td`,20)(3488,`em`)(3489,`strong`),lO(3490,`(opcional)`),wg()(),jc(3491,`p`),lO(3492,`Tamanho do espaço de exibição do campo em telas médias (md).`),wg(),jc(3493,`p`),lO(3494,`Deve ser usado o sistema de `),jc(3495,`strong`),lO(3496,`grid`),wg(),lO(3497,` do PO (1 ... 12 colunas).`),wg(),jc(3498,`blockquote`)(3499,`p`),lO(3500,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3501,`code`),lO(3502,`offsetColumns`),wg(),lO(3503,`.`),wg()()()(),jc(3504,`tr`,13)(3505,`td`,14)(3506,`div`,15)(3507,`span`,16),lO(3508,` offsetSmColumns`),nu(3509,`br`),wg()()(),jc(3510,`td`,17)(3511,`code`,41),lO(3512,`number`),wg()(),jc(3513,`td`,20)(3514,`em`)(3515,`strong`),lO(3516,`(opcional)`),wg()(),jc(3517,`p`),lO(3518,`Tamanho do espaço de exibição do campo em telas menores (sm).`),wg(),jc(3519,`p`),lO(3520,`Deve ser usado o sistema de `),jc(3521,`strong`),lO(3522,`grid`),wg(),lO(3523,` do PO (1 ... 12 colunas).`),wg(),jc(3524,`blockquote`)(3525,`p`),lO(3526,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3527,`code`),lO(3528,`offsetColumns`),wg(),lO(3529,`.`),wg()()()(),jc(3530,`tr`,13)(3531,`td`,14)(3532,`div`,15)(3533,`span`,16),lO(3534,` offsetXlColumns`),nu(3535,`br`),wg()()(),jc(3536,`td`,17)(3537,`code`,41),lO(3538,`number`),wg()(),jc(3539,`td`,20)(3540,`em`)(3541,`strong`),lO(3542,`(opcional)`),wg()(),jc(3543,`p`),lO(3544,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),wg(),jc(3545,`p`),lO(3546,`Deve ser usado o sistema de `),jc(3547,`strong`),lO(3548,`grid`),wg(),lO(3549,` do PO (1 ... 12 colunas).`),wg(),jc(3550,`blockquote`)(3551,`p`),lO(3552,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3553,`code`),lO(3554,`offsetColumns`),wg(),lO(3555,`.`),wg()()()(),jc(3556,`tr`,13)(3557,`td`,14)(3558,`div`,15)(3559,`span`,16),lO(3560,` onError`),nu(3561,`br`),wg()()(),jc(3562,`td`,17)(3563,`code`,29),lO(3564,`Function`),wg()(),jc(3565,`td`,20)(3566,`em`)(3567,`strong`),lO(3568,`(opcional)`),wg()(),jc(3569,`p`),lO(3570,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),wg(),jc(3571,`blockquote`)(3572,`p`),lO(3573,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(3574,`code`),lO(3575,`HttpErrorResponse`),wg(),lO(3576,`.`),wg()(),jc(3577,`p`)(3578,`strong`),lO(3579,`Componente compatível`),wg(),lO(3580,`: `),jc(3581,`code`),lO(3582,`po-upload`),wg()()()(),jc(3583,`tr`,13)(3584,`td`,14)(3585,`div`,15)(3586,`span`,16),lO(3587,` onSuccess`),nu(3588,`br`),wg()()(),jc(3589,`td`,17)(3590,`code`,29),lO(3591,`Function`),wg()(),jc(3592,`td`,20)(3593,`em`)(3594,`strong`),lO(3595,`(opcional)`),wg()(),jc(3596,`p`),lO(3597,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),wg(),jc(3598,`blockquote`)(3599,`p`),lO(3600,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(3601,`code`),lO(3602,`HttpResponse`),wg(),lO(3603,`.`),wg()(),jc(3604,`p`)(3605,`strong`),lO(3606,`Componente compatível`),wg(),lO(3607,`: `),jc(3608,`code`),lO(3609,`po-upload`),wg()()()(),jc(3610,`tr`,13)(3611,`td`,14)(3612,`div`,15)(3613,`span`,16),lO(3614,` onUpload`),nu(3615,`br`),wg()()(),jc(3616,`td`,17)(3617,`code`,29),lO(3618,`Function`),wg()(),jc(3619,`td`,20)(3620,`em`)(3621,`strong`),lO(3622,`(opcional)`),wg()(),jc(3623,`p`),lO(3624,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),wg(),jc(3625,`pre`)(3626,`code`),lO(3627,`event.data = {id: 'id do usu\xE1rio'};
`),wg()(),jc(3628,`p`)(3629,`strong`),lO(3630,`Componente compatível`),wg(),lO(3631,`: `),jc(3632,`code`),lO(3633,`po-upload`),wg()()()(),jc(3634,`tr`,13)(3635,`td`,14)(3636,`div`,15)(3637,`span`,16),lO(3638,` optional`),nu(3639,`br`),wg()()(),jc(3640,`td`,17)(3641,`code`,28),lO(3642,`boolean`),wg()(),jc(3643,`td`,20)(3644,`em`)(3645,`strong`),lO(3646,`(opcional)`),wg()(),jc(3647,`p`),lO(3648,`Define se a indicação de campo opcional será exibida.`),wg(),jc(3649,`blockquote`)(3650,`p`),lO(3651,`A indicação não será exibida, se:`),wg()(),jc(3652,`ul`)(3653,`li`),lO(3654,`O campo for `),jc(3655,`code`),lO(3656,`required`),wg(),lO(3657,`, ou;`),wg(),jc(3658,`li`),lO(3659,`Não possuir `),jc(3660,`code`),lO(3661,`help`),wg(),lO(3662,` e `),jc(3663,`code`),lO(3664,`label`),wg(),lO(3665,`.`),wg()(),jc(3666,`p`)(3667,`strong`),lO(3668,`Componentes compatíveis:`),wg(),jc(3669,`code`),lO(3670,`po-datepicker`),wg(),lO(3671,`, `),jc(3672,`code`),lO(3673,`po-datepicker-range`),wg(),lO(3674,`, `),jc(3675,`code`),lO(3676,`po-timepicker`),wg(),lO(3677,`, `),jc(3678,`code`),lO(3679,`po-input`),wg(),lO(3680,`, `),jc(3681,`code`),lO(3682,`po-number`),wg(),lO(3683,`,
`),jc(3684,`code`),lO(3685,`po-decimal`),wg(),lO(3686,`, `),jc(3687,`code`),lO(3688,`po-select`),wg(),lO(3689,`, `),jc(3690,`code`),lO(3691,`po-radio-group`),wg(),lO(3692,`, `),jc(3693,`code`),lO(3694,`po-combo`),wg(),lO(3695,`, `),jc(3696,`code`),lO(3697,`po-lookup`),wg(),lO(3698,`, `),jc(3699,`code`),lO(3700,`po-checkbox-group`),wg(),lO(3701,`, `),jc(3702,`code`),lO(3703,`po-multiselect`),wg(),lO(3704,`,
`),jc(3705,`code`),lO(3706,`po-textarea`),wg(),lO(3707,`, `),jc(3708,`code`),lO(3709,`po-password`),wg(),lO(3710,`.`),wg()()(),jc(3711,`tr`,13)(3712,`td`,14)(3713,`div`,15)(3714,`span`,16),lO(3715,` options`),nu(3716,`br`),wg()()(),jc(3717,`td`,17)(3718,`code`,32),lO(3719,`Array<string> `),wg(),jc(3720,`code`,69),lO(3721,` Array<PoSelectOption> `),wg(),jc(3722,`code`,70),lO(3723,` Array<PoMultiselectOption> `),wg(),jc(3724,`code`,71),lO(3725,` Array<PoCheckboxGroupOption> `),wg(),jc(3726,`code`,72),lO(3727,` Array<any>`),wg()(),jc(3728,`td`,20)(3729,`em`)(3730,`strong`),lO(3731,`(opcional)`),wg()(),jc(3732,`p`),lO(3733,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),wg(),jc(3734,`p`)(3735,`strong`),lO(3736,`Componentes compatíveis:`),wg(),jc(3737,`code`),lO(3738,`po-select`),wg(),lO(3739,`, `),jc(3740,`code`),lO(3741,`po-radio-group`),wg(),lO(3742,`, `),jc(3743,`code`),lO(3744,`po-checkbox-group`),wg(),lO(3745,`, `),jc(3746,`code`),lO(3747,`po-multiselect`),wg(),lO(3748,`.`),wg()()(),jc(3749,`tr`,13)(3750,`td`,14)(3751,`div`,15)(3752,`span`,16),lO(3753,` optionsMulti`),nu(3754,`br`),wg()()(),jc(3755,`td`,17)(3756,`code`,28),lO(3757,`boolean`),wg()(),jc(3758,`td`,20)(3759,`em`)(3760,`strong`),lO(3761,`(opcional)`),wg()(),jc(3762,`p`),lO(3763,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),wg()()(),jc(3764,`tr`,13)(3765,`td`,14)(3766,`div`,15)(3767,`span`,16),lO(3768,` optionsService`),nu(3769,`br`),wg()()(),jc(3770,`td`,17)(3771,`code`,18),lO(3772,`string `),wg(),jc(3773,`code`,73),lO(3774,` PoComboFilter `),wg(),jc(3775,`code`,74),lO(3776,` PoMultiselectFilter`),wg()(),jc(3777,`td`,20)(3778,`em`)(3779,`strong`),lO(3780,`(opcional)`),wg()(),jc(3781,`p`),lO(3782,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),jc(3783,`strong`),lO(3784,`Importante`),wg()(),jc(3785,`blockquote`)(3786,`p`),lO(3787,`Para que funcione corretamente, é importante que o serviço siga o `),jc(3788,`a`,75),lO(3789,`guia de API do PO UI`),wg(),lO(3790,`.`),wg()()()(),jc(3791,`tr`,13)(3792,`td`,14)(3793,`div`,15)(3794,`span`,16),lO(3795,` order`),nu(3796,`br`),wg()()(),jc(3797,`td`,17)(3798,`code`,41),lO(3799,`number`),wg()(),jc(3800,`td`,20)(3801,`em`)(3802,`strong`),lO(3803,`(opcional)`),wg()(),jc(3804,`p`),lO(3805,`Informa a ordem de exibição do campo.`),wg(),jc(3806,`p`),lO(3807,`Exemplo de utilização:`),wg(),jc(3808,`p`)(3809,`code`),lO(3810,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),wg()(),jc(3811,`p`),lO(3812,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),jc(3813,`code`),lO(3814,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),wg()(),jc(3815,`p`),lO(3816,`Só serão aceitos valores com números inteiros maiores do que zero.`),wg(),jc(3817,`p`),lO(3818,`Campos sem `),jc(3819,`code`),lO(3820,`order`),wg(),lO(3821,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),wg()()(),jc(3822,`tr`,13)(3823,`td`,14)(3824,`div`,15)(3825,`span`,16),lO(3826,` params`),nu(3827,`br`),wg()()(),jc(3828,`td`,17)(3829,`code`,33),lO(3830,`any`),wg()(),jc(3831,`td`,20)(3832,`em`)(3833,`strong`),lO(3834,`(opcional)`),wg()(),jc(3835,`p`),lO(3836,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),jc(3837,`code`),lO(3838,`po-lookup`),wg(),lO(3839,` e
`),jc(3840,`code`),lO(3841,`po-combo`),wg(),lO(3842,`.`),wg(),jc(3843,`p`),lO(3844,`Por exemplo, para o parâmetro `),jc(3845,`code`),lO(3846,`{ age: 23 }`),wg(),lO(3847,` a URL da requisição ficaria:`),wg(),jc(3848,`p`)(3849,`code`),lO(3850,`url + ?age=23&filter=Peter`),wg()()()(),jc(3851,`tr`,13)(3852,`td`,14)(3853,`div`,15)(3854,`span`,16),lO(3855,` pattern`),nu(3856,`br`),wg()()(),jc(3857,`td`,17)(3858,`code`,18),lO(3859,`string`),wg()(),jc(3860,`td`,20)(3861,`em`)(3862,`strong`),lO(3863,`(opcional)`),wg()(),jc(3864,`p`),lO(3865,`Regex para validação do campo.`),wg(),jc(3866,`p`)(3867,`strong`),lO(3868,`Componentes compatíveis:`),wg(),jc(3869,`code`),lO(3870,`po-input`),wg(),lO(3871,`, `),jc(3872,`code`),lO(3873,`po-password`),wg(),lO(3874,`.`),wg(),jc(3875,`blockquote`)(3876,`p`),lO(3877,`Incompatível com `),jc(3878,`code`),lO(3879,`po-decimal`),wg(),lO(3880,`.`),wg()()()(),jc(3881,`tr`,13)(3882,`td`,14)(3883,`div`,15)(3884,`span`,16),lO(3885,` placeholder`),nu(3886,`br`),wg()()(),jc(3887,`td`,17)(3888,`code`,18),lO(3889,`string`),wg()(),jc(3890,`td`,20)(3891,`em`)(3892,`strong`),lO(3893,`(opcional)`),wg()(),jc(3894,`p`),lO(3895,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),wg(),jc(3896,`p`)(3897,`strong`),lO(3898,`Componentes compatíveis:`),wg(),jc(3899,`code`),lO(3900,`po-datepicker`),wg(),lO(3901,`, `),jc(3902,`code`),lO(3903,`po-datepicker-range`),wg(),lO(3904,`, `),jc(3905,`code`),lO(3906,`po-timepicker`),wg(),lO(3907,`, `),jc(3908,`code`),lO(3909,`po-input`),wg(),lO(3910,`, `),jc(3911,`code`),lO(3912,`po-number`),wg(),lO(3913,`, `),jc(3914,`code`),lO(3915,`po-decimal`),wg(),lO(3916,`, `),jc(3917,`code`),lO(3918,`po-select`),wg(),lO(3919,`, `),jc(3920,`code`),lO(3921,`po-combo`),wg(),lO(3922,`, `),jc(3923,`code`),lO(3924,`po-lookup`),wg(),lO(3925,`, `),jc(3926,`code`),lO(3927,`po-multiselect`),wg(),lO(3928,`, `),jc(3929,`code`),lO(3930,`po-textarea`),wg(),lO(3931,`, `),jc(3932,`code`),lO(3933,`po-password`),wg(),lO(3934,`.`),wg()()(),jc(3935,`tr`,13)(3936,`td`,14)(3937,`div`,15)(3938,`span`,16),lO(3939,` placeholderSearch`),nu(3940,`br`),wg()()(),jc(3941,`td`,17)(3942,`code`,18),lO(3943,`string`),wg()(),jc(3944,`td`,20)(3945,`em`)(3946,`strong`),lO(3947,`(opcional)`),wg()(),jc(3948,`p`),lO(3949,`Placeholder do campo de pesquisa do `),jc(3950,`code`),lO(3951,`po-multiselect`),wg(),lO(3952,`.`),wg(),jc(3953,`blockquote`)(3954,`p`),lO(3955,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),wg()()()(),jc(3956,`tr`,13)(3957,`td`,14)(3958,`div`,15)(3959,`span`,16),lO(3960,` property`),nu(3961,`br`),wg()()(),jc(3962,`td`,17)(3963,`code`,18),lO(3964,`string`),wg()(),jc(3965,`td`,20)(3966,`p`),lO(3967,`Nome de referência do campo.`),wg()()(),jc(3968,`tr`,13)(3969,`td`,14)(3970,`div`,15)(3971,`span`,16),lO(3972,` range`),nu(3973,`br`),wg()()(),jc(3974,`td`,17)(3975,`code`,28),lO(3976,`boolean`),wg()(),jc(3977,`td`,20)(3978,`em`)(3979,`strong`),lO(3980,`(opcional)`),wg()(),jc(3981,`p`),lO(3982,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),wg(),jc(3983,`blockquote`)(3984,`p`),lO(3985,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),wg()()()(),jc(3986,`tr`,13)(3987,`td`,14)(3988,`div`,15)(3989,`span`,16),lO(3990,` rangePresetOptions`),nu(3991,`br`),wg()()(),jc(3992,`td`,17)(3993,`code`,76),lO(3994,`Array<PoCalendarRangePreset>`),wg()(),jc(3995,`td`,20)(3996,`em`)(3997,`strong`),lO(3998,`(opcional)`),wg()(),jc(3999,`p`),lO(4e3,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),wg(),jc(4001,`p`),lO(4002,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),jc(4003,`code`),lO(4004,`PoCalendarRangePreset`),wg(),lO(4005,`.`),wg(),jc(4006,`p`)(4007,`strong`),lO(4008,`Componente compatível:`),wg(),jc(4009,`code`),lO(4010,`po-datepicker-range`),wg()()()(),jc(4011,`tr`,13)(4012,`td`,14)(4013,`div`,15)(4014,`span`,16),lO(4015,` rangePresets`),nu(4016,`br`),wg()()(),jc(4017,`td`,17)(4018,`code`,28),lO(4019,`boolean `),wg(),jc(4020,`code`,32),lO(4021,` Array<string>`),wg()(),jc(4022,`td`,20)(4023,`em`)(4024,`strong`),lO(4025,`(opcional)`),wg()(),jc(4026,`p`),lO(4027,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),wg(),jc(4028,`p`),lO(4029,`Aceita os seguintes valores:`),wg(),jc(4030,`ul`)(4031,`li`)(4032,`code`),lO(4033,`true`),wg(),lO(4034,`: exibe todos os presets padrão.`),wg(),jc(4035,`li`)(4036,`code`),lO(4037,`false`),wg(),lO(4038,`: não exibe os presets padrão.`),wg(),jc(4039,`li`)(4040,`code`),lO(4041,`Array<string>`),wg(),lO(4042,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),wg()(),jc(4043,`p`)(4044,`strong`),lO(4045,`Componente compatível:`),wg(),jc(4046,`code`),lO(4047,`po-datepicker-range`),wg()()()(),jc(4048,`tr`,13)(4049,`td`,14)(4050,`div`,15)(4051,`span`,16),lO(4052,` rangePresetsOrder`),nu(4053,`br`),wg()()(),jc(4054,`td`,17)(4055,`code`,77),lO(4056,`'asc' `),wg(),jc(4057,`code`,78),lO(4058,` 'desc'`),wg()(),jc(4059,`td`,20)(4060,`em`)(4061,`strong`),lO(4062,`(opcional)`),wg()(),jc(4063,`p`),lO(4064,`Define a ordenação dos presets na lista.`),wg(),jc(4065,`p`),lO(4066,`Valores aceitos:`),wg(),jc(4067,`ul`)(4068,`li`)(4069,`code`),lO(4070,`'asc'`),wg(),lO(4071,`: ordenação crescente (passado → futuro)`),wg(),jc(4072,`li`)(4073,`code`),lO(4074,`'desc'`),wg(),lO(4075,`: ordenação decrescente (futuro → passado)`),wg()(),jc(4076,`p`)(4077,`strong`),lO(4078,`Componente compatível:`),wg(),jc(4079,`code`),lO(4080,`po-datepicker-range`),wg()()()(),jc(4081,`tr`,13)(4082,`td`,14)(4083,`div`,15)(4084,`span`,16),lO(4085,` readonly`),nu(4086,`br`),wg()()(),jc(4087,`td`,17)(4088,`code`,28),lO(4089,`boolean`),wg()(),jc(4090,`td`,20)(4091,`em`)(4092,`strong`),lO(4093,`(opcional)`),wg()(),jc(4094,`p`),lO(4095,`Indica que o campo será somente leitura.`),wg(),jc(4096,`p`)(4097,`strong`),lO(4098,`Componentes compatíveis:`),wg(),jc(4099,`code`),lO(4100,`po-datepicker`),wg(),lO(4101,`, `),jc(4102,`code`),lO(4103,`po-datepicker-range`),wg(),lO(4104,`, `),jc(4105,`code`),lO(4106,`po-timepicker`),wg(),lO(4107,`, `),jc(4108,`code`),lO(4109,`po-input`),wg(),lO(4110,`, `),jc(4111,`code`),lO(4112,`po-number`),wg(),lO(4113,`,
`),jc(4114,`code`),lO(4115,`po-decimal`),wg(),lO(4116,`, `),jc(4117,`code`),lO(4118,`po-select`),wg(),lO(4119,`, `),jc(4120,`code`),lO(4121,`po-textarea`),wg(),lO(4122,`, `),jc(4123,`code`),lO(4124,`po-password`),wg(),lO(4125,`.`),wg()()(),jc(4126,`tr`,13)(4127,`td`,14)(4128,`div`,15)(4129,`span`,16),lO(4130,` removeInitialFilter`),nu(4131,`br`),wg()()(),jc(4132,`td`,17)(4133,`code`,28),lO(4134,`boolean`),wg()(),jc(4135,`td`,20)(4136,`em`)(4137,`strong`),lO(4138,`(opcional)`),wg()(),jc(4139,`p`),lO(4140,`Define que o filtro no primeiro clique será removido.`),wg(),jc(4141,`blockquote`)(4142,`p`),lO(4143,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),wg()(),jc(4144,`p`)(4145,`strong`),lO(4146,`Componente compatível`),wg(),lO(4147,`: `),jc(4148,`code`),lO(4149,`po-combo`),wg()()()(),jc(4150,`tr`,13)(4151,`td`,14)(4152,`div`,15)(4153,`span`,16),lO(4154,` required`),nu(4155,`br`),wg()()(),jc(4156,`td`,17)(4157,`code`,28),lO(4158,`boolean`),wg()(),jc(4159,`td`,20)(4160,`em`)(4161,`strong`),lO(4162,`(opcional)`),wg()(),jc(4163,`p`),lO(4164,`Define a obrigatoriedade do campo.`),wg(),jc(4165,`p`)(4166,`strong`),lO(4167,`Componentes compatíveis:`),wg(),jc(4168,`code`),lO(4169,`po-datepicker`),wg(),lO(4170,`, `),jc(4171,`code`),lO(4172,`po-datepicker-range`),wg(),lO(4173,`, `),jc(4174,`code`),lO(4175,`po-timepicker`),wg(),lO(4176,`, `),jc(4177,`code`),lO(4178,`po-input`),wg(),lO(4179,`, `),jc(4180,`code`),lO(4181,`po-number`),wg(),lO(4182,`,
`),jc(4183,`code`),lO(4184,`po-decimal`),wg(),lO(4185,`, `),jc(4186,`code`),lO(4187,`po-select`),wg(),lO(4188,`, `),jc(4189,`code`),lO(4190,`po-radio-group`),wg(),lO(4191,`, `),jc(4192,`code`),lO(4193,`po-combo`),wg(),lO(4194,`, `),jc(4195,`code`),lO(4196,`po-lookup`),wg(),lO(4197,`, `),jc(4198,`code`),lO(4199,`po-checkbox-group`),wg(),lO(4200,`, `),jc(4201,`code`),lO(4202,`po-multiselect`),wg(),lO(4203,`,
`),jc(4204,`code`),lO(4205,`po-textarea`),wg(),lO(4206,`, `),jc(4207,`code`),lO(4208,"po-password``, "),wg(),lO(4209,"po-upload`."),wg()()(),jc(4210,`tr`,13)(4211,`td`,14)(4212,`div`,15)(4213,`span`,16),lO(4214,` requiredFieldErrorMessage`),nu(4215,`br`),wg()()(),jc(4216,`td`,17)(4217,`code`,28),lO(4218,`boolean`),wg()(),jc(4219,`td`,20)(4220,`em`)(4221,`strong`),lO(4222,`(opcional)`),wg()(),jc(4223,`p`),lO(4224,`Exibe a mensagem setada na propriedade `),jc(4225,`code`),lO(4226,`errorMessage`),wg(),lO(4227,` se o campo estiver vazio e for requerido.`),wg(),jc(4228,`blockquote`)(4229,`p`),lO(4230,`Necessário que a propriedade `),jc(4231,`code`),lO(4232,`required`),wg(),lO(4233,` esteja habilitada.`),wg()(),jc(4234,`p`)(4235,`strong`),lO(4236,`Componentes compatíveis:`),wg(),jc(4237,`code`),lO(4238,`po-datepicker`),wg(),lO(4239,`, `),jc(4240,`code`),lO(4241,`po-timepicker`),wg(),lO(4242,`, `),jc(4243,`code`),lO(4244,`po-input`),wg(),lO(4245,`, `),jc(4246,`code`),lO(4247,`po-number`),wg(),lO(4248,`, `),jc(4249,`code`),lO(4250,`po-decimal`),wg(),lO(4251,`, `),jc(4252,`code`),lO(4253,`po-password`),wg(),lO(4254,`.`),wg()()(),jc(4255,`tr`,13)(4256,`td`,14)(4257,`div`,15)(4258,`span`,16),lO(4259,` restrictions`),nu(4260,`br`),wg()()(),jc(4261,`td`,17)(4262,`code`,79),lO(4263,`PoUploadFileRestrictions`),wg()(),jc(4264,`td`,20)(4265,`em`)(4266,`strong`),lO(4267,`(opcional)`),wg()(),jc(4268,`p`),lO(4269,`Objeto que segue a definição da interface `),jc(4270,`code`),lO(4271,`PoUploadFileRestrictions`),wg(),lO(4272,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),wg(),jc(4273,`p`)(4274,`strong`),lO(4275,`Componente compatível`),wg(),lO(4276,`: `),jc(4277,`code`),lO(4278,`po-upload`),wg()()()(),jc(4279,`tr`,13)(4280,`td`,14)(4281,`div`,15)(4282,`span`,16),lO(4283,` rows`),nu(4284,`br`),wg()()(),jc(4285,`td`,17)(4286,`code`,41),lO(4287,`number`),wg()(),jc(4288,`td`,20)(4289,`em`)(4290,`strong`),lO(4291,`(opcional)`),wg()(),jc(4292,`p`),lO(4293,`Quantidade de linhas exibidas no `),jc(4294,`code`),lO(4295,`po-textarea`),wg(),lO(4296,`.`),wg()()(),jc(4297,`tr`,13)(4298,`td`,14)(4299,`div`,15)(4300,`span`,16),lO(4301,` searchService`),nu(4302,`br`),wg()()(),jc(4303,`td`,17)(4304,`code`,18),lO(4305,`string `),wg(),jc(4306,`code`,80),lO(4307,` PoLookupFilter`),wg()(),jc(4308,`td`,20)(4309,`em`)(4310,`strong`),lO(4311,`(opcional)`),wg()(),jc(4312,`p`),lO(4313,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),jc(4314,`code`),lO(4315,`columns`),wg(),lO(4316,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),jc(4317,`strong`),lO(4318,`Importante:`),wg()(),jc(4319,`blockquote`)(4320,`p`),lO(4321,`Caso utilizar a propriedade `),jc(4322,`code`),lO(4323,`optionsService`),wg(),lO(4324,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),jc(4325,`a`,75),lO(4326,`guia de API do PO UI`),wg(),lO(4327,`.`),wg()()()(),jc(4328,`tr`,13)(4329,`td`,14)(4330,`div`,15)(4331,`span`,16),lO(4332,` secondInterval`),nu(4333,`br`),wg()()(),jc(4334,`td`,17)(4335,`code`,41),lO(4336,`number`),wg()(),jc(4337,`td`,20)(4338,`em`)(4339,`strong`),lO(4340,`(opcional)`),wg()(),jc(4341,`p`),lO(4342,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),wg()()(),jc(4343,`tr`,13)(4344,`td`,14)(4345,`div`,15)(4346,`span`,16),lO(4347,` secret`),nu(4348,`br`),wg()()(),jc(4349,`td`,17)(4350,`code`,28),lO(4351,`boolean`),wg()(),jc(4352,`td`,20)(4353,`em`)(4354,`strong`),lO(4355,`(opcional)`),wg()(),jc(4356,`p`),lO(4357,`Esconde a informação estilo `),jc(4358,`em`),lO(4359,`password`),wg(),lO(4360,`, pode ser utilizado quando o tipo de dado for `),jc(4361,`em`),lO(4362,`string`),wg(),lO(4363,`.`),wg()()(),jc(4364,`tr`,13)(4365,`td`,14)(4366,`div`,15)(4367,`span`,16),lO(4368,` showRequired`),nu(4369,`br`),wg()()(),jc(4370,`td`,17)(4371,`code`,28),lO(4372,`boolean`),wg()(),jc(4373,`td`,20)(4374,`em`)(4375,`strong`),lO(4376,`(opcional)`),wg()(),jc(4377,`p`),lO(4378,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(4379,`blockquote`)(4380,`p`),lO(4381,`Não será exibida a indicação se:`),wg()(),jc(4382,`ul`)(4383,`li`),lO(4384,`Não possuir `),jc(4385,`code`),lO(4386,`p-help`),wg(),lO(4387,` e/ou `),jc(4388,`code`),lO(4389,`p-label`),wg(),lO(4390,`.`),wg()(),jc(4391,`p`)(4392,`strong`),lO(4393,`Componentes compatíveis:`),wg(),jc(4394,`code`),lO(4395,`po-datepicker`),wg(),lO(4396,`, `),jc(4397,`code`),lO(4398,`po-datepicker-range`),wg(),lO(4399,`, `),jc(4400,`code`),lO(4401,`po-timepicker`),wg(),lO(4402,`, `),jc(4403,`code`),lO(4404,`po-input`),wg(),lO(4405,`, `),jc(4406,`code`),lO(4407,`po-number`),wg(),lO(4408,`,
`),jc(4409,`code`),lO(4410,`po-decimal`),wg(),lO(4411,`, `),jc(4412,`code`),lO(4413,`po-select`),wg(),lO(4414,`, `),jc(4415,`code`),lO(4416,`po-radio-group`),wg(),lO(4417,`, `),jc(4418,`code`),lO(4419,`po-combo`),wg(),lO(4420,`, `),jc(4421,`code`),lO(4422,`po-lookup`),wg(),lO(4423,`, `),jc(4424,`code`),lO(4425,`po-checkbox-group`),wg(),lO(4426,`, `),jc(4427,`code`),lO(4428,`po-multiselect`),wg(),lO(4429,`,
`),jc(4430,`code`),lO(4431,`po-textarea`),wg(),lO(4432,`, `),jc(4433,`code`),lO(4434,`po-password`),wg(),lO(4435,`, `),jc(4436,`code`),lO(4437,`po-upload`),wg(),lO(4438,`.`),wg()()(),jc(4439,`tr`,13)(4440,`td`,14)(4441,`div`,15)(4442,`span`,16),lO(4443,` showSeconds`),nu(4444,`br`),wg()()(),jc(4445,`td`,17)(4446,`code`,28),lO(4447,`boolean`),wg()(),jc(4448,`td`,20)(4449,`em`)(4450,`strong`),lO(4451,`(opcional)`),wg()(),jc(4452,`p`),lO(4453,`Exibe a coluna de segundos no painel do timepicker.`),wg()()(),jc(4454,`tr`,13)(4455,`td`,14)(4456,`div`,15)(4457,`span`,16),lO(4458,` showThumbnail`),nu(4459,`br`),wg()()(),jc(4460,`td`,17)(4461,`code`,28),lO(4462,`boolean`),wg()(),jc(4463,`td`,20)(4464,`em`)(4465,`strong`),lO(4466,`(opcional)`),wg()(),jc(4467,`p`),lO(4468,`Exibe a pré-visualização de imagens ao anexá-las.`),wg(),jc(4469,`blockquote`)(4470,`p`),lO(4471,`Propriedade funciona apenas em arquivos de formato de imagem (`),jc(4472,`code`),lO(4473,`.png`),wg(),lO(4474,`, `),jc(4475,`code`),lO(4476,`.jpg`),wg(),lO(4477,`, `),jc(4478,`code`),lO(4479,`.jpeg`),wg(),lO(4480,` e `),jc(4481,`code`),lO(4482,`.gif`),wg(),lO(4483,`).`),wg()(),jc(4484,`p`)(4485,`strong`),lO(4486,`Componente compatível`),wg(),lO(4487,`: `),jc(4488,`code`),lO(4489,`po-upload`),wg()()()(),jc(4490,`tr`,13)(4491,`td`,14)(4492,`div`,15)(4493,`span`,16),lO(4494,` size`),nu(4495,`br`),wg()()(),jc(4496,`td`,17)(4497,`code`,18),lO(4498,`string`),wg()(),jc(4499,`td`,20)(4500,`em`)(4501,`strong`),lO(4502,`(opcional)`),wg()(),jc(4503,`p`),lO(4504,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),wg(),jc(4505,`ul`)(4506,`li`)(4507,`code`),lO(4508,`small`),wg(),lO(4509,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(4510,`li`)(4511,`code`),lO(4512,`medium`),wg(),lO(4513,`: aplica a medida medium de cada componente.`),wg(),jc(4514,`li`)(4515,`code`),lO(4516,`large`),wg(),lO(4517,`: aplica a medida large de cada componente (disponível para `),jc(4518,`code`),lO(4519,`po-checkbox`),wg(),lO(4520,` e `),jc(4521,`code`),lO(4522,`po-radio-group`),wg(),lO(4523,`).`),jc(4524,`blockquote`)(4525,`p`),lO(4526,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(4527,`code`),lO(4528,`medium`),wg(),lO(4529,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(4530,`a`,21),lO(4531,`po-theme`),wg(),lO(4532,`.`),wg()()()()()(),jc(4533,`tr`,13)(4534,`td`,14)(4535,`div`,15)(4536,`span`,16),lO(4537,` sort`),nu(4538,`br`),wg()()(),jc(4539,`td`,17)(4540,`code`,28),lO(4541,`boolean`),wg()(),jc(4542,`td`,20)(4543,`em`)(4544,`strong`),lO(4545,`(opcional)`),wg()(),jc(4546,`p`),lO(4547,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),wg(),jc(4548,`p`)(4549,`strong`),lO(4550,`Componentes compatíveis:`),wg(),jc(4551,`code`),lO(4552,`po-combo`),wg(),lO(4553,`, po-multiselect`),wg()()(),jc(4554,`tr`,13)(4555,`td`,14)(4556,`div`,15)(4557,`span`,16),lO(4558,` step`),nu(4559,`br`),wg()()(),jc(4560,`td`,17)(4561,`code`,41),lO(4562,`number`),wg()(),jc(4563,`td`,20)(4564,`em`)(4565,`strong`),lO(4566,`(opcional)`),wg()(),jc(4567,`p`),lO(4568,`Intervalo utilizado no `),jc(4569,`code`),lO(4570,`po-number`),wg(),lO(4571,`.`),wg()()(),jc(4572,`tr`,13)(4573,`td`,14)(4574,`div`,15)(4575,`span`,16),lO(4576,` thousandMaxlength`),nu(4577,`br`),wg()()(),jc(4578,`td`,17)(4579,`code`,41),lO(4580,`number`),wg()(),jc(4581,`td`,20)(4582,`em`)(4583,`strong`),lO(4584,`(opcional)`),wg()(),jc(4585,`p`),lO(4586,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),wg(),jc(4587,`blockquote`)(4588,`p`),lO(4589,`Esta propriedade só pode ser utilizada quando o `),jc(4590,`code`),lO(4591,`type`),wg(),lO(4592,` for `),jc(4593,`em`),lO(4594,`currency`),wg(),lO(4595,` ou `),jc(4596,`em`),lO(4597,`decimal`),wg(),lO(4598,`.`),wg()(),jc(4599,`blockquote`)(4600,`p`),lO(4601,`Quando utilizado com `),jc(4602,`code`),lO(4603,`displayFormat`),wg(),lO(4604,`, será respeitado o valor `),jc(4605,`strong`),lO(4606,`mais restritivo`),wg(),lO(4607,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),wg()()()(),jc(4608,`tr`,13)(4609,`td`,14)(4610,`div`,15)(4611,`span`,16),lO(4612,` type`),nu(4613,`br`),wg()()(),jc(4614,`td`,17)(4615,`code`,18),lO(4616,`string `),wg(),jc(4617,`code`,81),lO(4618,` PoDynamicFieldType`),wg()(),jc(4619,`td`,20)(4620,`em`)(4621,`strong`),lO(4622,`(opcional)`),wg()(),jc(4623,`p`),lO(4624,`Tipo do valor campo.`),wg(),jc(4625,`p`),lO(4626,`Valores válidos:`),wg(),jc(4627,`ul`)(4628,`li`)(4629,`code`),lO(4630,`boolean`),wg(),lO(4631,`: Valores `),jc(4632,`em`),lO(4633,`booleanos`),wg(),lO(4634,`.`),wg(),jc(4635,`li`)(4636,`code`),lO(4637,`currency`),wg(),lO(4638,`: Valores monetários.`),wg(),jc(4639,`li`)(4640,`code`),lO(4641,`decimal`),wg(),lO(4642,`: Valores decimais.`),wg(),jc(4643,`li`)(4644,`code`),lO(4645,`date`),wg(),lO(4646,`: Valores de datas.`),jc(4647,`ul`)(4648,`li`),lO(4649,`Aceita os tipos `),jc(4650,`strong`),lO(4651,`string`),wg(),lO(4652,` e `),jc(4653,`strong`),lO(4654,`Date`),wg(),lO(4655,` padr\xE3o do Javascript,
por exemplo: `),jc(4656,`code`),lO(4657,`'2017-11-28'`),wg(),lO(4658,` ou `),jc(4659,`code`),lO(4660,`new Date(2017, 10, 28)`),wg(),lO(4661,`.`),wg()()(),jc(4662,`li`)(4663,`code`),lO(4664,`dateTime`),wg(),lO(4665,`: Valor de data com horário.`),jc(4666,`ul`)(4667,`li`),lO(4668,`Aceita o tipo `),jc(4669,`em`),lO(4670,`string`),wg(),lO(4671,` no formato `),jc(4672,`strong`),lO(4673,`ISO-8601`),wg(),lO(4674,` extendido `),jc(4675,`strong`),lO(4676,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),wg(),lO(4677,`
e o tipo `),jc(4678,`strong`),lO(4679,`Date`),wg(),lO(4680,` padrão do Javascript, por exemplo: `),jc(4681,`code`),lO(4682,`'2017-11-28T00:00:00-02:00'`),wg(),lO(4683,` ou `),jc(4684,`code`),lO(4685,`new Date(2017, 10, 28)`),wg(),lO(4686,`.`),wg()()(),jc(4687,`li`)(4688,`code`),lO(4689,`number`),wg(),lO(4690,`: Valores numéricos.`),wg(),jc(4691,`li`)(4692,`code`),lO(4693,`string`),wg(),lO(4694,`: Textos.`),wg(),jc(4695,`li`)(4696,`code`),lO(4697,`time`),wg(),lO(4698,`: Valor do horário.`),jc(4699,`ul`)(4700,`li`),lO(4701,`Aceita o tipo `),jc(4702,`strong`),lO(4703,`string`),wg(),lO(4704,` nos formatos `),jc(4705,`strong`),lO(4706,`'HH:mm:ss'`),wg(),lO(4707,` ou `),jc(4708,`strong`),lO(4709,`'HH:mm:ss.ffffff'`),wg(),lO(4710,`, por exemplo: `),jc(4711,`code`),lO(4712,`'23:12:45'`),wg(),lO(4713,`.`),wg()()()()()(),jc(4714,`tr`,13)(4715,`td`,14)(4716,`div`,15)(4717,`span`,16),lO(4718,` url`),nu(4719,`br`),wg()()(),jc(4720,`td`,17)(4721,`code`,18),lO(4722,`string`),wg()(),jc(4723,`td`,20)(4724,`em`)(4725,`strong`),lO(4726,`(opcional)`),wg()(),jc(4727,`p`),lO(4728,`URL que deve ser feita a requisição com os arquivos selecionados.`),wg(),jc(4729,`p`)(4730,`strong`),lO(4731,`Componente compatível`),wg(),lO(4732,`: `),jc(4733,`code`),lO(4734,`po-upload`),wg()()()(),jc(4735,`tr`,13)(4736,`td`,14)(4737,`div`,15)(4738,`span`,16),lO(4739,` validate`),nu(4740,`br`),wg()()(),jc(4741,`td`,17)(4742,`code`,18),lO(4743,`string `),wg(),jc(4744,`code`,29),lO(4745,` Function`),wg()(),jc(4746,`td`,20)(4747,`em`)(4748,`strong`),lO(4749,`(opcional)`),wg()(),jc(4750,`p`),lO(4751,`Função ou serviço para validar as `),jc(4752,`strong`),lO(4753,`mudanças do campo`),wg(),lO(4754,`.`),wg(),jc(4755,`ul`)(4756,`li`),lO(4757,`A propriedade aceita os seguintes tipos:`),wg()(),jc(4758,`ul`)(4759,`li`)(4760,`strong`),lO(4761,`String`),wg(),lO(4762,`: Endpoint usado pelo componente para requisição via `),jc(4763,`code`),lO(4764,`POST`),wg(),lO(4765,`.`),wg(),jc(4766,`li`)(4767,`strong`),lO(4768,`Function`),wg(),lO(4769,`: Método que será executado.`),wg()(),jc(4770,`p`),lO(4771,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),jc(4772,`code`),lO(4773,`PoDynamicFormFieldChanged`),wg(),lO(4774,`:`),wg(),jc(4775,`p`)(4776,`code`),lO(4777,`{ property: 'property name', value: 'new value' }`),wg()(),jc(4778,`p`),lO(4779,`O retorno desta função deve ser do tipo `),jc(4780,`a`,82),lO(4781,`PoDynamicFormFieldValidation`),wg(),lO(4782,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),wg(),jc(4783,`pre`)(4784,`code`),lO(4785,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),wg()(),jc(4786,`p`),lO(4787,`Para referenciar a sua função utilize a propriedade `),jc(4788,`code`),lO(4789,`bind`),wg(),lO(4790,`, por exemplo:
`),jc(4791,`code`),lO(4792,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),wg()()()(),jc(4793,`tr`,13)(4794,`td`,14)(4795,`div`,15)(4796,`span`,16),lO(4797,` visible`),nu(4798,`br`),wg()()(),jc(4799,`td`,17)(4800,`code`,28),lO(4801,`boolean`),wg()(),jc(4802,`td`,20)(4803,`em`)(4804,`strong`),lO(4805,`(opcional)`),wg()(),jc(4806,`p`),lO(4807,`Indica se o campo será visível.`),wg()()(),jc(4808,`tr`,13)(4809,`td`,14)(4810,`div`,15)(4811,`span`,16),lO(4812,` yearRangeLimit`),nu(4813,`br`),wg()()(),jc(4814,`td`,17)(4815,`code`,41),lO(4816,`number`),wg()(),jc(4817,`td`,20)(4818,`em`)(4819,`strong`),lO(4820,`(opcional)`),wg()(),jc(4821,`p`),lO(4822,`Define o limite de anos exibidos na lista de anos do `),jc(4823,`code`),lO(4824,`po-datepicker`),wg(),lO(4825,` nos modos `),jc(4826,`code`),lO(4827,`month-year`),wg(),lO(4828,` e `),jc(4829,`code`),lO(4830,`year`),wg(),lO(4831,`.`),wg()()()(),jc(4832,`h4`,38)(4833,`code`,5),lO(4834,`PoDynamicFormLoad`),wg()(),jc(4835,`div`,2)(4836,`p`),nu(4837,`a`,83),wg(),jc(4838,`p`),lO(4839,`Estrutura de retorno no carregamento do formulário.`),wg()(),jc(4840,`h4`,9),lO(4841,`Propriedades`),wg(),jc(4842,`table`,10)(4843,`tr`,11)(4844,`th`,12),lO(4845,`Nome`),wg(),jc(4846,`th`,12),lO(4847,`Tipo`),wg(),jc(4848,`th`,12),lO(4849,`Descrição`),wg()(),jc(4850,`tr`,13)(4851,`td`,14)(4852,`div`,15)(4853,`span`,16),lO(4854,` fields`),nu(4855,`br`),wg()()(),jc(4856,`td`,17)(4857,`code`,22),lO(4858,`Array<PoDynamicFormField>`),wg()(),jc(4859,`td`,20)(4860,`em`)(4861,`strong`),lO(4862,`(opcional)`),wg()(),jc(4863,`p`),lO(4864,`Lista com as novas definições dos campos.`),wg(),jc(4865,`blockquote`)(4866,`p`),lO(4867,`Não é necessário colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas.`),wg()()()(),jc(4868,`tr`,13)(4869,`td`,14)(4870,`div`,15)(4871,`span`,16),lO(4872,` focus`),nu(4873,`br`),wg()()(),jc(4874,`td`,17)(4875,`code`,18),lO(4876,`string`),wg()(),jc(4877,`td`,20)(4878,`em`)(4879,`strong`),lO(4880,`(opcional)`),wg()(),jc(4881,`p`),lO(4882,`Nome do campo que receberá o foco.`),wg(),jc(4883,`p`),lO(4884,`Exemplo:`),wg(),jc(4885,`pre`)(4886,`code`),lO(4887,`focus: 'name'
`),wg()()()(),jc(4888,`tr`,13)(4889,`td`,14)(4890,`div`,15)(4891,`span`,16),lO(4892,` value`),nu(4893,`br`),wg()()(),jc(4894,`td`,17)(4895,`code`,33),lO(4896,`any`),wg()(),jc(4897,`td`,20)(4898,`em`)(4899,`strong`),lO(4900,`(opcional)`),wg()(),jc(4901,`p`),lO(4902,`Objeto contendo os novos valores.`),wg(),jc(4903,`p`),lO(4904,`Exemplo:`),wg(),jc(4905,`pre`)(4906,`code`),lO(4907,`{
  name: 'new name',
  age: 10
}
`),wg()(),jc(4908,`blockquote`)(4909,`p`),lO(4910,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),wg()()()()(),jc(4911,`h4`,38)(4912,`code`,5),lO(4913,`PoDynamicFormFieldChanged`),wg()(),jc(4914,`div`,2)(4915,`p`),lO(4916,`Estrutura dos valores que serão disparados quando houver uma mudança em um campo ou no formulário.`),wg()(),jc(4917,`h4`,9),lO(4918,`Propriedades`),wg(),jc(4919,`table`,10)(4920,`tr`,11)(4921,`th`,12),lO(4922,`Nome`),wg(),jc(4923,`th`,12),lO(4924,`Tipo`),wg(),jc(4925,`th`,12),lO(4926,`Descrição`),wg()(),jc(4927,`tr`,13)(4928,`td`,14)(4929,`div`,15)(4930,`span`,16),lO(4931,` property`),nu(4932,`br`),wg()()(),jc(4933,`td`,17)(4934,`code`,18),lO(4935,`string`),wg()(),jc(4936,`td`,20)(4937,`p`),lO(4938,`Valor da propriedade do campo.`),wg()()(),jc(4939,`tr`,13)(4940,`td`,14)(4941,`div`,15)(4942,`span`,16),lO(4943,` value`),nu(4944,`br`),wg()()(),jc(4945,`td`,17)(4946,`code`,33),lO(4947,`any`),wg()(),jc(4948,`td`,20)(4949,`p`),lO(4950,`Novo valor do campo.`),wg()()()(),jc(4951,`h4`,38)(4952,`code`,5),lO(4953,`PoDynamicFormFieldValidation`),wg()(),jc(4954,`div`,2)(4955,`p`),nu(4956,`a`,84),wg(),jc(4957,`p`),lO(4958,`Estrutura de retorno da validação de um campo.`),wg()(),jc(4959,`h4`,9),lO(4960,`Propriedades`),wg(),jc(4961,`table`,10)(4962,`tr`,11)(4963,`th`,12),lO(4964,`Nome`),wg(),jc(4965,`th`,12),lO(4966,`Tipo`),wg(),jc(4967,`th`,12),lO(4968,`Descrição`),wg()(),jc(4969,`tr`,13)(4970,`td`,14)(4971,`div`,15)(4972,`span`,16),lO(4973,` field`),nu(4974,`br`),wg()()(),jc(4975,`td`,17)(4976,`code`,85),lO(4977,`PoDynamicFormField`),wg()(),jc(4978,`td`,20)(4979,`em`)(4980,`strong`),lO(4981,`(opcional)`),wg()(),jc(4982,`p`),lO(4983,`Novas definições das propriedades do campo.`),wg(),jc(4984,`blockquote`)(4985,`p`),lO(4986,`Não é necessário colocar todas as propriedades, apenas as que foram alteradas.`),wg()()()(),jc(4987,`tr`,13)(4988,`td`,14)(4989,`div`,15)(4990,`span`,16),lO(4991,` focus`),nu(4992,`br`),wg()()(),jc(4993,`td`,17)(4994,`code`,28),lO(4995,`boolean`),wg()(),jc(4996,`td`,20)(4997,`em`)(4998,`strong`),lO(4999,`(opcional)`),wg()(),jc(5e3,`p`),lO(5001,`Coloca o foco no campo após a validação.`),wg()()(),jc(5002,`tr`,13)(5003,`td`,14)(5004,`div`,15)(5005,`span`,16),lO(5006,` value`),nu(5007,`br`),wg()()(),jc(5008,`td`,17)(5009,`code`,33),lO(5010,`any`),wg()(),jc(5011,`td`,20)(5012,`em`)(5013,`strong`),lO(5014,`(opcional)`),wg()(),jc(5015,`p`),lO(5016,`Novo valor do campo`),wg()()()(),jc(5017,`h4`,38)(5018,`code`,5),lO(5019,`PoDynamicFormValidation`),wg()(),jc(5020,`div`,2)(5021,`p`),nu(5022,`a`,86),wg(),jc(5023,`p`),lO(5024,`Estrutura de retorno da validação do formulário.`),wg()(),jc(5025,`h4`,9),lO(5026,`Propriedades`),wg(),jc(5027,`table`,10)(5028,`tr`,11)(5029,`th`,12),lO(5030,`Nome`),wg(),jc(5031,`th`,12),lO(5032,`Tipo`),wg(),jc(5033,`th`,12),lO(5034,`Descrição`),wg()(),jc(5035,`tr`,13)(5036,`td`,14)(5037,`div`,15)(5038,`span`,16),lO(5039,` fields`),nu(5040,`br`),wg()()(),jc(5041,`td`,17)(5042,`code`,22),lO(5043,`Array<PoDynamicFormField>`),wg()(),jc(5044,`td`,20)(5045,`em`)(5046,`strong`),lO(5047,`(opcional)`),wg()(),jc(5048,`p`),lO(5049,`Lista com as novas definições dos campos.`),wg(),jc(5050,`blockquote`)(5051,`p`),lO(5052,`Não é necessário colocar todas as propriedades e campos, apenas as que foram alteradas.`),wg()()()(),jc(5053,`tr`,13)(5054,`td`,14)(5055,`div`,15)(5056,`span`,16),lO(5057,` focus`),nu(5058,`br`),wg()()(),jc(5059,`td`,17)(5060,`code`,18),lO(5061,`string`),wg()(),jc(5062,`td`,20)(5063,`em`)(5064,`strong`),lO(5065,`(opcional)`),wg()(),jc(5066,`p`),lO(5067,`Nome do campo que receberá o foco.`),wg(),jc(5068,`p`),lO(5069,`Exemplo:`),wg(),jc(5070,`pre`)(5071,`code`),lO(5072,`focus: 'name'
`),wg()()()(),jc(5073,`tr`,13)(5074,`td`,14)(5075,`div`,15)(5076,`span`,16),lO(5077,` value`),nu(5078,`br`),wg()()(),jc(5079,`td`,17)(5080,`code`,33),lO(5081,`any`),wg()(),jc(5082,`td`,20)(5083,`em`)(5084,`strong`),lO(5085,`(opcional)`),wg()(),jc(5086,`p`),lO(5087,`Objeto contendo os novos valores.`),wg(),jc(5088,`p`),lO(5089,`Exemplo:`),wg(),jc(5090,`pre`)(5091,`code`),lO(5092,`{
  name: 'new name',
  age: 10
}
`),wg()(),jc(5093,`blockquote`)(5094,`p`),lO(5095,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),wg()()()()(),jc(5096,`h4`,38)(5097,`code`,5),lO(5098,`ErrorAsyncProperties`),wg()(),jc(5099,`div`,2)(5100,`p`),lO(5101,`Interface para realizar uma validação assíncrona no componente.`),wg()(),jc(5102,`h4`,9),lO(5103,`Propriedades`),wg(),jc(5104,`table`,10)(5105,`tr`,11)(5106,`th`,12),lO(5107,`Nome`),wg(),jc(5108,`th`,12),lO(5109,`Tipo`),wg(),jc(5110,`th`,12),lO(5111,`Descrição`),wg()(),jc(5112,`tr`,13)(5113,`td`,14)(5114,`div`,15)(5115,`span`,16),lO(5116,` errorAsync`),nu(5117,`br`),wg()()(),jc(5118,`td`,17)(5119,`code`,46),lO(5120,`(value) => Observable<boolean>`),wg()(),jc(5121,`td`,20)(5122,`p`),lO(5123,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(5124,`code`),lO(5125,`change`),wg(),lO(5126,` ou `),jc(5127,`code`),lO(5128,`change-model`),wg(),lO(5129,`, dependendo do valor da propriedade `),jc(5130,`code`),lO(5131,`triggerMode`),wg(),lO(5132,`.`),wg()()(),jc(5133,`tr`,13)(5134,`td`,14)(5135,`div`,15)(5136,`span`,16),lO(5137,` triggerMode`),nu(5138,`br`),wg()()(),jc(5139,`td`,17)(5140,`code`,87),lO(5141,`'change' `),wg(),jc(5142,`code`,88),lO(5143,` 'changeModel'`),wg()(),jc(5144,`td`,20)(5145,`em`)(5146,`strong`),lO(5147,`(opcional)`),wg()(),jc(5148,`p`),lO(5149,`Controla se o método será executado no disparo do output `),jc(5150,`code`),lO(5151,`change`),wg(),lO(5152,` ou `),jc(5153,`code`),lO(5154,`change-model`),wg(),lO(5155,`.`),wg()()()(),jc(5156,`h3`),lO(5157,`Enums`),wg(),jc(5158,`h4`,4)(5159,`code`,5),lO(5160,`ForceBooleanComponentEnum`),wg()(),jc(5161,`div`,2)(5162,`p`),lO(5163,`Enum para definição do tipo de componente a ser renderizado.`),wg()(),jc(5164,`h4`,9),lO(5165,`Propriedades`),wg(),jc(5166,`table`,10)(5167,`tr`,11)(5168,`th`,12),lO(5169,`Nome`),wg(),jc(5170,`th`,12),lO(5171,`Descrição`),wg()(),jc(5172,`tr`,13)(5173,`td`,14)(5174,`div`,15)(5175,`span`,16),lO(5176,` switch`),nu(5177,`br`),wg()()(),jc(5178,`td`,20)(5179,`p`),lO(5180,`Força a renderização de um po-switch`),wg()()(),jc(5181,`tr`,13)(5182,`td`,14)(5183,`div`,15)(5184,`span`,16),lO(5185,` checkbox`),nu(5186,`br`),wg()()(),jc(5187,`td`,20)(5188,`p`),lO(5189,`Força a renderização de um po-checkbox`),wg()()()(),jc(5190,`h4`,4)(5191,`code`,5),lO(5192,`ForceOptionComponentEnum`),wg()(),jc(5193,`div`,2)(5194,`p`),lO(5195,`Enum para definição do tipo de componente a ser renderizado.`),wg()(),jc(5196,`h4`,9),lO(5197,`Propriedades`),wg(),jc(5198,`table`,10)(5199,`tr`,11)(5200,`th`,12),lO(5201,`Nome`),wg(),jc(5202,`th`,12),lO(5203,`Descrição`),wg()(),jc(5204,`tr`,13)(5205,`td`,14)(5206,`div`,15)(5207,`span`,16),lO(5208,` radioGroup`),nu(5209,`br`),wg()()(),jc(5210,`td`,20)(5211,`p`),lO(5212,`Força a renderização de um po-radio-group independente da quantidade do opções`),wg()()(),jc(5213,`tr`,13)(5214,`td`,14)(5215,`div`,15)(5216,`span`,16),lO(5217,` select`),nu(5218,`br`),wg()()(),jc(5219,`td`,20)(5220,`p`),lO(5221,`Força a renderização de um po-select independente da quantidade do opções`),wg()()()(),jc(5222,`h4`,4)(5223,`code`,5),lO(5224,`PoDynamicFieldType`),wg()(),jc(5225,`div`,2)(5226,`p`),lO(5227,`Enum para definição do tipo de campo que será criado dinamicamente.`),wg()(),jc(5228,`h4`,9),lO(5229,`Propriedades`),wg(),jc(5230,`table`,10)(5231,`tr`,11)(5232,`th`,12),lO(5233,`Nome`),wg(),jc(5234,`th`,12),lO(5235,`Descrição`),wg()(),jc(5236,`tr`,13)(5237,`td`,14)(5238,`div`,15)(5239,`span`,16),lO(5240,` Boolean`),nu(5241,`br`),wg()()(),jc(5242,`td`,20)(5243,`p`),lO(5244,`Valor booleano.`),wg()()(),jc(5245,`tr`,13)(5246,`td`,14)(5247,`div`,15)(5248,`span`,16),lO(5249,` Currency`),nu(5250,`br`),wg()()(),jc(5251,`td`,20)(5252,`p`),lO(5253,`Valor numérico que contém casas decimais e milhar.`),wg()()(),jc(5254,`tr`,13)(5255,`td`,14)(5256,`div`,15)(5257,`span`,16),lO(5258,` Decimal`),nu(5259,`br`),wg()()(),jc(5260,`td`,20)(5261,`p`),lO(5262,`Valor numérico que contém casas decimais e milhar.`),wg()()(),jc(5263,`tr`,13)(5264,`td`,14)(5265,`div`,15)(5266,`span`,16),lO(5267,` Date`),nu(5268,`br`),wg()()(),jc(5269,`td`,20)(5270,`p`),lO(5271,`Valor para data.`),wg()()(),jc(5272,`tr`,13)(5273,`td`,14)(5274,`div`,15)(5275,`span`,16),lO(5276,` DateTime`),nu(5277,`br`),wg()()(),jc(5278,`td`,20)(5279,`p`),lO(5280,`Valor para data e hora.`),wg()()(),jc(5281,`tr`,13)(5282,`td`,14)(5283,`div`,15)(5284,`span`,16),lO(5285,` Time`),nu(5286,`br`),wg()()(),jc(5287,`td`,20)(5288,`p`),lO(5289,`Utilizado para informar/exibir hora.`),wg()()(),jc(5290,`tr`,13)(5291,`td`,14)(5292,`div`,15)(5293,`span`,16),lO(5294,` Number`),nu(5295,`br`),wg()()(),jc(5296,`td`,20)(5297,`p`),lO(5298,`Valor numérico.`),wg()()(),jc(5299,`tr`,13)(5300,`td`,14)(5301,`div`,15)(5302,`span`,16),lO(5303,` String`),nu(5304,`br`),wg()()(),jc(5305,`td`,20)(5306,`p`),lO(5307,`Texto.`),wg()()(),jc(5308,`tr`,13)(5309,`td`,14)(5310,`div`,15)(5311,`span`,16),lO(5312,` Upload`),nu(5313,`br`),wg()()(),jc(5314,`td`,20)(5315,`p`),lO(5316,`Utilizado para fazer uploads de arquivos.`),wg()()()(),jc(5317,`h4`,4)(5318,`code`,5),lO(5319,`PoTimepickerModelFormat`),wg()(),jc(5320,`div`,2)(5321,`p`)(5322,`em`),lO(5323,`Enum`),wg(),lO(5324,` que define o padrão de formatação do model de saída do timepicker.`),wg()(),jc(5325,`h4`,9),lO(5326,`Propriedades`),wg(),jc(5327,`table`,10)(5328,`tr`,11)(5329,`th`,12),lO(5330,`Nome`),wg(),jc(5331,`th`,12),lO(5332,`Descrição`),wg()(),jc(5333,`tr`,13)(5334,`td`,14)(5335,`div`,15)(5336,`span`,16),lO(5337,` HourMinute`),nu(5338,`br`),wg()()(),jc(5339,`td`,20)(5340,`p`),lO(5341,`Formato básico `),jc(5342,`code`),lO(5343,`HH:mm`),wg(),lO(5344,` (ex: `),jc(5345,`code`),lO(5346,`14:30`),wg(),lO(5347,`).`),wg()()(),jc(5348,`tr`,13)(5349,`td`,14)(5350,`div`,15)(5351,`span`,16),lO(5352,` HourMinuteSecond`),nu(5353,`br`),wg()()(),jc(5354,`td`,20)(5355,`p`),lO(5356,`Formato com segundos `),jc(5357,`code`),lO(5358,`HH:mm:ss`),wg(),lO(5359,` (ex: `),jc(5360,`code`),lO(5361,`14:30:00`),wg(),lO(5362,`).`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function De(o,ke){if(o&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let m=Fx();return __(m.changeTab(`web`))}),nu(1,`sample-po-dynamic-form-basic-view`)(2,`sample-po-dynamic-form-register-view`)(3,`sample-po-dynamic-form-container-view`),wg()}if(o&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var Pe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Dynamic Form`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,m){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,De,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return m.changeTab(`doc`)}),nu(4,`sample-po-dynamic-form-doc`),wg()()()),a&2&&(UE(`p-actions`,m.actions),rg(2),Dx(m.hidePoWebSample?-1:2),rg(),UE(`p-active`,m.activeTab===`doc`))},dependencies:[Tze,Qae,ere,ne,ae,me,le],encapsulation:2,changeDetection:1})}return o})()}];var pe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[I1.forChild(Pe),I1]})}return o})();var ct=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[M,pe]})}return o})();export{ct as DocPoDynamicFormModule};
import{t as r}from"./chunk-zystk1pz.js";import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,H as Mze,Hi as ar,Hr as Me,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ri as Zg,Vi as _u,Xr as No,Yi as eF,_n as oae,ca as jk,dr as Cu,ea as ge,eo as xo,er as An,fi as Rb,ft as Tre,gi as Tk,kr as I,no as yk,nr as BO,or as Bk,qi as de$1,tt as Ru,ui as R,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var pe=()=>({property:`name`,required:!0,showRequired:!0});var se=o=>[o];var ee=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-form-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-fields`]],template:function(a,m){a&1&&_u(0,`po-dynamic-form`,0),a&2&&Rb(`p-fields`,Bk(2,se,jk(1,pe)))},dependencies:[oae],encapsulation:2,changeDetection:1})}return o})();var ue=o=>({"docs-sample-code-tabs":o});var ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-form-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,m){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dynamic Form Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return m.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-dynamic-form-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+m.sampleCodeButtonIcon),Ig(),nm(` `,m.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ue,m.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ee],encapsulation:2,changeDetection:1})}return o})();var K=(()=>{class o{getCity(r){switch(r){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(r){return{fields:[r.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var xe=[`dynamicForm`];var ne=(()=>{class o{poNotification=p(Ru);registerService=p(K);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,divider:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,divider:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,divider:`Work data`,range:!0,gridColumns:5,gridSmColumns:12},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`employeeCode`,label:`Employee code`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`999`,decimalsLength:0},{property:`overtime`,label:`Overtime hours`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`>>9.9<<`,decimalsLength:3,optional:!0},{property:`hobbies`,divider:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:Tre.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(r){return setTimeout(()=>{let a=this.registerService.getCity(r.value.state);this.updateDynamicFormField(`city`,{options:a,loading:!1})},500),{value:{city:void 0},fields:[{property:`city`,gridColumns:6,disabled:!1,loading:!0}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}updateDynamicFormField(r$1,a){let m=this.dynamicForm?.fields??this.fields,l=m.findIndex(O=>O.property===r$1);l>=0&&(m[l]=r(r({},m[l]),a),this.fields=[...m])}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-form-register`]],viewQuery:function(a,m){if(a&1&&Cu(xe,7),a&2){let l;No(l=xo())&&(m.dynamicForm=l.first)}},standalone:!1,features:[Me([K])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,m){if(a&1){let l=ZO();_u(0,`po-dynamic-form`,1,0)(2,`br`),Jc(3,`div`,2)(4,`po-button`,3),vt(`p-click`,function(){U_(l);let I=sk(1);return m.poNotification.success(`Data saved successfully!`),H_(I.form.reset())}),Zg()()}if(a&2){let l=sk(1);Rb(`p-fields`,m.fields)(`p-load`,m.onLoadFields.bind(m))(`p-validate`,m.onChangeFields.bind(m))(`p-validate-fields`,m.validateFields)(`p-value`,m.person),Ig(4),Rb(`p-disabled`,l?.form.invalid)}},dependencies:[oi,oae],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o});var oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-form-register-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,m){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dynamic Form - Register`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return m.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-dynamic-form
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-dynamic-form-register`),Zg(),_u(27,`hr`)),a&2&&(Ig(5),yk(`po-icon `+m.sampleCodeButtonIcon),Ig(),nm(` `,m.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,be,m.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ne],encapsulation:2,changeDetection:1})}return o})();var X=(()=>{class o{getCity(r){switch(r){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(r){return{fields:[r.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ye=[`dynamicForm`];var ae=(()=>{class o{poNotification=p(Ru);registerService=p(X);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,container:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthday`)},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`,keydown:this.onKeyDown.bind(this,`secretKey`)},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,container:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,container:`Work data`,range:!0,gridColumns:5,gridSmColumns:12,help:`Enter or select a valid date range.`,additionalHelpTooltip:`Ensure the start date is earlier than or equal to the end date.`,keydown:this.onKeyDown.bind(this,`vacation`)},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`revenue`,label:`Revenue`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>,>,>>>,>>9`,decimalsLength:0},{property:`adjustment`,label:`Adjustment`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>9.99`,optional:!0},{property:`hobbies`,container:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0,listboxControlPosition:`top`},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0,listboxControlPosition:`top`},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0,listboxControlPosition:`top`},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:Tre.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`,customAction:{icon:`an an-download`,visible:!0},customActionClick:r=>{console.log(`Iniciar download para o arquivo:`,r.name)}}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(r){return{value:{city:void 0},fields:[{property:`city`,gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onKeyDown(r,a){a.code===`F9`&&this.dynamicForm.showAdditionalHelp(r)}onLoadFields(r){return this.registerService.getUserDocument(r)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-form-container`]],viewQuery:function(a,m){if(a&1&&Cu(ye,7),a&2){let l;No(l=xo())&&(m.dynamicForm=l.first)}},standalone:!1,features:[Me([X])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,m){if(a&1){let l=ZO();_u(0,`po-dynamic-form`,1,0)(2,`br`),Jc(3,`div`,2)(4,`po-button`,3),vt(`p-click`,function(){U_(l);let I=sk(1);return m.poNotification.success(`Data saved successfully!`),H_(I.form.reset())}),Zg()()}if(a&2){let l=sk(1);Rb(`p-fields`,m.fields)(`p-load`,m.onLoadFields.bind(m))(`p-validate`,m.onChangeFields.bind(m))(`p-validate-fields`,m.validateFields)(`p-value`,m.person),Ig(4),Rb(`p-disabled`,l?.form.invalid)}},dependencies:[oi,oae],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-form-container-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,m){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Dynamic Form - Container`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return m.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-dynamic-form
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { Injectable } from '@angular/core';

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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-dynamic-form-container`),Zg(),_u(27,`hr`)),a&2&&(Ig(5),yk(`po-icon `+m.sampleCodeButtonIcon),Ig(),nm(` `,m.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,fe,m.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ae],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-dynamic-form-doc`]],standalone:!1,decls:5363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-load`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`id`,`po-dynamic-form-load`],[`id`,`po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFormField`],[`id`,`po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(a,m){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),Zg()(),_u(4,`div`,2),Jc(5,`h3`,3),Tk(6,`Componente`),Zg(),Jc(7,`h4`,4)(8,`code`,5),Tk(9,`PoDynamicFormComponent`),Zg()(),Jc(10,`div`,2)(11,`p`),Tk(12,`Componente para criação de formulários dinâmicos a partir de uma lista de objetos.`),Zg(),Jc(13,`p`),Tk(14,`Também é possível verificar se o formulário está válido e informar valores para a exibição de informações. `),Zg()(),Jc(15,`div`,6)(16,`h4`,7),Tk(17,`Seletor`),Zg(),Jc(18,`pre`,8),Tk(19,`<po-dynamic-form
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
`),Zg()(),Jc(20,`h4`,9),Tk(21,`Propriedades`),Zg(),Jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),Tk(25,`Nome`),Zg(),Jc(26,`th`,12),Tk(27,`Tipo`),Zg(),Jc(28,`th`,12),Tk(29,`Padrão`),Zg(),Jc(30,`th`,12),Tk(31,`Descrição`),Zg()(),Jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),Tk(36,` p-auto-focus`),_u(37,`br`),Zg()()(),Jc(38,`td`,17)(39,`code`,18),Tk(40,`string`),Zg()(),Jc(41,`td`,19),Tk(42,`-`),Zg(),Jc(43,`td`,20)(44,`em`)(45,`strong`),Tk(46,`(opcional)`),Zg()(),Jc(47,`p`),Tk(48,`Nome da propriedade, atribuída ao `),Jc(49,`code`),Tk(50,`PoDynamicFormField.property`),Zg(),Tk(51,`, que iniciará o campo com foco.`),Zg()()(),Jc(52,`tr`,13)(53,`td`,14)(54,`div`,15)(55,`span`,16),Tk(56,` p-components-size`),_u(57,`br`),Zg()()(),Jc(58,`td`,17)(59,`code`,18),Tk(60,`string`),Zg()(),Jc(61,`td`,19)(62,`p`)(63,`code`),Tk(64,`medium`),Zg()()(),Jc(65,`td`,20)(66,`em`)(67,`strong`),Tk(68,`(opcional)`),Zg()(),Jc(69,`p`),Tk(70,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(71,`ul`)(72,`li`)(73,`code`),Tk(74,`small`),Zg(),Tk(75,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(76,`li`)(77,`code`),Tk(78,`medium`),Zg(),Tk(79,`: aplica a medida medium de cada componente.`),Zg()(),Jc(80,`blockquote`)(81,`p`),Tk(82,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(83,`code`),Tk(84,`medium`),Zg(),Tk(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(86,`a`,21),Tk(87,`po-theme`),Zg(),Tk(88,`.`),Zg()()()(),Jc(89,`tr`,13)(90,`td`,14)(91,`div`,15)(92,`span`,16),Tk(93,` p-fields`),_u(94,`br`),Zg()()(),Jc(95,`td`,17)(96,`code`,22),Tk(97,`Array<PoDynamicFormField>`),Zg()(),Jc(98,`td`,19)(99,`p`)(100,`code`),Tk(101,`[]`),Zg()()(),Jc(102,`td`,20)(103,`p`),Tk(104,`Coleção de objetos que implementam a interface `),Jc(105,`code`),Tk(106,`PoDynamicFormField`),Zg(),Tk(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),Zg(),Jc(108,`blockquote`)(109,`p`),Tk(110,`Ex: `),Jc(111,`code`),Tk(112,`[ { property: 'name' } ]`),Zg()()(),Jc(113,`p`),Tk(114,`Regras de tipagem e criação dos componentes:`),Zg(),Jc(115,`ul`)(116,`li`),Tk(117,`Caso o `),Jc(118,`em`),Tk(119,`type`),Zg(),Tk(120,` informado seja `),Jc(121,`em`),Tk(122,`boolean`),Zg(),Tk(123,` o componente criado será o `),Jc(124,`code`),Tk(125,`po-switch`),Zg(),Tk(126,`.`),Zg(),Jc(127,`li`),Tk(128,`Caso o `),Jc(129,`em`),Tk(130,`type`),Zg(),Tk(131,` informado seja `),Jc(132,`em`),Tk(133,`currency`),Zg(),Tk(134,` e não seja informado um `),Jc(135,`em`),Tk(136,`mask`),Zg(),Tk(137,` ou `),Jc(138,`em`),Tk(139,`pattern`),Zg(),Tk(140,` o componente criado será o `),Jc(141,`code`),Tk(142,`po-decimal`),Zg(),Tk(143,`,
caso seja informado um `),Jc(144,`em`),Tk(145,`mask`),Zg(),Tk(146,` ou `),Jc(147,`em`),Tk(148,`pattern`),Zg(),Tk(149,` o componente criado será o `),Jc(150,`code`),Tk(151,`po-input`),Zg(),Tk(152,`.`),Zg(),Jc(153,`li`),Tk(154,`Caso o `),Jc(155,`em`),Tk(156,`type`),Zg(),Tk(157,` informado seja `),Jc(158,`em`),Tk(159,`number`),Zg(),Tk(160,` e não seja informado um `),Jc(161,`em`),Tk(162,`mask`),Zg(),Tk(163,` ou `),Jc(164,`em`),Tk(165,`pattern`),Zg(),Tk(166,` o componente criado será o `),Jc(167,`code`),Tk(168,`po-number`),Zg(),Tk(169,`, caso seja
informado um `),Jc(170,`em`),Tk(171,`mask`),Zg(),Tk(172,` ou `),Jc(173,`em`),Tk(174,`pattern`),Zg(),Tk(175,` o componente criado será o `),Jc(176,`code`),Tk(177,`po-input`),Zg(),Tk(178,`.`),Zg(),Jc(179,`li`),Tk(180,`Caso a lista possua a propriedade `),Jc(181,`code`),Tk(182,`options`),Zg(),Tk(183,` e a mesma possua até 3 itens o componente criado será o `),Jc(184,`code`),Tk(185,`po-radio-group`),Zg(),Tk(186,`
ou `),Jc(187,`code`),Tk(188,`po-checkbox-group`),Zg(),Tk(189,` se informar a propriedade `),Jc(190,`code`),Tk(191,`optionsMulti`),Zg(),Tk(192,`.`),Zg(),Jc(193,`li`),Tk(194,`Caso a mesma possua 3 ou mais itens, será criado o componente `),Jc(195,`code`),Tk(196,`po-select`),Zg(),Tk(197,` ou, `),Jc(198,`code`),Tk(199,`po-multiselect`),Zg(),Tk(200,` se a propriedade `),Jc(201,`code`),Tk(202,`optionsMulti`),Zg(),Tk(203,`
for verdadeira.`),Zg(),Jc(204,`li`),Tk(205,`Caso o `),Jc(206,`em`),Tk(207,`type`),Zg(),Tk(208,` informado seja `),Jc(209,`em`),Tk(210,`date`),Zg(),Tk(211,` ou `),Jc(212,`em`),Tk(213,`datetime`),Zg(),Tk(214,` o componente criado será o `),Jc(215,`code`),Tk(216,`po-datepicker`),Zg(),Tk(217,`.`),Zg(),Jc(218,`li`),Tk(219,`Caso seja informado a propriedade `),Jc(220,`code`),Tk(221,`optionsService`),Zg(),Tk(222,` o componente criado será o `),Jc(223,`code`),Tk(224,`po-combo`),Zg(),Tk(225,`.`),Zg(),Jc(226,`li`),Tk(227,`Caso o `),Jc(228,`em`),Tk(229,`type`),Zg(),Tk(230,` informado seja `),Jc(231,`em`),Tk(232,`time`),Zg(),Tk(233,` o componente criado será um `),Jc(234,`code`),Tk(235,`po-input`),Zg(),Tk(236,` podendo receber um `),Jc(237,`em`),Tk(238,`mask`),Zg(),Tk(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Jc(240,`em`),Tk(241,`mask`),Zg(),Tk(242,` o componente será criado com a máscara '99:99' por padrão.`),Zg(),Jc(243,`li`),Tk(244,`Caso a lista possua a propriedade `),Jc(245,`code`),Tk(246,`rows`),Zg(),Tk(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Jc(248,`code`),Tk(249,`po-textarea`),Zg(),Tk(250,`, caso o valor da propriedade `),Jc(251,`code`),Tk(252,`rows`),Zg(),Tk(253,` seja menor que 3 o componente criado será o `),Jc(254,`code`),Tk(255,`po-input`),Zg(),Tk(256,`.`),Zg(),Jc(257,`li`),Tk(258,`Caso seja informada a propriedade `),Jc(259,`code`),Tk(260,`secret`),Zg(),Tk(261,` o componente criado será o `),Jc(262,`code`),Tk(263,`po-password`),Zg(),Tk(264,`.`),Zg(),Jc(265,`li`),Tk(266,`Caso o `),Jc(267,`em`),Tk(268,`type`),Zg(),Tk(269,` informado seja `),Jc(270,`em`),Tk(271,`string`),Zg(),Tk(272,` o componente criado será o `),Jc(273,`code`),Tk(274,`po-input`),Zg(),Tk(275,`.`),Jc(276,`blockquote`)(277,`p`),Tk(278,`Ao alterar o valor das `),Jc(279,`code`),Tk(280,`properties`),Zg(),Tk(281,`, visibilidade e/ou agrupamentos via container, os `),Jc(282,`code`),Tk(283,`fields`),Zg(),Tk(284,` que utilizam serviço podem refazer as chamadas para as API's.`),Zg()()()()()(),Jc(285,`tr`,13)(286,`td`,14)(287,`div`,23)(288,`span`,24),Tk(289,` (p-form)`),_u(290,`br`),Zg()()(),Jc(291,`td`,17)(292,`code`,25),Tk(293,`EventEmitter`),Zg()(),Jc(294,`td`,19),Tk(295,`-`),Zg(),Jc(296,`td`,20)(297,`em`)(298,`strong`),Tk(299,`(opcional)`),Zg()(),Jc(300,`p`),Tk(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),Zg(),Jc(302,`p`),Tk(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Jc(304,`em`),Tk(305,`template reference`),Zg(),Tk(306,` e através do `),Jc(307,`em`),Tk(308,`output`),Zg(),Tk(309,`, veja os exemplos abaixo:`),Zg(),Jc(310,`blockquote`)(311,`p`)(312,`em`),Tk(313,`template reference`),Zg()()(),Jc(314,`pre`)(315,`code`,26),Tk(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),Zg()(),Jc(317,`blockquote`)(318,`p`)(319,`em`),Tk(320,`Output`),Zg()()(),Jc(321,`pre`)(322,`code`,26),Tk(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),Zg()(),Jc(324,`pre`)(325,`code`,27),Tk(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),Zg()(),Jc(327,`blockquote`)(328,`p`),Tk(329,`Caso a propriedade `),Jc(330,`code`),Tk(331,`p-group-form`),Zg(),Tk(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),Zg()()()(),Jc(333,`tr`,13)(334,`td`,14)(335,`div`,15)(336,`span`,16),Tk(337,` p-group-form`),_u(338,`br`),Zg()()(),Jc(339,`td`,17)(340,`code`,28),Tk(341,`boolean`),Zg()(),Jc(342,`td`,19),Tk(343,`-`),Zg(),Jc(344,`td`,20)(345,`em`)(346,`strong`),Tk(347,`(opcional)`),Zg()(),Jc(348,`p`),Tk(349,`Ao informar esta propriedade, o componente passará a utilizar o formulário pai para criar os `),Jc(350,`code`),Tk(351,`FormControl`),Zg(),Tk(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),Zg(),Jc(353,`pre`)(354,`code`,26),Tk(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),Zg()()()(),Jc(356,`tr`,13)(357,`td`,14)(358,`div`,15)(359,`span`,16),Tk(360,` p-load`),_u(361,`br`),Zg()()(),Jc(362,`td`,17)(363,`code`,18),Tk(364,`string `),Zg(),Jc(365,`code`,29),Tk(366,` Function`),Zg()(),Jc(367,`td`,19),Tk(368,`-`),Zg(),Jc(369,`td`,20)(370,`em`)(371,`strong`),Tk(372,`(opcional)`),Zg()(),Jc(373,`p`),Tk(374,`Função ou serviço que será executado na inicialização do componente.`),Zg(),Jc(375,`p`),Tk(376,`A propriedade aceita os seguintes tipos:`),Zg(),Jc(377,`ul`)(378,`li`)(379,`code`),Tk(380,`string`),Zg(),Tk(381,`: `),Jc(382,`em`),Tk(383,`Endpoint`),Zg(),Tk(384,` usado pelo componente para requisição via `),Jc(385,`code`),Tk(386,`POST`),Zg(),Tk(387,`.`),Zg(),Jc(388,`li`)(389,`code`),Tk(390,`function`),Zg(),Tk(391,`: Método que será executado.`),Zg()(),Jc(392,`p`),Tk(393,`Ao ser executado, irá receber como parâmetro o objeto informado no `),Jc(394,`code`),Tk(395,`p-value`),Zg(),Tk(396,`.`),Zg(),Jc(397,`p`),Tk(398,`O retorno desta função deve ser do tipo `),Jc(399,`a`,30),Tk(400,`PoDynamicFormLoad`),Zg(),Tk(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),Zg(),Jc(402,`p`),Tk(403,`Por exemplo:`),Zg(),Jc(404,`pre`)(405,`code`),Tk(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),Zg()(),Jc(407,`p`),Tk(408,`Para referenciar a sua função utilize a propriedade `),Jc(409,`code`),Tk(410,`bind`),Zg(),Tk(411,`, por exemplo:`),Zg(),Jc(412,`pre`)(413,`code`),Tk(414,`[p-load]="onLoadFields.bind(this)"
`),Zg()()()(),Jc(415,`tr`,13)(416,`td`,14)(417,`div`,15)(418,`span`,16),Tk(419,` p-validate`),_u(420,`br`),Zg()()(),Jc(421,`td`,17)(422,`code`,18),Tk(423,`string `),Zg(),Jc(424,`code`,29),Tk(425,` Function`),Zg()(),Jc(426,`td`,19),Tk(427,`-`),Zg(),Jc(428,`td`,20)(429,`em`)(430,`strong`),Tk(431,`(opcional)`),Zg()(),Jc(432,`p`),Tk(433,`Função ou serviço para validar as `),Jc(434,`strong`),Tk(435,`mudanças do formulário`),Zg(),Tk(436,`.`),Zg(),Jc(437,`p`),Tk(438,`A propriedade aceita os seguintes tipos:`),Zg(),Jc(439,`ul`)(440,`li`)(441,`code`),Tk(442,`string`),Zg(),Tk(443,`: `),Jc(444,`em`),Tk(445,`Endpoint`),Zg(),Tk(446,` usado pelo componente para requisição via `),Jc(447,`code`),Tk(448,`POST`),Zg(),Tk(449,`.`),Zg(),Jc(450,`li`)(451,`code`),Tk(452,`function`),Zg(),Tk(453,`: Método que será executado.`),Zg()(),Jc(454,`p`),Tk(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Jc(456,`code`),Tk(457,`PoDynamicFormFieldChanged`),Zg()(),Jc(458,`p`),Tk(459,`O retorno desta função deve ser do tipo `),Jc(460,`a`,31),Tk(461,`PoDynamicFormValidation`),Zg(),Tk(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),Zg(),Jc(463,`pre`)(464,`code`),Tk(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),Zg()(),Jc(466,`p`),Tk(467,`Para referenciar a sua função utilize a propriedade `),Jc(468,`code`),Tk(469,`bind`),Zg(),Tk(470,`, por exemplo:`),Zg(),Jc(471,`pre`)(472,`code`),Tk(473,`[p-validate]="this.myFunction.bind(this)"
`),Zg()(),Jc(474,`blockquote`)(475,`p`),Tk(476,`Se houver uma lista de campos para validação definida em `),Jc(477,`code`),Tk(478,`p-validate-fields`),Zg(),Tk(479,`, a propriedade `),Jc(480,`code`),Tk(481,`validate`),Zg(),Tk(482,` só receberá o disparo para os campos equivalentes.`),Zg()()()(),Jc(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),Tk(487,` p-validate-fields`),_u(488,`br`),Zg()()(),Jc(489,`td`,17)(490,`code`,32),Tk(491,`Array<string>`),Zg()(),Jc(492,`td`,19),Tk(493,`-`),Zg(),Jc(494,`td`,20)(495,`em`)(496,`strong`),Tk(497,`(opcional)`),Zg()(),Jc(498,`p`),Tk(499,`Lista que define os campos que irão disparar o validate do form.`),Zg()()(),Jc(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),Tk(504,` p-validate-on-input`),_u(505,`br`),Zg()()(),Jc(506,`td`,17)(507,`code`,28),Tk(508,`boolean`),Zg()(),Jc(509,`td`,19),Tk(510,`-`),Zg(),Jc(511,`td`,20)(512,`em`)(513,`strong`),Tk(514,`(opcional)`),Zg()(),Jc(515,`p`),Tk(516,`Ao informar esta propriedade, o componente passará a emitir o valor a cada caractere digitado.`),Zg(),Jc(517,`p`),Tk(518,`Pode ser aplicado nos seguintes componentes:`),Zg(),Jc(519,`ul`)(520,`li`),Tk(521,`po-input`),Zg(),Jc(522,`li`),Tk(523,`po-number`),Zg(),Jc(524,`li`),Tk(525,`po-decimal`),Zg(),Jc(526,`li`),Tk(527,`po-textarea`),Zg(),Jc(528,`li`),Tk(529,`po-password`),Zg()(),Jc(530,`p`),Tk(531,`Deve informar os campos que deseja receber as emissões na propriedade `),Jc(532,`code`),Tk(533,`p-validate-fields`),Zg(),Tk(534,`.`),Zg()()(),Jc(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),Tk(539,` p-value`),_u(540,`br`),Zg()()(),Jc(541,`td`,17)(542,`code`,33),Tk(543,`any`),Zg()(),Jc(544,`td`,19),Tk(545,`-`),Zg(),Jc(546,`td`,20)(547,`p`),Tk(548,`Objeto que será utilizado como valor para exibir as informações, será recuperado e preenchido através do atributo `),Jc(549,`em`),Tk(550,`property`),Zg(),Tk(551,`
dos objetos contidos na propridade `),Jc(552,`code`),Tk(553,`p-fields`),Zg(),Tk(554,`.`),Zg(),Jc(555,`p`),Tk(556,`Pode iniciar com valor ou apenas com um objeto vazio que será preenchido conforme descrito acima.`),Zg(),Jc(557,`blockquote`)(558,`p`),Tk(559,`Ex: `),Jc(560,`code`),Tk(561,`{ name: 'po' }`),Zg()()()()()(),Jc(562,`h3`,9),Tk(563,`Métodos`),Zg(),Jc(564,`table`,34)(565,`tr`,13)(566,`th`,35)(567,`div`,15)(568,`h4`)(569,`span`,16),Tk(570,` focus `),Zg()()()()(),Jc(571,`tr`,20)(572,`td`,20)(573,`p`),Tk(574,`Função que atribui foco ao campo desejado.`),Zg(),Jc(575,`p`),Tk(576,`Para utilizá-la é necessário capturar a instância do `),Jc(577,`code`),Tk(578,`dynamic form`),Zg(),Tk(579,`, como por exemplo:`),Zg(),Jc(580,`pre`)(581,`code`,26),Tk(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),Zg()(),Jc(583,`pre`)(584,`code`,36),Tk(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),Zg()()()()(),Jc(586,`h5`)(587,`b`),Tk(588,`Parâmetros`),Zg()(),Jc(589,`table`,10)(590,`tr`,11)(591,`th`,12),Tk(592,`Nome`),Zg(),Jc(593,`th`,12),Tk(594,`Tipo`),Zg(),Jc(595,`th`,12),Tk(596,`Descrição`),Zg()(),Jc(597,`tr`,13)(598,`td`,14),Tk(599,` property`),Zg(),Jc(600,`td`,17)(601,`code`,37),Tk(602,` string `),Zg()(),Jc(603,`td`,20)(604,`p`),Tk(605,`Nome da propriedade atribuída ao `),Jc(606,`code`),Tk(607,`PoDynamicFormField.property`),Zg(),Tk(608,`.`),Zg()()()(),_u(609,`br`),Jc(610,`table`,34)(611,`tr`,13)(612,`th`,35)(613,`div`,15)(614,`h4`)(615,`span`,16),Tk(616,` showAdditionalHelp `),Zg()()()()(),Jc(617,`tr`,20)(618,`td`,20)(619,`p`),Tk(620,`Método que exibe `),Jc(621,`code`),Tk(622,`p-helper`),Zg(),Tk(623,` ou executa a ação definida em `),Jc(624,`code`),Tk(625,`p-helper{eventOnClick}`),Zg(),Tk(626,` ou em `),Jc(627,`code`),Tk(628,`p-additionalHelp`),Zg(),Tk(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(630,`code`),Tk(631,`keydown`),Zg(),Tk(632,`.`),Zg(),Jc(633,`pre`)(634,`code`),Tk(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),Zg()()()()(),Jc(636,`h5`)(637,`b`),Tk(638,`Parâmetros`),Zg()(),Jc(639,`table`,10)(640,`tr`,11)(641,`th`,12),Tk(642,`Nome`),Zg(),Jc(643,`th`,12),Tk(644,`Tipo`),Zg(),Jc(645,`th`,12),Tk(646,`Descrição`),Zg()(),Jc(647,`tr`,13)(648,`td`,14),Tk(649,` property`),Zg(),Jc(650,`td`,17)(651,`code`,37),Tk(652,` string `),Zg()(),Jc(653,`td`,20)(654,`p`),Tk(655,`Identificador da coluna.`),Zg()()()(),_u(656,`br`),Jc(657,`h3`),Tk(658,`Interfaces`),Zg(),Jc(659,`h4`,38)(660,`code`,5),Tk(661,`PoDynamicFormField`),Zg()(),Jc(662,`div`,2)(663,`p`),Tk(664,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente.`),Zg()(),Jc(665,`h4`,9),Tk(666,`Propriedades`),Zg(),Jc(667,`table`,10)(668,`tr`,11)(669,`th`,12),Tk(670,`Nome`),Zg(),Jc(671,`th`,12),Tk(672,`Tipo`),Zg(),Jc(673,`th`,12),Tk(674,`Descrição`),Zg()(),Jc(675,`tr`,13)(676,`td`,14)(677,`div`,15)(678,`span`,16),Tk(679,` additionalHelp`),_u(680,`br`),Zg()()(),Jc(681,`td`,17)(682,`code`,29),Tk(683,`Function`),Zg()(),Jc(684,`td`,20)(685,`em`)(686,`strong`),Tk(687,`(opcional)`),Zg()(),Jc(688,`p`),Tk(689,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(690,`blockquote`)(691,`p`),Tk(692,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(693,`tr`,13)(694,`td`,14)(695,`div`,15)(696,`span`,16),Tk(697,` additionalHelpTooltip`),_u(698,`br`),Zg()()(),Jc(699,`td`,17)(700,`code`,18),Tk(701,`string`),Zg()(),Jc(702,`td`,20)(703,`em`)(704,`strong`),Tk(705,`(opcional)`),Zg()(),Jc(706,`p`),Tk(707,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(708,`code`),Tk(709,`po-helper`),Zg(),Tk(710,`.
`),Jc(711,`strong`),Tk(712,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(713,`blockquote`)(714,`p`),Tk(715,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(716,`tr`,13)(717,`td`,14)(718,`div`,15)(719,`span`,16),Tk(720,` advancedFilters`),_u(721,`br`),Zg()()(),Jc(722,`td`,17)(723,`code`,39),Tk(724,`Array<PoLookupAdvancedFilter>`),Zg()(),Jc(725,`td`,20)(726,`em`)(727,`strong`),Tk(728,`(opcional)`),Zg()(),Jc(729,`p`),Tk(730,`Lista de objetos dos campos que serão criados na busca avançada.`),Zg(),Jc(731,`blockquote`)(732,`p`),Tk(733,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),Zg()(),Jc(734,`p`),Tk(735,`Exemplo de URL com busca avançada:`),Zg(),Jc(736,`p`)(737,`code`),Tk(738,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),Zg()(),Jc(739,`p`),Tk(740,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),Zg(),Jc(741,`p`)(742,`code`),Tk(743,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),Zg()()()(),Jc(744,`tr`,13)(745,`td`,14)(746,`div`,15)(747,`span`,16),Tk(748,` appendBox`),_u(749,`br`),Zg()()(),Jc(750,`td`,17)(751,`code`,28),Tk(752,`boolean`),Zg()(),Jc(753,`td`,20)(754,`em`)(755,`strong`),Tk(756,`(opcional)`),Zg()(),Jc(757,`p`),Tk(758,`Define que o `),Jc(759,`code`),Tk(760,`listbox`),Zg(),Tk(761,` e/ou popover (`),Jc(762,`code`),Tk(763,`p-helper`),Zg(),Tk(764,` e/ou `),Jc(765,`code`),Tk(766,`p-error-limit`),Zg(),Tk(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),Zg(),Jc(768,`blockquote`)(769,`p`),Tk(770,`Quando utilizado com `),Jc(771,`code`),Tk(772,`p-helper`),Zg(),Tk(773,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(774,`tr`,13)(775,`td`,14)(776,`div`,15)(777,`span`,16),Tk(778,` autoHeight`),_u(779,`br`),Zg()()(),Jc(780,`td`,17)(781,`code`,28),Tk(782,`boolean`),Zg()(),Jc(783,`td`,20)(784,`em`)(785,`strong`),Tk(786,`(opcional)`),Zg()(),Jc(787,`p`),Tk(788,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),Zg(),Jc(789,`p`)(790,`strong`),Tk(791,`Componentes compatíveis:`),Zg(),Jc(792,`code`),Tk(793,`po-multiselect`),Zg(),Tk(794,`, `),Jc(795,`code`),Tk(796,`po-lookup`),Zg(),Tk(797,`.`),Zg()()(),Jc(798,`tr`,13)(799,`td`,14)(800,`div`,15)(801,`span`,16),Tk(802,` autoUpload`),_u(803,`br`),Zg()()(),Jc(804,`td`,17)(805,`code`,28),Tk(806,`boolean`),Zg()(),Jc(807,`td`,20)(808,`em`)(809,`strong`),Tk(810,`(opcional)`),Zg()(),Jc(811,`p`),Tk(812,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),Zg(),Jc(813,`p`)(814,`strong`),Tk(815,`Componente compatível`),Zg(),Tk(816,`: `),Jc(817,`code`),Tk(818,`po-upload`),Zg()()()(),Jc(819,`tr`,13)(820,`td`,14)(821,`div`,15)(822,`span`,16),Tk(823,` booleanFalse`),_u(824,`br`),Zg()()(),Jc(825,`td`,17)(826,`code`,18),Tk(827,`string`),Zg()(),Jc(828,`td`,20)(829,`em`)(830,`strong`),Tk(831,`(opcional)`),Zg()(),Jc(832,`p`),Tk(833,`Texto exibido quando o valor do componente for `),Jc(834,`em`),Tk(835,`false`),Zg(),Tk(836,`.`),Zg()()(),Jc(837,`tr`,13)(838,`td`,14)(839,`div`,15)(840,`span`,16),Tk(841,` booleanTrue`),_u(842,`br`),Zg()()(),Jc(843,`td`,17)(844,`code`,18),Tk(845,`string`),Zg()(),Jc(846,`td`,20)(847,`em`)(848,`strong`),Tk(849,`(opcional)`),Zg()(),Jc(850,`p`),Tk(851,`Texto exibido quando o valor do componente for `),Jc(852,`em`),Tk(853,`true`),Zg(),Tk(854,`.`),Zg()()(),Jc(855,`tr`,13)(856,`td`,14)(857,`div`,15)(858,`span`,16),Tk(859,` changeOnEnter`),_u(860,`br`),Zg()()(),Jc(861,`td`,17)(862,`code`,28),Tk(863,`boolean`),Zg()(),Jc(864,`td`,20)(865,`em`)(866,`strong`),Tk(867,`(opcional)`),Zg()(),Jc(868,`p`),Tk(869,`Indica que o evento `),Jc(870,`code`),Tk(871,`p-change`),Zg(),Tk(872,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Jc(873,`code`),Tk(874,`po-combo`),Zg(),Tk(875,`.`),Zg()()(),Jc(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),Tk(880,` changeVisibleColumns`),_u(881,`br`),Zg()()(),Jc(882,`td`,17)(883,`code`,29),Tk(884,`Function`),Zg()(),Jc(885,`td`,20)(886,`em`)(887,`strong`),Tk(888,`(opcional)`),Zg()(),Jc(889,`p`),Tk(890,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),Zg(),Jc(891,`p`),Tk(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Zg(),Jc(893,`p`)(894,`strong`),Tk(895,`Componente compatível`),Zg(),Tk(896,`: `),Jc(897,`code`),Tk(898,`po-lookup`),Zg()()()(),Jc(899,`tr`,13)(900,`td`,14)(901,`div`,15)(902,`span`,16),Tk(903,` clean`),_u(904,`br`),Zg()()(),Jc(905,`td`,17)(906,`code`,28),Tk(907,`boolean`),Zg()(),Jc(908,`td`,20)(909,`em`)(910,`strong`),Tk(911,`(opcional)`),Zg()(),Jc(912,`p`),Tk(913,`Se verdadeiro, o campo receberá um botão para ser limpo.`),Zg(),Jc(914,`p`)(915,`strong`),Tk(916,`Componentes compatíveis:`),Zg(),Jc(917,`code`),Tk(918,`po-datepicker`),Zg(),Tk(919,`, `),Jc(920,`code`),Tk(921,`po-datepicker-range`),Zg(),Tk(922,`, `),Jc(923,`code`),Tk(924,`po-input`),Zg(),Tk(925,`, `),Jc(926,`code`),Tk(927,`po-number`),Zg(),Tk(928,`, `),Jc(929,`code`),Tk(930,`po-decimal`),Zg(),Tk(931,`,
`),Jc(932,`code`),Tk(933,`po-combo`),Zg(),Tk(934,`, `),Jc(935,`code`),Tk(936,`po-lookup`),Zg(),Tk(937,`, `),Jc(938,`code`),Tk(939,`po-password`),Zg(),Tk(940,`, `),Jc(941,`code`),Tk(942,`po-timepicker`),Zg(),Tk(943,`.`),Zg()()(),Jc(944,`tr`,13)(945,`td`,14)(946,`div`,15)(947,`span`,16),Tk(948,` columnRestoreManager`),_u(949,`br`),Zg()()(),Jc(950,`td`,17)(951,`code`,29),Tk(952,`Function`),Zg()(),Jc(953,`td`,20)(954,`em`)(955,`strong`),Tk(956,`(opcional)`),Zg()(),Jc(957,`p`),Tk(958,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),Zg(),Jc(959,`p`),Tk(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),Zg(),Jc(961,`p`)(962,`strong`),Tk(963,`Componente compatível`),Zg(),Tk(964,`: `),Jc(965,`code`),Tk(966,`po-lookup`),Zg()()()(),Jc(967,`tr`,13)(968,`td`,14)(969,`div`,15)(970,`span`,16),Tk(971,` columns`),_u(972,`br`),Zg()()(),Jc(973,`td`,17)(974,`code`,40),Tk(975,`Array<PoLookupColumn> `),Zg(),Jc(976,`code`,41),Tk(977,` number`),Zg()(),Jc(978,`td`,20)(979,`em`)(980,`strong`),Tk(981,`(opcional)`),Zg()(),Jc(982,`p`),Tk(983,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Jc(984,`code`),Tk(985,`searchService`),Zg(),Tk(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Jc(987,`a`,42)(988,`code`),Tk(989,`PoLookupColumn`),Zg()(),Tk(990,`.`),Zg(),Jc(991,`blockquote`)(992,`p`),Tk(993,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Jc(994,`em`),Tk(995,`label`),Zg(),Tk(996,` e `),Jc(997,`em`),Tk(998,`value`),Zg(),Tk(999,` para valores
de tela e do model respectivamente.`),Zg()(),Jc(1e3,`p`)(1001,`strong`),Tk(1002,`Componentes compatíveis:`),Zg(),Jc(1003,`code`),Tk(1004,`po-radio-group`),Zg(),Tk(1005,`, `),Jc(1006,`code`),Tk(1007,`po-lookup`),Zg(),Tk(1008,`, `),Jc(1009,`code`),Tk(1010,`po-checkbox-group`),Zg(),Tk(1011,`.`),Zg()()(),Jc(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),Tk(1016,` compactLabel`),_u(1017,`br`),Zg()()(),Jc(1018,`td`,17)(1019,`code`,28),Tk(1020,`boolean`),Zg()(),Jc(1021,`td`,20)(1022,`em`)(1023,`strong`),Tk(1024,`(opcional)`),Zg()(),Jc(1025,`p`),Tk(1026,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(1027,`p`),Tk(1028,`Quando habilitado (`),Jc(1029,`code`),Tk(1030,`true`),Zg(),Tk(1031,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(1032,`ul`)(1033,`li`)(1034,`code`),Tk(1035,`po-label`),Zg()(),Jc(1036,`li`)(1037,`code`),Tk(1038,`p-requirement (showRequired)`),Zg()(),Jc(1039,`li`)(1040,`code`),Tk(1041,`po-helper`),Zg()()(),Jc(1042,`p`),Tk(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(1044,`p`),Tk(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(1046,`ul`)(1047,`li`)(1048,`code`),Tk(1049,`--field-container-title-justify`),Zg()(),Jc(1050,`li`)(1051,`code`),Tk(1052,`--field-container-title-flex`),Zg()()(),Jc(1053,`p`),Tk(1054,`Exemplo:`),Zg(),Jc(1055,`pre`)(1056,`code`),Tk(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(1058,`p`),Tk(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(1060,`tr`,13)(1061,`td`,14)(1062,`div`,15)(1063,`span`,16),Tk(1064,` container`),_u(1065,`br`),Zg()()(),Jc(1066,`td`,17)(1067,`code`,18),Tk(1068,`string`),Zg()(),Jc(1069,`td`,20)(1070,`em`)(1071,`strong`),Tk(1072,`(opcional)`),Zg()(),Jc(1073,`p`),Tk(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),Zg(),Jc(1075,`p`),Tk(1076,`Está propriedade é do tipo string, o valor que será titulo do contianer`),Zg()()(),Jc(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),Tk(1081,` customAction`),_u(1082,`br`),Zg()()(),Jc(1083,`td`,17)(1084,`code`,43),Tk(1085,`PoProgressAction`),Zg()(),Jc(1086,`td`,20)(1087,`em`)(1088,`strong`),Tk(1089,`(opcional)`),Zg()(),Jc(1090,`p`),Tk(1091,`Define uma ação personalizada no componente `),Jc(1092,`code`),Tk(1093,`po-upload`),Zg(),Tk(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),Zg(),Jc(1095,`p`)(1096,`strong`),Tk(1097,`Componente compatível`),Zg(),Tk(1098,`: `),Jc(1099,`code`),Tk(1100,`po-upload`),Zg(),Tk(1101,`,`),Zg(),Jc(1102,`p`)(1103,`strong`),Tk(1104,`Exemplo de configuração`),Zg(),Tk(1105,`:`),Zg(),Jc(1106,`pre`)(1107,`code`,44),Tk(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),Zg()()()(),Jc(1109,`tr`,13)(1110,`td`,14)(1111,`div`,15)(1112,`span`,16),Tk(1113,` customActionClick`),_u(1114,`br`),Zg()()(),Jc(1115,`td`,17)(1116,`code`,45),Tk(1117,`(file: PoUploadFile) => void`),Zg()(),Jc(1118,`td`,20)(1119,`em`)(1120,`strong`),Tk(1121,`(opcional)`),Zg()(),Jc(1122,`p`),Tk(1123,`Evento emitido ao clicar na ação personalizada configurada no `),Jc(1124,`code`),Tk(1125,`p-custom-action`),Zg(),Tk(1126,`.`),Zg(),Jc(1127,`p`)(1128,`strong`),Tk(1129,`Componente compatível`),Zg(),Tk(1130,`: `),Jc(1131,`code`),Tk(1132,`po-upload`),Zg(),Tk(1133,`,`),Zg(),Jc(1134,`p`),Tk(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),Zg(),Jc(1136,`p`)(1137,`strong`),Tk(1138,`Parâmetro do evento`),Zg(),Tk(1139,`:`),Zg(),Jc(1140,`ul`)(1141,`li`)(1142,`code`),Tk(1143,`file`),Zg(),Tk(1144,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Jc(1145,`code`),Tk(1146,`PoUploadFile`),Zg(),Tk(1147,` e contém informações sobre o arquivo, como nome, status e progresso.`),Zg()(),Jc(1148,`p`)(1149,`strong`),Tk(1150,`Exemplo de uso`),Zg(),Tk(1151,`:`),Zg(),Jc(1152,`pre`)(1153,`code`,44),Tk(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),Zg()()()(),Jc(1155,`tr`,13)(1156,`td`,14)(1157,`div`,15)(1158,`span`,16),Tk(1159,` debounceTime`),_u(1160,`br`),Zg()()(),Jc(1161,`td`,17)(1162,`code`,41),Tk(1163,`number`),Zg()(),Jc(1164,`td`,20)(1165,`em`)(1166,`strong`),Tk(1167,`(opcional)`),Zg()(),Jc(1168,`p`),Tk(1169,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Jc(1170,`code`),Tk(1171,`p-filter-service`),Zg(),Tk(1172,`).`),Zg(),Jc(1173,`p`)(1174,`strong`),Tk(1175,`Componentes compatíveis:`),Zg(),Jc(1176,`code`),Tk(1177,`po-combo`),Zg(),Tk(1178,`, `),Jc(1179,`code`),Tk(1180,`po-multiselect`),Zg(),Tk(1181,`.`),Zg()()(),Jc(1182,`tr`,13)(1183,`td`,14)(1184,`div`,15)(1185,`span`,16),Tk(1186,` decimalsLength`),_u(1187,`br`),Zg()()(),Jc(1188,`td`,17)(1189,`code`,41),Tk(1190,`number`),Zg()(),Jc(1191,`td`,20)(1192,`em`)(1193,`strong`),Tk(1194,`(opcional)`),Zg()(),Jc(1195,`p`),Tk(1196,`Quantidade máxima de casas decimais.`),Zg(),Jc(1197,`blockquote`)(1198,`p`),Tk(1199,`Esta propriedade só pode ser utilizada quando o `),Jc(1200,`code`),Tk(1201,`type`),Zg(),Tk(1202,` for `),Jc(1203,`em`),Tk(1204,`currency`),Zg(),Tk(1205,` ou `),Jc(1206,`em`),Tk(1207,`decimal`),Zg(),Tk(1208,`.`),Zg()(),Jc(1209,`blockquote`)(1210,`p`),Tk(1211,`Quando utilizado com `),Jc(1212,`code`),Tk(1213,`displayFormat`),Zg(),Tk(1214,`, será respeitado o valor `),Jc(1215,`strong`),Tk(1216,`mais restritivo`),Zg(),Tk(1217,` entre esta propriedade e o número de casas decimais definido no formato.`),Zg()()()(),Jc(1218,`tr`,13)(1219,`td`,14)(1220,`div`,15)(1221,`span`,16),Tk(1222,` directory`),_u(1223,`br`),Zg()()(),Jc(1224,`td`,17)(1225,`code`,28),Tk(1226,`boolean`),Zg()(),Jc(1227,`td`,20)(1228,`em`)(1229,`strong`),Tk(1230,`(opcional)`),Zg()(),Jc(1231,`p`),Tk(1232,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),Zg(),Jc(1233,`blockquote`)(1234,`p`),Tk(1235,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),Zg()(),Jc(1236,`blockquote`)(1237,`p`),Tk(1238,`Definição não suportada pelo browser `),Jc(1239,`strong`),Tk(1240,`Internet Explorer`),Zg(),Tk(1241,`, todavia será possível a seleção de arquivos padrão.`),Zg()(),Jc(1242,`p`)(1243,`strong`),Tk(1244,`Componente compatível`),Zg(),Tk(1245,`: `),Jc(1246,`code`),Tk(1247,`po-upload`),Zg()()()(),Jc(1248,`tr`,13)(1249,`td`,14)(1250,`div`,15)(1251,`span`,16),Tk(1252,` disabled`),_u(1253,`br`),Zg()()(),Jc(1254,`td`,17)(1255,`code`,28),Tk(1256,`boolean`),Zg()(),Jc(1257,`td`,20)(1258,`em`)(1259,`strong`),Tk(1260,`(opcional)`),Zg()(),Jc(1261,`p`),Tk(1262,`Desabilita o campo caso informar o valor `),Jc(1263,`em`),Tk(1264,`true`),Zg(),Tk(1265,`.`),Zg()()(),Jc(1266,`tr`,13)(1267,`td`,14)(1268,`div`,15)(1269,`span`,16),Tk(1270,` disabledInitFilter`),_u(1271,`br`),Zg()()(),Jc(1272,`td`,17)(1273,`code`,28),Tk(1274,`boolean`),Zg()(),Jc(1275,`td`,20)(1276,`em`)(1277,`strong`),Tk(1278,`(opcional)`),Zg()(),Jc(1279,`p`),Tk(1280,`Desabilita o filtro inicial no serviço do `),Jc(1281,`code`),Tk(1282,`po-combo`),Zg(),Tk(1283,`, que é executado no primeiro clique no campo.`),Zg()()(),Jc(1284,`tr`,13)(1285,`td`,14)(1286,`div`,15)(1287,`span`,16),Tk(1288,` disabledTabFilter`),_u(1289,`br`),Zg()()(),Jc(1290,`td`,17)(1291,`code`,28),Tk(1292,`boolean`),Zg()(),Jc(1293,`td`,20)(1294,`em`)(1295,`strong`),Tk(1296,`(opcional)`),Zg()(),Jc(1297,`p`),Tk(1298,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Jc(1299,`code`),Tk(1300,`po-combo`),Zg(),Tk(1301,`.`),Zg()()(),Jc(1302,`tr`,13)(1303,`td`,14)(1304,`div`,15)(1305,`span`,16),Tk(1306,` displayFormat`),_u(1307,`br`),Zg()()(),Jc(1308,`td`,17)(1309,`code`,18),Tk(1310,`string`),Zg()(),Jc(1311,`td`,20)(1312,`em`)(1313,`strong`),Tk(1314,`(opcional)`),Zg()(),Jc(1315,`p`),Tk(1316,`Define uma máscara de formatação numérica avançada para o campo.`),Zg(),Jc(1317,`p`),Tk(1318,`Simbologia suportada:`),Zg(),Jc(1319,`ul`)(1320,`li`)(1321,`code`),Tk(1322,`9`),Zg(),Tk(1323,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),Zg(),Jc(1324,`li`)(1325,`code`),Tk(1326,`>`),Zg(),Tk(1327,`: Supressão de zero à esquerda (dígito não obrigatório);`),Zg(),Jc(1328,`li`)(1329,`code`),Tk(1330,`<`),Zg(),Tk(1331,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),Zg(),Jc(1332,`li`)(1333,`code`),Tk(1334,`.`),Zg(),Tk(1335,`: Separador decimal (convertido conforme locale);`),Zg(),Jc(1336,`li`)(1337,`code`),Tk(1338,`,`),Zg(),Tk(1339,`: Separador de milhar/grupo (convertido conforme locale);`),Zg(),Jc(1340,`li`)(1341,`code`),Tk(1342,`-`),Zg(),Tk(1343,`: Sinal negativo (deve ser o primeiro caractere do formato).`),Zg()(),Jc(1344,`blockquote`)(1345,`p`),Tk(1346,`Quando utilizado com `),Jc(1347,`code`),Tk(1348,`decimalsLength`),Zg(),Tk(1349,` ou `),Jc(1350,`code`),Tk(1351,`thousandMaxlength`),Zg(),Tk(1352,`, será respeitado o valor `),Jc(1353,`strong`),Tk(1354,`mais restritivo`),Zg(),Tk(1355,` entre a propriedade e o formato.`),Zg()(),Jc(1356,`p`),Tk(1357,`Exemplos: `),Jc(1358,`code`),Tk(1359,`'>>>,>>>,>>9.99'`),Zg(),Tk(1360,`, `),Jc(1361,`code`),Tk(1362,`'->>9.99'`),Zg(),Tk(1363,`, `),Jc(1364,`code`),Tk(1365,`'999.9'`),Zg()(),Jc(1366,`blockquote`)(1367,`p`),Tk(1368,`Esta propriedade só pode ser utilizada quando o `),Jc(1369,`code`),Tk(1370,`type`),Zg(),Tk(1371,` for `),Jc(1372,`em`),Tk(1373,`currency`),Zg(),Tk(1374,` ou `),Jc(1375,`em`),Tk(1376,`decimal`),Zg(),Tk(1377,`.`),Zg()(),Jc(1378,`p`)(1379,`strong`),Tk(1380,`Componente compatível:`),Zg(),Jc(1381,`code`),Tk(1382,`po-decimal`),Zg(),Tk(1383,`.`),Zg()()(),Jc(1384,`tr`,13)(1385,`td`,14)(1386,`div`,15)(1387,`span`,16),Tk(1388,` divider`),_u(1389,`br`),Zg()()(),Jc(1390,`td`,17)(1391,`code`,18),Tk(1392,`string`),Zg()(),Jc(1393,`td`,20)(1394,`em`)(1395,`strong`),Tk(1396,`(opcional)`),Zg()(),Jc(1397,`p`),Tk(1398,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),Zg()()(),Jc(1399,`tr`,13)(1400,`td`,14)(1401,`div`,15)(1402,`span`,16),Tk(1403,` dragDrop`),_u(1404,`br`),Zg()()(),Jc(1405,`td`,17)(1406,`code`,28),Tk(1407,`boolean`),Zg()(),Jc(1408,`td`,20)(1409,`em`)(1410,`strong`),Tk(1411,`(opcional)`),Zg()(),Jc(1412,`p`),Tk(1413,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),Zg(),Jc(1414,`blockquote`)(1415,`p`),Tk(1416,`Recomendamos utilizar apenas um `),Jc(1417,`code`),Tk(1418,`po-upload`),Zg(),Tk(1419,` com esta funcionalidade por tela.`),Zg()(),Jc(1420,`p`)(1421,`strong`),Tk(1422,`Componente compatível`),Zg(),Tk(1423,`: `),Jc(1424,`code`),Tk(1425,`po-upload`),Zg()()()(),Jc(1426,`tr`,13)(1427,`td`,14)(1428,`div`,15)(1429,`span`,16),Tk(1430,` dragDropHeight`),_u(1431,`br`),Zg()()(),Jc(1432,`td`,17)(1433,`code`,41),Tk(1434,`number`),Zg()(),Jc(1435,`td`,20)(1436,`em`)(1437,`strong`),Tk(1438,`(opcional)`),Zg()(),Jc(1439,`p`),Tk(1440,`Define em `),Jc(1441,`em`),Tk(1442,`pixels`),Zg(),Tk(1443,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Jc(1444,`code`),Tk(1445,`160px`),Zg(),Tk(1446,`.`),Zg(),Jc(1447,`blockquote`)(1448,`p`),Tk(1449,`Esta propriedade funciona somente se a propriedade `),Jc(1450,`code`),Tk(1451,`p-drag-drop`),Zg(),Tk(1452,` estiver habilitada.`),Zg()(),Jc(1453,`p`)(1454,`strong`),Tk(1455,`Componente compatível`),Zg(),Tk(1456,`: `),Jc(1457,`code`),Tk(1458,`po-upload`),Zg()()()(),Jc(1459,`tr`,13)(1460,`td`,14)(1461,`div`,15)(1462,`span`,16),Tk(1463,` errorAsyncFunction`),_u(1464,`br`),Zg()()(),Jc(1465,`td`,17)(1466,`code`,46),Tk(1467,`(value) => Observable<boolean>`),Zg()(),Jc(1468,`td`,20)(1469,`em`)(1470,`strong`),Tk(1471,`(opcional)`),Zg()(),Jc(1472,`p`),Tk(1473,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(1474,`code`),Tk(1475,`change`),Zg(),Tk(1476,` ou `),Jc(1477,`code`),Tk(1478,`change-model`),Zg(),Tk(1479,`, dependendo do valor da propriedade `),Jc(1480,`code`),Tk(1481,`triggerMode`),Zg(),Tk(1482,`.`),Zg(),Jc(1483,`blockquote`)(1484,`p`),Tk(1485,`Retorna `),Jc(1486,`code`),Tk(1487,`Observable com o valor true`),Zg(),Tk(1488,` para sinalizar o erro `),Jc(1489,`code`),Tk(1490,`false`),Zg(),Tk(1491,` para indicar que não há erro.`),Zg()(),Jc(1492,`p`)(1493,`strong`),Tk(1494,`Componente compatível`),Zg(),Tk(1495,`: `),Jc(1496,`code`),Tk(1497,`po-datepicker`),Zg()()()(),Jc(1498,`tr`,13)(1499,`td`,14)(1500,`div`,15)(1501,`span`,16),Tk(1502,` errorAsyncProperties`),_u(1503,`br`),Zg()()(),Jc(1504,`td`,17)(1505,`code`,47),Tk(1506,`ErrorAsyncProperties`),Zg()(),Jc(1507,`td`,20)(1508,`em`)(1509,`strong`),Tk(1510,`(opcional)`),Zg()(),Jc(1511,`p`),Tk(1512,`Realiza alguma validação customizada assíncrona no componente.`),Zg(),Jc(1513,`p`)(1514,`strong`),Tk(1515,`Componentes compatíveis:`),Zg(),Jc(1516,`code`),Tk(1517,`po-input`),Zg(),Tk(1518,`, `),Jc(1519,`code`),Tk(1520,`po-number`),Zg(),Tk(1521,`, `),Jc(1522,`code`),Tk(1523,`po-decimal`),Zg(),Tk(1524,`, `),Jc(1525,`code`),Tk(1526,`po-password`),Zg(),Tk(1527,`.`),Zg()()(),Jc(1528,`tr`,13)(1529,`td`,14)(1530,`div`,15)(1531,`span`,16),Tk(1532,` errorLimit`),_u(1533,`br`),Zg()()(),Jc(1534,`td`,17)(1535,`code`,28),Tk(1536,`boolean`),Zg()(),Jc(1537,`td`,20)(1538,`em`)(1539,`strong`),Tk(1540,`(opcional)`),Zg()(),Jc(1541,`p`),Tk(1542,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(1543,`blockquote`)(1544,`p`),Tk(1545,`Caso essa propriedade seja definida como `),Jc(1546,`code`),Tk(1547,`true`),Zg(),Tk(1548,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()(),Jc(1549,`p`)(1550,`strong`),Tk(1551,`Componentes compatíveis:`),Zg(),Jc(1552,`code`),Tk(1553,`po-checkbox-group`),Zg(),Tk(1554,`, `),Jc(1555,`code`),Tk(1556,`po-combo`),Zg(),Tk(1557,`, `),Jc(1558,`code`),Tk(1559,`po-datepicker`),Zg(),Tk(1560,`, `),Jc(1561,`code`),Tk(1562,`po-datepicker-range`),Zg(),Tk(1563,`, `),Jc(1564,`code`),Tk(1565,`po-decimal`),Zg(),Tk(1566,`, `),Jc(1567,`code`),Tk(1568,`po-input`),Zg(),Tk(1569,`, `),Jc(1570,`code`),Tk(1571,`po-lookup`),Zg(),Tk(1572,`, `),Jc(1573,`code`),Tk(1574,`po-multiselect`),Zg(),Tk(1575,`, `),Jc(1576,`code`),Tk(1577,`po-number`),Zg(),Tk(1578,`, `),Jc(1579,`code`),Tk(1580,`po-password`),Zg(),Tk(1581,`, `),Jc(1582,`code`),Tk(1583,`po-radio-group`),Zg(),Tk(1584,`, `),Jc(1585,`code`),Tk(1586,`po-select`),Zg(),Tk(1587,`,
`),Jc(1588,`code`),Tk(1589,`po-switch`),Zg(),Tk(1590,`, `),Jc(1591,`code`),Tk(1592,`po-textarea`),Zg(),Tk(1593,`, `),Jc(1594,`code`),Tk(1595,`po-timepicker`),Zg(),Tk(1596,`.`),Zg()()(),Jc(1597,`tr`,13)(1598,`td`,14)(1599,`div`,15)(1600,`span`,16),Tk(1601,` errorMessage`),_u(1602,`br`),Zg()()(),Jc(1603,`td`,17)(1604,`code`,18),Tk(1605,`string`),Zg()(),Jc(1606,`td`,20)(1607,`em`)(1608,`strong`),Tk(1609,`(opcional)`),Zg()(),Jc(1610,`p`),Tk(1611,`Mensagem que será apresentada quando o campo ficar inválido.`),Zg(),Jc(1612,`p`),Tk(1613,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),Zg(),Jc(1614,`ul`)(1615,`li`),Tk(1616,`pattern;`),Zg(),Jc(1617,`li`),Tk(1618,`minValue;`),Zg(),Jc(1619,`li`),Tk(1620,`maxValue;`),Zg(),Jc(1621,`li`),Tk(1622,`required;`),Zg()(),Jc(1623,`blockquote`)(1624,`p`),Tk(1625,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Jc(1626,`code`),Tk(1627,`po-datepicker`),Zg(),Tk(1628,`, `),Jc(1629,`code`),Tk(1630,`po-input`),Zg(),Tk(1631,`, `),Jc(1632,`code`),Tk(1633,`po-number`),Zg(),Tk(1634,`, `),Jc(1635,`code`),Tk(1636,`po-decimal`),Zg(),Tk(1637,`, `),Jc(1638,`code`),Tk(1639,`po-password`),Zg(),Tk(1640,`, `),Jc(1641,`code`),Tk(1642,`po-timepicker`),Zg(),Tk(1643,`, \xE9 necess\xE1rio que a propriedade
`),Jc(1644,`code`),Tk(1645,`requiredFieldErrorMessage`),Zg(),Tk(1646,` esteja como `),Jc(1647,`code`),Tk(1648,`true`),Zg(),Tk(1649,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Jc(1650,`code`),Tk(1651,`po-datepicker-range`),Zg(),Tk(1652,`, `),Jc(1653,`code`),Tk(1654,`po-select`),Zg(),Tk(1655,`, `),Jc(1656,`code`),Tk(1657,`po-checkbox-group`),Zg(),Tk(1658,`, `),Jc(1659,`code`),Tk(1660,`po-radio-group`),Zg(),Tk(1661,`, `),Jc(1662,`code`),Tk(1663,`po-multiselect`),Zg(),Tk(1664,`, `),Jc(1665,`code`),Tk(1666,`po-combo`),Zg(),Tk(1667,`,
`),Jc(1668,`code`),Tk(1669,`po-lookup`),Zg(),Tk(1670,` e `),Jc(1671,`code`),Tk(1672,`po-textarea`),Zg(),Tk(1673,` não é necessário passar a propriedade `),Jc(1674,`code`),Tk(1675,`requiredFieldErrorMessage`),Zg(),Tk(1676,`.`),Zg()(),Jc(1677,`p`)(1678,`strong`),Tk(1679,`Componentes compatíveis:`),Zg(),Jc(1680,`code`),Tk(1681,`po-checkbox-group`),Zg(),Tk(1682,`, `),Jc(1683,`code`),Tk(1684,`po-combo`),Zg(),Tk(1685,`, `),Jc(1686,`code`),Tk(1687,`po-datepicker`),Zg(),Tk(1688,`, `),Jc(1689,`code`),Tk(1690,`po-datepicker-range`),Zg(),Tk(1691,`, `),Jc(1692,`code`),Tk(1693,`po-decimal`),Zg(),Tk(1694,`, `),Jc(1695,`code`),Tk(1696,`po-input`),Zg(),Tk(1697,`, `),Jc(1698,`code`),Tk(1699,`po-lookup`),Zg(),Tk(1700,`, `),Jc(1701,`code`),Tk(1702,`po-multiselect`),Zg(),Tk(1703,`, `),Jc(1704,`code`),Tk(1705,`po-number`),Zg(),Tk(1706,`, `),Jc(1707,`code`),Tk(1708,`po-password`),Zg(),Tk(1709,`, `),Jc(1710,`code`),Tk(1711,`po-radio-group`),Zg(),Tk(1712,`, `),Jc(1713,`code`),Tk(1714,`po-select`),Zg(),Tk(1715,`,
`),Jc(1716,`code`),Tk(1717,`po-switch`),Zg(),Tk(1718,`, `),Jc(1719,`code`),Tk(1720,`po-textarea`),Zg(),Tk(1721,`, `),Jc(1722,`code`),Tk(1723,`po-timepicker`),Zg(),Tk(1724,`.`),Zg()()(),Jc(1725,`tr`,13)(1726,`td`,14)(1727,`div`,15)(1728,`span`,16),Tk(1729,` fieldLabel`),_u(1730,`br`),Zg()()(),Jc(1731,`td`,17)(1732,`code`,18),Tk(1733,`string`),Zg()(),Jc(1734,`td`,20)(1735,`em`)(1736,`strong`),Tk(1737,`(opcional)`),Zg()(),Jc(1738,`p`),Tk(1739,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),Zg(),Jc(1740,`p`),Tk(1741,`O valor padrão é: `),Jc(1742,`code`),Tk(1743,`label`),Zg(),Tk(1744,`.`),Zg(),Jc(1745,`blockquote`)(1746,`p`),Tk(1747,`Esta propriedade pode ser utilizada em conjunto com: `),Jc(1748,`code`),Tk(1749,`options`),Zg(),Tk(1750,`, `),Jc(1751,`code`),Tk(1752,`optionsService`),Zg(),Tk(1753,` e `),Jc(1754,`code`),Tk(1755,`searchService`),Zg(),Tk(1756,`.`),Zg()()()(),Jc(1757,`tr`,13)(1758,`td`,14)(1759,`div`,15)(1760,`span`,16),Tk(1761,` fieldValue`),_u(1762,`br`),Zg()()(),Jc(1763,`td`,17)(1764,`code`,18),Tk(1765,`string`),Zg()(),Jc(1766,`td`,20)(1767,`em`)(1768,`strong`),Tk(1769,`(opcional)`),Zg()(),Jc(1770,`p`),Tk(1771,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),Zg(),Jc(1772,`p`),Tk(1773,`O valor padrão é: `),Jc(1774,`code`),Tk(1775,`value`),Zg(),Tk(1776,`.`),Zg(),Jc(1777,`blockquote`)(1778,`p`),Tk(1779,`Esta propriedade pode ser utilizada em conjunto com: `),Jc(1780,`code`),Tk(1781,`options`),Zg(),Tk(1782,`, `),Jc(1783,`code`),Tk(1784,`optionsService`),Zg(),Tk(1785,` e `),Jc(1786,`code`),Tk(1787,`searchService`),Zg(),Tk(1788,`.`),Zg()()()(),Jc(1789,`tr`,13)(1790,`td`,14)(1791,`div`,15)(1792,`span`,16),Tk(1793,` filterMinlength`),_u(1794,`br`),Zg()()(),Jc(1795,`td`,17)(1796,`code`,41),Tk(1797,`number`),Zg()(),Jc(1798,`td`,20)(1799,`em`)(1800,`strong`),Tk(1801,`(opcional)`),Zg()(),Jc(1802,`p`),Tk(1803,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Jc(1804,`code`),Tk(1805,`po-combo`),Zg(),Tk(1806,`.`),Zg()()(),Jc(1807,`tr`,13)(1808,`td`,14)(1809,`div`,15)(1810,`span`,16),Tk(1811,` filterMode`),_u(1812,`br`),Zg()()(),Jc(1813,`td`,17)(1814,`code`,48),Tk(1815,`PoMultiselectFilterMode`),Zg()(),Jc(1816,`td`,20)(1817,`em`)(1818,`strong`),Tk(1819,`(opcional)`),Zg()(),Jc(1820,`p`),Tk(1821,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Jc(1822,`code`),Tk(1823,`startsWith`),Zg(),Tk(1824,`, `),Jc(1825,`code`),Tk(1826,`contains`),Zg(),Tk(1827,` ou `),Jc(1828,`code`),Tk(1829,`endsWith`),Zg(),Tk(1830,`.`),Zg(),Jc(1831,`blockquote`)(1832,`p`),Tk(1833,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),Zg()(),Jc(1834,`p`)(1835,`strong`),Tk(1836,`Componente compatível:`),Zg(),Jc(1837,`code`),Tk(1838,`po-multiselect`),Zg(),Tk(1839,`.`),Zg()()(),Jc(1840,`tr`,13)(1841,`td`,14)(1842,`div`,15)(1843,`span`,16),Tk(1844,` forceBooleanComponentType`),_u(1845,`br`),Zg()()(),Jc(1846,`td`,17)(1847,`code`,49),Tk(1848,`ForceBooleanComponentEnum`),Zg()(),Jc(1849,`td`,20)(1850,`em`)(1851,`strong`),Tk(1852,`(opcional)`),Zg()(),Jc(1853,`p`),Tk(1854,`Valores aceitos:`),Zg(),Jc(1855,`ul`)(1856,`li`),Tk(1857,`ForceBooleanComponentEnum.switch`),Zg(),Jc(1858,`li`),Tk(1859,`ForceBooleanComponentEnum.checkbox`),Zg()()()(),Jc(1860,`tr`,13)(1861,`td`,14)(1862,`div`,15)(1863,`span`,16),Tk(1864,` forceOptionsComponentType`),_u(1865,`br`),Zg()()(),Jc(1866,`td`,17)(1867,`code`,50),Tk(1868,`ForceOptionComponentEnum`),Zg()(),Jc(1869,`td`,20)(1870,`em`)(1871,`strong`),Tk(1872,`(opcional)`),Zg()(),Jc(1873,`p`),Tk(1874,`pode ser utilizada em conjunto com a propriedade `),Jc(1875,`code`),Tk(1876,`options`),Zg(),Tk(1877,` forçando o componente a renderizar um `),Jc(1878,`code`),Tk(1879,`po-select`),Zg(),Tk(1880,` ou `),Jc(1881,`code`),Tk(1882,`po-radio-group`),Zg(),Tk(1883,`.`),Zg(),Jc(1884,`p`),Tk(1885,`Valores aceitos:`),Zg(),Jc(1886,`ul`)(1887,`li`),Tk(1888,`ForceOptionComponentEnum.radioGroup`),Zg(),Jc(1889,`li`),Tk(1890,`ForceOptionComponentEnum.select`),Zg()(),Jc(1891,`blockquote`)(1892,`p`),Tk(1893,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Jc(1894,`code`),Tk(1895,`optionsMulti`),Zg(),Tk(1896,` e `),Jc(1897,`code`),Tk(1898,`optionsService`),Zg(),Tk(1899,`.`),Zg()()()(),Jc(1900,`tr`,13)(1901,`td`,14)(1902,`div`,15)(1903,`span`,16),Tk(1904,` formField`),_u(1905,`br`),Zg()()(),Jc(1906,`td`,17)(1907,`code`,18),Tk(1908,`string`),Zg()(),Jc(1909,`td`,20)(1910,`em`)(1911,`strong`),Tk(1912,`(opcional)`),Zg()(),Jc(1913,`p`),Tk(1914,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Jc(1915,`code`),Tk(1916,`url`),Zg(),Tk(1917,`.`),Zg(),Jc(1918,`blockquote`)(1919,`p`),Tk(1920,`O valor default é `),Jc(1921,`code`),Tk(1922,`files`),Zg()()(),Jc(1923,`p`)(1924,`strong`),Tk(1925,`Componente compatível`),Zg(),Tk(1926,`: `),Jc(1927,`code`),Tk(1928,`po-upload`),Zg()()()(),Jc(1929,`tr`,13)(1930,`td`,14)(1931,`div`,15)(1932,`span`,16),Tk(1933,` format`),_u(1934,`br`),Zg()()(),Jc(1935,`td`,17)(1936,`code`,18),Tk(1937,`string `),Zg(),Jc(1938,`code`,32),Tk(1939,` Array<string>`),Zg()(),Jc(1940,`td`,20)(1941,`em`)(1942,`strong`),Tk(1943,`(opcional)`),Zg()(),Jc(1944,`p`),Tk(1945,`Formato de exibição no campo.`),Zg(),Jc(1946,`p`),Tk(1947,`Ao utilizar esta propriedade com o `),Jc(1948,`code`),Tk(1949,`type`),Zg(),Jc(1950,`em`),Tk(1951,`PoDynamicFieldType.Date`),Zg(),Tk(1952,` ou `),Jc(1953,`em`),Tk(1954,`PoDynamicFieldType.DateTime`),Zg(),Tk(1955,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),Zg(),Jc(1956,`p`),Tk(1957,`Valores válidos:`),Zg(),Jc(1958,`ul`)(1959,`li`),Tk(1960,`dd/mm/yyyy`),Zg(),Jc(1961,`li`),Tk(1962,`mm/dd/yyyy`),Zg(),Jc(1963,`li`),Tk(1964,`yyyy/mm/dd`),Zg()(),Jc(1965,`p`),Tk(1966,`Ao utilizar com o `),Jc(1967,`code`),Tk(1968,`type`),Zg(),Jc(1969,`em`),Tk(1970,`PoDynamicFieldType.Time`),Zg(),Tk(1971,`, define o formato de exibição do horário:`),Zg(),Jc(1972,`p`),Tk(1973,`Valores válidos:`),Zg(),Jc(1974,`ul`)(1975,`li`)(1976,`code`),Tk(1977,`24`),Zg(),Tk(1978,`: formato de 24 horas (padrão)`),Zg(),Jc(1979,`li`)(1980,`code`),Tk(1981,`12`),Zg(),Tk(1982,`: formato de 12 horas com indicador AM/PM`),Zg()(),Jc(1983,`p`),Tk(1984,`Também pode-se utilizar em conjunto com `),Jc(1985,`code`),Tk(1986,`searchService`),Zg(),Tk(1987,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),Zg(),Jc(1988,`p`)(1989,`strong`),Tk(1990,`Componentes compatíveis:`),Zg(),Jc(1991,`code`),Tk(1992,`po-datepicker`),Zg(),Tk(1993,`, `),Jc(1994,`code`),Tk(1995,`po-datetimepicker`),Zg(),Tk(1996,`, `),Jc(1997,`code`),Tk(1998,`po-timepicker`),Zg(),Tk(1999,`, `),Jc(2e3,`code`),Tk(2001,`po-lookup`),Zg(),Tk(2002,`.`),Zg()()(),Jc(2003,`tr`,13)(2004,`td`,14)(2005,`div`,15)(2006,`span`,16),Tk(2007,` formatModel`),_u(2008,`br`),Zg()()(),Jc(2009,`td`,17)(2010,`code`,28),Tk(2011,`boolean`),Zg()(),Jc(2012,`td`,20)(2013,`em`)(2014,`strong`),Tk(2015,`(opcional)`),Zg()(),Jc(2016,`p`),Tk(2017,`Indica se o `),Jc(2018,`code`),Tk(2019,`model`),Zg(),Tk(2020,` receberá o valor formatado pelas propriedades `),Jc(2021,`code`),Tk(2022,`p-label-on`),Zg(),Tk(2023,` e `),Jc(2024,`code`),Tk(2025,`p-label-off`),Zg(),Tk(2026,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),Zg(),Jc(2027,`p`),Tk(2028,`O valor padrão é: `),Jc(2029,`code`),Tk(2030,`false`),Zg(),Tk(2031,`.`),Zg(),Jc(2032,`blockquote`)(2033,`p`),Tk(2034,`Esta propriedade está disponivel apenas para o `),Jc(2035,`code`),Tk(2036,`swicth`),Zg(),Tk(2037,`.`),Zg()()()(),Jc(2038,`tr`,13)(2039,`td`,14)(2040,`div`,15)(2041,`span`,16),Tk(2042,` formatTime`),_u(2043,`br`),Zg()()(),Jc(2044,`td`,17)(2045,`code`,18),Tk(2046,`string`),Zg()(),Jc(2047,`td`,20)(2048,`em`)(2049,`strong`),Tk(2050,`(opcional)`),Zg()(),Jc(2051,`p`),Tk(2052,`Define o formato de exibição do timer (`),Jc(2053,`code`),Tk(2054,`'12'`),Zg(),Tk(2055,` ou `),Jc(2056,`code`),Tk(2057,`'24'`),Zg(),Tk(2058,`).`),Zg(),Jc(2059,`p`)(2060,`strong`),Tk(2061,`Componente compatível:`),Zg(),Jc(2062,`code`),Tk(2063,`po-datetimepicker`),Zg()()()(),Jc(2064,`tr`,13)(2065,`td`,14)(2066,`div`,15)(2067,`span`,16),Tk(2068,` gridColumns`),_u(2069,`br`),Zg()()(),Jc(2070,`td`,17)(2071,`code`,41),Tk(2072,`number`),Zg()(),Jc(2073,`td`,20)(2074,`em`)(2075,`strong`),Tk(2076,`(opcional)`),Zg()(),Jc(2077,`p`),Tk(2078,`Tamanho de exibição do campo em telas.`),Zg(),Jc(2079,`p`),Tk(2080,`Deve ser usado o sistema de `),Jc(2081,`strong`),Tk(2082,`grid`),Zg(),Tk(2083,` do PO (1 ... 12 colunas).`),Zg(),Jc(2084,`blockquote`)(2085,`p`),Tk(2086,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),Zg()()()(),Jc(2087,`tr`,13)(2088,`td`,14)(2089,`div`,15)(2090,`span`,16),Tk(2091,` gridLgColumns`),_u(2092,`br`),Zg()()(),Jc(2093,`td`,17)(2094,`code`,41),Tk(2095,`number`),Zg()(),Jc(2096,`td`,20)(2097,`em`)(2098,`strong`),Tk(2099,`(opcional)`),Zg()(),Jc(2100,`p`),Tk(2101,`Tamanho de exibição do campo em telas grandes (lg).`),Zg(),Jc(2102,`p`),Tk(2103,`Deve ser usado o sistema de `),Jc(2104,`strong`),Tk(2105,`grid`),Zg(),Tk(2106,` do PO (1 ... 12 colunas).`),Zg(),Jc(2107,`blockquote`)(2108,`p`),Tk(2109,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(2110,`code`),Tk(2111,`gridColumns`),Zg(),Tk(2112,`.`),Zg()()()(),Jc(2113,`tr`,13)(2114,`td`,14)(2115,`div`,15)(2116,`span`,16),Tk(2117,` gridLgPull`),_u(2118,`br`),Zg()()(),Jc(2119,`td`,17)(2120,`code`,41),Tk(2121,`number`),Zg()(),Jc(2122,`td`,20)(2123,`em`)(2124,`strong`),Tk(2125,`(opcional)`),Zg()(),Jc(2126,`p`),Tk(2127,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),Zg(),Jc(2128,`p`),Tk(2129,`Deve ser usado o sistema de `),Jc(2130,`strong`),Tk(2131,`grid`),Zg(),Tk(2132,` do PO (1 ... 11 colunas).`),Zg(),Jc(2133,`blockquote`)(2134,`p`),Tk(2135,`Esta propriedade não funciona com a propriedade `),Jc(2136,`code`),Tk(2137,`gridColumns`),Zg(),Tk(2138,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(2139,`tr`,13)(2140,`td`,14)(2141,`div`,15)(2142,`span`,16),Tk(2143,` gridMdColumns`),_u(2144,`br`),Zg()()(),Jc(2145,`td`,17)(2146,`code`,41),Tk(2147,`number`),Zg()(),Jc(2148,`td`,20)(2149,`em`)(2150,`strong`),Tk(2151,`(opcional)`),Zg()(),Jc(2152,`p`),Tk(2153,`Tamanho de exibição do campo em telas médias (md).`),Zg(),Jc(2154,`p`),Tk(2155,`Deve ser usado o sistema de `),Jc(2156,`strong`),Tk(2157,`grid`),Zg(),Tk(2158,` do PO (1 ... 12 colunas).`),Zg(),Jc(2159,`blockquote`)(2160,`p`),Tk(2161,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(2162,`code`),Tk(2163,`gridColumns`),Zg(),Tk(2164,`.`),Zg()()()(),Jc(2165,`tr`,13)(2166,`td`,14)(2167,`div`,15)(2168,`span`,16),Tk(2169,` gridMdPull`),_u(2170,`br`),Zg()()(),Jc(2171,`td`,17)(2172,`code`,41),Tk(2173,`number`),Zg()(),Jc(2174,`td`,20)(2175,`em`)(2176,`strong`),Tk(2177,`(opcional)`),Zg()(),Jc(2178,`p`),Tk(2179,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),Zg(),Jc(2180,`p`),Tk(2181,`Deve ser usado o sistema de `),Jc(2182,`strong`),Tk(2183,`grid`),Zg(),Tk(2184,` do PO (1 ... 11 colunas).`),Zg(),Jc(2185,`blockquote`)(2186,`p`),Tk(2187,`Esta propriedade não funciona com a propriedade `),Jc(2188,`code`),Tk(2189,`gridColumns`),Zg(),Tk(2190,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(2191,`tr`,13)(2192,`td`,14)(2193,`div`,15)(2194,`span`,16),Tk(2195,` gridSmColumns`),_u(2196,`br`),Zg()()(),Jc(2197,`td`,17)(2198,`code`,41),Tk(2199,`number`),Zg()(),Jc(2200,`td`,20)(2201,`em`)(2202,`strong`),Tk(2203,`(opcional)`),Zg()(),Jc(2204,`p`),Tk(2205,`Tamanho de exibição do campo em telas menores (sm).`),Zg(),Jc(2206,`p`),Tk(2207,`Deve ser usado o sistema de `),Jc(2208,`strong`),Tk(2209,`grid`),Zg(),Tk(2210,` do PO (1 ... 12 colunas).`),Zg(),Jc(2211,`blockquote`)(2212,`p`),Tk(2213,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(2214,`code`),Tk(2215,`gridColumns`),Zg(),Tk(2216,`.`),Zg()()()(),Jc(2217,`tr`,13)(2218,`td`,14)(2219,`div`,15)(2220,`span`,16),Tk(2221,` gridSmPull`),_u(2222,`br`),Zg()()(),Jc(2223,`td`,17)(2224,`code`,41),Tk(2225,`number`),Zg()(),Jc(2226,`td`,20)(2227,`em`)(2228,`strong`),Tk(2229,`(opcional)`),Zg()(),Jc(2230,`p`),Tk(2231,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),Zg(),Jc(2232,`p`),Tk(2233,`Deve ser usado o sistema de `),Jc(2234,`strong`),Tk(2235,`grid`),Zg(),Tk(2236,` do PO (1 ... 11 colunas).`),Zg(),Jc(2237,`blockquote`)(2238,`p`),Tk(2239,`Esta propriedade não funciona com a propriedade `),Jc(2240,`code`),Tk(2241,`gridColumns`),Zg(),Tk(2242,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(2243,`tr`,13)(2244,`td`,14)(2245,`div`,15)(2246,`span`,16),Tk(2247,` gridXlColumns`),_u(2248,`br`),Zg()()(),Jc(2249,`td`,17)(2250,`code`,41),Tk(2251,`number`),Zg()(),Jc(2252,`td`,20)(2253,`em`)(2254,`strong`),Tk(2255,`(opcional)`),Zg()(),Jc(2256,`p`),Tk(2257,`Tamanho de exibição do campo em telas extra grandes (xl).`),Zg(),Jc(2258,`p`),Tk(2259,`Deve ser usado o sistema de `),Jc(2260,`strong`),Tk(2261,`grid`),Zg(),Tk(2262,` do PO (1 ... 12 colunas).`),Zg(),Jc(2263,`blockquote`)(2264,`p`),Tk(2265,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(2266,`code`),Tk(2267,`gridColumns`),Zg(),Tk(2268,`.`),Zg()()()(),Jc(2269,`tr`,13)(2270,`td`,14)(2271,`div`,15)(2272,`span`,16),Tk(2273,` gridXlPull`),_u(2274,`br`),Zg()()(),Jc(2275,`td`,17)(2276,`code`,41),Tk(2277,`number`),Zg()(),Jc(2278,`td`,20)(2279,`em`)(2280,`strong`),Tk(2281,`(opcional)`),Zg()(),Jc(2282,`p`),Tk(2283,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),Zg(),Jc(2284,`p`),Tk(2285,`Deve ser usado o sistema de `),Jc(2286,`strong`),Tk(2287,`grid`),Zg(),Tk(2288,` do PO (1 ... 11 colunas).`),Zg(),Jc(2289,`blockquote`)(2290,`p`),Tk(2291,`Esta propriedade não funciona com a propriedade `),Jc(2292,`code`),Tk(2293,`gridColumns`),Zg(),Tk(2294,`. Deve-se especificar o tamanho da tela.`),Zg()()()(),Jc(2295,`tr`,13)(2296,`td`,14)(2297,`div`,15)(2298,`span`,16),Tk(2299,` headers`),_u(2300,`br`),Zg()()(),Jc(2301,`td`,17)(2302,`code`,51),Tk(2303,`{ [name: string]: string `),Zg(),Jc(2304,`code`,52),Tk(2305,` Array<string>;
}`),Zg()(),Jc(2306,`td`,20)(2307,`em`)(2308,`strong`),Tk(2309,`(opcional)`),Zg()(),Jc(2310,`p`),Tk(2311,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),Zg(),Jc(2312,`p`)(2313,`strong`),Tk(2314,`Componente compatível`),Zg(),Tk(2315,`: `),Jc(2316,`code`),Tk(2317,`po-upload`),Zg()()()(),Jc(2318,`tr`,13)(2319,`td`,14)(2320,`div`,15)(2321,`span`,16),Tk(2322,` help`),_u(2323,`br`),Zg()()(),Jc(2324,`td`,17)(2325,`code`,18),Tk(2326,`string`),Zg()(),Jc(2327,`td`,20)(2328,`em`)(2329,`strong`),Tk(2330,`(opcional)`),Zg()(),Jc(2331,`p`),Tk(2332,`Texto de ajuda.`),Zg()()(),Jc(2333,`tr`,13)(2334,`td`,14)(2335,`div`,15)(2336,`span`,16),Tk(2337,` helper`),_u(2338,`br`),Zg()()(),Jc(2339,`td`,17)(2340,`code`,18),Tk(2341,`string `),Zg(),Jc(2342,`code`,53),Tk(2343,` PoHelperOptions`),Zg()(),Jc(2344,`td`,20)(2345,`em`)(2346,`strong`),Tk(2347,`(opcional)`),Zg()(),Jc(2348,`p`),Tk(2349,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),Zg()()(),Jc(2350,`tr`,13)(2351,`td`,14)(2352,`div`,15)(2353,`span`,16),Tk(2354,` hideLabelStatus`),_u(2355,`br`),Zg()()(),Jc(2356,`td`,17)(2357,`code`,28),Tk(2358,`boolean`),Zg()(),Jc(2359,`td`,20)(2360,`em`)(2361,`strong`),Tk(2362,`(opcional)`),Zg()(),Jc(2363,`p`),Tk(2364,`Indica se o status do `),Jc(2365,`code`),Tk(2366,`model`),Zg(),Tk(2367,` será escondido visualmente ao lado do switch`),Zg()()(),Jc(2368,`tr`,13)(2369,`td`,14)(2370,`div`,15)(2371,`span`,16),Tk(2372,` hidePasswordPeek`),_u(2373,`br`),Zg()()(),Jc(2374,`td`,17)(2375,`code`,28),Tk(2376,`boolean`),Zg()(),Jc(2377,`td`,20)(2378,`em`)(2379,`strong`),Tk(2380,`(opcional)`),Zg()(),Jc(2381,`p`),Tk(2382,`Permite esconder a função de espiar a senha digitada no `),Jc(2383,`code`),Tk(2384,`po-password`),Zg(),Tk(2385,`.`),Zg()()(),Jc(2386,`tr`,13)(2387,`td`,14)(2388,`div`,15)(2389,`span`,16),Tk(2390,` hideRestrictionsInfo`),_u(2391,`br`),Zg()()(),Jc(2392,`td`,17)(2393,`code`,28),Tk(2394,`boolean`),Zg()(),Jc(2395,`td`,20)(2396,`em`)(2397,`strong`),Tk(2398,`(opcional)`),Zg()(),Jc(2399,`p`),Tk(2400,`Oculta visualmente as informações de restrições para o upload.`),Zg(),Jc(2401,`p`)(2402,`strong`),Tk(2403,`Componente compatível`),Zg(),Tk(2404,`: `),Jc(2405,`code`),Tk(2406,`po-upload`),Zg()()()(),Jc(2407,`tr`,13)(2408,`td`,14)(2409,`div`,15)(2410,`span`,16),Tk(2411,` hideSearch`),_u(2412,`br`),Zg()()(),Jc(2413,`td`,17)(2414,`code`,28),Tk(2415,`boolean`),Zg()(),Jc(2416,`td`,20)(2417,`em`)(2418,`strong`),Tk(2419,`(opcional)`),Zg()(),Jc(2420,`p`),Tk(2421,`Esconde o campo de pesquisa existente dentro do dropdown do `),Jc(2422,`code`),Tk(2423,`po-multiselect`),Zg(),Tk(2424,`.`),Zg()()(),Jc(2425,`tr`,13)(2426,`td`,14)(2427,`div`,15)(2428,`span`,16),Tk(2429,` hideSelectAll`),_u(2430,`br`),Zg()()(),Jc(2431,`td`,17)(2432,`code`,28),Tk(2433,`boolean`),Zg()(),Jc(2434,`td`,20)(2435,`em`)(2436,`strong`),Tk(2437,`(opcional)`),Zg()(),Jc(2438,`p`),Tk(2439,`Indica se o campo "Selecionar todos" do `),Jc(2440,`code`),Tk(2441,`po-multiselect`),Zg(),Tk(2442,` será escondido.`),Zg()()(),Jc(2443,`tr`,13)(2444,`td`,14)(2445,`div`,15)(2446,`span`,16),Tk(2447,` hideSelectButton`),_u(2448,`br`),Zg()()(),Jc(2449,`td`,17)(2450,`code`,28),Tk(2451,`boolean`),Zg()(),Jc(2452,`td`,20)(2453,`em`)(2454,`strong`),Tk(2455,`(opcional)`),Zg()(),Jc(2456,`p`),Tk(2457,`Omite o botão de seleção de arquivos.`),Zg(),Jc(2458,`blockquote`)(2459,`p`),Tk(2460,`Caso o valor definido seja `),Jc(2461,`code`),Tk(2462,`true`),Zg(),Tk(2463,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(2464,`code`),Tk(2465,`selectFiles()`),Zg(),Tk(2466,` para seleção de arquivos.`),Zg()(),Jc(2467,`p`)(2468,`strong`),Tk(2469,`Componente compatível`),Zg(),Tk(2470,`: `),Jc(2471,`code`),Tk(2472,`po-upload`),Zg()()()(),Jc(2473,`tr`,13)(2474,`td`,14)(2475,`div`,15)(2476,`span`,16),Tk(2477,` hideSendButton`),_u(2478,`br`),Zg()()(),Jc(2479,`td`,17)(2480,`code`,28),Tk(2481,`boolean`),Zg()(),Jc(2482,`td`,20)(2483,`em`)(2484,`strong`),Tk(2485,`(opcional)`),Zg()(),Jc(2486,`p`),Tk(2487,`Omite o botão de envio de arquivos.`),Zg(),Jc(2488,`blockquote`)(2489,`p`),Tk(2490,`Caso o valor definido seja `),Jc(2491,`code`),Tk(2492,`true`),Zg(),Tk(2493,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(2494,`code`),Tk(2495,`sendFiles()`),Zg(),Tk(2496,` para envio do(s) arquivo(s) selecionado(s).`),Zg()(),Jc(2497,`p`)(2498,`strong`),Tk(2499,`Componente compatível`),Zg(),Tk(2500,`: `),Jc(2501,`code`),Tk(2502,`po-upload`),Zg()()()(),Jc(2503,`tr`,13)(2504,`td`,14)(2505,`div`,15)(2506,`span`,16),Tk(2507,` icon`),_u(2508,`br`),Zg()()(),Jc(2509,`td`,17)(2510,`code`,18),Tk(2511,`string `),Zg(),Jc(2512,`code`,54),Tk(2513,` TemplateRef<void>`),Zg()(),Jc(2514,`td`,20)(2515,`em`)(2516,`strong`),Tk(2517,`(opcional)`),Zg()(),Jc(2518,`p`),Tk(2519,`Define o ícone que será exibido no início do campo.`),Zg(),Jc(2520,`blockquote`)(2521,`p`),Tk(2522,`Esta propriedade só pode ser utilizado nos campos:`),Zg()(),Jc(2523,`ul`)(2524,`li`),Tk(2525,`Input;`),Zg(),Jc(2526,`li`),Tk(2527,`Number;`),Zg(),Jc(2528,`li`),Tk(2529,`Decimal;`),Zg(),Jc(2530,`li`),Tk(2531,`Combo;`),Zg(),Jc(2532,`li`),Tk(2533,`Password;`),Zg()(),Jc(2534,`blockquote`)(2535,`p`),Tk(2536,`Veja a disponibilidade de ícones em `),Jc(2537,`a`,55),Tk(2538,`biblioteca de ícones`),Zg(),Tk(2539,`.`),Zg()()()(),Jc(2540,`tr`,13)(2541,`td`,14)(2542,`div`,15)(2543,`span`,16),Tk(2544,` infiniteScroll`),_u(2545,`br`),Zg()()(),Jc(2546,`td`,17)(2547,`code`,28),Tk(2548,`boolean`),Zg()(),Jc(2549,`td`,20)(2550,`em`)(2551,`strong`),Tk(2552,`(opcional)`),Zg()(),Jc(2553,`p`),Tk(2554,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),Zg(),Jc(2555,`p`)(2556,`strong`),Tk(2557,`Componentes compatíveis:`),Zg(),Jc(2558,`code`),Tk(2559,`po-combo`),Zg(),Tk(2560,`, `),Jc(2561,`code`),Tk(2562,`po-lookup`),Zg(),Tk(2563,`.`),Zg()()(),Jc(2564,`tr`,13)(2565,`td`,14)(2566,`div`,15)(2567,`span`,16),Tk(2568,` infiniteScrollDistance`),_u(2569,`br`),Zg()()(),Jc(2570,`td`,17)(2571,`code`,41),Tk(2572,`number`),Zg()(),Jc(2573,`td`,20)(2574,`em`)(2575,`strong`),Tk(2576,`(opcional)`),Zg()(),Jc(2577,`p`),Tk(2578,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Jc(2579,`strong`),Tk(2580,`Exemplos`),Zg(),Jc(2581,`code`),Tk(2582,`{ infiniteScrollDistance: 80 }`),Zg(),Tk(2583,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),Zg(),Jc(2584,`p`)(2585,`strong`),Tk(2586,`Componente compatível:`),Zg(),Jc(2587,`code`),Tk(2588,`po-combo`),Zg(),Tk(2589,`.`),Zg()()(),Jc(2590,`tr`,13)(2591,`td`,14)(2592,`div`,15)(2593,`span`,16),Tk(2594,` invalidValue`),_u(2595,`br`),Zg()()(),Jc(2596,`td`,17)(2597,`code`,28),Tk(2598,`boolean`),Zg()(),Jc(2599,`td`,20)(2600,`em`)(2601,`strong`),Tk(2602,`(opcional)`),Zg()(),Jc(2603,`p`),Tk(2604,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Jc(2605,`code`),Tk(2606,`p-field-error-message`),Zg(),Tk(2607,`.`),Zg(),Jc(2608,`blockquote`)(2609,`p`),Tk(2610,`Caso essa propriedade seja definida como `),Jc(2611,`code`),Tk(2612,`true`),Zg(),Tk(2613,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),Zg()(),Jc(2614,`p`)(2615,`strong`),Tk(2616,`Componente compatível`),Zg(),Tk(2617,`: `),Jc(2618,`code`),Tk(2619,`po-switch`),Zg()()()(),Jc(2620,`tr`,13)(2621,`td`,14)(2622,`div`,15)(2623,`span`,16),Tk(2624,` isoFormat`),_u(2625,`br`),Zg()()(),Jc(2626,`td`,17)(2627,`code`,56),Tk(2628,`PoDatepickerIsoFormat`),Zg()(),Jc(2629,`td`,20)(2630,`em`)(2631,`strong`),Tk(2632,`(opcional)`),Zg()(),Jc(2633,`p`),Tk(2634,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),Zg(),Jc(2635,`blockquote`)(2636,`p`),Tk(2637,`Veja os valores válidos no `),Jc(2638,`code`),Tk(2639,`PoDatepickerIsoFormat`),Zg(),Tk(2640,`.`),Zg()(),Jc(2641,`p`)(2642,`strong`),Tk(2643,`Componente compatível:`),Zg(),Jc(2644,`code`),Tk(2645,`po-datepicker`),Zg()()()(),Jc(2646,`tr`,13)(2647,`td`,14)(2648,`div`,15)(2649,`span`,16),Tk(2650,` key`),_u(2651,`br`),Zg()()(),Jc(2652,`td`,17)(2653,`code`,28),Tk(2654,`boolean`),Zg()(),Jc(2655,`td`,20)(2656,`em`)(2657,`strong`),Tk(2658,`(opcional)`),Zg()(),Jc(2659,`p`),Tk(2660,`Identificador`),Zg()()(),Jc(2661,`tr`,13)(2662,`td`,14)(2663,`div`,15)(2664,`span`,16),Tk(2665,` keydown`),_u(2666,`br`),Zg()()(),Jc(2667,`td`,17)(2668,`code`,29),Tk(2669,`Function`),Zg()(),Jc(2670,`td`,20)(2671,`em`)(2672,`strong`),Tk(2673,`(opcional)`),Zg()(),Jc(2674,`p`),Tk(2675,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(2676,`code`),Tk(2677,`KeyboardEvent`),Zg(),Tk(2678,` com informações sobre a tecla.`),Zg()()(),Jc(2679,`tr`,13)(2680,`td`,14)(2681,`div`,15)(2682,`span`,16),Tk(2683,` label`),_u(2684,`br`),Zg()()(),Jc(2685,`td`,17)(2686,`code`,18),Tk(2687,`string`),Zg()(),Jc(2688,`td`,20)(2689,`em`)(2690,`strong`),Tk(2691,`(opcional)`),Zg()(),Jc(2692,`p`),Tk(2693,`Rótulo do campo exibido.`),Zg(),Jc(2694,`p`),Tk(2695,`Caso não seja informado, será utilizado como `),Jc(2696,`code`),Tk(2697,`label`),Zg(),Tk(2698,` o valor da propriedade `),Jc(2699,`code`),Tk(2700,`property`),Zg(),Tk(2701,` com a primeira letra em maiúsculo.`),Zg()()(),Jc(2702,`tr`,13)(2703,`td`,14)(2704,`div`,15)(2705,`span`,16),Tk(2706,` labelPosition`),_u(2707,`br`),Zg()()(),Jc(2708,`td`,17)(2709,`code`,57),Tk(2710,`PoSwitchLabelPosition`),Zg()(),Jc(2711,`td`,20)(2712,`em`)(2713,`strong`),Tk(2714,`(opcional)`),Zg()(),Jc(2715,`p`),Tk(2716,`Posição de exibição do rótulo do PoSwitch.`),Zg(),Jc(2717,`blockquote`)(2718,`p`),Tk(2719,`Por padrão exibe à direita.`),Zg()()()(),Jc(2720,`tr`,13)(2721,`td`,14)(2722,`div`,15)(2723,`span`,16),Tk(2724,` listboxControlPosition`),_u(2725,`br`),Zg()()(),Jc(2726,`td`,17)(2727,`code`,58),Tk(2728,`'top' `),Zg(),Jc(2729,`code`,59),Tk(2730,` 'bottom'`),Zg()(),Jc(2731,`td`,20)(2732,`em`)(2733,`strong`),Tk(2734,`(opcional)`),Zg()(),Jc(2735,`p`),Tk(2736,`Define a direção preferida para exibição do `),Jc(2737,`code`),Tk(2738,`listbox`),Zg(),Tk(2739,` em relação ao campo (`),Jc(2740,`code`),Tk(2741,`top`),Zg(),Tk(2742,` ou `),Jc(2743,`code`),Tk(2744,`bottom`),Zg(),Tk(2745,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),Zg(),Jc(2746,`p`)(2747,`strong`),Tk(2748,`Componentes compatíveis:`),Zg(),Jc(2749,`code`),Tk(2750,`po-multiselect`),Zg(),Tk(2751,`, `),Jc(2752,`code`),Tk(2753,`po-combo`),Zg(),Tk(2754,`.`),Zg()()(),Jc(2755,`tr`,13)(2756,`td`,14)(2757,`div`,15)(2758,`span`,16),Tk(2759,` literals`),_u(2760,`br`),Zg()()(),Jc(2761,`td`,17)(2762,`code`,60),Tk(2763,`PoLookupLiterals `),Zg(),Jc(2764,`code`,61),Tk(2765,` PoMultiselectLiterals `),Zg(),Jc(2766,`code`,62),Tk(2767,` PoComboLiterals `),Zg(),Jc(2768,`code`,63),Tk(2769,` PoDatepickerRangeLiterals `),Zg(),Jc(2770,`code`,64),Tk(2771,` PoUploadLiterals`),Zg()(),Jc(2772,`td`,20)(2773,`em`)(2774,`strong`),Tk(2775,`(opcional)`),Zg()(),Jc(2776,`p`),Tk(2777,`Objeto com as literais usadas para os seguintes componentes: `),Jc(2778,`code`),Tk(2779,`po-lookup`),Zg(),Tk(2780,`, `),Jc(2781,`code`),Tk(2782,`po-multiselect`),Zg(),Tk(2783,`, `),Jc(2784,`code`),Tk(2785,`po-combo`),Zg(),Tk(2786,` e `),Jc(2787,`code`),Tk(2788,`po-datepicker-range`),Zg(),Tk(2789,`.`),Zg(),Jc(2790,`blockquote`)(2791,`p`),Tk(2792,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),Zg()(),Jc(2793,`p`)(2794,`strong`),Tk(2795,`Componentes compatíveis:`),Zg(),Jc(2796,`code`),Tk(2797,`po-lookup`),Zg(),Tk(2798,`, `),Jc(2799,`code`),Tk(2800,`po-multiselect`),Zg(),Tk(2801,`, `),Jc(2802,`code`),Tk(2803,`po-combo`),Zg(),Tk(2804,`, `),Jc(2805,`code`),Tk(2806,`po-datepicker-range`),Zg()()()(),Jc(2807,`tr`,13)(2808,`td`,14)(2809,`div`,15)(2810,`span`,16),Tk(2811,` loading`),_u(2812,`br`),Zg()()(),Jc(2813,`td`,17)(2814,`code`,28),Tk(2815,`boolean`),Zg()(),Jc(2816,`td`,20)(2817,`em`)(2818,`strong`),Tk(2819,`(opcional)`),Zg()(),Jc(2820,`p`),Tk(2821,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),Zg(),Jc(2822,`blockquote`)(2823,`p`),Tk(2824,`Por padrão é `),Jc(2825,`code`),Tk(2826,`false`),Zg(),Tk(2827,`.`),Zg()(),Jc(2828,`p`)(2829,`strong`),Tk(2830,`Componentes compatíveis:`),Zg(),Jc(2831,`code`),Tk(2832,`po-datepicker`),Zg(),Tk(2833,`, `),Jc(2834,`code`),Tk(2835,`po-datepicker-range`),Zg(),Tk(2836,`, `),Jc(2837,`code`),Tk(2838,`po-number`),Zg(),Tk(2839,`, `),Jc(2840,`code`),Tk(2841,`po-decimal`),Zg(),Tk(2842,`,
`),Jc(2843,`code`),Tk(2844,`po-input`),Zg(),Tk(2845,`, `),Jc(2846,`code`),Tk(2847,`po-select`),Zg(),Tk(2848,`, `),Jc(2849,`code`),Tk(2850,`po-switch`),Zg(),Tk(2851,`, `),Jc(2852,`code`),Tk(2853,`po-combo`),Zg(),Tk(2854,`, `),Jc(2855,`code`),Tk(2856,`po-lookup`),Zg(),Tk(2857,`, `),Jc(2858,`code`),Tk(2859,`po-multiselect`),Zg(),Tk(2860,`,
`),Jc(2861,`code`),Tk(2862,`po-textarea`),Zg(),Tk(2863,`, `),Jc(2864,`code`),Tk(2865,`po-password`),Zg(),Tk(2866,`, `),Jc(2867,`code`),Tk(2868,`po-upload`),Zg(),Tk(2869,`.`),Zg()()(),Jc(2870,`tr`,13)(2871,`td`,14)(2872,`div`,15)(2873,`span`,16),Tk(2874,` locale`),_u(2875,`br`),Zg()()(),Jc(2876,`td`,17)(2877,`code`,18),Tk(2878,`string`),Zg()(),Jc(2879,`td`,20)(2880,`em`)(2881,`strong`),Tk(2882,`(opcional)`),Zg()(),Jc(2883,`p`),Tk(2884,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Jc(2885,`a`,65)(2886,`code`),Tk(2887,`I18n`),Zg()()(),Jc(2888,`p`),Tk(2889,`Exemplo de utilização:`),Zg(),Jc(2890,`pre`)(2891,`code`),Tk(2892,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),Zg()(),Jc(2893,`blockquote`)(2894,`p`),Tk(2895,`Para ver quais linguagens suportadas acesse `),Jc(2896,`a`,65)(2897,`code`),Tk(2898,`I18n`),Zg()()()(),Jc(2899,`p`)(2900,`strong`),Tk(2901,`Componentes compatíveis:`),Zg(),Jc(2902,`code`),Tk(2903,`po-datepicker`),Zg(),Tk(2904,`, `),Jc(2905,`code`),Tk(2906,`po-decimal`),Zg(),Tk(2907,`, `),Jc(2908,`code`),Tk(2909,`po-timepicker`),Zg(),Tk(2910,`.`),Zg()()(),Jc(2911,`tr`,13)(2912,`td`,14)(2913,`div`,15)(2914,`span`,16),Tk(2915,` mask`),_u(2916,`br`),Zg()()(),Jc(2917,`td`,17)(2918,`code`,18),Tk(2919,`string`),Zg()(),Jc(2920,`td`,20)(2921,`em`)(2922,`strong`),Tk(2923,`(opcional)`),Zg()(),Jc(2924,`p`),Tk(2925,`Máscara para o campo.`),Zg(),Jc(2926,`p`)(2927,`strong`),Tk(2928,`Componente compatível:`),Zg(),Jc(2929,`code`),Tk(2930,`po-input`),Zg(),Tk(2931,`.`),Zg(),Jc(2932,`blockquote`)(2933,`p`),Tk(2934,`também é atribuído ao utilizar a propriedade `),Jc(2935,`code`),Tk(2936,`type: time`),Zg(),Tk(2937,`.`),Zg()(),Jc(2938,`blockquote`)(2939,`p`),Tk(2940,`Incompatível com `),Jc(2941,`code`),Tk(2942,`po-decimal`),Zg(),Tk(2943,`.`),Zg()()()(),Jc(2944,`tr`,13)(2945,`td`,14)(2946,`div`,15)(2947,`span`,16),Tk(2948,` maskFormatModel`),_u(2949,`br`),Zg()()(),Jc(2950,`td`,17)(2951,`code`,28),Tk(2952,`boolean`),Zg()(),Jc(2953,`td`,20)(2954,`em`)(2955,`strong`),Tk(2956,`(opcional)`),Zg()(),Jc(2957,`p`),Tk(2958,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Jc(2959,`code`),Tk(2960,`false`),Zg(),Tk(2961,`.`),Zg(),Jc(2962,`p`)(2963,`strong`),Tk(2964,`Componente compatível:`),Zg(),Jc(2965,`code`),Tk(2966,`po-input`),Zg(),Tk(2967,`.`),Zg(),Jc(2968,`blockquote`)(2969,`p`),Tk(2970,`também é atribuído ao utilizar a propriedade `),Jc(2971,`code`),Tk(2972,`type: time`),Zg(),Tk(2973,`.`),Zg()()()(),Jc(2974,`tr`,13)(2975,`td`,14)(2976,`div`,15)(2977,`span`,16),Tk(2978,` maskNoLengthValidation`),_u(2979,`br`),Zg()()(),Jc(2980,`td`,17)(2981,`code`,28),Tk(2982,`boolean`),Zg()(),Jc(2983,`td`,20)(2984,`em`)(2985,`strong`),Tk(2986,`(opcional)`),Zg()(),Jc(2987,`p`),Tk(2988,`Controla como o componente aplica as validações de comprimento mínimo (`),Jc(2989,`code`),Tk(2990,`minLength`),Zg(),Tk(2991,`) e máximo (`),Jc(2992,`code`),Tk(2993,`maxLength`),Zg(),Tk(2994,`) quando há uma máscara (`),Jc(2995,`code`),Tk(2996,`p-mask`),Zg(),Tk(2997,`) definida.`),Zg(),Jc(2998,`ul`)(2999,`li`),Tk(3e3,`Quando `),Jc(3001,`code`),Tk(3002,`true`),Zg(),Tk(3003,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),Zg(),Jc(3004,`li`),Tk(3005,`Quando `),Jc(3006,`code`),Tk(3007,`false`),Zg(),Tk(3008,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),Zg()(),Jc(3009,`p`)(3010,`strong`),Tk(3011,`Componentes compatíveis:`),Zg(),Jc(3012,`code`),Tk(3013,`po-input`),Zg(),Tk(3014,`, `),Jc(3015,`code`),Tk(3016,`po-decimal`),Zg(),Tk(3017,`.`),Zg(),Jc(3018,`blockquote`)(3019,`p`),Tk(3020,`Esta propriedade é ignorada quando utilizada em conjunto com `),Jc(3021,`code`),Tk(3022,`p-mask-format-model`),Zg(),Tk(3023,`.`),Zg()(),Jc(3024,`p`),Tk(3025,`Exemplo:`),Zg(),Jc(3026,`pre`)(3027,`code`),Tk(3028,`fields:Array<PoDynamicFormField> = [
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
`),Zg()(),Jc(3029,`ul`)(3030,`li`),Tk(3031,`Entrada: `),Jc(3032,`code`),Tk(3033,`11.111.111/1111-11`),Zg(),Tk(3034,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),Zg()()()(),Jc(3035,`tr`,13)(3036,`td`,14)(3037,`div`,15)(3038,`span`,16),Tk(3039,` maxLength`),_u(3040,`br`),Zg()()(),Jc(3041,`td`,17)(3042,`code`,41),Tk(3043,`number`),Zg()(),Jc(3044,`td`,20)(3045,`em`)(3046,`strong`),Tk(3047,`(opcional)`),Zg()(),Jc(3048,`p`),Tk(3049,`Tamanho máximo de caracteres.`),Zg(),Jc(3050,`p`)(3051,`strong`),Tk(3052,`Componentes compatíveis:`),Zg(),Jc(3053,`code`),Tk(3054,`po-input`),Zg(),Tk(3055,`, `),Jc(3056,`code`),Tk(3057,`po-number`),Zg(),Tk(3058,`, `),Jc(3059,`code`),Tk(3060,`po-decimal`),Zg(),Tk(3061,`, `),Jc(3062,`code`),Tk(3063,`po-textarea`),Zg(),Tk(3064,`, `),Jc(3065,`code`),Tk(3066,`po-password`),Zg(),Tk(3067,`.`),Zg()()(),Jc(3068,`tr`,13)(3069,`td`,14)(3070,`div`,15)(3071,`span`,16),Tk(3072,` maxTime`),_u(3073,`br`),Zg()()(),Jc(3074,`td`,17)(3075,`code`,18),Tk(3076,`string`),Zg()(),Jc(3077,`td`,20)(3078,`em`)(3079,`strong`),Tk(3080,`(opcional)`),Zg()(),Jc(3081,`p`),Tk(3082,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Jc(3083,`code`),Tk(3084,`HH:mm`),Zg(),Tk(3085,` ou `),Jc(3086,`code`),Tk(3087,`HH:mm:ss`),Zg(),Tk(3088,`.`),Zg(),Jc(3089,`p`)(3090,`strong`),Tk(3091,`Componente compatível:`),Zg(),Jc(3092,`code`),Tk(3093,`po-datetimepicker`),Zg(),Tk(3094,`, `),Jc(3095,`code`),Tk(3096,`po-timepicker`),Zg()()()(),Jc(3097,`tr`,13)(3098,`td`,14)(3099,`div`,15)(3100,`span`,16),Tk(3101,` maxValue`),_u(3102,`br`),Zg()()(),Jc(3103,`td`,17)(3104,`code`,18),Tk(3105,`string `),Zg(),Jc(3106,`code`,41),Tk(3107,` number`),Zg()(),Jc(3108,`td`,20)(3109,`em`)(3110,`strong`),Tk(3111,`(opcional)`),Zg()(),Jc(3112,`p`),Tk(3113,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Jc(3114,`em`),Tk(3115,`number`),Zg(),Tk(3116,`, `),Jc(3117,`em`),Tk(3118,`date`),Zg(),Tk(3119,`, `),Jc(3120,`em`),Tk(3121,`dateTime`),Zg(),Tk(3122,` ou `),Jc(3123,`em`),Tk(3124,`time`),Zg(),Tk(3125,`.`),Zg(),Jc(3126,`blockquote`)(3127,`p`),Tk(3128,`Para `),Jc(3129,`code`),Tk(3130,`po-timepicker`),Zg(),Tk(3131,`, o valor deve estar no formato `),Jc(3132,`code`),Tk(3133,`HH:mm`),Zg(),Tk(3134,` ou `),Jc(3135,`code`),Tk(3136,`HH:mm:ss`),Zg(),Tk(3137,`.`),Zg()(),Jc(3138,`p`)(3139,`strong`),Tk(3140,`Componentes compatíveis:`),Zg(),Jc(3141,`code`),Tk(3142,`po-datepicker`),Zg(),Tk(3143,`, `),Jc(3144,`code`),Tk(3145,`po-datepicker-range`),Zg(),Tk(3146,`, `),Jc(3147,`code`),Tk(3148,`po-number`),Zg(),Tk(3149,`, `),Jc(3150,`code`),Tk(3151,`po-decimal`),Zg(),Tk(3152,`, `),Jc(3153,`code`),Tk(3154,`po-timepicker`),Zg()()()(),Jc(3155,`tr`,13)(3156,`td`,14)(3157,`div`,15)(3158,`span`,16),Tk(3159,` minLength`),_u(3160,`br`),Zg()()(),Jc(3161,`td`,17)(3162,`code`,41),Tk(3163,`number`),Zg()(),Jc(3164,`td`,20)(3165,`em`)(3166,`strong`),Tk(3167,`(opcional)`),Zg()(),Jc(3168,`p`),Tk(3169,`Tamanho mínimo de caracteres.`),Zg(),Jc(3170,`p`)(3171,`strong`),Tk(3172,`Componentes compatíveis:`),Zg(),Jc(3173,`code`),Tk(3174,`po-input`),Zg(),Tk(3175,`, `),Jc(3176,`code`),Tk(3177,`po-number`),Zg(),Tk(3178,`, `),Jc(3179,`code`),Tk(3180,`po-decimal`),Zg(),Tk(3181,`, `),Jc(3182,`code`),Tk(3183,`po-textarea`),Zg(),Tk(3184,`, `),Jc(3185,`code`),Tk(3186,`po-password`),Zg(),Tk(3187,`.`),Zg()()(),Jc(3188,`tr`,13)(3189,`td`,14)(3190,`div`,15)(3191,`span`,16),Tk(3192,` minTime`),_u(3193,`br`),Zg()()(),Jc(3194,`td`,17)(3195,`code`,18),Tk(3196,`string`),Zg()(),Jc(3197,`td`,20)(3198,`em`)(3199,`strong`),Tk(3200,`(opcional)`),Zg()(),Jc(3201,`p`),Tk(3202,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Jc(3203,`code`),Tk(3204,`HH:mm`),Zg(),Tk(3205,` ou `),Jc(3206,`code`),Tk(3207,`HH:mm:ss`),Zg(),Tk(3208,`.`),Zg(),Jc(3209,`p`)(3210,`strong`),Tk(3211,`Componente compatível:`),Zg(),Jc(3212,`code`),Tk(3213,`po-datetimepicker`),Zg(),Tk(3214,`, `),Jc(3215,`code`),Tk(3216,`po-timepicker`),Zg()()()(),Jc(3217,`tr`,13)(3218,`td`,14)(3219,`div`,15)(3220,`span`,16),Tk(3221,` minValue`),_u(3222,`br`),Zg()()(),Jc(3223,`td`,17)(3224,`code`,18),Tk(3225,`string `),Zg(),Jc(3226,`code`,41),Tk(3227,` number`),Zg()(),Jc(3228,`td`,20)(3229,`em`)(3230,`strong`),Tk(3231,`(opcional)`),Zg()(),Jc(3232,`p`),Tk(3233,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Jc(3234,`em`),Tk(3235,`number`),Zg(),Tk(3236,`, `),Jc(3237,`em`),Tk(3238,`date`),Zg(),Tk(3239,`, `),Jc(3240,`em`),Tk(3241,`dateTime`),Zg(),Tk(3242,` ou `),Jc(3243,`em`),Tk(3244,`time`),Zg(),Tk(3245,`.`),Zg(),Jc(3246,`blockquote`)(3247,`p`),Tk(3248,`Para `),Jc(3249,`code`),Tk(3250,`po-timepicker`),Zg(),Tk(3251,`, o valor deve estar no formato `),Jc(3252,`code`),Tk(3253,`HH:mm`),Zg(),Tk(3254,` ou `),Jc(3255,`code`),Tk(3256,`HH:mm:ss`),Zg(),Tk(3257,`.`),Zg()(),Jc(3258,`p`)(3259,`strong`),Tk(3260,`Componentes compatíveis:`),Zg(),Jc(3261,`code`),Tk(3262,`po-datepicker`),Zg(),Tk(3263,`, `),Jc(3264,`code`),Tk(3265,`po-datepicker-range`),Zg(),Tk(3266,`, `),Jc(3267,`code`),Tk(3268,`po-number`),Zg(),Tk(3269,`, `),Jc(3270,`code`),Tk(3271,`po-decimal`),Zg(),Tk(3272,`, `),Jc(3273,`code`),Tk(3274,`po-timepicker`),Zg()()()(),Jc(3275,`tr`,13)(3276,`td`,14)(3277,`div`,15)(3278,`span`,16),Tk(3279,` minuteInterval`),_u(3280,`br`),Zg()()(),Jc(3281,`td`,17)(3282,`code`,41),Tk(3283,`number`),Zg()(),Jc(3284,`td`,20)(3285,`em`)(3286,`strong`),Tk(3287,`(opcional)`),Zg()(),Jc(3288,`p`),Tk(3289,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),Zg()()(),Jc(3290,`tr`,13)(3291,`td`,14)(3292,`div`,15)(3293,`span`,16),Tk(3294,` mode`),_u(3295,`br`),Zg()()(),Jc(3296,`td`,17)(3297,`code`,66),Tk(3298,`'month-year' `),Zg(),Jc(3299,`code`,67),Tk(3300,` 'year'`),Zg()(),Jc(3301,`td`,20)(3302,`em`)(3303,`strong`),Tk(3304,`(opcional)`),Zg()(),Jc(3305,`p`),Tk(3306,`Define o modo de seleção do `),Jc(3307,`code`),Tk(3308,`po-datepicker`),Zg(),Tk(3309,`.`),Zg(),Jc(3310,`p`),Tk(3311,`Valores aceitos:`),Zg(),Jc(3312,`ul`)(3313,`li`)(3314,`code`),Tk(3315,`'month-year'`),Zg(),Tk(3316,`: exibe seleção de mês e ano (formato `),Jc(3317,`code`),Tk(3318,`MM/YYYY`),Zg(),Tk(3319,`)`),Zg(),Jc(3320,`li`)(3321,`code`),Tk(3322,`'year'`),Zg(),Tk(3323,`: exibe seleção apenas de ano (formato `),Jc(3324,`code`),Tk(3325,`YYYY`),Zg(),Tk(3326,`)`),Zg()(),Jc(3327,`p`)(3328,`strong`),Tk(3329,`Componente compatível:`),Zg(),Jc(3330,`code`),Tk(3331,`po-datepicker`),Zg()()()(),Jc(3332,`tr`,13)(3333,`td`,14)(3334,`div`,15)(3335,`span`,16),Tk(3336,` modelFormat`),_u(3337,`br`),Zg()()(),Jc(3338,`td`,17)(3339,`code`,68),Tk(3340,`PoTimepickerModelFormat`),Zg()(),Jc(3341,`td`,20)(3342,`em`)(3343,`strong`),Tk(3344,`(opcional)`),Zg()(),Jc(3345,`p`),Tk(3346,`Define o formato do valor do horário a ser utilizado no model do `),Jc(3347,`code`),Tk(3348,`po-timepicker`),Zg(),Tk(3349,`.`),Zg(),Jc(3350,`blockquote`)(3351,`p`),Tk(3352,`Veja os valores válidos no `),Jc(3353,`code`),Tk(3354,`PoTimepickerModelFormat`),Zg(),Tk(3355,`.`),Zg()(),Jc(3356,`p`)(3357,`strong`),Tk(3358,`Componente compatível:`),Zg(),Jc(3359,`code`),Tk(3360,`po-timepicker`),Zg()()()(),Jc(3361,`tr`,13)(3362,`td`,14)(3363,`div`,15)(3364,`span`,16),Tk(3365,` multiple`),_u(3366,`br`),Zg()()(),Jc(3367,`td`,17)(3368,`code`,28),Tk(3369,`boolean`),Zg()(),Jc(3370,`td`,20)(3371,`em`)(3372,`strong`),Tk(3373,`(opcional)`),Zg()(),Jc(3374,`p`),Tk(3375,`Permite a seleção de múltiplos itens.`),Zg(),Jc(3376,`p`)(3377,`strong`),Tk(3378,`Componentes compatíveis:`),Zg(),Jc(3379,`code`),Tk(3380,`po-lookup`),Zg(),Tk(3381,`, `),Jc(3382,`code`),Tk(3383,`po-upload`),Zg()()()(),Jc(3384,`tr`,13)(3385,`td`,14)(3386,`div`,15)(3387,`span`,16),Tk(3388,` noAutocomplete`),_u(3389,`br`),Zg()()(),Jc(3390,`td`,17)(3391,`code`,28),Tk(3392,`boolean`),Zg()(),Jc(3393,`td`,20)(3394,`em`)(3395,`strong`),Tk(3396,`(opcional)`),Zg()(),Jc(3397,`p`),Tk(3398,`Define a propriedade nativa `),Jc(3399,`code`),Tk(3400,`autocomplete`),Zg(),Tk(3401,` do campo como off.`),Zg(),Jc(3402,`p`)(3403,`strong`),Tk(3404,`Componentes compatíveis:`),Zg(),Jc(3405,`code`),Tk(3406,`po-datepicker`),Zg(),Tk(3407,`, `),Jc(3408,`code`),Tk(3409,`po-datepicker-range`),Zg(),Tk(3410,`, `),Jc(3411,`code`),Tk(3412,`po-input`),Zg(),Tk(3413,`, `),Jc(3414,`code`),Tk(3415,`po-number`),Zg(),Tk(3416,`, `),Jc(3417,`code`),Tk(3418,`po-decimal`),Zg(),Tk(3419,`,
`),Jc(3420,`code`),Tk(3421,`po-lookup`),Zg(),Tk(3422,`, `),Jc(3423,`code`),Tk(3424,`po-password`),Zg(),Tk(3425,`, `),Jc(3426,`code`),Tk(3427,`po-timepicker`),Zg(),Tk(3428,`.`),Zg()()(),Jc(3429,`tr`,13)(3430,`td`,14)(3431,`div`,15)(3432,`span`,16),Tk(3433,` offsetColumns`),_u(3434,`br`),Zg()()(),Jc(3435,`td`,17)(3436,`code`,41),Tk(3437,`number`),Zg()(),Jc(3438,`td`,20)(3439,`em`)(3440,`strong`),Tk(3441,`(opcional)`),Zg()(),Jc(3442,`p`),Tk(3443,`Tamanho do espaço de exibição do campo em telas.`),Zg(),Jc(3444,`p`),Tk(3445,`Deve ser usado o sistema de `),Jc(3446,`strong`),Tk(3447,`grid`),Zg(),Tk(3448,` do PO (1 ... 12 colunas).`),Zg(),Jc(3449,`blockquote`)(3450,`p`),Tk(3451,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),Zg()()()(),Jc(3452,`tr`,13)(3453,`td`,14)(3454,`div`,15)(3455,`span`,16),Tk(3456,` offsetLgColumns`),_u(3457,`br`),Zg()()(),Jc(3458,`td`,17)(3459,`code`,41),Tk(3460,`number`),Zg()(),Jc(3461,`td`,20)(3462,`em`)(3463,`strong`),Tk(3464,`(opcional)`),Zg()(),Jc(3465,`p`),Tk(3466,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),Zg(),Jc(3467,`p`),Tk(3468,`Deve ser usado o sistema de `),Jc(3469,`strong`),Tk(3470,`grid`),Zg(),Tk(3471,` do PO (1 ... 12 colunas).`),Zg(),Jc(3472,`blockquote`)(3473,`p`),Tk(3474,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3475,`code`),Tk(3476,`offsetColumns`),Zg(),Tk(3477,`.`),Zg()()()(),Jc(3478,`tr`,13)(3479,`td`,14)(3480,`div`,15)(3481,`span`,16),Tk(3482,` offsetMdColumns`),_u(3483,`br`),Zg()()(),Jc(3484,`td`,17)(3485,`code`,41),Tk(3486,`number`),Zg()(),Jc(3487,`td`,20)(3488,`em`)(3489,`strong`),Tk(3490,`(opcional)`),Zg()(),Jc(3491,`p`),Tk(3492,`Tamanho do espaço de exibição do campo em telas médias (md).`),Zg(),Jc(3493,`p`),Tk(3494,`Deve ser usado o sistema de `),Jc(3495,`strong`),Tk(3496,`grid`),Zg(),Tk(3497,` do PO (1 ... 12 colunas).`),Zg(),Jc(3498,`blockquote`)(3499,`p`),Tk(3500,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3501,`code`),Tk(3502,`offsetColumns`),Zg(),Tk(3503,`.`),Zg()()()(),Jc(3504,`tr`,13)(3505,`td`,14)(3506,`div`,15)(3507,`span`,16),Tk(3508,` offsetSmColumns`),_u(3509,`br`),Zg()()(),Jc(3510,`td`,17)(3511,`code`,41),Tk(3512,`number`),Zg()(),Jc(3513,`td`,20)(3514,`em`)(3515,`strong`),Tk(3516,`(opcional)`),Zg()(),Jc(3517,`p`),Tk(3518,`Tamanho do espaço de exibição do campo em telas menores (sm).`),Zg(),Jc(3519,`p`),Tk(3520,`Deve ser usado o sistema de `),Jc(3521,`strong`),Tk(3522,`grid`),Zg(),Tk(3523,` do PO (1 ... 12 colunas).`),Zg(),Jc(3524,`blockquote`)(3525,`p`),Tk(3526,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3527,`code`),Tk(3528,`offsetColumns`),Zg(),Tk(3529,`.`),Zg()()()(),Jc(3530,`tr`,13)(3531,`td`,14)(3532,`div`,15)(3533,`span`,16),Tk(3534,` offsetXlColumns`),_u(3535,`br`),Zg()()(),Jc(3536,`td`,17)(3537,`code`,41),Tk(3538,`number`),Zg()(),Jc(3539,`td`,20)(3540,`em`)(3541,`strong`),Tk(3542,`(opcional)`),Zg()(),Jc(3543,`p`),Tk(3544,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),Zg(),Jc(3545,`p`),Tk(3546,`Deve ser usado o sistema de `),Jc(3547,`strong`),Tk(3548,`grid`),Zg(),Tk(3549,` do PO (1 ... 12 colunas).`),Zg(),Jc(3550,`blockquote`)(3551,`p`),Tk(3552,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Jc(3553,`code`),Tk(3554,`offsetColumns`),Zg(),Tk(3555,`.`),Zg()()()(),Jc(3556,`tr`,13)(3557,`td`,14)(3558,`div`,15)(3559,`span`,16),Tk(3560,` onError`),_u(3561,`br`),Zg()()(),Jc(3562,`td`,17)(3563,`code`,29),Tk(3564,`Function`),Zg()(),Jc(3565,`td`,20)(3566,`em`)(3567,`strong`),Tk(3568,`(opcional)`),Zg()(),Jc(3569,`p`),Tk(3570,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),Zg(),Jc(3571,`blockquote`)(3572,`p`),Tk(3573,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(3574,`code`),Tk(3575,`HttpErrorResponse`),Zg(),Tk(3576,`.`),Zg()(),Jc(3577,`p`)(3578,`strong`),Tk(3579,`Componente compatível`),Zg(),Tk(3580,`: `),Jc(3581,`code`),Tk(3582,`po-upload`),Zg()()()(),Jc(3583,`tr`,13)(3584,`td`,14)(3585,`div`,15)(3586,`span`,16),Tk(3587,` onSuccess`),_u(3588,`br`),Zg()()(),Jc(3589,`td`,17)(3590,`code`,29),Tk(3591,`Function`),Zg()(),Jc(3592,`td`,20)(3593,`em`)(3594,`strong`),Tk(3595,`(opcional)`),Zg()(),Jc(3596,`p`),Tk(3597,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),Zg(),Jc(3598,`blockquote`)(3599,`p`),Tk(3600,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(3601,`code`),Tk(3602,`HttpResponse`),Zg(),Tk(3603,`.`),Zg()(),Jc(3604,`p`)(3605,`strong`),Tk(3606,`Componente compatível`),Zg(),Tk(3607,`: `),Jc(3608,`code`),Tk(3609,`po-upload`),Zg()()()(),Jc(3610,`tr`,13)(3611,`td`,14)(3612,`div`,15)(3613,`span`,16),Tk(3614,` onUpload`),_u(3615,`br`),Zg()()(),Jc(3616,`td`,17)(3617,`code`,29),Tk(3618,`Function`),Zg()(),Jc(3619,`td`,20)(3620,`em`)(3621,`strong`),Tk(3622,`(opcional)`),Zg()(),Jc(3623,`p`),Tk(3624,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),Zg(),Jc(3625,`pre`)(3626,`code`),Tk(3627,`event.data = {id: 'id do usu\xE1rio'};
`),Zg()(),Jc(3628,`p`)(3629,`strong`),Tk(3630,`Componente compatível`),Zg(),Tk(3631,`: `),Jc(3632,`code`),Tk(3633,`po-upload`),Zg()()()(),Jc(3634,`tr`,13)(3635,`td`,14)(3636,`div`,15)(3637,`span`,16),Tk(3638,` optional`),_u(3639,`br`),Zg()()(),Jc(3640,`td`,17)(3641,`code`,28),Tk(3642,`boolean`),Zg()(),Jc(3643,`td`,20)(3644,`em`)(3645,`strong`),Tk(3646,`(opcional)`),Zg()(),Jc(3647,`p`),Tk(3648,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(3649,`blockquote`)(3650,`p`),Tk(3651,`A indicação não será exibida, se:`),Zg()(),Jc(3652,`ul`)(3653,`li`),Tk(3654,`O campo for `),Jc(3655,`code`),Tk(3656,`required`),Zg(),Tk(3657,`, ou;`),Zg(),Jc(3658,`li`),Tk(3659,`Não possuir `),Jc(3660,`code`),Tk(3661,`help`),Zg(),Tk(3662,` e `),Jc(3663,`code`),Tk(3664,`label`),Zg(),Tk(3665,`.`),Zg()(),Jc(3666,`p`)(3667,`strong`),Tk(3668,`Componentes compatíveis:`),Zg(),Jc(3669,`code`),Tk(3670,`po-datepicker`),Zg(),Tk(3671,`, `),Jc(3672,`code`),Tk(3673,`po-datepicker-range`),Zg(),Tk(3674,`, `),Jc(3675,`code`),Tk(3676,`po-timepicker`),Zg(),Tk(3677,`, `),Jc(3678,`code`),Tk(3679,`po-input`),Zg(),Tk(3680,`, `),Jc(3681,`code`),Tk(3682,`po-number`),Zg(),Tk(3683,`,
`),Jc(3684,`code`),Tk(3685,`po-decimal`),Zg(),Tk(3686,`, `),Jc(3687,`code`),Tk(3688,`po-select`),Zg(),Tk(3689,`, `),Jc(3690,`code`),Tk(3691,`po-radio-group`),Zg(),Tk(3692,`, `),Jc(3693,`code`),Tk(3694,`po-combo`),Zg(),Tk(3695,`, `),Jc(3696,`code`),Tk(3697,`po-lookup`),Zg(),Tk(3698,`, `),Jc(3699,`code`),Tk(3700,`po-checkbox-group`),Zg(),Tk(3701,`, `),Jc(3702,`code`),Tk(3703,`po-multiselect`),Zg(),Tk(3704,`,
`),Jc(3705,`code`),Tk(3706,`po-textarea`),Zg(),Tk(3707,`, `),Jc(3708,`code`),Tk(3709,`po-password`),Zg(),Tk(3710,`.`),Zg()()(),Jc(3711,`tr`,13)(3712,`td`,14)(3713,`div`,15)(3714,`span`,16),Tk(3715,` options`),_u(3716,`br`),Zg()()(),Jc(3717,`td`,17)(3718,`code`,32),Tk(3719,`Array<string> `),Zg(),Jc(3720,`code`,69),Tk(3721,` Array<PoSelectOption> `),Zg(),Jc(3722,`code`,70),Tk(3723,` Array<PoMultiselectOption> `),Zg(),Jc(3724,`code`,71),Tk(3725,` Array<PoCheckboxGroupOption> `),Zg(),Jc(3726,`code`,72),Tk(3727,` Array<any>`),Zg()(),Jc(3728,`td`,20)(3729,`em`)(3730,`strong`),Tk(3731,`(opcional)`),Zg()(),Jc(3732,`p`),Tk(3733,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),Zg(),Jc(3734,`p`)(3735,`strong`),Tk(3736,`Componentes compatíveis:`),Zg(),Jc(3737,`code`),Tk(3738,`po-select`),Zg(),Tk(3739,`, `),Jc(3740,`code`),Tk(3741,`po-radio-group`),Zg(),Tk(3742,`, `),Jc(3743,`code`),Tk(3744,`po-checkbox-group`),Zg(),Tk(3745,`, `),Jc(3746,`code`),Tk(3747,`po-multiselect`),Zg(),Tk(3748,`.`),Zg()()(),Jc(3749,`tr`,13)(3750,`td`,14)(3751,`div`,15)(3752,`span`,16),Tk(3753,` optionsMulti`),_u(3754,`br`),Zg()()(),Jc(3755,`td`,17)(3756,`code`,28),Tk(3757,`boolean`),Zg()(),Jc(3758,`td`,20)(3759,`em`)(3760,`strong`),Tk(3761,`(opcional)`),Zg()(),Jc(3762,`p`),Tk(3763,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),Zg()()(),Jc(3764,`tr`,13)(3765,`td`,14)(3766,`div`,15)(3767,`span`,16),Tk(3768,` optionsService`),_u(3769,`br`),Zg()()(),Jc(3770,`td`,17)(3771,`code`,18),Tk(3772,`string `),Zg(),Jc(3773,`code`,73),Tk(3774,` PoComboFilter `),Zg(),Jc(3775,`code`,74),Tk(3776,` PoMultiselectFilter`),Zg()(),Jc(3777,`td`,20)(3778,`em`)(3779,`strong`),Tk(3780,`(opcional)`),Zg()(),Jc(3781,`p`),Tk(3782,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Jc(3783,`strong`),Tk(3784,`Importante`),Zg()(),Jc(3785,`blockquote`)(3786,`p`),Tk(3787,`Para que funcione corretamente, é importante que o serviço siga o `),Jc(3788,`a`,75),Tk(3789,`guia de API do PO UI`),Zg(),Tk(3790,`.`),Zg()()()(),Jc(3791,`tr`,13)(3792,`td`,14)(3793,`div`,15)(3794,`span`,16),Tk(3795,` order`),_u(3796,`br`),Zg()()(),Jc(3797,`td`,17)(3798,`code`,41),Tk(3799,`number`),Zg()(),Jc(3800,`td`,20)(3801,`em`)(3802,`strong`),Tk(3803,`(opcional)`),Zg()(),Jc(3804,`p`),Tk(3805,`Informa a ordem de exibição do campo.`),Zg(),Jc(3806,`p`),Tk(3807,`Exemplo de utilização:`),Zg(),Jc(3808,`p`)(3809,`code`),Tk(3810,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),Zg()(),Jc(3811,`p`),Tk(3812,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Jc(3813,`code`),Tk(3814,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),Zg()(),Jc(3815,`p`),Tk(3816,`Só serão aceitos valores com números inteiros maiores do que zero.`),Zg(),Jc(3817,`p`),Tk(3818,`Campos sem `),Jc(3819,`code`),Tk(3820,`order`),Zg(),Tk(3821,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),Zg()()(),Jc(3822,`tr`,13)(3823,`td`,14)(3824,`div`,15)(3825,`span`,16),Tk(3826,` params`),_u(3827,`br`),Zg()()(),Jc(3828,`td`,17)(3829,`code`,33),Tk(3830,`any`),Zg()(),Jc(3831,`td`,20)(3832,`em`)(3833,`strong`),Tk(3834,`(opcional)`),Zg()(),Jc(3835,`p`),Tk(3836,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Jc(3837,`code`),Tk(3838,`po-lookup`),Zg(),Tk(3839,` e
`),Jc(3840,`code`),Tk(3841,`po-combo`),Zg(),Tk(3842,`.`),Zg(),Jc(3843,`p`),Tk(3844,`Por exemplo, para o parâmetro `),Jc(3845,`code`),Tk(3846,`{ age: 23 }`),Zg(),Tk(3847,` a URL da requisição ficaria:`),Zg(),Jc(3848,`p`)(3849,`code`),Tk(3850,`url + ?age=23&filter=Peter`),Zg()()()(),Jc(3851,`tr`,13)(3852,`td`,14)(3853,`div`,15)(3854,`span`,16),Tk(3855,` pattern`),_u(3856,`br`),Zg()()(),Jc(3857,`td`,17)(3858,`code`,18),Tk(3859,`string`),Zg()(),Jc(3860,`td`,20)(3861,`em`)(3862,`strong`),Tk(3863,`(opcional)`),Zg()(),Jc(3864,`p`),Tk(3865,`Regex para validação do campo.`),Zg(),Jc(3866,`p`)(3867,`strong`),Tk(3868,`Componentes compatíveis:`),Zg(),Jc(3869,`code`),Tk(3870,`po-input`),Zg(),Tk(3871,`, `),Jc(3872,`code`),Tk(3873,`po-password`),Zg(),Tk(3874,`.`),Zg(),Jc(3875,`blockquote`)(3876,`p`),Tk(3877,`Incompatível com `),Jc(3878,`code`),Tk(3879,`po-decimal`),Zg(),Tk(3880,`.`),Zg()()()(),Jc(3881,`tr`,13)(3882,`td`,14)(3883,`div`,15)(3884,`span`,16),Tk(3885,` placeholder`),_u(3886,`br`),Zg()()(),Jc(3887,`td`,17)(3888,`code`,18),Tk(3889,`string`),Zg()(),Jc(3890,`td`,20)(3891,`em`)(3892,`strong`),Tk(3893,`(opcional)`),Zg()(),Jc(3894,`p`),Tk(3895,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),Zg(),Jc(3896,`p`)(3897,`strong`),Tk(3898,`Componentes compatíveis:`),Zg(),Jc(3899,`code`),Tk(3900,`po-datepicker`),Zg(),Tk(3901,`, `),Jc(3902,`code`),Tk(3903,`po-datepicker-range`),Zg(),Tk(3904,`, `),Jc(3905,`code`),Tk(3906,`po-timepicker`),Zg(),Tk(3907,`, `),Jc(3908,`code`),Tk(3909,`po-input`),Zg(),Tk(3910,`, `),Jc(3911,`code`),Tk(3912,`po-number`),Zg(),Tk(3913,`, `),Jc(3914,`code`),Tk(3915,`po-decimal`),Zg(),Tk(3916,`, `),Jc(3917,`code`),Tk(3918,`po-select`),Zg(),Tk(3919,`, `),Jc(3920,`code`),Tk(3921,`po-combo`),Zg(),Tk(3922,`, `),Jc(3923,`code`),Tk(3924,`po-lookup`),Zg(),Tk(3925,`, `),Jc(3926,`code`),Tk(3927,`po-multiselect`),Zg(),Tk(3928,`, `),Jc(3929,`code`),Tk(3930,`po-textarea`),Zg(),Tk(3931,`, `),Jc(3932,`code`),Tk(3933,`po-password`),Zg(),Tk(3934,`.`),Zg()()(),Jc(3935,`tr`,13)(3936,`td`,14)(3937,`div`,15)(3938,`span`,16),Tk(3939,` placeholderSearch`),_u(3940,`br`),Zg()()(),Jc(3941,`td`,17)(3942,`code`,18),Tk(3943,`string`),Zg()(),Jc(3944,`td`,20)(3945,`em`)(3946,`strong`),Tk(3947,`(opcional)`),Zg()(),Jc(3948,`p`),Tk(3949,`Placeholder do campo de pesquisa do `),Jc(3950,`code`),Tk(3951,`po-multiselect`),Zg(),Tk(3952,`.`),Zg(),Jc(3953,`blockquote`)(3954,`p`),Tk(3955,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),Zg()()()(),Jc(3956,`tr`,13)(3957,`td`,14)(3958,`div`,15)(3959,`span`,16),Tk(3960,` property`),_u(3961,`br`),Zg()()(),Jc(3962,`td`,17)(3963,`code`,18),Tk(3964,`string`),Zg()(),Jc(3965,`td`,20)(3966,`p`),Tk(3967,`Nome de referência do campo.`),Zg()()(),Jc(3968,`tr`,13)(3969,`td`,14)(3970,`div`,15)(3971,`span`,16),Tk(3972,` range`),_u(3973,`br`),Zg()()(),Jc(3974,`td`,17)(3975,`code`,28),Tk(3976,`boolean`),Zg()(),Jc(3977,`td`,20)(3978,`em`)(3979,`strong`),Tk(3980,`(opcional)`),Zg()(),Jc(3981,`p`),Tk(3982,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),Zg(),Jc(3983,`blockquote`)(3984,`p`),Tk(3985,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),Zg()()()(),Jc(3986,`tr`,13)(3987,`td`,14)(3988,`div`,15)(3989,`span`,16),Tk(3990,` rangePresetOptions`),_u(3991,`br`),Zg()()(),Jc(3992,`td`,17)(3993,`code`,76),Tk(3994,`Array<PoCalendarRangePreset>`),Zg()(),Jc(3995,`td`,20)(3996,`em`)(3997,`strong`),Tk(3998,`(opcional)`),Zg()(),Jc(3999,`p`),Tk(4e3,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),Zg(),Jc(4001,`p`),Tk(4002,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Jc(4003,`code`),Tk(4004,`PoCalendarRangePreset`),Zg(),Tk(4005,`.`),Zg(),Jc(4006,`p`)(4007,`strong`),Tk(4008,`Componente compatível:`),Zg(),Jc(4009,`code`),Tk(4010,`po-datepicker-range`),Zg()()()(),Jc(4011,`tr`,13)(4012,`td`,14)(4013,`div`,15)(4014,`span`,16),Tk(4015,` rangePresets`),_u(4016,`br`),Zg()()(),Jc(4017,`td`,17)(4018,`code`,28),Tk(4019,`boolean `),Zg(),Jc(4020,`code`,32),Tk(4021,` Array<string>`),Zg()(),Jc(4022,`td`,20)(4023,`em`)(4024,`strong`),Tk(4025,`(opcional)`),Zg()(),Jc(4026,`p`),Tk(4027,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),Zg(),Jc(4028,`p`),Tk(4029,`Aceita os seguintes valores:`),Zg(),Jc(4030,`ul`)(4031,`li`)(4032,`code`),Tk(4033,`true`),Zg(),Tk(4034,`: exibe todos os presets padrão.`),Zg(),Jc(4035,`li`)(4036,`code`),Tk(4037,`false`),Zg(),Tk(4038,`: não exibe os presets padrão.`),Zg(),Jc(4039,`li`)(4040,`code`),Tk(4041,`Array<string>`),Zg(),Tk(4042,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),Zg()(),Jc(4043,`p`)(4044,`strong`),Tk(4045,`Componente compatível:`),Zg(),Jc(4046,`code`),Tk(4047,`po-datepicker-range`),Zg()()()(),Jc(4048,`tr`,13)(4049,`td`,14)(4050,`div`,15)(4051,`span`,16),Tk(4052,` rangePresetsOrder`),_u(4053,`br`),Zg()()(),Jc(4054,`td`,17)(4055,`code`,77),Tk(4056,`'asc' `),Zg(),Jc(4057,`code`,78),Tk(4058,` 'desc'`),Zg()(),Jc(4059,`td`,20)(4060,`em`)(4061,`strong`),Tk(4062,`(opcional)`),Zg()(),Jc(4063,`p`),Tk(4064,`Define a ordenação dos presets na lista.`),Zg(),Jc(4065,`p`),Tk(4066,`Valores aceitos:`),Zg(),Jc(4067,`ul`)(4068,`li`)(4069,`code`),Tk(4070,`'asc'`),Zg(),Tk(4071,`: ordenação crescente (passado → futuro)`),Zg(),Jc(4072,`li`)(4073,`code`),Tk(4074,`'desc'`),Zg(),Tk(4075,`: ordenação decrescente (futuro → passado)`),Zg()(),Jc(4076,`p`)(4077,`strong`),Tk(4078,`Componente compatível:`),Zg(),Jc(4079,`code`),Tk(4080,`po-datepicker-range`),Zg()()()(),Jc(4081,`tr`,13)(4082,`td`,14)(4083,`div`,15)(4084,`span`,16),Tk(4085,` readonly`),_u(4086,`br`),Zg()()(),Jc(4087,`td`,17)(4088,`code`,28),Tk(4089,`boolean`),Zg()(),Jc(4090,`td`,20)(4091,`em`)(4092,`strong`),Tk(4093,`(opcional)`),Zg()(),Jc(4094,`p`),Tk(4095,`Indica que o campo será somente leitura.`),Zg(),Jc(4096,`p`)(4097,`strong`),Tk(4098,`Componentes compatíveis:`),Zg(),Jc(4099,`code`),Tk(4100,`po-datepicker`),Zg(),Tk(4101,`, `),Jc(4102,`code`),Tk(4103,`po-datepicker-range`),Zg(),Tk(4104,`, `),Jc(4105,`code`),Tk(4106,`po-timepicker`),Zg(),Tk(4107,`, `),Jc(4108,`code`),Tk(4109,`po-input`),Zg(),Tk(4110,`, `),Jc(4111,`code`),Tk(4112,`po-number`),Zg(),Tk(4113,`,
`),Jc(4114,`code`),Tk(4115,`po-decimal`),Zg(),Tk(4116,`, `),Jc(4117,`code`),Tk(4118,`po-select`),Zg(),Tk(4119,`, `),Jc(4120,`code`),Tk(4121,`po-textarea`),Zg(),Tk(4122,`, `),Jc(4123,`code`),Tk(4124,`po-password`),Zg(),Tk(4125,`.`),Zg()()(),Jc(4126,`tr`,13)(4127,`td`,14)(4128,`div`,15)(4129,`span`,16),Tk(4130,` removeInitialFilter`),_u(4131,`br`),Zg()()(),Jc(4132,`td`,17)(4133,`code`,28),Tk(4134,`boolean`),Zg()(),Jc(4135,`td`,20)(4136,`em`)(4137,`strong`),Tk(4138,`(opcional)`),Zg()(),Jc(4139,`p`),Tk(4140,`Define que o filtro no primeiro clique será removido.`),Zg(),Jc(4141,`blockquote`)(4142,`p`),Tk(4143,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),Zg()(),Jc(4144,`p`)(4145,`strong`),Tk(4146,`Componente compatível`),Zg(),Tk(4147,`: `),Jc(4148,`code`),Tk(4149,`po-combo`),Zg()()()(),Jc(4150,`tr`,13)(4151,`td`,14)(4152,`div`,15)(4153,`span`,16),Tk(4154,` required`),_u(4155,`br`),Zg()()(),Jc(4156,`td`,17)(4157,`code`,28),Tk(4158,`boolean`),Zg()(),Jc(4159,`td`,20)(4160,`em`)(4161,`strong`),Tk(4162,`(opcional)`),Zg()(),Jc(4163,`p`),Tk(4164,`Define a obrigatoriedade do campo.`),Zg(),Jc(4165,`p`)(4166,`strong`),Tk(4167,`Componentes compatíveis:`),Zg(),Jc(4168,`code`),Tk(4169,`po-datepicker`),Zg(),Tk(4170,`, `),Jc(4171,`code`),Tk(4172,`po-datepicker-range`),Zg(),Tk(4173,`, `),Jc(4174,`code`),Tk(4175,`po-timepicker`),Zg(),Tk(4176,`, `),Jc(4177,`code`),Tk(4178,`po-input`),Zg(),Tk(4179,`, `),Jc(4180,`code`),Tk(4181,`po-number`),Zg(),Tk(4182,`,
`),Jc(4183,`code`),Tk(4184,`po-decimal`),Zg(),Tk(4185,`, `),Jc(4186,`code`),Tk(4187,`po-select`),Zg(),Tk(4188,`, `),Jc(4189,`code`),Tk(4190,`po-radio-group`),Zg(),Tk(4191,`, `),Jc(4192,`code`),Tk(4193,`po-combo`),Zg(),Tk(4194,`, `),Jc(4195,`code`),Tk(4196,`po-lookup`),Zg(),Tk(4197,`, `),Jc(4198,`code`),Tk(4199,`po-checkbox-group`),Zg(),Tk(4200,`, `),Jc(4201,`code`),Tk(4202,`po-multiselect`),Zg(),Tk(4203,`,
`),Jc(4204,`code`),Tk(4205,`po-textarea`),Zg(),Tk(4206,`, `),Jc(4207,`code`),Tk(4208,"po-password``, "),Zg(),Tk(4209,"po-upload`."),Zg()()(),Jc(4210,`tr`,13)(4211,`td`,14)(4212,`div`,15)(4213,`span`,16),Tk(4214,` requiredFieldErrorMessage`),_u(4215,`br`),Zg()()(),Jc(4216,`td`,17)(4217,`code`,28),Tk(4218,`boolean`),Zg()(),Jc(4219,`td`,20)(4220,`em`)(4221,`strong`),Tk(4222,`(opcional)`),Zg()(),Jc(4223,`p`),Tk(4224,`Exibe a mensagem setada na propriedade `),Jc(4225,`code`),Tk(4226,`errorMessage`),Zg(),Tk(4227,` se o campo estiver vazio e for requerido.`),Zg(),Jc(4228,`blockquote`)(4229,`p`),Tk(4230,`Necessário que a propriedade `),Jc(4231,`code`),Tk(4232,`required`),Zg(),Tk(4233,` esteja habilitada.`),Zg()(),Jc(4234,`p`)(4235,`strong`),Tk(4236,`Componentes compatíveis:`),Zg(),Jc(4237,`code`),Tk(4238,`po-datepicker`),Zg(),Tk(4239,`, `),Jc(4240,`code`),Tk(4241,`po-timepicker`),Zg(),Tk(4242,`, `),Jc(4243,`code`),Tk(4244,`po-input`),Zg(),Tk(4245,`, `),Jc(4246,`code`),Tk(4247,`po-number`),Zg(),Tk(4248,`, `),Jc(4249,`code`),Tk(4250,`po-decimal`),Zg(),Tk(4251,`, `),Jc(4252,`code`),Tk(4253,`po-password`),Zg(),Tk(4254,`.`),Zg()()(),Jc(4255,`tr`,13)(4256,`td`,14)(4257,`div`,15)(4258,`span`,16),Tk(4259,` restrictions`),_u(4260,`br`),Zg()()(),Jc(4261,`td`,17)(4262,`code`,79),Tk(4263,`PoUploadFileRestrictions`),Zg()(),Jc(4264,`td`,20)(4265,`em`)(4266,`strong`),Tk(4267,`(opcional)`),Zg()(),Jc(4268,`p`),Tk(4269,`Objeto que segue a definição da interface `),Jc(4270,`code`),Tk(4271,`PoUploadFileRestrictions`),Zg(),Tk(4272,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),Zg(),Jc(4273,`p`)(4274,`strong`),Tk(4275,`Componente compatível`),Zg(),Tk(4276,`: `),Jc(4277,`code`),Tk(4278,`po-upload`),Zg()()()(),Jc(4279,`tr`,13)(4280,`td`,14)(4281,`div`,15)(4282,`span`,16),Tk(4283,` rows`),_u(4284,`br`),Zg()()(),Jc(4285,`td`,17)(4286,`code`,41),Tk(4287,`number`),Zg()(),Jc(4288,`td`,20)(4289,`em`)(4290,`strong`),Tk(4291,`(opcional)`),Zg()(),Jc(4292,`p`),Tk(4293,`Quantidade de linhas exibidas no `),Jc(4294,`code`),Tk(4295,`po-textarea`),Zg(),Tk(4296,`.`),Zg()()(),Jc(4297,`tr`,13)(4298,`td`,14)(4299,`div`,15)(4300,`span`,16),Tk(4301,` searchService`),_u(4302,`br`),Zg()()(),Jc(4303,`td`,17)(4304,`code`,18),Tk(4305,`string `),Zg(),Jc(4306,`code`,80),Tk(4307,` PoLookupFilter`),Zg()(),Jc(4308,`td`,20)(4309,`em`)(4310,`strong`),Tk(4311,`(opcional)`),Zg()(),Jc(4312,`p`),Tk(4313,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Jc(4314,`code`),Tk(4315,`columns`),Zg(),Tk(4316,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Jc(4317,`strong`),Tk(4318,`Importante:`),Zg()(),Jc(4319,`blockquote`)(4320,`p`),Tk(4321,`Caso utilizar a propriedade `),Jc(4322,`code`),Tk(4323,`optionsService`),Zg(),Tk(4324,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Jc(4325,`a`,75),Tk(4326,`guia de API do PO UI`),Zg(),Tk(4327,`.`),Zg()()()(),Jc(4328,`tr`,13)(4329,`td`,14)(4330,`div`,15)(4331,`span`,16),Tk(4332,` secondInterval`),_u(4333,`br`),Zg()()(),Jc(4334,`td`,17)(4335,`code`,41),Tk(4336,`number`),Zg()(),Jc(4337,`td`,20)(4338,`em`)(4339,`strong`),Tk(4340,`(opcional)`),Zg()(),Jc(4341,`p`),Tk(4342,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),Zg()()(),Jc(4343,`tr`,13)(4344,`td`,14)(4345,`div`,15)(4346,`span`,16),Tk(4347,` secret`),_u(4348,`br`),Zg()()(),Jc(4349,`td`,17)(4350,`code`,28),Tk(4351,`boolean`),Zg()(),Jc(4352,`td`,20)(4353,`em`)(4354,`strong`),Tk(4355,`(opcional)`),Zg()(),Jc(4356,`p`),Tk(4357,`Esconde a informação estilo `),Jc(4358,`em`),Tk(4359,`password`),Zg(),Tk(4360,`, pode ser utilizado quando o tipo de dado for `),Jc(4361,`em`),Tk(4362,`string`),Zg(),Tk(4363,`.`),Zg()()(),Jc(4364,`tr`,13)(4365,`td`,14)(4366,`div`,15)(4367,`span`,16),Tk(4368,` showRequired`),_u(4369,`br`),Zg()()(),Jc(4370,`td`,17)(4371,`code`,28),Tk(4372,`boolean`),Zg()(),Jc(4373,`td`,20)(4374,`em`)(4375,`strong`),Tk(4376,`(opcional)`),Zg()(),Jc(4377,`p`),Tk(4378,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(4379,`blockquote`)(4380,`p`),Tk(4381,`Não será exibida a indicação se:`),Zg()(),Jc(4382,`ul`)(4383,`li`),Tk(4384,`Não possuir `),Jc(4385,`code`),Tk(4386,`p-help`),Zg(),Tk(4387,` e/ou `),Jc(4388,`code`),Tk(4389,`p-label`),Zg(),Tk(4390,`.`),Zg()(),Jc(4391,`p`)(4392,`strong`),Tk(4393,`Componentes compatíveis:`),Zg(),Jc(4394,`code`),Tk(4395,`po-datepicker`),Zg(),Tk(4396,`, `),Jc(4397,`code`),Tk(4398,`po-datepicker-range`),Zg(),Tk(4399,`, `),Jc(4400,`code`),Tk(4401,`po-timepicker`),Zg(),Tk(4402,`, `),Jc(4403,`code`),Tk(4404,`po-input`),Zg(),Tk(4405,`, `),Jc(4406,`code`),Tk(4407,`po-number`),Zg(),Tk(4408,`,
`),Jc(4409,`code`),Tk(4410,`po-decimal`),Zg(),Tk(4411,`, `),Jc(4412,`code`),Tk(4413,`po-select`),Zg(),Tk(4414,`, `),Jc(4415,`code`),Tk(4416,`po-radio-group`),Zg(),Tk(4417,`, `),Jc(4418,`code`),Tk(4419,`po-combo`),Zg(),Tk(4420,`, `),Jc(4421,`code`),Tk(4422,`po-lookup`),Zg(),Tk(4423,`, `),Jc(4424,`code`),Tk(4425,`po-checkbox-group`),Zg(),Tk(4426,`, `),Jc(4427,`code`),Tk(4428,`po-multiselect`),Zg(),Tk(4429,`,
`),Jc(4430,`code`),Tk(4431,`po-textarea`),Zg(),Tk(4432,`, `),Jc(4433,`code`),Tk(4434,`po-password`),Zg(),Tk(4435,`, `),Jc(4436,`code`),Tk(4437,`po-upload`),Zg(),Tk(4438,`.`),Zg()()(),Jc(4439,`tr`,13)(4440,`td`,14)(4441,`div`,15)(4442,`span`,16),Tk(4443,` showSeconds`),_u(4444,`br`),Zg()()(),Jc(4445,`td`,17)(4446,`code`,28),Tk(4447,`boolean`),Zg()(),Jc(4448,`td`,20)(4449,`em`)(4450,`strong`),Tk(4451,`(opcional)`),Zg()(),Jc(4452,`p`),Tk(4453,`Exibe a coluna de segundos no painel do timepicker.`),Zg()()(),Jc(4454,`tr`,13)(4455,`td`,14)(4456,`div`,15)(4457,`span`,16),Tk(4458,` showThumbnail`),_u(4459,`br`),Zg()()(),Jc(4460,`td`,17)(4461,`code`,28),Tk(4462,`boolean`),Zg()(),Jc(4463,`td`,20)(4464,`em`)(4465,`strong`),Tk(4466,`(opcional)`),Zg()(),Jc(4467,`p`),Tk(4468,`Exibe a pré-visualização de imagens ao anexá-las.`),Zg(),Jc(4469,`blockquote`)(4470,`p`),Tk(4471,`Propriedade funciona apenas em arquivos de formato de imagem (`),Jc(4472,`code`),Tk(4473,`.png`),Zg(),Tk(4474,`, `),Jc(4475,`code`),Tk(4476,`.jpg`),Zg(),Tk(4477,`, `),Jc(4478,`code`),Tk(4479,`.jpeg`),Zg(),Tk(4480,` e `),Jc(4481,`code`),Tk(4482,`.gif`),Zg(),Tk(4483,`).`),Zg()(),Jc(4484,`p`)(4485,`strong`),Tk(4486,`Componente compatível`),Zg(),Tk(4487,`: `),Jc(4488,`code`),Tk(4489,`po-upload`),Zg()()()(),Jc(4490,`tr`,13)(4491,`td`,14)(4492,`div`,15)(4493,`span`,16),Tk(4494,` size`),_u(4495,`br`),Zg()()(),Jc(4496,`td`,17)(4497,`code`,18),Tk(4498,`string`),Zg()(),Jc(4499,`td`,20)(4500,`em`)(4501,`strong`),Tk(4502,`(opcional)`),Zg()(),Jc(4503,`p`),Tk(4504,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),Zg(),Jc(4505,`ul`)(4506,`li`)(4507,`code`),Tk(4508,`small`),Zg(),Tk(4509,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(4510,`li`)(4511,`code`),Tk(4512,`medium`),Zg(),Tk(4513,`: aplica a medida medium de cada componente.`),Zg(),Jc(4514,`li`)(4515,`code`),Tk(4516,`large`),Zg(),Tk(4517,`: aplica a medida large de cada componente (disponível para `),Jc(4518,`code`),Tk(4519,`po-checkbox`),Zg(),Tk(4520,` e `),Jc(4521,`code`),Tk(4522,`po-radio-group`),Zg(),Tk(4523,`).`),Jc(4524,`blockquote`)(4525,`p`),Tk(4526,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(4527,`code`),Tk(4528,`medium`),Zg(),Tk(4529,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(4530,`a`,21),Tk(4531,`po-theme`),Zg(),Tk(4532,`.`),Zg()()()()()(),Jc(4533,`tr`,13)(4534,`td`,14)(4535,`div`,15)(4536,`span`,16),Tk(4537,` sort`),_u(4538,`br`),Zg()()(),Jc(4539,`td`,17)(4540,`code`,28),Tk(4541,`boolean`),Zg()(),Jc(4542,`td`,20)(4543,`em`)(4544,`strong`),Tk(4545,`(opcional)`),Zg()(),Jc(4546,`p`),Tk(4547,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),Zg(),Jc(4548,`p`)(4549,`strong`),Tk(4550,`Componentes compatíveis:`),Zg(),Jc(4551,`code`),Tk(4552,`po-combo`),Zg(),Tk(4553,`, po-multiselect`),Zg()()(),Jc(4554,`tr`,13)(4555,`td`,14)(4556,`div`,15)(4557,`span`,16),Tk(4558,` step`),_u(4559,`br`),Zg()()(),Jc(4560,`td`,17)(4561,`code`,41),Tk(4562,`number`),Zg()(),Jc(4563,`td`,20)(4564,`em`)(4565,`strong`),Tk(4566,`(opcional)`),Zg()(),Jc(4567,`p`),Tk(4568,`Intervalo utilizado no `),Jc(4569,`code`),Tk(4570,`po-number`),Zg(),Tk(4571,`.`),Zg()()(),Jc(4572,`tr`,13)(4573,`td`,14)(4574,`div`,15)(4575,`span`,16),Tk(4576,` thousandMaxlength`),_u(4577,`br`),Zg()()(),Jc(4578,`td`,17)(4579,`code`,41),Tk(4580,`number`),Zg()(),Jc(4581,`td`,20)(4582,`em`)(4583,`strong`),Tk(4584,`(opcional)`),Zg()(),Jc(4585,`p`),Tk(4586,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),Zg(),Jc(4587,`blockquote`)(4588,`p`),Tk(4589,`Esta propriedade só pode ser utilizada quando o `),Jc(4590,`code`),Tk(4591,`type`),Zg(),Tk(4592,` for `),Jc(4593,`em`),Tk(4594,`currency`),Zg(),Tk(4595,` ou `),Jc(4596,`em`),Tk(4597,`decimal`),Zg(),Tk(4598,`.`),Zg()(),Jc(4599,`blockquote`)(4600,`p`),Tk(4601,`Quando utilizado com `),Jc(4602,`code`),Tk(4603,`displayFormat`),Zg(),Tk(4604,`, será respeitado o valor `),Jc(4605,`strong`),Tk(4606,`mais restritivo`),Zg(),Tk(4607,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),Zg()()()(),Jc(4608,`tr`,13)(4609,`td`,14)(4610,`div`,15)(4611,`span`,16),Tk(4612,` type`),_u(4613,`br`),Zg()()(),Jc(4614,`td`,17)(4615,`code`,18),Tk(4616,`string `),Zg(),Jc(4617,`code`,81),Tk(4618,` PoDynamicFieldType`),Zg()(),Jc(4619,`td`,20)(4620,`em`)(4621,`strong`),Tk(4622,`(opcional)`),Zg()(),Jc(4623,`p`),Tk(4624,`Tipo do valor campo.`),Zg(),Jc(4625,`p`),Tk(4626,`Valores válidos:`),Zg(),Jc(4627,`ul`)(4628,`li`)(4629,`code`),Tk(4630,`boolean`),Zg(),Tk(4631,`: Valores `),Jc(4632,`em`),Tk(4633,`booleanos`),Zg(),Tk(4634,`.`),Zg(),Jc(4635,`li`)(4636,`code`),Tk(4637,`currency`),Zg(),Tk(4638,`: Valores monetários.`),Zg(),Jc(4639,`li`)(4640,`code`),Tk(4641,`decimal`),Zg(),Tk(4642,`: Valores decimais.`),Zg(),Jc(4643,`li`)(4644,`code`),Tk(4645,`date`),Zg(),Tk(4646,`: Valores de datas.`),Jc(4647,`ul`)(4648,`li`),Tk(4649,`Aceita os tipos `),Jc(4650,`strong`),Tk(4651,`string`),Zg(),Tk(4652,` e `),Jc(4653,`strong`),Tk(4654,`Date`),Zg(),Tk(4655,` padr\xE3o do Javascript,
por exemplo: `),Jc(4656,`code`),Tk(4657,`'2017-11-28'`),Zg(),Tk(4658,` ou `),Jc(4659,`code`),Tk(4660,`new Date(2017, 10, 28)`),Zg(),Tk(4661,`.`),Zg()()(),Jc(4662,`li`)(4663,`code`),Tk(4664,`dateTime`),Zg(),Tk(4665,`: Valor de data com horário.`),Jc(4666,`ul`)(4667,`li`),Tk(4668,`Aceita o tipo `),Jc(4669,`em`),Tk(4670,`string`),Zg(),Tk(4671,` no formato `),Jc(4672,`strong`),Tk(4673,`ISO-8601`),Zg(),Tk(4674,` extendido `),Jc(4675,`strong`),Tk(4676,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),Zg(),Tk(4677,`
e o tipo `),Jc(4678,`strong`),Tk(4679,`Date`),Zg(),Tk(4680,` padrão do Javascript, por exemplo: `),Jc(4681,`code`),Tk(4682,`'2017-11-28T00:00:00-02:00'`),Zg(),Tk(4683,` ou `),Jc(4684,`code`),Tk(4685,`new Date(2017, 10, 28)`),Zg(),Tk(4686,`.`),Zg()()(),Jc(4687,`li`)(4688,`code`),Tk(4689,`number`),Zg(),Tk(4690,`: Valores numéricos.`),Zg(),Jc(4691,`li`)(4692,`code`),Tk(4693,`string`),Zg(),Tk(4694,`: Textos.`),Zg(),Jc(4695,`li`)(4696,`code`),Tk(4697,`time`),Zg(),Tk(4698,`: Valor do horário.`),Jc(4699,`ul`)(4700,`li`),Tk(4701,`Aceita o tipo `),Jc(4702,`strong`),Tk(4703,`string`),Zg(),Tk(4704,` nos formatos `),Jc(4705,`strong`),Tk(4706,`'HH:mm:ss'`),Zg(),Tk(4707,` ou `),Jc(4708,`strong`),Tk(4709,`'HH:mm:ss.ffffff'`),Zg(),Tk(4710,`, por exemplo: `),Jc(4711,`code`),Tk(4712,`'23:12:45'`),Zg(),Tk(4713,`.`),Zg()()()()()(),Jc(4714,`tr`,13)(4715,`td`,14)(4716,`div`,15)(4717,`span`,16),Tk(4718,` url`),_u(4719,`br`),Zg()()(),Jc(4720,`td`,17)(4721,`code`,18),Tk(4722,`string`),Zg()(),Jc(4723,`td`,20)(4724,`em`)(4725,`strong`),Tk(4726,`(opcional)`),Zg()(),Jc(4727,`p`),Tk(4728,`URL que deve ser feita a requisição com os arquivos selecionados.`),Zg(),Jc(4729,`p`)(4730,`strong`),Tk(4731,`Componente compatível`),Zg(),Tk(4732,`: `),Jc(4733,`code`),Tk(4734,`po-upload`),Zg()()()(),Jc(4735,`tr`,13)(4736,`td`,14)(4737,`div`,15)(4738,`span`,16),Tk(4739,` validate`),_u(4740,`br`),Zg()()(),Jc(4741,`td`,17)(4742,`code`,18),Tk(4743,`string `),Zg(),Jc(4744,`code`,29),Tk(4745,` Function`),Zg()(),Jc(4746,`td`,20)(4747,`em`)(4748,`strong`),Tk(4749,`(opcional)`),Zg()(),Jc(4750,`p`),Tk(4751,`Função ou serviço para validar as `),Jc(4752,`strong`),Tk(4753,`mudanças do campo`),Zg(),Tk(4754,`.`),Zg(),Jc(4755,`ul`)(4756,`li`),Tk(4757,`A propriedade aceita os seguintes tipos:`),Zg()(),Jc(4758,`ul`)(4759,`li`)(4760,`strong`),Tk(4761,`String`),Zg(),Tk(4762,`: Endpoint usado pelo componente para requisição via `),Jc(4763,`code`),Tk(4764,`POST`),Zg(),Tk(4765,`.`),Zg(),Jc(4766,`li`)(4767,`strong`),Tk(4768,`Function`),Zg(),Tk(4769,`: Método que será executado.`),Zg()(),Jc(4770,`p`),Tk(4771,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Jc(4772,`code`),Tk(4773,`PoDynamicFormFieldChanged`),Zg(),Tk(4774,`:`),Zg(),Jc(4775,`p`)(4776,`code`),Tk(4777,`{ property: 'property name', value: 'new value' }`),Zg()(),Jc(4778,`p`),Tk(4779,`O retorno desta função deve ser do tipo `),Jc(4780,`a`,82),Tk(4781,`PoDynamicFormFieldValidation`),Zg(),Tk(4782,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),Zg(),Jc(4783,`pre`)(4784,`code`),Tk(4785,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),Zg()(),Jc(4786,`p`),Tk(4787,`Para referenciar a sua função utilize a propriedade `),Jc(4788,`code`),Tk(4789,`bind`),Zg(),Tk(4790,`, por exemplo:
`),Jc(4791,`code`),Tk(4792,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),Zg()()()(),Jc(4793,`tr`,13)(4794,`td`,14)(4795,`div`,15)(4796,`span`,16),Tk(4797,` visible`),_u(4798,`br`),Zg()()(),Jc(4799,`td`,17)(4800,`code`,28),Tk(4801,`boolean`),Zg()(),Jc(4802,`td`,20)(4803,`em`)(4804,`strong`),Tk(4805,`(opcional)`),Zg()(),Jc(4806,`p`),Tk(4807,`Indica se o campo será visível.`),Zg()()(),Jc(4808,`tr`,13)(4809,`td`,14)(4810,`div`,15)(4811,`span`,16),Tk(4812,` yearRangeLimit`),_u(4813,`br`),Zg()()(),Jc(4814,`td`,17)(4815,`code`,41),Tk(4816,`number`),Zg()(),Jc(4817,`td`,20)(4818,`em`)(4819,`strong`),Tk(4820,`(opcional)`),Zg()(),Jc(4821,`p`),Tk(4822,`Define o limite de anos exibidos na lista de anos do `),Jc(4823,`code`),Tk(4824,`po-datepicker`),Zg(),Tk(4825,` nos modos `),Jc(4826,`code`),Tk(4827,`month-year`),Zg(),Tk(4828,` e `),Jc(4829,`code`),Tk(4830,`year`),Zg(),Tk(4831,`.`),Zg()()()(),Jc(4832,`h4`,38)(4833,`code`,5),Tk(4834,`PoDynamicFormLoad`),Zg()(),Jc(4835,`div`,2)(4836,`p`),_u(4837,`a`,83),Zg(),Jc(4838,`p`),Tk(4839,`Estrutura de retorno no carregamento do formulário.`),Zg()(),Jc(4840,`h4`,9),Tk(4841,`Propriedades`),Zg(),Jc(4842,`table`,10)(4843,`tr`,11)(4844,`th`,12),Tk(4845,`Nome`),Zg(),Jc(4846,`th`,12),Tk(4847,`Tipo`),Zg(),Jc(4848,`th`,12),Tk(4849,`Descrição`),Zg()(),Jc(4850,`tr`,13)(4851,`td`,14)(4852,`div`,15)(4853,`span`,16),Tk(4854,` fields`),_u(4855,`br`),Zg()()(),Jc(4856,`td`,17)(4857,`code`,22),Tk(4858,`Array<PoDynamicFormField>`),Zg()(),Jc(4859,`td`,20)(4860,`em`)(4861,`strong`),Tk(4862,`(opcional)`),Zg()(),Jc(4863,`p`),Tk(4864,`Lista com as novas definições dos campos.`),Zg(),Jc(4865,`blockquote`)(4866,`p`),Tk(4867,`Não é necessário colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas.`),Zg()()()(),Jc(4868,`tr`,13)(4869,`td`,14)(4870,`div`,15)(4871,`span`,16),Tk(4872,` focus`),_u(4873,`br`),Zg()()(),Jc(4874,`td`,17)(4875,`code`,18),Tk(4876,`string`),Zg()(),Jc(4877,`td`,20)(4878,`em`)(4879,`strong`),Tk(4880,`(opcional)`),Zg()(),Jc(4881,`p`),Tk(4882,`Nome do campo que receberá o foco.`),Zg(),Jc(4883,`p`),Tk(4884,`Exemplo:`),Zg(),Jc(4885,`pre`)(4886,`code`),Tk(4887,`focus: 'name'
`),Zg()()()(),Jc(4888,`tr`,13)(4889,`td`,14)(4890,`div`,15)(4891,`span`,16),Tk(4892,` value`),_u(4893,`br`),Zg()()(),Jc(4894,`td`,17)(4895,`code`,33),Tk(4896,`any`),Zg()(),Jc(4897,`td`,20)(4898,`em`)(4899,`strong`),Tk(4900,`(opcional)`),Zg()(),Jc(4901,`p`),Tk(4902,`Objeto contendo os novos valores.`),Zg(),Jc(4903,`p`),Tk(4904,`Exemplo:`),Zg(),Jc(4905,`pre`)(4906,`code`),Tk(4907,`{
  name: 'new name',
  age: 10
}
`),Zg()(),Jc(4908,`blockquote`)(4909,`p`),Tk(4910,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),Zg()()()()(),Jc(4911,`h4`,38)(4912,`code`,5),Tk(4913,`PoDynamicFormFieldChanged`),Zg()(),Jc(4914,`div`,2)(4915,`p`),Tk(4916,`Estrutura dos valores que serão disparados quando houver uma mudança em um campo ou no formulário.`),Zg()(),Jc(4917,`h4`,9),Tk(4918,`Propriedades`),Zg(),Jc(4919,`table`,10)(4920,`tr`,11)(4921,`th`,12),Tk(4922,`Nome`),Zg(),Jc(4923,`th`,12),Tk(4924,`Tipo`),Zg(),Jc(4925,`th`,12),Tk(4926,`Descrição`),Zg()(),Jc(4927,`tr`,13)(4928,`td`,14)(4929,`div`,15)(4930,`span`,16),Tk(4931,` property`),_u(4932,`br`),Zg()()(),Jc(4933,`td`,17)(4934,`code`,18),Tk(4935,`string`),Zg()(),Jc(4936,`td`,20)(4937,`p`),Tk(4938,`Valor da propriedade do campo.`),Zg()()(),Jc(4939,`tr`,13)(4940,`td`,14)(4941,`div`,15)(4942,`span`,16),Tk(4943,` value`),_u(4944,`br`),Zg()()(),Jc(4945,`td`,17)(4946,`code`,33),Tk(4947,`any`),Zg()(),Jc(4948,`td`,20)(4949,`p`),Tk(4950,`Novo valor do campo.`),Zg()()()(),Jc(4951,`h4`,38)(4952,`code`,5),Tk(4953,`PoDynamicFormFieldValidation`),Zg()(),Jc(4954,`div`,2)(4955,`p`),_u(4956,`a`,84),Zg(),Jc(4957,`p`),Tk(4958,`Estrutura de retorno da validação de um campo.`),Zg()(),Jc(4959,`h4`,9),Tk(4960,`Propriedades`),Zg(),Jc(4961,`table`,10)(4962,`tr`,11)(4963,`th`,12),Tk(4964,`Nome`),Zg(),Jc(4965,`th`,12),Tk(4966,`Tipo`),Zg(),Jc(4967,`th`,12),Tk(4968,`Descrição`),Zg()(),Jc(4969,`tr`,13)(4970,`td`,14)(4971,`div`,15)(4972,`span`,16),Tk(4973,` field`),_u(4974,`br`),Zg()()(),Jc(4975,`td`,17)(4976,`code`,85),Tk(4977,`PoDynamicFormField`),Zg()(),Jc(4978,`td`,20)(4979,`em`)(4980,`strong`),Tk(4981,`(opcional)`),Zg()(),Jc(4982,`p`),Tk(4983,`Novas definições das propriedades do campo.`),Zg(),Jc(4984,`blockquote`)(4985,`p`),Tk(4986,`Não é necessário colocar todas as propriedades, apenas as que foram alteradas.`),Zg()()()(),Jc(4987,`tr`,13)(4988,`td`,14)(4989,`div`,15)(4990,`span`,16),Tk(4991,` focus`),_u(4992,`br`),Zg()()(),Jc(4993,`td`,17)(4994,`code`,28),Tk(4995,`boolean`),Zg()(),Jc(4996,`td`,20)(4997,`em`)(4998,`strong`),Tk(4999,`(opcional)`),Zg()(),Jc(5e3,`p`),Tk(5001,`Coloca o foco no campo após a validação.`),Zg()()(),Jc(5002,`tr`,13)(5003,`td`,14)(5004,`div`,15)(5005,`span`,16),Tk(5006,` value`),_u(5007,`br`),Zg()()(),Jc(5008,`td`,17)(5009,`code`,33),Tk(5010,`any`),Zg()(),Jc(5011,`td`,20)(5012,`em`)(5013,`strong`),Tk(5014,`(opcional)`),Zg()(),Jc(5015,`p`),Tk(5016,`Novo valor do campo`),Zg()()()(),Jc(5017,`h4`,38)(5018,`code`,5),Tk(5019,`PoDynamicFormValidation`),Zg()(),Jc(5020,`div`,2)(5021,`p`),_u(5022,`a`,86),Zg(),Jc(5023,`p`),Tk(5024,`Estrutura de retorno da validação do formulário.`),Zg()(),Jc(5025,`h4`,9),Tk(5026,`Propriedades`),Zg(),Jc(5027,`table`,10)(5028,`tr`,11)(5029,`th`,12),Tk(5030,`Nome`),Zg(),Jc(5031,`th`,12),Tk(5032,`Tipo`),Zg(),Jc(5033,`th`,12),Tk(5034,`Descrição`),Zg()(),Jc(5035,`tr`,13)(5036,`td`,14)(5037,`div`,15)(5038,`span`,16),Tk(5039,` fields`),_u(5040,`br`),Zg()()(),Jc(5041,`td`,17)(5042,`code`,22),Tk(5043,`Array<PoDynamicFormField>`),Zg()(),Jc(5044,`td`,20)(5045,`em`)(5046,`strong`),Tk(5047,`(opcional)`),Zg()(),Jc(5048,`p`),Tk(5049,`Lista com as novas definições dos campos.`),Zg(),Jc(5050,`blockquote`)(5051,`p`),Tk(5052,`Não é necessário colocar todas as propriedades e campos, apenas as que foram alteradas.`),Zg()()()(),Jc(5053,`tr`,13)(5054,`td`,14)(5055,`div`,15)(5056,`span`,16),Tk(5057,` focus`),_u(5058,`br`),Zg()()(),Jc(5059,`td`,17)(5060,`code`,18),Tk(5061,`string`),Zg()(),Jc(5062,`td`,20)(5063,`em`)(5064,`strong`),Tk(5065,`(opcional)`),Zg()(),Jc(5066,`p`),Tk(5067,`Nome do campo que receberá o foco.`),Zg(),Jc(5068,`p`),Tk(5069,`Exemplo:`),Zg(),Jc(5070,`pre`)(5071,`code`),Tk(5072,`focus: 'name'
`),Zg()()()(),Jc(5073,`tr`,13)(5074,`td`,14)(5075,`div`,15)(5076,`span`,16),Tk(5077,` value`),_u(5078,`br`),Zg()()(),Jc(5079,`td`,17)(5080,`code`,33),Tk(5081,`any`),Zg()(),Jc(5082,`td`,20)(5083,`em`)(5084,`strong`),Tk(5085,`(opcional)`),Zg()(),Jc(5086,`p`),Tk(5087,`Objeto contendo os novos valores.`),Zg(),Jc(5088,`p`),Tk(5089,`Exemplo:`),Zg(),Jc(5090,`pre`)(5091,`code`),Tk(5092,`{
  name: 'new name',
  age: 10
}
`),Zg()(),Jc(5093,`blockquote`)(5094,`p`),Tk(5095,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),Zg()()()()(),Jc(5096,`h4`,38)(5097,`code`,5),Tk(5098,`ErrorAsyncProperties`),Zg()(),Jc(5099,`div`,2)(5100,`p`),Tk(5101,`Interface para realizar uma validação assíncrona no componente.`),Zg()(),Jc(5102,`h4`,9),Tk(5103,`Propriedades`),Zg(),Jc(5104,`table`,10)(5105,`tr`,11)(5106,`th`,12),Tk(5107,`Nome`),Zg(),Jc(5108,`th`,12),Tk(5109,`Tipo`),Zg(),Jc(5110,`th`,12),Tk(5111,`Descrição`),Zg()(),Jc(5112,`tr`,13)(5113,`td`,14)(5114,`div`,15)(5115,`span`,16),Tk(5116,` errorAsync`),_u(5117,`br`),Zg()()(),Jc(5118,`td`,17)(5119,`code`,46),Tk(5120,`(value) => Observable<boolean>`),Zg()(),Jc(5121,`td`,20)(5122,`p`),Tk(5123,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Jc(5124,`code`),Tk(5125,`change`),Zg(),Tk(5126,` ou `),Jc(5127,`code`),Tk(5128,`change-model`),Zg(),Tk(5129,`, dependendo do valor da propriedade `),Jc(5130,`code`),Tk(5131,`triggerMode`),Zg(),Tk(5132,`.`),Zg()()(),Jc(5133,`tr`,13)(5134,`td`,14)(5135,`div`,15)(5136,`span`,16),Tk(5137,` triggerMode`),_u(5138,`br`),Zg()()(),Jc(5139,`td`,17)(5140,`code`,87),Tk(5141,`'change' `),Zg(),Jc(5142,`code`,88),Tk(5143,` 'changeModel'`),Zg()(),Jc(5144,`td`,20)(5145,`em`)(5146,`strong`),Tk(5147,`(opcional)`),Zg()(),Jc(5148,`p`),Tk(5149,`Controla se o método será executado no disparo do output `),Jc(5150,`code`),Tk(5151,`change`),Zg(),Tk(5152,` ou `),Jc(5153,`code`),Tk(5154,`change-model`),Zg(),Tk(5155,`.`),Zg()()()(),Jc(5156,`h3`),Tk(5157,`Enums`),Zg(),Jc(5158,`h4`,4)(5159,`code`,5),Tk(5160,`ForceBooleanComponentEnum`),Zg()(),Jc(5161,`div`,2)(5162,`p`),Tk(5163,`Enum para definição do tipo de componente a ser renderizado.`),Zg()(),Jc(5164,`h4`,9),Tk(5165,`Propriedades`),Zg(),Jc(5166,`table`,10)(5167,`tr`,11)(5168,`th`,12),Tk(5169,`Nome`),Zg(),Jc(5170,`th`,12),Tk(5171,`Descrição`),Zg()(),Jc(5172,`tr`,13)(5173,`td`,14)(5174,`div`,15)(5175,`span`,16),Tk(5176,` switch`),_u(5177,`br`),Zg()()(),Jc(5178,`td`,20)(5179,`p`),Tk(5180,`Força a renderização de um po-switch`),Zg()()(),Jc(5181,`tr`,13)(5182,`td`,14)(5183,`div`,15)(5184,`span`,16),Tk(5185,` checkbox`),_u(5186,`br`),Zg()()(),Jc(5187,`td`,20)(5188,`p`),Tk(5189,`Força a renderização de um po-checkbox`),Zg()()()(),Jc(5190,`h4`,4)(5191,`code`,5),Tk(5192,`ForceOptionComponentEnum`),Zg()(),Jc(5193,`div`,2)(5194,`p`),Tk(5195,`Enum para definição do tipo de componente a ser renderizado.`),Zg()(),Jc(5196,`h4`,9),Tk(5197,`Propriedades`),Zg(),Jc(5198,`table`,10)(5199,`tr`,11)(5200,`th`,12),Tk(5201,`Nome`),Zg(),Jc(5202,`th`,12),Tk(5203,`Descrição`),Zg()(),Jc(5204,`tr`,13)(5205,`td`,14)(5206,`div`,15)(5207,`span`,16),Tk(5208,` radioGroup`),_u(5209,`br`),Zg()()(),Jc(5210,`td`,20)(5211,`p`),Tk(5212,`Força a renderização de um po-radio-group independente da quantidade do opções`),Zg()()(),Jc(5213,`tr`,13)(5214,`td`,14)(5215,`div`,15)(5216,`span`,16),Tk(5217,` select`),_u(5218,`br`),Zg()()(),Jc(5219,`td`,20)(5220,`p`),Tk(5221,`Força a renderização de um po-select independente da quantidade do opções`),Zg()()()(),Jc(5222,`h4`,4)(5223,`code`,5),Tk(5224,`PoDynamicFieldType`),Zg()(),Jc(5225,`div`,2)(5226,`p`),Tk(5227,`Enum para definição do tipo de campo que será criado dinamicamente.`),Zg()(),Jc(5228,`h4`,9),Tk(5229,`Propriedades`),Zg(),Jc(5230,`table`,10)(5231,`tr`,11)(5232,`th`,12),Tk(5233,`Nome`),Zg(),Jc(5234,`th`,12),Tk(5235,`Descrição`),Zg()(),Jc(5236,`tr`,13)(5237,`td`,14)(5238,`div`,15)(5239,`span`,16),Tk(5240,` Boolean`),_u(5241,`br`),Zg()()(),Jc(5242,`td`,20)(5243,`p`),Tk(5244,`Valor booleano.`),Zg()()(),Jc(5245,`tr`,13)(5246,`td`,14)(5247,`div`,15)(5248,`span`,16),Tk(5249,` Currency`),_u(5250,`br`),Zg()()(),Jc(5251,`td`,20)(5252,`p`),Tk(5253,`Valor numérico que contém casas decimais e milhar.`),Zg()()(),Jc(5254,`tr`,13)(5255,`td`,14)(5256,`div`,15)(5257,`span`,16),Tk(5258,` Decimal`),_u(5259,`br`),Zg()()(),Jc(5260,`td`,20)(5261,`p`),Tk(5262,`Valor numérico que contém casas decimais e milhar.`),Zg()()(),Jc(5263,`tr`,13)(5264,`td`,14)(5265,`div`,15)(5266,`span`,16),Tk(5267,` Date`),_u(5268,`br`),Zg()()(),Jc(5269,`td`,20)(5270,`p`),Tk(5271,`Valor para data.`),Zg()()(),Jc(5272,`tr`,13)(5273,`td`,14)(5274,`div`,15)(5275,`span`,16),Tk(5276,` DateTime`),_u(5277,`br`),Zg()()(),Jc(5278,`td`,20)(5279,`p`),Tk(5280,`Valor para data e hora.`),Zg()()(),Jc(5281,`tr`,13)(5282,`td`,14)(5283,`div`,15)(5284,`span`,16),Tk(5285,` Time`),_u(5286,`br`),Zg()()(),Jc(5287,`td`,20)(5288,`p`),Tk(5289,`Utilizado para informar/exibir hora.`),Zg()()(),Jc(5290,`tr`,13)(5291,`td`,14)(5292,`div`,15)(5293,`span`,16),Tk(5294,` Number`),_u(5295,`br`),Zg()()(),Jc(5296,`td`,20)(5297,`p`),Tk(5298,`Valor numérico.`),Zg()()(),Jc(5299,`tr`,13)(5300,`td`,14)(5301,`div`,15)(5302,`span`,16),Tk(5303,` String`),_u(5304,`br`),Zg()()(),Jc(5305,`td`,20)(5306,`p`),Tk(5307,`Texto.`),Zg()()(),Jc(5308,`tr`,13)(5309,`td`,14)(5310,`div`,15)(5311,`span`,16),Tk(5312,` Upload`),_u(5313,`br`),Zg()()(),Jc(5314,`td`,20)(5315,`p`),Tk(5316,`Utilizado para fazer uploads de arquivos.`),Zg()()()(),Jc(5317,`h4`,4)(5318,`code`,5),Tk(5319,`PoTimepickerModelFormat`),Zg()(),Jc(5320,`div`,2)(5321,`p`)(5322,`em`),Tk(5323,`Enum`),Zg(),Tk(5324,` que define o padrão de formatação do model de saída do timepicker.`),Zg()(),Jc(5325,`h4`,9),Tk(5326,`Propriedades`),Zg(),Jc(5327,`table`,10)(5328,`tr`,11)(5329,`th`,12),Tk(5330,`Nome`),Zg(),Jc(5331,`th`,12),Tk(5332,`Descrição`),Zg()(),Jc(5333,`tr`,13)(5334,`td`,14)(5335,`div`,15)(5336,`span`,16),Tk(5337,` HourMinute`),_u(5338,`br`),Zg()()(),Jc(5339,`td`,20)(5340,`p`),Tk(5341,`Formato básico `),Jc(5342,`code`),Tk(5343,`HH:mm`),Zg(),Tk(5344,` (ex: `),Jc(5345,`code`),Tk(5346,`14:30`),Zg(),Tk(5347,`).`),Zg()()(),Jc(5348,`tr`,13)(5349,`td`,14)(5350,`div`,15)(5351,`span`,16),Tk(5352,` HourMinuteSecond`),_u(5353,`br`),Zg()()(),Jc(5354,`td`,20)(5355,`p`),Tk(5356,`Formato com segundos `),Jc(5357,`code`),Tk(5358,`HH:mm:ss`),Zg(),Tk(5359,` (ex: `),Jc(5360,`code`),Tk(5361,`14:30:00`),Zg(),Tk(5362,`).`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Fe(o,Pe){if(o&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let m=nk();return H_(m.changeTab(`web`))}),_u(1,`sample-po-dynamic-form-basic-view`)(2,`sample-po-dynamic-form-register-view`)(3,`sample-po-dynamic-form-container-view`),Zg()}if(o&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var De=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Dynamic Form`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,m){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Fe,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return m.changeTab(`doc`)}),_u(4,`sample-po-dynamic-form-doc`),Zg()()()),a&2&&(Rb(`p-actions`,m.actions),Ig(2),BO(m.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,m.activeTab===`doc`))},dependencies:[Mze,tre,are,ie,oe,re,me],encapsulation:2,changeDetection:1})}return o})()}];var de=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[WV.forChild(De),WV]})}return o})();var st=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,de]})}return o})();export{st as DocPoDynamicFormModule};
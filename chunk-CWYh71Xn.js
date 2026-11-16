import{m as P,p as M}from"./main-5ZHUK4IE.js";import{$a as tt$1,Ar as I,Ci as UO,D as Gae,Da as kI,Dn as qt,Ea as k,F as Joe,G as Nf,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,T as Fze,Ti as U_,Tr as Gb,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,di as Qi,do as xo,gi as Rb,go as z0,io as vu,ji as Vk,kt as Zoe,li as Qc,lr as Be$1,n as $P,na as de,oa as e_,oo as wg,pi as R,ro as vt$1,rr as AZ,sa as ek,si as QL,sn as j4,sr as BO,ua as ge,va as ik,vi as Sk,w as Fc,wr as GV,xi as Tk,xn as p5,xr as FO,yn as oae,yr as Du}from"./chunk-DtUf9FxZ.js";import{t as r}from"./chunk-zystk1pz.js";var Fe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-basic`]],standalone:!1,decls:4,vars:1,consts:[[3,`p-align-center`],[`p-label`,`Step 1`],[`p-label`,`Step 2`],[`p-label`,`Step 3`]],template:function(r,i){r&1&&(Qc(0,`po-stepper`,0),vu(1,`po-step`,1)(2,`po-step`,2)(3,`po-step`,3),Kg()),r&2&&Rb(`p-align-center`,!1)},dependencies:[Gae,Fze],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-stepper-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper Basic`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-stepper-basic`),Kg(),vu(23,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ye,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Fe],encapsulation:2,changeDetection:1})}return a})();function Ge(a,q){if(a&1&&(Qc(0,`po-step`,3)(1,`h2`),Sk(2),Kg()()),a&2){let s=q.$implicit;Rb(`p-label`,s.label)(`p-icon-default`,s.iconDefault),wg(2),tm(`Step Content `,s.label)}}var ke=(()=>{class a{changeDetector=p(Be$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:`Properties`,property:`stepSize`,label:`Step Size`,type:`number`,maxValue:64,minValue:24,gridLgColumns:2},{property:`orientation`,options:[{value:`vertical`,label:`Vertical`,checked:!0},{value:`horizontal`,label:`Horizontal`}],gridLgColumns:4},{label:`Align Steps Center`,gridLgColumns:3,property:`alignCenter`,type:`boolean`},{label:`Step icons`,gridLgColumns:3,property:`stepIcons`,type:`boolean`},{label:`Step Icon Active Custom`,help:`Ex.: an an-pencil-simple-line`,gridLgColumns:4,property:`iconActive`},{label:`Step Icon Done Custom`,help:`Ex.: an an-check-fat`,gridLgColumns:4,property:`iconDone`},{property:`disabledClick`,label:`Disabled click`,type:`boolean`}];stepItemFields=[{divider:`Step form`,property:`label`,label:`Step Label`,gridMdColumns:6,gridXlColumns:6},{property:`iconDefault`,label:`Step Icon Default Custom`,help:`Ex.: an an-question`,gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore()}addItem(s){this.steps=[...this.steps,r({},s)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(s){this.event=s,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation=`horizontal`,this.properties.alignCenter=!1}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-labs`]],standalone:!1,decls:17,vars:13,consts:[[`stepForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change-step`,`p-align-center`,`p-orientation`,`p-step-icons`,`p-step-size`,`p-step-icon-active`,`p-step-icon-done`,`p-disable-click`],[3,`p-label`,`p-icon-default`],[`p-label`,`Event`,3,`p-value`],[3,`p-group-form`,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Step`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`po-container`)(1,`po-stepper`,2),vt$1(`p-change-step`,function(){return i.changeStep(`change`)}),UO(2,Ge,3,3,`po-step`,3,BO),Kg(),vu(4,`po-divider`)(5,`po-info`,4),Qc(6,`form`,null,0),vu(8,`po-dynamic-form`,5),Qc(9,`div`,6)(10,`po-button`,7),vt$1(`p-click`,function(){B_(m);let o=ik(7);return i.addItem(i.stepItem),U_(o.reset())}),Kg()()(),Qc(11,`form`,null,1),vu(13,`po-dynamic-form`,5)(14,`po-divider`),Qc(15,`div`,6)(16,`po-button`,8),vt$1(`p-click`,function(){B_(m);let o=ik(7),Ue=ik(12);return i.restore(),Ue.reset(),U_(o.reset())}),Kg()()()()}if(r&2){let m=ik(7);wg(),Rb(`p-align-center`,i.properties.alignCenter)(`p-orientation`,i.properties.orientation)(`p-step-icons`,i.properties.stepIcons)(`p-step-size`,i.properties.stepSize)(`p-step-icon-active`,i.properties.iconActive)(`p-step-icon-done`,i.properties.iconDone)(`p-disable-click`,i.properties.disabledClick),wg(),HO(i.steps),wg(3),Rb(`p-value`,i.event),wg(3),Rb(`p-fields`,i.stepItemFields)(`p-value`,i.stepItem),wg(2),Rb(`p-disabled`,m.invalid),wg(3),Rb(`p-fields`,i.propertiesFields)(`p-value`,i.properties)}},dependencies:[AZ,TZ,WL,oi,Fc,Nf,oae,Joe,Gae,Fze],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-stepper-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper Labs`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-container>
  <po-stepper
    [p-align-center]="properties.alignCenter"
    [p-orientation]="properties.orientation"
    [p-step-icons]="properties.stepIcons"
    [p-step-size]="properties.stepSize"
    [p-step-icon-active]="properties.iconActive"
    [p-step-icon-done]="properties.iconDone"
    [p-disable-click]="properties.disabledClick"
    (p-change-step)="changeStep('change')"
  >
    @for (step of steps; track step) {
      <po-step [p-label]="step.label" [p-icon-default]="step.iconDefault">
        <h2>Step Content { { step.label }}</h2>
      </po-step>
    }
  </po-stepper>

  <po-divider />

  <po-info p-label="Event" [p-value]="event"> </po-info>

  <form #stepForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="stepItemFields" [p-value]="stepItem"> </po-dynamic-form>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Step"
        [p-disabled]="stepForm.invalid"
        (p-click)="addItem(stepItem); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>

  <form #propertiesForm="ngForm">
    <po-dynamic-form [p-group-form] [p-fields]="propertiesFields" [p-value]="properties"> </po-dynamic-form>
    <po-divider />
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="restore(); propertiesForm.reset(); stepForm.reset()"
      >
      </po-button>
    </div>
  </form>
</po-container>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicFormField, PoStepperItem } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-labs',
  templateUrl: './sample-po-stepper-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperLabsComponent implements OnInit {
  private changeDetector = inject(ChangeDetectorRef);

  event: any;
  properties: any = {};
  stepItem: PoStepperItem = {};
  steps: Array<PoStepperItem> = [];

  readonly propertiesFields: Array<PoDynamicFormField> = [
    {
      divider: 'Properties',
      property: 'stepSize',
      label: 'Step Size',
      type: 'number',
      maxValue: 64,
      minValue: 24,
      gridLgColumns: 2
    },
    {
      property: 'orientation',
      options: [
        { value: 'vertical', label: 'Vertical', checked: true },
        { value: 'horizontal', label: 'Horizontal' }
      ],
      gridLgColumns: 4
    },
    {
      label: 'Align Steps Center',
      gridLgColumns: 3,
      property: 'alignCenter',
      type: 'boolean'
    },
    {
      label: 'Step icons',
      gridLgColumns: 3,
      property: 'stepIcons',
      type: 'boolean'
    },
    {
      label: 'Step Icon Active Custom',
      help: 'Ex.: an an-pencil-simple-line',
      gridLgColumns: 4,
      property: 'iconActive'
    },
    {
      label: 'Step Icon Done Custom',
      help: 'Ex.: an an-check-fat',
      gridLgColumns: 4,
      property: 'iconDone'
    },
    {
      property: 'disabledClick',
      label: 'Disabled click',
      type: 'boolean'
    }
  ];

  readonly stepItemFields: Array<PoDynamicFormField> = [
    {
      divider: 'Step form',
      property: 'label',
      label: 'Step Label',
      gridMdColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'iconDefault',
      label: 'Step Icon Default Custom',
      help: 'Ex.: an an-question',
      gridMdColumns: 6,
      gridXlColumns: 6
    }
  ];

  ngOnInit() {
    this.restore();
  }

  addItem(stepItem: PoStepperItem) {
    this.steps = [...this.steps, { ...stepItem }];
    this.stepItem = {};
    this.changeDetector.detectChanges();
  }

  changeStep(event) {
    this.event = event;

    this.changeDetector.detectChanges();
  }

  restore() {
    this.properties = {};
    this.steps = [];
    this.event = undefined;
    this.properties.orientation = 'horizontal';
    this.properties.alignCenter = false;
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-stepper-labs`),Kg(),vu(23,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ze,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ke],encapsulation:2,changeDetection:1})}return a})();var $e=[`addressForm`];var et=[`paymentForm`];var tt=[`personalForm`];var nt=[`successData`];function it(a,q){a&1&&vu(0,`po-loading-overlay`,18)}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget=`Confirm Purchase`;currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget=`Next Step`;previousLabelWidget=`Previous Step`;constructor(){this.address=this.getAddress()}canActiveFinishStep(s){return k(s.form.valid).pipe(tt$1(()=>this.isLoadingPayment=!0),e_(2e3),Qi(()=>this.isLoadingPayment=!1))}canActiveNextStep(s){return s.valid}onConfirmStep(s){this.successData.open(),this.resetForms(),this.address=this.getAddress(),s.first()}getAddress(){return{city:`Sao Paulo`,code:`02511-000`,country:`Brazil`,number:`1000`,reference:``,street:`Avenida Braz Leme`}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-sales`]],viewQuery:function(r,i){if(r&1&&Du($e,7)(et,7)(tt,7)(nt,7),r&2){let m;No(m=xo())&&(i.addressForm=m.first),No(m=xo())&&(i.paymentForm=m.first),No(m=xo())&&(i.personalForm=m.first),No(m=xo())&&(i.successData=m.first)}},standalone:!1,decls:84,vars:29,consts:[[`stepper`,``],[`personalForm`,`ngForm`],[`addressForm`,`ngForm`],[`paymentForm`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`successData`,``],[1,`po-row`],[`p-title`,`Product Detail`,1,`po-md-9`],[1,`po-lg-4`],[`src`,`../../../assets/graphics/shoe.gif`,`width`,`215`,`height`,`200`],[1,`po-lg-8`],[1,`po-font-title`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[`p-height`,`317`,`p-title`,`Price`,1,`po-md-3`],[1,`sample-stepper-position-relative`],[`p-text`,`Loading`],[`p-align-center`,`false`,`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`32`],[`p-label`,`Personal`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-primary-label`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`document`,`p-label`,`Document`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Address`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`,`p-primary-label`,`p-secondary-label`],[`name`,`address.street`,`p-label`,`Street/House`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`p-label`,`Number`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`code`,`p-label`,`Postal Code`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`reference`,`p-label`,`Reference`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Payment`,3,`p-can-active-next-step`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`cardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`cardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Finish`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Document`,1,`po-md-3`,3,`p-value`],[`p-label`,`Address`,1,`po-md-3`,3,`p-value`],[`p-label`,`Number`,1,`po-md-3`,3,`p-value`],[`p-label`,`City`,1,`po-md-3`,3,`p-value`],[`p-label`,`Country`,1,`po-md-3`,3,`p-value`],[`p-label`,`Product`,`p-value`,`Nike XYZ - Red/Gold Stripes`,1,`po-md-4`],[`p-label`,`Price`,`p-value`,`$2.500,00`,1,`po-md-2`],[`p-label`,`Discount`,`p-value`,`$500,00`,1,`po-md-2`],[`p-label`,`Tax`,`p-value`,`$160,00`,1,`po-md-2`],[`p-label`,`Final Price`,`p-value`,`$2.160,00`,1,`po-md-2`],[`p-title`,`Informations`],[`src`,`../../../assets/graphics/check.jpg`,`width`,`350`,`height`,`350`,1,`po-offset-md-6`,`po-offset-xl-3`],[1,`po-offset-md-8`,`po-offset-xl-3`,`po-font-title`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`div`,8)(1,`po-widget`,9)(2,`div`,8)(3,`div`,10),vu(4,`img`,11),Kg(),Qc(5,`div`,12)(6,`p`,13),Sk(7,`Nike XYZ - Red/Gold Stripes`),Kg(),Qc(8,`p`,14),Sk(9,`Brand: Nike | Style: Modern | Men's`),Kg(),Qc(10,`p`,15),Sk(11,`Width: 12.5 - COD: 001254648412319`),Kg(),vu(12,`po-divider`),Qc(13,`p`,15),Sk(14,`Price: $2.500,00 | Discount: $500,00 | Tax: $160,00`),Kg()()()(),Qc(15,`po-widget`,16)(16,`p`,15),Sk(17,`$2.500,00`),Kg(),Qc(18,`p`,15),Sk(19,`$500,00(-)`),Kg(),Qc(20,`p`,15),Sk(21,`$160,00(+)`),Kg(),vu(22,`po-divider`),Qc(23,`p`,14),Sk(24,`Total: $2.160,00`),Kg()()(),vu(25,`po-divider`),Qc(26,`div`,17),FO(27,it,1,0,`po-loading-overlay`,18),Qc(28,`po-stepper`,19,0)(30,`po-step`,20)(31,`po-widget`,21),vt$1(`p-primary-action`,function(){B_(m);let o=ik(29);return U_(o.next())}),Qc(32,`form`,null,1)(34,`div`,8)(35,`po-input`,22),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.name,o)||(i.name=o),U_(o)}),Kg(),Qc(36,`po-datepicker`,23),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.birthday,o)||(i.birthday=o),U_(o)}),Kg(),Qc(37,`po-input`,24),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.document,o)||(i.document=o),U_(o)}),Kg()()()()(),Qc(38,`po-step`,25)(39,`po-widget`,26),vt$1(`p-primary-action`,function(){B_(m);let o=ik(29);return U_(o.previous())})(`p-secondary-action`,function(){B_(m);let o=ik(29);return U_(o.next())}),Qc(40,`form`,null,2)(42,`div`,8)(43,`po-input`,27),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.street,o)||(i.address.street=o),U_(o)}),Kg(),Qc(44,`po-input`,28),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.number,o)||(i.address.number=o),U_(o)}),Kg(),Qc(45,`po-input`,29),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.city,o)||(i.address.city=o),U_(o)}),Kg()(),Qc(46,`div`,8)(47,`po-input`,30),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.code,o)||(i.address.code=o),U_(o)}),Kg(),Qc(48,`po-input`,31),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.country,o)||(i.address.country=o),U_(o)}),Kg(),Qc(49,`po-input`,32),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.reference,o)||(i.address.reference=o),U_(o)}),Kg()()()()(),Qc(50,`po-step`,33)(51,`po-widget`,26),vt$1(`p-primary-action`,function(){B_(m);let o=ik(29);return U_(o.previous())})(`p-secondary-action`,function(){B_(m);let o=ik(29);return U_(o.next())}),Qc(52,`form`,null,3)(54,`div`,8)(55,`po-input`,34,4),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.cardName,o)||(i.cardName=o),U_(o)}),Kg(),Qc(57,`po-input`,35,5),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.cardCode,o)||(i.cardCode=o),U_(o)}),Kg(),Qc(59,`po-input`,36,6),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.cardValid,o)||(i.cardValid=o),U_(o)}),Kg()()()()(),Qc(61,`po-step`,37)(62,`po-widget`,26),vt$1(`p-primary-action`,function(){B_(m);let o=ik(29);return U_(o.previous())})(`p-secondary-action`,function(){B_(m);let o=ik(29);return U_(i.onConfirmStep(o))}),Qc(63,`div`,8),vu(64,`po-info`,38)(65,`po-info`,39),Kg(),Qc(66,`div`,8),vu(67,`po-info`,40)(68,`po-info`,41)(69,`po-info`,42)(70,`po-info`,43),Kg(),vu(71,`po-divider`),Qc(72,`div`,8),vu(73,`po-info`,44)(74,`po-info`,45)(75,`po-info`,46)(76,`po-info`,47)(77,`po-info`,48),Kg()()()()(),Qc(78,`po-modal`,49,7)(80,`div`,8),vu(81,`img`,50),Qc(82,`p`,51),Sk(83,`Success! ORDER NUMBER: 5767686678609-XPTOA`),Kg()()()}if(r&2){let m=ik(33),c=ik(41),o=ik(53);wg(27),VO(i.isLoadingPayment?27:-1),wg(3),Rb(`p-can-active-next-step`,i.canActiveNextStep.bind(i,m)),wg(),Rb(`p-primary-label`,i.nextLabelWidget),wg(4),Yb(`ngModel`,i.name),W0(),wg(),Yb(`ngModel`,i.birthday),W0(),wg(),Yb(`ngModel`,i.document),W0(),wg(),Rb(`p-can-active-next-step`,i.canActiveNextStep.bind(i,c)),wg(),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),wg(4),Yb(`ngModel`,i.address.street),W0(),wg(),Yb(`ngModel`,i.address.number),W0(),wg(),Yb(`ngModel`,i.address.city),W0(),wg(2),Yb(`ngModel`,i.address.code),W0(),wg(),Yb(`ngModel`,i.address.country),W0(),wg(),Yb(`ngModel`,i.address.reference),W0(),wg(),Rb(`p-can-active-next-step`,i.canActiveFinishStep.bind(i,o)),wg(),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),wg(4),Yb(`ngModel`,i.cardName),W0(),wg(2),Yb(`ngModel`,i.cardCode),W0(),wg(2),Yb(`ngModel`,i.cardValid),W0(),wg(3),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.confirmLabelWidget),wg(2),Rb(`p-value`,i.name),wg(),Rb(`p-value`,i.document),wg(2),Rb(`p-value`,i.address.street),wg(),Rb(`p-value`,i.address.number),wg(),Rb(`p-value`,i.address.city),wg(),Rb(`p-value`,i.address.country)}},dependencies:[AZ,MZ,TZ,QL,WL,Nf,tie,j4,Joe,$P,ia,Gae,Fze,bae],styles:[`.sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}`],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-sales-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-stepper-sales`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper - Sales`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="po-row">
  <po-widget class="po-md-9" p-title="Product Detail">
    <div class="po-row">
      <div class="po-lg-4">
        <img src="../../../assets/graphics/shoe.gif" width="215" height="200" />
      </div>
      <div class="po-lg-8">
        <p class="po-font-title">Nike XYZ - Red/Gold Stripes</p>
        <p class="po-font-text-large-bold">Brand: Nike | Style: Modern | Men's</p>
        <p class="po-font-text">Width: 12.5 - COD: 001254648412319</p>
        <po-divider />
        <p class="po-font-text">Price: $2.500,00 | Discount: $500,00 | Tax: $160,00</p>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-md-3" p-height="317" p-title="Price">
    <p class="po-font-text">$2.500,00</p>
    <p class="po-font-text">$500,00(-)</p>
    <p class="po-font-text">$160,00(+)</p>
    <po-divider />
    <p class="po-font-text-large-bold">Total: $2.160,00</p>
  </po-widget>
</div>

<po-divider />

<div class="sample-stepper-position-relative">
  @if (isLoadingPayment) {
    <po-loading-overlay p-text="Loading"> </po-loading-overlay>
  }

  <po-stepper #stepper p-align-center="false" p-orientation="vertical" p-step-icons p-step-size="32">
    <po-step p-label="Personal" [p-can-active-next-step]="canActiveNextStep.bind(this, personalForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.next()"
      >
        <form #personalForm="ngForm">
          <div class="po-row">
            <po-input class="po-md-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
            <po-datepicker
              class="po-md-3"
              name="birthday"
              [(ngModel)]="birthday"
              p-format="dd/mm/yyyy"
              p-label="Birthday"
              p-optional
            >
            </po-datepicker>
            <po-input class="po-md-3" name="document" [(ngModel)]="document" p-label="Document" p-optional> </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Address" [p-can-active-next-step]="canActiveNextStep.bind(this, addressForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        p-title="Purchase"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #addressForm="ngForm">
          <div class="po-row">
            <po-input
              class="po-md-6"
              name="address.street"
              [(ngModel)]="address.street"
              p-label="Street/House"
              p-required
            >
            </po-input>
            <po-input class="po-md-3" name="number" [(ngModel)]="address.number" p-label="Number" p-required>
            </po-input>
            <po-input class="po-md-3" name="city" [(ngModel)]="address.city" p-label="City" p-required> </po-input>
          </div>
          <div class="po-row">
            <po-input class="po-md-3" name="code" [(ngModel)]="address.code" p-label="Postal Code" p-required>
            </po-input>
            <po-input class="po-md-3" name="country" [(ngModel)]="address.country" p-label="Country" p-required>
            </po-input>
            <po-input class="po-md-6" name="reference" [(ngModel)]="address.reference" p-label="Reference" p-optional>
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Payment" [p-can-active-next-step]="canActiveFinishStep.bind(this, paymentForm)">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="nextLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="stepper.next()"
      >
        <form #paymentForm="ngForm">
          <div class="po-row">
            <po-input
              #cardname
              class="po-lg-6"
              name="cardName"
              [(ngModel)]="cardName"
              p-clean
              p-label="Name"
              p-required
            >
            </po-input>

            <po-input
              #cardcode
              class="po-lg-4 po-md-9"
              name="cardCode"
              [(ngModel)]="cardCode"
              p-clean
              p-label="Code"
              p-mask="9999 9999 9999 9999"
              p-mask-format-model
              p-pattern="\\d{4} \\d{4} \\d{4} \\d{4}"
              p-required
            >
            </po-input>

            <po-input
              #carddate
              class="po-lg-2 po-md-3"
              name="cardValid"
              [(ngModel)]="cardValid"
              p-clean
              p-label="Expiration Date"
              p-mask="12/99"
              p-mask-format-model
              p-pattern="\\d{2}\\/\\d{2}"
              p-required
            >
            </po-input>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Finish">
      <po-widget
        class="po-md-12"
        p-height="380"
        [p-primary-label]="previousLabelWidget"
        [p-secondary-label]="confirmLabelWidget"
        p-title="Purchase"
        (p-primary-action)="stepper.previous()"
        (p-secondary-action)="onConfirmStep(stepper)"
      >
        <div class="po-row">
          <po-info class="po-md-3" p-label="Name" [p-value]="name"> </po-info>
          <po-info class="po-md-3" p-label="Document" [p-value]="document"> </po-info>
        </div>
        <div class="po-row">
          <po-info class="po-md-3" p-label="Address" [p-value]="address.street"> </po-info>
          <po-info class="po-md-3" p-label="Number" [p-value]="address.number"> </po-info>
          <po-info class="po-md-3" p-label="City" [p-value]="address.city"> </po-info>
          <po-info class="po-md-3" p-label="Country" [p-value]="address.country"> </po-info>
        </div>
        <po-divider />
        <div class="po-row">
          <po-info class="po-md-4" p-label="Product" p-value="Nike XYZ - Red/Gold Stripes"> </po-info>
          <po-info class="po-md-2" p-label="Price" p-value="$2.500,00"> </po-info>
          <po-info class="po-md-2" p-label="Discount" p-value="$500,00"> </po-info>
          <po-info class="po-md-2" p-label="Tax" p-value="$160,00"> </po-info>
          <po-info class="po-md-2" p-label="Final Price" p-value="$2.160,00"> </po-info>
        </div>
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #successData p-title="Informations">
  <div class="po-row">
    <img class="po-offset-md-6 po-offset-xl-3" src="../../../assets/graphics/check.jpg" width="350" height="350" />
    <p class="po-offset-md-8 po-offset-xl-3 po-font-title">Success! ORDER NUMBER: 5767686678609-XPTOA</p>
  </div>
</po-modal>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalComponent, PoStepComponent, PoStepperComponent } from '@po-ui/ng-components';
import { of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';

@Component({
  selector: 'sample-po-stepper-sales',
  templateUrl: './sample-po-stepper-sales.component.html',
  styleUrls: ['./sample-po-stepper-sales.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperSalesComponent {
  @ViewChild('addressForm', { static: true }) addressForm: NgForm;
  @ViewChild('paymentForm', { static: true }) paymentForm: NgForm;
  @ViewChild('personalForm', { static: true }) personalForm: NgForm;
  @ViewChild('successData', { static: true }) successData: PoModalComponent;

  address: any;
  birthday: string;
  cardCode: string;
  cardName: string;
  cardValid: string;
  confirmLabelWidget: string = 'Confirm Purchase';
  currentActiveStep: PoStepComponent;
  document: string;
  isLoadingPayment: boolean = false;
  name: string;
  nextLabelWidget: string = 'Next Step';
  previousLabelWidget: string = 'Previous Step';

  constructor() {
    this.address = this.getAddress();
  }

  canActiveFinishStep(paymentForm: NgForm) {
    return of(paymentForm.form.valid).pipe(
      tap(() => (this.isLoadingPayment = true)),
      delay(2000),
      finalize(() => (this.isLoadingPayment = false))
    );
  }

  canActiveNextStep(form: NgForm) {
    return form.valid;
  }

  onConfirmStep(stepper: PoStepperComponent) {
    this.successData.open();

    this.resetForms();
    this.address = this.getAddress();
    stepper.first();
  }

  private getAddress() {
    return {
      city: 'Sao Paulo',
      code: '02511-000',
      country: 'Brazil',
      number: '1000',
      reference: '',
      street: 'Avenida Braz Leme'
    };
  }

  private resetForms(): void {
    this.personalForm.reset();
    this.paymentForm.reset();
  }
}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.sample-stepper-position-relative {
  position: relative;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-stepper-sales`),Kg(),vu(29,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,at,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,We],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{http=p(kI);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(s){return this.http.get(`${this.url}/getCities/${s}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(r){return new(r||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var rt=[`basicInformation`];var lt=[`academicFormation`];var st=[`professionalExperiences`];function mt(a,q){if(a&1&&(Qc(0,`div`,23)(1,`po-widget`,24)(2,`p`),Sk(3),Kg()()()),a&2){let s=q.$implicit;wg(),Rb(`p-title`,s.title),wg(2),Gb(s.description)}}function dt(a,q){if(a&1&&(Qc(0,`div`,4),vu(1,`po-divider`,23),UO(2,mt,4,2,`div`,23,BO),Kg()),a&2){let s=ek();wg(2),HO(s.professionalExperiences)}}var Ne=(()=>{class a{sampleService=p(Be);changeDetector=p(Be$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(s){let r={title:s.value.experienceTitle,description:s.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:`Maria Alice`,email:`mariaalice@gmail.com`,phone:`47988888888`,state:`sp`,city:1}}getHighSchool(){return{name:`Escola de Ensino Básico Dr Jorge Lacerda`,city:`Joinville`,conclusionYear:`2016`}}getUniversityEducation(){return{name:`Universidade Federal do Santa Catarina`,city:`Florianópolis`,conclusionYear:`2020`}}getProfessionalExperiencies(){return[{title:`Analista de desenvolvimento de software na TOTVS`,description:`Responsável pelo desenvolvimento e manutenção de sistemas do segmento de manufatura. Do ano de 2019 à 2020`}]}getCitiesByState(s){this.citiesSubscription=this.sampleService.getCitiesByState(s).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(s=>{this.stateOptions=s.items,this.getCitiesByState(this.basicInformation.state)})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-active`]],viewQuery:function(r,i){if(r&1&&Du(rt,7)(lt,7)(st,7)(Fze,5),r&2){let m;No(m=xo())&&(i.basicInformationForm=m.first),No(m=xo())&&(i.academicFormationForm=m.first),No(m=xo())&&(i.professionalExperiencesForm=m.first),No(m=xo())&&(i.stepper=m.first)}},standalone:!1,decls:32,vars:16,consts:[[`basicInformationForm`,`ngForm`],[`academicFormationForm`,`ngForm`],[`professionalExperiencesForm`,`ngForm`],[`p-label`,`Basic information`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-label`,`Phone`,`p-optional`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`city`,`p-label`,`City`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Academic formation`],[`p-label`,`High school`,1,`po-md-12`],[`name`,`highSchoolName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`University education`,1,`po-md-12`],[`name`,`universityEducationName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Professional experiences`],[`name`,`experienceTitle`,`p-label`,`Professional position`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`experienceDescripton`,`p-label`,`Describe your responsibilities`,`p-rows`,`4`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`type`,`submit`,`p-label`,`Add professional experience`,1,`po-md-4`,3,`p-click`],[1,`po-md-12`],[1,`po-md-12`,3,`p-title`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`po-container`)(1,`po-stepper`)(2,`po-step`,3)(3,`form`,null,0)(5,`div`,4)(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.name,o)||(i.basicInformation.name=o),U_(o)}),Kg(),Qc(7,`po-email`,6),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.email,o)||(i.basicInformation.email=o),U_(o)}),Kg(),Qc(8,`po-input`,7),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.phone,o)||(i.basicInformation.phone=o),U_(o)}),Kg(),Qc(9,`po-select`,8),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.state,o)||(i.basicInformation.state=o),U_(o)}),vt$1(`p-change`,function(){return i.onChangeState()}),Kg(),Qc(10,`po-select`,9),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.city,o)||(i.basicInformation.city=o),U_(o)}),Kg()()()(),Qc(11,`po-step`,10)(12,`form`,null,1)(14,`div`,4),vu(15,`po-divider`,11),Qc(16,`po-input`,12),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.highSchool.name,o)||(i.highSchool.name=o),U_(o)}),Kg(),Qc(17,`po-input`,13),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.highSchool.city,o)||(i.highSchool.city=o),U_(o)}),Kg(),Qc(18,`po-input`,14),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),U_(o)}),Kg()(),Qc(19,`div`,4),vu(20,`po-divider`,15),Qc(21,`po-input`,16),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.universityEducation.name,o)||(i.universityEducation.name=o),U_(o)}),Kg(),Qc(22,`po-input`,17),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.universityEducation.city,o)||(i.universityEducation.city=o),U_(o)}),Kg(),Qc(23,`po-input`,18),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),U_(o)}),Kg()()()(),Qc(24,`po-step`,19)(25,`form`,null,2)(27,`div`,4)(28,`po-input`,20),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.experienceTitle,o)||(i.experienceTitle=o),U_(o)}),Kg(),Qc(29,`po-textarea`,21),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.experienceDescripton,o)||(i.experienceDescripton=o),U_(o)}),Kg(),Qc(30,`po-button`,22),vt$1(`p-click`,function(){B_(m);let o=ik(26);return i.addProfessionalExperiences(o),U_(o.reset())}),Kg()()(),FO(31,dt,4,0,`div`,4),Kg()()()}r&2&&(wg(6),Yb(`ngModel`,i.basicInformation.name),W0(),wg(),Yb(`ngModel`,i.basicInformation.email),W0(),wg(),Yb(`ngModel`,i.basicInformation.phone),W0(),wg(),Yb(`ngModel`,i.basicInformation.state),Rb(`p-options`,i.stateOptions),W0(),wg(),Yb(`ngModel`,i.basicInformation.city),Rb(`p-options`,i.cityOptions),W0(),wg(6),Yb(`ngModel`,i.highSchool.name),W0(),wg(),Yb(`ngModel`,i.highSchool.city),W0(),wg(),Yb(`ngModel`,i.highSchool.conclusionYear),W0(),wg(3),Yb(`ngModel`,i.universityEducation.name),W0(),wg(),Yb(`ngModel`,i.universityEducation.city),W0(),wg(),Yb(`ngModel`,i.universityEducation.conclusionYear),W0(),wg(5),Yb(`ngModel`,i.experienceTitle),W0(),wg(),Yb(`ngModel`,i.experienceDescripton),W0(),wg(2),VO(i.professionalExperiences?31:-1))},dependencies:[AZ,MZ,TZ,QL,WL,oi,Fc,Nf,p5,j4,Koe,Zoe,Gae,Fze,bae],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-active-view`]],standalone:!1,decls:28,vars:6,consts:[[`id`,`sample-po-stepper-active`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper - Active`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-active/sample-po-stepper-active.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-container>
  <po-stepper>
    <po-step p-label="Basic information">
      <form #basicInformationForm="ngForm">
        <div class="po-row">
          <po-input class="po-md-6" name="name" [(ngModel)]="basicInformation.name" p-clean p-label="Name" p-required>
          </po-input>
          <po-email
            class="po-md-6"
            name="email"
            [(ngModel)]="basicInformation.email"
            p-clean
            p-label="Email"
            p-required
          >
          </po-email>
          <po-input class="po-md-4" name="phone" [(ngModel)]="basicInformation.phone" p-label="Phone" p-optional>
          </po-input>
          <po-select
            class="po-md-4"
            name="state"
            [(ngModel)]="basicInformation.state"
            p-label="State"
            [p-options]="stateOptions"
            (p-change)="onChangeState()"
          >
          </po-select>
          <po-select
            class="po-md-4"
            name="city"
            [(ngModel)]="basicInformation.city"
            p-label="City"
            [p-options]="cityOptions"
          >
          </po-select>
        </div>
      </form>
    </po-step>
    <po-step p-label="Academic formation">
      <form #academicFormationForm="ngForm">
        <div class="po-row">
          <po-divider class="po-md-12" p-label="High school"></po-divider>
          <po-input class="po-md-6" name="highSchoolName" [(ngModel)]="highSchool.name" p-clean p-label="Name">
          </po-input>
          <po-input class="po-md-3" name="highSchoolCity" [(ngModel)]="highSchool.city" p-clean p-label="City">
          </po-input>
          <po-input class="po-md-3" name="highSchoolPeriod" [(ngModel)]="highSchool.conclusionYear" p-label="Period">
          </po-input>
        </div>
        <div class="po-row">
          <po-divider class="po-md-12" p-label="University education"> </po-divider>
          <po-input
            class="po-md-6"
            name="universityEducationName"
            [(ngModel)]="universityEducation.name"
            p-clean
            p-label="Name"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationCity"
            [(ngModel)]="universityEducation.city"
            p-clean
            p-label="City"
          >
          </po-input>
          <po-input
            class="po-md-3"
            name="universityEducationPeriod"
            [(ngModel)]="universityEducation.conclusionYear"
            p-label="Period"
          >
          </po-input>
        </div>
      </form>
    </po-step>
    <po-step p-label="Professional experiences">
      <form #professionalExperiencesForm="ngForm">
        <div class="po-row">
          <po-input
            class="po-md-12"
            name="experienceTitle"
            [(ngModel)]="experienceTitle"
            p-label="Professional position"
          ></po-input>
          <po-textarea
            class="po-md-12"
            name="experienceDescripton"
            [(ngModel)]="experienceDescripton"
            p-label="Describe your responsibilities"
            p-rows="4"
          ></po-textarea>
          <po-button
            class="po-md-4"
            type="submit"
            p-label="Add professional experience"
            (p-click)="addProfessionalExperiences(professionalExperiencesForm); professionalExperiencesForm.reset()"
          ></po-button>
        </div>
      </form>
      @if (professionalExperiences) {
        <div class="po-row">
          <po-divider class="po-md-12"> </po-divider>
          @for (experience of professionalExperiences; track experience) {
            <div class="po-md-12">
              <po-widget class="po-md-12" [p-title]="experience.title">
                <p>{ { experience.description }}</p>
              </po-widget>
            </div>
          }
        </div>
      }
    </po-step>
  </po-stepper>
</po-container>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-stepper-active/sample-po-stepper-active.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PoSelectOption, PoStepperComponent } from '@po-ui/ng-components';
import { SamplePoStepperActiveService } from './sample-po-stepper-active.service';

@Component({
  selector: 'sample-po-stepper-active',
  templateUrl: './sample-po-stepper-active.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperActiveComponent implements OnInit, AfterViewInit, OnDestroy {
  sampleService = inject(SamplePoStepperActiveService);
  private changeDetector = inject(ChangeDetectorRef);

  @ViewChild('basicInformation', { static: true }) basicInformationForm: NgForm;
  @ViewChild('academicFormation', { static: true }) academicFormationForm: NgForm;
  @ViewChild('professionalExperiences', { static: true }) professionalExperiencesForm: NgForm;
  @ViewChild(PoStepperComponent) stepper: PoStepperComponent;

  cityOptions: Array<PoSelectOption> = [];
  stateOptions: Array<PoSelectOption> = [];
  basicInformation: any;
  highSchool: any;
  universityEducation: any;
  professionalExperiences: Array<any>;
  experienceTitle: string;
  experienceDescripton: string;
  overview: any;

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => this.activeStep());
  }

  ngOnInit(): void {
    this.basicInformation = this.getBasicInformations();
    this.highSchool = this.getHighSchool();
    this.universityEducation = this.getUniversityEducation();
    this.professionalExperiences = this.getProfessionalExperiencies();
    this.getStates();
  }

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  activeStep() {
    this.stepper.active(2);
  }

  onChangeState() {
    this.getCitiesByState(this.basicInformation.state);
  }

  addProfessionalExperiences(form: NgForm) {
    const experience = {
      title: form.value['experienceTitle'],
      description: form.value['experienceDescripton']
    };
    this.professionalExperiences = [...this.professionalExperiences, experience];
  }

  private getBasicInformations() {
    return {
      name: 'Maria Alice',
      email: 'mariaalice@gmail.com',
      phone: '47988888888',
      state: 'sp',
      city: 1
    };
  }

  private getHighSchool() {
    return {
      name: 'Escola de Ensino B\xE1sico Dr Jorge Lacerda',
      city: 'Joinville',
      conclusionYear: '2016'
    };
  }

  private getUniversityEducation() {
    return {
      name: 'Universidade Federal do Santa Catarina',
      city: 'Florian\xF3polis',
      conclusionYear: '2020'
    };
  }

  private getProfessionalExperiencies() {
    return [
      {
        title: 'Analista de desenvolvimento de software na TOTVS',
        description:
          'Respons\xE1vel pelo desenvolvimento e manuten\xE7\xE3o de sistemas do segmento de manufatura. Do ano de 2019 \xE0 2020'
      }
    ];
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.basicInformation.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.getCitiesByState(this.basicInformation.state);
    });
  }
}
`),Kg(),Qc(21,`label`,6),Sk(22,`sample-po-stepper-active/sample-po-stepper-active.service.ts`),Kg(),Qc(23,`pre`,9),Sk(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoStepperActiveService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),Kg()()()()(),Qc(25,`div`,10),vu(26,`sample-po-stepper-active`),Kg(),vu(27,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ut,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ne],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{changeDetector=p(Be$1);currentStep;stepsWithStatus=[{label:`Step 1`,status:qt.Done},{label:`Step 2`,status:qt.Active},{label:`Step 3`,status:qt.Default},{label:`Step 4`,status:qt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(s){this.currentStep=s,this.stepsWithStatus.forEach(r=>{r.status===qt.Active&&(r.status=qt.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===qt.Active&&(r.status=qt.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===qt.Disabled&&(this.stepsWithStatus[this.currentStep].status=qt.Default)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-steps`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-change-step`,`p-align-center`,`p-sequential`,`p-step`,`p-steps`]],template:function(r,i){r&1&&(Qc(0,`po-stepper`,0),vt$1(`p-change-step`,function(c){return i.onChangeStatus(c)}),Kg()),r&2&&Rb(`p-align-center`,!1)(`p-sequential`,!1)(`p-step`,i.currentStep)(`p-steps`,i.stepsWithStatus)},dependencies:[Fze],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-steps-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-stepper-steps`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper - Steps`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PoStepperItem, PoStepperStatus } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-stepper-steps',
  templateUrl: './sample-po-stepper-steps.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperStepsComponent implements AfterViewInit {
  private changeDetector = inject(ChangeDetectorRef);

  currentStep: number;
  stepsWithStatus: Array<PoStepperItem> = [
    { label: 'Step 1', status: PoStepperStatus.Done },
    { label: 'Step 2', status: PoStepperStatus.Active },
    { label: 'Step 3', status: PoStepperStatus.Default },
    { label: 'Step 4', status: PoStepperStatus.Disabled }
  ];

  ngAfterViewInit(): void {
    this.currentStep = 2;
    this.changeDetector.detectChanges();
  }

  onChangeStatus(event: number): void {
    this.currentStep = event;

    this.stepsWithStatus.forEach(step => {
      if (step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Done;
      }
    });

    this.stepsWithStatus.forEach((step, index) => {
      if (index > this.currentStep && step.status === PoStepperStatus.Active) {
        step.status = PoStepperStatus.Default;
      }
    });
    if (
      this.currentStep < this.stepsWithStatus.length &&
      this.stepsWithStatus[this.currentStep].status === PoStepperStatus.Disabled
    ) {
      this.stepsWithStatus[this.currentStep].status = PoStepperStatus.Default;
    }
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-stepper-steps`),Kg(),vu(23,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ht,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ze],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-doc`]],standalone:!1,decls:1014,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-stepper-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-step`],[`href`,`/documentation/po-stepper#stepIconsProperty`],[`href`,`https://angular.io/api/core/ViewChild`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-align-center`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-disable-click`,1,`docs-api-properties-row`],[`id`,`prop-p-step-icon-active`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-step-icon-done`,1,`docs-api-properties-row`],[`id`,`event-p-change-step`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`id`,`prop-p-sequential`,1,`docs-api-properties-row`],[`id`,`prop-p-step`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-step-icons`,1,`docs-api-properties-row`],[`id`,`stepIconsProperty`],[`id`,`prop-p-step-size`,1,`docs-api-properties-row`],[`id`,`prop-p-steps`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoStepperItem>`],[`id`,`method-active`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-first`,1,`docs-api-method-table`],[`id`,`method-next`,1,`docs-api-method-table`],[`id`,`method-previous`,1,`docs-api-method-table`],[`id`,`interface-po-stepper-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-stepper-item-icon-active`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-icon-default`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-icon-done`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-id`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperStatus`],[`id`,`enum-po-stepper-orientation`,1,`docs-api-class-name`],[`id`,`stepperOrientation`],[`id`,`enum-po-stepper-orientation-horizontal`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-orientation-vertical`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status`,1,`docs-api-class-name`],[`id`,`stepperStatus`],[`id`,`enum-po-stepper-status-active`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-default`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-disabled`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-done`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-error`,1,`docs-api-properties-row`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-step?view=doc`]],template:function(r,i){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoStepperModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-stepper`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoStepperComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O `),Qc(15,`code`),Sk(16,`po-stepper`),Kg(),Sk(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),Kg(),Qc(18,`p`),Sk(19,`Existem duas formas de utilização:`),Kg(),Qc(20,`p`),Sk(21,`1 - Usando o componente `),Qc(22,`a`,6)(23,`strong`),Sk(24,`po-step`),Kg()(),Sk(25,` para renderizar e descrever os passos.`),Kg(),Qc(26,`p`),Sk(27,`2 - Através da propriedade `),Qc(28,`code`),Sk(29,`p-steps`),Kg(),Sk(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Qc(31,`em`),Sk(32,`step`),Kg(),Sk(33,` ativo.`),Kg(),Qc(34,`p`),Sk(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Qc(36,`em`),Sk(37,`steps`),Kg(),Sk(38,`.`),Kg(),Qc(39,`p`),Sk(40,`Também é possível navegar entre os `),Qc(41,`em`),Sk(42,`steps`),Kg(),Sk(43,` através do teclado utilizando a tecla `),Qc(44,`em`),Sk(45,`tab`),Kg(),Sk(46,` e, para ativar o `),Qc(47,`em`),Sk(48,`step`),Kg(),Sk(49,` em foco basta
pressionar a tecla `),Qc(50,`em`),Sk(51,`enter`),Kg(),Sk(52,`. Além disso, é possível ativar a exibição de ícones no lugar de números nos `),Qc(53,`em`),Sk(54,`steps`),Kg(),Sk(55,` atrav\xE9s da
propriedade `),Qc(56,`a`,7)(57,`code`),Sk(58,`p-step-icons`),Kg()(),Sk(59,`.`),Kg(),Qc(60,`h4`),Sk(61,`Utilizando os métodos do componente:`),Kg(),Qc(62,`p`),Sk(63,`Para acessar os métodos do componente é necessário ter a referência do mesmo.`),Kg(),Qc(64,`p`),Sk(65,`Por exemplo, utilizando um `),Qc(66,`a`,8)(67,`strong`),Sk(68,`ViewChild`),Kg()(),Sk(69,`:`),Kg(),Qc(70,`pre`)(71,`code`),Sk(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),Kg()(),Qc(73,`p`),Sk(74,`E para acessar o método:`),Kg(),Qc(75,`pre`)(76,`code`),Sk(77,`poStepperComponent.next();
`),Kg()(),Qc(78,`h4`),Sk(79,`Boas práticas`),Kg(),Qc(80,`ul`)(81,`li`),Sk(82,`Evite `),Qc(83,`code`),Sk(84,`labels`),Kg(),Sk(85,` extensos que quebram o layout do `),Qc(86,`code`),Sk(87,`po-stepper`),Kg(),Sk(88,`, use `),Qc(89,`code`),Sk(90,`labels`),Kg(),Sk(91,` diretos, curtos e intuitivos.`),Kg(),Qc(92,`li`),Sk(93,`Utilize apenas um `),Qc(94,`code`),Sk(95,`po-stepper`),Kg(),Sk(96,` por página.`),Kg()(),Qc(97,`h4`),Sk(98,`Tokens customizáveis`),Kg(),Qc(99,`p`),Sk(100,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(101,`blockquote`)(102,`p`),Sk(103,`Para maiores informações, acesse o guia `),Qc(104,`a`,9),Sk(105,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(106,`.`),Kg()(),Qc(107,`table`)(108,`thead`)(109,`tr`)(110,`th`),Sk(111,`Propriedade`),Kg(),Qc(112,`th`),Sk(113,`Descrição`),Kg(),Qc(114,`th`),Sk(115,`Valor Padrão`),Kg()()(),Qc(116,`tbody`)(117,`tr`)(118,`td`)(119,`strong`),Sk(120,`Label`),Kg()(),vu(121,`td`)(122,`td`),Kg(),Qc(123,`tr`)(124,`td`)(125,`code`),Sk(126,`--font-family`),Kg()(),Qc(127,`td`),Sk(128,`Família tipográfica usada`),Kg(),Qc(129,`td`)(130,`code`),Sk(131,`var(--font-family-theme)`),Kg()()(),Qc(132,`tr`)(133,`td`)(134,`code`),Sk(135,`--font-size`),Kg()(),Qc(136,`td`),Sk(137,`Tamanho da fonte`),Kg(),Qc(138,`td`)(139,`code`),Sk(140,`var(--font-size-default)`),Kg()()(),Qc(141,`tr`)(142,`td`)(143,`code`),Sk(144,`--font-weight`),Kg()(),Qc(145,`td`),Sk(146,`Peso da fonte`),Kg(),Qc(147,`td`)(148,`code`),Sk(149,`var(--font-weight-normal)`),Kg()()(),Qc(150,`tr`)(151,`td`)(152,`strong`),Sk(153,`Step - Done`),Kg()(),vu(154,`td`)(155,`td`),Kg(),Qc(156,`tr`)(157,`td`)(158,`code`),Sk(159,`--text-color`),Kg()(),Qc(160,`td`),Sk(161,`Cor do texto no step concluído`),Kg(),Qc(162,`td`)(163,`code`),Sk(164,`var(--color-neutral-dark-70)`),Kg()()(),Qc(165,`tr`)(166,`td`)(167,`code`),Sk(168,`--color-icon-done`),Kg()(),Qc(169,`td`),Sk(170,`Cor do ícone no step concluído`),Kg(),Qc(171,`td`)(172,`code`),Sk(173,`var(--color-neutral-dark-70)`),Kg()()(),Qc(174,`tr`)(175,`td`)(176,`code`),Sk(177,`--background-done`),Kg()(),Qc(178,`td`),Sk(179,`Cor de fundo no step concluído`),Kg(),Qc(180,`td`)(181,`code`),Sk(182,`var(--color-neutral-light-00)`),Kg()()(),Qc(183,`tr`)(184,`td`)(185,`strong`),Sk(186,`Line - Done`),Kg()(),vu(187,`td`)(188,`td`),Kg(),Qc(189,`tr`)(190,`td`)(191,`code`),Sk(192,`--color-line-done`),Kg()(),Qc(193,`td`),Sk(194,`Cor da linha no step concluído`),Kg(),Qc(195,`td`)(196,`code`),Sk(197,`var(--color-neutral-mid-40)`),Kg()()(),Qc(198,`tr`)(199,`td`)(200,`strong`),Sk(201,`Step - Current`),Kg()(),vu(202,`td`)(203,`td`),Kg(),Qc(204,`tr`)(205,`td`)(206,`code`),Sk(207,`--color-icon-current`),Kg()(),Qc(208,`td`),Sk(209,`Cor do ícone no step atual`),Kg(),Qc(210,`td`)(211,`code`),Sk(212,`var(--color-neutral-light-00)`),Kg()()(),Qc(213,`tr`)(214,`td`)(215,`code`),Sk(216,`--background-current`),Kg()(),Qc(217,`td`),Sk(218,`Cor de fundo no step atual`),Kg(),Qc(219,`td`)(220,`code`),Sk(221,`var(--color-action-default)`),Kg()()(),Qc(222,`tr`)(223,`td`)(224,`code`),Sk(225,`--font-weight-current`),Kg()(),Qc(226,`td`),Sk(227,`Peso da fonte no step atual`),Kg(),Qc(228,`td`)(229,`code`),Sk(230,`var(--font-weight-bold)`),Kg()()(),Qc(231,`tr`)(232,`td`)(233,`strong`),Sk(234,`Step - Next`),Kg()(),vu(235,`td`)(236,`td`),Kg(),Qc(237,`tr`)(238,`td`)(239,`code`),Sk(240,`--font-size-circle`),Kg()(),Qc(241,`td`),Sk(242,`Tamanho da fonte no círculo do próximo step`),Kg(),Qc(243,`td`)(244,`code`),Sk(245,`var(--font-size-sm)`),Kg()()(),Qc(246,`tr`)(247,`td`)(248,`code`),Sk(249,`--color-next`),Kg()(),Qc(250,`td`),Sk(251,`Cor do ícone no próximo step`),Kg(),Qc(252,`td`)(253,`code`),Sk(254,`var(--color-action-disabled)`),Kg()()(),Qc(255,`tr`)(256,`td`)(257,`code`),Sk(258,`--text-color-next`),Kg()(),Qc(259,`td`),Sk(260,`Cor do texto no próximo step`),Kg(),Qc(261,`td`)(262,`code`),Sk(263,`var(--color-neutral-light-30)`),Kg()()(),Qc(264,`tr`)(265,`td`)(266,`strong`),Sk(267,`Focused`),Kg()(),vu(268,`td`)(269,`td`),Kg(),Qc(270,`tr`)(271,`td`)(272,`code`),Sk(273,`--outline-color-focused`),Kg()(),Qc(274,`td`),Sk(275,`Cor do outline do estado de focus`),Kg(),Qc(276,`td`)(277,`code`),Sk(278,`var(--color-action-focus)`),Kg()()()()()(),Qc(279,`div`,10)(280,`h4`,11),Sk(281,`Seletor`),Kg(),Qc(282,`pre`,12),Sk(283,`<po-stepper
    p-align-center="boolean"
    p-disable-click="boolean"
    p-step-icon-active="string | TemplateRef<void>"
    p-step-icon-done="string | TemplateRef<void>"
    (p-change-step)="EventEmitter"
    p-orientation="PoStepperOrientation"
    p-sequential="boolean"
    p-step="number"
    p-step-icons="boolean"
    p-step-size="number"
    p-steps="Array<PoStepperItem>" >
</po-stepper>
`),Kg()(),Qc(284,`h4`,13),Sk(285,`Propriedades`),Kg(),Qc(286,`table`,14)(287,`tr`,15)(288,`th`,16),Sk(289,`Nome`),Kg(),Qc(290,`th`,16),Sk(291,`Tipo`),Kg(),Qc(292,`th`,16),Sk(293,`Padrão`),Kg(),Qc(294,`th`,16),Sk(295,`Descrição`),Kg()(),Qc(296,`tr`,17)(297,`td`,18)(298,`div`,19)(299,`span`,20),Sk(300,` p-align-center`),vu(301,`br`),Kg()()(),Qc(302,`td`,21)(303,`code`,22),Sk(304,`boolean`),Kg()(),Qc(305,`td`,23)(306,`p`)(307,`code`),Sk(308,`true`),Kg()()(),Qc(309,`td`,24)(310,`em`)(311,`strong`),Sk(312,`(opcional)`),Kg()(),Qc(313,`p`),Sk(314,`Define o alinhamento dos `),Qc(315,`em`),Sk(316,`steps`),Kg(),Sk(317,` e `),Qc(318,`em`),Sk(319,`labels`),Kg(),Sk(320,` no `),Qc(321,`em`),Sk(322,`stepper`),Kg(),Sk(323,`, dependendo da orientação.`),Kg(),Qc(324,`ul`)(325,`li`),Sk(326,`Quando `),Qc(327,`code`),Sk(328,`true`),Kg(),Sk(329,`, ficam centralizados em ambas as orientações (horizontal e vertical).`),Kg(),Qc(330,`li`),Sk(331,`Quando `),Qc(332,`code`),Sk(333,`false`),Kg(),Sk(334,`, ficam alinhados à esquerda na orientação horizontal e ao topo na orientação vertical.`),Kg()()()(),Qc(335,`tr`,25)(336,`td`,18)(337,`div`,19)(338,`span`,20),Sk(339,` p-disable-click`),vu(340,`br`),Kg()()(),Qc(341,`td`,21)(342,`code`,22),Sk(343,`boolean`),Kg()(),Qc(344,`td`,23)(345,`p`)(346,`code`),Sk(347,`false`),Kg()()(),Qc(348,`td`,24)(349,`em`)(350,`strong`),Sk(351,`(opcional)`),Kg()(),Qc(352,`p`),Sk(353,`Desabilita o clique nos steps.`),Kg()()(),Qc(354,`tr`,26)(355,`td`,18)(356,`div`,19)(357,`span`,20),Sk(358,` p-step-icon-active`),vu(359,`br`),Kg()()(),Qc(360,`td`,21)(361,`code`,27),Sk(362,`string `),Kg(),Qc(363,`code`,28),Sk(364,` TemplateRef<void>`),Kg()(),Qc(365,`td`,23)(366,`p`)(367,`code`),Sk(368,`po-icon-edit`),Kg()()(),Qc(369,`td`,24)(370,`em`)(371,`strong`),Sk(372,`(opcional)`),Kg()(),Qc(373,`p`),Sk(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Qc(375,`a`,29),Sk(376,`Biblioteca de ícones`),Kg(),Sk(377,`.`),Kg(),Qc(378,`pre`)(379,`code`),Sk(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),Kg()(),Qc(381,`p`),Sk(382,`Para customizar o ícone através do `),Qc(383,`code`),Sk(384,`TemplateRef`),Kg(),Sk(385,`, veja a documentação da propriedade `),Qc(386,`code`),Sk(387,`p-step-icon-done`),Kg(),Sk(388,`.`),Kg(),Qc(389,`blockquote`)(390,`p`),Sk(391,`Deve-se usar `),Qc(392,`code`),Sk(393,`font-size: inherit`),Kg(),Sk(394,` para ajustar ícones que não se ajustam automaticamente.`),Kg()()()(),Qc(395,`tr`,30)(396,`td`,18)(397,`div`,19)(398,`span`,20),Sk(399,` p-step-icon-done`),vu(400,`br`),Kg()()(),Qc(401,`td`,21)(402,`code`,27),Sk(403,`string `),Kg(),Qc(404,`code`,28),Sk(405,` TemplateRef<void>`),Kg()(),Qc(406,`td`,23)(407,`p`)(408,`code`),Sk(409,`po-icon-ok`),Kg()()(),Qc(410,`td`,24)(411,`em`)(412,`strong`),Sk(413,`(opcional)`),Kg()(),Qc(414,`p`),Sk(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Qc(416,`a`,29),Sk(417,`Biblioteca de ícones`),Kg()(),Qc(418,`pre`)(419,`code`),Sk(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),Kg()(),Qc(421,`p`),Sk(422,`Outra opção seria a customização do ícone através do `),Qc(423,`code`),Sk(424,`TemplateRef`),Kg(),Sk(425,`, conforme exemplo abaixo:`),Kg(),Qc(426,`pre`)(427,`code`),Sk(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),Kg()(),Qc(429,`blockquote`)(430,`p`),Sk(431,`Deve-se usar `),Qc(432,`code`),Sk(433,`font-size: inherit`),Kg(),Sk(434,` para ajustar ícones que não se ajustam automaticamente.`),Kg()()()(),Qc(435,`tr`,31)(436,`td`,18)(437,`div`,32)(438,`span`,33),Sk(439,` (p-change-step)`),vu(440,`br`),Kg()()(),Qc(441,`td`,21)(442,`code`,34),Sk(443,`EventEmitter`),Kg()(),Qc(444,`td`,23),Sk(445,`-`),Kg(),Qc(446,`td`,24)(447,`p`),Sk(448,`Ação que será executada quando o usuário mudar o passo do `),Qc(449,`code`),Sk(450,`po-stepper`),Kg(),Sk(451,`.`),Kg()()(),Qc(452,`tr`,35)(453,`td`,18)(454,`div`,19)(455,`span`,20),Sk(456,` p-orientation`),vu(457,`br`),Kg()()(),Qc(458,`td`,21)(459,`code`,36),Sk(460,`PoStepperOrientation`),Kg()(),Qc(461,`td`,23)(462,`p`)(463,`code`),Sk(464,`PoStepperOrientation.Horizontal`),Kg()()(),Qc(465,`td`,24)(466,`em`)(467,`strong`),Sk(468,`(opcional)`),Kg()(),Qc(469,`p`),Sk(470,`Define a orientação de exibição do `),Qc(471,`code`),Sk(472,`po-stepper`),Kg(),Sk(473,`.`),Kg(),Qc(474,`blockquote`)(475,`p`),Sk(476,`Veja os valores válidos no `),Qc(477,`em`),Sk(478,`enum`),Kg(),Qc(479,`a`,37),Sk(480,`PoStepperOrientation`),Kg(),Sk(481,`.`),Kg()()()(),Qc(482,`tr`,38)(483,`td`,18)(484,`div`,19)(485,`span`,20),Sk(486,` p-sequential`),vu(487,`br`),Kg()()(),Qc(488,`td`,21)(489,`code`,22),Sk(490,`boolean`),Kg()(),Qc(491,`td`,23)(492,`p`)(493,`code`),Sk(494,`true`),Kg()()(),Qc(495,`td`,24)(496,`em`)(497,`strong`),Sk(498,`(opcional)`),Kg()(),Qc(499,`p`),Sk(500,`Define se o `),Qc(501,`code`),Sk(502,`po-stepper`),Kg(),Sk(503,` será sequencial ou aleatório.`),Kg(),Qc(504,`blockquote`)(505,`p`),Sk(506,`Ao utilizar o componente `),Qc(507,`a`,6)(508,`strong`),Sk(509,`po-step`),Kg()(),Sk(510,`, o valor desta propriedade sempre será verdadeiro.`),Kg()()()(),Qc(511,`tr`,39)(512,`td`,18)(513,`div`,19)(514,`span`,20),Sk(515,` p-step`),vu(516,`br`),Kg()()(),Qc(517,`td`,21)(518,`code`,40),Sk(519,`number`),Kg()(),Qc(520,`td`,23)(521,`p`)(522,`code`),Sk(523,`1`),Kg()()(),Qc(524,`td`,24)(525,`em`)(526,`strong`),Sk(527,`(opcional)`),Kg()(),Qc(528,`p`),Sk(529,`Controla o passo atual do `),Qc(530,`code`),Sk(531,`po-stepper`),Kg(),Sk(532,`.`),Kg(),Qc(533,`blockquote`)(534,`p`),Sk(535,`Ao utilizar esta propriedade e também utilizar o componente `),Qc(536,`a`,6)(537,`strong`),Sk(538,`po-step`),Kg()(),Sk(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Qc(540,`a`,6)(541,`strong`),Sk(542,`po-step`),Kg()(),Sk(543,`.`),Kg()()()(),Qc(544,`tr`,41)(545,`td`,18)(546,`div`,19)(547,`span`,20),Sk(548,` p-step-icons`),vu(549,`br`),Kg()()(),Qc(550,`td`,21)(551,`code`,22),Sk(552,`boolean`),Kg()(),Qc(553,`td`,23)(554,`p`)(555,`code`),Sk(556,`false`),Kg()()(),Qc(557,`td`,24)(558,`em`)(559,`strong`),Sk(560,`(opcional)`),Kg()(),Qc(561,`p`),vu(562,`a`,42),Kg(),Qc(563,`p`),Sk(564,`Habilita a exibição de ícone ao invés de número no centro do círculo dos `),Qc(565,`em`),Sk(566,`steps`),Kg(),Sk(567,`.`),Kg()()(),Qc(568,`tr`,43)(569,`td`,18)(570,`div`,19)(571,`span`,20),Sk(572,` p-step-size`),vu(573,`br`),Kg()()(),Qc(574,`td`,21)(575,`code`,40),Sk(576,`number`),Kg()(),Qc(577,`td`,23)(578,`p`)(579,`code`),Sk(580,`24`),Kg()()(),Qc(581,`td`,24)(582,`em`)(583,`strong`),Sk(584,`(opcional)`),Kg()(),Qc(585,`p`),Sk(586,`Define o tamanho dos `),Qc(587,`em`),Sk(588,`steps`),Kg(),Sk(589,` em `),Qc(590,`em`),Sk(591,`pixels`),Kg(),Sk(592,`, possibilitando um maior destaque.`),Kg(),Qc(593,`p`),Sk(594,`O valor informado deve ser entre `),Qc(595,`code`),Sk(596,`24`),Kg(),Sk(597,` e `),Qc(598,`code`),Sk(599,`64`),Kg(),Sk(600,`.`),Kg(),Qc(601,`blockquote`)(602,`p`),Sk(603,`Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor `),Qc(604,`em`),Sk(605,`default`),Kg(),Sk(606,`.`),Kg()()()(),Qc(607,`tr`,44)(608,`td`,18)(609,`div`,19)(610,`span`,20),Sk(611,` p-steps`),vu(612,`br`),Kg()()(),Qc(613,`td`,21)(614,`code`,45),Sk(615,`Array<PoStepperItem>`),Kg()(),Qc(616,`td`,23),Sk(617,`-`),Kg(),Qc(618,`td`,24)(619,`em`)(620,`strong`),Sk(621,`(opcional)`),Kg()(),Qc(622,`p`),Sk(623,`Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg(),Qc(624,`blockquote`)(625,`p`),Sk(626,`Ao utilizar esta propriedade e também utilizar o componente `),Qc(627,`a`,6)(628,`strong`),Sk(629,`po-step`),Kg()(),Sk(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Qc(631,`a`,6)(632,`strong`),Sk(633,`po-step`),Kg()(),Sk(634,`.`),Kg()()()()(),Qc(635,`h3`,13),Sk(636,`Métodos`),Kg(),Qc(637,`table`,46)(638,`tr`,47)(639,`th`,48)(640,`div`,19)(641,`h4`)(642,`span`,20),Sk(643,` active `),Kg()()()()(),Qc(644,`tr`,24)(645,`td`,24)(646,`p`),Sk(647,`Altera o status do `),Qc(648,`em`),Sk(649,`step`),Kg(),Sk(650,` para ativo.`),Kg(),Qc(651,`blockquote`)(652,`p`),Sk(653,`Este método é valido apenas para as implementações que utilizam o componente `),Qc(654,`a`,6)(655,`strong`),Sk(656,`po-step`),Kg()(),Sk(657,`.`),Kg()()()()(),Qc(658,`h5`)(659,`b`),Sk(660,`Parâmetros`),Kg()(),Qc(661,`table`,14)(662,`tr`,15)(663,`th`,16),Sk(664,`Nome`),Kg(),Qc(665,`th`,16),Sk(666,`Tipo`),Kg(),Qc(667,`th`,16),Sk(668,`Descrição`),Kg()(),Qc(669,`tr`,47)(670,`td`,18),Sk(671,` index`),Kg(),Qc(672,`td`,21)(673,`code`,49),Sk(674,` number `),Kg()(),Qc(675,`td`,24)(676,`p`),Sk(677,`Índice do `),Qc(678,`code`),Sk(679,`po-step`),Kg(),Sk(680,` que se deseja ativar.`),Kg()()()(),vu(681,`br`),Qc(682,`table`,50)(683,`tr`,47)(684,`th`,48)(685,`div`,19)(686,`h4`)(687,`span`,20),Sk(688,` first `),Kg()()()()(),Qc(689,`tr`,24)(690,`td`,24)(691,`p`),Sk(692,`Ativa o primeiro `),Qc(693,`em`),Sk(694,`step`),Kg(),Sk(695,`.`),Kg(),Qc(696,`blockquote`)(697,`p`),Sk(698,`Este método é valido apenas para as implementações que utilizam o componente `),Qc(699,`a`,6)(700,`strong`),Sk(701,`po-step`),Kg()(),Sk(702,`.`),Kg()()()()(),vu(703,`br`),Qc(704,`table`,51)(705,`tr`,47)(706,`th`,48)(707,`div`,19)(708,`h4`)(709,`span`,20),Sk(710,` next `),Kg()()()()(),Qc(711,`tr`,24)(712,`td`,24)(713,`p`),Sk(714,`Ativa o próximo `),Qc(715,`em`),Sk(716,`step`),Kg(),Sk(717,`.`),Kg(),Qc(718,`blockquote`)(719,`p`),Sk(720,`Este método é valido apenas para as implementações que utilizam o componente `),Qc(721,`a`,6)(722,`strong`),Sk(723,`po-step`),Kg()(),Sk(724,`.`),Kg()()()()(),vu(725,`br`),Qc(726,`table`,52)(727,`tr`,47)(728,`th`,48)(729,`div`,19)(730,`h4`)(731,`span`,20),Sk(732,` previous `),Kg()()()()(),Qc(733,`tr`,24)(734,`td`,24)(735,`p`),Sk(736,`Ativa o `),Qc(737,`em`),Sk(738,`step`),Kg(),Sk(739,` anterior.`),Kg(),Qc(740,`blockquote`)(741,`p`),Sk(742,`Este método é valido apenas para as implementações que utilizam o componente `),Qc(743,`a`,6)(744,`strong`),Sk(745,`po-step`),Kg()(),Sk(746,`.`),Kg()()()()(),vu(747,`br`),Qc(748,`h3`),Sk(749,`Interfaces`),Kg(),Qc(750,`h4`,53)(751,`code`,5),Sk(752,`PoStepperItem`),Kg()(),Qc(753,`div`,2)(754,`p`),Sk(755,`Interface para definição dos `),Qc(756,`em`),Sk(757,`steps`),Kg(),Sk(758,` do componente `),Qc(759,`code`),Sk(760,`po-stepper`),Kg(),Sk(761,` quando utilizada a propriedade `),Qc(762,`code`),Sk(763,`p-steps`),Kg(),Sk(764,`.`),Kg()(),Qc(765,`h4`,13),Sk(766,`Propriedades`),Kg(),Qc(767,`table`,14)(768,`tr`,15)(769,`th`,16),Sk(770,`Nome`),Kg(),Qc(771,`th`,16),Sk(772,`Tipo`),Kg(),Qc(773,`th`,16),Sk(774,`Descrição`),Kg()(),Qc(775,`tr`,54)(776,`td`,18)(777,`div`,19)(778,`span`,20),Sk(779,` iconActive`),vu(780,`br`),Kg()()(),Qc(781,`td`,21)(782,`code`,27),Sk(783,`string `),Kg(),Qc(784,`code`,28),Sk(785,` TemplateRef<void>`),Kg()(),Qc(786,`td`,24)(787,`em`)(788,`strong`),Sk(789,`(opcional)`),Kg()(),Qc(790,`p`),Sk(791,`Define o ícone do `),Qc(792,`em`),Sk(793,`step`),Kg(),Sk(794,` ativo.`),Kg()()(),Qc(795,`tr`,55)(796,`td`,18)(797,`div`,19)(798,`span`,20),Sk(799,` iconDefault`),vu(800,`br`),Kg()()(),Qc(801,`td`,21)(802,`code`,27),Sk(803,`string `),Kg(),Qc(804,`code`,28),Sk(805,` TemplateRef<void>`),Kg()(),Qc(806,`td`,24)(807,`em`)(808,`strong`),Sk(809,`(opcional)`),Kg()(),Qc(810,`p`),Sk(811,`Define o ícone do `),Qc(812,`em`),Sk(813,`step`),Kg(),Sk(814,` default.`),Kg()()(),Qc(815,`tr`,56)(816,`td`,18)(817,`div`,19)(818,`span`,20),Sk(819,` iconDone`),vu(820,`br`),Kg()()(),Qc(821,`td`,21)(822,`code`,27),Sk(823,`string `),Kg(),Qc(824,`code`,28),Sk(825,` TemplateRef<void>`),Kg()(),Qc(826,`td`,24)(827,`em`)(828,`strong`),Sk(829,`(opcional)`),Kg()(),Qc(830,`p`),Sk(831,`Define o ícone do `),Qc(832,`em`),Sk(833,`step`),Kg(),Sk(834,` concluído.`),Kg()()(),Qc(835,`tr`,57)(836,`td`,18)(837,`div`,19)(838,`span`,20),Sk(839,` id`),vu(840,`br`),Kg()()(),Qc(841,`td`,21)(842,`code`,27),Sk(843,`string`),Kg()(),Qc(844,`td`,24)(845,`em`)(846,`strong`),Sk(847,`(opcional)`),Kg()(),Qc(848,`p`),Sk(849,`Identificador único do step.`),Kg()()(),Qc(850,`tr`,58)(851,`td`,18)(852,`div`,19)(853,`span`,20),Sk(854,` label`),vu(855,`br`),Kg()()(),Qc(856,`td`,21)(857,`code`,27),Sk(858,`string`),Kg()(),Qc(859,`td`,24)(860,`em`)(861,`strong`),Sk(862,`(opcional)`),Kg()(),Qc(863,`p`),Sk(864,`Texto do item do stepper.`),Kg()()(),Qc(865,`tr`,59)(866,`td`,18)(867,`div`,19)(868,`span`,20),Sk(869,` status`),vu(870,`br`),Kg()()(),Qc(871,`td`,21)(872,`code`,60),Sk(873,`PoStepperStatus`),Kg()(),Qc(874,`td`,24)(875,`em`)(876,`strong`),Sk(877,`(opcional)`),Kg()(),Qc(878,`p`),Sk(879,`Define o estado de exibição do `),Qc(880,`em`),Sk(881,`step`),Kg(),Sk(882,`.`),Kg()()()(),Qc(883,`h3`),Sk(884,`Enums`),Kg(),Qc(885,`h4`,61)(886,`code`,5),Sk(887,`PoStepperOrientation`),Kg()(),Qc(888,`div`,2)(889,`p`),vu(890,`a`,62),Kg(),Qc(891,`p`)(892,`em`),Sk(893,`Enums`),Kg(),Sk(894,` para definição da orientação do `),Qc(895,`code`),Sk(896,`po-stepper`),Kg(),Sk(897,`.`),Kg()(),Qc(898,`h4`,13),Sk(899,`Propriedades`),Kg(),Qc(900,`table`,14)(901,`tr`,15)(902,`th`,16),Sk(903,`Nome`),Kg(),Qc(904,`th`,16),Sk(905,`Descrição`),Kg()(),Qc(906,`tr`,63)(907,`td`,18)(908,`div`,19)(909,`span`,20),Sk(910,` Horizontal`),vu(911,`br`),Kg()()(),Qc(912,`td`,24)(913,`p`),Sk(914,`Define a exibição do componente na horizontal.`),Kg()()(),Qc(915,`tr`,64)(916,`td`,18)(917,`div`,19)(918,`span`,20),Sk(919,` Vertical`),vu(920,`br`),Kg()()(),Qc(921,`td`,24)(922,`p`),Sk(923,`Define a exibição do componente na vertical.`),Kg()()()(),Qc(924,`h4`,65)(925,`code`,5),Sk(926,`PoStepperStatus`),Kg()(),Qc(927,`div`,2)(928,`p`),vu(929,`a`,66),Kg(),Qc(930,`p`)(931,`em`),Sk(932,`Enums`),Kg(),Sk(933,` para os status do `),Qc(934,`code`),Sk(935,`po-stepper`),Kg(),Sk(936,` quando utilizada a propriedade `),Qc(937,`code`),Sk(938,`p-steps`),Kg(),Sk(939,`.`),Kg()(),Qc(940,`h4`,13),Sk(941,`Propriedades`),Kg(),Qc(942,`table`,14)(943,`tr`,15)(944,`th`,16),Sk(945,`Nome`),Kg(),Qc(946,`th`,16),Sk(947,`Descrição`),Kg()(),Qc(948,`tr`,67)(949,`td`,18)(950,`div`,19)(951,`span`,20),Sk(952,` Active`),vu(953,`br`),Kg()()(),Qc(954,`td`,24)(955,`p`),Sk(956,`Define o estado do `),Qc(957,`em`),Sk(958,`step`),Kg(),Sk(959,` como ativo.`),Kg()()(),Qc(960,`tr`,68)(961,`td`,18)(962,`div`,19)(963,`span`,20),Sk(964,` Default`),vu(965,`br`),Kg()()(),Qc(966,`td`,24)(967,`p`),Sk(968,`Define o estado do `),Qc(969,`em`),Sk(970,`step`),Kg(),Sk(971,` como padrão.`),Kg()()(),Qc(972,`tr`,69)(973,`td`,18)(974,`div`,19)(975,`span`,20),Sk(976,` Disabled`),vu(977,`br`),Kg()()(),Qc(978,`td`,24)(979,`p`),Sk(980,`Define o estado do `),Qc(981,`em`),Sk(982,`step`),Kg(),Sk(983,` como desabilitado.`),Kg()()(),Qc(984,`tr`,70)(985,`td`,18)(986,`div`,19)(987,`span`,20),Sk(988,` Done`),vu(989,`br`),Kg()()(),Qc(990,`td`,24)(991,`p`),Sk(992,`Define o estado do `),Qc(993,`em`),Sk(994,`step`),Kg(),Sk(995,` como concluído.`),Kg()()(),Qc(996,`tr`,71)(997,`td`,18)(998,`div`,19)(999,`span`,20),Sk(1e3,` Error`),vu(1001,`br`),Kg()()(),Qc(1002,`td`,24)(1003,`p`),Sk(1004,`Define o estado do `),Qc(1005,`em`),Sk(1006,`step`),Kg(),Sk(1007,` com erro.`),Kg()()()(),Qc(1008,`h3`,72),Sk(1009,`Subcomponentes`),Kg(),Qc(1010,`ul`,73)(1011,`li`)(1012,`a`,74),Sk(1013,`Step`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function bt(a,q){if(a&1){let s=YO();Qc(0,`po-tab`,4),vt$1(`p-click`,function(){B_(s);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-stepper-basic-view`)(2,`sample-po-stepper-labs-view`)(3,`sample-po-stepper-sales-view`)(4,`sample-po-stepper-active-view`)(5,`sample-po-stepper-steps-view`),Kg()}if(a&2){let s=ek();Rb(`p-active`,s.activeTab===`web`)}}var vt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,r){this.route=s,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let r=s.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Stepper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,bt,6,1,`po-tab`,2),Qc(3,`po-tab`,3),vt$1(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-stepper-doc`),Kg()()()),r&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Ve,Ae,Le,qe,Oe,Re],encapsulation:2,changeDetection:1})}return a})()}];var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(vt),GV]})}return a})();var bn=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,je]})}return a})();export{bn as DocPoStepperModule};
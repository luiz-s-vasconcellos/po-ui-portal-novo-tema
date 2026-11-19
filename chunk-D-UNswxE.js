import{m as P,p as M}from"./main-DMA7KEAR.js";import{$a as tt,Ar as I,Ci as UO,D as Gae,Da as kI,Dn as qt,Ea as k,F as Joe,G as Nf,Ii as WL,Ir as Kb,It as bae,L as Koe,Lr as Kg,Nn as tie,Oi as VO,Or as HO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,T as Fze,Ti as U_,Tr as Gb,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,di as Qi,do as xo,gi as Rb,go as z0,io as vu,ji as Vk,ki as V_,kt as Zoe,li as Qc,lr as Be$1,lt as Ss,n as $P,na as de,oa as e_,oo as wg,pi as R,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,sr as BO,ua as ge,va as ik,vi as Sk,w as Fc,wr as GV,xi as Tk,xn as p5,xr as FO,yn as oae,yr as Du}from"./chunk-DtUf9FxZ.js";import{t as r}from"./chunk-zystk1pz.js";var ke=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-basic`]],standalone:!1,decls:4,vars:1,consts:[[3,`p-align-center`],[`p-label`,`Step 1`],[`p-label`,`Step 2`],[`p-label`,`Step 3`]],template:function(r,i){r&1&&(Qc(0,`po-stepper`,0),vu(1,`po-step`,1)(2,`po-step`,2)(3,`po-step`,3),Kg()),r&2&&Rb(`p-align-center`,!1)},dependencies:[Gae,Fze],encapsulation:2,changeDetection:1})}return p})();var Je=p=>({"docs-sample-code-tabs":p});var Ae=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-stepper-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-stepper-basic`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Je,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ke],encapsulation:2,changeDetection:1})}return p})();function Ke(p,N){if(p&1&&(Qc(0,`po-step`,3)(1,`h2`),Sk(2),Kg()()),p&2){let s=N.$implicit;Rb(`p-label`,s.label)(`p-icon-default`,s.iconDefault),wg(2),tm(`Step Content `,s.label)}}var Le=(()=>{class p$1{changeDetector=p(Be$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:`Properties`,property:`stepSize`,label:`Step Size`,type:`number`,maxValue:64,minValue:24,gridLgColumns:2},{property:`orientation`,options:[{value:`vertical`,label:`Vertical`,checked:!0},{value:`horizontal`,label:`Horizontal`}],gridLgColumns:4},{label:`Align Steps Center`,gridLgColumns:3,property:`alignCenter`,type:`boolean`},{label:`Step icons`,gridLgColumns:3,property:`stepIcons`,type:`boolean`},{label:`Step Icon Active Custom`,help:`Ex.: an an-pencil-simple-line`,gridLgColumns:4,property:`iconActive`},{label:`Step Icon Done Custom`,help:`Ex.: an an-check-fat`,gridLgColumns:4,property:`iconDone`},{property:`disabledClick`,label:`Disabled click`,type:`boolean`}];stepItemFields=[{divider:`Step form`,property:`label`,label:`Step Label`,gridMdColumns:6,gridXlColumns:6},{property:`iconDefault`,label:`Step Icon Default Custom`,help:`Ex.: an an-question`,gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore()}addItem(s){this.steps=[...this.steps,r({},s)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(s){this.event=s,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation=`horizontal`,this.properties.alignCenter=!1}static ɵfac=function(r){return new(r||p$1)};static ɵcmp=Jn({type:p$1,selectors:[[`sample-po-stepper-labs`]],standalone:!1,decls:17,vars:13,consts:[[`stepForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change-step`,`p-align-center`,`p-orientation`,`p-step-icons`,`p-step-size`,`p-step-icon-active`,`p-step-icon-done`,`p-disable-click`],[3,`p-label`,`p-icon-default`],[`p-label`,`Event`,3,`p-value`],[3,`p-group-form`,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Step`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`po-container`)(1,`po-stepper`,2),vt(`p-change-step`,function(){return i.changeStep(`change`)}),UO(2,Ke,3,3,`po-step`,3,BO),Kg(),vu(4,`po-divider`)(5,`po-info`,4),Qc(6,`form`,null,0),vu(8,`po-dynamic-form`,5),Qc(9,`div`,6)(10,`po-button`,7),vt(`p-click`,function(){B_(m);let o=ik(7);return i.addItem(i.stepItem),U_(o.reset())}),Kg()()(),Qc(11,`form`,null,1),vu(13,`po-dynamic-form`,5)(14,`po-divider`),Qc(15,`div`,6)(16,`po-button`,8),vt(`p-click`,function(){B_(m);let o=ik(7),Xe=ik(12);return i.restore(),Xe.reset(),U_(o.reset())}),Kg()()()()}if(r&2){let m=ik(7);wg(),Rb(`p-align-center`,i.properties.alignCenter)(`p-orientation`,i.properties.orientation)(`p-step-icons`,i.properties.stepIcons)(`p-step-size`,i.properties.stepSize)(`p-step-icon-active`,i.properties.iconActive)(`p-step-icon-done`,i.properties.iconDone)(`p-disable-click`,i.properties.disabledClick),wg(),HO(i.steps),wg(3),Rb(`p-value`,i.event),wg(3),Rb(`p-fields`,i.stepItemFields)(`p-value`,i.stepItem),wg(2),Rb(`p-disabled`,m.invalid),wg(3),Rb(`p-fields`,i.propertiesFields)(`p-value`,i.properties)}},dependencies:[AZ,TZ,WL,oi,Fc,Nf,oae,Joe,Gae,Fze],encapsulation:2,changeDetection:1})}return p$1})();var et=p=>({"docs-sample-code-tabs":p});var Be=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-labs-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-stepper-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container>
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
        <h2>Step Content `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` step.label `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</h2>
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
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-stepper-labs`),Kg(),vu(31,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,et,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Le],encapsulation:2,changeDetection:1})}return p})();var nt=[`addressForm`];var it=[`paymentForm`];var ot=[`personalForm`];var pt=[`successData`];function at(p,N){p&1&&vu(0,`po-loading-overlay`,18)}var qe=(()=>{class p{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget=`Confirm Purchase`;currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget=`Next Step`;previousLabelWidget=`Previous Step`;constructor(){this.address=this.getAddress()}canActiveFinishStep(s){return k(s.form.valid).pipe(tt(()=>this.isLoadingPayment=!0),e_(2e3),Qi(()=>this.isLoadingPayment=!1))}canActiveNextStep(s){return s.valid}onConfirmStep(s){this.successData.open(),this.resetForms(),this.address=this.getAddress(),s.first()}getAddress(){return{city:`Sao Paulo`,code:`02511-000`,country:`Brazil`,number:`1000`,reference:``,street:`Avenida Braz Leme`}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-sales`]],viewQuery:function(r,i){if(r&1&&Du(nt,7)(it,7)(ot,7)(pt,7),r&2){let m;No(m=xo())&&(i.addressForm=m.first),No(m=xo())&&(i.paymentForm=m.first),No(m=xo())&&(i.personalForm=m.first),No(m=xo())&&(i.successData=m.first)}},standalone:!1,decls:84,vars:29,consts:[[`stepper`,``],[`personalForm`,`ngForm`],[`addressForm`,`ngForm`],[`paymentForm`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`successData`,``],[1,`po-row`],[`p-title`,`Product Detail`,1,`po-md-9`],[1,`po-lg-4`],[`src`,`../../../assets/graphics/shoe.gif`,`width`,`215`,`height`,`200`],[1,`po-lg-8`],[1,`po-font-title`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[`p-height`,`317`,`p-title`,`Price`,1,`po-md-3`],[1,`sample-stepper-position-relative`],[`p-text`,`Loading`],[`p-align-center`,`false`,`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`32`],[`p-label`,`Personal`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-primary-label`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`document`,`p-label`,`Document`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Address`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`,`p-primary-label`,`p-secondary-label`],[`name`,`address.street`,`p-label`,`Street/House`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`p-label`,`Number`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`code`,`p-label`,`Postal Code`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`reference`,`p-label`,`Reference`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Payment`,3,`p-can-active-next-step`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`cardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`cardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Finish`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Document`,1,`po-md-3`,3,`p-value`],[`p-label`,`Address`,1,`po-md-3`,3,`p-value`],[`p-label`,`Number`,1,`po-md-3`,3,`p-value`],[`p-label`,`City`,1,`po-md-3`,3,`p-value`],[`p-label`,`Country`,1,`po-md-3`,3,`p-value`],[`p-label`,`Product`,`p-value`,`Nike XYZ - Red/Gold Stripes`,1,`po-md-4`],[`p-label`,`Price`,`p-value`,`$2.500,00`,1,`po-md-2`],[`p-label`,`Discount`,`p-value`,`$500,00`,1,`po-md-2`],[`p-label`,`Tax`,`p-value`,`$160,00`,1,`po-md-2`],[`p-label`,`Final Price`,`p-value`,`$2.160,00`,1,`po-md-2`],[`p-title`,`Informations`],[`src`,`../../../assets/graphics/check.jpg`,`width`,`350`,`height`,`350`,1,`po-offset-md-6`,`po-offset-xl-3`],[1,`po-offset-md-8`,`po-offset-xl-3`,`po-font-title`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`div`,8)(1,`po-widget`,9)(2,`div`,8)(3,`div`,10),vu(4,`img`,11),Kg(),Qc(5,`div`,12)(6,`p`,13),Sk(7,`Nike XYZ - Red/Gold Stripes`),Kg(),Qc(8,`p`,14),Sk(9,`Brand: Nike | Style: Modern | Men's`),Kg(),Qc(10,`p`,15),Sk(11,`Width: 12.5 - COD: 001254648412319`),Kg(),vu(12,`po-divider`),Qc(13,`p`,15),Sk(14,`Price: $2.500,00 | Discount: $500,00 | Tax: $160,00`),Kg()()()(),Qc(15,`po-widget`,16)(16,`p`,15),Sk(17,`$2.500,00`),Kg(),Qc(18,`p`,15),Sk(19,`$500,00(-)`),Kg(),Qc(20,`p`,15),Sk(21,`$160,00(+)`),Kg(),vu(22,`po-divider`),Qc(23,`p`,14),Sk(24,`Total: $2.160,00`),Kg()()(),vu(25,`po-divider`),Qc(26,`div`,17),FO(27,at,1,0,`po-loading-overlay`,18),Qc(28,`po-stepper`,19,0)(30,`po-step`,20)(31,`po-widget`,21),vt(`p-primary-action`,function(){B_(m);let o=ik(29);return U_(o.next())}),Qc(32,`form`,null,1)(34,`div`,8)(35,`po-input`,22),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.name,o)||(i.name=o),U_(o)}),Kg(),Qc(36,`po-datepicker`,23),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.birthday,o)||(i.birthday=o),U_(o)}),Kg(),Qc(37,`po-input`,24),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.document,o)||(i.document=o),U_(o)}),Kg()()()()(),Qc(38,`po-step`,25)(39,`po-widget`,26),vt(`p-primary-action`,function(){B_(m);let o=ik(29);return U_(o.previous())})(`p-secondary-action`,function(){B_(m);let o=ik(29);return U_(o.next())}),Qc(40,`form`,null,2)(42,`div`,8)(43,`po-input`,27),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.street,o)||(i.address.street=o),U_(o)}),Kg(),Qc(44,`po-input`,28),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.number,o)||(i.address.number=o),U_(o)}),Kg(),Qc(45,`po-input`,29),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.city,o)||(i.address.city=o),U_(o)}),Kg()(),Qc(46,`div`,8)(47,`po-input`,30),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.code,o)||(i.address.code=o),U_(o)}),Kg(),Qc(48,`po-input`,31),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.country,o)||(i.address.country=o),U_(o)}),Kg(),Qc(49,`po-input`,32),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.address.reference,o)||(i.address.reference=o),U_(o)}),Kg()()()()(),Qc(50,`po-step`,33)(51,`po-widget`,26),vt(`p-primary-action`,function(){B_(m);let o=ik(29);return U_(o.previous())})(`p-secondary-action`,function(){B_(m);let o=ik(29);return U_(o.next())}),Qc(52,`form`,null,3)(54,`div`,8)(55,`po-input`,34,4),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.cardName,o)||(i.cardName=o),U_(o)}),Kg(),Qc(57,`po-input`,35,5),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.cardCode,o)||(i.cardCode=o),U_(o)}),Kg(),Qc(59,`po-input`,36,6),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.cardValid,o)||(i.cardValid=o),U_(o)}),Kg()()()()(),Qc(61,`po-step`,37)(62,`po-widget`,26),vt(`p-primary-action`,function(){B_(m);let o=ik(29);return U_(o.previous())})(`p-secondary-action`,function(){B_(m);let o=ik(29);return U_(i.onConfirmStep(o))}),Qc(63,`div`,8),vu(64,`po-info`,38)(65,`po-info`,39),Kg(),Qc(66,`div`,8),vu(67,`po-info`,40)(68,`po-info`,41)(69,`po-info`,42)(70,`po-info`,43),Kg(),vu(71,`po-divider`),Qc(72,`div`,8),vu(73,`po-info`,44)(74,`po-info`,45)(75,`po-info`,46)(76,`po-info`,47)(77,`po-info`,48),Kg()()()()(),Qc(78,`po-modal`,49,7)(80,`div`,8),vu(81,`img`,50),Qc(82,`p`,51),Sk(83,`Success! ORDER NUMBER: 5767686678609-XPTOA`),Kg()()()}if(r&2){let m=ik(33),c=ik(41),o=ik(53);wg(27),VO(i.isLoadingPayment?27:-1),wg(3),Rb(`p-can-active-next-step`,i.canActiveNextStep.bind(i,m)),wg(),Rb(`p-primary-label`,i.nextLabelWidget),wg(4),Yb(`ngModel`,i.name),W0(),wg(),Yb(`ngModel`,i.birthday),W0(),wg(),Yb(`ngModel`,i.document),W0(),wg(),Rb(`p-can-active-next-step`,i.canActiveNextStep.bind(i,c)),wg(),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),wg(4),Yb(`ngModel`,i.address.street),W0(),wg(),Yb(`ngModel`,i.address.number),W0(),wg(),Yb(`ngModel`,i.address.city),W0(),wg(2),Yb(`ngModel`,i.address.code),W0(),wg(),Yb(`ngModel`,i.address.country),W0(),wg(),Yb(`ngModel`,i.address.reference),W0(),wg(),Rb(`p-can-active-next-step`,i.canActiveFinishStep.bind(i,o)),wg(),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),wg(4),Yb(`ngModel`,i.cardName),W0(),wg(2),Yb(`ngModel`,i.cardCode),W0(),wg(2),Yb(`ngModel`,i.cardValid),W0(),wg(3),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.confirmLabelWidget),wg(2),Rb(`p-value`,i.name),wg(),Rb(`p-value`,i.document),wg(2),Rb(`p-value`,i.address.street),wg(),Rb(`p-value`,i.address.number),wg(),Rb(`p-value`,i.address.city),wg(),Rb(`p-value`,i.address.country)}},dependencies:[AZ,MZ,TZ,QL,WL,Nf,tie,j4,Joe,$P,ia,Gae,Fze,bae],styles:[`.sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}`],changeDetection:1})}return p})();var lt=p=>({"docs-sample-code-tabs":p});var Ne=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-sales-view`]],standalone:!1,decls:33,vars:6,consts:[[`id`,`sample-po-stepper-sales`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper - Sales`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()(),Qc(23,`po-tab`,12)(24,`div`)(25,`label`,6),Sk(26,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`),Kg(),Qc(27,`div`,13)(28,`pre`,14),Sk(29,`.sample-stepper-position-relative {
  position: relative;
}
`),Kg()()()()()(),Qc(30,`div`,15),vu(31,`sample-po-stepper-sales`),Kg(),vu(32,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,lt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,qe],encapsulation:2,changeDetection:1})}return p})();var ze=(()=>{class p$2{http=p(kI);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(s){return this.http.get(`${this.url}/getCities/${s}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(r){return new(r||p$2)};static ɵprov=R({token:p$2,factory:p$2.ɵfac,providedIn:`root`})}return p$2})();var mt=[`basicInformation`];var dt=[`academicFormation`];var ct=[`professionalExperiences`];function ut(p,N){if(p&1&&(Qc(0,`div`,23)(1,`po-widget`,24)(2,`p`),Sk(3),Kg()()()),p&2){let s=N.$implicit;wg(),Rb(`p-title`,s.title),wg(2),Gb(s.description)}}function St(p,N){if(p&1&&(Qc(0,`div`,4),vu(1,`po-divider`,23),UO(2,ut,4,2,`div`,23,BO),Kg()),p&2){let s=ek();wg(2),HO(s.professionalExperiences)}}var Oe=(()=>{class p$3{sampleService=p(ze);changeDetector=p(Be$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(s){let r={title:s.value.experienceTitle,description:s.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:`Maria Alice`,email:`mariaalice@gmail.com`,phone:`47988888888`,state:`sp`,city:1}}getHighSchool(){return{name:`Escola de Ensino Básico Dr Jorge Lacerda`,city:`Joinville`,conclusionYear:`2016`}}getUniversityEducation(){return{name:`Universidade Federal do Santa Catarina`,city:`Florianópolis`,conclusionYear:`2020`}}getProfessionalExperiencies(){return[{title:`Analista de desenvolvimento de software na TOTVS`,description:`Responsável pelo desenvolvimento e manutenção de sistemas do segmento de manufatura. Do ano de 2019 à 2020`}]}getCitiesByState(s){this.citiesSubscription=this.sampleService.getCitiesByState(s).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(s=>{this.stateOptions=s.items,this.getCitiesByState(this.basicInformation.state)})}static ɵfac=function(r){return new(r||p$3)};static ɵcmp=Jn({type:p$3,selectors:[[`sample-po-stepper-active`]],viewQuery:function(r,i){if(r&1&&Du(mt,7)(dt,7)(ct,7)(Fze,5),r&2){let m;No(m=xo())&&(i.basicInformationForm=m.first),No(m=xo())&&(i.academicFormationForm=m.first),No(m=xo())&&(i.professionalExperiencesForm=m.first),No(m=xo())&&(i.stepper=m.first)}},standalone:!1,decls:32,vars:16,consts:[[`basicInformationForm`,`ngForm`],[`academicFormationForm`,`ngForm`],[`professionalExperiencesForm`,`ngForm`],[`p-label`,`Basic information`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-label`,`Phone`,`p-optional`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`city`,`p-label`,`City`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Academic formation`],[`p-label`,`High school`,1,`po-md-12`],[`name`,`highSchoolName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`University education`,1,`po-md-12`],[`name`,`universityEducationName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Professional experiences`],[`name`,`experienceTitle`,`p-label`,`Professional position`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`experienceDescripton`,`p-label`,`Describe your responsibilities`,`p-rows`,`4`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`type`,`submit`,`p-label`,`Add professional experience`,1,`po-md-4`,3,`p-click`],[1,`po-md-12`],[1,`po-md-12`,3,`p-title`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`po-container`)(1,`po-stepper`)(2,`po-step`,3)(3,`form`,null,0)(5,`div`,4)(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.name,o)||(i.basicInformation.name=o),U_(o)}),Kg(),Qc(7,`po-email`,6),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.email,o)||(i.basicInformation.email=o),U_(o)}),Kg(),Qc(8,`po-input`,7),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.phone,o)||(i.basicInformation.phone=o),U_(o)}),Kg(),Qc(9,`po-select`,8),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.state,o)||(i.basicInformation.state=o),U_(o)}),vt(`p-change`,function(){return i.onChangeState()}),Kg(),Qc(10,`po-select`,9),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.basicInformation.city,o)||(i.basicInformation.city=o),U_(o)}),Kg()()()(),Qc(11,`po-step`,10)(12,`form`,null,1)(14,`div`,4),vu(15,`po-divider`,11),Qc(16,`po-input`,12),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.highSchool.name,o)||(i.highSchool.name=o),U_(o)}),Kg(),Qc(17,`po-input`,13),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.highSchool.city,o)||(i.highSchool.city=o),U_(o)}),Kg(),Qc(18,`po-input`,14),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),U_(o)}),Kg()(),Qc(19,`div`,4),vu(20,`po-divider`,15),Qc(21,`po-input`,16),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.universityEducation.name,o)||(i.universityEducation.name=o),U_(o)}),Kg(),Qc(22,`po-input`,17),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.universityEducation.city,o)||(i.universityEducation.city=o),U_(o)}),Kg(),Qc(23,`po-input`,18),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),U_(o)}),Kg()()()(),Qc(24,`po-step`,19)(25,`form`,null,2)(27,`div`,4)(28,`po-input`,20),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.experienceTitle,o)||(i.experienceTitle=o),U_(o)}),Kg(),Qc(29,`po-textarea`,21),z0(),Kb(`ngModelChange`,function(o){return B_(m),Tk(i.experienceDescripton,o)||(i.experienceDescripton=o),U_(o)}),Kg(),Qc(30,`po-button`,22),vt(`p-click`,function(){B_(m);let o=ik(26);return i.addProfessionalExperiences(o),U_(o.reset())}),Kg()()(),FO(31,St,4,0,`div`,4),Kg()()()}r&2&&(wg(6),Yb(`ngModel`,i.basicInformation.name),W0(),wg(),Yb(`ngModel`,i.basicInformation.email),W0(),wg(),Yb(`ngModel`,i.basicInformation.phone),W0(),wg(),Yb(`ngModel`,i.basicInformation.state),Rb(`p-options`,i.stateOptions),W0(),wg(),Yb(`ngModel`,i.basicInformation.city),Rb(`p-options`,i.cityOptions),W0(),wg(6),Yb(`ngModel`,i.highSchool.name),W0(),wg(),Yb(`ngModel`,i.highSchool.city),W0(),wg(),Yb(`ngModel`,i.highSchool.conclusionYear),W0(),wg(3),Yb(`ngModel`,i.universityEducation.name),W0(),wg(),Yb(`ngModel`,i.universityEducation.city),W0(),wg(),Yb(`ngModel`,i.universityEducation.conclusionYear),W0(),wg(5),Yb(`ngModel`,i.experienceTitle),W0(),wg(),Yb(`ngModel`,i.experienceDescripton),W0(),wg(2),VO(i.professionalExperiences?31:-1))},dependencies:[AZ,MZ,TZ,QL,WL,oi,Fc,Nf,p5,j4,Koe,Zoe,Gae,Fze,bae],encapsulation:2,changeDetection:1})}return p$3})();var ht=p=>({"docs-sample-code-tabs":p});var Re=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-active-view`]],standalone:!1,decls:37,vars:6,consts:[[`id`,`sample-po-stepper-active`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-active/sample-po-stepper-active.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-active/sample-po-stepper-active.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-stepper-active/sample-po-stepper-active.service.ts`,1,`docs-code-block`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper - Active`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-active/sample-po-stepper-active.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-container>
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
                <p>`),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` experience.description `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`</p>
              </po-widget>
            </div>
          }
        </div>
      }
    </po-step>
  </po-stepper>
</po-container>
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-stepper-active/sample-po-stepper-active.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import {
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
`),Kg()(),Qc(29,`label`,6),Sk(30,`sample-po-stepper-active/sample-po-stepper-active.service.ts`),Kg(),Qc(31,`div`,12)(32,`pre`,11),Sk(33,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),Qc(34,`div`,13),vu(35,`sample-po-stepper-active`),Kg(),vu(36,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ht,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Oe],encapsulation:2,changeDetection:1})}return p})();var He=(()=>{class p$4{changeDetector=p(Be$1);currentStep;stepsWithStatus=[{label:`Step 1`,status:qt.Done},{label:`Step 2`,status:qt.Active},{label:`Step 3`,status:qt.Default},{label:`Step 4`,status:qt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(s){this.currentStep=s,this.stepsWithStatus.forEach(r=>{r.status===qt.Active&&(r.status=qt.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===qt.Active&&(r.status=qt.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===qt.Disabled&&(this.stepsWithStatus[this.currentStep].status=qt.Default)}static ɵfac=function(r){return new(r||p$4)};static ɵcmp=Jn({type:p$4,selectors:[[`sample-po-stepper-steps`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-change-step`,`p-align-center`,`p-sequential`,`p-step`,`p-steps`]],template:function(r,i){r&1&&(Qc(0,`po-stepper`,0),vt(`p-change-step`,function(c){return i.onChangeStatus(c)}),Kg()),r&2&&Rb(`p-align-center`,!1)(`p-sequential`,!1)(`p-step`,i.currentStep)(`p-steps`,i.stepsWithStatus)},dependencies:[Fze],encapsulation:2,changeDetection:1})}return p$4})();var Et=p=>({"docs-sample-code-tabs":p});var je=(()=>{class p{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-steps-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-stepper-steps`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Stepper - Steps`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-stepper-steps`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Et,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,He],encapsulation:2,changeDetection:1})}return p})();var Ue=(()=>{class p$5{router=p(An);openDoc(s){this.router.navigate([`/documentation`,s],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||p$5)};static ɵcmp=Jn({type:p$5,selectors:[[`sample-po-stepper-doc`]],standalone:!1,decls:1012,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Step`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-stepper-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-step`],[`href`,`/documentation/po-stepper#stepIconsProperty`],[`href`,`https://angular.io/api/core/ViewChild`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-align-center`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-disable-click`,1,`docs-api-properties-row`],[`id`,`prop-p-step-icon-active`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-step-icon-done`,1,`docs-api-properties-row`],[`id`,`event-p-change-step`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`id`,`prop-p-sequential`,1,`docs-api-properties-row`],[`id`,`prop-p-step`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-step-icons`,1,`docs-api-properties-row`],[`id`,`stepIconsProperty`],[`id`,`prop-p-step-size`,1,`docs-api-properties-row`],[`id`,`prop-p-steps`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoStepperItem>`],[`id`,`method-active`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-first`,1,`docs-api-method-table`],[`id`,`method-next`,1,`docs-api-method-table`],[`id`,`method-previous`,1,`docs-api-method-table`],[`id`,`interface-po-stepper-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-stepper-item-icon-active`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-icon-default`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-icon-done`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-id`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperStatus`],[`id`,`enum-po-stepper-orientation`,1,`docs-api-class-name`],[`id`,`stepperOrientation`],[`id`,`enum-po-stepper-orientation-horizontal`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-orientation-vertical`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status`,1,`docs-api-class-name`],[`id`,`stepperStatus`],[`id`,`enum-po-stepper-status-active`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-default`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-disabled`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-done`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-error`,1,`docs-api-properties-row`]],template:function(r,i){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoStepperModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-stepper`),Kg()(),Qc(7,`blockquote`,3)(8,`strong`),Sk(9,`Subcomponentes:`),Kg(),Qc(10,`po-tag`,4),vt(`p-click`,function(){return i.openDoc(`po-step`)}),Kg()(),Qc(11,`h3`,5),Sk(12,`Componente`),Kg(),Qc(13,`h4`,6)(14,`code`,7),Sk(15,`PoStepperComponent`),Kg()(),Qc(16,`div`,2)(17,`p`),Sk(18,`O `),Qc(19,`code`),Sk(20,`po-stepper`),Kg(),Sk(21,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),Kg(),Qc(22,`p`),Sk(23,`Existem duas formas de utilização:`),Kg(),Qc(24,`p`),Sk(25,`1 - Usando o componente `),Qc(26,`a`,8)(27,`strong`),Sk(28,`po-step`),Kg()(),Sk(29,` para renderizar e descrever os passos.`),Kg(),Qc(30,`p`),Sk(31,`2 - Através da propriedade `),Qc(32,`code`),Sk(33,`p-steps`),Kg(),Sk(34,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Qc(35,`em`),Sk(36,`step`),Kg(),Sk(37,` ativo.`),Kg(),Qc(38,`p`),Sk(39,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Qc(40,`em`),Sk(41,`steps`),Kg(),Sk(42,`.`),Kg(),Qc(43,`p`),Sk(44,`Também é possível navegar entre os `),Qc(45,`em`),Sk(46,`steps`),Kg(),Sk(47,` através do teclado utilizando a tecla `),Qc(48,`em`),Sk(49,`tab`),Kg(),Sk(50,` e, para ativar o `),Qc(51,`em`),Sk(52,`step`),Kg(),Sk(53,` em foco basta
pressionar a tecla `),Qc(54,`em`),Sk(55,`enter`),Kg(),Sk(56,`. Além disso, é possível ativar a exibição de ícones no lugar de números nos `),Qc(57,`em`),Sk(58,`steps`),Kg(),Sk(59,` atrav\xE9s da
propriedade `),Qc(60,`a`,9)(61,`code`),Sk(62,`p-step-icons`),Kg()(),Sk(63,`.`),Kg(),Qc(64,`h4`),Sk(65,`Utilizando os métodos do componente:`),Kg(),Qc(66,`p`),Sk(67,`Para acessar os métodos do componente é necessário ter a referência do mesmo.`),Kg(),Qc(68,`p`),Sk(69,`Por exemplo, utilizando um `),Qc(70,`a`,10)(71,`strong`),Sk(72,`ViewChild`),Kg()(),Sk(73,`:`),Kg(),Qc(74,`pre`)(75,`code`),Sk(76,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),Kg()(),Qc(77,`p`),Sk(78,`E para acessar o método:`),Kg(),Qc(79,`pre`)(80,`code`),Sk(81,`poStepperComponent.next();
`),Kg()(),Qc(82,`h4`),Sk(83,`Boas práticas`),Kg(),Qc(84,`ul`)(85,`li`),Sk(86,`Evite `),Qc(87,`code`),Sk(88,`labels`),Kg(),Sk(89,` extensos que quebram o layout do `),Qc(90,`code`),Sk(91,`po-stepper`),Kg(),Sk(92,`, use `),Qc(93,`code`),Sk(94,`labels`),Kg(),Sk(95,` diretos, curtos e intuitivos.`),Kg(),Qc(96,`li`),Sk(97,`Utilize apenas um `),Qc(98,`code`),Sk(99,`po-stepper`),Kg(),Sk(100,` por página.`),Kg()(),Qc(101,`h4`),Sk(102,`Tokens customizáveis`),Kg(),Qc(103,`p`),Sk(104,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(105,`blockquote`)(106,`p`),Sk(107,`Para maiores informações, acesse o guia `),Qc(108,`a`,11),Sk(109,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(110,`.`),Kg()(),Qc(111,`table`)(112,`thead`)(113,`tr`)(114,`th`),Sk(115,`Propriedade`),Kg(),Qc(116,`th`),Sk(117,`Descrição`),Kg(),Qc(118,`th`),Sk(119,`Valor Padrão`),Kg()()(),Qc(120,`tbody`)(121,`tr`)(122,`td`)(123,`strong`),Sk(124,`Label`),Kg()(),vu(125,`td`)(126,`td`),Kg(),Qc(127,`tr`)(128,`td`)(129,`code`),Sk(130,`--font-family`),Kg()(),Qc(131,`td`),Sk(132,`Família tipográfica usada`),Kg(),Qc(133,`td`)(134,`code`),Sk(135,`var(--font-family-theme)`),Kg()()(),Qc(136,`tr`)(137,`td`)(138,`code`),Sk(139,`--font-size`),Kg()(),Qc(140,`td`),Sk(141,`Tamanho da fonte`),Kg(),Qc(142,`td`)(143,`code`),Sk(144,`var(--font-size-default)`),Kg()()(),Qc(145,`tr`)(146,`td`)(147,`code`),Sk(148,`--font-weight`),Kg()(),Qc(149,`td`),Sk(150,`Peso da fonte`),Kg(),Qc(151,`td`)(152,`code`),Sk(153,`var(--font-weight-normal)`),Kg()()(),Qc(154,`tr`)(155,`td`)(156,`strong`),Sk(157,`Step - Done`),Kg()(),vu(158,`td`)(159,`td`),Kg(),Qc(160,`tr`)(161,`td`)(162,`code`),Sk(163,`--text-color`),Kg()(),Qc(164,`td`),Sk(165,`Cor do texto no step concluído`),Kg(),Qc(166,`td`)(167,`code`),Sk(168,`var(--color-neutral-dark-70)`),Kg()()(),Qc(169,`tr`)(170,`td`)(171,`code`),Sk(172,`--color-icon-done`),Kg()(),Qc(173,`td`),Sk(174,`Cor do ícone no step concluído`),Kg(),Qc(175,`td`)(176,`code`),Sk(177,`var(--color-neutral-dark-70)`),Kg()()(),Qc(178,`tr`)(179,`td`)(180,`code`),Sk(181,`--background-done`),Kg()(),Qc(182,`td`),Sk(183,`Cor de fundo no step concluído`),Kg(),Qc(184,`td`)(185,`code`),Sk(186,`var(--color-neutral-light-00)`),Kg()()(),Qc(187,`tr`)(188,`td`)(189,`strong`),Sk(190,`Line - Done`),Kg()(),vu(191,`td`)(192,`td`),Kg(),Qc(193,`tr`)(194,`td`)(195,`code`),Sk(196,`--color-line-done`),Kg()(),Qc(197,`td`),Sk(198,`Cor da linha no step concluído`),Kg(),Qc(199,`td`)(200,`code`),Sk(201,`var(--color-neutral-mid-40)`),Kg()()(),Qc(202,`tr`)(203,`td`)(204,`strong`),Sk(205,`Step - Current`),Kg()(),vu(206,`td`)(207,`td`),Kg(),Qc(208,`tr`)(209,`td`)(210,`code`),Sk(211,`--color-icon-current`),Kg()(),Qc(212,`td`),Sk(213,`Cor do ícone no step atual`),Kg(),Qc(214,`td`)(215,`code`),Sk(216,`var(--color-neutral-light-00)`),Kg()()(),Qc(217,`tr`)(218,`td`)(219,`code`),Sk(220,`--background-current`),Kg()(),Qc(221,`td`),Sk(222,`Cor de fundo no step atual`),Kg(),Qc(223,`td`)(224,`code`),Sk(225,`var(--color-action-default)`),Kg()()(),Qc(226,`tr`)(227,`td`)(228,`code`),Sk(229,`--font-weight-current`),Kg()(),Qc(230,`td`),Sk(231,`Peso da fonte no step atual`),Kg(),Qc(232,`td`)(233,`code`),Sk(234,`var(--font-weight-bold)`),Kg()()(),Qc(235,`tr`)(236,`td`)(237,`strong`),Sk(238,`Step - Next`),Kg()(),vu(239,`td`)(240,`td`),Kg(),Qc(241,`tr`)(242,`td`)(243,`code`),Sk(244,`--font-size-circle`),Kg()(),Qc(245,`td`),Sk(246,`Tamanho da fonte no círculo do próximo step`),Kg(),Qc(247,`td`)(248,`code`),Sk(249,`var(--font-size-sm)`),Kg()()(),Qc(250,`tr`)(251,`td`)(252,`code`),Sk(253,`--color-next`),Kg()(),Qc(254,`td`),Sk(255,`Cor do ícone no próximo step`),Kg(),Qc(256,`td`)(257,`code`),Sk(258,`var(--color-action-disabled)`),Kg()()(),Qc(259,`tr`)(260,`td`)(261,`code`),Sk(262,`--text-color-next`),Kg()(),Qc(263,`td`),Sk(264,`Cor do texto no próximo step`),Kg(),Qc(265,`td`)(266,`code`),Sk(267,`var(--color-neutral-light-30)`),Kg()()(),Qc(268,`tr`)(269,`td`)(270,`strong`),Sk(271,`Focused`),Kg()(),vu(272,`td`)(273,`td`),Kg(),Qc(274,`tr`)(275,`td`)(276,`code`),Sk(277,`--outline-color-focused`),Kg()(),Qc(278,`td`),Sk(279,`Cor do outline do estado de focus`),Kg(),Qc(280,`td`)(281,`code`),Sk(282,`var(--color-action-focus)`),Kg()()()()()(),Qc(283,`div`,12)(284,`h4`,13),Sk(285,`Seletor`),Kg(),Qc(286,`pre`,14),Sk(287,`<po-stepper
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
`),Kg()(),Qc(288,`h4`,15),Sk(289,`Propriedades`),Kg(),Qc(290,`table`,16)(291,`tr`,17)(292,`th`,18),Sk(293,`Nome`),Kg(),Qc(294,`th`,18),Sk(295,`Tipo`),Kg(),Qc(296,`th`,18),Sk(297,`Padrão`),Kg(),Qc(298,`th`,18),Sk(299,`Descrição`),Kg()(),Qc(300,`tr`,19)(301,`td`,20)(302,`div`,21)(303,`span`,22),Sk(304,` p-align-center`),vu(305,`br`),Kg()()(),Qc(306,`td`,23)(307,`code`,24),Sk(308,`boolean`),Kg()(),Qc(309,`td`,25)(310,`p`)(311,`code`),Sk(312,`true`),Kg()()(),Qc(313,`td`,26)(314,`em`)(315,`strong`),Sk(316,`(opcional)`),Kg()(),Qc(317,`p`),Sk(318,`Define o alinhamento dos `),Qc(319,`em`),Sk(320,`steps`),Kg(),Sk(321,` e `),Qc(322,`em`),Sk(323,`labels`),Kg(),Sk(324,` no `),Qc(325,`em`),Sk(326,`stepper`),Kg(),Sk(327,`, dependendo da orientação.`),Kg(),Qc(328,`ul`)(329,`li`),Sk(330,`Quando `),Qc(331,`code`),Sk(332,`true`),Kg(),Sk(333,`, ficam centralizados em ambas as orientações (horizontal e vertical).`),Kg(),Qc(334,`li`),Sk(335,`Quando `),Qc(336,`code`),Sk(337,`false`),Kg(),Sk(338,`, ficam alinhados à esquerda na orientação horizontal e ao topo na orientação vertical.`),Kg()()()(),Qc(339,`tr`,27)(340,`td`,20)(341,`div`,21)(342,`span`,22),Sk(343,` p-disable-click`),vu(344,`br`),Kg()()(),Qc(345,`td`,23)(346,`code`,24),Sk(347,`boolean`),Kg()(),Qc(348,`td`,25)(349,`p`)(350,`code`),Sk(351,`false`),Kg()()(),Qc(352,`td`,26)(353,`em`)(354,`strong`),Sk(355,`(opcional)`),Kg()(),Qc(356,`p`),Sk(357,`Desabilita o clique nos steps.`),Kg()()(),Qc(358,`tr`,28)(359,`td`,20)(360,`div`,21)(361,`span`,22),Sk(362,` p-step-icon-active`),vu(363,`br`),Kg()()(),Qc(364,`td`,23)(365,`code`,29),Sk(366,`string `),Kg(),Qc(367,`code`,30),Sk(368,` TemplateRef<void>`),Kg()(),Qc(369,`td`,25)(370,`p`)(371,`code`),Sk(372,`po-icon-edit`),Kg()()(),Qc(373,`td`,26)(374,`em`)(375,`strong`),Sk(376,`(opcional)`),Kg()(),Qc(377,`p`),Sk(378,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Qc(379,`a`,31),Sk(380,`Biblioteca de ícones`),Kg(),Sk(381,`.`),Kg(),Qc(382,`pre`)(383,`code`),Sk(384,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),Kg()(),Qc(385,`p`),Sk(386,`Para customizar o ícone através do `),Qc(387,`code`),Sk(388,`TemplateRef`),Kg(),Sk(389,`, veja a documentação da propriedade `),Qc(390,`code`),Sk(391,`p-step-icon-done`),Kg(),Sk(392,`.`),Kg(),Qc(393,`blockquote`)(394,`p`),Sk(395,`Deve-se usar `),Qc(396,`code`),Sk(397,`font-size: inherit`),Kg(),Sk(398,` para ajustar ícones que não se ajustam automaticamente.`),Kg()()()(),Qc(399,`tr`,32)(400,`td`,20)(401,`div`,21)(402,`span`,22),Sk(403,` p-step-icon-done`),vu(404,`br`),Kg()()(),Qc(405,`td`,23)(406,`code`,29),Sk(407,`string `),Kg(),Qc(408,`code`,30),Sk(409,` TemplateRef<void>`),Kg()(),Qc(410,`td`,25)(411,`p`)(412,`code`),Sk(413,`po-icon-ok`),Kg()()(),Qc(414,`td`,26)(415,`em`)(416,`strong`),Sk(417,`(opcional)`),Kg()(),Qc(418,`p`),Sk(419,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Qc(420,`a`,31),Sk(421,`Biblioteca de ícones`),Kg()(),Qc(422,`pre`)(423,`code`),Sk(424,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),Kg()(),Qc(425,`p`),Sk(426,`Outra opção seria a customização do ícone através do `),Qc(427,`code`),Sk(428,`TemplateRef`),Kg(),Sk(429,`, conforme exemplo abaixo:`),Kg(),Qc(430,`pre`)(431,`code`),Sk(432,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),Kg()(),Qc(433,`blockquote`)(434,`p`),Sk(435,`Deve-se usar `),Qc(436,`code`),Sk(437,`font-size: inherit`),Kg(),Sk(438,` para ajustar ícones que não se ajustam automaticamente.`),Kg()()()(),Qc(439,`tr`,33)(440,`td`,20)(441,`div`,34)(442,`span`,35),Sk(443,` (p-change-step)`),vu(444,`br`),Kg()()(),Qc(445,`td`,23)(446,`code`,36),Sk(447,`EventEmitter`),Kg()(),Qc(448,`td`,25),Sk(449,`-`),Kg(),Qc(450,`td`,26)(451,`p`),Sk(452,`Ação que será executada quando o usuário mudar o passo do `),Qc(453,`code`),Sk(454,`po-stepper`),Kg(),Sk(455,`.`),Kg()()(),Qc(456,`tr`,37)(457,`td`,20)(458,`div`,21)(459,`span`,22),Sk(460,` p-orientation`),vu(461,`br`),Kg()()(),Qc(462,`td`,23)(463,`code`,38),Sk(464,`PoStepperOrientation`),Kg()(),Qc(465,`td`,25)(466,`p`)(467,`code`),Sk(468,`PoStepperOrientation.Horizontal`),Kg()()(),Qc(469,`td`,26)(470,`em`)(471,`strong`),Sk(472,`(opcional)`),Kg()(),Qc(473,`p`),Sk(474,`Define a orientação de exibição do `),Qc(475,`code`),Sk(476,`po-stepper`),Kg(),Sk(477,`.`),Kg(),Qc(478,`blockquote`)(479,`p`),Sk(480,`Veja os valores válidos no `),Qc(481,`em`),Sk(482,`enum`),Kg(),Qc(483,`a`,39),Sk(484,`PoStepperOrientation`),Kg(),Sk(485,`.`),Kg()()()(),Qc(486,`tr`,40)(487,`td`,20)(488,`div`,21)(489,`span`,22),Sk(490,` p-sequential`),vu(491,`br`),Kg()()(),Qc(492,`td`,23)(493,`code`,24),Sk(494,`boolean`),Kg()(),Qc(495,`td`,25)(496,`p`)(497,`code`),Sk(498,`true`),Kg()()(),Qc(499,`td`,26)(500,`em`)(501,`strong`),Sk(502,`(opcional)`),Kg()(),Qc(503,`p`),Sk(504,`Define se o `),Qc(505,`code`),Sk(506,`po-stepper`),Kg(),Sk(507,` será sequencial ou aleatório.`),Kg(),Qc(508,`blockquote`)(509,`p`),Sk(510,`Ao utilizar o componente `),Qc(511,`a`,8)(512,`strong`),Sk(513,`po-step`),Kg()(),Sk(514,`, o valor desta propriedade sempre será verdadeiro.`),Kg()()()(),Qc(515,`tr`,41)(516,`td`,20)(517,`div`,21)(518,`span`,22),Sk(519,` p-step`),vu(520,`br`),Kg()()(),Qc(521,`td`,23)(522,`code`,42),Sk(523,`number`),Kg()(),Qc(524,`td`,25)(525,`p`)(526,`code`),Sk(527,`1`),Kg()()(),Qc(528,`td`,26)(529,`em`)(530,`strong`),Sk(531,`(opcional)`),Kg()(),Qc(532,`p`),Sk(533,`Controla o passo atual do `),Qc(534,`code`),Sk(535,`po-stepper`),Kg(),Sk(536,`.`),Kg(),Qc(537,`blockquote`)(538,`p`),Sk(539,`Ao utilizar esta propriedade e também utilizar o componente `),Qc(540,`a`,8)(541,`strong`),Sk(542,`po-step`),Kg()(),Sk(543,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Qc(544,`a`,8)(545,`strong`),Sk(546,`po-step`),Kg()(),Sk(547,`.`),Kg()()()(),Qc(548,`tr`,43)(549,`td`,20)(550,`div`,21)(551,`span`,22),Sk(552,` p-step-icons`),vu(553,`br`),Kg()()(),Qc(554,`td`,23)(555,`code`,24),Sk(556,`boolean`),Kg()(),Qc(557,`td`,25)(558,`p`)(559,`code`),Sk(560,`false`),Kg()()(),Qc(561,`td`,26)(562,`em`)(563,`strong`),Sk(564,`(opcional)`),Kg()(),Qc(565,`p`),vu(566,`a`,44),Kg(),Qc(567,`p`),Sk(568,`Habilita a exibição de ícone ao invés de número no centro do círculo dos `),Qc(569,`em`),Sk(570,`steps`),Kg(),Sk(571,`.`),Kg()()(),Qc(572,`tr`,45)(573,`td`,20)(574,`div`,21)(575,`span`,22),Sk(576,` p-step-size`),vu(577,`br`),Kg()()(),Qc(578,`td`,23)(579,`code`,42),Sk(580,`number`),Kg()(),Qc(581,`td`,25)(582,`p`)(583,`code`),Sk(584,`24`),Kg()()(),Qc(585,`td`,26)(586,`em`)(587,`strong`),Sk(588,`(opcional)`),Kg()(),Qc(589,`p`),Sk(590,`Define o tamanho dos `),Qc(591,`em`),Sk(592,`steps`),Kg(),Sk(593,` em `),Qc(594,`em`),Sk(595,`pixels`),Kg(),Sk(596,`, possibilitando um maior destaque.`),Kg(),Qc(597,`p`),Sk(598,`O valor informado deve ser entre `),Qc(599,`code`),Sk(600,`24`),Kg(),Sk(601,` e `),Qc(602,`code`),Sk(603,`64`),Kg(),Sk(604,`.`),Kg(),Qc(605,`blockquote`)(606,`p`),Sk(607,`Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor `),Qc(608,`em`),Sk(609,`default`),Kg(),Sk(610,`.`),Kg()()()(),Qc(611,`tr`,46)(612,`td`,20)(613,`div`,21)(614,`span`,22),Sk(615,` p-steps`),vu(616,`br`),Kg()()(),Qc(617,`td`,23)(618,`code`,47),Sk(619,`Array<PoStepperItem>`),Kg()(),Qc(620,`td`,25),Sk(621,`-`),Kg(),Qc(622,`td`,26)(623,`em`)(624,`strong`),Sk(625,`(opcional)`),Kg()(),Qc(626,`p`),Sk(627,`Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg(),Qc(628,`blockquote`)(629,`p`),Sk(630,`Ao utilizar esta propriedade e também utilizar o componente `),Qc(631,`a`,8)(632,`strong`),Sk(633,`po-step`),Kg()(),Sk(634,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Qc(635,`a`,8)(636,`strong`),Sk(637,`po-step`),Kg()(),Sk(638,`.`),Kg()()()()(),Qc(639,`h3`,15),Sk(640,`Métodos`),Kg(),Qc(641,`table`,48)(642,`tr`,49)(643,`th`,50)(644,`div`,21)(645,`h4`)(646,`span`,22),Sk(647,` active `),Kg()()()()(),Qc(648,`tr`,26)(649,`td`,26)(650,`p`),Sk(651,`Altera o status do `),Qc(652,`em`),Sk(653,`step`),Kg(),Sk(654,` para ativo.`),Kg(),Qc(655,`blockquote`)(656,`p`),Sk(657,`Este método é valido apenas para as implementações que utilizam o componente `),Qc(658,`a`,8)(659,`strong`),Sk(660,`po-step`),Kg()(),Sk(661,`.`),Kg()()()()(),Qc(662,`h5`)(663,`b`),Sk(664,`Parâmetros`),Kg()(),Qc(665,`table`,16)(666,`tr`,17)(667,`th`,18),Sk(668,`Nome`),Kg(),Qc(669,`th`,18),Sk(670,`Tipo`),Kg(),Qc(671,`th`,18),Sk(672,`Descrição`),Kg()(),Qc(673,`tr`,49)(674,`td`,20),Sk(675,` index`),Kg(),Qc(676,`td`,23)(677,`code`,51),Sk(678,` number `),Kg()(),Qc(679,`td`,26)(680,`p`),Sk(681,`Índice do `),Qc(682,`code`),Sk(683,`po-step`),Kg(),Sk(684,` que se deseja ativar.`),Kg()()()(),vu(685,`br`),Qc(686,`table`,52)(687,`tr`,49)(688,`th`,50)(689,`div`,21)(690,`h4`)(691,`span`,22),Sk(692,` first `),Kg()()()()(),Qc(693,`tr`,26)(694,`td`,26)(695,`p`),Sk(696,`Ativa o primeiro `),Qc(697,`em`),Sk(698,`step`),Kg(),Sk(699,`.`),Kg(),Qc(700,`blockquote`)(701,`p`),Sk(702,`Este método é valido apenas para as implementações que utilizam o componente `),Qc(703,`a`,8)(704,`strong`),Sk(705,`po-step`),Kg()(),Sk(706,`.`),Kg()()()()(),vu(707,`br`),Qc(708,`table`,53)(709,`tr`,49)(710,`th`,50)(711,`div`,21)(712,`h4`)(713,`span`,22),Sk(714,` next `),Kg()()()()(),Qc(715,`tr`,26)(716,`td`,26)(717,`p`),Sk(718,`Ativa o próximo `),Qc(719,`em`),Sk(720,`step`),Kg(),Sk(721,`.`),Kg(),Qc(722,`blockquote`)(723,`p`),Sk(724,`Este método é valido apenas para as implementações que utilizam o componente `),Qc(725,`a`,8)(726,`strong`),Sk(727,`po-step`),Kg()(),Sk(728,`.`),Kg()()()()(),vu(729,`br`),Qc(730,`table`,54)(731,`tr`,49)(732,`th`,50)(733,`div`,21)(734,`h4`)(735,`span`,22),Sk(736,` previous `),Kg()()()()(),Qc(737,`tr`,26)(738,`td`,26)(739,`p`),Sk(740,`Ativa o `),Qc(741,`em`),Sk(742,`step`),Kg(),Sk(743,` anterior.`),Kg(),Qc(744,`blockquote`)(745,`p`),Sk(746,`Este método é valido apenas para as implementações que utilizam o componente `),Qc(747,`a`,8)(748,`strong`),Sk(749,`po-step`),Kg()(),Sk(750,`.`),Kg()()()()(),vu(751,`br`),Qc(752,`h3`),Sk(753,`Interfaces`),Kg(),Qc(754,`h4`,55)(755,`code`,7),Sk(756,`PoStepperItem`),Kg()(),Qc(757,`div`,2)(758,`p`),Sk(759,`Interface para definição dos `),Qc(760,`em`),Sk(761,`steps`),Kg(),Sk(762,` do componente `),Qc(763,`code`),Sk(764,`po-stepper`),Kg(),Sk(765,` quando utilizada a propriedade `),Qc(766,`code`),Sk(767,`p-steps`),Kg(),Sk(768,`.`),Kg()(),Qc(769,`h4`,15),Sk(770,`Propriedades`),Kg(),Qc(771,`table`,16)(772,`tr`,17)(773,`th`,18),Sk(774,`Nome`),Kg(),Qc(775,`th`,18),Sk(776,`Tipo`),Kg(),Qc(777,`th`,18),Sk(778,`Descrição`),Kg()(),Qc(779,`tr`,56)(780,`td`,20)(781,`div`,21)(782,`span`,22),Sk(783,` iconActive`),vu(784,`br`),Kg()()(),Qc(785,`td`,23)(786,`code`,29),Sk(787,`string `),Kg(),Qc(788,`code`,30),Sk(789,` TemplateRef<void>`),Kg()(),Qc(790,`td`,26)(791,`em`)(792,`strong`),Sk(793,`(opcional)`),Kg()(),Qc(794,`p`),Sk(795,`Define o ícone do `),Qc(796,`em`),Sk(797,`step`),Kg(),Sk(798,` ativo.`),Kg()()(),Qc(799,`tr`,57)(800,`td`,20)(801,`div`,21)(802,`span`,22),Sk(803,` iconDefault`),vu(804,`br`),Kg()()(),Qc(805,`td`,23)(806,`code`,29),Sk(807,`string `),Kg(),Qc(808,`code`,30),Sk(809,` TemplateRef<void>`),Kg()(),Qc(810,`td`,26)(811,`em`)(812,`strong`),Sk(813,`(opcional)`),Kg()(),Qc(814,`p`),Sk(815,`Define o ícone do `),Qc(816,`em`),Sk(817,`step`),Kg(),Sk(818,` default.`),Kg()()(),Qc(819,`tr`,58)(820,`td`,20)(821,`div`,21)(822,`span`,22),Sk(823,` iconDone`),vu(824,`br`),Kg()()(),Qc(825,`td`,23)(826,`code`,29),Sk(827,`string `),Kg(),Qc(828,`code`,30),Sk(829,` TemplateRef<void>`),Kg()(),Qc(830,`td`,26)(831,`em`)(832,`strong`),Sk(833,`(opcional)`),Kg()(),Qc(834,`p`),Sk(835,`Define o ícone do `),Qc(836,`em`),Sk(837,`step`),Kg(),Sk(838,` concluído.`),Kg()()(),Qc(839,`tr`,59)(840,`td`,20)(841,`div`,21)(842,`span`,22),Sk(843,` id`),vu(844,`br`),Kg()()(),Qc(845,`td`,23)(846,`code`,29),Sk(847,`string`),Kg()(),Qc(848,`td`,26)(849,`em`)(850,`strong`),Sk(851,`(opcional)`),Kg()(),Qc(852,`p`),Sk(853,`Identificador único do step.`),Kg()()(),Qc(854,`tr`,60)(855,`td`,20)(856,`div`,21)(857,`span`,22),Sk(858,` label`),vu(859,`br`),Kg()()(),Qc(860,`td`,23)(861,`code`,29),Sk(862,`string`),Kg()(),Qc(863,`td`,26)(864,`em`)(865,`strong`),Sk(866,`(opcional)`),Kg()(),Qc(867,`p`),Sk(868,`Texto do item do stepper.`),Kg()()(),Qc(869,`tr`,61)(870,`td`,20)(871,`div`,21)(872,`span`,22),Sk(873,` status`),vu(874,`br`),Kg()()(),Qc(875,`td`,23)(876,`code`,62),Sk(877,`PoStepperStatus`),Kg()(),Qc(878,`td`,26)(879,`em`)(880,`strong`),Sk(881,`(opcional)`),Kg()(),Qc(882,`p`),Sk(883,`Define o estado de exibição do `),Qc(884,`em`),Sk(885,`step`),Kg(),Sk(886,`.`),Kg()()()(),Qc(887,`h3`),Sk(888,`Enums`),Kg(),Qc(889,`h4`,63)(890,`code`,7),Sk(891,`PoStepperOrientation`),Kg()(),Qc(892,`div`,2)(893,`p`),vu(894,`a`,64),Kg(),Qc(895,`p`)(896,`em`),Sk(897,`Enums`),Kg(),Sk(898,` para definição da orientação do `),Qc(899,`code`),Sk(900,`po-stepper`),Kg(),Sk(901,`.`),Kg()(),Qc(902,`h4`,15),Sk(903,`Propriedades`),Kg(),Qc(904,`table`,16)(905,`tr`,17)(906,`th`,18),Sk(907,`Nome`),Kg(),Qc(908,`th`,18),Sk(909,`Descrição`),Kg()(),Qc(910,`tr`,65)(911,`td`,20)(912,`div`,21)(913,`span`,22),Sk(914,` Horizontal`),vu(915,`br`),Kg()()(),Qc(916,`td`,26)(917,`p`),Sk(918,`Define a exibição do componente na horizontal.`),Kg()()(),Qc(919,`tr`,66)(920,`td`,20)(921,`div`,21)(922,`span`,22),Sk(923,` Vertical`),vu(924,`br`),Kg()()(),Qc(925,`td`,26)(926,`p`),Sk(927,`Define a exibição do componente na vertical.`),Kg()()()(),Qc(928,`h4`,67)(929,`code`,7),Sk(930,`PoStepperStatus`),Kg()(),Qc(931,`div`,2)(932,`p`),vu(933,`a`,68),Kg(),Qc(934,`p`)(935,`em`),Sk(936,`Enums`),Kg(),Sk(937,` para os status do `),Qc(938,`code`),Sk(939,`po-stepper`),Kg(),Sk(940,` quando utilizada a propriedade `),Qc(941,`code`),Sk(942,`p-steps`),Kg(),Sk(943,`.`),Kg()(),Qc(944,`h4`,15),Sk(945,`Propriedades`),Kg(),Qc(946,`table`,16)(947,`tr`,17)(948,`th`,18),Sk(949,`Nome`),Kg(),Qc(950,`th`,18),Sk(951,`Descrição`),Kg()(),Qc(952,`tr`,69)(953,`td`,20)(954,`div`,21)(955,`span`,22),Sk(956,` Active`),vu(957,`br`),Kg()()(),Qc(958,`td`,26)(959,`p`),Sk(960,`Define o estado do `),Qc(961,`em`),Sk(962,`step`),Kg(),Sk(963,` como ativo.`),Kg()()(),Qc(964,`tr`,70)(965,`td`,20)(966,`div`,21)(967,`span`,22),Sk(968,` Default`),vu(969,`br`),Kg()()(),Qc(970,`td`,26)(971,`p`),Sk(972,`Define o estado do `),Qc(973,`em`),Sk(974,`step`),Kg(),Sk(975,` como padrão.`),Kg()()(),Qc(976,`tr`,71)(977,`td`,20)(978,`div`,21)(979,`span`,22),Sk(980,` Disabled`),vu(981,`br`),Kg()()(),Qc(982,`td`,26)(983,`p`),Sk(984,`Define o estado do `),Qc(985,`em`),Sk(986,`step`),Kg(),Sk(987,` como desabilitado.`),Kg()()(),Qc(988,`tr`,72)(989,`td`,20)(990,`div`,21)(991,`span`,22),Sk(992,` Done`),vu(993,`br`),Kg()()(),Qc(994,`td`,26)(995,`p`),Sk(996,`Define o estado do `),Qc(997,`em`),Sk(998,`step`),Kg(),Sk(999,` como concluído.`),Kg()()(),Qc(1e3,`tr`,73)(1001,`td`,20)(1002,`div`,21)(1003,`span`,22),Sk(1004,` Error`),vu(1005,`br`),Kg()()(),Qc(1006,`td`,26)(1007,`p`),Sk(1008,`Define o estado do `),Qc(1009,`em`),Sk(1010,`step`),Kg(),Sk(1011,` com erro.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return p$5})();function yt(p,N){if(p&1){let s=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(s);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-stepper-basic-view`)(2,`sample-po-stepper-labs-view`)(3,`sample-po-stepper-sales-view`)(4,`sample-po-stepper-active-view`)(5,`sample-po-stepper-steps-view`),Kg()}if(p&2){let s=ek();Rb(`p-active`,s.activeTab===`web`)}}var xt=[{path:``,component:(()=>{class p{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,r){this.route=s,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let r=s.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||p)(I(ar),I(An))};static ɵcmp=Jn({type:p,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Stepper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,yt,6,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-stepper-doc`),Kg()()()),r&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Ae,Be,Ne,Re,je,Ue],encapsulation:2,changeDetection:1})}return p})()}];var Ye=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵmod=ge({type:p});static ɵinj=de({imports:[GV.forChild(xt),GV]})}return p})();var Pn=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵmod=ge({type:p});static ɵinj=de({imports:[M,Ye]})}return p})();export{Pn as DocPoStepperModule};
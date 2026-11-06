import{t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Ar as Ig,Cn as oi,Ct as Yoe,D as Hae,Dn as qt,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ir as Jr,Ja as vt$1,L as Joe,Li as ZO,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,Sr as Ge$1,Ti as W0,Ua as tt$1,Va as t_,Vi as _u,Xn as $O,Xr as No,Xt as ere,Yi as eF,Yt as ea,Zt as fae,bn as o5,c as BP,da as kI,di as RZ,dr as Cu,ea as ge,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,i as Ac,it as Qte,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,oo as zO,or as Bk,q as Mze,qi as de,qr as NZ,rt as Qae,ua as k,ui as R,va as nk,w as Goe,wa as p,wr as HO,xi as VO,xr as Gb,xt as Woe,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var Fe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-basic`]],standalone:!1,decls:4,vars:1,consts:[[3,`p-align-center`],[`p-label`,`Step 1`],[`p-label`,`Step 2`],[`p-label`,`Step 3`]],template:function(r,i){r&1&&(Jc(0,`po-stepper`,0),_u(1,`po-step`,1)(2,`po-step`,2)(3,`po-step`,3),Zg()),r&2&&Rb(`p-align-center`,!1)},dependencies:[Hae,Mze],encapsulation:2,changeDetection:1})}return a})();var Ye=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Stepper Basic`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-stepper-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ye,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Fe],encapsulation:2,changeDetection:1})}return a})();function Ge(a,q){if(a&1&&(Jc(0,`po-step`,3)(1,`h2`),Tk(2),Zg()()),a&2){let s=q.$implicit;Rb(`p-label`,s.label)(`p-icon-default`,s.iconDefault),Ig(2),nm(`Step Content `,s.label)}}var ke=(()=>{class a{changeDetector=p(Ge$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:`Properties`,property:`stepSize`,label:`Step Size`,type:`number`,maxValue:64,minValue:24,gridLgColumns:2},{property:`orientation`,options:[{value:`vertical`,label:`Vertical`,checked:!0},{value:`horizontal`,label:`Horizontal`}],gridLgColumns:4},{label:`Align Steps Center`,gridLgColumns:3,property:`alignCenter`,type:`boolean`},{label:`Step icons`,gridLgColumns:3,property:`stepIcons`,type:`boolean`},{label:`Step Icon Active Custom`,help:`Ex.: an an-pencil-simple-line`,gridLgColumns:4,property:`iconActive`},{label:`Step Icon Done Custom`,help:`Ex.: an an-check-fat`,gridLgColumns:4,property:`iconDone`},{property:`disabledClick`,label:`Disabled click`,type:`boolean`}];stepItemFields=[{divider:`Step form`,property:`label`,label:`Step Label`,gridMdColumns:6,gridXlColumns:6},{property:`iconDefault`,label:`Step Icon Default Custom`,help:`Ex.: an an-question`,gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore()}addItem(s){this.steps=[...this.steps,r({},s)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(s){this.event=s,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation=`horizontal`,this.properties.alignCenter=!1}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-labs`]],standalone:!1,decls:17,vars:13,consts:[[`stepForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change-step`,`p-align-center`,`p-orientation`,`p-step-icons`,`p-step-size`,`p-step-icon-active`,`p-step-icon-done`,`p-disable-click`],[3,`p-label`,`p-icon-default`],[`p-label`,`Event`,3,`p-value`],[3,`p-group-form`,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Step`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let m=ZO();Jc(0,`po-container`)(1,`po-stepper`,2),vt$1(`p-change-step`,function(){return i.changeStep(`change`)}),$O(2,Ge,3,3,`po-step`,3,HO),Zg(),_u(4,`po-divider`)(5,`po-info`,4),Jc(6,`form`,null,0),_u(8,`po-dynamic-form`,5),Jc(9,`div`,6)(10,`po-button`,7),vt$1(`p-click`,function(){U_(m);let o=sk(7);return i.addItem(i.stepItem),H_(o.reset())}),Zg()()(),Jc(11,`form`,null,1),_u(13,`po-dynamic-form`,5)(14,`po-divider`),Jc(15,`div`,6)(16,`po-button`,8),vt$1(`p-click`,function(){U_(m);let o=sk(7),Ue=sk(12);return i.restore(),Ue.reset(),H_(o.reset())}),Zg()()()()}if(r&2){let m=sk(7);Ig(),Rb(`p-align-center`,i.properties.alignCenter)(`p-orientation`,i.properties.orientation)(`p-step-icons`,i.properties.stepIcons)(`p-step-size`,i.properties.stepSize)(`p-step-icon-active`,i.properties.iconActive)(`p-step-icon-done`,i.properties.iconDone)(`p-disable-click`,i.properties.disabledClick),Ig(),zO(i.steps),Ig(3),Rb(`p-value`,i.event),Ig(3),Rb(`p-fields`,i.stepItemFields)(`p-value`,i.stepItem),Ig(2),Rb(`p-disabled`,m.invalid),Ig(3),Rb(`p-fields`,i.propertiesFields)(`p-value`,i.properties)}},dependencies:[NZ,RZ,qL,oi,Ac,Lf,Joe,Yoe,Hae,Mze],encapsulation:2,changeDetection:1})}return a})();var Ze=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Stepper Labs`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-stepper-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Ze,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ke],encapsulation:2,changeDetection:1})}return a})();var $e=[`addressForm`];var et=[`paymentForm`];var tt=[`personalForm`];var nt=[`successData`];function it(a,q){a&1&&_u(0,`po-loading-overlay`,18)}var We=(()=>{class a{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget=`Confirm Purchase`;currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget=`Next Step`;previousLabelWidget=`Previous Step`;constructor(){this.address=this.getAddress()}canActiveFinishStep(s){return k(s.form.valid).pipe(tt$1(()=>this.isLoadingPayment=!0),t_(2e3),Jr(()=>this.isLoadingPayment=!1))}canActiveNextStep(s){return s.valid}onConfirmStep(s){this.successData.open(),this.resetForms(),this.address=this.getAddress(),s.first()}getAddress(){return{city:`Sao Paulo`,code:`02511-000`,country:`Brazil`,number:`1000`,reference:``,street:`Avenida Braz Leme`}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-sales`]],viewQuery:function(r,i){if(r&1&&Cu($e,7)(et,7)(tt,7)(nt,7),r&2){let m;No(m=xo())&&(i.addressForm=m.first),No(m=xo())&&(i.paymentForm=m.first),No(m=xo())&&(i.personalForm=m.first),No(m=xo())&&(i.successData=m.first)}},standalone:!1,decls:84,vars:29,consts:[[`stepper`,``],[`personalForm`,`ngForm`],[`addressForm`,`ngForm`],[`paymentForm`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`successData`,``],[1,`po-row`],[`p-title`,`Product Detail`,1,`po-md-9`],[1,`po-lg-4`],[`src`,`../../../assets/graphics/shoe.gif`,`width`,`215`,`height`,`200`],[1,`po-lg-8`],[1,`po-font-title`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[`p-height`,`317`,`p-title`,`Price`,1,`po-md-3`],[1,`sample-stepper-position-relative`],[`p-text`,`Loading`],[`p-align-center`,`false`,`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`32`],[`p-label`,`Personal`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-primary-label`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`document`,`p-label`,`Document`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Address`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`,`p-primary-label`,`p-secondary-label`],[`name`,`address.street`,`p-label`,`Street/House`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`p-label`,`Number`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`code`,`p-label`,`Postal Code`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`reference`,`p-label`,`Reference`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Payment`,3,`p-can-active-next-step`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`cardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`cardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Finish`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Document`,1,`po-md-3`,3,`p-value`],[`p-label`,`Address`,1,`po-md-3`,3,`p-value`],[`p-label`,`Number`,1,`po-md-3`,3,`p-value`],[`p-label`,`City`,1,`po-md-3`,3,`p-value`],[`p-label`,`Country`,1,`po-md-3`,3,`p-value`],[`p-label`,`Product`,`p-value`,`Nike XYZ - Red/Gold Stripes`,1,`po-md-4`],[`p-label`,`Price`,`p-value`,`$2.500,00`,1,`po-md-2`],[`p-label`,`Discount`,`p-value`,`$500,00`,1,`po-md-2`],[`p-label`,`Tax`,`p-value`,`$160,00`,1,`po-md-2`],[`p-label`,`Final Price`,`p-value`,`$2.160,00`,1,`po-md-2`],[`p-title`,`Informations`],[`src`,`../../../assets/graphics/check.jpg`,`width`,`350`,`height`,`350`,1,`po-offset-md-6`,`po-offset-xl-3`],[1,`po-offset-md-8`,`po-offset-xl-3`,`po-font-title`]],template:function(r,i){if(r&1){let m=ZO();Jc(0,`div`,8)(1,`po-widget`,9)(2,`div`,8)(3,`div`,10),_u(4,`img`,11),Zg(),Jc(5,`div`,12)(6,`p`,13),Tk(7,`Nike XYZ - Red/Gold Stripes`),Zg(),Jc(8,`p`,14),Tk(9,`Brand: Nike | Style: Modern | Men's`),Zg(),Jc(10,`p`,15),Tk(11,`Width: 12.5 - COD: 001254648412319`),Zg(),_u(12,`po-divider`),Jc(13,`p`,15),Tk(14,`Price: $2.500,00 | Discount: $500,00 | Tax: $160,00`),Zg()()()(),Jc(15,`po-widget`,16)(16,`p`,15),Tk(17,`$2.500,00`),Zg(),Jc(18,`p`,15),Tk(19,`$500,00(-)`),Zg(),Jc(20,`p`,15),Tk(21,`$160,00(+)`),Zg(),_u(22,`po-divider`),Jc(23,`p`,14),Tk(24,`Total: $2.160,00`),Zg()()(),_u(25,`po-divider`),Jc(26,`div`,17),VO(27,it,1,0,`po-loading-overlay`,18),Jc(28,`po-stepper`,19,0)(30,`po-step`,20)(31,`po-widget`,21),vt$1(`p-primary-action`,function(){U_(m);let o=sk(29);return H_(o.next())}),Jc(32,`form`,null,1)(34,`div`,8)(35,`po-input`,22),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.name,o)||(i.name=o),H_(o)}),Zg(),Jc(36,`po-datepicker`,23),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.birthday,o)||(i.birthday=o),H_(o)}),Zg(),Jc(37,`po-input`,24),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.document,o)||(i.document=o),H_(o)}),Zg()()()()(),Jc(38,`po-step`,25)(39,`po-widget`,26),vt$1(`p-primary-action`,function(){U_(m);let o=sk(29);return H_(o.previous())})(`p-secondary-action`,function(){U_(m);let o=sk(29);return H_(o.next())}),Jc(40,`form`,null,2)(42,`div`,8)(43,`po-input`,27),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.address.street,o)||(i.address.street=o),H_(o)}),Zg(),Jc(44,`po-input`,28),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.address.number,o)||(i.address.number=o),H_(o)}),Zg(),Jc(45,`po-input`,29),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.address.city,o)||(i.address.city=o),H_(o)}),Zg()(),Jc(46,`div`,8)(47,`po-input`,30),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.address.code,o)||(i.address.code=o),H_(o)}),Zg(),Jc(48,`po-input`,31),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.address.country,o)||(i.address.country=o),H_(o)}),Zg(),Jc(49,`po-input`,32),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.address.reference,o)||(i.address.reference=o),H_(o)}),Zg()()()()(),Jc(50,`po-step`,33)(51,`po-widget`,26),vt$1(`p-primary-action`,function(){U_(m);let o=sk(29);return H_(o.previous())})(`p-secondary-action`,function(){U_(m);let o=sk(29);return H_(o.next())}),Jc(52,`form`,null,3)(54,`div`,8)(55,`po-input`,34,4),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.cardName,o)||(i.cardName=o),H_(o)}),Zg(),Jc(57,`po-input`,35,5),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.cardCode,o)||(i.cardCode=o),H_(o)}),Zg(),Jc(59,`po-input`,36,6),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.cardValid,o)||(i.cardValid=o),H_(o)}),Zg()()()()(),Jc(61,`po-step`,37)(62,`po-widget`,26),vt$1(`p-primary-action`,function(){U_(m);let o=sk(29);return H_(o.previous())})(`p-secondary-action`,function(){U_(m);let o=sk(29);return H_(i.onConfirmStep(o))}),Jc(63,`div`,8),_u(64,`po-info`,38)(65,`po-info`,39),Zg(),Jc(66,`div`,8),_u(67,`po-info`,40)(68,`po-info`,41)(69,`po-info`,42)(70,`po-info`,43),Zg(),_u(71,`po-divider`),Jc(72,`div`,8),_u(73,`po-info`,44)(74,`po-info`,45)(75,`po-info`,46)(76,`po-info`,47)(77,`po-info`,48),Zg()()()()(),Jc(78,`po-modal`,49,7)(80,`div`,8),_u(81,`img`,50),Jc(82,`p`,51),Tk(83,`Success! ORDER NUMBER: 5767686678609-XPTOA`),Zg()()()}if(r&2){let m=sk(33),c=sk(41),o=sk(53);Ig(27),BO(i.isLoadingPayment?27:-1),Ig(3),Rb(`p-can-active-next-step`,i.canActiveNextStep.bind(i,m)),Ig(),Rb(`p-primary-label`,i.nextLabelWidget),Ig(4),Yb(`ngModel`,i.name),Y0(),Ig(),Yb(`ngModel`,i.birthday),Y0(),Ig(),Yb(`ngModel`,i.document),Y0(),Ig(),Rb(`p-can-active-next-step`,i.canActiveNextStep.bind(i,c)),Ig(),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),Ig(4),Yb(`ngModel`,i.address.street),Y0(),Ig(),Yb(`ngModel`,i.address.number),Y0(),Ig(),Yb(`ngModel`,i.address.city),Y0(),Ig(2),Yb(`ngModel`,i.address.code),Y0(),Ig(),Yb(`ngModel`,i.address.country),Y0(),Ig(),Yb(`ngModel`,i.address.reference),Y0(),Ig(),Rb(`p-can-active-next-step`,i.canActiveFinishStep.bind(i,o)),Ig(),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),Ig(4),Yb(`ngModel`,i.cardName),Y0(),Ig(2),Yb(`ngModel`,i.cardCode),Y0(),Ig(2),Yb(`ngModel`,i.cardValid),Y0(),Ig(3),Rb(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.confirmLabelWidget),Ig(2),Rb(`p-value`,i.name),Ig(),Rb(`p-value`,i.document),Ig(2),Rb(`p-value`,i.address.street),Ig(),Rb(`p-value`,i.address.number),Ig(),Rb(`p-value`,i.address.city),Ig(),Rb(`p-value`,i.address.country)}},dependencies:[NZ,TZ,RZ,JL,qL,Lf,Qte,U4,Yoe,BP,ea,Hae,Mze,fae],styles:[`.sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}`],changeDetection:1})}return a})();var at=a=>({"docs-sample-code-tabs":a});var Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-sales-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Stepper - Sales`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-stepper-position-relative {
  position: relative;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-stepper-sales`),Zg(),_u(29,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,at,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,We],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{http=p(kI);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(s){return this.http.get(`${this.url}/getCities/${s}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(r){return new(r||a)};static ɵprov=R({token:a,factory:a.ɵfac,providedIn:`root`})}return a})();var rt=[`basicInformation`];var lt=[`academicFormation`];var st=[`professionalExperiences`];function mt(a,q){if(a&1&&(Jc(0,`div`,23)(1,`po-widget`,24)(2,`p`),Tk(3),Zg()()()),a&2){let s=q.$implicit;Ig(),Rb(`p-title`,s.title),Ig(2),Gb(s.description)}}function dt(a,q){if(a&1&&(Jc(0,`div`,4),_u(1,`po-divider`,23),$O(2,mt,4,2,`div`,23,HO),Zg()),a&2){let s=nk();Ig(2),zO(s.professionalExperiences)}}var Ne=(()=>{class a{sampleService=p(Be);changeDetector=p(Ge$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(s){let r={title:s.value.experienceTitle,description:s.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:`Maria Alice`,email:`mariaalice@gmail.com`,phone:`47988888888`,state:`sp`,city:1}}getHighSchool(){return{name:`Escola de Ensino Básico Dr Jorge Lacerda`,city:`Joinville`,conclusionYear:`2016`}}getUniversityEducation(){return{name:`Universidade Federal do Santa Catarina`,city:`Florianópolis`,conclusionYear:`2020`}}getProfessionalExperiencies(){return[{title:`Analista de desenvolvimento de software na TOTVS`,description:`Responsável pelo desenvolvimento e manutenção de sistemas do segmento de manufatura. Do ano de 2019 à 2020`}]}getCitiesByState(s){this.citiesSubscription=this.sampleService.getCitiesByState(s).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(s=>{this.stateOptions=s.items,this.getCitiesByState(this.basicInformation.state)})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-active`]],viewQuery:function(r,i){if(r&1&&Cu(rt,7)(lt,7)(st,7)(Mze,5),r&2){let m;No(m=xo())&&(i.basicInformationForm=m.first),No(m=xo())&&(i.academicFormationForm=m.first),No(m=xo())&&(i.professionalExperiencesForm=m.first),No(m=xo())&&(i.stepper=m.first)}},standalone:!1,decls:32,vars:16,consts:[[`basicInformationForm`,`ngForm`],[`academicFormationForm`,`ngForm`],[`professionalExperiencesForm`,`ngForm`],[`p-label`,`Basic information`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-label`,`Phone`,`p-optional`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`city`,`p-label`,`City`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Academic formation`],[`p-label`,`High school`,1,`po-md-12`],[`name`,`highSchoolName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`University education`,1,`po-md-12`],[`name`,`universityEducationName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Professional experiences`],[`name`,`experienceTitle`,`p-label`,`Professional position`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`experienceDescripton`,`p-label`,`Describe your responsibilities`,`p-rows`,`4`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`type`,`submit`,`p-label`,`Add professional experience`,1,`po-md-4`,3,`p-click`],[1,`po-md-12`],[1,`po-md-12`,3,`p-title`]],template:function(r,i){if(r&1){let m=ZO();Jc(0,`po-container`)(1,`po-stepper`)(2,`po-step`,3)(3,`form`,null,0)(5,`div`,4)(6,`po-input`,5),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.basicInformation.name,o)||(i.basicInformation.name=o),H_(o)}),Zg(),Jc(7,`po-email`,6),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.basicInformation.email,o)||(i.basicInformation.email=o),H_(o)}),Zg(),Jc(8,`po-input`,7),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.basicInformation.phone,o)||(i.basicInformation.phone=o),H_(o)}),Zg(),Jc(9,`po-select`,8),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.basicInformation.state,o)||(i.basicInformation.state=o),H_(o)}),vt$1(`p-change`,function(){return i.onChangeState()}),Zg(),Jc(10,`po-select`,9),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.basicInformation.city,o)||(i.basicInformation.city=o),H_(o)}),Zg()()()(),Jc(11,`po-step`,10)(12,`form`,null,1)(14,`div`,4),_u(15,`po-divider`,11),Jc(16,`po-input`,12),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.highSchool.name,o)||(i.highSchool.name=o),H_(o)}),Zg(),Jc(17,`po-input`,13),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.highSchool.city,o)||(i.highSchool.city=o),H_(o)}),Zg(),Jc(18,`po-input`,14),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),H_(o)}),Zg()(),Jc(19,`div`,4),_u(20,`po-divider`,15),Jc(21,`po-input`,16),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.universityEducation.name,o)||(i.universityEducation.name=o),H_(o)}),Zg(),Jc(22,`po-input`,17),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.universityEducation.city,o)||(i.universityEducation.city=o),H_(o)}),Zg(),Jc(23,`po-input`,18),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),H_(o)}),Zg()()()(),Jc(24,`po-step`,19)(25,`form`,null,2)(27,`div`,4)(28,`po-input`,20),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.experienceTitle,o)||(i.experienceTitle=o),H_(o)}),Zg(),Jc(29,`po-textarea`,21),W0(),Kb(`ngModelChange`,function(o){return U_(m),Ak(i.experienceDescripton,o)||(i.experienceDescripton=o),H_(o)}),Zg(),Jc(30,`po-button`,22),vt$1(`p-click`,function(){U_(m);let o=sk(26);return i.addProfessionalExperiences(o),H_(o.reset())}),Zg()()(),VO(31,dt,4,0,`div`,4),Zg()()()}r&2&&(Ig(6),Yb(`ngModel`,i.basicInformation.name),Y0(),Ig(),Yb(`ngModel`,i.basicInformation.email),Y0(),Ig(),Yb(`ngModel`,i.basicInformation.phone),Y0(),Ig(),Yb(`ngModel`,i.basicInformation.state),Rb(`p-options`,i.stateOptions),Y0(),Ig(),Yb(`ngModel`,i.basicInformation.city),Rb(`p-options`,i.cityOptions),Y0(),Ig(6),Yb(`ngModel`,i.highSchool.name),Y0(),Ig(),Yb(`ngModel`,i.highSchool.city),Y0(),Ig(),Yb(`ngModel`,i.highSchool.conclusionYear),Y0(),Ig(3),Yb(`ngModel`,i.universityEducation.name),Y0(),Ig(),Yb(`ngModel`,i.universityEducation.city),Y0(),Ig(),Yb(`ngModel`,i.universityEducation.conclusionYear),Y0(),Ig(5),Yb(`ngModel`,i.experienceTitle),Y0(),Ig(),Yb(`ngModel`,i.experienceDescripton),Y0(),Ig(2),BO(i.professionalExperiences?31:-1))},dependencies:[NZ,TZ,RZ,JL,qL,oi,Ac,Lf,o5,U4,Woe,Goe,Hae,Mze,fae],encapsulation:2,changeDetection:1})}return a})();var ut=a=>({"docs-sample-code-tabs":a});var qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-active-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Stepper - Active`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-stepper-active/sample-po-stepper-active.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-container>
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-stepper-active/sample-po-stepper-active.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import {
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
`),Zg(),Jc(21,`label`,6),Tk(22,`sample-po-stepper-active/sample-po-stepper-active.service.ts`),Zg(),Jc(23,`pre`,9),Tk(24,`import { HttpClient } from '@angular/common/http';
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
`),Zg()()()()(),Jc(25,`div`,10),_u(26,`sample-po-stepper-active`),Zg(),_u(27,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ut,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ne],encapsulation:2,changeDetection:1})}return a})();var ze=(()=>{class a{changeDetector=p(Ge$1);currentStep;stepsWithStatus=[{label:`Step 1`,status:qt.Done},{label:`Step 2`,status:qt.Active},{label:`Step 3`,status:qt.Default},{label:`Step 4`,status:qt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(s){this.currentStep=s,this.stepsWithStatus.forEach(r=>{r.status===qt.Active&&(r.status=qt.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===qt.Active&&(r.status=qt.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===qt.Disabled&&(this.stepsWithStatus[this.currentStep].status=qt.Default)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-steps`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-change-step`,`p-align-center`,`p-sequential`,`p-step`,`p-steps`]],template:function(r,i){r&1&&(Jc(0,`po-stepper`,0),vt$1(`p-change-step`,function(c){return i.onChangeStatus(c)}),Zg()),r&2&&Rb(`p-align-center`,!1)(`p-sequential`,!1)(`p-step`,i.currentStep)(`p-steps`,i.stepsWithStatus)},dependencies:[Mze],encapsulation:2,changeDetection:1})}return a})();var ht=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-steps-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Stepper - Steps`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-stepper-steps`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ht,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ze],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-stepper-doc`]],standalone:!1,decls:1008,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-step`],[`href`,`/documentation/po-stepper#stepIconsProperty`],[`href`,`https://angular.io/api/core/ViewChild`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`stepIconsProperty`],[`pan`,``,1,`docs-api-property-type`,`Array<PoStepperItem>`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`PoStepperStatus`],[`id`,`stepperOrientation`],[`id`,`stepperStatus`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoStepperModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-stepper`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoStepperComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O `),Jc(15,`code`),Tk(16,`po-stepper`),Zg(),Tk(17,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),Zg(),Jc(18,`p`),Tk(19,`Existem duas formas de utilização:`),Zg(),Jc(20,`p`),Tk(21,`1 - Usando o componente `),Jc(22,`a`,6)(23,`strong`),Tk(24,`po-step`),Zg()(),Tk(25,` para renderizar e descrever os passos.`),Zg(),Jc(26,`p`),Tk(27,`2 - Através da propriedade `),Jc(28,`code`),Tk(29,`p-steps`),Zg(),Tk(30,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Jc(31,`em`),Tk(32,`step`),Zg(),Tk(33,` ativo.`),Zg(),Jc(34,`p`),Tk(35,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Jc(36,`em`),Tk(37,`steps`),Zg(),Tk(38,`.`),Zg(),Jc(39,`p`),Tk(40,`Também é possível navegar entre os `),Jc(41,`em`),Tk(42,`steps`),Zg(),Tk(43,` através do teclado utilizando a tecla `),Jc(44,`em`),Tk(45,`tab`),Zg(),Tk(46,` e, para ativar o `),Jc(47,`em`),Tk(48,`step`),Zg(),Tk(49,` em foco basta
pressionar a tecla `),Jc(50,`em`),Tk(51,`enter`),Zg(),Tk(52,`. Além disso, é possível ativar a exibição de ícones no lugar de números nos `),Jc(53,`em`),Tk(54,`steps`),Zg(),Tk(55,` atrav\xE9s da
propriedade `),Jc(56,`a`,7)(57,`code`),Tk(58,`p-step-icons`),Zg()(),Tk(59,`.`),Zg(),Jc(60,`h4`),Tk(61,`Utilizando os métodos do componente:`),Zg(),Jc(62,`p`),Tk(63,`Para acessar os métodos do componente é necessário ter a referência do mesmo.`),Zg(),Jc(64,`p`),Tk(65,`Por exemplo, utilizando um `),Jc(66,`a`,8)(67,`strong`),Tk(68,`ViewChild`),Zg()(),Tk(69,`:`),Zg(),Jc(70,`pre`)(71,`code`),Tk(72,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),Zg()(),Jc(73,`p`),Tk(74,`E para acessar o método:`),Zg(),Jc(75,`pre`)(76,`code`),Tk(77,`poStepperComponent.next();
`),Zg()(),Jc(78,`h4`),Tk(79,`Boas práticas`),Zg(),Jc(80,`ul`)(81,`li`),Tk(82,`Evite `),Jc(83,`code`),Tk(84,`labels`),Zg(),Tk(85,` extensos que quebram o layout do `),Jc(86,`code`),Tk(87,`po-stepper`),Zg(),Tk(88,`, use `),Jc(89,`code`),Tk(90,`labels`),Zg(),Tk(91,` diretos, curtos e intuitivos.`),Zg(),Jc(92,`li`),Tk(93,`Utilize apenas um `),Jc(94,`code`),Tk(95,`po-stepper`),Zg(),Tk(96,` por página.`),Zg()(),Jc(97,`h4`),Tk(98,`Tokens customizáveis`),Zg(),Jc(99,`p`),Tk(100,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(101,`blockquote`)(102,`p`),Tk(103,`Para maiores informações, acesse o guia `),Jc(104,`a`,9),Tk(105,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(106,`.`),Zg()(),Jc(107,`table`)(108,`thead`)(109,`tr`)(110,`th`),Tk(111,`Propriedade`),Zg(),Jc(112,`th`),Tk(113,`Descrição`),Zg(),Jc(114,`th`),Tk(115,`Valor Padrão`),Zg()()(),Jc(116,`tbody`)(117,`tr`)(118,`td`)(119,`strong`),Tk(120,`Label`),Zg()(),_u(121,`td`)(122,`td`),Zg(),Jc(123,`tr`)(124,`td`)(125,`code`),Tk(126,`--font-family`),Zg()(),Jc(127,`td`),Tk(128,`Família tipográfica usada`),Zg(),Jc(129,`td`)(130,`code`),Tk(131,`var(--font-family-theme)`),Zg()()(),Jc(132,`tr`)(133,`td`)(134,`code`),Tk(135,`--font-size`),Zg()(),Jc(136,`td`),Tk(137,`Tamanho da fonte`),Zg(),Jc(138,`td`)(139,`code`),Tk(140,`var(--font-size-default)`),Zg()()(),Jc(141,`tr`)(142,`td`)(143,`code`),Tk(144,`--font-weight`),Zg()(),Jc(145,`td`),Tk(146,`Peso da fonte`),Zg(),Jc(147,`td`)(148,`code`),Tk(149,`var(--font-weight-normal)`),Zg()()(),Jc(150,`tr`)(151,`td`)(152,`strong`),Tk(153,`Step - Done`),Zg()(),_u(154,`td`)(155,`td`),Zg(),Jc(156,`tr`)(157,`td`)(158,`code`),Tk(159,`--text-color`),Zg()(),Jc(160,`td`),Tk(161,`Cor do texto no step concluído`),Zg(),Jc(162,`td`)(163,`code`),Tk(164,`var(--color-neutral-dark-70)`),Zg()()(),Jc(165,`tr`)(166,`td`)(167,`code`),Tk(168,`--color-icon-done`),Zg()(),Jc(169,`td`),Tk(170,`Cor do ícone no step concluído`),Zg(),Jc(171,`td`)(172,`code`),Tk(173,`var(--color-neutral-dark-70)`),Zg()()(),Jc(174,`tr`)(175,`td`)(176,`code`),Tk(177,`--background-done`),Zg()(),Jc(178,`td`),Tk(179,`Cor de fundo no step concluído`),Zg(),Jc(180,`td`)(181,`code`),Tk(182,`var(--color-neutral-light-00)`),Zg()()(),Jc(183,`tr`)(184,`td`)(185,`strong`),Tk(186,`Line - Done`),Zg()(),_u(187,`td`)(188,`td`),Zg(),Jc(189,`tr`)(190,`td`)(191,`code`),Tk(192,`--color-line-done`),Zg()(),Jc(193,`td`),Tk(194,`Cor da linha no step concluído`),Zg(),Jc(195,`td`)(196,`code`),Tk(197,`var(--color-neutral-mid-40)`),Zg()()(),Jc(198,`tr`)(199,`td`)(200,`strong`),Tk(201,`Step - Current`),Zg()(),_u(202,`td`)(203,`td`),Zg(),Jc(204,`tr`)(205,`td`)(206,`code`),Tk(207,`--color-icon-current`),Zg()(),Jc(208,`td`),Tk(209,`Cor do ícone no step atual`),Zg(),Jc(210,`td`)(211,`code`),Tk(212,`var(--color-neutral-light-00)`),Zg()()(),Jc(213,`tr`)(214,`td`)(215,`code`),Tk(216,`--background-current`),Zg()(),Jc(217,`td`),Tk(218,`Cor de fundo no step atual`),Zg(),Jc(219,`td`)(220,`code`),Tk(221,`var(--color-action-default)`),Zg()()(),Jc(222,`tr`)(223,`td`)(224,`code`),Tk(225,`--font-weight-current`),Zg()(),Jc(226,`td`),Tk(227,`Peso da fonte no step atual`),Zg(),Jc(228,`td`)(229,`code`),Tk(230,`var(--font-weight-bold)`),Zg()()(),Jc(231,`tr`)(232,`td`)(233,`strong`),Tk(234,`Step - Next`),Zg()(),_u(235,`td`)(236,`td`),Zg(),Jc(237,`tr`)(238,`td`)(239,`code`),Tk(240,`--font-size-circle`),Zg()(),Jc(241,`td`),Tk(242,`Tamanho da fonte no círculo do próximo step`),Zg(),Jc(243,`td`)(244,`code`),Tk(245,`var(--font-size-sm)`),Zg()()(),Jc(246,`tr`)(247,`td`)(248,`code`),Tk(249,`--color-next`),Zg()(),Jc(250,`td`),Tk(251,`Cor do ícone no próximo step`),Zg(),Jc(252,`td`)(253,`code`),Tk(254,`var(--color-action-disabled)`),Zg()()(),Jc(255,`tr`)(256,`td`)(257,`code`),Tk(258,`--text-color-next`),Zg()(),Jc(259,`td`),Tk(260,`Cor do texto no próximo step`),Zg(),Jc(261,`td`)(262,`code`),Tk(263,`var(--color-neutral-light-30)`),Zg()()(),Jc(264,`tr`)(265,`td`)(266,`strong`),Tk(267,`Focused`),Zg()(),_u(268,`td`)(269,`td`),Zg(),Jc(270,`tr`)(271,`td`)(272,`code`),Tk(273,`--outline-color-focused`),Zg()(),Jc(274,`td`),Tk(275,`Cor do outline do estado de focus`),Zg(),Jc(276,`td`)(277,`code`),Tk(278,`var(--color-action-focus)`),Zg()()()()()(),Jc(279,`div`,10)(280,`h4`,11),Tk(281,`Seletor`),Zg(),Jc(282,`pre`,12),Tk(283,`<po-stepper
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
`),Zg()(),Jc(284,`h4`,13),Tk(285,`Propriedades`),Zg(),Jc(286,`table`,14)(287,`tr`,15)(288,`th`,16),Tk(289,`Nome`),Zg(),Jc(290,`th`,16),Tk(291,`Tipo`),Zg(),Jc(292,`th`,16),Tk(293,`Padrão`),Zg(),Jc(294,`th`,16),Tk(295,`Descrição`),Zg()(),Jc(296,`tr`,17)(297,`td`,18)(298,`div`,19)(299,`span`,20),Tk(300,` p-align-center`),_u(301,`br`),Zg()()(),Jc(302,`td`,21)(303,`code`,22),Tk(304,`boolean`),Zg()(),Jc(305,`td`,23)(306,`p`)(307,`code`),Tk(308,`true`),Zg()()(),Jc(309,`td`,24)(310,`em`)(311,`strong`),Tk(312,`(opcional)`),Zg()(),Jc(313,`p`),Tk(314,`Define o alinhamento dos `),Jc(315,`em`),Tk(316,`steps`),Zg(),Tk(317,` e `),Jc(318,`em`),Tk(319,`labels`),Zg(),Tk(320,` no `),Jc(321,`em`),Tk(322,`stepper`),Zg(),Tk(323,`, dependendo da orientação.`),Zg(),Jc(324,`ul`)(325,`li`),Tk(326,`Quando `),Jc(327,`code`),Tk(328,`true`),Zg(),Tk(329,`, ficam centralizados em ambas as orientações (horizontal e vertical).`),Zg(),Jc(330,`li`),Tk(331,`Quando `),Jc(332,`code`),Tk(333,`false`),Zg(),Tk(334,`, ficam alinhados à esquerda na orientação horizontal e ao topo na orientação vertical.`),Zg()()()(),Jc(335,`tr`,17)(336,`td`,18)(337,`div`,19)(338,`span`,20),Tk(339,` p-disable-click`),_u(340,`br`),Zg()()(),Jc(341,`td`,21)(342,`code`,22),Tk(343,`boolean`),Zg()(),Jc(344,`td`,23)(345,`p`)(346,`code`),Tk(347,`false`),Zg()()(),Jc(348,`td`,24)(349,`em`)(350,`strong`),Tk(351,`(opcional)`),Zg()(),Jc(352,`p`),Tk(353,`Desabilita o clique nos steps.`),Zg()()(),Jc(354,`tr`,17)(355,`td`,18)(356,`div`,19)(357,`span`,20),Tk(358,` p-step-icon-active`),_u(359,`br`),Zg()()(),Jc(360,`td`,21)(361,`code`,25),Tk(362,`string `),Zg(),Jc(363,`code`,26),Tk(364,` TemplateRef<void>`),Zg()(),Jc(365,`td`,23)(366,`p`)(367,`code`),Tk(368,`po-icon-edit`),Zg()()(),Jc(369,`td`,24)(370,`em`)(371,`strong`),Tk(372,`(opcional)`),Zg()(),Jc(373,`p`),Tk(374,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Jc(375,`a`,27),Tk(376,`Biblioteca de ícones`),Zg(),Tk(377,`.`),Zg(),Jc(378,`pre`)(379,`code`),Tk(380,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),Zg()(),Jc(381,`p`),Tk(382,`Para customizar o ícone através do `),Jc(383,`code`),Tk(384,`TemplateRef`),Zg(),Tk(385,`, veja a documentação da propriedade `),Jc(386,`code`),Tk(387,`p-step-icon-done`),Zg(),Tk(388,`.`),Zg(),Jc(389,`blockquote`)(390,`p`),Tk(391,`Deve-se usar `),Jc(392,`code`),Tk(393,`font-size: inherit`),Zg(),Tk(394,` para ajustar ícones que não se ajustam automaticamente.`),Zg()()()(),Jc(395,`tr`,17)(396,`td`,18)(397,`div`,19)(398,`span`,20),Tk(399,` p-step-icon-done`),_u(400,`br`),Zg()()(),Jc(401,`td`,21)(402,`code`,25),Tk(403,`string `),Zg(),Jc(404,`code`,26),Tk(405,` TemplateRef<void>`),Zg()(),Jc(406,`td`,23)(407,`p`)(408,`code`),Tk(409,`po-icon-ok`),Zg()()(),Jc(410,`td`,24)(411,`em`)(412,`strong`),Tk(413,`(opcional)`),Zg()(),Jc(414,`p`),Tk(415,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Jc(416,`a`,27),Tk(417,`Biblioteca de ícones`),Zg()(),Jc(418,`pre`)(419,`code`),Tk(420,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),Zg()(),Jc(421,`p`),Tk(422,`Outra opção seria a customização do ícone através do `),Jc(423,`code`),Tk(424,`TemplateRef`),Zg(),Tk(425,`, conforme exemplo abaixo:`),Zg(),Jc(426,`pre`)(427,`code`),Tk(428,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),Zg()(),Jc(429,`blockquote`)(430,`p`),Tk(431,`Deve-se usar `),Jc(432,`code`),Tk(433,`font-size: inherit`),Zg(),Tk(434,` para ajustar ícones que não se ajustam automaticamente.`),Zg()()()(),Jc(435,`tr`,17)(436,`td`,18)(437,`div`,28)(438,`span`,29),Tk(439,` (p-change-step)`),_u(440,`br`),Zg()()(),Jc(441,`td`,21)(442,`code`,30),Tk(443,`EventEmitter`),Zg()(),Jc(444,`td`,23),Tk(445,`-`),Zg(),Jc(446,`td`,24)(447,`p`),Tk(448,`Ação que será executada quando o usuário mudar o passo do `),Jc(449,`code`),Tk(450,`po-stepper`),Zg(),Tk(451,`.`),Zg()()(),Jc(452,`tr`,17)(453,`td`,18)(454,`div`,19)(455,`span`,20),Tk(456,` p-orientation`),_u(457,`br`),Zg()()(),Jc(458,`td`,21)(459,`code`,31),Tk(460,`PoStepperOrientation`),Zg()(),Jc(461,`td`,23)(462,`p`)(463,`code`),Tk(464,`PoStepperOrientation.Horizontal`),Zg()()(),Jc(465,`td`,24)(466,`em`)(467,`strong`),Tk(468,`(opcional)`),Zg()(),Jc(469,`p`),Tk(470,`Define a orientação de exibição do `),Jc(471,`code`),Tk(472,`po-stepper`),Zg(),Tk(473,`.`),Zg(),Jc(474,`blockquote`)(475,`p`),Tk(476,`Veja os valores válidos no `),Jc(477,`em`),Tk(478,`enum`),Zg(),Jc(479,`a`,32),Tk(480,`PoStepperOrientation`),Zg(),Tk(481,`.`),Zg()()()(),Jc(482,`tr`,17)(483,`td`,18)(484,`div`,19)(485,`span`,20),Tk(486,` p-sequential`),_u(487,`br`),Zg()()(),Jc(488,`td`,21)(489,`code`,22),Tk(490,`boolean`),Zg()(),Jc(491,`td`,23)(492,`p`)(493,`code`),Tk(494,`true`),Zg()()(),Jc(495,`td`,24)(496,`em`)(497,`strong`),Tk(498,`(opcional)`),Zg()(),Jc(499,`p`),Tk(500,`Define se o `),Jc(501,`code`),Tk(502,`po-stepper`),Zg(),Tk(503,` será sequencial ou aleatório.`),Zg(),Jc(504,`blockquote`)(505,`p`),Tk(506,`Ao utilizar o componente `),Jc(507,`a`,6)(508,`strong`),Tk(509,`po-step`),Zg()(),Tk(510,`, o valor desta propriedade sempre será verdadeiro.`),Zg()()()(),Jc(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),Tk(515,` p-step`),_u(516,`br`),Zg()()(),Jc(517,`td`,21)(518,`code`,33),Tk(519,`number`),Zg()(),Jc(520,`td`,23)(521,`p`)(522,`code`),Tk(523,`1`),Zg()()(),Jc(524,`td`,24)(525,`em`)(526,`strong`),Tk(527,`(opcional)`),Zg()(),Jc(528,`p`),Tk(529,`Controla o passo atual do `),Jc(530,`code`),Tk(531,`po-stepper`),Zg(),Tk(532,`.`),Zg(),Jc(533,`blockquote`)(534,`p`),Tk(535,`Ao utilizar esta propriedade e também utilizar o componente `),Jc(536,`a`,6)(537,`strong`),Tk(538,`po-step`),Zg()(),Tk(539,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Jc(540,`a`,6)(541,`strong`),Tk(542,`po-step`),Zg()(),Tk(543,`.`),Zg()()()(),Jc(544,`tr`,17)(545,`td`,18)(546,`div`,19)(547,`span`,20),Tk(548,` p-step-icons`),_u(549,`br`),Zg()()(),Jc(550,`td`,21)(551,`code`,22),Tk(552,`boolean`),Zg()(),Jc(553,`td`,23)(554,`p`)(555,`code`),Tk(556,`false`),Zg()()(),Jc(557,`td`,24)(558,`em`)(559,`strong`),Tk(560,`(opcional)`),Zg()(),Jc(561,`p`),_u(562,`a`,34),Zg(),Jc(563,`p`),Tk(564,`Habilita a exibição de ícone ao invés de número no centro do círculo dos `),Jc(565,`em`),Tk(566,`steps`),Zg(),Tk(567,`.`),Zg()()(),Jc(568,`tr`,17)(569,`td`,18)(570,`div`,19)(571,`span`,20),Tk(572,` p-step-size`),_u(573,`br`),Zg()()(),Jc(574,`td`,21)(575,`code`,33),Tk(576,`number`),Zg()(),Jc(577,`td`,23)(578,`p`)(579,`code`),Tk(580,`24`),Zg()()(),Jc(581,`td`,24)(582,`em`)(583,`strong`),Tk(584,`(opcional)`),Zg()(),Jc(585,`p`),Tk(586,`Define o tamanho dos `),Jc(587,`em`),Tk(588,`steps`),Zg(),Tk(589,` em `),Jc(590,`em`),Tk(591,`pixels`),Zg(),Tk(592,`, possibilitando um maior destaque.`),Zg(),Jc(593,`p`),Tk(594,`O valor informado deve ser entre `),Jc(595,`code`),Tk(596,`24`),Zg(),Tk(597,` e `),Jc(598,`code`),Tk(599,`64`),Zg(),Tk(600,`.`),Zg(),Jc(601,`blockquote`)(602,`p`),Tk(603,`Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor `),Jc(604,`em`),Tk(605,`default`),Zg(),Tk(606,`.`),Zg()()()(),Jc(607,`tr`,17)(608,`td`,18)(609,`div`,19)(610,`span`,20),Tk(611,` p-steps`),_u(612,`br`),Zg()()(),Jc(613,`td`,21)(614,`code`,35),Tk(615,`Array<PoStepperItem>`),Zg()(),Jc(616,`td`,23),Tk(617,`-`),Zg(),Jc(618,`td`,24)(619,`em`)(620,`strong`),Tk(621,`(opcional)`),Zg()(),Jc(622,`p`),Tk(623,`Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Zg(),Jc(624,`blockquote`)(625,`p`),Tk(626,`Ao utilizar esta propriedade e também utilizar o componente `),Jc(627,`a`,6)(628,`strong`),Tk(629,`po-step`),Zg()(),Tk(630,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Jc(631,`a`,6)(632,`strong`),Tk(633,`po-step`),Zg()(),Tk(634,`.`),Zg()()()()(),Jc(635,`h3`,13),Tk(636,`Métodos`),Zg(),Jc(637,`table`,36)(638,`tr`,17)(639,`th`,37)(640,`div`,19)(641,`h4`)(642,`span`,20),Tk(643,` active `),Zg()()()()(),Jc(644,`tr`,24)(645,`td`,24)(646,`p`),Tk(647,`Altera o status do `),Jc(648,`em`),Tk(649,`step`),Zg(),Tk(650,` para ativo.`),Zg(),Jc(651,`blockquote`)(652,`p`),Tk(653,`Este método é valido apenas para as implementações que utilizam o componente `),Jc(654,`a`,6)(655,`strong`),Tk(656,`po-step`),Zg()(),Tk(657,`.`),Zg()()()()(),Jc(658,`h5`)(659,`b`),Tk(660,`Parâmetros`),Zg()(),Jc(661,`table`,14)(662,`tr`,15)(663,`th`,16),Tk(664,`Nome`),Zg(),Jc(665,`th`,16),Tk(666,`Tipo`),Zg(),Jc(667,`th`,16),Tk(668,`Descrição`),Zg()(),Jc(669,`tr`,17)(670,`td`,18),Tk(671,` index`),Zg(),Jc(672,`td`,21)(673,`code`,38),Tk(674,` number `),Zg()(),Jc(675,`td`,24)(676,`p`),Tk(677,`Índice do `),Jc(678,`code`),Tk(679,`po-step`),Zg(),Tk(680,` que se deseja ativar.`),Zg()()()(),_u(681,`br`),Jc(682,`table`,36)(683,`tr`,17)(684,`th`,37)(685,`div`,19)(686,`h4`)(687,`span`,20),Tk(688,` first `),Zg()()()()(),Jc(689,`tr`,24)(690,`td`,24)(691,`p`),Tk(692,`Ativa o primeiro `),Jc(693,`em`),Tk(694,`step`),Zg(),Tk(695,`.`),Zg(),Jc(696,`blockquote`)(697,`p`),Tk(698,`Este método é valido apenas para as implementações que utilizam o componente `),Jc(699,`a`,6)(700,`strong`),Tk(701,`po-step`),Zg()(),Tk(702,`.`),Zg()()()()(),_u(703,`br`),Jc(704,`table`,36)(705,`tr`,17)(706,`th`,37)(707,`div`,19)(708,`h4`)(709,`span`,20),Tk(710,` next `),Zg()()()()(),Jc(711,`tr`,24)(712,`td`,24)(713,`p`),Tk(714,`Ativa o próximo `),Jc(715,`em`),Tk(716,`step`),Zg(),Tk(717,`.`),Zg(),Jc(718,`blockquote`)(719,`p`),Tk(720,`Este método é valido apenas para as implementações que utilizam o componente `),Jc(721,`a`,6)(722,`strong`),Tk(723,`po-step`),Zg()(),Tk(724,`.`),Zg()()()()(),_u(725,`br`),Jc(726,`table`,36)(727,`tr`,17)(728,`th`,37)(729,`div`,19)(730,`h4`)(731,`span`,20),Tk(732,` previous `),Zg()()()()(),Jc(733,`tr`,24)(734,`td`,24)(735,`p`),Tk(736,`Ativa o `),Jc(737,`em`),Tk(738,`step`),Zg(),Tk(739,` anterior.`),Zg(),Jc(740,`blockquote`)(741,`p`),Tk(742,`Este método é valido apenas para as implementações que utilizam o componente `),Jc(743,`a`,6)(744,`strong`),Tk(745,`po-step`),Zg()(),Tk(746,`.`),Zg()()()()(),_u(747,`br`),Jc(748,`h3`),Tk(749,`Interfaces`),Zg(),Jc(750,`h4`,39)(751,`code`,5),Tk(752,`PoStepperItem`),Zg()(),Jc(753,`div`,2)(754,`p`),Tk(755,`Interface para definição dos `),Jc(756,`em`),Tk(757,`steps`),Zg(),Tk(758,` do componente `),Jc(759,`code`),Tk(760,`po-stepper`),Zg(),Tk(761,` quando utilizada a propriedade `),Jc(762,`code`),Tk(763,`p-steps`),Zg(),Tk(764,`.`),Zg()(),Jc(765,`h4`,13),Tk(766,`Propriedades`),Zg(),Jc(767,`table`,14)(768,`tr`,15)(769,`th`,16),Tk(770,`Nome`),Zg(),Jc(771,`th`,16),Tk(772,`Tipo`),Zg(),Jc(773,`th`,16),Tk(774,`Descrição`),Zg()(),Jc(775,`tr`,17)(776,`td`,18)(777,`div`,19)(778,`span`,20),Tk(779,` iconActive`),_u(780,`br`),Zg()()(),Jc(781,`td`,21)(782,`code`,25),Tk(783,`string `),Zg(),Jc(784,`code`,26),Tk(785,` TemplateRef<void>`),Zg()(),Jc(786,`td`,24)(787,`em`)(788,`strong`),Tk(789,`(opcional)`),Zg()(),Jc(790,`p`),Tk(791,`Define o ícone do `),Jc(792,`em`),Tk(793,`step`),Zg(),Tk(794,` ativo.`),Zg()()(),Jc(795,`tr`,17)(796,`td`,18)(797,`div`,19)(798,`span`,20),Tk(799,` iconDefault`),_u(800,`br`),Zg()()(),Jc(801,`td`,21)(802,`code`,25),Tk(803,`string `),Zg(),Jc(804,`code`,26),Tk(805,` TemplateRef<void>`),Zg()(),Jc(806,`td`,24)(807,`em`)(808,`strong`),Tk(809,`(opcional)`),Zg()(),Jc(810,`p`),Tk(811,`Define o ícone do `),Jc(812,`em`),Tk(813,`step`),Zg(),Tk(814,` default.`),Zg()()(),Jc(815,`tr`,17)(816,`td`,18)(817,`div`,19)(818,`span`,20),Tk(819,` iconDone`),_u(820,`br`),Zg()()(),Jc(821,`td`,21)(822,`code`,25),Tk(823,`string `),Zg(),Jc(824,`code`,26),Tk(825,` TemplateRef<void>`),Zg()(),Jc(826,`td`,24)(827,`em`)(828,`strong`),Tk(829,`(opcional)`),Zg()(),Jc(830,`p`),Tk(831,`Define o ícone do `),Jc(832,`em`),Tk(833,`step`),Zg(),Tk(834,` concluído.`),Zg()()(),Jc(835,`tr`,17)(836,`td`,18)(837,`div`,19)(838,`span`,20),Tk(839,` id`),_u(840,`br`),Zg()()(),Jc(841,`td`,21)(842,`code`,25),Tk(843,`string`),Zg()(),Jc(844,`td`,24)(845,`em`)(846,`strong`),Tk(847,`(opcional)`),Zg()(),Jc(848,`p`),Tk(849,`Identificador único do step.`),Zg()()(),Jc(850,`tr`,17)(851,`td`,18)(852,`div`,19)(853,`span`,20),Tk(854,` label`),_u(855,`br`),Zg()()(),Jc(856,`td`,21)(857,`code`,25),Tk(858,`string`),Zg()(),Jc(859,`td`,24)(860,`em`)(861,`strong`),Tk(862,`(opcional)`),Zg()(),Jc(863,`p`),Tk(864,`Texto do item do stepper.`),Zg()()(),Jc(865,`tr`,17)(866,`td`,18)(867,`div`,19)(868,`span`,20),Tk(869,` status`),_u(870,`br`),Zg()()(),Jc(871,`td`,21)(872,`code`,40),Tk(873,`PoStepperStatus`),Zg()(),Jc(874,`td`,24)(875,`em`)(876,`strong`),Tk(877,`(opcional)`),Zg()(),Jc(878,`p`),Tk(879,`Define o estado de exibição do `),Jc(880,`em`),Tk(881,`step`),Zg(),Tk(882,`.`),Zg()()()(),Jc(883,`h3`),Tk(884,`Enums`),Zg(),Jc(885,`h4`,4)(886,`code`,5),Tk(887,`PoStepperOrientation`),Zg()(),Jc(888,`div`,2)(889,`p`),_u(890,`a`,41),Zg(),Jc(891,`p`)(892,`em`),Tk(893,`Enums`),Zg(),Tk(894,` para definição da orientação do `),Jc(895,`code`),Tk(896,`po-stepper`),Zg(),Tk(897,`.`),Zg()(),Jc(898,`h4`,13),Tk(899,`Propriedades`),Zg(),Jc(900,`table`,14)(901,`tr`,15)(902,`th`,16),Tk(903,`Nome`),Zg(),Jc(904,`th`,16),Tk(905,`Descrição`),Zg()(),Jc(906,`tr`,17)(907,`td`,18)(908,`div`,19)(909,`span`,20),Tk(910,` Horizontal`),_u(911,`br`),Zg()()(),Jc(912,`td`,24)(913,`p`),Tk(914,`Define a exibição do componente na horizontal.`),Zg()()(),Jc(915,`tr`,17)(916,`td`,18)(917,`div`,19)(918,`span`,20),Tk(919,` Vertical`),_u(920,`br`),Zg()()(),Jc(921,`td`,24)(922,`p`),Tk(923,`Define a exibição do componente na vertical.`),Zg()()()(),Jc(924,`h4`,4)(925,`code`,5),Tk(926,`PoStepperStatus`),Zg()(),Jc(927,`div`,2)(928,`p`),_u(929,`a`,42),Zg(),Jc(930,`p`)(931,`em`),Tk(932,`Enums`),Zg(),Tk(933,` para os status do `),Jc(934,`code`),Tk(935,`po-stepper`),Zg(),Tk(936,` quando utilizada a propriedade `),Jc(937,`code`),Tk(938,`p-steps`),Zg(),Tk(939,`.`),Zg()(),Jc(940,`h4`,13),Tk(941,`Propriedades`),Zg(),Jc(942,`table`,14)(943,`tr`,15)(944,`th`,16),Tk(945,`Nome`),Zg(),Jc(946,`th`,16),Tk(947,`Descrição`),Zg()(),Jc(948,`tr`,17)(949,`td`,18)(950,`div`,19)(951,`span`,20),Tk(952,` Active`),_u(953,`br`),Zg()()(),Jc(954,`td`,24)(955,`p`),Tk(956,`Define o estado do `),Jc(957,`em`),Tk(958,`step`),Zg(),Tk(959,` como ativo.`),Zg()()(),Jc(960,`tr`,17)(961,`td`,18)(962,`div`,19)(963,`span`,20),Tk(964,` Default`),_u(965,`br`),Zg()()(),Jc(966,`td`,24)(967,`p`),Tk(968,`Define o estado do `),Jc(969,`em`),Tk(970,`step`),Zg(),Tk(971,` como padrão.`),Zg()()(),Jc(972,`tr`,17)(973,`td`,18)(974,`div`,19)(975,`span`,20),Tk(976,` Disabled`),_u(977,`br`),Zg()()(),Jc(978,`td`,24)(979,`p`),Tk(980,`Define o estado do `),Jc(981,`em`),Tk(982,`step`),Zg(),Tk(983,` como desabilitado.`),Zg()()(),Jc(984,`tr`,17)(985,`td`,18)(986,`div`,19)(987,`span`,20),Tk(988,` Done`),_u(989,`br`),Zg()()(),Jc(990,`td`,24)(991,`p`),Tk(992,`Define o estado do `),Jc(993,`em`),Tk(994,`step`),Zg(),Tk(995,` como concluído.`),Zg()()(),Jc(996,`tr`,17)(997,`td`,18)(998,`div`,19)(999,`span`,20),Tk(1e3,` Error`),_u(1001,`br`),Zg()()(),Jc(1002,`td`,24)(1003,`p`),Tk(1004,`Define o estado do `),Jc(1005,`em`),Tk(1006,`step`),Zg(),Tk(1007,` com erro.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function bt(a,q){if(a&1){let s=ZO();Jc(0,`po-tab`,4),vt$1(`p-click`,function(){U_(s);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-stepper-basic-view`)(2,`sample-po-stepper-labs-view`)(3,`sample-po-stepper-sales-view`)(4,`sample-po-stepper-active-view`)(5,`sample-po-stepper-steps-view`),Zg()}if(a&2){let s=nk();Rb(`p-active`,s.activeTab===`web`)}}var vt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(s,r){this.route=s,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let r=s.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Stepper`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,bt,6,1,`po-tab`,2),Jc(3,`po-tab`,3),vt$1(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-stepper-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Ve,Ae,Le,qe,Oe,Re],encapsulation:2,changeDetection:1})}return a})()}];var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(vt),WV]})}return a})();var bn=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,je]})}return a})();export{bn as DocPoStepperModule};
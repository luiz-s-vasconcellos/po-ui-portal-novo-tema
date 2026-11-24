import{m as P,p as M}from"./main-5NWS7DIP.js";import{$a as t_,$i as ar,Ar as G0,Ca as j_,Ci as Rk,D as Gae,Da as k,Di as UO,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ia as nm,Ir as H_,It as bae,Kr as Kg,L as Koe,Li as WL,Oi as U_,On as qt,Pn as tie,Pr as HO,Pt as are,Qr as Mk,Ra as ok,Ri as Wb,Sa as jO,Si as RZ,T as Fze,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,_i as Qi,_r as Cu,aa as de,an as ia,ar as Ab,bn as oi,ci as PI,co as wg,dr as Be$1,eo as tk,er as $O,fo as xZ,go as xo,ii as No,jr as GV,kt as Zoe,lt as Ss,mi as QL,n as $P,no as tt,or as An,pa as ge,qi as Zb,rr as AZ,sn as j4,ur as B_,w as Fc,xi as R,xn as p5,yn as oae,zr as I}from"./chunk-DdK63a0t.js";import{t as r}from"./chunk-zystk1pz.js";var Fe=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-basic`]],standalone:!1,decls:4,vars:1,consts:[[3,`p-align-center`],[`p-label`,`Step 1`],[`p-label`,`Step 2`],[`p-label`,`Step 3`]],template:function(r,i){r&1&&(Jc(0,`po-stepper`,0),_u(1,`po-step`,1)(2,`po-step`,2)(3,`po-step`,3),Kg()),r&2&&Ab(`p-align-center`,!1)},dependencies:[Gae,Fze],encapsulation:2,changeDetection:1})}return p})();var Ve=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-stepper-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Stepper Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-stepper-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-stepper-basic/sample-po-stepper-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-stepper [p-align-center]="false">
  <po-step p-label="Step 1"></po-step>
  <po-step p-label="Step 2"></po-step>
  <po-step p-label="Step 3"></po-step>
</po-stepper>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-stepper-basic/sample-po-stepper-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-stepper-basic',
  templateUrl: './sample-po-stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoStepperBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Fe],encapsulation:2,changeDetection:1})}return p})();function Ye(p,W){if(p&1&&(Jc(0,`po-step`,3)(1,`h2`),Mk(2),Kg()()),p&2){let l=W.$implicit;Ab(`p-label`,l.label)(`p-icon-default`,l.iconDefault),wg(2),nm(`Step Content `,l.label)}}var Ie=(()=>{class p$1{changeDetector=p(Be$1);event;properties={};stepItem={};steps=[];propertiesFields=[{divider:`Properties`,property:`stepSize`,label:`Step Size`,type:`number`,maxValue:64,minValue:24,gridLgColumns:2},{property:`orientation`,options:[{value:`vertical`,label:`Vertical`,checked:!0},{value:`horizontal`,label:`Horizontal`}],gridLgColumns:4},{label:`Align Steps Center`,gridLgColumns:3,property:`alignCenter`,type:`boolean`},{label:`Step icons`,gridLgColumns:3,property:`stepIcons`,type:`boolean`},{label:`Step Icon Active Custom`,help:`Ex.: an an-pencil-simple-line`,gridLgColumns:4,property:`iconActive`},{label:`Step Icon Done Custom`,help:`Ex.: an an-check-fat`,gridLgColumns:4,property:`iconDone`},{property:`disabledClick`,label:`Disabled click`,type:`boolean`}];stepItemFields=[{divider:`Step form`,property:`label`,label:`Step Label`,gridMdColumns:6,gridXlColumns:6},{property:`iconDefault`,label:`Step Icon Default Custom`,help:`Ex.: an an-question`,gridMdColumns:6,gridXlColumns:6}];ngOnInit(){this.restore()}addItem(l){this.steps=[...this.steps,r({},l)],this.stepItem={},this.changeDetector.detectChanges()}changeStep(l){this.event=l,this.changeDetector.detectChanges()}restore(){this.properties={},this.steps=[],this.event=void 0,this.properties.orientation=`horizontal`,this.properties.alignCenter=!1}static ɵfac=function(r){return new(r||p$1)};static ɵcmp=Jn({type:p$1,selectors:[[`sample-po-stepper-labs`]],standalone:!1,decls:17,vars:13,consts:[[`stepForm`,`ngForm`],[`propertiesForm`,`ngForm`],[3,`p-change-step`,`p-align-center`,`p-orientation`,`p-step-icons`,`p-step-size`,`p-step-icon-active`,`p-step-icon-done`,`p-disable-click`],[3,`p-label`,`p-icon-default`],[`p-label`,`Event`,3,`p-value`],[3,`p-group-form`,`p-fields`,`p-value`],[1,`po-row`],[`p-label`,`Add Step`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(r,i){if(r&1){let s=KO();Jc(0,`po-container`)(1,`po-stepper`,2),_t(`p-change-step`,function(){return i.changeStep(`change`)}),HO(2,Ye,3,3,`po-step`,3,UO),Kg(),_u(4,`po-divider`)(5,`po-info`,4),Jc(6,`form`,null,0),_u(8,`po-dynamic-form`,5),Jc(9,`div`,6)(10,`po-button`,7),_t(`p-click`,function(){U_(s);let o=ok(7);return i.addItem(i.stepItem),H_(o.reset())}),Kg()()(),Jc(11,`form`,null,1),_u(13,`po-dynamic-form`,5)(14,`po-divider`),Jc(15,`div`,6)(16,`po-button`,8),_t(`p-click`,function(){U_(s);let o=ok(7),je=ok(12);return i.restore(),je.reset(),H_(o.reset())}),Kg()()()()}if(r&2){let s=ok(7);wg(),Ab(`p-align-center`,i.properties.alignCenter)(`p-orientation`,i.properties.orientation)(`p-step-icons`,i.properties.stepIcons)(`p-step-size`,i.properties.stepSize)(`p-step-icon-active`,i.properties.iconActive)(`p-step-icon-done`,i.properties.iconDone)(`p-disable-click`,i.properties.disabledClick),wg(),$O(i.steps),wg(3),Ab(`p-value`,i.event),wg(3),Ab(`p-fields`,i.stepItemFields)(`p-value`,i.stepItem),wg(2),Ab(`p-disabled`,s.invalid),wg(3),Ab(`p-fields`,i.propertiesFields)(`p-value`,i.properties)}},dependencies:[xZ,AZ,WL,oi,Fc,Nf,oae,Joe,Gae,Fze],encapsulation:2,changeDetection:1})}return p$1})();var Ae=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-labs-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-stepper-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Stepper Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-stepper-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-stepper-labs/sample-po-stepper-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
        <h2>Step Content `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` step.label `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</h2>
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
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-stepper-labs/sample-po-stepper-labs.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import { ChangeDetectorRef, Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,Ie],encapsulation:2,changeDetection:1})}return p})();var Je=[`addressForm`];var Ze=[`paymentForm`];var Ke=[`personalForm`];var $e=[`successData`];function et(p,W){p&1&&_u(0,`po-loading-overlay`,18)}var We=(()=>{class p{addressForm;paymentForm;personalForm;successData;address;birthday;cardCode;cardName;cardValid;confirmLabelWidget=`Confirm Purchase`;currentActiveStep;document;isLoadingPayment=!1;name;nextLabelWidget=`Next Step`;previousLabelWidget=`Previous Step`;constructor(){this.address=this.getAddress()}canActiveFinishStep(l){return k(l.form.valid).pipe(tt(()=>this.isLoadingPayment=!0),t_(2e3),Qi(()=>this.isLoadingPayment=!1))}canActiveNextStep(l){return l.valid}onConfirmStep(l){this.successData.open(),this.resetForms(),this.address=this.getAddress(),l.first()}getAddress(){return{city:`Sao Paulo`,code:`02511-000`,country:`Brazil`,number:`1000`,reference:``,street:`Avenida Braz Leme`}}resetForms(){this.personalForm.reset(),this.paymentForm.reset()}static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-sales`]],viewQuery:function(r,i){if(r&1&&Cu(Je,7)(Ze,7)(Ke,7)($e,7),r&2){let s;No(s=xo())&&(i.addressForm=s.first),No(s=xo())&&(i.paymentForm=s.first),No(s=xo())&&(i.personalForm=s.first),No(s=xo())&&(i.successData=s.first)}},standalone:!1,decls:84,vars:29,consts:[[`stepper`,``],[`personalForm`,`ngForm`],[`addressForm`,`ngForm`],[`paymentForm`,`ngForm`],[`cardname`,``],[`cardcode`,``],[`carddate`,``],[`successData`,``],[1,`po-row`],[`p-title`,`Product Detail`,1,`po-md-9`],[1,`po-lg-4`],[`src`,`../../../assets/graphics/shoe.gif`,`width`,`215`,`height`,`200`],[1,`po-lg-8`],[1,`po-font-title`],[1,`po-font-text-large-bold`],[1,`po-font-text`],[`p-height`,`317`,`p-title`,`Price`,1,`po-md-3`],[1,`sample-stepper-position-relative`],[`p-text`,`Loading`],[`p-align-center`,`false`,`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`32`],[`p-label`,`Personal`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-primary-label`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`birthday`,`p-format`,`dd/mm/yyyy`,`p-label`,`Birthday`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`document`,`p-label`,`Document`,`p-optional`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Address`,3,`p-can-active-next-step`],[`p-height`,`380`,`p-title`,`Purchase`,1,`po-md-12`,3,`p-primary-action`,`p-secondary-action`,`p-primary-label`,`p-secondary-label`],[`name`,`address.street`,`p-label`,`Street/House`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`number`,`p-label`,`Number`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`city`,`p-label`,`City`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`code`,`p-label`,`Postal Code`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`country`,`p-label`,`Country`,`p-required`,``,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`reference`,`p-label`,`Reference`,`p-optional`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Payment`,3,`p-can-active-next-step`],[`name`,`cardName`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`cardCode`,`p-clean`,``,`p-label`,`Code`,`p-mask`,`9999 9999 9999 9999`,`p-mask-format-model`,``,`p-pattern`,`\\d{4} \\d{4} \\d{4} \\d{4}`,`p-required`,``,1,`po-lg-4`,`po-md-9`,3,`ngModelChange`,`ngModel`],[`name`,`cardValid`,`p-clean`,``,`p-label`,`Expiration Date`,`p-mask`,`12/99`,`p-mask-format-model`,``,`p-pattern`,`\\d{2}\\/\\d{2}`,`p-required`,``,1,`po-lg-2`,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Finish`],[`p-label`,`Name`,1,`po-md-3`,3,`p-value`],[`p-label`,`Document`,1,`po-md-3`,3,`p-value`],[`p-label`,`Address`,1,`po-md-3`,3,`p-value`],[`p-label`,`Number`,1,`po-md-3`,3,`p-value`],[`p-label`,`City`,1,`po-md-3`,3,`p-value`],[`p-label`,`Country`,1,`po-md-3`,3,`p-value`],[`p-label`,`Product`,`p-value`,`Nike XYZ - Red/Gold Stripes`,1,`po-md-4`],[`p-label`,`Price`,`p-value`,`$2.500,00`,1,`po-md-2`],[`p-label`,`Discount`,`p-value`,`$500,00`,1,`po-md-2`],[`p-label`,`Tax`,`p-value`,`$160,00`,1,`po-md-2`],[`p-label`,`Final Price`,`p-value`,`$2.160,00`,1,`po-md-2`],[`p-title`,`Informations`],[`src`,`../../../assets/graphics/check.jpg`,`width`,`350`,`height`,`350`,1,`po-offset-md-6`,`po-offset-xl-3`],[1,`po-offset-md-8`,`po-offset-xl-3`,`po-font-title`]],template:function(r,i){if(r&1){let s=KO();Jc(0,`div`,8)(1,`po-widget`,9)(2,`div`,8)(3,`div`,10),_u(4,`img`,11),Kg(),Jc(5,`div`,12)(6,`p`,13),Mk(7,`Nike XYZ - Red/Gold Stripes`),Kg(),Jc(8,`p`,14),Mk(9,`Brand: Nike | Style: Modern | Men's`),Kg(),Jc(10,`p`,15),Mk(11,`Width: 12.5 - COD: 001254648412319`),Kg(),_u(12,`po-divider`),Jc(13,`p`,15),Mk(14,`Price: $2.500,00 | Discount: $500,00 | Tax: $160,00`),Kg()()()(),Jc(15,`po-widget`,16)(16,`p`,15),Mk(17,`$2.500,00`),Kg(),Jc(18,`p`,15),Mk(19,`$500,00(-)`),Kg(),Jc(20,`p`,15),Mk(21,`$160,00(+)`),Kg(),_u(22,`po-divider`),Jc(23,`p`,14),Mk(24,`Total: $2.160,00`),Kg()()(),_u(25,`po-divider`),Jc(26,`div`,17),LO(27,et,1,0,`po-loading-overlay`,18),Jc(28,`po-stepper`,19,0)(30,`po-step`,20)(31,`po-widget`,21),_t(`p-primary-action`,function(){U_(s);let o=ok(29);return H_(o.next())}),Jc(32,`form`,null,1)(34,`div`,8)(35,`po-input`,22),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.name,o)||(i.name=o),H_(o)}),Kg(),Jc(36,`po-datepicker`,23),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.birthday,o)||(i.birthday=o),H_(o)}),Kg(),Jc(37,`po-input`,24),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.document,o)||(i.document=o),H_(o)}),Kg()()()()(),Jc(38,`po-step`,25)(39,`po-widget`,26),_t(`p-primary-action`,function(){U_(s);let o=ok(29);return H_(o.previous())})(`p-secondary-action`,function(){U_(s);let o=ok(29);return H_(o.next())}),Jc(40,`form`,null,2)(42,`div`,8)(43,`po-input`,27),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.address.street,o)||(i.address.street=o),H_(o)}),Kg(),Jc(44,`po-input`,28),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.address.number,o)||(i.address.number=o),H_(o)}),Kg(),Jc(45,`po-input`,29),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.address.city,o)||(i.address.city=o),H_(o)}),Kg()(),Jc(46,`div`,8)(47,`po-input`,30),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.address.code,o)||(i.address.code=o),H_(o)}),Kg(),Jc(48,`po-input`,31),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.address.country,o)||(i.address.country=o),H_(o)}),Kg(),Jc(49,`po-input`,32),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.address.reference,o)||(i.address.reference=o),H_(o)}),Kg()()()()(),Jc(50,`po-step`,33)(51,`po-widget`,26),_t(`p-primary-action`,function(){U_(s);let o=ok(29);return H_(o.previous())})(`p-secondary-action`,function(){U_(s);let o=ok(29);return H_(o.next())}),Jc(52,`form`,null,3)(54,`div`,8)(55,`po-input`,34,4),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.cardName,o)||(i.cardName=o),H_(o)}),Kg(),Jc(57,`po-input`,35,5),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.cardCode,o)||(i.cardCode=o),H_(o)}),Kg(),Jc(59,`po-input`,36,6),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.cardValid,o)||(i.cardValid=o),H_(o)}),Kg()()()()(),Jc(61,`po-step`,37)(62,`po-widget`,26),_t(`p-primary-action`,function(){U_(s);let o=ok(29);return H_(o.previous())})(`p-secondary-action`,function(){U_(s);let o=ok(29);return H_(i.onConfirmStep(o))}),Jc(63,`div`,8),_u(64,`po-info`,38)(65,`po-info`,39),Kg(),Jc(66,`div`,8),_u(67,`po-info`,40)(68,`po-info`,41)(69,`po-info`,42)(70,`po-info`,43),Kg(),_u(71,`po-divider`),Jc(72,`div`,8),_u(73,`po-info`,44)(74,`po-info`,45)(75,`po-info`,46)(76,`po-info`,47)(77,`po-info`,48),Kg()()()()(),Jc(78,`po-modal`,49,7)(80,`div`,8),_u(81,`img`,50),Jc(82,`p`,51),Mk(83,`Success! ORDER NUMBER: 5767686678609-XPTOA`),Kg()()()}if(r&2){let s=ok(33),d=ok(41),o=ok(53);wg(27),jO(i.isLoadingPayment?27:-1),wg(3),Ab(`p-can-active-next-step`,i.canActiveNextStep.bind(i,s)),wg(),Ab(`p-primary-label`,i.nextLabelWidget),wg(4),Kb(`ngModel`,i.name),q0(),wg(),Kb(`ngModel`,i.birthday),q0(),wg(),Kb(`ngModel`,i.document),q0(),wg(),Ab(`p-can-active-next-step`,i.canActiveNextStep.bind(i,d)),wg(),Ab(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),wg(4),Kb(`ngModel`,i.address.street),q0(),wg(),Kb(`ngModel`,i.address.number),q0(),wg(),Kb(`ngModel`,i.address.city),q0(),wg(2),Kb(`ngModel`,i.address.code),q0(),wg(),Kb(`ngModel`,i.address.country),q0(),wg(),Kb(`ngModel`,i.address.reference),q0(),wg(),Ab(`p-can-active-next-step`,i.canActiveFinishStep.bind(i,o)),wg(),Ab(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.nextLabelWidget),wg(4),Kb(`ngModel`,i.cardName),q0(),wg(2),Kb(`ngModel`,i.cardCode),q0(),wg(2),Kb(`ngModel`,i.cardValid),q0(),wg(3),Ab(`p-primary-label`,i.previousLabelWidget)(`p-secondary-label`,i.confirmLabelWidget),wg(2),Ab(`p-value`,i.name),wg(),Ab(`p-value`,i.document),wg(2),Ab(`p-value`,i.address.street),wg(),Ab(`p-value`,i.address.number),wg(),Ab(`p-value`,i.address.city),wg(),Ab(`p-value`,i.address.country)}},dependencies:[xZ,RZ,AZ,QL,WL,Nf,tie,j4,Joe,$P,ia,Gae,Fze,bae],styles:[`.sample-stepper-position-relative[_ngcontent-%COMP%]{position:relative}`],changeDetection:1})}return p})();var ke=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-sales-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-stepper-sales`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Stepper - Sales`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-stepper-sales`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-stepper-sales/sample-po-stepper-sales.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-stepper-sales/sample-po-stepper-sales.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()(),Jc(23,`po-tab`,13)(24,`div`)(25,`label`,7),Mk(26,`sample-po-stepper-sales/sample-po-stepper-sales.component.css`),Kg(),Jc(27,`div`,14)(28,`pre`,15),Mk(29,`.sample-stepper-position-relative {
  position: relative;
}
`),Kg()()()()()(),_u(30,`hr`))},dependencies:[P,tre,are,We],encapsulation:2,changeDetection:1})}return p})();var Le=(()=>{class p$2{http=p(PI);url=`https://po-sample-api.onrender.com/v1/sampleSelect`;getCitiesByState(l){return this.http.get(`${this.url}/getCities/${l}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static ɵfac=function(r){return new(r||p$2)};static ɵprov=R({token:p$2,factory:p$2.ɵfac,providedIn:`root`})}return p$2})();var it=[`basicInformation`];var ot=[`academicFormation`];var pt=[`professionalExperiences`];function at(p,W){if(p&1&&(Jc(0,`div`,23)(1,`po-widget`,24)(2,`p`),Mk(3),Kg()()()),p&2){let l=W.$implicit;wg(),Ab(`p-title`,l.title),wg(2),Wb(l.description)}}function rt(p,W){if(p&1&&(Jc(0,`div`,4),_u(1,`po-divider`,23),HO(2,at,4,2,`div`,23,UO),Kg()),p&2){let l=tk();wg(2),$O(l.professionalExperiences)}}var qe=(()=>{class p$3{sampleService=p(Le);changeDetector=p(Be$1);basicInformationForm;academicFormationForm;professionalExperiencesForm;stepper;cityOptions=[];stateOptions=[];basicInformation;highSchool;universityEducation;professionalExperiences;experienceTitle;experienceDescripton;overview;citiesSubscription;statesSubscription;ngAfterViewInit(){setTimeout(()=>this.activeStep())}ngOnInit(){this.basicInformation=this.getBasicInformations(),this.highSchool=this.getHighSchool(),this.universityEducation=this.getUniversityEducation(),this.professionalExperiences=this.getProfessionalExperiencies(),this.getStates()}ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}activeStep(){this.stepper.active(2)}onChangeState(){this.getCitiesByState(this.basicInformation.state)}addProfessionalExperiences(l){let r={title:l.value.experienceTitle,description:l.value.experienceDescripton};this.professionalExperiences=[...this.professionalExperiences,r]}getBasicInformations(){return{name:`Maria Alice`,email:`mariaalice@gmail.com`,phone:`47988888888`,state:`sp`,city:1}}getHighSchool(){return{name:`Escola de Ensino Básico Dr Jorge Lacerda`,city:`Joinville`,conclusionYear:`2016`}}getUniversityEducation(){return{name:`Universidade Federal do Santa Catarina`,city:`Florianópolis`,conclusionYear:`2020`}}getProfessionalExperiencies(){return[{title:`Analista de desenvolvimento de software na TOTVS`,description:`Responsável pelo desenvolvimento e manutenção de sistemas do segmento de manufatura. Do ano de 2019 à 2020`}]}getCitiesByState(l){this.citiesSubscription=this.sampleService.getCitiesByState(l).subscribe(r=>{this.cityOptions=r.items,this.basicInformation.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(l=>{this.stateOptions=l.items,this.getCitiesByState(this.basicInformation.state)})}static ɵfac=function(r){return new(r||p$3)};static ɵcmp=Jn({type:p$3,selectors:[[`sample-po-stepper-active`]],viewQuery:function(r,i){if(r&1&&Cu(it,7)(ot,7)(pt,7)(Fze,5),r&2){let s;No(s=xo())&&(i.basicInformationForm=s.first),No(s=xo())&&(i.academicFormationForm=s.first),No(s=xo())&&(i.professionalExperiencesForm=s.first),No(s=xo())&&(i.stepper=s.first)}},standalone:!1,decls:32,vars:16,consts:[[`basicInformationForm`,`ngForm`],[`academicFormationForm`,`ngForm`],[`professionalExperiencesForm`,`ngForm`],[`p-label`,`Basic information`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`phone`,`p-label`,`Phone`,`p-optional`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,1,`po-md-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`city`,`p-label`,`City`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Academic formation`],[`p-label`,`High school`,1,`po-md-12`],[`name`,`highSchoolName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`highSchoolPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`University education`,1,`po-md-12`],[`name`,`universityEducationName`,`p-clean`,``,`p-label`,`Name`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationCity`,`p-clean`,``,`p-label`,`City`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`name`,`universityEducationPeriod`,`p-label`,`Period`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Professional experiences`],[`name`,`experienceTitle`,`p-label`,`Professional position`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`experienceDescripton`,`p-label`,`Describe your responsibilities`,`p-rows`,`4`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`type`,`submit`,`p-label`,`Add professional experience`,1,`po-md-4`,3,`p-click`],[1,`po-md-12`],[1,`po-md-12`,3,`p-title`]],template:function(r,i){if(r&1){let s=KO();Jc(0,`po-container`)(1,`po-stepper`)(2,`po-step`,3)(3,`form`,null,0)(5,`div`,4)(6,`po-input`,5),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.basicInformation.name,o)||(i.basicInformation.name=o),H_(o)}),Kg(),Jc(7,`po-email`,6),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.basicInformation.email,o)||(i.basicInformation.email=o),H_(o)}),Kg(),Jc(8,`po-input`,7),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.basicInformation.phone,o)||(i.basicInformation.phone=o),H_(o)}),Kg(),Jc(9,`po-select`,8),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.basicInformation.state,o)||(i.basicInformation.state=o),H_(o)}),_t(`p-change`,function(){return i.onChangeState()}),Kg(),Jc(10,`po-select`,9),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.basicInformation.city,o)||(i.basicInformation.city=o),H_(o)}),Kg()()()(),Jc(11,`po-step`,10)(12,`form`,null,1)(14,`div`,4),_u(15,`po-divider`,11),Jc(16,`po-input`,12),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.highSchool.name,o)||(i.highSchool.name=o),H_(o)}),Kg(),Jc(17,`po-input`,13),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.highSchool.city,o)||(i.highSchool.city=o),H_(o)}),Kg(),Jc(18,`po-input`,14),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.highSchool.conclusionYear,o)||(i.highSchool.conclusionYear=o),H_(o)}),Kg()(),Jc(19,`div`,4),_u(20,`po-divider`,15),Jc(21,`po-input`,16),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.universityEducation.name,o)||(i.universityEducation.name=o),H_(o)}),Kg(),Jc(22,`po-input`,17),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.universityEducation.city,o)||(i.universityEducation.city=o),H_(o)}),Kg(),Jc(23,`po-input`,18),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.universityEducation.conclusionYear,o)||(i.universityEducation.conclusionYear=o),H_(o)}),Kg()()()(),Jc(24,`po-step`,19)(25,`form`,null,2)(27,`div`,4)(28,`po-input`,20),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.experienceTitle,o)||(i.experienceTitle=o),H_(o)}),Kg(),Jc(29,`po-textarea`,21),G0(),Zb(`ngModelChange`,function(o){return U_(s),Rk(i.experienceDescripton,o)||(i.experienceDescripton=o),H_(o)}),Kg(),Jc(30,`po-button`,22),_t(`p-click`,function(){U_(s);let o=ok(26);return i.addProfessionalExperiences(o),H_(o.reset())}),Kg()()(),LO(31,rt,4,0,`div`,4),Kg()()()}r&2&&(wg(6),Kb(`ngModel`,i.basicInformation.name),q0(),wg(),Kb(`ngModel`,i.basicInformation.email),q0(),wg(),Kb(`ngModel`,i.basicInformation.phone),q0(),wg(),Kb(`ngModel`,i.basicInformation.state),Ab(`p-options`,i.stateOptions),q0(),wg(),Kb(`ngModel`,i.basicInformation.city),Ab(`p-options`,i.cityOptions),q0(),wg(6),Kb(`ngModel`,i.highSchool.name),q0(),wg(),Kb(`ngModel`,i.highSchool.city),q0(),wg(),Kb(`ngModel`,i.highSchool.conclusionYear),q0(),wg(3),Kb(`ngModel`,i.universityEducation.name),q0(),wg(),Kb(`ngModel`,i.universityEducation.city),q0(),wg(),Kb(`ngModel`,i.universityEducation.conclusionYear),q0(),wg(5),Kb(`ngModel`,i.experienceTitle),q0(),wg(),Kb(`ngModel`,i.experienceDescripton),q0(),wg(2),jO(i.professionalExperiences?31:-1))},dependencies:[xZ,RZ,AZ,QL,WL,oi,Fc,Nf,p5,j4,Koe,Zoe,Gae,Fze,bae],encapsulation:2,changeDetection:1})}return p$3})();var Ne=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-active-view`]],standalone:!1,decls:35,vars:0,consts:[[`id`,`sample-po-stepper-active`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-active/sample-po-stepper-active.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-active/sample-po-stepper-active.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`data-file`,`sample-po-stepper-active/sample-po-stepper-active.service.ts`,1,`docs-code-block`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Stepper - Active`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-stepper-active`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-stepper-active/sample-po-stepper-active.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-container>
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
                <p>`),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` experience.description `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`</p>
              </po-widget>
            </div>
          }
        </div>
      }
    </po-step>
  </po-stepper>
</po-container>
`),Kg()()()(),Jc(22,`po-tab`,10)(23,`div`)(24,`label`,7),Mk(25,`sample-po-stepper-active/sample-po-stepper-active.component.ts`),Kg(),Jc(26,`div`,11)(27,`pre`,12),Mk(28,`import {
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
`),Kg()(),Jc(29,`label`,7),Mk(30,`sample-po-stepper-active/sample-po-stepper-active.service.ts`),Kg(),Jc(31,`div`,13)(32,`pre`,12),Mk(33,`import { HttpClient } from '@angular/common/http';
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
`),Kg()()()()()(),_u(34,`hr`))},dependencies:[P,tre,are,qe],encapsulation:2,changeDetection:1})}return p})();var Be=(()=>{class p$4{changeDetector=p(Be$1);currentStep;stepsWithStatus=[{label:`Step 1`,status:qt.Done},{label:`Step 2`,status:qt.Active},{label:`Step 3`,status:qt.Default},{label:`Step 4`,status:qt.Disabled}];ngAfterViewInit(){this.currentStep=2,this.changeDetector.detectChanges()}onChangeStatus(l){this.currentStep=l,this.stepsWithStatus.forEach(r=>{r.status===qt.Active&&(r.status=qt.Done)}),this.stepsWithStatus.forEach((r,i)=>{i>this.currentStep&&r.status===qt.Active&&(r.status=qt.Default)}),this.currentStep<this.stepsWithStatus.length&&this.stepsWithStatus[this.currentStep].status===qt.Disabled&&(this.stepsWithStatus[this.currentStep].status=qt.Default)}static ɵfac=function(r){return new(r||p$4)};static ɵcmp=Jn({type:p$4,selectors:[[`sample-po-stepper-steps`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-change-step`,`p-align-center`,`p-sequential`,`p-step`,`p-steps`]],template:function(r,i){r&1&&(Jc(0,`po-stepper`,0),_t(`p-change-step`,function(d){return i.onChangeStatus(d)}),Kg()),r&2&&Ab(`p-align-center`,!1)(`p-sequential`,!1)(`p-step`,i.currentStep)(`p-steps`,i.stepsWithStatus)},dependencies:[Fze],encapsulation:2,changeDetection:1})}return p$4})();var ze=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵcmp=Jn({type:p,selectors:[[`sample-po-stepper-steps-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-stepper-steps`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Stepper - Steps`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-stepper-steps`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-stepper-steps/sample-po-stepper-steps.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-stepper
  [p-align-center]="false"
  [p-sequential]="false"
  [p-step]="currentStep"
  [p-steps]="stepsWithStatus"
  (p-change-step)="onChangeStatus($event)"
>
</po-stepper>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-stepper-steps/sample-po-stepper-steps.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { AfterViewInit, ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Be],encapsulation:2,changeDetection:1})}return p})();var Oe=(()=>{class p$5{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||p$5)};static ɵcmp=Jn({type:p$5,selectors:[[`sample-po-stepper-doc`]],standalone:!1,decls:1012,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Step`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-stepper-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-step`],[`href`,`/documentation/po-stepper#stepIconsProperty`],[`href`,`https://angular.io/api/core/ViewChild`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-align-center`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-disable-click`,1,`docs-api-properties-row`],[`id`,`prop-p-step-icon-active`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-step-icon-done`,1,`docs-api-properties-row`],[`id`,`event-p-change-step`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`id`,`prop-p-sequential`,1,`docs-api-properties-row`],[`id`,`prop-p-step`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-step-icons`,1,`docs-api-properties-row`],[`id`,`stepIconsProperty`],[`id`,`prop-p-step-size`,1,`docs-api-properties-row`],[`id`,`prop-p-steps`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoStepperItem>`],[`id`,`method-active`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[`id`,`method-first`,1,`docs-api-method-table`],[`id`,`method-next`,1,`docs-api-method-table`],[`id`,`method-previous`,1,`docs-api-method-table`],[`id`,`interface-po-stepper-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-stepper-item-icon-active`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-icon-default`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-icon-done`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-id`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-stepper-item-status`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperStatus`],[`id`,`enum-po-stepper-orientation`,1,`docs-api-class-name`],[`id`,`stepperOrientation`],[`id`,`enum-po-stepper-orientation-horizontal`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-orientation-vertical`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status`,1,`docs-api-class-name`],[`id`,`stepperStatus`],[`id`,`enum-po-stepper-status-active`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-default`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-disabled`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-done`,1,`docs-api-properties-row`],[`id`,`enum-po-stepper-status-error`,1,`docs-api-properties-row`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoStepperModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-stepper`),Kg()(),Jc(7,`blockquote`,3)(8,`strong`),Mk(9,`Subcomponentes:`),Kg(),Jc(10,`po-tag`,4),_t(`p-click`,function(){return i.openDoc(`po-step`)}),Kg()(),Jc(11,`h3`,5),Mk(12,`Componente`),Kg(),Jc(13,`h4`,6)(14,`code`,7),Mk(15,`PoStepperComponent`),Kg()(),Jc(16,`div`,2)(17,`p`),Mk(18,`O `),Jc(19,`code`),Mk(20,`po-stepper`),Kg(),Mk(21,` permite que um processo seja dividido em passos para que o usu\xE1rio o realize
mais facilmente.`),Kg(),Jc(22,`p`),Mk(23,`Existem duas formas de utilização:`),Kg(),Jc(24,`p`),Mk(25,`1 - Usando o componente `),Jc(26,`a`,8)(27,`strong`),Mk(28,`po-step`),Kg()(),Mk(29,` para renderizar e descrever os passos.`),Kg(),Jc(30,`p`),Mk(31,`2 - Através da propriedade `),Jc(32,`code`),Mk(33,`p-steps`),Kg(),Mk(34,` para descrever os passos do processo, sendo responsabilidade do desenvolvedor o controle
de renderiza\xE7\xE3o do que ser\xE1 exibido a cada `),Jc(35,`em`),Mk(36,`step`),Kg(),Mk(37,` ativo.`),Kg(),Jc(38,`p`),Mk(39,`Atrav\xE9s de suas propriedades, \xE9 poss\xEDvel definir se sua orienta\xE7\xE3o ser\xE1 horizontal ou vertical,
al\xE9m da possibilidade de aumentar o tamanho dos `),Jc(40,`em`),Mk(41,`steps`),Kg(),Mk(42,`.`),Kg(),Jc(43,`p`),Mk(44,`Também é possível navegar entre os `),Jc(45,`em`),Mk(46,`steps`),Kg(),Mk(47,` através do teclado utilizando a tecla `),Jc(48,`em`),Mk(49,`tab`),Kg(),Mk(50,` e, para ativar o `),Jc(51,`em`),Mk(52,`step`),Kg(),Mk(53,` em foco basta
pressionar a tecla `),Jc(54,`em`),Mk(55,`enter`),Kg(),Mk(56,`. Além disso, é possível ativar a exibição de ícones no lugar de números nos `),Jc(57,`em`),Mk(58,`steps`),Kg(),Mk(59,` atrav\xE9s da
propriedade `),Jc(60,`a`,9)(61,`code`),Mk(62,`p-step-icons`),Kg()(),Mk(63,`.`),Kg(),Jc(64,`h4`),Mk(65,`Utilizando os métodos do componente:`),Kg(),Jc(66,`p`),Mk(67,`Para acessar os métodos do componente é necessário ter a referência do mesmo.`),Kg(),Jc(68,`p`),Mk(69,`Por exemplo, utilizando um `),Jc(70,`a`,10)(71,`strong`),Mk(72,`ViewChild`),Kg()(),Mk(73,`:`),Kg(),Jc(74,`pre`)(75,`code`),Mk(76,`@ViewChild(PoStepperComponent) poStepperComponent: PoStepperComponent;
`),Kg()(),Jc(77,`p`),Mk(78,`E para acessar o método:`),Kg(),Jc(79,`pre`)(80,`code`),Mk(81,`poStepperComponent.next();
`),Kg()(),Jc(82,`h4`),Mk(83,`Boas práticas`),Kg(),Jc(84,`ul`)(85,`li`),Mk(86,`Evite `),Jc(87,`code`),Mk(88,`labels`),Kg(),Mk(89,` extensos que quebram o layout do `),Jc(90,`code`),Mk(91,`po-stepper`),Kg(),Mk(92,`, use `),Jc(93,`code`),Mk(94,`labels`),Kg(),Mk(95,` diretos, curtos e intuitivos.`),Kg(),Jc(96,`li`),Mk(97,`Utilize apenas um `),Jc(98,`code`),Mk(99,`po-stepper`),Kg(),Mk(100,` por página.`),Kg()(),Jc(101,`h4`),Mk(102,`Tokens customizáveis`),Kg(),Jc(103,`p`),Mk(104,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(105,`blockquote`)(106,`p`),Mk(107,`Para maiores informações, acesse o guia `),Jc(108,`a`,11),Mk(109,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(110,`.`),Kg()(),Jc(111,`table`)(112,`thead`)(113,`tr`)(114,`th`),Mk(115,`Propriedade`),Kg(),Jc(116,`th`),Mk(117,`Descrição`),Kg(),Jc(118,`th`),Mk(119,`Valor Padrão`),Kg()()(),Jc(120,`tbody`)(121,`tr`)(122,`td`)(123,`strong`),Mk(124,`Label`),Kg()(),_u(125,`td`)(126,`td`),Kg(),Jc(127,`tr`)(128,`td`)(129,`code`),Mk(130,`--font-family`),Kg()(),Jc(131,`td`),Mk(132,`Família tipográfica usada`),Kg(),Jc(133,`td`)(134,`code`),Mk(135,`var(--font-family-theme)`),Kg()()(),Jc(136,`tr`)(137,`td`)(138,`code`),Mk(139,`--font-size`),Kg()(),Jc(140,`td`),Mk(141,`Tamanho da fonte`),Kg(),Jc(142,`td`)(143,`code`),Mk(144,`var(--font-size-default)`),Kg()()(),Jc(145,`tr`)(146,`td`)(147,`code`),Mk(148,`--font-weight`),Kg()(),Jc(149,`td`),Mk(150,`Peso da fonte`),Kg(),Jc(151,`td`)(152,`code`),Mk(153,`var(--font-weight-normal)`),Kg()()(),Jc(154,`tr`)(155,`td`)(156,`strong`),Mk(157,`Step - Done`),Kg()(),_u(158,`td`)(159,`td`),Kg(),Jc(160,`tr`)(161,`td`)(162,`code`),Mk(163,`--text-color`),Kg()(),Jc(164,`td`),Mk(165,`Cor do texto no step concluído`),Kg(),Jc(166,`td`)(167,`code`),Mk(168,`var(--color-neutral-dark-70)`),Kg()()(),Jc(169,`tr`)(170,`td`)(171,`code`),Mk(172,`--color-icon-done`),Kg()(),Jc(173,`td`),Mk(174,`Cor do ícone no step concluído`),Kg(),Jc(175,`td`)(176,`code`),Mk(177,`var(--color-neutral-dark-70)`),Kg()()(),Jc(178,`tr`)(179,`td`)(180,`code`),Mk(181,`--background-done`),Kg()(),Jc(182,`td`),Mk(183,`Cor de fundo no step concluído`),Kg(),Jc(184,`td`)(185,`code`),Mk(186,`var(--color-neutral-light-00)`),Kg()()(),Jc(187,`tr`)(188,`td`)(189,`strong`),Mk(190,`Line - Done`),Kg()(),_u(191,`td`)(192,`td`),Kg(),Jc(193,`tr`)(194,`td`)(195,`code`),Mk(196,`--color-line-done`),Kg()(),Jc(197,`td`),Mk(198,`Cor da linha no step concluído`),Kg(),Jc(199,`td`)(200,`code`),Mk(201,`var(--color-neutral-mid-40)`),Kg()()(),Jc(202,`tr`)(203,`td`)(204,`strong`),Mk(205,`Step - Current`),Kg()(),_u(206,`td`)(207,`td`),Kg(),Jc(208,`tr`)(209,`td`)(210,`code`),Mk(211,`--color-icon-current`),Kg()(),Jc(212,`td`),Mk(213,`Cor do ícone no step atual`),Kg(),Jc(214,`td`)(215,`code`),Mk(216,`var(--color-neutral-light-00)`),Kg()()(),Jc(217,`tr`)(218,`td`)(219,`code`),Mk(220,`--background-current`),Kg()(),Jc(221,`td`),Mk(222,`Cor de fundo no step atual`),Kg(),Jc(223,`td`)(224,`code`),Mk(225,`var(--color-action-default)`),Kg()()(),Jc(226,`tr`)(227,`td`)(228,`code`),Mk(229,`--font-weight-current`),Kg()(),Jc(230,`td`),Mk(231,`Peso da fonte no step atual`),Kg(),Jc(232,`td`)(233,`code`),Mk(234,`var(--font-weight-bold)`),Kg()()(),Jc(235,`tr`)(236,`td`)(237,`strong`),Mk(238,`Step - Next`),Kg()(),_u(239,`td`)(240,`td`),Kg(),Jc(241,`tr`)(242,`td`)(243,`code`),Mk(244,`--font-size-circle`),Kg()(),Jc(245,`td`),Mk(246,`Tamanho da fonte no círculo do próximo step`),Kg(),Jc(247,`td`)(248,`code`),Mk(249,`var(--font-size-sm)`),Kg()()(),Jc(250,`tr`)(251,`td`)(252,`code`),Mk(253,`--color-next`),Kg()(),Jc(254,`td`),Mk(255,`Cor do ícone no próximo step`),Kg(),Jc(256,`td`)(257,`code`),Mk(258,`var(--color-action-disabled)`),Kg()()(),Jc(259,`tr`)(260,`td`)(261,`code`),Mk(262,`--text-color-next`),Kg()(),Jc(263,`td`),Mk(264,`Cor do texto no próximo step`),Kg(),Jc(265,`td`)(266,`code`),Mk(267,`var(--color-neutral-light-30)`),Kg()()(),Jc(268,`tr`)(269,`td`)(270,`strong`),Mk(271,`Focused`),Kg()(),_u(272,`td`)(273,`td`),Kg(),Jc(274,`tr`)(275,`td`)(276,`code`),Mk(277,`--outline-color-focused`),Kg()(),Jc(278,`td`),Mk(279,`Cor do outline do estado de focus`),Kg(),Jc(280,`td`)(281,`code`),Mk(282,`var(--color-action-focus)`),Kg()()()()()(),Jc(283,`div`,12)(284,`h4`,13),Mk(285,`Seletor`),Kg(),Jc(286,`pre`,14),Mk(287,`<po-stepper
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
`),Kg()(),Jc(288,`h4`,15),Mk(289,`Propriedades`),Kg(),Jc(290,`table`,16)(291,`tr`,17)(292,`th`,18),Mk(293,`Nome`),Kg(),Jc(294,`th`,18),Mk(295,`Tipo`),Kg(),Jc(296,`th`,18),Mk(297,`Padrão`),Kg(),Jc(298,`th`,18),Mk(299,`Descrição`),Kg()(),Jc(300,`tr`,19)(301,`td`,20)(302,`div`,21)(303,`span`,22),Mk(304,` p-align-center`),_u(305,`br`),Kg()()(),Jc(306,`td`,23)(307,`code`,24),Mk(308,`boolean`),Kg()(),Jc(309,`td`,25)(310,`p`)(311,`code`),Mk(312,`true`),Kg()()(),Jc(313,`td`,26)(314,`em`)(315,`strong`),Mk(316,`(opcional)`),Kg()(),Jc(317,`p`),Mk(318,`Define o alinhamento dos `),Jc(319,`em`),Mk(320,`steps`),Kg(),Mk(321,` e `),Jc(322,`em`),Mk(323,`labels`),Kg(),Mk(324,` no `),Jc(325,`em`),Mk(326,`stepper`),Kg(),Mk(327,`, dependendo da orientação.`),Kg(),Jc(328,`ul`)(329,`li`),Mk(330,`Quando `),Jc(331,`code`),Mk(332,`true`),Kg(),Mk(333,`, ficam centralizados em ambas as orientações (horizontal e vertical).`),Kg(),Jc(334,`li`),Mk(335,`Quando `),Jc(336,`code`),Mk(337,`false`),Kg(),Mk(338,`, ficam alinhados à esquerda na orientação horizontal e ao topo na orientação vertical.`),Kg()()()(),Jc(339,`tr`,27)(340,`td`,20)(341,`div`,21)(342,`span`,22),Mk(343,` p-disable-click`),_u(344,`br`),Kg()()(),Jc(345,`td`,23)(346,`code`,24),Mk(347,`boolean`),Kg()(),Jc(348,`td`,25)(349,`p`)(350,`code`),Mk(351,`false`),Kg()()(),Jc(352,`td`,26)(353,`em`)(354,`strong`),Mk(355,`(opcional)`),Kg()(),Jc(356,`p`),Mk(357,`Desabilita o clique nos steps.`),Kg()()(),Jc(358,`tr`,28)(359,`td`,20)(360,`div`,21)(361,`span`,22),Mk(362,` p-step-icon-active`),_u(363,`br`),Kg()()(),Jc(364,`td`,23)(365,`code`,29),Mk(366,`string `),Kg(),Jc(367,`code`,30),Mk(368,` TemplateRef<void>`),Kg()(),Jc(369,`td`,25)(370,`p`)(371,`code`),Mk(372,`po-icon-edit`),Kg()()(),Jc(373,`td`,26)(374,`em`)(375,`strong`),Mk(376,`(opcional)`),Kg()(),Jc(377,`p`),Mk(378,`Permite definir o \xEDcone do step no status ativo.
Esta propriedade permite usar \xEDcones da `),Jc(379,`a`,31),Mk(380,`Biblioteca de ícones`),Kg(),Mk(381,`.`),Kg(),Jc(382,`pre`)(383,`code`),Mk(384,`<po-stepper p-step-icon-active="an an-pencil-simple-line">
   ...
</po-stepper>
`),Kg()(),Jc(385,`p`),Mk(386,`Para customizar o ícone através do `),Jc(387,`code`),Mk(388,`TemplateRef`),Kg(),Mk(389,`, veja a documentação da propriedade `),Jc(390,`code`),Mk(391,`p-step-icon-done`),Kg(),Mk(392,`.`),Kg(),Jc(393,`blockquote`)(394,`p`),Mk(395,`Deve-se usar `),Jc(396,`code`),Mk(397,`font-size: inherit`),Kg(),Mk(398,` para ajustar ícones que não se ajustam automaticamente.`),Kg()()()(),Jc(399,`tr`,32)(400,`td`,20)(401,`div`,21)(402,`span`,22),Mk(403,` p-step-icon-done`),_u(404,`br`),Kg()()(),Jc(405,`td`,23)(406,`code`,29),Mk(407,`string `),Kg(),Jc(408,`code`,30),Mk(409,` TemplateRef<void>`),Kg()(),Jc(410,`td`,25)(411,`p`)(412,`code`),Mk(413,`po-icon-ok`),Kg()()(),Jc(414,`td`,26)(415,`em`)(416,`strong`),Mk(417,`(opcional)`),Kg()(),Jc(418,`p`),Mk(419,`Permite definir o \xEDcone do step no status conclu\xEDdo.
Esta propriedade permite usar \xEDcones da `),Jc(420,`a`,31),Mk(421,`Biblioteca de ícones`),Kg()(),Jc(422,`pre`)(423,`code`),Mk(424,`<po-stepper p-step-icon-done="an an-check-circle">
   ...
</po-stepper>
`),Kg()(),Jc(425,`p`),Mk(426,`Outra opção seria a customização do ícone através do `),Jc(427,`code`),Mk(428,`TemplateRef`),Kg(),Mk(429,`, conforme exemplo abaixo:`),Kg(),Jc(430,`pre`)(431,`code`),Mk(432,`<po-stepper [p-step-icon-done]="doneIcon">
   ...
</po-stepper>

<ng-template #doneIcon>
   <i class="an an-check-fat"></i>
</ng-template>
`),Kg()(),Jc(433,`blockquote`)(434,`p`),Mk(435,`Deve-se usar `),Jc(436,`code`),Mk(437,`font-size: inherit`),Kg(),Mk(438,` para ajustar ícones que não se ajustam automaticamente.`),Kg()()()(),Jc(439,`tr`,33)(440,`td`,20)(441,`div`,34)(442,`span`,35),Mk(443,` (p-change-step)`),_u(444,`br`),Kg()()(),Jc(445,`td`,23)(446,`code`,36),Mk(447,`EventEmitter`),Kg()(),Jc(448,`td`,25),Mk(449,`-`),Kg(),Jc(450,`td`,26)(451,`p`),Mk(452,`Ação que será executada quando o usuário mudar o passo do `),Jc(453,`code`),Mk(454,`po-stepper`),Kg(),Mk(455,`.`),Kg()()(),Jc(456,`tr`,37)(457,`td`,20)(458,`div`,21)(459,`span`,22),Mk(460,` p-orientation`),_u(461,`br`),Kg()()(),Jc(462,`td`,23)(463,`code`,38),Mk(464,`PoStepperOrientation`),Kg()(),Jc(465,`td`,25)(466,`p`)(467,`code`),Mk(468,`PoStepperOrientation.Horizontal`),Kg()()(),Jc(469,`td`,26)(470,`em`)(471,`strong`),Mk(472,`(opcional)`),Kg()(),Jc(473,`p`),Mk(474,`Define a orientação de exibição do `),Jc(475,`code`),Mk(476,`po-stepper`),Kg(),Mk(477,`.`),Kg(),Jc(478,`blockquote`)(479,`p`),Mk(480,`Veja os valores válidos no `),Jc(481,`em`),Mk(482,`enum`),Kg(),Jc(483,`a`,39),Mk(484,`PoStepperOrientation`),Kg(),Mk(485,`.`),Kg()()()(),Jc(486,`tr`,40)(487,`td`,20)(488,`div`,21)(489,`span`,22),Mk(490,` p-sequential`),_u(491,`br`),Kg()()(),Jc(492,`td`,23)(493,`code`,24),Mk(494,`boolean`),Kg()(),Jc(495,`td`,25)(496,`p`)(497,`code`),Mk(498,`true`),Kg()()(),Jc(499,`td`,26)(500,`em`)(501,`strong`),Mk(502,`(opcional)`),Kg()(),Jc(503,`p`),Mk(504,`Define se o `),Jc(505,`code`),Mk(506,`po-stepper`),Kg(),Mk(507,` será sequencial ou aleatório.`),Kg(),Jc(508,`blockquote`)(509,`p`),Mk(510,`Ao utilizar o componente `),Jc(511,`a`,8)(512,`strong`),Mk(513,`po-step`),Kg()(),Mk(514,`, o valor desta propriedade sempre será verdadeiro.`),Kg()()()(),Jc(515,`tr`,41)(516,`td`,20)(517,`div`,21)(518,`span`,22),Mk(519,` p-step`),_u(520,`br`),Kg()()(),Jc(521,`td`,23)(522,`code`,42),Mk(523,`number`),Kg()(),Jc(524,`td`,25)(525,`p`)(526,`code`),Mk(527,`1`),Kg()()(),Jc(528,`td`,26)(529,`em`)(530,`strong`),Mk(531,`(opcional)`),Kg()(),Jc(532,`p`),Mk(533,`Controla o passo atual do `),Jc(534,`code`),Mk(535,`po-stepper`),Kg(),Mk(536,`.`),Kg(),Jc(537,`blockquote`)(538,`p`),Mk(539,`Ao utilizar esta propriedade e também utilizar o componente `),Jc(540,`a`,8)(541,`strong`),Mk(542,`po-step`),Kg()(),Mk(543,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Jc(544,`a`,8)(545,`strong`),Mk(546,`po-step`),Kg()(),Mk(547,`.`),Kg()()()(),Jc(548,`tr`,43)(549,`td`,20)(550,`div`,21)(551,`span`,22),Mk(552,` p-step-icons`),_u(553,`br`),Kg()()(),Jc(554,`td`,23)(555,`code`,24),Mk(556,`boolean`),Kg()(),Jc(557,`td`,25)(558,`p`)(559,`code`),Mk(560,`false`),Kg()()(),Jc(561,`td`,26)(562,`em`)(563,`strong`),Mk(564,`(opcional)`),Kg()(),Jc(565,`p`),_u(566,`a`,44),Kg(),Jc(567,`p`),Mk(568,`Habilita a exibição de ícone ao invés de número no centro do círculo dos `),Jc(569,`em`),Mk(570,`steps`),Kg(),Mk(571,`.`),Kg()()(),Jc(572,`tr`,45)(573,`td`,20)(574,`div`,21)(575,`span`,22),Mk(576,` p-step-size`),_u(577,`br`),Kg()()(),Jc(578,`td`,23)(579,`code`,42),Mk(580,`number`),Kg()(),Jc(581,`td`,25)(582,`p`)(583,`code`),Mk(584,`24`),Kg()()(),Jc(585,`td`,26)(586,`em`)(587,`strong`),Mk(588,`(opcional)`),Kg()(),Jc(589,`p`),Mk(590,`Define o tamanho dos `),Jc(591,`em`),Mk(592,`steps`),Kg(),Mk(593,` em `),Jc(594,`em`),Mk(595,`pixels`),Kg(),Mk(596,`, possibilitando um maior destaque.`),Kg(),Jc(597,`p`),Mk(598,`O valor informado deve ser entre `),Jc(599,`code`),Mk(600,`24`),Kg(),Mk(601,` e `),Jc(602,`code`),Mk(603,`64`),Kg(),Mk(604,`.`),Kg(),Jc(605,`blockquote`)(606,`p`),Mk(607,`Valores que não se enquadrarem a esta regra serão ignorados, mantendo-se o valor `),Jc(608,`em`),Mk(609,`default`),Kg(),Mk(610,`.`),Kg()()()(),Jc(611,`tr`,46)(612,`td`,20)(613,`div`,21)(614,`span`,22),Mk(615,` p-steps`),_u(616,`br`),Kg()()(),Jc(617,`td`,23)(618,`code`,47),Mk(619,`Array<PoStepperItem>`),Kg()(),Jc(620,`td`,25),Mk(621,`-`),Kg(),Jc(622,`td`,26)(623,`em`)(624,`strong`),Mk(625,`(opcional)`),Kg()(),Jc(626,`p`),Mk(627,`Lista dos itens do stepper. Se o valor estiver indefinido ou inválido, será inicializado como um array vazio.`),Kg(),Jc(628,`blockquote`)(629,`p`),Mk(630,`Ao utilizar esta propriedade e também utilizar o componente `),Jc(631,`a`,8)(632,`strong`),Mk(633,`po-step`),Kg()(),Mk(634,`,
o valor desta propriedade ser\xE1 ignorada permanecendo a defini\xE7\xE3o do `),Jc(635,`a`,8)(636,`strong`),Mk(637,`po-step`),Kg()(),Mk(638,`.`),Kg()()()()(),Jc(639,`h3`,15),Mk(640,`Métodos`),Kg(),Jc(641,`table`,48)(642,`tr`,49)(643,`th`,50)(644,`div`,21)(645,`h4`)(646,`span`,22),Mk(647,` active `),Kg()()()()(),Jc(648,`tr`,26)(649,`td`,26)(650,`p`),Mk(651,`Altera o status do `),Jc(652,`em`),Mk(653,`step`),Kg(),Mk(654,` para ativo.`),Kg(),Jc(655,`blockquote`)(656,`p`),Mk(657,`Este método é valido apenas para as implementações que utilizam o componente `),Jc(658,`a`,8)(659,`strong`),Mk(660,`po-step`),Kg()(),Mk(661,`.`),Kg()()()()(),Jc(662,`h5`)(663,`b`),Mk(664,`Parâmetros`),Kg()(),Jc(665,`table`,16)(666,`tr`,17)(667,`th`,18),Mk(668,`Nome`),Kg(),Jc(669,`th`,18),Mk(670,`Tipo`),Kg(),Jc(671,`th`,18),Mk(672,`Descrição`),Kg()(),Jc(673,`tr`,49)(674,`td`,20),Mk(675,` index`),Kg(),Jc(676,`td`,23)(677,`code`,51),Mk(678,` number `),Kg()(),Jc(679,`td`,26)(680,`p`),Mk(681,`Índice do `),Jc(682,`code`),Mk(683,`po-step`),Kg(),Mk(684,` que se deseja ativar.`),Kg()()()(),_u(685,`br`),Jc(686,`table`,52)(687,`tr`,49)(688,`th`,50)(689,`div`,21)(690,`h4`)(691,`span`,22),Mk(692,` first `),Kg()()()()(),Jc(693,`tr`,26)(694,`td`,26)(695,`p`),Mk(696,`Ativa o primeiro `),Jc(697,`em`),Mk(698,`step`),Kg(),Mk(699,`.`),Kg(),Jc(700,`blockquote`)(701,`p`),Mk(702,`Este método é valido apenas para as implementações que utilizam o componente `),Jc(703,`a`,8)(704,`strong`),Mk(705,`po-step`),Kg()(),Mk(706,`.`),Kg()()()()(),_u(707,`br`),Jc(708,`table`,53)(709,`tr`,49)(710,`th`,50)(711,`div`,21)(712,`h4`)(713,`span`,22),Mk(714,` next `),Kg()()()()(),Jc(715,`tr`,26)(716,`td`,26)(717,`p`),Mk(718,`Ativa o próximo `),Jc(719,`em`),Mk(720,`step`),Kg(),Mk(721,`.`),Kg(),Jc(722,`blockquote`)(723,`p`),Mk(724,`Este método é valido apenas para as implementações que utilizam o componente `),Jc(725,`a`,8)(726,`strong`),Mk(727,`po-step`),Kg()(),Mk(728,`.`),Kg()()()()(),_u(729,`br`),Jc(730,`table`,54)(731,`tr`,49)(732,`th`,50)(733,`div`,21)(734,`h4`)(735,`span`,22),Mk(736,` previous `),Kg()()()()(),Jc(737,`tr`,26)(738,`td`,26)(739,`p`),Mk(740,`Ativa o `),Jc(741,`em`),Mk(742,`step`),Kg(),Mk(743,` anterior.`),Kg(),Jc(744,`blockquote`)(745,`p`),Mk(746,`Este método é valido apenas para as implementações que utilizam o componente `),Jc(747,`a`,8)(748,`strong`),Mk(749,`po-step`),Kg()(),Mk(750,`.`),Kg()()()()(),_u(751,`br`),Jc(752,`h3`),Mk(753,`Interfaces`),Kg(),Jc(754,`h4`,55)(755,`code`,7),Mk(756,`PoStepperItem`),Kg()(),Jc(757,`div`,2)(758,`p`),Mk(759,`Interface para definição dos `),Jc(760,`em`),Mk(761,`steps`),Kg(),Mk(762,` do componente `),Jc(763,`code`),Mk(764,`po-stepper`),Kg(),Mk(765,` quando utilizada a propriedade `),Jc(766,`code`),Mk(767,`p-steps`),Kg(),Mk(768,`.`),Kg()(),Jc(769,`h4`,15),Mk(770,`Propriedades`),Kg(),Jc(771,`table`,16)(772,`tr`,17)(773,`th`,18),Mk(774,`Nome`),Kg(),Jc(775,`th`,18),Mk(776,`Tipo`),Kg(),Jc(777,`th`,18),Mk(778,`Descrição`),Kg()(),Jc(779,`tr`,56)(780,`td`,20)(781,`div`,21)(782,`span`,22),Mk(783,` iconActive`),_u(784,`br`),Kg()()(),Jc(785,`td`,23)(786,`code`,29),Mk(787,`string `),Kg(),Jc(788,`code`,30),Mk(789,` TemplateRef<void>`),Kg()(),Jc(790,`td`,26)(791,`em`)(792,`strong`),Mk(793,`(opcional)`),Kg()(),Jc(794,`p`),Mk(795,`Define o ícone do `),Jc(796,`em`),Mk(797,`step`),Kg(),Mk(798,` ativo.`),Kg()()(),Jc(799,`tr`,57)(800,`td`,20)(801,`div`,21)(802,`span`,22),Mk(803,` iconDefault`),_u(804,`br`),Kg()()(),Jc(805,`td`,23)(806,`code`,29),Mk(807,`string `),Kg(),Jc(808,`code`,30),Mk(809,` TemplateRef<void>`),Kg()(),Jc(810,`td`,26)(811,`em`)(812,`strong`),Mk(813,`(opcional)`),Kg()(),Jc(814,`p`),Mk(815,`Define o ícone do `),Jc(816,`em`),Mk(817,`step`),Kg(),Mk(818,` default.`),Kg()()(),Jc(819,`tr`,58)(820,`td`,20)(821,`div`,21)(822,`span`,22),Mk(823,` iconDone`),_u(824,`br`),Kg()()(),Jc(825,`td`,23)(826,`code`,29),Mk(827,`string `),Kg(),Jc(828,`code`,30),Mk(829,` TemplateRef<void>`),Kg()(),Jc(830,`td`,26)(831,`em`)(832,`strong`),Mk(833,`(opcional)`),Kg()(),Jc(834,`p`),Mk(835,`Define o ícone do `),Jc(836,`em`),Mk(837,`step`),Kg(),Mk(838,` concluído.`),Kg()()(),Jc(839,`tr`,59)(840,`td`,20)(841,`div`,21)(842,`span`,22),Mk(843,` id`),_u(844,`br`),Kg()()(),Jc(845,`td`,23)(846,`code`,29),Mk(847,`string`),Kg()(),Jc(848,`td`,26)(849,`em`)(850,`strong`),Mk(851,`(opcional)`),Kg()(),Jc(852,`p`),Mk(853,`Identificador único do step.`),Kg()()(),Jc(854,`tr`,60)(855,`td`,20)(856,`div`,21)(857,`span`,22),Mk(858,` label`),_u(859,`br`),Kg()()(),Jc(860,`td`,23)(861,`code`,29),Mk(862,`string`),Kg()(),Jc(863,`td`,26)(864,`em`)(865,`strong`),Mk(866,`(opcional)`),Kg()(),Jc(867,`p`),Mk(868,`Texto do item do stepper.`),Kg()()(),Jc(869,`tr`,61)(870,`td`,20)(871,`div`,21)(872,`span`,22),Mk(873,` status`),_u(874,`br`),Kg()()(),Jc(875,`td`,23)(876,`code`,62),Mk(877,`PoStepperStatus`),Kg()(),Jc(878,`td`,26)(879,`em`)(880,`strong`),Mk(881,`(opcional)`),Kg()(),Jc(882,`p`),Mk(883,`Define o estado de exibição do `),Jc(884,`em`),Mk(885,`step`),Kg(),Mk(886,`.`),Kg()()()(),Jc(887,`h3`),Mk(888,`Enums`),Kg(),Jc(889,`h4`,63)(890,`code`,7),Mk(891,`PoStepperOrientation`),Kg()(),Jc(892,`div`,2)(893,`p`),_u(894,`a`,64),Kg(),Jc(895,`p`)(896,`em`),Mk(897,`Enums`),Kg(),Mk(898,` para definição da orientação do `),Jc(899,`code`),Mk(900,`po-stepper`),Kg(),Mk(901,`.`),Kg()(),Jc(902,`h4`,15),Mk(903,`Propriedades`),Kg(),Jc(904,`table`,16)(905,`tr`,17)(906,`th`,18),Mk(907,`Nome`),Kg(),Jc(908,`th`,18),Mk(909,`Descrição`),Kg()(),Jc(910,`tr`,65)(911,`td`,20)(912,`div`,21)(913,`span`,22),Mk(914,` Horizontal`),_u(915,`br`),Kg()()(),Jc(916,`td`,26)(917,`p`),Mk(918,`Define a exibição do componente na horizontal.`),Kg()()(),Jc(919,`tr`,66)(920,`td`,20)(921,`div`,21)(922,`span`,22),Mk(923,` Vertical`),_u(924,`br`),Kg()()(),Jc(925,`td`,26)(926,`p`),Mk(927,`Define a exibição do componente na vertical.`),Kg()()()(),Jc(928,`h4`,67)(929,`code`,7),Mk(930,`PoStepperStatus`),Kg()(),Jc(931,`div`,2)(932,`p`),_u(933,`a`,68),Kg(),Jc(934,`p`)(935,`em`),Mk(936,`Enums`),Kg(),Mk(937,` para os status do `),Jc(938,`code`),Mk(939,`po-stepper`),Kg(),Mk(940,` quando utilizada a propriedade `),Jc(941,`code`),Mk(942,`p-steps`),Kg(),Mk(943,`.`),Kg()(),Jc(944,`h4`,15),Mk(945,`Propriedades`),Kg(),Jc(946,`table`,16)(947,`tr`,17)(948,`th`,18),Mk(949,`Nome`),Kg(),Jc(950,`th`,18),Mk(951,`Descrição`),Kg()(),Jc(952,`tr`,69)(953,`td`,20)(954,`div`,21)(955,`span`,22),Mk(956,` Active`),_u(957,`br`),Kg()()(),Jc(958,`td`,26)(959,`p`),Mk(960,`Define o estado do `),Jc(961,`em`),Mk(962,`step`),Kg(),Mk(963,` como ativo.`),Kg()()(),Jc(964,`tr`,70)(965,`td`,20)(966,`div`,21)(967,`span`,22),Mk(968,` Default`),_u(969,`br`),Kg()()(),Jc(970,`td`,26)(971,`p`),Mk(972,`Define o estado do `),Jc(973,`em`),Mk(974,`step`),Kg(),Mk(975,` como padrão.`),Kg()()(),Jc(976,`tr`,71)(977,`td`,20)(978,`div`,21)(979,`span`,22),Mk(980,` Disabled`),_u(981,`br`),Kg()()(),Jc(982,`td`,26)(983,`p`),Mk(984,`Define o estado do `),Jc(985,`em`),Mk(986,`step`),Kg(),Mk(987,` como desabilitado.`),Kg()()(),Jc(988,`tr`,72)(989,`td`,20)(990,`div`,21)(991,`span`,22),Mk(992,` Done`),_u(993,`br`),Kg()()(),Jc(994,`td`,26)(995,`p`),Mk(996,`Define o estado do `),Jc(997,`em`),Mk(998,`step`),Kg(),Mk(999,` como concluído.`),Kg()()(),Jc(1e3,`tr`,73)(1001,`td`,20)(1002,`div`,21)(1003,`span`,22),Mk(1004,` Error`),_u(1005,`br`),Kg()()(),Jc(1006,`td`,26)(1007,`p`),Mk(1008,`Define o estado do `),Jc(1009,`em`),Mk(1010,`step`),Kg(),Mk(1011,` com erro.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return p$5})();function ut(p,W){if(p&1&&(Jc(0,`div`,1),_u(1,`sample-po-stepper-basic-view`)(2,`sample-po-stepper-labs-view`)(3,`sample-po-stepper-sales-view`)(4,`sample-po-stepper-active-view`)(5,`sample-po-stepper-steps-view`),Kg()),p&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var St=[{path:``,component:(()=>{class p{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;title=`Stepper`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Stepper · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||p)(I(ar),I(An))};static ɵcmp=Jn({type:p,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0),LO(1,ut,6,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-stepper-doc`),Kg()()),r&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,Ve,Ae,ke,Ne,ze,Oe],encapsulation:2,changeDetection:1})}return p})()}];var He=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵmod=ge({type:p});static ɵinj=de({imports:[GV.forChild(St),GV]})}return p})();var hn=(()=>{class p{static ɵfac=function(r){return new(r||p)};static ɵmod=ge({type:p});static ɵinj=de({imports:[M,He]})}return p})();export{hn as DocPoStepperModule};
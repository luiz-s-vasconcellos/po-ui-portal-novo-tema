import{m as P,p as M}from"./main-6GCKJMTQ.js";import{Ar as G0,At as Zte,Ba as p,Br as Jn,Fa as nm,Fr as H_,G as Nf,Hr as KO,Ki as Zb,L as Koe,La as ok,Li as WL,Lr as I,Pn as tre,Pt as are,Si as Rk,Ti as TZ,U as MH,Ur as Kb,W as Mze,Wa as q0,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,_r as Cu,an as ia,ar as Ab,bn as oi,co as wg,da as ge$1,eo as tk,ho as xo,j as I4,jr as GV,ki as U_,kt as Zoe,lr as B_,lt as Ss,oo as vt,or as An,pi as QL,qr as LO,ra as de,ri as No,rt as Ru,sn as j4,ti as NZ,xa as j_,xi as RZ,ya as jO,zn as w4,zr as Jc}from"./chunk-t_lpM8Oc.js";var se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-basic`]],standalone:!1,decls:4,vars:0,consts:[[`modal`,``],[`p-title`,`PO Modal`],[`p-label`,`Open modal`,3,`p-click`]],template:function(l,n){if(l&1){let d=KO();Jc(0,`po-modal`,1,0),Mk(2,` We are TOTVS!!! `),Kg(),Jc(3,`po-button`,2),vt(`p-click`,function(){U_(d);let i=ok(1);return H_(i.open())}),Kg()}},dependencies:[oi,ia],encapsulation:2,changeDetection:1})}return a})();var ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-modal-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-modal-basic/sample-po-modal-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-basic/sample-po-modal-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Modal Basic`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-modal-basic`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-modal-basic/sample-po-modal-basic.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-modal-basic/sample-po-modal-basic.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return a})();var ue=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:`Confirm`};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];secondaryAction={action:()=>{this.poModal.close()},label:`Cancel`};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];properties;sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes(`disabled`),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes(`loading`),this.primaryAction.danger=this.primaryActionProperties.includes(`danger`),this.secondaryAction.disabled=this.secondaryActionProperties.includes(`disabled`),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes(`loading`),this.secondaryAction.danger=this.secondaryActionProperties.includes(`danger`),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title=`PO Modal`,this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize=`medium`,this.icon=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-labs`]],viewQuery:function(l,n){if(l&1&&Cu(ia,7),l&2){let d;No(d=xo())&&(n.poModal=d.first)}},standalone:!1,decls:21,vars:28,consts:[[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-primary-action`,`p-secondary-action`,`p-size`,`p-title`,`p-icon`],[`p-label`,`Open Modal`,3,`p-click`,`p-disabled`],[1,`po-row`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-maxlength`,`200`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionLabel`,`p-clean`,``,`p-label`,`Primary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionIcon`,`p-clean`,``,`p-label`,`Primary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionProperties`,`p-columns`,`3`,`p-label`,`Primary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`secondaryActionLabel`,`p-clean`,``,`p-label`,`Secondary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionIcon`,`p-clean`,``,`p-label`,`Secondary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionProperties`,`p-columns`,`3`,`p-label`,`Secondary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let d=KO();Jc(0,`po-modal`,1),Mk(1),Kg(),Jc(2,`po-button`,2),vt(`p-click`,function(){return n.openModal()}),Kg(),_u(3,`po-divider`),Jc(4,`form`,null,0)(6,`div`,3)(7,`po-input`,4),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.title,i)||(n.title=i),H_(i)}),Kg(),Jc(8,`po-select`,5),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.icon,i)||(n.icon=i),H_(i)}),Kg(),Jc(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.content,i)||(n.content=i),H_(i)}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.primaryActionLabel,i)||(n.primaryActionLabel=i),H_(i)}),Kg(),Jc(11,`po-input`,8),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.primaryActionIcon,i)||(n.primaryActionIcon=i),H_(i)}),Kg(),Jc(12,`po-checkbox-group`,9),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.primaryActionProperties,i)||(n.primaryActionProperties=i),H_(i)}),Kg(),Jc(13,`po-input`,10),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.secondaryActionLabel,i)||(n.secondaryActionLabel=i),H_(i)}),Kg(),Jc(14,`po-input`,11),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.secondaryActionIcon,i)||(n.secondaryActionIcon=i),H_(i)}),Kg(),Jc(15,`po-checkbox-group`,12),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.secondaryActionProperties,i)||(n.secondaryActionProperties=i),H_(i)}),Kg(),Jc(16,`po-radio-group`,13),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.size,i)||(n.size=i),H_(i)}),Kg(),Jc(17,`po-checkbox-group`,14),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.properties,i)||(n.properties=i),H_(i)}),Kg(),Jc(18,`po-radio-group`,15),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.componentsSize,i)||(n.componentsSize=i),H_(i)}),Kg()(),Jc(19,`div`,3)(20,`po-button`,16),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(l&2){let d=ok(5);Ab(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-primary-action`,n.primaryAction)(`p-secondary-action`,n.secondaryActionLabel?n.secondaryAction:null)(`p-size`,n.size)(`p-title`,n.title)(`p-icon`,n.icon),wg(),nm(` `,n.content,`
`),wg(),Ab(`p-disabled`,d.form.invalid),wg(5),Kb(`ngModel`,n.title),q0(),wg(),Kb(`ngModel`,n.icon),Ab(`p-options`,n.iconOptions),q0(),wg(),Kb(`ngModel`,n.content),q0(),wg(),Kb(`ngModel`,n.primaryActionLabel),q0(),wg(),Kb(`ngModel`,n.primaryActionIcon),q0(),wg(),Kb(`ngModel`,n.primaryActionProperties),Ab(`p-options`,n.primaryActionOptions),q0(),wg(),Kb(`ngModel`,n.secondaryActionLabel),q0(),wg(),Kb(`ngModel`,n.secondaryActionIcon),q0(),wg(),Kb(`ngModel`,n.secondaryActionProperties),Ab(`p-options`,n.secondaryActionOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.componentsSize),Ab(`p-options`,n.componentsSizeOptions),q0()}},dependencies:[NZ,TZ,RZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,ia],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-labs-view`]],standalone:!1,decls:30,vars:0,consts:[[`id`,`sample-po-modal-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-modal-labs/sample-po-modal-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-labs/sample-po-modal-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Modal Labs`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-modal-labs`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-modal-labs/sample-po-modal-labs.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-modal
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryActionLabel ? secondaryAction : null"
  [p-size]="size"
  [p-title]="title"
  [p-icon]="icon"
>
  `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` content `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
</po-modal>

<po-button p-label="Open Modal" [p-disabled]="f.form.invalid" (p-click)="openModal()"> </po-button>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-3" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconOptions"
    ></po-select>

    <po-input class="po-md-12 po-lg-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-maxlength="200">
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="primaryActionLabel"
      [(ngModel)]="primaryActionLabel"
      p-clean
      p-label="Primary action label"
      p-maxlength="50"
    >
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="primaryActionIcon"
      [(ngModel)]="primaryActionIcon"
      p-clean
      p-label="Primary action icon"
      p-maxlength="50"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="primaryActionProperties"
      [(ngModel)]="primaryActionProperties"
      p-columns="3"
      p-label="Primary Action Properties"
      [p-options]="primaryActionOptions"
    >
    </po-checkbox-group>

    <po-input
      class="po-md-6 po-lg-3"
      name="secondaryActionLabel"
      [(ngModel)]="secondaryActionLabel"
      p-clean
      p-label="Secondary action label"
      p-maxlength="50"
    >
    </po-input>

    <po-input
      class="po-md-6 po-lg-3"
      name="secondaryActionIcon"
      [(ngModel)]="secondaryActionIcon"
      p-clean
      p-label="Secondary action icon"
      p-maxlength="50"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="secondaryActionProperties"
      [(ngModel)]="secondaryActionProperties"
      p-columns="3"
      p-label="Secondary Action Properties"
      [p-options]="secondaryActionOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="Size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-checkbox-group
      class="po-md-12 po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12 po-lg-6"
      name="componentsSize"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Jc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Mk(25,`sample-po-modal-labs/sample-po-modal-labs.component.ts`),Kg(),Jc(26,`div`,10)(27,`pre`,11),Mk(28,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalAction,
  PoModalComponent,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-labs',
  templateUrl: './sample-po-modal-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  componentsSize: string;
  content;
  size;
  title;
  icon: string;

  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Confirm'
  };

  primaryActionLabel: string;
  primaryActionIcon: string;
  primaryActionProperties: Array<string>;
  primaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  secondaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  secondaryActionLabel: string;
  secondaryActionIcon: string;
  secondaryActionProperties: Array<string>;
  secondaryActionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' }
  ];

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'click-out', label: 'Click Out' },
    { value: 'hide-close', label: 'Hide Close' }
  ];

  properties: Array<string>;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra large', value: 'xl' },
    { label: 'Automatic', value: 'auto' }
  ];

  openModal() {
    this.primaryAction.disabled = this.primaryActionProperties.includes('disabled');
    this.primaryAction.label = this.primaryActionLabel;
    this.primaryAction.icon = this.primaryActionIcon;
    this.primaryAction.loading = this.primaryActionProperties.includes('loading');
    this.primaryAction.danger = this.primaryActionProperties.includes('danger');

    this.secondaryAction.disabled = this.secondaryActionProperties.includes('disabled');
    this.secondaryAction.label = this.secondaryActionLabel;
    this.secondaryAction.icon = this.secondaryActionIcon;
    this.secondaryAction.loading = this.secondaryActionProperties.includes('loading');
    this.secondaryAction.danger = this.secondaryActionProperties.includes('danger');

    this.poModal.open();
  }

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.size = undefined;
    this.content = undefined;
    this.title = 'PO Modal';
    this.properties = [];
    this.primaryActionLabel = undefined;
    this.primaryActionIcon = undefined;
    this.primaryActionProperties = [];
    this.secondaryActionLabel = undefined;
    this.secondaryActionIcon = undefined;
    this.secondaryActionProperties = [];
    this.componentsSize = 'medium';
    this.icon = undefined;
  }
}
`),Kg()()()()()(),_u(29,`hr`))},dependencies:[P,tre,are,ue],encapsulation:2,changeDetection:1})}return a})();var Pe=[`optionsForm`];var be=(()=>{class a{poNotification=p(Ru);form;poModal;accompaniment=``;fruits;orderDetail=``;close={action:()=>{this.closeModal()},label:`Close`,danger:!0};confirm={action:()=>{this.proccessOrder()},label:`Confirm`};accompanimentOptions=[{value:`chocolate`,label:`Chocolate`},{value:`hazeinut`,label:`Hazelnut`},{value:`milk`,label:`Milk`}];fruitsOptions=[{value:`orange`,label:`Orange`},{value:`apple`,label:`Apple`},{value:`pineapple`,label:`Pineapple`},{value:`graple`,label:`Grape`},{value:`strawberry`,label:`Strawberry`}];closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning(`Choose the items to confirm the order.`):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-fruits-salad`]],viewQuery:function(l,n){if(l&1&&Cu(Pe,7)(ia,7),l&2){let d;No(d=xo())&&(n.form=d.first),No(d=xo())&&(n.poModal=d.first)}},standalone:!1,decls:14,vars:8,consts:[[`optionsForm`,`ngForm`],[`p-title`,`Options`,3,`p-primary-action`,`p-secondary-action`],[1,`po-row`],[`name`,`checkboxGroup`,`p-label`,`Fruits:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompaniment`,`p-label`,`Accompaniment:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orderDetail`,`p-label`,`Details:`,`p-rows`,`8`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[3,`p-disabled-align`],[`p-danger`,`true`,`p-label`,`Close`,3,`p-click`],[`p-label`,`Clear`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Confirm`,3,`p-click`],[`p-label`,`Buy fruits salad`,3,`p-click`]],template:function(l,n){if(l&1){let d=KO();Jc(0,`po-modal`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-checkbox-group`,3),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.fruits,i)||(n.fruits=i),H_(i)}),Kg()(),Jc(5,`div`,2)(6,`po-combo`,4),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.accompaniment,i)||(n.accompaniment=i),H_(i)}),Kg()(),Jc(7,`div`,2)(8,`po-textarea`,5),G0(),Zb(`ngModelChange`,function(i){return U_(d),Rk(n.orderDetail,i)||(n.orderDetail=i),H_(i)}),Kg()()(),Jc(9,`po-modal-footer`,6)(10,`po-button`,7),vt(`p-click`,function(){return n.closeModal()}),Kg(),Jc(11,`po-button`,8),vt(`p-click`,function(){return n.restore()}),Kg(),Jc(12,`po-button`,9),vt(`p-click`,function(){return n.confirmFruits()}),Kg()()(),Jc(13,`po-button`,10),vt(`p-click`,function(){return n.openQuestionnaire()}),Kg()}l&2&&(Ab(`p-primary-action`,n.confirm)(`p-secondary-action`,n.close),wg(4),Kb(`ngModel`,n.fruits),Ab(`p-options`,n.fruitsOptions),q0(),wg(2),Kb(`ngModel`,n.accompaniment),Ab(`p-options`,n.accompanimentOptions),q0(),wg(2),Kb(`ngModel`,n.orderDetail),q0(),wg(),Ab(`p-disabled-align`,!1))},dependencies:[NZ,TZ,RZ,QL,WL,oi,I4,w4,Zoe,ia,MH],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-fruits-salad-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-modal-fruits-salad`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Modal - Fruits Salad`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-modal-fruits-salad`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
  <form #optionsForm="ngForm">
    <div class="po-row">
      <po-checkbox-group
        class="po-md-12"
        name="checkboxGroup"
        [(ngModel)]="fruits"
        p-label="Fruits:"
        p-required
        [p-options]="fruitsOptions"
      >
      </po-checkbox-group>
    </div>

    <div class="po-row">
      <po-combo
        class="po-md-12"
        name="accompaniment"
        [(ngModel)]="accompaniment"
        p-label="Accompaniment:"
        p-required
        [p-options]="accompanimentOptions"
      >
      </po-combo>
    </div>

    <div class="po-row">
      <po-textarea class="po-md-12" name="orderDetail" [(ngModel)]="orderDetail" p-label="Details:" p-rows="8">
      </po-textarea>
    </div>
  </form>

  <po-modal-footer [p-disabled-align]="false">
    <po-button p-danger="true" p-label="Close" (p-click)="closeModal()"> </po-button>
    <po-button p-label="Clear" (p-click)="restore()"> </po-button>
    <po-button p-kind="primary" p-label="Confirm" (p-click)="confirmFruits()"> </po-button>
  </po-modal-footer>
</po-modal>

<po-button p-label="Buy fruits salad" (p-click)="openQuestionnaire()"> </po-button>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoCheckboxGroupOption, PoComboOption } from '@po-ui/ng-components';

import { PoModalAction } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-modal-fruits-salad',
  templateUrl: './sample-po-modal-fruits-salad.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalFruitsSaladComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  accompaniment: string = '';
  fruits: Array<string>;
  orderDetail: string = '';

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Confirm'
  };

  public readonly accompanimentOptions: Array<PoComboOption> = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'hazeinut', label: 'Hazelnut' },
    { value: 'milk', label: 'Milk' }
  ];

  public readonly fruitsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'orange', label: 'Orange' },
    { value: 'apple', label: 'Apple' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'graple', label: 'Grape' },
    { value: 'strawberry', label: 'Strawberry' }
  ];

  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  confirmFruits() {
    this.proccessOrder();
  }

  restore() {
    this.form.reset();
  }

  openQuestionnaire() {
    this.poModal.open();
  }

  private proccessOrder() {
    if (this.form.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.poNotification.warning(orderInvalidMessage);
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.poNotification.success(\`Your order confirmed: \${this.fruits}, with accompaniment: \${this.accompaniment}.\`);
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,be],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-doc`]],standalone:!1,decls:610,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Modal Footer`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-modal-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-modal-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-click-out`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-hide-close`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-primary-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalAction`],[`id`,`prop-p-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-close`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-open`,1,`docs-api-method-table`],[`id`,`interface-po-modal-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-modal-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-modal-action-danger`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-loading`,1,`docs-api-properties-row`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoModalModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-modal`),Kg()(),Jc(7,`blockquote`,3)(8,`strong`),Mk(9,`Subcomponentes:`),Kg(),Jc(10,`po-tag`,4),vt(`p-click`,function(){return n.openDoc(`po-modal-footer`)}),Kg()(),Jc(11,`h3`,5),Mk(12,`Componente`),Kg(),Jc(13,`h4`,6)(14,`code`,7),Mk(15,`PoModalComponent`),Kg()(),Jc(16,`div`,2)(17,`p`),Mk(18,`O componente `),Jc(19,`code`),Mk(20,`po-modal`),Kg(),Mk(21,` é utilizado para incluir conteúdos rápidos e informativos.`),Kg(),Jc(22,`p`),Mk(23,`No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.`),Kg(),Jc(24,`p`),Mk(25,`Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `),Jc(26,`code`),Mk(27,`po-chart`),Kg(),Mk(28,`,
`),Jc(29,`code`),Mk(30,`po-table`),Kg(),Mk(31,` e os demais componentes do PO.`),Kg(),Jc(32,`p`),Mk(33,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Jc(34,`em`),Mk(35,`danger`),Kg(),Mk(36,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Jc(37,`a`,8)(38,`code`),Mk(39,`PoModalFooter`),Kg()(),Mk(40,`.`),Kg(),Jc(41,`blockquote`)(42,`p`),Mk(43,`É possível fechar a modal através da tecla `),Jc(44,`em`),Mk(45,`ESC`),Kg(),Mk(46,`, quando a propriedade `),Jc(47,`code`),Mk(48,`p-hide-close`),Kg(),Mk(49,` não estiver habilitada.`),Kg()(),Jc(50,`h4`),Mk(51,`Tokens customizáveis`),Kg(),Jc(52,`p`),Mk(53,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(54,`blockquote`)(55,`p`),Mk(56,`Para maiores informações, acesse o guia `),Jc(57,`a`,9),Mk(58,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(59,`.`),Kg()(),Jc(60,`table`)(61,`thead`)(62,`tr`)(63,`th`),Mk(64,`Propriedade`),Kg(),Jc(65,`th`),Mk(66,`Descrição`),Kg(),Jc(67,`th`),Mk(68,`Valor Padrão`),Kg()()(),Jc(69,`tbody`)(70,`tr`)(71,`td`)(72,`strong`),Mk(73,`Default Values`),Kg()(),_u(74,`td`)(75,`td`),Kg(),Jc(76,`tr`)(77,`td`)(78,`code`),Mk(79,`--border-radius`),Kg(),Mk(80,` \xA0`),Kg(),Jc(81,`td`),Mk(82,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(83,`td`)(84,`code`),Mk(85,`var(--border-radius-md)`),Kg()()(),Jc(86,`tr`)(87,`td`)(88,`code`),Mk(89,`--border-width`),Kg(),Mk(90,` \xA0`),Kg(),Jc(91,`td`),Mk(92,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Jc(93,`td`)(94,`code`),Mk(95,`var(--border-width-sm)`),Kg()()(),Jc(96,`tr`)(97,`td`)(98,`code`),Mk(99,`--border-color`),Kg(),Mk(100,` \xA0`),Kg(),Jc(101,`td`),Mk(102,`Cor da borda`),Kg(),Jc(103,`td`)(104,`code`),Mk(105,`var(--color-neutral-light-20)`),Kg()()(),Jc(106,`tr`)(107,`td`)(108,`code`),Mk(109,`--background`),Kg(),Mk(110,` \xA0`),Kg(),Jc(111,`td`),Mk(112,`Cor de background`),Kg(),Jc(113,`td`)(114,`code`),Mk(115,`var(--color-neutral-light-00)`),Kg()()(),Jc(116,`tr`)(117,`td`)(118,`code`),Mk(119,`--shadow`),Kg(),Mk(120,` \xA0`),Kg(),Jc(121,`td`),Mk(122,`Contém o valor da sombra do elemento`),Kg(),Jc(123,`td`)(124,`code`),Mk(125,`var(--shadow-md)`),Kg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`--color-overlay`),Kg(),Mk(130,` \xA0`),Kg(),Jc(131,`td`),Mk(132,`Cor da camada visual temporária`),Kg(),Jc(133,`td`)(134,`code`),Mk(135,`var(--color-neutral-dark-80)`),Kg()()(),Jc(136,`tr`)(137,`td`)(138,`code`),Mk(139,`--opacity-overlay`),Kg(),Mk(140,` \xA0`),Kg(),Jc(141,`td`),Mk(142,`Opacidade da camada visual temporária \xA0`),Kg(),Jc(143,`td`)(144,`code`),Mk(145,`0.7`),Kg()()(),Jc(146,`tr`)(147,`td`)(148,`code`),Mk(149,`--color-divider`),Kg(),Mk(150,` \xA0`),Kg(),Jc(151,`td`),Mk(152,`Cor das divisões do modal`),Kg(),Jc(153,`td`)(154,`code`),Mk(155,`var(--color-neutral-light-20)`),Kg()()(),Jc(156,`tr`)(157,`td`)(158,`code`),Mk(159,`--padding-header`),Kg(),Mk(160,` \xA0`),Kg(),Jc(161,`td`),Mk(162,`Padding do header do modal`),Kg(),Jc(163,`td`)(164,`code`),Mk(165,`var(--spacing-sm) var(--spacing-md)`),Kg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Mk(169,`--padding-body`),Kg(),Mk(170,` \xA0`),Kg(),Jc(171,`td`),Mk(172,`Padding do corpo do modal`),Kg(),Jc(173,`td`)(174,`code`),Mk(175,`var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) `),Kg()()()()()(),Jc(176,`div`,10)(177,`h4`,11),Mk(178,`Seletor`),Kg(),Jc(179,`pre`,12),Mk(180,`<po-modal
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-hide-close="boolean"
    p-icon="string | TemplateRef<void>"
    p-primary-action="PoModalAction"
    p-secondary-action="PoModalAction"
    p-size="string"
    p-title="string" >
</po-modal>
`),Kg()(),Jc(181,`h4`,13),Mk(182,`Propriedades`),Kg(),Jc(183,`table`,14)(184,`tr`,15)(185,`th`,16),Mk(186,`Nome`),Kg(),Jc(187,`th`,16),Mk(188,`Tipo`),Kg(),Jc(189,`th`,16),Mk(190,`Padrão`),Kg(),Jc(191,`th`,16),Mk(192,`Descrição`),Kg()(),Jc(193,`tr`,17)(194,`td`,18)(195,`div`,19)(196,`span`,20),Mk(197,`p-click-out`),_u(198,`br`),Kg()()(),Jc(199,`td`,21)(200,`code`,22),Mk(201,`boolean`),Kg()(),Jc(202,`td`,23),Mk(203,`-`),Kg(),Jc(204,`td`,24)(205,`em`)(206,`strong`),Mk(207,`(opcional)`),Kg()(),Jc(208,`p`),Mk(209,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Jc(210,`code`),Mk(211,`true`),Kg(),Mk(212,` para ativar o fechamento ao clicar fora da modal.`),Kg()()(),Jc(213,`tr`,25)(214,`td`,18)(215,`div`,26)(216,`span`,27),Mk(217,` (p-close)`),_u(218,`br`),Kg()()(),Jc(219,`td`,21)(220,`code`,28),Mk(221,`EventEmitter`),Kg()(),Jc(222,`td`,23),Mk(223,`-`),Kg(),Jc(224,`td`,24)(225,`p`),Mk(226,`Evento disparado ao fechar o modal.`),Kg()()(),Jc(227,`tr`,29)(228,`td`,18)(229,`div`,19)(230,`span`,20),Mk(231,` p-components-size`),_u(232,`br`),Kg()()(),Jc(233,`td`,21)(234,`code`,30),Mk(235,`string`),Kg()(),Jc(236,`td`,23)(237,`p`)(238,`code`),Mk(239,`medium`),Kg()()(),Jc(240,`td`,24)(241,`em`)(242,`strong`),Mk(243,`(opcional)`),Kg()(),Jc(244,`p`),Mk(245,`Define o tamanho dos componentes de formulário no modal:`),Kg(),Jc(246,`ul`)(247,`li`)(248,`code`),Mk(249,`small`),Kg(),Mk(250,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(251,`li`)(252,`code`),Mk(253,`medium`),Kg(),Mk(254,`: aplica a medida medium de cada componente.`),Kg()(),Jc(255,`blockquote`)(256,`p`),Mk(257,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(258,`code`),Mk(259,`medium`),Kg(),Mk(260,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(261,`a`,31),Mk(262,`po-theme`),Kg(),Mk(263,`.`),Kg()()()(),Jc(264,`tr`,32)(265,`td`,18)(266,`div`,19)(267,`span`,20),Mk(268,` p-hide-close`),_u(269,`br`),Kg()()(),Jc(270,`td`,21)(271,`code`,22),Mk(272,`boolean`),Kg()(),Jc(273,`td`,23)(274,`p`)(275,`code`),Mk(276,`false`),Kg()()(),Jc(277,`td`,24)(278,`em`)(279,`strong`),Mk(280,`(opcional)`),Kg()(),Jc(281,`p`),Mk(282,`Oculta o ícone de fechar do cabeçalho da modal.`),Kg(),Jc(283,`blockquote`)(284,`p`),Mk(285,`Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla `),Jc(286,`em`),Mk(287,`ESC`),Kg(),Mk(288,`.`),Kg()()()(),Jc(289,`tr`,33)(290,`td`,18)(291,`div`,19)(292,`span`,20),Mk(293,` p-icon`),_u(294,`br`),Kg()()(),Jc(295,`td`,21)(296,`code`,30),Mk(297,`string `),Kg(),Jc(298,`code`,34),Mk(299,` TemplateRef<void>`),Kg()(),Jc(300,`td`,23),Mk(301,`-`),Kg(),Jc(302,`td`,24)(303,`em`)(304,`strong`),Mk(305,`(opcional)`),Kg()(),Jc(306,`p`),Mk(307,`Ícone exibido ao lado esquerdo do label do titúlo da modal.`),Kg(),Jc(308,`p`),Mk(309,`É possível usar qualquer um dos ícones da `),Jc(310,`a`,35),Mk(311,`Biblioteca de ícones`),Kg(),Mk(312,`. conforme exemplo abaixo:`),Kg(),Jc(313,`pre`)(314,`code`),Mk(315,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),Kg()(),Jc(316,`p`),Mk(317,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(318,`em`),Mk(319,`Font Awesome`),Kg(),Mk(320,`, da seguinte forma:`),Kg(),Jc(321,`pre`)(322,`code`),Mk(323,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),Kg()(),Jc(324,`p`),Mk(325,`Outra opção seria a customização do ícone através do `),Jc(326,`code`),Mk(327,`TemplateRef`),Kg(),Mk(328,`, conforme exemplo abaixo:`),Kg(),Jc(329,`pre`)(330,`code`),Mk(331,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()()()(),Jc(332,`tr`,36)(333,`td`,18)(334,`div`,19)(335,`span`,20),Mk(336,` p-primary-action`),_u(337,`br`),Kg()()(),Jc(338,`td`,21)(339,`code`,37),Mk(340,`PoModalAction`),Kg()(),Jc(341,`td`,23),Mk(342,`-`),Kg(),Jc(343,`td`,24)(344,`em`)(345,`strong`),Mk(346,`(opcional)`),Kg()(),Jc(347,`p`),Mk(348,`Deve ser definido um objeto que implementa a interface `),Jc(349,`code`),Mk(350,`PoModalAction`),Kg(),Mk(351,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),Kg()()(),Jc(352,`tr`,38)(353,`td`,18)(354,`div`,19)(355,`span`,20),Mk(356,` p-secondary-action`),_u(357,`br`),Kg()()(),Jc(358,`td`,21)(359,`code`,37),Mk(360,`PoModalAction`),Kg()(),Jc(361,`td`,23),Mk(362,`-`),Kg(),Jc(363,`td`,24)(364,`em`)(365,`strong`),Mk(366,`(opcional)`),Kg()(),Jc(367,`p`),Mk(368,`Deve ser definido um objeto que implementa a interface `),Jc(369,`code`),Mk(370,`PoModalAction`),Kg(),Mk(371,` contendo a label e a função da segunda ação.`),Kg()()(),Jc(372,`tr`,39)(373,`td`,18)(374,`div`,19)(375,`span`,20),Mk(376,` p-size`),_u(377,`br`),Kg()()(),Jc(378,`td`,21)(379,`code`,30),Mk(380,`string`),Kg()(),Jc(381,`td`,23),Mk(382,`-`),Kg(),Jc(383,`td`,24)(384,`p`),Mk(385,`Define o tamanho da modal.`),Kg(),Jc(386,`p`),Mk(387,`Valores válidos:`),Kg(),Jc(388,`ul`)(389,`li`)(390,`code`),Mk(391,`sm`),Kg(),Mk(392,` (pequeno)`),Kg(),Jc(393,`li`)(394,`code`),Mk(395,`md`),Kg(),Mk(396,` (médio)`),Kg(),Jc(397,`li`)(398,`code`),Mk(399,`lg`),Kg(),Mk(400,` (grande)`),Kg(),Jc(401,`li`)(402,`code`),Mk(403,`xl`),Kg(),Mk(404,` (extra grande)`),Kg(),Jc(405,`li`)(406,`code`),Mk(407,`auto`),Kg(),Mk(408,` (automático)`),Kg()(),Jc(409,`blockquote`)(410,`p`),Mk(411,`Quando informado `),Jc(412,`code`),Mk(413,`auto`),Kg(),Mk(414,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Jc(415,`code`),Mk(416,`md`),Kg(),Mk(417,`.`),Kg()()()(),Jc(418,`tr`,40)(419,`td`,18)(420,`div`,19)(421,`span`,20),Mk(422,` p-title`),_u(423,`br`),Kg()()(),Jc(424,`td`,21)(425,`code`,30),Mk(426,`string`),Kg()(),Jc(427,`td`,23),Mk(428,`-`),Kg(),Jc(429,`td`,24)(430,`p`),Mk(431,`Título da modal.`),Kg()()()(),Jc(432,`h3`,13),Mk(433,`Métodos`),Kg(),Jc(434,`table`,41)(435,`tr`,42)(436,`th`,43)(437,`div`,19)(438,`h4`)(439,`span`,20),Mk(440,` close `),Kg()()()()(),Jc(441,`tr`,24)(442,`td`,24)(443,`p`),Mk(444,`Função para fechar a modal.`),Kg()()()(),_u(445,`br`),Jc(446,`table`,44)(447,`tr`,42)(448,`th`,43)(449,`div`,19)(450,`h4`)(451,`span`,20),Mk(452,` open `),Kg()()()()(),Jc(453,`tr`,24)(454,`td`,24)(455,`p`),Mk(456,`Função para abrir a modal.`),Kg()()()(),_u(457,`br`),Jc(458,`h3`),Mk(459,`Interfaces`),Kg(),Jc(460,`h4`,45)(461,`code`,7),Mk(462,`PoModalAction`),Kg()(),Jc(463,`div`,2)(464,`p`),Mk(465,`Interface que define os botões de ação do componente `),Jc(466,`code`),Mk(467,`po-modal`),Kg(),Mk(468,`.`),Kg()(),Jc(469,`h4`,13),Mk(470,`Propriedades`),Kg(),Jc(471,`table`,14)(472,`tr`,15)(473,`th`,16),Mk(474,`Nome`),Kg(),Jc(475,`th`,16),Mk(476,`Tipo`),Kg(),Jc(477,`th`,16),Mk(478,`Descrição`),Kg()(),Jc(479,`tr`,46)(480,`td`,18)(481,`div`,19)(482,`span`,20),Mk(483,` action`),_u(484,`br`),Kg()()(),Jc(485,`td`,21)(486,`code`,47),Mk(487,`Function`),Kg()(),Jc(488,`td`,24)(489,`p`),Mk(490,`Função que será executada ao clicar sobre o botão.`),Kg()()(),Jc(491,`tr`,48)(492,`td`,18)(493,`div`,19)(494,`span`,20),Mk(495,` danger`),_u(496,`br`),Kg()()(),Jc(497,`td`,21)(498,`code`,22),Mk(499,`boolean`),Kg()(),Jc(500,`td`,24)(501,`em`)(502,`strong`),Mk(503,`(opcional)`),Kg()(),Jc(504,`p`),Mk(505,`Define a propriedade `),Jc(506,`code`),Mk(507,`p-danger`),Kg(),Mk(508,` do botão.`),Kg(),Jc(509,`blockquote`)(510,`p`),Mk(511,`Caso a propriedade esteja definida como `),Jc(512,`code`),Mk(513,`true`),Kg(),Mk(514,` em ambos os botões, apenas o botão primário receberá o `),Jc(515,`code`),Mk(516,`p-danger`),Kg(),Mk(517,` como `),Jc(518,`code`),Mk(519,`true`),Kg(),Mk(520,`.`),Kg()()()(),Jc(521,`tr`,49)(522,`td`,18)(523,`div`,19)(524,`span`,20),Mk(525,` disabled`),_u(526,`br`),Kg()()(),Jc(527,`td`,21)(528,`code`,22),Mk(529,`boolean`),Kg()(),Jc(530,`td`,24)(531,`em`)(532,`strong`),Mk(533,`(opcional)`),Kg()(),Jc(534,`p`),Mk(535,`Desabilita o botão impossibilitando que sua ação seja executada.`),Kg()()(),Jc(536,`tr`,50)(537,`td`,18)(538,`div`,19)(539,`span`,20),Mk(540,` icon`),_u(541,`br`),Kg()()(),Jc(542,`td`,21)(543,`code`,30),Mk(544,`string `),Kg(),Jc(545,`code`,34),Mk(546,` TemplateRef<void>`),Kg()(),Jc(547,`td`,24)(548,`em`)(549,`strong`),Mk(550,`(opcional)`),Kg()(),Jc(551,`p`),Mk(552,`Ícone exibido ao lado esquerdo do label do botão.`),Kg(),Jc(553,`p`),Mk(554,`É possível usar qualquer um dos ícones da `),Jc(555,`a`,35),Mk(556,`Biblioteca de ícones`),Kg(),Mk(557,`, conforme exemplo:`),Kg(),Jc(558,`pre`)(559,`code`),Mk(560,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),Kg()(),Jc(561,`p`),Mk(562,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(563,`em`),Mk(564,`Font Awesome`),Kg(),Mk(565,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Jc(566,`pre`)(567,`code`),Mk(568,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),Kg()(),Jc(569,`p`),Mk(570,`Outra opção seria a customização do ícone através do `),Jc(571,`code`),Mk(572,`TemplateRef`),Kg(),Mk(573,`, conforme exemplo abaixo:`),Kg(),Jc(574,`pre`)(575,`code`),Mk(576,`// Template HTML
<ng-template #customIcon>
  <span class="fa fa-user"></span>
</ng-template>

// Componente TypeScript
@ViewChild('customIcon', { static: true }) customIcon: TemplateRef<void>;

modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone customizado',
};

// Atribui\xE7\xE3o do TemplateRef \xE0 propriedade icon ap\xF3s a inicializa\xE7\xE3o da view
ngAfterViewInit() {
  this.modalAction.icon = this.customIcon;
}
`),Kg()(),Jc(577,`blockquote`)(578,`p`),Mk(579,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(580,`code`),Mk(581,`font-size: inherit`),Kg(),Mk(582,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Jc(583,`tr`,51)(584,`td`,18)(585,`div`,19)(586,`span`,20),Mk(587,` label`),_u(588,`br`),Kg()()(),Jc(589,`td`,21)(590,`code`,30),Mk(591,`string`),Kg()(),Jc(592,`td`,24)(593,`p`),Mk(594,`Rótulo do botão.`),Kg()()(),Jc(595,`tr`,52)(596,`td`,18)(597,`div`,19)(598,`span`,20),Mk(599,` loading`),_u(600,`br`),Kg()()(),Jc(601,`td`,21)(602,`code`,22),Mk(603,`boolean`),Kg()(),Jc(604,`td`,24)(605,`em`)(606,`strong`),Mk(607,`(opcional)`),Kg()(),Jc(608,`p`),Mk(609,`Habilita um estado de carregamento ao botão, desabilitando-o e exibindo um ícone de carregamento à esquerda de seu rótulo.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return a})();function De(a,Oe){if(a&1&&(Jc(0,`div`,1),_u(1,`sample-po-modal-basic-view`)(2,`sample-po-modal-labs-view`)(3,`sample-po-modal-fruits-salad-view`),Kg()),a&2){let p=tk();Ab(`hidden`,p.activeTab!==`web`)}}var ke=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Modal`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Modal · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0),LO(1,De,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-modal-doc`),Kg()()),l&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,ce,ge,he,Ee],encapsulation:2,changeDetection:1})}return a})()}];var fe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(ke),GV]})}return a})();var ct=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,fe]})}return a})();export{ct as DocPoModalModule};
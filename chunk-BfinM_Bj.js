import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,U as MH,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,kt as Zoe,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du,zn as w4}from"./chunk-DtUf9FxZ.js";var se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-basic`]],standalone:!1,decls:4,vars:0,consts:[[`modal`,``],[`p-title`,`PO Modal`],[`p-label`,`Open modal`,3,`p-click`]],template:function(l,n){if(l&1){let d=YO();Qc(0,`po-modal`,1,0),Sk(2,` We are TOTVS!!! `),Kg(),Qc(3,`po-button`,2),vt(`p-click`,function(){B_(d);let i=ik(1);return U_(i.open())}),Kg()}},dependencies:[oi,ia],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-modal-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-basic/sample-po-modal-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-modal-basic/sample-po-modal-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-modal-basic`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Me,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,se],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:`Confirm`};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];secondaryAction={action:()=>{this.poModal.close()},label:`Cancel`};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];properties;sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes(`disabled`),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes(`loading`),this.primaryAction.danger=this.primaryActionProperties.includes(`danger`),this.secondaryAction.disabled=this.secondaryActionProperties.includes(`disabled`),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes(`loading`),this.secondaryAction.danger=this.secondaryActionProperties.includes(`danger`),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title=`PO Modal`,this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize=`medium`,this.icon=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-labs`]],viewQuery:function(l,n){if(l&1&&Du(ia,7),l&2){let d;No(d=xo())&&(n.poModal=d.first)}},standalone:!1,decls:21,vars:28,consts:[[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-primary-action`,`p-secondary-action`,`p-size`,`p-title`,`p-icon`],[`p-label`,`Open Modal`,3,`p-click`,`p-disabled`],[1,`po-row`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-maxlength`,`200`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionLabel`,`p-clean`,``,`p-label`,`Primary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionIcon`,`p-clean`,``,`p-label`,`Primary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionProperties`,`p-columns`,`3`,`p-label`,`Primary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`secondaryActionLabel`,`p-clean`,``,`p-label`,`Secondary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionIcon`,`p-clean`,``,`p-label`,`Secondary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionProperties`,`p-columns`,`3`,`p-label`,`Secondary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let d=YO();Qc(0,`po-modal`,1),Sk(1),Kg(),Qc(2,`po-button`,2),vt(`p-click`,function(){return n.openModal()}),Kg(),vu(3,`po-divider`),Qc(4,`form`,null,0)(6,`div`,3)(7,`po-input`,4),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.title,i)||(n.title=i),U_(i)}),Kg(),Qc(8,`po-select`,5),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.icon,i)||(n.icon=i),U_(i)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.content,i)||(n.content=i),U_(i)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.primaryActionLabel,i)||(n.primaryActionLabel=i),U_(i)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.primaryActionIcon,i)||(n.primaryActionIcon=i),U_(i)}),Kg(),Qc(12,`po-checkbox-group`,9),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.primaryActionProperties,i)||(n.primaryActionProperties=i),U_(i)}),Kg(),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.secondaryActionLabel,i)||(n.secondaryActionLabel=i),U_(i)}),Kg(),Qc(14,`po-input`,11),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.secondaryActionIcon,i)||(n.secondaryActionIcon=i),U_(i)}),Kg(),Qc(15,`po-checkbox-group`,12),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.secondaryActionProperties,i)||(n.secondaryActionProperties=i),U_(i)}),Kg(),Qc(16,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.size,i)||(n.size=i),U_(i)}),Kg(),Qc(17,`po-checkbox-group`,14),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.properties,i)||(n.properties=i),U_(i)}),Kg(),Qc(18,`po-radio-group`,15),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.componentsSize,i)||(n.componentsSize=i),U_(i)}),Kg()(),Qc(19,`div`,3)(20,`po-button`,16),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(l&2){let d=ik(5);Rb(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-primary-action`,n.primaryAction)(`p-secondary-action`,n.secondaryActionLabel?n.secondaryAction:null)(`p-size`,n.size)(`p-title`,n.title)(`p-icon`,n.icon),wg(),tm(` `,n.content,`
`),wg(),Rb(`p-disabled`,d.form.invalid),wg(5),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.icon),Rb(`p-options`,n.iconOptions),W0(),wg(),Yb(`ngModel`,n.content),W0(),wg(),Yb(`ngModel`,n.primaryActionLabel),W0(),wg(),Yb(`ngModel`,n.primaryActionIcon),W0(),wg(),Yb(`ngModel`,n.primaryActionProperties),Rb(`p-options`,n.primaryActionOptions),W0(),wg(),Yb(`ngModel`,n.secondaryActionLabel),W0(),wg(),Yb(`ngModel`,n.secondaryActionIcon),W0(),wg(),Yb(`ngModel`,n.secondaryActionProperties),Rb(`p-options`,n.secondaryActionOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,ia],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-modal-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-labs/sample-po-modal-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-modal
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryActionLabel ? secondaryAction : null"
  [p-size]="size"
  [p-title]="title"
  [p-icon]="icon"
>
  { { content }}
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-modal-labs/sample-po-modal-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-modal-labs`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,_e,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ge],encapsulation:2,changeDetection:1})}return a})();var we=[`optionsForm`];var he=(()=>{class a{poNotification=p(Ru);form;poModal;accompaniment=``;fruits;orderDetail=``;close={action:()=>{this.closeModal()},label:`Close`,danger:!0};confirm={action:()=>{this.proccessOrder()},label:`Confirm`};accompanimentOptions=[{value:`chocolate`,label:`Chocolate`},{value:`hazeinut`,label:`Hazelnut`},{value:`milk`,label:`Milk`}];fruitsOptions=[{value:`orange`,label:`Orange`},{value:`apple`,label:`Apple`},{value:`pineapple`,label:`Pineapple`},{value:`graple`,label:`Grape`},{value:`strawberry`,label:`Strawberry`}];closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning(`Choose the items to confirm the order.`):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-fruits-salad`]],viewQuery:function(l,n){if(l&1&&Du(we,7)(ia,7),l&2){let d;No(d=xo())&&(n.form=d.first),No(d=xo())&&(n.poModal=d.first)}},standalone:!1,decls:14,vars:8,consts:[[`optionsForm`,`ngForm`],[`p-title`,`Options`,3,`p-primary-action`,`p-secondary-action`],[1,`po-row`],[`name`,`checkboxGroup`,`p-label`,`Fruits:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompaniment`,`p-label`,`Accompaniment:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orderDetail`,`p-label`,`Details:`,`p-rows`,`8`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[3,`p-disabled-align`],[`p-danger`,`true`,`p-label`,`Close`,3,`p-click`],[`p-label`,`Clear`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Confirm`,3,`p-click`],[`p-label`,`Buy fruits salad`,3,`p-click`]],template:function(l,n){if(l&1){let d=YO();Qc(0,`po-modal`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-checkbox-group`,3),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.fruits,i)||(n.fruits=i),U_(i)}),Kg()(),Qc(5,`div`,2)(6,`po-combo`,4),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.accompaniment,i)||(n.accompaniment=i),U_(i)}),Kg()(),Qc(7,`div`,2)(8,`po-textarea`,5),z0(),Kb(`ngModelChange`,function(i){return B_(d),Tk(n.orderDetail,i)||(n.orderDetail=i),U_(i)}),Kg()()(),Qc(9,`po-modal-footer`,6)(10,`po-button`,7),vt(`p-click`,function(){return n.closeModal()}),Kg(),Qc(11,`po-button`,8),vt(`p-click`,function(){return n.restore()}),Kg(),Qc(12,`po-button`,9),vt(`p-click`,function(){return n.confirmFruits()}),Kg()()(),Qc(13,`po-button`,10),vt(`p-click`,function(){return n.openQuestionnaire()}),Kg()}l&2&&(Rb(`p-primary-action`,n.confirm)(`p-secondary-action`,n.close),wg(4),Yb(`ngModel`,n.fruits),Rb(`p-options`,n.fruitsOptions),W0(),wg(2),Yb(`ngModel`,n.accompaniment),Rb(`p-options`,n.accompanimentOptions),W0(),wg(2),Yb(`ngModel`,n.orderDetail),W0(),wg(),Rb(`p-disabled-align`,!1))},dependencies:[AZ,MZ,TZ,QL,WL,oi,I4,w4,Zoe,ia,MH],encapsulation:2,changeDetection:1})}return a})();var ke=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-fruits-salad-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-modal-fruits-salad`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal - Fruits Salad`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-modal-fruits-salad`),Kg(),vu(23,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ke,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-doc`]],standalone:!1,decls:612,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-modal-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-modal-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-click-out`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-hide-close`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-primary-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalAction`],[`id`,`prop-p-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-close`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-open`,1,`docs-api-method-table`],[`id`,`interface-po-modal-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-modal-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-modal-action-danger`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-loading`,1,`docs-api-properties-row`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-modal-footer?view=doc`]],template:function(l,n){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoModalModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-modal`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoModalComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O componente `),Qc(15,`code`),Sk(16,`po-modal`),Kg(),Sk(17,` é utilizado para incluir conteúdos rápidos e informativos.`),Kg(),Qc(18,`p`),Sk(19,`No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.`),Kg(),Qc(20,`p`),Sk(21,`Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `),Qc(22,`code`),Sk(23,`po-chart`),Kg(),Sk(24,`,
`),Qc(25,`code`),Sk(26,`po-table`),Kg(),Sk(27,` e os demais componentes do PO.`),Kg(),Qc(28,`p`),Sk(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Qc(30,`em`),Sk(31,`danger`),Kg(),Sk(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Qc(33,`a`,6)(34,`code`),Sk(35,`PoModalFooter`),Kg()(),Sk(36,`.`),Kg(),Qc(37,`blockquote`)(38,`p`),Sk(39,`É possível fechar a modal através da tecla `),Qc(40,`em`),Sk(41,`ESC`),Kg(),Sk(42,`, quando a propriedade `),Qc(43,`code`),Sk(44,`p-hide-close`),Kg(),Sk(45,` não estiver habilitada.`),Kg()(),Qc(46,`h4`),Sk(47,`Tokens customizáveis`),Kg(),Qc(48,`p`),Sk(49,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(50,`blockquote`)(51,`p`),Sk(52,`Para maiores informações, acesse o guia `),Qc(53,`a`,7),Sk(54,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(55,`.`),Kg()(),Qc(56,`table`)(57,`thead`)(58,`tr`)(59,`th`),Sk(60,`Propriedade`),Kg(),Qc(61,`th`),Sk(62,`Descrição`),Kg(),Qc(63,`th`),Sk(64,`Valor Padrão`),Kg()()(),Qc(65,`tbody`)(66,`tr`)(67,`td`)(68,`strong`),Sk(69,`Default Values`),Kg()(),vu(70,`td`)(71,`td`),Kg(),Qc(72,`tr`)(73,`td`)(74,`code`),Sk(75,`--border-radius`),Kg(),Sk(76,` \xA0`),Kg(),Qc(77,`td`),Sk(78,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(79,`td`)(80,`code`),Sk(81,`var(--border-radius-md)`),Kg()()(),Qc(82,`tr`)(83,`td`)(84,`code`),Sk(85,`--border-width`),Kg(),Sk(86,` \xA0`),Kg(),Qc(87,`td`),Sk(88,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(89,`td`)(90,`code`),Sk(91,`var(--border-width-sm)`),Kg()()(),Qc(92,`tr`)(93,`td`)(94,`code`),Sk(95,`--border-color`),Kg(),Sk(96,` \xA0`),Kg(),Qc(97,`td`),Sk(98,`Cor da borda`),Kg(),Qc(99,`td`)(100,`code`),Sk(101,`var(--color-neutral-light-20)`),Kg()()(),Qc(102,`tr`)(103,`td`)(104,`code`),Sk(105,`--background`),Kg(),Sk(106,` \xA0`),Kg(),Qc(107,`td`),Sk(108,`Cor de background`),Kg(),Qc(109,`td`)(110,`code`),Sk(111,`var(--color-neutral-light-00)`),Kg()()(),Qc(112,`tr`)(113,`td`)(114,`code`),Sk(115,`--shadow`),Kg(),Sk(116,` \xA0`),Kg(),Qc(117,`td`),Sk(118,`Contém o valor da sombra do elemento`),Kg(),Qc(119,`td`)(120,`code`),Sk(121,`var(--shadow-md)`),Kg()()(),Qc(122,`tr`)(123,`td`)(124,`code`),Sk(125,`--color-overlay`),Kg(),Sk(126,` \xA0`),Kg(),Qc(127,`td`),Sk(128,`Cor da camada visual temporária`),Kg(),Qc(129,`td`)(130,`code`),Sk(131,`var(--color-neutral-dark-80)`),Kg()()(),Qc(132,`tr`)(133,`td`)(134,`code`),Sk(135,`--opacity-overlay`),Kg(),Sk(136,` \xA0`),Kg(),Qc(137,`td`),Sk(138,`Opacidade da camada visual temporária \xA0`),Kg(),Qc(139,`td`)(140,`code`),Sk(141,`0.7`),Kg()()(),Qc(142,`tr`)(143,`td`)(144,`code`),Sk(145,`--color-divider`),Kg(),Sk(146,` \xA0`),Kg(),Qc(147,`td`),Sk(148,`Cor das divisões do modal`),Kg(),Qc(149,`td`)(150,`code`),Sk(151,`var(--color-neutral-light-20)`),Kg()()(),Qc(152,`tr`)(153,`td`)(154,`code`),Sk(155,`--padding-header`),Kg(),Sk(156,` \xA0`),Kg(),Qc(157,`td`),Sk(158,`Padding do header do modal`),Kg(),Qc(159,`td`)(160,`code`),Sk(161,`var(--spacing-sm) var(--spacing-md)`),Kg()()(),Qc(162,`tr`)(163,`td`)(164,`code`),Sk(165,`--padding-body`),Kg(),Sk(166,` \xA0`),Kg(),Qc(167,`td`),Sk(168,`Padding do corpo do modal`),Kg(),Qc(169,`td`)(170,`code`),Sk(171,`var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) `),Kg()()()()()(),Qc(172,`div`,8)(173,`h4`,9),Sk(174,`Seletor`),Kg(),Qc(175,`pre`,10),Sk(176,`<po-modal
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
`),Kg()(),Qc(177,`h4`,11),Sk(178,`Propriedades`),Kg(),Qc(179,`table`,12)(180,`tr`,13)(181,`th`,14),Sk(182,`Nome`),Kg(),Qc(183,`th`,14),Sk(184,`Tipo`),Kg(),Qc(185,`th`,14),Sk(186,`Padrão`),Kg(),Qc(187,`th`,14),Sk(188,`Descrição`),Kg()(),Qc(189,`tr`,15)(190,`td`,16)(191,`div`,17)(192,`span`,18),Sk(193,`p-click-out`),vu(194,`br`),Kg()()(),Qc(195,`td`,19)(196,`code`,20),Sk(197,`boolean`),Kg()(),Qc(198,`td`,21),Sk(199,`-`),Kg(),Qc(200,`td`,22)(201,`em`)(202,`strong`),Sk(203,`(opcional)`),Kg()(),Qc(204,`p`),Sk(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Qc(206,`code`),Sk(207,`true`),Kg(),Sk(208,` para ativar o fechamento ao clicar fora da modal.`),Kg()()(),Qc(209,`tr`,23)(210,`td`,16)(211,`div`,24)(212,`span`,25),Sk(213,` (p-close)`),vu(214,`br`),Kg()()(),Qc(215,`td`,19)(216,`code`,26),Sk(217,`EventEmitter`),Kg()(),Qc(218,`td`,21),Sk(219,`-`),Kg(),Qc(220,`td`,22)(221,`p`),Sk(222,`Evento disparado ao fechar o modal.`),Kg()()(),Qc(223,`tr`,27)(224,`td`,16)(225,`div`,17)(226,`span`,18),Sk(227,` p-components-size`),vu(228,`br`),Kg()()(),Qc(229,`td`,19)(230,`code`,28),Sk(231,`string`),Kg()(),Qc(232,`td`,21)(233,`p`)(234,`code`),Sk(235,`medium`),Kg()()(),Qc(236,`td`,22)(237,`em`)(238,`strong`),Sk(239,`(opcional)`),Kg()(),Qc(240,`p`),Sk(241,`Define o tamanho dos componentes de formulário no modal:`),Kg(),Qc(242,`ul`)(243,`li`)(244,`code`),Sk(245,`small`),Kg(),Sk(246,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(247,`li`)(248,`code`),Sk(249,`medium`),Kg(),Sk(250,`: aplica a medida medium de cada componente.`),Kg()(),Qc(251,`blockquote`)(252,`p`),Sk(253,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(254,`code`),Sk(255,`medium`),Kg(),Sk(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(257,`a`,29),Sk(258,`po-theme`),Kg(),Sk(259,`.`),Kg()()()(),Qc(260,`tr`,30)(261,`td`,16)(262,`div`,17)(263,`span`,18),Sk(264,` p-hide-close`),vu(265,`br`),Kg()()(),Qc(266,`td`,19)(267,`code`,20),Sk(268,`boolean`),Kg()(),Qc(269,`td`,21)(270,`p`)(271,`code`),Sk(272,`false`),Kg()()(),Qc(273,`td`,22)(274,`em`)(275,`strong`),Sk(276,`(opcional)`),Kg()(),Qc(277,`p`),Sk(278,`Oculta o ícone de fechar do cabeçalho da modal.`),Kg(),Qc(279,`blockquote`)(280,`p`),Sk(281,`Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla `),Qc(282,`em`),Sk(283,`ESC`),Kg(),Sk(284,`.`),Kg()()()(),Qc(285,`tr`,31)(286,`td`,16)(287,`div`,17)(288,`span`,18),Sk(289,` p-icon`),vu(290,`br`),Kg()()(),Qc(291,`td`,19)(292,`code`,28),Sk(293,`string `),Kg(),Qc(294,`code`,32),Sk(295,` TemplateRef<void>`),Kg()(),Qc(296,`td`,21),Sk(297,`-`),Kg(),Qc(298,`td`,22)(299,`em`)(300,`strong`),Sk(301,`(opcional)`),Kg()(),Qc(302,`p`),Sk(303,`Ícone exibido ao lado esquerdo do label do titúlo da modal.`),Kg(),Qc(304,`p`),Sk(305,`É possível usar qualquer um dos ícones da `),Qc(306,`a`,33),Sk(307,`Biblioteca de ícones`),Kg(),Sk(308,`. conforme exemplo abaixo:`),Kg(),Qc(309,`pre`)(310,`code`),Sk(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),Kg()(),Qc(312,`p`),Sk(313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(314,`em`),Sk(315,`Font Awesome`),Kg(),Sk(316,`, da seguinte forma:`),Kg(),Qc(317,`pre`)(318,`code`),Sk(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),Kg()(),Qc(320,`p`),Sk(321,`Outra opção seria a customização do ícone através do `),Qc(322,`code`),Sk(323,`TemplateRef`),Kg(),Sk(324,`, conforme exemplo abaixo:`),Kg(),Qc(325,`pre`)(326,`code`),Sk(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()()()(),Qc(328,`tr`,34)(329,`td`,16)(330,`div`,17)(331,`span`,18),Sk(332,` p-primary-action`),vu(333,`br`),Kg()()(),Qc(334,`td`,19)(335,`code`,35),Sk(336,`PoModalAction`),Kg()(),Qc(337,`td`,21),Sk(338,`-`),Kg(),Qc(339,`td`,22)(340,`em`)(341,`strong`),Sk(342,`(opcional)`),Kg()(),Qc(343,`p`),Sk(344,`Deve ser definido um objeto que implementa a interface `),Qc(345,`code`),Sk(346,`PoModalAction`),Kg(),Sk(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),Kg()()(),Qc(348,`tr`,36)(349,`td`,16)(350,`div`,17)(351,`span`,18),Sk(352,` p-secondary-action`),vu(353,`br`),Kg()()(),Qc(354,`td`,19)(355,`code`,35),Sk(356,`PoModalAction`),Kg()(),Qc(357,`td`,21),Sk(358,`-`),Kg(),Qc(359,`td`,22)(360,`em`)(361,`strong`),Sk(362,`(opcional)`),Kg()(),Qc(363,`p`),Sk(364,`Deve ser definido um objeto que implementa a interface `),Qc(365,`code`),Sk(366,`PoModalAction`),Kg(),Sk(367,` contendo a label e a função da segunda ação.`),Kg()()(),Qc(368,`tr`,37)(369,`td`,16)(370,`div`,17)(371,`span`,18),Sk(372,` p-size`),vu(373,`br`),Kg()()(),Qc(374,`td`,19)(375,`code`,28),Sk(376,`string`),Kg()(),Qc(377,`td`,21),Sk(378,`-`),Kg(),Qc(379,`td`,22)(380,`p`),Sk(381,`Define o tamanho da modal.`),Kg(),Qc(382,`p`),Sk(383,`Valores válidos:`),Kg(),Qc(384,`ul`)(385,`li`)(386,`code`),Sk(387,`sm`),Kg(),Sk(388,` (pequeno)`),Kg(),Qc(389,`li`)(390,`code`),Sk(391,`md`),Kg(),Sk(392,` (médio)`),Kg(),Qc(393,`li`)(394,`code`),Sk(395,`lg`),Kg(),Sk(396,` (grande)`),Kg(),Qc(397,`li`)(398,`code`),Sk(399,`xl`),Kg(),Sk(400,` (extra grande)`),Kg(),Qc(401,`li`)(402,`code`),Sk(403,`auto`),Kg(),Sk(404,` (automático)`),Kg()(),Qc(405,`blockquote`)(406,`p`),Sk(407,`Quando informado `),Qc(408,`code`),Sk(409,`auto`),Kg(),Sk(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Qc(411,`code`),Sk(412,`md`),Kg(),Sk(413,`.`),Kg()()()(),Qc(414,`tr`,38)(415,`td`,16)(416,`div`,17)(417,`span`,18),Sk(418,` p-title`),vu(419,`br`),Kg()()(),Qc(420,`td`,19)(421,`code`,28),Sk(422,`string`),Kg()(),Qc(423,`td`,21),Sk(424,`-`),Kg(),Qc(425,`td`,22)(426,`p`),Sk(427,`Título da modal.`),Kg()()()(),Qc(428,`h3`,11),Sk(429,`Métodos`),Kg(),Qc(430,`table`,39)(431,`tr`,40)(432,`th`,41)(433,`div`,17)(434,`h4`)(435,`span`,18),Sk(436,` close `),Kg()()()()(),Qc(437,`tr`,22)(438,`td`,22)(439,`p`),Sk(440,`Função para fechar a modal.`),Kg()()()(),vu(441,`br`),Qc(442,`table`,42)(443,`tr`,40)(444,`th`,41)(445,`div`,17)(446,`h4`)(447,`span`,18),Sk(448,` open `),Kg()()()()(),Qc(449,`tr`,22)(450,`td`,22)(451,`p`),Sk(452,`Função para abrir a modal.`),Kg()()()(),vu(453,`br`),Qc(454,`h3`),Sk(455,`Interfaces`),Kg(),Qc(456,`h4`,43)(457,`code`,5),Sk(458,`PoModalAction`),Kg()(),Qc(459,`div`,2)(460,`p`),Sk(461,`Interface que define os botões de ação do componente `),Qc(462,`code`),Sk(463,`po-modal`),Kg(),Sk(464,`.`),Kg()(),Qc(465,`h4`,11),Sk(466,`Propriedades`),Kg(),Qc(467,`table`,12)(468,`tr`,13)(469,`th`,14),Sk(470,`Nome`),Kg(),Qc(471,`th`,14),Sk(472,`Tipo`),Kg(),Qc(473,`th`,14),Sk(474,`Descrição`),Kg()(),Qc(475,`tr`,44)(476,`td`,16)(477,`div`,17)(478,`span`,18),Sk(479,` action`),vu(480,`br`),Kg()()(),Qc(481,`td`,19)(482,`code`,45),Sk(483,`Function`),Kg()(),Qc(484,`td`,22)(485,`p`),Sk(486,`Função que será executada ao clicar sobre o botão.`),Kg()()(),Qc(487,`tr`,46)(488,`td`,16)(489,`div`,17)(490,`span`,18),Sk(491,` danger`),vu(492,`br`),Kg()()(),Qc(493,`td`,19)(494,`code`,20),Sk(495,`boolean`),Kg()(),Qc(496,`td`,22)(497,`em`)(498,`strong`),Sk(499,`(opcional)`),Kg()(),Qc(500,`p`),Sk(501,`Define a propriedade `),Qc(502,`code`),Sk(503,`p-danger`),Kg(),Sk(504,` do botão.`),Kg(),Qc(505,`blockquote`)(506,`p`),Sk(507,`Caso a propriedade esteja definida como `),Qc(508,`code`),Sk(509,`true`),Kg(),Sk(510,` em ambos os botões, apenas o botão primário receberá o `),Qc(511,`code`),Sk(512,`p-danger`),Kg(),Sk(513,` como `),Qc(514,`code`),Sk(515,`true`),Kg(),Sk(516,`.`),Kg()()()(),Qc(517,`tr`,47)(518,`td`,16)(519,`div`,17)(520,`span`,18),Sk(521,` disabled`),vu(522,`br`),Kg()()(),Qc(523,`td`,19)(524,`code`,20),Sk(525,`boolean`),Kg()(),Qc(526,`td`,22)(527,`em`)(528,`strong`),Sk(529,`(opcional)`),Kg()(),Qc(530,`p`),Sk(531,`Desabilita o botão impossibilitando que sua ação seja executada.`),Kg()()(),Qc(532,`tr`,48)(533,`td`,16)(534,`div`,17)(535,`span`,18),Sk(536,` icon`),vu(537,`br`),Kg()()(),Qc(538,`td`,19)(539,`code`,28),Sk(540,`string `),Kg(),Qc(541,`code`,32),Sk(542,` TemplateRef<void>`),Kg()(),Qc(543,`td`,22)(544,`em`)(545,`strong`),Sk(546,`(opcional)`),Kg()(),Qc(547,`p`),Sk(548,`Ícone exibido ao lado esquerdo do label do botão.`),Kg(),Qc(549,`p`),Sk(550,`É possível usar qualquer um dos ícones da `),Qc(551,`a`,33),Sk(552,`Biblioteca de ícones`),Kg(),Sk(553,`, conforme exemplo:`),Kg(),Qc(554,`pre`)(555,`code`),Sk(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),Kg()(),Qc(557,`p`),Sk(558,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(559,`em`),Sk(560,`Font Awesome`),Kg(),Sk(561,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Qc(562,`pre`)(563,`code`),Sk(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),Kg()(),Qc(565,`p`),Sk(566,`Outra opção seria a customização do ícone através do `),Qc(567,`code`),Sk(568,`TemplateRef`),Kg(),Sk(569,`, conforme exemplo abaixo:`),Kg(),Qc(570,`pre`)(571,`code`),Sk(572,`// Template HTML
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
`),Kg()(),Qc(573,`blockquote`)(574,`p`),Sk(575,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(576,`code`),Sk(577,`font-size: inherit`),Kg(),Sk(578,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(579,`tr`,49)(580,`td`,16)(581,`div`,17)(582,`span`,18),Sk(583,` label`),vu(584,`br`),Kg()()(),Qc(585,`td`,19)(586,`code`,28),Sk(587,`string`),Kg()(),Qc(588,`td`,22)(589,`p`),Sk(590,`Rótulo do botão.`),Kg()()(),Qc(591,`tr`,50)(592,`td`,16)(593,`div`,17)(594,`span`,18),Sk(595,` loading`),vu(596,`br`),Kg()()(),Qc(597,`td`,19)(598,`code`,20),Sk(599,`boolean`),Kg()(),Qc(600,`td`,22)(601,`em`)(602,`strong`),Sk(603,`(opcional)`),Kg()(),Qc(604,`p`),Sk(605,`Habilita um estado de carregamento ao botão, desabilitando-o e exibindo um ícone de carregamento à esquerda de seu rótulo.`),Kg()()()(),Qc(606,`h3`,51),Sk(607,`Subcomponentes`),Kg(),Qc(608,`ul`,52)(609,`li`)(610,`a`,53),Sk(611,`Modal Footer`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Le(a,ze){if(a&1){let m=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(m);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-modal-basic-view`)(2,`sample-po-modal-labs-view`)(3,`sample-po-modal-fruits-salad-view`),Kg()}if(a&2){let m=ek();Rb(`p-active`,m.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Modal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Le,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-modal-doc`),Kg()()()),l&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,be,Se,Ee],encapsulation:2,changeDetection:1})}return a})()}];var Ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[GV.forChild(Fe),GV]})}return a})();var ct=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,Ce]})}return a})();export{ct as DocPoModalModule};
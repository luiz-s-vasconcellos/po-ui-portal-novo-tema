import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Sa as j_,Ti as U_,U as MH,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,ki as V_,kt as Zoe,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du,zn as w4}from"./chunk-DtUf9FxZ.js";var be=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-basic`]],standalone:!1,decls:4,vars:0,consts:[[`modal`,``],[`p-title`,`PO Modal`],[`p-label`,`Open modal`,3,`p-click`]],template:function(l,n){if(l&1){let m=YO();Qc(0,`po-modal`,1,0),Sk(2,` We are TOTVS!!! `),Kg(),Qc(3,`po-button`,2),vt(`p-click`,function(){B_(m);let i=ik(1);return U_(i.open())}),Kg()}},dependencies:[oi,ia],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-modal-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-modal-basic/sample-po-modal-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-basic/sample-po-modal-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-basic/sample-po-modal-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-modal-basic/sample-po-modal-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-modal-basic`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Pe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:`Confirm`};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];secondaryAction={action:()=>{this.poModal.close()},label:`Cancel`};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];properties;sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes(`disabled`),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes(`loading`),this.primaryAction.danger=this.primaryActionProperties.includes(`danger`),this.secondaryAction.disabled=this.secondaryActionProperties.includes(`disabled`),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes(`loading`),this.secondaryAction.danger=this.secondaryActionProperties.includes(`danger`),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title=`PO Modal`,this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize=`medium`,this.icon=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-labs`]],viewQuery:function(l,n){if(l&1&&Du(ia,7),l&2){let m;No(m=xo())&&(n.poModal=m.first)}},standalone:!1,decls:21,vars:28,consts:[[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-primary-action`,`p-secondary-action`,`p-size`,`p-title`,`p-icon`],[`p-label`,`Open Modal`,3,`p-click`,`p-disabled`],[1,`po-row`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-maxlength`,`200`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionLabel`,`p-clean`,``,`p-label`,`Primary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionIcon`,`p-clean`,``,`p-label`,`Primary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionProperties`,`p-columns`,`3`,`p-label`,`Primary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`secondaryActionLabel`,`p-clean`,``,`p-label`,`Secondary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionIcon`,`p-clean`,``,`p-label`,`Secondary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionProperties`,`p-columns`,`3`,`p-label`,`Secondary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,n){if(l&1){let m=YO();Qc(0,`po-modal`,1),Sk(1),Kg(),Qc(2,`po-button`,2),vt(`p-click`,function(){return n.openModal()}),Kg(),vu(3,`po-divider`),Qc(4,`form`,null,0)(6,`div`,3)(7,`po-input`,4),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.title,i)||(n.title=i),U_(i)}),Kg(),Qc(8,`po-select`,5),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.icon,i)||(n.icon=i),U_(i)}),Kg(),Qc(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.content,i)||(n.content=i),U_(i)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.primaryActionLabel,i)||(n.primaryActionLabel=i),U_(i)}),Kg(),Qc(11,`po-input`,8),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.primaryActionIcon,i)||(n.primaryActionIcon=i),U_(i)}),Kg(),Qc(12,`po-checkbox-group`,9),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.primaryActionProperties,i)||(n.primaryActionProperties=i),U_(i)}),Kg(),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.secondaryActionLabel,i)||(n.secondaryActionLabel=i),U_(i)}),Kg(),Qc(14,`po-input`,11),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.secondaryActionIcon,i)||(n.secondaryActionIcon=i),U_(i)}),Kg(),Qc(15,`po-checkbox-group`,12),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.secondaryActionProperties,i)||(n.secondaryActionProperties=i),U_(i)}),Kg(),Qc(16,`po-radio-group`,13),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.size,i)||(n.size=i),U_(i)}),Kg(),Qc(17,`po-checkbox-group`,14),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.properties,i)||(n.properties=i),U_(i)}),Kg(),Qc(18,`po-radio-group`,15),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.componentsSize,i)||(n.componentsSize=i),U_(i)}),Kg()(),Qc(19,`div`,3)(20,`po-button`,16),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(l&2){let m=ik(5);Rb(`p-click-out`,n.properties.includes(`click-out`))(`p-components-size`,n.componentsSize)(`p-hide-close`,n.properties.includes(`hide-close`))(`p-primary-action`,n.primaryAction)(`p-secondary-action`,n.secondaryActionLabel?n.secondaryAction:null)(`p-size`,n.size)(`p-title`,n.title)(`p-icon`,n.icon),wg(),tm(` `,n.content,`
`),wg(),Rb(`p-disabled`,m.form.invalid),wg(5),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.icon),Rb(`p-options`,n.iconOptions),W0(),wg(),Yb(`ngModel`,n.content),W0(),wg(),Yb(`ngModel`,n.primaryActionLabel),W0(),wg(),Yb(`ngModel`,n.primaryActionIcon),W0(),wg(),Yb(`ngModel`,n.primaryActionProperties),Rb(`p-options`,n.primaryActionOptions),W0(),wg(),Yb(`ngModel`,n.secondaryActionLabel),W0(),wg(),Yb(`ngModel`,n.secondaryActionIcon),W0(),wg(),Yb(`ngModel`,n.secondaryActionProperties),Rb(`p-options`,n.secondaryActionOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Koe,ia],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-labs-view`]],standalone:!1,decls:32,vars:6,consts:[[`id`,`sample-po-modal-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-modal-labs/sample-po-modal-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-labs/sample-po-modal-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-labs/sample-po-modal-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-modal
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-primary-action]="primaryAction"
  [p-secondary-action]="secondaryActionLabel ? secondaryAction : null"
  [p-size]="size"
  [p-title]="title"
  [p-icon]="icon"
>
  `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` content `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`
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
`),Kg()()()(),Qc(22,`po-tab`,9)(23,`div`)(24,`label`,6),Sk(25,`sample-po-modal-labs/sample-po-modal-labs.component.ts`),Kg(),Qc(26,`div`,10)(27,`pre`,11),Sk(28,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),Qc(29,`div`,12),vu(30,`sample-po-modal-labs`),Kg(),vu(31,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,De,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Se],encapsulation:2,changeDetection:1})}return a})();var Te=[`optionsForm`];var fe=(()=>{class a{poNotification=p(Ru);form;poModal;accompaniment=``;fruits;orderDetail=``;close={action:()=>{this.closeModal()},label:`Close`,danger:!0};confirm={action:()=>{this.proccessOrder()},label:`Confirm`};accompanimentOptions=[{value:`chocolate`,label:`Chocolate`},{value:`hazeinut`,label:`Hazelnut`},{value:`milk`,label:`Milk`}];fruitsOptions=[{value:`orange`,label:`Orange`},{value:`apple`,label:`Apple`},{value:`pineapple`,label:`Pineapple`},{value:`graple`,label:`Grape`},{value:`strawberry`,label:`Strawberry`}];closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning(`Choose the items to confirm the order.`):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-fruits-salad`]],viewQuery:function(l,n){if(l&1&&Du(Te,7)(ia,7),l&2){let m;No(m=xo())&&(n.form=m.first),No(m=xo())&&(n.poModal=m.first)}},standalone:!1,decls:14,vars:8,consts:[[`optionsForm`,`ngForm`],[`p-title`,`Options`,3,`p-primary-action`,`p-secondary-action`],[1,`po-row`],[`name`,`checkboxGroup`,`p-label`,`Fruits:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompaniment`,`p-label`,`Accompaniment:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orderDetail`,`p-label`,`Details:`,`p-rows`,`8`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[3,`p-disabled-align`],[`p-danger`,`true`,`p-label`,`Close`,3,`p-click`],[`p-label`,`Clear`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Confirm`,3,`p-click`],[`p-label`,`Buy fruits salad`,3,`p-click`]],template:function(l,n){if(l&1){let m=YO();Qc(0,`po-modal`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-checkbox-group`,3),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.fruits,i)||(n.fruits=i),U_(i)}),Kg()(),Qc(5,`div`,2)(6,`po-combo`,4),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.accompaniment,i)||(n.accompaniment=i),U_(i)}),Kg()(),Qc(7,`div`,2)(8,`po-textarea`,5),z0(),Kb(`ngModelChange`,function(i){return B_(m),Tk(n.orderDetail,i)||(n.orderDetail=i),U_(i)}),Kg()()(),Qc(9,`po-modal-footer`,6)(10,`po-button`,7),vt(`p-click`,function(){return n.closeModal()}),Kg(),Qc(11,`po-button`,8),vt(`p-click`,function(){return n.restore()}),Kg(),Qc(12,`po-button`,9),vt(`p-click`,function(){return n.confirmFruits()}),Kg()()(),Qc(13,`po-button`,10),vt(`p-click`,function(){return n.openQuestionnaire()}),Kg()}l&2&&(Rb(`p-primary-action`,n.confirm)(`p-secondary-action`,n.close),wg(4),Yb(`ngModel`,n.fruits),Rb(`p-options`,n.fruitsOptions),W0(),wg(2),Yb(`ngModel`,n.accompaniment),Rb(`p-options`,n.accompanimentOptions),W0(),wg(2),Yb(`ngModel`,n.orderDetail),W0(),wg(),Rb(`p-disabled-align`,!1))},dependencies:[AZ,MZ,TZ,QL,WL,oi,I4,w4,Zoe,ia,MH],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-fruits-salad-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-modal-fruits-salad`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,n){l&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Modal - Fruits Salad`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-modal-fruits-salad`),Kg(),vu(25,`hr`)),l&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Le,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return a})();var ye=(()=>{class a{router=p(An);openDoc(d){this.router.navigate([`/documentation`,d],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-doc`]],standalone:!1,decls:610,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Modal Footer`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-modal-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-modal-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-click-out`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-close`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-hide-close`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-primary-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoModalAction`],[`id`,`prop-p-secondary-action`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`method-close`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-open`,1,`docs-api-method-table`],[`id`,`interface-po-modal-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-modal-action-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-modal-action-danger`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-icon`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-modal-action-loading`,1,`docs-api-properties-row`]],template:function(l,n){l&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoModalModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-modal`),Kg()(),Qc(7,`blockquote`,3)(8,`strong`),Sk(9,`Subcomponentes:`),Kg(),Qc(10,`po-tag`,4),vt(`p-click`,function(){return n.openDoc(`po-modal-footer`)}),Kg()(),Qc(11,`h3`,5),Sk(12,`Componente`),Kg(),Qc(13,`h4`,6)(14,`code`,7),Sk(15,`PoModalComponent`),Kg()(),Qc(16,`div`,2)(17,`p`),Sk(18,`O componente `),Qc(19,`code`),Sk(20,`po-modal`),Kg(),Sk(21,` é utilizado para incluir conteúdos rápidos e informativos.`),Kg(),Qc(22,`p`),Sk(23,`No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.`),Kg(),Qc(24,`p`),Sk(25,`Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `),Qc(26,`code`),Sk(27,`po-chart`),Kg(),Sk(28,`,
`),Qc(29,`code`),Sk(30,`po-table`),Kg(),Sk(31,` e os demais componentes do PO.`),Kg(),Qc(32,`p`),Sk(33,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Qc(34,`em`),Sk(35,`danger`),Kg(),Sk(36,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Qc(37,`a`,8)(38,`code`),Sk(39,`PoModalFooter`),Kg()(),Sk(40,`.`),Kg(),Qc(41,`blockquote`)(42,`p`),Sk(43,`É possível fechar a modal através da tecla `),Qc(44,`em`),Sk(45,`ESC`),Kg(),Sk(46,`, quando a propriedade `),Qc(47,`code`),Sk(48,`p-hide-close`),Kg(),Sk(49,` não estiver habilitada.`),Kg()(),Qc(50,`h4`),Sk(51,`Tokens customizáveis`),Kg(),Qc(52,`p`),Sk(53,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(54,`blockquote`)(55,`p`),Sk(56,`Para maiores informações, acesse o guia `),Qc(57,`a`,9),Sk(58,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(59,`.`),Kg()(),Qc(60,`table`)(61,`thead`)(62,`tr`)(63,`th`),Sk(64,`Propriedade`),Kg(),Qc(65,`th`),Sk(66,`Descrição`),Kg(),Qc(67,`th`),Sk(68,`Valor Padrão`),Kg()()(),Qc(69,`tbody`)(70,`tr`)(71,`td`)(72,`strong`),Sk(73,`Default Values`),Kg()(),vu(74,`td`)(75,`td`),Kg(),Qc(76,`tr`)(77,`td`)(78,`code`),Sk(79,`--border-radius`),Kg(),Sk(80,` \xA0`),Kg(),Qc(81,`td`),Sk(82,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(83,`td`)(84,`code`),Sk(85,`var(--border-radius-md)`),Kg()()(),Qc(86,`tr`)(87,`td`)(88,`code`),Sk(89,`--border-width`),Kg(),Sk(90,` \xA0`),Kg(),Qc(91,`td`),Sk(92,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(93,`td`)(94,`code`),Sk(95,`var(--border-width-sm)`),Kg()()(),Qc(96,`tr`)(97,`td`)(98,`code`),Sk(99,`--border-color`),Kg(),Sk(100,` \xA0`),Kg(),Qc(101,`td`),Sk(102,`Cor da borda`),Kg(),Qc(103,`td`)(104,`code`),Sk(105,`var(--color-neutral-light-20)`),Kg()()(),Qc(106,`tr`)(107,`td`)(108,`code`),Sk(109,`--background`),Kg(),Sk(110,` \xA0`),Kg(),Qc(111,`td`),Sk(112,`Cor de background`),Kg(),Qc(113,`td`)(114,`code`),Sk(115,`var(--color-neutral-light-00)`),Kg()()(),Qc(116,`tr`)(117,`td`)(118,`code`),Sk(119,`--shadow`),Kg(),Sk(120,` \xA0`),Kg(),Qc(121,`td`),Sk(122,`Contém o valor da sombra do elemento`),Kg(),Qc(123,`td`)(124,`code`),Sk(125,`var(--shadow-md)`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--color-overlay`),Kg(),Sk(130,` \xA0`),Kg(),Qc(131,`td`),Sk(132,`Cor da camada visual temporária`),Kg(),Qc(133,`td`)(134,`code`),Sk(135,`var(--color-neutral-dark-80)`),Kg()()(),Qc(136,`tr`)(137,`td`)(138,`code`),Sk(139,`--opacity-overlay`),Kg(),Sk(140,` \xA0`),Kg(),Qc(141,`td`),Sk(142,`Opacidade da camada visual temporária \xA0`),Kg(),Qc(143,`td`)(144,`code`),Sk(145,`0.7`),Kg()()(),Qc(146,`tr`)(147,`td`)(148,`code`),Sk(149,`--color-divider`),Kg(),Sk(150,` \xA0`),Kg(),Qc(151,`td`),Sk(152,`Cor das divisões do modal`),Kg(),Qc(153,`td`)(154,`code`),Sk(155,`var(--color-neutral-light-20)`),Kg()()(),Qc(156,`tr`)(157,`td`)(158,`code`),Sk(159,`--padding-header`),Kg(),Sk(160,` \xA0`),Kg(),Qc(161,`td`),Sk(162,`Padding do header do modal`),Kg(),Qc(163,`td`)(164,`code`),Sk(165,`var(--spacing-sm) var(--spacing-md)`),Kg()()(),Qc(166,`tr`)(167,`td`)(168,`code`),Sk(169,`--padding-body`),Kg(),Sk(170,` \xA0`),Kg(),Qc(171,`td`),Sk(172,`Padding do corpo do modal`),Kg(),Qc(173,`td`)(174,`code`),Sk(175,`var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) `),Kg()()()()()(),Qc(176,`div`,10)(177,`h4`,11),Sk(178,`Seletor`),Kg(),Qc(179,`pre`,12),Sk(180,`<po-modal
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
`),Kg()(),Qc(181,`h4`,13),Sk(182,`Propriedades`),Kg(),Qc(183,`table`,14)(184,`tr`,15)(185,`th`,16),Sk(186,`Nome`),Kg(),Qc(187,`th`,16),Sk(188,`Tipo`),Kg(),Qc(189,`th`,16),Sk(190,`Padrão`),Kg(),Qc(191,`th`,16),Sk(192,`Descrição`),Kg()(),Qc(193,`tr`,17)(194,`td`,18)(195,`div`,19)(196,`span`,20),Sk(197,`p-click-out`),vu(198,`br`),Kg()()(),Qc(199,`td`,21)(200,`code`,22),Sk(201,`boolean`),Kg()(),Qc(202,`td`,23),Sk(203,`-`),Kg(),Qc(204,`td`,24)(205,`em`)(206,`strong`),Sk(207,`(opcional)`),Kg()(),Qc(208,`p`),Sk(209,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Qc(210,`code`),Sk(211,`true`),Kg(),Sk(212,` para ativar o fechamento ao clicar fora da modal.`),Kg()()(),Qc(213,`tr`,25)(214,`td`,18)(215,`div`,26)(216,`span`,27),Sk(217,` (p-close)`),vu(218,`br`),Kg()()(),Qc(219,`td`,21)(220,`code`,28),Sk(221,`EventEmitter`),Kg()(),Qc(222,`td`,23),Sk(223,`-`),Kg(),Qc(224,`td`,24)(225,`p`),Sk(226,`Evento disparado ao fechar o modal.`),Kg()()(),Qc(227,`tr`,29)(228,`td`,18)(229,`div`,19)(230,`span`,20),Sk(231,` p-components-size`),vu(232,`br`),Kg()()(),Qc(233,`td`,21)(234,`code`,30),Sk(235,`string`),Kg()(),Qc(236,`td`,23)(237,`p`)(238,`code`),Sk(239,`medium`),Kg()()(),Qc(240,`td`,24)(241,`em`)(242,`strong`),Sk(243,`(opcional)`),Kg()(),Qc(244,`p`),Sk(245,`Define o tamanho dos componentes de formulário no modal:`),Kg(),Qc(246,`ul`)(247,`li`)(248,`code`),Sk(249,`small`),Kg(),Sk(250,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(251,`li`)(252,`code`),Sk(253,`medium`),Kg(),Sk(254,`: aplica a medida medium de cada componente.`),Kg()(),Qc(255,`blockquote`)(256,`p`),Sk(257,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(258,`code`),Sk(259,`medium`),Kg(),Sk(260,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(261,`a`,31),Sk(262,`po-theme`),Kg(),Sk(263,`.`),Kg()()()(),Qc(264,`tr`,32)(265,`td`,18)(266,`div`,19)(267,`span`,20),Sk(268,` p-hide-close`),vu(269,`br`),Kg()()(),Qc(270,`td`,21)(271,`code`,22),Sk(272,`boolean`),Kg()(),Qc(273,`td`,23)(274,`p`)(275,`code`),Sk(276,`false`),Kg()()(),Qc(277,`td`,24)(278,`em`)(279,`strong`),Sk(280,`(opcional)`),Kg()(),Qc(281,`p`),Sk(282,`Oculta o ícone de fechar do cabeçalho da modal.`),Kg(),Qc(283,`blockquote`)(284,`p`),Sk(285,`Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla `),Qc(286,`em`),Sk(287,`ESC`),Kg(),Sk(288,`.`),Kg()()()(),Qc(289,`tr`,33)(290,`td`,18)(291,`div`,19)(292,`span`,20),Sk(293,` p-icon`),vu(294,`br`),Kg()()(),Qc(295,`td`,21)(296,`code`,30),Sk(297,`string `),Kg(),Qc(298,`code`,34),Sk(299,` TemplateRef<void>`),Kg()(),Qc(300,`td`,23),Sk(301,`-`),Kg(),Qc(302,`td`,24)(303,`em`)(304,`strong`),Sk(305,`(opcional)`),Kg()(),Qc(306,`p`),Sk(307,`Ícone exibido ao lado esquerdo do label do titúlo da modal.`),Kg(),Qc(308,`p`),Sk(309,`É possível usar qualquer um dos ícones da `),Qc(310,`a`,35),Sk(311,`Biblioteca de ícones`),Kg(),Sk(312,`. conforme exemplo abaixo:`),Kg(),Qc(313,`pre`)(314,`code`),Sk(315,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),Kg()(),Qc(316,`p`),Sk(317,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(318,`em`),Sk(319,`Font Awesome`),Kg(),Sk(320,`, da seguinte forma:`),Kg(),Qc(321,`pre`)(322,`code`),Sk(323,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),Kg()(),Qc(324,`p`),Sk(325,`Outra opção seria a customização do ícone através do `),Qc(326,`code`),Sk(327,`TemplateRef`),Kg(),Sk(328,`, conforme exemplo abaixo:`),Kg(),Qc(329,`pre`)(330,`code`),Sk(331,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()()()(),Qc(332,`tr`,36)(333,`td`,18)(334,`div`,19)(335,`span`,20),Sk(336,` p-primary-action`),vu(337,`br`),Kg()()(),Qc(338,`td`,21)(339,`code`,37),Sk(340,`PoModalAction`),Kg()(),Qc(341,`td`,23),Sk(342,`-`),Kg(),Qc(343,`td`,24)(344,`em`)(345,`strong`),Sk(346,`(opcional)`),Kg()(),Qc(347,`p`),Sk(348,`Deve ser definido um objeto que implementa a interface `),Qc(349,`code`),Sk(350,`PoModalAction`),Kg(),Sk(351,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),Kg()()(),Qc(352,`tr`,38)(353,`td`,18)(354,`div`,19)(355,`span`,20),Sk(356,` p-secondary-action`),vu(357,`br`),Kg()()(),Qc(358,`td`,21)(359,`code`,37),Sk(360,`PoModalAction`),Kg()(),Qc(361,`td`,23),Sk(362,`-`),Kg(),Qc(363,`td`,24)(364,`em`)(365,`strong`),Sk(366,`(opcional)`),Kg()(),Qc(367,`p`),Sk(368,`Deve ser definido um objeto que implementa a interface `),Qc(369,`code`),Sk(370,`PoModalAction`),Kg(),Sk(371,` contendo a label e a função da segunda ação.`),Kg()()(),Qc(372,`tr`,39)(373,`td`,18)(374,`div`,19)(375,`span`,20),Sk(376,` p-size`),vu(377,`br`),Kg()()(),Qc(378,`td`,21)(379,`code`,30),Sk(380,`string`),Kg()(),Qc(381,`td`,23),Sk(382,`-`),Kg(),Qc(383,`td`,24)(384,`p`),Sk(385,`Define o tamanho da modal.`),Kg(),Qc(386,`p`),Sk(387,`Valores válidos:`),Kg(),Qc(388,`ul`)(389,`li`)(390,`code`),Sk(391,`sm`),Kg(),Sk(392,` (pequeno)`),Kg(),Qc(393,`li`)(394,`code`),Sk(395,`md`),Kg(),Sk(396,` (médio)`),Kg(),Qc(397,`li`)(398,`code`),Sk(399,`lg`),Kg(),Sk(400,` (grande)`),Kg(),Qc(401,`li`)(402,`code`),Sk(403,`xl`),Kg(),Sk(404,` (extra grande)`),Kg(),Qc(405,`li`)(406,`code`),Sk(407,`auto`),Kg(),Sk(408,` (automático)`),Kg()(),Qc(409,`blockquote`)(410,`p`),Sk(411,`Quando informado `),Qc(412,`code`),Sk(413,`auto`),Kg(),Sk(414,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Qc(415,`code`),Sk(416,`md`),Kg(),Sk(417,`.`),Kg()()()(),Qc(418,`tr`,40)(419,`td`,18)(420,`div`,19)(421,`span`,20),Sk(422,` p-title`),vu(423,`br`),Kg()()(),Qc(424,`td`,21)(425,`code`,30),Sk(426,`string`),Kg()(),Qc(427,`td`,23),Sk(428,`-`),Kg(),Qc(429,`td`,24)(430,`p`),Sk(431,`Título da modal.`),Kg()()()(),Qc(432,`h3`,13),Sk(433,`Métodos`),Kg(),Qc(434,`table`,41)(435,`tr`,42)(436,`th`,43)(437,`div`,19)(438,`h4`)(439,`span`,20),Sk(440,` close `),Kg()()()()(),Qc(441,`tr`,24)(442,`td`,24)(443,`p`),Sk(444,`Função para fechar a modal.`),Kg()()()(),vu(445,`br`),Qc(446,`table`,44)(447,`tr`,42)(448,`th`,43)(449,`div`,19)(450,`h4`)(451,`span`,20),Sk(452,` open `),Kg()()()()(),Qc(453,`tr`,24)(454,`td`,24)(455,`p`),Sk(456,`Função para abrir a modal.`),Kg()()()(),vu(457,`br`),Qc(458,`h3`),Sk(459,`Interfaces`),Kg(),Qc(460,`h4`,45)(461,`code`,7),Sk(462,`PoModalAction`),Kg()(),Qc(463,`div`,2)(464,`p`),Sk(465,`Interface que define os botões de ação do componente `),Qc(466,`code`),Sk(467,`po-modal`),Kg(),Sk(468,`.`),Kg()(),Qc(469,`h4`,13),Sk(470,`Propriedades`),Kg(),Qc(471,`table`,14)(472,`tr`,15)(473,`th`,16),Sk(474,`Nome`),Kg(),Qc(475,`th`,16),Sk(476,`Tipo`),Kg(),Qc(477,`th`,16),Sk(478,`Descrição`),Kg()(),Qc(479,`tr`,46)(480,`td`,18)(481,`div`,19)(482,`span`,20),Sk(483,` action`),vu(484,`br`),Kg()()(),Qc(485,`td`,21)(486,`code`,47),Sk(487,`Function`),Kg()(),Qc(488,`td`,24)(489,`p`),Sk(490,`Função que será executada ao clicar sobre o botão.`),Kg()()(),Qc(491,`tr`,48)(492,`td`,18)(493,`div`,19)(494,`span`,20),Sk(495,` danger`),vu(496,`br`),Kg()()(),Qc(497,`td`,21)(498,`code`,22),Sk(499,`boolean`),Kg()(),Qc(500,`td`,24)(501,`em`)(502,`strong`),Sk(503,`(opcional)`),Kg()(),Qc(504,`p`),Sk(505,`Define a propriedade `),Qc(506,`code`),Sk(507,`p-danger`),Kg(),Sk(508,` do botão.`),Kg(),Qc(509,`blockquote`)(510,`p`),Sk(511,`Caso a propriedade esteja definida como `),Qc(512,`code`),Sk(513,`true`),Kg(),Sk(514,` em ambos os botões, apenas o botão primário receberá o `),Qc(515,`code`),Sk(516,`p-danger`),Kg(),Sk(517,` como `),Qc(518,`code`),Sk(519,`true`),Kg(),Sk(520,`.`),Kg()()()(),Qc(521,`tr`,49)(522,`td`,18)(523,`div`,19)(524,`span`,20),Sk(525,` disabled`),vu(526,`br`),Kg()()(),Qc(527,`td`,21)(528,`code`,22),Sk(529,`boolean`),Kg()(),Qc(530,`td`,24)(531,`em`)(532,`strong`),Sk(533,`(opcional)`),Kg()(),Qc(534,`p`),Sk(535,`Desabilita o botão impossibilitando que sua ação seja executada.`),Kg()()(),Qc(536,`tr`,50)(537,`td`,18)(538,`div`,19)(539,`span`,20),Sk(540,` icon`),vu(541,`br`),Kg()()(),Qc(542,`td`,21)(543,`code`,30),Sk(544,`string `),Kg(),Qc(545,`code`,34),Sk(546,` TemplateRef<void>`),Kg()(),Qc(547,`td`,24)(548,`em`)(549,`strong`),Sk(550,`(opcional)`),Kg()(),Qc(551,`p`),Sk(552,`Ícone exibido ao lado esquerdo do label do botão.`),Kg(),Qc(553,`p`),Sk(554,`É possível usar qualquer um dos ícones da `),Qc(555,`a`,35),Sk(556,`Biblioteca de ícones`),Kg(),Sk(557,`, conforme exemplo:`),Kg(),Qc(558,`pre`)(559,`code`),Sk(560,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),Kg()(),Qc(561,`p`),Sk(562,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(563,`em`),Sk(564,`Font Awesome`),Kg(),Sk(565,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Qc(566,`pre`)(567,`code`),Sk(568,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),Kg()(),Qc(569,`p`),Sk(570,`Outra opção seria a customização do ícone através do `),Qc(571,`code`),Sk(572,`TemplateRef`),Kg(),Sk(573,`, conforme exemplo abaixo:`),Kg(),Qc(574,`pre`)(575,`code`),Sk(576,`// Template HTML
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
`),Kg()(),Qc(577,`blockquote`)(578,`p`),Sk(579,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(580,`code`),Sk(581,`font-size: inherit`),Kg(),Sk(582,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(583,`tr`,51)(584,`td`,18)(585,`div`,19)(586,`span`,20),Sk(587,` label`),vu(588,`br`),Kg()()(),Qc(589,`td`,21)(590,`code`,30),Sk(591,`string`),Kg()(),Qc(592,`td`,24)(593,`p`),Sk(594,`Rótulo do botão.`),Kg()()(),Qc(595,`tr`,52)(596,`td`,18)(597,`div`,19)(598,`span`,20),Sk(599,` loading`),vu(600,`br`),Kg()()(),Qc(601,`td`,21)(602,`code`,22),Sk(603,`boolean`),Kg()(),Qc(604,`td`,24)(605,`em`)(606,`strong`),Sk(607,`(opcional)`),Kg()(),Qc(608,`p`),Sk(609,`Habilita um estado de carregamento ao botão, desabilitando-o e exibindo um ícone de carregamento à esquerda de seu rótulo.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return a})();function Ve(a,Ie){if(a&1){let d=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(d);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-modal-basic-view`)(2,`sample-po-modal-labs-view`)(3,`sample-po-modal-fruits-salad-view`),Kg()}if(a&2){let d=ek();Rb(`p-active`,d.activeTab===`web`)}}var Be=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Modal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,n){l&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Ve,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-modal-doc`),Kg()()()),l&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,he,Ee,Ce,ye],encapsulation:2,changeDetection:1})}return a})()}];var xe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(Be),GV]})}return a})();var ft=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,xe]})}return a})();export{ft as DocPoModalModule};
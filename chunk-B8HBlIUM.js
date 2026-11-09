import{$n as Ak,Ar as Ig,Dt as Zoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,I as Koe,Ia as sk,In as w4,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,Ot as Zte,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,V as MH,Vi as _u,Xr as No,Yi as eF,an as j4,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rn as ia,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-basic`]],standalone:!1,decls:4,vars:0,consts:[[`modal`,``],[`p-title`,`PO Modal`],[`p-label`,`Open modal`,3,`p-click`]],template:function(l,o){if(l&1){let d=ZO();Jc(0,`po-modal`,1,0),Tk(2,` We are TOTVS!!! `),Zg(),Jc(3,`po-button`,2),vt(`p-click`,function(){U_(d);let i=sk(1);return H_(i.open())}),Zg()}},dependencies:[oi,ia],encapsulation:2,changeDetection:1})}return a})();var Me=a=>({"docs-sample-code-tabs":a});var ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Modal Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-modal-basic/sample-po-modal-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-modal #modal p-title="PO Modal"> We are TOTVS!!! </po-modal>

<po-button p-label="Open modal" (p-click)="modal.open()"> </po-button>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-modal-basic/sample-po-modal-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-modal-basic',
  templateUrl: './sample-po-modal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoModalBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-modal-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,se],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poModal;componentsSize;content;size;title;icon;primaryAction={action:()=>{this.poModal.close()},label:`Confirm`};primaryActionLabel;primaryActionIcon;primaryActionProperties;primaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];secondaryAction={action:()=>{this.poModal.close()},label:`Cancel`};secondaryActionLabel;secondaryActionIcon;secondaryActionProperties;secondaryActionOptions=[{value:`danger`,label:`Danger`},{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`}];propertiesOptions=[{value:`click-out`,label:`Click Out`},{value:`hide-close`,label:`Hide Close`}];properties;sizeOptions=[{label:`Small`,value:`sm`},{label:`Medium`,value:`md`},{label:`Large`,value:`lg`},{label:`Extra large`,value:`xl`},{label:`Automatic`,value:`auto`}];openModal(){this.primaryAction.disabled=this.primaryActionProperties.includes(`disabled`),this.primaryAction.label=this.primaryActionLabel,this.primaryAction.icon=this.primaryActionIcon,this.primaryAction.loading=this.primaryActionProperties.includes(`loading`),this.primaryAction.danger=this.primaryActionProperties.includes(`danger`),this.secondaryAction.disabled=this.secondaryActionProperties.includes(`disabled`),this.secondaryAction.label=this.secondaryActionLabel,this.secondaryAction.icon=this.secondaryActionIcon,this.secondaryAction.loading=this.secondaryActionProperties.includes(`loading`),this.secondaryAction.danger=this.secondaryActionProperties.includes(`danger`),this.poModal.open()}ngOnInit(){this.restore()}restore(){this.size=void 0,this.content=void 0,this.title=`PO Modal`,this.properties=[],this.primaryActionLabel=void 0,this.primaryActionIcon=void 0,this.primaryActionProperties=[],this.secondaryActionLabel=void 0,this.secondaryActionIcon=void 0,this.secondaryActionProperties=[],this.componentsSize=`medium`,this.icon=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-labs`]],viewQuery:function(l,o){if(l&1&&Cu(ia,7),l&2){let d;No(d=xo())&&(o.poModal=d.first)}},standalone:!1,decls:21,vars:28,consts:[[`f`,`ngForm`],[3,`p-click-out`,`p-components-size`,`p-hide-close`,`p-primary-action`,`p-secondary-action`,`p-size`,`p-title`,`p-icon`],[`p-label`,`Open Modal`,3,`p-click`,`p-disabled`],[1,`po-row`],[`name`,`Title`,`p-clean`,``,`p-label`,`Title`,`p-required`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Content`,`p-clean`,``,`p-label`,`Content`,`p-maxlength`,`200`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionLabel`,`p-clean`,``,`p-label`,`Primary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionIcon`,`p-clean`,``,`p-label`,`Primary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`primaryActionProperties`,`p-columns`,`3`,`p-label`,`Primary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`secondaryActionLabel`,`p-clean`,``,`p-label`,`Secondary action label`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionIcon`,`p-clean`,``,`p-label`,`Secondary action icon`,`p-maxlength`,`50`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`secondaryActionProperties`,`p-columns`,`3`,`p-label`,`Secondary Action Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`componentsSize`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=ZO();Jc(0,`po-modal`,1),Tk(1),Zg(),Jc(2,`po-button`,2),vt(`p-click`,function(){return o.openModal()}),Zg(),_u(3,`po-divider`),Jc(4,`form`,null,0)(6,`div`,3)(7,`po-input`,4),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.title,i)||(o.title=i),H_(i)}),Zg(),Jc(8,`po-select`,5),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.icon,i)||(o.icon=i),H_(i)}),Zg(),Jc(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.content,i)||(o.content=i),H_(i)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.primaryActionLabel,i)||(o.primaryActionLabel=i),H_(i)}),Zg(),Jc(11,`po-input`,8),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.primaryActionIcon,i)||(o.primaryActionIcon=i),H_(i)}),Zg(),Jc(12,`po-checkbox-group`,9),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.primaryActionProperties,i)||(o.primaryActionProperties=i),H_(i)}),Zg(),Jc(13,`po-input`,10),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.secondaryActionLabel,i)||(o.secondaryActionLabel=i),H_(i)}),Zg(),Jc(14,`po-input`,11),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.secondaryActionIcon,i)||(o.secondaryActionIcon=i),H_(i)}),Zg(),Jc(15,`po-checkbox-group`,12),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.secondaryActionProperties,i)||(o.secondaryActionProperties=i),H_(i)}),Zg(),Jc(16,`po-radio-group`,13),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.size,i)||(o.size=i),H_(i)}),Zg(),Jc(17,`po-checkbox-group`,14),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.properties,i)||(o.properties=i),H_(i)}),Zg(),Jc(18,`po-radio-group`,15),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.componentsSize,i)||(o.componentsSize=i),H_(i)}),Zg()(),Jc(19,`div`,3)(20,`po-button`,16),vt(`p-click`,function(){return o.restore()}),Zg()()()}if(l&2){let d=sk(5);Rb(`p-click-out`,o.properties.includes(`click-out`))(`p-components-size`,o.componentsSize)(`p-hide-close`,o.properties.includes(`hide-close`))(`p-primary-action`,o.primaryAction)(`p-secondary-action`,o.secondaryActionLabel?o.secondaryAction:null)(`p-size`,o.size)(`p-title`,o.title)(`p-icon`,o.icon),Ig(),nm(` `,o.content,`
`),Ig(),Rb(`p-disabled`,d.form.invalid),Ig(5),Yb(`ngModel`,o.title),Y0(),Ig(),Yb(`ngModel`,o.icon),Rb(`p-options`,o.iconOptions),Y0(),Ig(),Yb(`ngModel`,o.content),Y0(),Ig(),Yb(`ngModel`,o.primaryActionLabel),Y0(),Ig(),Yb(`ngModel`,o.primaryActionIcon),Y0(),Ig(),Yb(`ngModel`,o.primaryActionProperties),Rb(`p-options`,o.primaryActionOptions),Y0(),Ig(),Yb(`ngModel`,o.secondaryActionLabel),Y0(),Ig(),Yb(`ngModel`,o.secondaryActionIcon),Y0(),Ig(),Yb(`ngModel`,o.secondaryActionProperties),Rb(`p-options`,o.secondaryActionOptions),Y0(),Ig(),Yb(`ngModel`,o.size),Rb(`p-options`,o.sizeOptions),Y0(),Ig(),Yb(`ngModel`,o.properties),Rb(`p-options`,o.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,o.componentsSize),Rb(`p-options`,o.componentsSizeOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,Koe,ia],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Modal Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-modal-labs/sample-po-modal-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-modal
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-modal-labs/sample-po-modal-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-modal-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ge],encapsulation:2,changeDetection:1})}return a})();var we=[`optionsForm`];var he=(()=>{class a{poNotification=p(Ru);form;poModal;accompaniment=``;fruits;orderDetail=``;close={action:()=>{this.closeModal()},label:`Close`,danger:!0};confirm={action:()=>{this.proccessOrder()},label:`Confirm`};accompanimentOptions=[{value:`chocolate`,label:`Chocolate`},{value:`hazeinut`,label:`Hazelnut`},{value:`milk`,label:`Milk`}];fruitsOptions=[{value:`orange`,label:`Orange`},{value:`apple`,label:`Apple`},{value:`pineapple`,label:`Pineapple`},{value:`graple`,label:`Grape`},{value:`strawberry`,label:`Strawberry`}];closeModal(){this.form.reset(),this.poModal.close()}confirmFruits(){this.proccessOrder()}restore(){this.form.reset()}openQuestionnaire(){this.poModal.open()}proccessOrder(){this.form.invalid?this.poNotification.warning(`Choose the items to confirm the order.`):(this.confirm.loading=!0,setTimeout(()=>{this.poNotification.success(`Your order confirmed: ${this.fruits}, with accompaniment: ${this.accompaniment}.`),this.confirm.loading=!1,this.closeModal()},700))}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-fruits-salad`]],viewQuery:function(l,o){if(l&1&&Cu(we,7)(ia,7),l&2){let d;No(d=xo())&&(o.form=d.first),No(d=xo())&&(o.poModal=d.first)}},standalone:!1,decls:14,vars:8,consts:[[`optionsForm`,`ngForm`],[`p-title`,`Options`,3,`p-primary-action`,`p-secondary-action`],[1,`po-row`],[`name`,`checkboxGroup`,`p-label`,`Fruits:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompaniment`,`p-label`,`Accompaniment:`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`orderDetail`,`p-label`,`Details:`,`p-rows`,`8`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[3,`p-disabled-align`],[`p-danger`,`true`,`p-label`,`Close`,3,`p-click`],[`p-label`,`Clear`,3,`p-click`],[`p-kind`,`primary`,`p-label`,`Confirm`,3,`p-click`],[`p-label`,`Buy fruits salad`,3,`p-click`]],template:function(l,o){if(l&1){let d=ZO();Jc(0,`po-modal`,1)(1,`form`,null,0)(3,`div`,2)(4,`po-checkbox-group`,3),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.fruits,i)||(o.fruits=i),H_(i)}),Zg()(),Jc(5,`div`,2)(6,`po-combo`,4),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.accompaniment,i)||(o.accompaniment=i),H_(i)}),Zg()(),Jc(7,`div`,2)(8,`po-textarea`,5),W0(),Kb(`ngModelChange`,function(i){return U_(d),Ak(o.orderDetail,i)||(o.orderDetail=i),H_(i)}),Zg()()(),Jc(9,`po-modal-footer`,6)(10,`po-button`,7),vt(`p-click`,function(){return o.closeModal()}),Zg(),Jc(11,`po-button`,8),vt(`p-click`,function(){return o.restore()}),Zg(),Jc(12,`po-button`,9),vt(`p-click`,function(){return o.confirmFruits()}),Zg()()(),Jc(13,`po-button`,10),vt(`p-click`,function(){return o.openQuestionnaire()}),Zg()}l&2&&(Rb(`p-primary-action`,o.confirm)(`p-secondary-action`,o.close),Ig(4),Yb(`ngModel`,o.fruits),Rb(`p-options`,o.fruitsOptions),Y0(),Ig(2),Yb(`ngModel`,o.accompaniment),Rb(`p-options`,o.accompanimentOptions),Y0(),Ig(2),Yb(`ngModel`,o.orderDetail),Y0(),Ig(),Rb(`p-disabled-align`,!1))},dependencies:[NZ,TZ,RZ,JL,qL,oi,I4,w4,Zoe,ia,MH],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-fruits-salad-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Modal - Fruits Salad`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-modal p-title="Options" [p-primary-action]="confirm" [p-secondary-action]="close">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-modal-fruits-salad/sample-po-modal-fruits-salad.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-modal-fruits-salad`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-modal-doc`]],standalone:!1,decls:606,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-modal-footer`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoModalAction`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoModalModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-modal`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoModalComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O componente `),Jc(15,`code`),Tk(16,`po-modal`),Zg(),Tk(17,` é utilizado para incluir conteúdos rápidos e informativos.`),Zg(),Jc(18,`p`),Tk(19,`No cabeçalho do componente é possível definir um título e como também permite ocultar o ícone de fechamento da modal.`),Zg(),Jc(20,`p`),Tk(21,`Em seu corpo é possível definir um conteúdo informativo, podendo utilizar componentes como por exemplo `),Jc(22,`code`),Tk(23,`po-chart`),Zg(),Tk(24,`,
`),Jc(25,`code`),Tk(26,`po-table`),Zg(),Tk(27,` e os demais componentes do PO.`),Zg(),Jc(28,`p`),Tk(29,`No rodap\xE9 encontram-se os bot\xF5es de a\xE7\xE3o prim\xE1ria e secund\xE1ria, no qual permitem definir uma a\xE7\xE3o e um r\xF3tulo, bem como
definir um estado de carregando e / ou desabilitado e / ou definir o bot\xE3o com o tipo `),Jc(30,`em`),Tk(31,`danger`),Zg(),Tk(32,`. Tamb\xE9m \xE9 poss\xEDvel utilizar
o componente `),Jc(33,`a`,6)(34,`code`),Tk(35,`PoModalFooter`),Zg()(),Tk(36,`.`),Zg(),Jc(37,`blockquote`)(38,`p`),Tk(39,`É possível fechar a modal através da tecla `),Jc(40,`em`),Tk(41,`ESC`),Zg(),Tk(42,`, quando a propriedade `),Jc(43,`code`),Tk(44,`p-hide-close`),Zg(),Tk(45,` não estiver habilitada.`),Zg()(),Jc(46,`h4`),Tk(47,`Tokens customizáveis`),Zg(),Jc(48,`p`),Tk(49,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(50,`blockquote`)(51,`p`),Tk(52,`Para maiores informações, acesse o guia `),Jc(53,`a`,7),Tk(54,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(55,`.`),Zg()(),Jc(56,`table`)(57,`thead`)(58,`tr`)(59,`th`),Tk(60,`Propriedade`),Zg(),Jc(61,`th`),Tk(62,`Descrição`),Zg(),Jc(63,`th`),Tk(64,`Valor Padrão`),Zg()()(),Jc(65,`tbody`)(66,`tr`)(67,`td`)(68,`strong`),Tk(69,`Default Values`),Zg()(),_u(70,`td`)(71,`td`),Zg(),Jc(72,`tr`)(73,`td`)(74,`code`),Tk(75,`--border-radius`),Zg(),Tk(76,` \xA0`),Zg(),Jc(77,`td`),Tk(78,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(79,`td`)(80,`code`),Tk(81,`var(--border-radius-md)`),Zg()()(),Jc(82,`tr`)(83,`td`)(84,`code`),Tk(85,`--border-width`),Zg(),Tk(86,` \xA0`),Zg(),Jc(87,`td`),Tk(88,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(89,`td`)(90,`code`),Tk(91,`var(--border-width-sm)`),Zg()()(),Jc(92,`tr`)(93,`td`)(94,`code`),Tk(95,`--border-color`),Zg(),Tk(96,` \xA0`),Zg(),Jc(97,`td`),Tk(98,`Cor da borda`),Zg(),Jc(99,`td`)(100,`code`),Tk(101,`var(--color-neutral-light-20)`),Zg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Tk(105,`--background`),Zg(),Tk(106,` \xA0`),Zg(),Jc(107,`td`),Tk(108,`Cor de background`),Zg(),Jc(109,`td`)(110,`code`),Tk(111,`var(--color-neutral-light-00)`),Zg()()(),Jc(112,`tr`)(113,`td`)(114,`code`),Tk(115,`--shadow`),Zg(),Tk(116,` \xA0`),Zg(),Jc(117,`td`),Tk(118,`Contém o valor da sombra do elemento`),Zg(),Jc(119,`td`)(120,`code`),Tk(121,`var(--shadow-md)`),Zg()()(),Jc(122,`tr`)(123,`td`)(124,`code`),Tk(125,`--color-overlay`),Zg(),Tk(126,` \xA0`),Zg(),Jc(127,`td`),Tk(128,`Cor da camada visual temporária`),Zg(),Jc(129,`td`)(130,`code`),Tk(131,`var(--color-neutral-dark-80)`),Zg()()(),Jc(132,`tr`)(133,`td`)(134,`code`),Tk(135,`--opacity-overlay`),Zg(),Tk(136,` \xA0`),Zg(),Jc(137,`td`),Tk(138,`Opacidade da camada visual temporária \xA0`),Zg(),Jc(139,`td`)(140,`code`),Tk(141,`0.7`),Zg()()(),Jc(142,`tr`)(143,`td`)(144,`code`),Tk(145,`--color-divider`),Zg(),Tk(146,` \xA0`),Zg(),Jc(147,`td`),Tk(148,`Cor das divisões do modal`),Zg(),Jc(149,`td`)(150,`code`),Tk(151,`var(--color-neutral-light-20)`),Zg()()(),Jc(152,`tr`)(153,`td`)(154,`code`),Tk(155,`--padding-header`),Zg(),Tk(156,` \xA0`),Zg(),Jc(157,`td`),Tk(158,`Padding do header do modal`),Zg(),Jc(159,`td`)(160,`code`),Tk(161,`var(--spacing-sm) var(--spacing-md)`),Zg()()(),Jc(162,`tr`)(163,`td`)(164,`code`),Tk(165,`--padding-body`),Zg(),Tk(166,` \xA0`),Zg(),Jc(167,`td`),Tk(168,`Padding do corpo do modal`),Zg(),Jc(169,`td`)(170,`code`),Tk(171,`var(--spacing-md) var(--spacing-2xl) var(--spacing-2xl) var(--spacing-md) `),Zg()()()()()(),Jc(172,`div`,8)(173,`h4`,9),Tk(174,`Seletor`),Zg(),Jc(175,`pre`,10),Tk(176,`<po-modal
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
`),Zg()(),Jc(177,`h4`,11),Tk(178,`Propriedades`),Zg(),Jc(179,`table`,12)(180,`tr`,13)(181,`th`,14),Tk(182,`Nome`),Zg(),Jc(183,`th`,14),Tk(184,`Tipo`),Zg(),Jc(185,`th`,14),Tk(186,`Padrão`),Zg(),Jc(187,`th`,14),Tk(188,`Descrição`),Zg()(),Jc(189,`tr`,15)(190,`td`,16)(191,`div`,17)(192,`span`,18),Tk(193,`p-click-out`),_u(194,`br`),Zg()()(),Jc(195,`td`,19)(196,`code`,20),Tk(197,`boolean`),Zg()(),Jc(198,`td`,21),Tk(199,`-`),Zg(),Jc(200,`td`,22)(201,`em`)(202,`strong`),Tk(203,`(opcional)`),Zg()(),Jc(204,`p`),Tk(205,`Define o fechamento da modal ao clicar fora da mesma.
Informe o valor `),Jc(206,`code`),Tk(207,`true`),Zg(),Tk(208,` para ativar o fechamento ao clicar fora da modal.`),Zg()()(),Jc(209,`tr`,15)(210,`td`,16)(211,`div`,23)(212,`span`,24),Tk(213,` (p-close)`),_u(214,`br`),Zg()()(),Jc(215,`td`,19)(216,`code`,25),Tk(217,`EventEmitter`),Zg()(),Jc(218,`td`,21),Tk(219,`-`),Zg(),Jc(220,`td`,22)(221,`p`),Tk(222,`Evento disparado ao fechar o modal.`),Zg()()(),Jc(223,`tr`,15)(224,`td`,16)(225,`div`,17)(226,`span`,18),Tk(227,` p-components-size`),_u(228,`br`),Zg()()(),Jc(229,`td`,19)(230,`code`,26),Tk(231,`string`),Zg()(),Jc(232,`td`,21)(233,`p`)(234,`code`),Tk(235,`medium`),Zg()()(),Jc(236,`td`,22)(237,`em`)(238,`strong`),Tk(239,`(opcional)`),Zg()(),Jc(240,`p`),Tk(241,`Define o tamanho dos componentes de formulário no modal:`),Zg(),Jc(242,`ul`)(243,`li`)(244,`code`),Tk(245,`small`),Zg(),Tk(246,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(247,`li`)(248,`code`),Tk(249,`medium`),Zg(),Tk(250,`: aplica a medida medium de cada componente.`),Zg()(),Jc(251,`blockquote`)(252,`p`),Tk(253,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(254,`code`),Tk(255,`medium`),Zg(),Tk(256,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(257,`a`,27),Tk(258,`po-theme`),Zg(),Tk(259,`.`),Zg()()()(),Jc(260,`tr`,15)(261,`td`,16)(262,`div`,17)(263,`span`,18),Tk(264,` p-hide-close`),_u(265,`br`),Zg()()(),Jc(266,`td`,19)(267,`code`,20),Tk(268,`boolean`),Zg()(),Jc(269,`td`,21)(270,`p`)(271,`code`),Tk(272,`false`),Zg()()(),Jc(273,`td`,22)(274,`em`)(275,`strong`),Tk(276,`(opcional)`),Zg()(),Jc(277,`p`),Tk(278,`Oculta o ícone de fechar do cabeçalho da modal.`),Zg(),Jc(279,`blockquote`)(280,`p`),Tk(281,`Caso a propriedade estiver habilitada, não será possível fechar a modal através da tecla `),Jc(282,`em`),Tk(283,`ESC`),Zg(),Tk(284,`.`),Zg()()()(),Jc(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),Tk(289,` p-icon`),_u(290,`br`),Zg()()(),Jc(291,`td`,19)(292,`code`,26),Tk(293,`string `),Zg(),Jc(294,`code`,28),Tk(295,` TemplateRef<void>`),Zg()(),Jc(296,`td`,21),Tk(297,`-`),Zg(),Jc(298,`td`,22)(299,`em`)(300,`strong`),Tk(301,`(opcional)`),Zg()(),Jc(302,`p`),Tk(303,`Ícone exibido ao lado esquerdo do label do titúlo da modal.`),Zg(),Jc(304,`p`),Tk(305,`É possível usar qualquer um dos ícones da `),Jc(306,`a`,29),Tk(307,`Biblioteca de ícones`),Zg(),Tk(308,`. conforme exemplo abaixo:`),Zg(),Jc(309,`pre`)(310,`code`),Tk(311,`<po-modal p-icon="an an-user" p-title="PO Modal"></po-modal>
`),Zg()(),Jc(312,`p`),Tk(313,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(314,`em`),Tk(315,`Font Awesome`),Zg(),Tk(316,`, da seguinte forma:`),Zg(),Jc(317,`pre`)(318,`code`),Tk(319,`<po-modal p-icon="fa fa-podcast" p-title="PO Modal"></po-modal>
`),Zg()(),Jc(320,`p`),Tk(321,`Outra opção seria a customização do ícone através do `),Jc(322,`code`),Tk(323,`TemplateRef`),Zg(),Tk(324,`, conforme exemplo abaixo:`),Zg(),Jc(325,`pre`)(326,`code`),Tk(327,`<po-modal [p-icon]="template" p-title="PO Modal"></po-modal>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()()()(),Jc(328,`tr`,15)(329,`td`,16)(330,`div`,17)(331,`span`,18),Tk(332,` p-primary-action`),_u(333,`br`),Zg()()(),Jc(334,`td`,19)(335,`code`,30),Tk(336,`PoModalAction`),Zg()(),Jc(337,`td`,21),Tk(338,`-`),Zg(),Jc(339,`td`,22)(340,`em`)(341,`strong`),Tk(342,`(opcional)`),Zg()(),Jc(343,`p`),Tk(344,`Deve ser definido um objeto que implementa a interface `),Jc(345,`code`),Tk(346,`PoModalAction`),Zg(),Tk(347,` contendo a label e a fun\xE7\xE3o da primeira a\xE7\xE3o.
Caso esta propriedade n\xE3o seja definida ou esteja incompleta, automaticamente ser\xE1 adicionado um bot\xE3o de a\xE7\xE3o com
a fun\xE7\xE3o de fechar a modal.`),Zg()()(),Jc(348,`tr`,15)(349,`td`,16)(350,`div`,17)(351,`span`,18),Tk(352,` p-secondary-action`),_u(353,`br`),Zg()()(),Jc(354,`td`,19)(355,`code`,30),Tk(356,`PoModalAction`),Zg()(),Jc(357,`td`,21),Tk(358,`-`),Zg(),Jc(359,`td`,22)(360,`em`)(361,`strong`),Tk(362,`(opcional)`),Zg()(),Jc(363,`p`),Tk(364,`Deve ser definido um objeto que implementa a interface `),Jc(365,`code`),Tk(366,`PoModalAction`),Zg(),Tk(367,` contendo a label e a função da segunda ação.`),Zg()()(),Jc(368,`tr`,15)(369,`td`,16)(370,`div`,17)(371,`span`,18),Tk(372,` p-size`),_u(373,`br`),Zg()()(),Jc(374,`td`,19)(375,`code`,26),Tk(376,`string`),Zg()(),Jc(377,`td`,21),Tk(378,`-`),Zg(),Jc(379,`td`,22)(380,`p`),Tk(381,`Define o tamanho da modal.`),Zg(),Jc(382,`p`),Tk(383,`Valores válidos:`),Zg(),Jc(384,`ul`)(385,`li`)(386,`code`),Tk(387,`sm`),Zg(),Tk(388,` (pequeno)`),Zg(),Jc(389,`li`)(390,`code`),Tk(391,`md`),Zg(),Tk(392,` (médio)`),Zg(),Jc(393,`li`)(394,`code`),Tk(395,`lg`),Zg(),Tk(396,` (grande)`),Zg(),Jc(397,`li`)(398,`code`),Tk(399,`xl`),Zg(),Tk(400,` (extra grande)`),Zg(),Jc(401,`li`)(402,`code`),Tk(403,`auto`),Zg(),Tk(404,` (automático)`),Zg()(),Jc(405,`blockquote`)(406,`p`),Tk(407,`Quando informado `),Jc(408,`code`),Tk(409,`auto`),Zg(),Tk(410,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),Jc(411,`code`),Tk(412,`md`),Zg(),Tk(413,`.`),Zg()()()(),Jc(414,`tr`,15)(415,`td`,16)(416,`div`,17)(417,`span`,18),Tk(418,` p-title`),_u(419,`br`),Zg()()(),Jc(420,`td`,19)(421,`code`,26),Tk(422,`string`),Zg()(),Jc(423,`td`,21),Tk(424,`-`),Zg(),Jc(425,`td`,22)(426,`p`),Tk(427,`Título da modal.`),Zg()()()(),Jc(428,`h3`,11),Tk(429,`Métodos`),Zg(),Jc(430,`table`,31)(431,`tr`,15)(432,`th`,32)(433,`div`,17)(434,`h4`)(435,`span`,18),Tk(436,` close `),Zg()()()()(),Jc(437,`tr`,22)(438,`td`,22)(439,`p`),Tk(440,`Função para fechar a modal.`),Zg()()()(),_u(441,`br`),Jc(442,`table`,31)(443,`tr`,15)(444,`th`,32)(445,`div`,17)(446,`h4`)(447,`span`,18),Tk(448,` open `),Zg()()()()(),Jc(449,`tr`,22)(450,`td`,22)(451,`p`),Tk(452,`Função para abrir a modal.`),Zg()()()(),_u(453,`br`),Jc(454,`h3`),Tk(455,`Interfaces`),Zg(),Jc(456,`h4`,33)(457,`code`,5),Tk(458,`PoModalAction`),Zg()(),Jc(459,`div`,2)(460,`p`),Tk(461,`Interface que define os botões de ação do componente `),Jc(462,`code`),Tk(463,`po-modal`),Zg(),Tk(464,`.`),Zg()(),Jc(465,`h4`,11),Tk(466,`Propriedades`),Zg(),Jc(467,`table`,12)(468,`tr`,13)(469,`th`,14),Tk(470,`Nome`),Zg(),Jc(471,`th`,14),Tk(472,`Tipo`),Zg(),Jc(473,`th`,14),Tk(474,`Descrição`),Zg()(),Jc(475,`tr`,15)(476,`td`,16)(477,`div`,17)(478,`span`,18),Tk(479,` action`),_u(480,`br`),Zg()()(),Jc(481,`td`,19)(482,`code`,34),Tk(483,`Function`),Zg()(),Jc(484,`td`,22)(485,`p`),Tk(486,`Função que será executada ao clicar sobre o botão.`),Zg()()(),Jc(487,`tr`,15)(488,`td`,16)(489,`div`,17)(490,`span`,18),Tk(491,` danger`),_u(492,`br`),Zg()()(),Jc(493,`td`,19)(494,`code`,20),Tk(495,`boolean`),Zg()(),Jc(496,`td`,22)(497,`em`)(498,`strong`),Tk(499,`(opcional)`),Zg()(),Jc(500,`p`),Tk(501,`Define a propriedade `),Jc(502,`code`),Tk(503,`p-danger`),Zg(),Tk(504,` do botão.`),Zg(),Jc(505,`blockquote`)(506,`p`),Tk(507,`Caso a propriedade esteja definida como `),Jc(508,`code`),Tk(509,`true`),Zg(),Tk(510,` em ambos os botões, apenas o botão primário receberá o `),Jc(511,`code`),Tk(512,`p-danger`),Zg(),Tk(513,` como `),Jc(514,`code`),Tk(515,`true`),Zg(),Tk(516,`.`),Zg()()()(),Jc(517,`tr`,15)(518,`td`,16)(519,`div`,17)(520,`span`,18),Tk(521,` disabled`),_u(522,`br`),Zg()()(),Jc(523,`td`,19)(524,`code`,20),Tk(525,`boolean`),Zg()(),Jc(526,`td`,22)(527,`em`)(528,`strong`),Tk(529,`(opcional)`),Zg()(),Jc(530,`p`),Tk(531,`Desabilita o botão impossibilitando que sua ação seja executada.`),Zg()()(),Jc(532,`tr`,15)(533,`td`,16)(534,`div`,17)(535,`span`,18),Tk(536,` icon`),_u(537,`br`),Zg()()(),Jc(538,`td`,19)(539,`code`,26),Tk(540,`string `),Zg(),Jc(541,`code`,28),Tk(542,` TemplateRef<void>`),Zg()(),Jc(543,`td`,22)(544,`em`)(545,`strong`),Tk(546,`(opcional)`),Zg()(),Jc(547,`p`),Tk(548,`Ícone exibido ao lado esquerdo do label do botão.`),Zg(),Jc(549,`p`),Tk(550,`É possível usar qualquer um dos ícones da `),Jc(551,`a`,29),Tk(552,`Biblioteca de ícones`),Zg(),Tk(553,`, conforme exemplo:`),Zg(),Jc(554,`pre`)(555,`code`),Tk(556,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone PO',
  icon: 'an an-user'
};
`),Zg()(),Jc(557,`p`),Tk(558,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(559,`em`),Tk(560,`Font Awesome`),Zg(),Tk(561,`, desde que a biblioteca
esteja carregada no projeto:`),Zg(),Jc(562,`pre`)(563,`code`),Tk(564,`modalAction: PoModalAction = {
  action: () => {},
  label: 'Bot\xE3o com \xEDcone Font Awesome',
  icon: 'fa fa-user'
};
`),Zg()(),Jc(565,`p`),Tk(566,`Outra opção seria a customização do ícone através do `),Jc(567,`code`),Tk(568,`TemplateRef`),Zg(),Tk(569,`, conforme exemplo abaixo:`),Zg(),Jc(570,`pre`)(571,`code`),Tk(572,`// Template HTML
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
`),Zg()(),Jc(573,`blockquote`)(574,`p`),Tk(575,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(576,`code`),Tk(577,`font-size: inherit`),Zg(),Tk(578,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(579,`tr`,15)(580,`td`,16)(581,`div`,17)(582,`span`,18),Tk(583,` label`),_u(584,`br`),Zg()()(),Jc(585,`td`,19)(586,`code`,26),Tk(587,`string`),Zg()(),Jc(588,`td`,22)(589,`p`),Tk(590,`Rótulo do botão.`),Zg()()(),Jc(591,`tr`,15)(592,`td`,16)(593,`div`,17)(594,`span`,18),Tk(595,` loading`),_u(596,`br`),Zg()()(),Jc(597,`td`,19)(598,`code`,20),Tk(599,`boolean`),Zg()(),Jc(600,`td`,22)(601,`em`)(602,`strong`),Tk(603,`(opcional)`),Zg()(),Jc(604,`p`),Tk(605,`Habilita um estado de carregamento ao botão, desabilitando-o e exibindo um ícone de carregamento à esquerda de seu rótulo.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Le(a,ze){if(a&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(m);let o=nk();return H_(o.changeTab(`web`))}),_u(1,`sample-po-modal-basic-view`)(2,`sample-po-modal-labs-view`)(3,`sample-po-modal-fruits-salad-view`),Zg()}if(a&2){let m=nk();Rb(`p-active`,m.activeTab===`web`)}}var Fe=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Modal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Le,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-modal-doc`),Zg()()()),l&2&&(Rb(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,ue,be,Se,Ee],encapsulation:2,changeDetection:1})}return a})()}];var Ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[WV.forChild(Fe),WV]})}return a})();var ct=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,Ce]})}return a})();export{ct as DocPoModalModule};
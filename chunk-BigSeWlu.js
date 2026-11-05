import{$i as h,A as Hoe,Ai as _O,B as L4,Cn as oi,Ct as Yoe,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,ai as Sn,b as Fu,ci as TO,cr as CO,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ii as SO,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,vi as Wk,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var ke=()=>({value:`1`,label:`Option 1`});var ye=()=>({value:`2`,label:`Option 2`});var we=(a,X)=>[a,X];var be=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`checkboxGroup`,`p-label`,`PO Checkbox Group`,3,`p-options`]],template:function(p,n){p&1&&nu(0,`po-checkbox-group`,0),p&2&&UE(`p-options`,CO(3,we,_O(1,ke),_O(2,ye)))},dependencies:[w4],encapsulation:2,changeDetection:1})}return a})();var _e=a=>({"docs-sample-code-tabs":a});var he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Checkbox Group Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-checkbox-group-basic`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,_e,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,be],encapsulation:2,changeDetection:1})}return a})();var xe=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`indeterminate`,label:`Indeterminate`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-labs`]],standalone:!1,decls:26,vars:34,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`checkboxGroup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-indeterminate`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-error-limit`,`p-show-required`,`p-label-text-wrap`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionValue`,`p-clean`,``,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionLabel`,`p-clean`,``,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Option Disabled`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let s=Ax();jc(0,`po-checkbox-group`,2),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.checkboxGroup,l)||(n.checkboxGroup=l),__(l)}),mt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,3),nu(3,`po-info`,4),SO(4,`json`),nu(5,`po-info`,5),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`po-input`,6),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.option.value,l)||(n.option.value=l),__(l)}),wg(),jc(10,`po-input`,7),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.option.label,l)||(n.option.label=l),__(l)}),wg(),jc(11,`po-switch`,8),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.option.disabled,l)||(n.option.disabled=l),__(l)}),wg(),jc(12,`div`,3)(13,`po-button`,9),mt(`p-click`,function(){return n.addOption()}),wg()()(),nu(14,`po-divider`),jc(15,`form`,null,1)(17,`po-input`,10),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.label,l)||(n.label=l),__(l)}),wg(),jc(18,`po-input`,11),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.help,l)||(n.help=l),__(l)}),wg(),jc(19,`po-input`,12),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.helperText,l)||(n.helperText=l),__(l)}),wg(),jc(20,`po-input`,13),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),__(l)}),wg(),jc(21,`po-checkbox-group`,14),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.properties,l)||(n.properties=l),__(l)}),wg(),jc(22,`po-radio-group`,15),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.columns,l)||(n.columns=l),__(l)}),wg(),jc(23,`po-radio-group`,16),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.size,l)||(n.size=l),__(l)}),wg(),jc(24,`div`,3)(25,`po-button`,17),mt(`p-click`,function(){return n.restore()}),wg()()()}if(p&2){let s=Bx(8);sb(`ngModel`,n.checkboxGroup),UE(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-indeterminate`,n.properties.includes(`indeterminate`))(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),o0(),rg(3),UE(`p-value`,TO(4,32,n.checkboxGroup)),rg(2),UE(`p-value`,n.event),rg(4),sb(`ngModel`,n.option.value),o0(),rg(),sb(`ngModel`,n.option.label),o0(),rg(),sb(`ngModel`,n.option.disabled),o0(),rg(2),UE(`p-disabled`,s.invalid),rg(4),sb(`ngModel`,n.label),o0(),rg(),sb(`ngModel`,n.help),o0(),rg(),sb(`ngModel`,n.helperText),o0(),rg(),sb(`ngModel`,n.fieldErrorMessage),o0(),rg(),sb(`ngModel`,n.properties),UE(`p-options`,n.propertiesOptions),o0(),rg(),sb(`ngModel`,n.columns),UE(`p-options`,n.columnOptions),o0(),rg(),sb(`ngModel`,n.size),UE(`p-options`,n.sizeOptions),o0()}},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Gte,L4,Yoe,Wk],encapsulation:2,changeDetection:1})}return a})();var De=a=>({"docs-sample-code-tabs":a});var Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Checkbox Group Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
  </po-input>

  <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
  </po-input>

  <po-switch class="po-md-6" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  helperText: string;
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;
  size: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-checkbox-group-labs`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,De,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,xe],encapsulation:2,changeDetection:1})}return a})();var ge=(()=>{class a{poNotification=h(Fu);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:`1`,label:`Functional menu`},{value:`2`,label:`Online panel`},{value:`3`,label:`Internet browser`},{value:`4`,label:`Browser details`},{value:`5`,label:`Transparent panel`},{value:`6`,label:`Browser refresh`}];systemOptions=[{value:`1`,label:`Audit updates in the data dictionary`},{value:`2`,label:`Audit updates in the user registry`},{value:`3`,label:`Audit authentication / access`},{value:`4`,label:`Audit rejection of access to resources`}];confirm(){this.poNotification.success(`Settings saved successfully!`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-password-policy`]],standalone:!1,decls:19,vars:7,consts:[[`g`,`ngForm`],[1,`po-font-subtitle`],[1,`po-row`],[`name`,`system`,`p-label`,`System features`,1,`po-lg-12`,3,`p-options`],[`name`,`audit`,`p-label`,`Audit rules`,1,`po-lg-12`,3,`p-options`],[`name`,`expiration`,`p-label`,`Password expiration`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`periodExpiration`,`p-label`,`Period (in days)`,`p-maxlength`,`3`,1,`po-lg-6`,3,`p-disabled`],[`name`,`attempts`,`p-label`,`Restrict access attempts`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxAttempts`,`p-label`,`Maximum number of attempts`,`p-maxlength`,`3`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Apply password policy`,1,`po-offset-lg-9`,`po-lg-3`,`po-offset-xl-9`,3,`p-click`]],template:function(p,n){if(p&1){let s=Ax();jc(0,`div`,1),lO(1,`Password Rules`),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,2),nu(6,`po-checkbox-group`,3),wg(),nu(7,`po-divider`),jc(8,`div`,2),nu(9,`po-checkbox-group`,4),wg(),nu(10,`po-divider`),jc(11,`div`,2)(12,`po-switch`,5),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.expiration,l)||(n.expiration=l),__(l)}),wg(),nu(13,`po-number`,6),wg(),jc(14,`div`,2)(15,`po-switch`,7),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.attempts,l)||(n.attempts=l),__(l)}),wg(),jc(16,`po-number`,8),r0(),ab(`ngModelChange`,function(l){return v_(s),uO(n.maxAttempts,l)||(n.maxAttempts=l),__(l)}),wg()(),jc(17,`div`,2)(18,`po-button`,9),mt(`p-click`,function(){return n.confirm()}),wg()()()}p&2&&(rg(6),UE(`p-options`,n.systemOptions),rg(3),UE(`p-options`,n.auditOptions),rg(3),sb(`ngModel`,n.expiration),o0(),rg(),UE(`p-disabled`,!n.expiration),rg(2),sb(`ngModel`,n.attempts),o0(),rg(),sb(`ngModel`,n.maxAttempts),UE(`p-disabled`,!n.attempts),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,Hoe,L4],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-password-policy-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Checkbox Group – Security policy`),wg(),jc(4,`a`,2),mt(`click`,function(){return n.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-font-subtitle">Password Rules</div>

<po-divider />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  private poNotification = inject(PoNotificationService);

  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-checkbox-group-password-policy`),wg(),nu(23,`hr`)),p&2&&(rg(5),Xx(`po-icon `+n.sampleCodeButtonIcon),rg(),Ag(` `,n.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Le,n.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,ge],encapsulation:2,changeDetection:1})}return a})();var Ce=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-checkbox-group-doc`]],standalone:!1,decls:900,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-radio-group`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoCheckboxGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(p,n){p&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoCheckboxGroupComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,`O componente `),jc(24,`code`),lO(25,`po-checkbox-group`),wg(),lO(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),wg(),jc(27,`blockquote`)(28,`p`),lO(29,`Para seleção única, utilize o `),jc(30,`a`,6)(31,`strong`),lO(32,`PO Radio Group`),wg()(),lO(33,`.`),wg()(),jc(34,`p`),lO(35,`Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.`),wg(),jc(36,`pre`)(37,`code`),lO(38,`favorites = ['PO', 'Angular'];
`),wg()(),jc(39,`p`),lO(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),jc(41,`code`),lO(42,`null`),wg(),lO(43,`), ou seja, nem marcado (`),jc(44,`code`),lO(45,`true`),wg(),lO(46,`) e nem desmarcado (`),jc(47,`code`),lO(48,`false`),wg(),lO(49,`),
deve setar a propriedade `),jc(50,`code`),lO(51,`p-indeterminate`),wg(),lO(52,` como `),jc(53,`code`),lO(54,`true`),wg(),lO(55,`.`),wg(),jc(56,`p`),lO(57,`Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.`),wg(),jc(58,`pre`)(59,`code`),lO(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),wg()()(),jc(61,`div`,7)(62,`h4`,8),lO(63,`Seletor`),wg(),jc(64,`pre`,9),lO(65,`<po-checkbox-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-columns="number"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-indeterminate="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-checkbox-group>
`),wg()(),jc(66,`h4`,10),lO(67,`Propriedades`),wg(),jc(68,`table`,11)(69,`tr`,12)(70,`th`,13),lO(71,`Nome`),wg(),jc(72,`th`,13),lO(73,`Tipo`),wg(),jc(74,`th`,13),lO(75,`Padrão`),wg(),jc(76,`th`,13),lO(77,`Descrição`),wg()(),jc(78,`tr`,14)(79,`td`,15)(80,`div`,16)(81,`span`,17),lO(82,` (p-additional-help)`),nu(83,`br`),wg()(),jc(84,`div`,18),lO(85,`Deprecated`),wg()(),jc(86,`td`,19)(87,`code`,20),lO(88,`EventEmitter`),wg()(),jc(89,`td`,21),lO(90,`-`),wg(),jc(91,`td`,22)(92,`em`)(93,`strong`),lO(94,`(opcional)`),wg()(),jc(95,`p`),lO(96,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(97,`blockquote`)(98,`p`),lO(99,`Essa propriedade está `),jc(100,`strong`),lO(101,`depreciada`),wg(),lO(102,` e será removida na versão `),jc(103,`code`),lO(104,`23.x.x`),wg(),lO(105,`. Recomendamos utilizar a propriedade `),jc(106,`code`),lO(107,`p-helper`),wg(),lO(108,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(109,`tr`,14)(110,`td`,15)(111,`div`,23)(112,`span`,24),lO(113,` p-additional-help-tooltip`),nu(114,`br`),wg()(),jc(115,`div`,18),lO(116,`Deprecated`),wg()(),jc(117,`td`,19)(118,`code`,25),lO(119,`string`),wg()(),jc(120,`td`,21),lO(121,`-`),wg(),jc(122,`td`,22)(123,`em`)(124,`strong`),lO(125,`(opcional)`),wg()(),jc(126,`p`),lO(127,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(128,`code`),lO(129,`po-helper`),wg(),lO(130,`.
`),jc(131,`strong`),lO(132,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(133,`blockquote`)(134,`p`),lO(135,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(136,`blockquote`)(137,`p`),lO(138,`Essa propriedade está `),jc(139,`strong`),lO(140,`depreciada`),wg(),lO(141,` e será removida na versão `),jc(142,`code`),lO(143,`23.x.x`),wg(),lO(144,`. Recomendamos utilizar a propriedade `),jc(145,`code`),lO(146,`p-helper`),wg(),lO(147,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(148,`tr`,14)(149,`td`,15)(150,`div`,23)(151,`span`,24),lO(152,` p-append-in-body`),nu(153,`br`),wg()()(),jc(154,`td`,19)(155,`code`,26),lO(156,`boolean`),wg()(),jc(157,`td`,21)(158,`p`)(159,`code`),lO(160,`false`),wg()()(),jc(161,`td`,22)(162,`em`)(163,`strong`),lO(164,`(opcional)`),wg()(),jc(165,`p`),lO(166,`Define que o popover (`),jc(167,`code`),lO(168,`p-helper`),wg(),lO(169,` e/ou `),jc(170,`code`),lO(171,`p-error-limit`),wg(),lO(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(173,`blockquote`)(174,`p`),lO(175,`Quando utilizado com `),jc(176,`code`),lO(177,`p-helper`),wg(),lO(178,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(179,`tr`,14)(180,`td`,15)(181,`div`,23)(182,`span`,24),lO(183,` p-auto-focus`),nu(184,`br`),wg()()(),jc(185,`td`,19)(186,`code`,26),lO(187,`boolean`),wg()(),jc(188,`td`,21)(189,`p`)(190,`code`),lO(191,`false`),wg()()(),jc(192,`td`,22)(193,`em`)(194,`strong`),lO(195,`(opcional)`),wg()(),jc(196,`p`),lO(197,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(198,`blockquote`)(199,`p`),lO(200,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(201,`tr`,14)(202,`td`,15)(203,`div`,16)(204,`span`,17),lO(205,` (p-change)`),nu(206,`br`),wg()()(),jc(207,`td`,19)(208,`code`,20),lO(209,`EventEmitter`),wg()(),jc(210,`td`,21),lO(211,`-`),wg(),jc(212,`td`,22)(213,`em`)(214,`strong`),lO(215,`(opcional)`),wg()(),jc(216,`p`),lO(217,`Evento disparado ao alterar valor do campo`),wg()()(),jc(218,`tr`,14)(219,`td`,15)(220,`div`,16)(221,`span`,17),lO(222,` (p-change-model)`),nu(223,`br`),wg()()(),jc(224,`td`,19)(225,`code`,20),lO(226,`EventEmitter`),wg()(),jc(227,`td`,21),lO(228,`-`),wg(),jc(229,`td`,22)(230,`em`)(231,`strong`),lO(232,`(opcional)`),wg()(),jc(233,`p`),lO(234,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(235,`code`),lO(236,`setValue`),wg(),lO(237,`, `),jc(238,`code`),lO(239,`patchValue`),wg(),lO(240,`, carregamento assíncrono).`),wg(),jc(241,`p`),lO(242,`Diferentemente do `),jc(243,`code`),lO(244,`p-change`),wg(),lO(245,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(246,`code`),lO(247,`p-change-model`),wg(),lO(248,` cobre todos os cenários de alteração de valor.`),wg(),jc(249,`p`),lO(250,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(251,`tr`,14)(252,`td`,15)(253,`div`,23)(254,`span`,24),lO(255,` p-columns`),nu(256,`br`),wg()()(),jc(257,`td`,19)(258,`code`,27),lO(259,`number`),wg()(),jc(260,`td`,21)(261,`p`)(262,`code`),lO(263,`2`),wg()()(),jc(264,`td`,22)(265,`em`)(266,`strong`),lO(267,`(opcional)`),wg()(),jc(268,`p`),lO(269,`Possibilita definir a quantidade de colunas para exibição dos itens do `),jc(270,`em`),lO(271,`checkbox`),wg(),lO(272,`.`),wg(),jc(273,`ul`)(274,`li`),lO(275,`É possível exibir as opções entre `),jc(276,`code`),lO(277,`1`),wg(),lO(278,` e `),jc(279,`code`),lO(280,`4`),wg(),lO(281,` colunas.`),wg(),jc(282,`li`),lO(283,`Para resolução `),jc(284,`code`),lO(285,`sm`),wg(),lO(286,` a colunagem invariavelmente passa para `),jc(287,`code`),lO(288,`1`),wg(),lO(289,` coluna.`),wg(),jc(290,`li`),lO(291,`Quando se trata de resolução `),jc(292,`code`),lO(293,`md`),wg(),lO(294,` e o valor estabelecido para colunas for superior a `),jc(295,`code`),lO(296,`2`),wg(),lO(297,`,
o `),jc(298,`em`),lO(299,`grid system`),wg(),lO(300,` será composto por `),jc(301,`code`),lO(302,`2`),wg(),lO(303,` colunas.`),wg(),jc(304,`li`),lO(305,`Para evitar a quebra de linha, prefira a utilização de `),jc(306,`code`),lO(307,`1`),wg(),lO(308,` coluna para opções com textos grandes.`),wg()()()(),jc(309,`tr`,14)(310,`td`,15)(311,`div`,23)(312,`span`,24),lO(313,` p-compact-label`),nu(314,`br`),wg()()(),jc(315,`td`,19)(316,`code`,26),lO(317,`boolean`),wg()(),jc(318,`td`,21)(319,`p`)(320,`code`),lO(321,`false`),wg()()(),jc(322,`td`,22)(323,`em`)(324,`strong`),lO(325,`(opcional)`),wg()(),jc(326,`p`),lO(327,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(328,`p`),lO(329,`Quando habilitado (`),jc(330,`code`),lO(331,`true`),wg(),lO(332,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(333,`ul`)(334,`li`)(335,`code`),lO(336,`po-label`),wg()(),jc(337,`li`)(338,`code`),lO(339,`p-requirement (showRequired)`),wg()(),jc(340,`li`)(341,`code`),lO(342,`po-helper`),wg()()(),jc(343,`p`),lO(344,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(345,`p`),lO(346,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(347,`ul`)(348,`li`)(349,`code`),lO(350,`--field-container-title-justify`),wg()(),jc(351,`li`)(352,`code`),lO(353,`--field-container-title-flex`),wg()()(),jc(354,`p`),lO(355,`Exemplo:`),wg(),jc(356,`pre`)(357,`code`),lO(358,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(359,`p`),lO(360,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),lO(365,` p-disabled`),nu(366,`br`),wg()()(),jc(367,`td`,19)(368,`code`,26),lO(369,`boolean`),wg()(),jc(370,`td`,21)(371,`p`)(372,`code`),lO(373,`false`),wg()()(),jc(374,`td`,22)(375,`em`)(376,`strong`),lO(377,`(opcional)`),wg()(),jc(378,`p`),lO(379,`Desabilita todos os itens do checkbox.`),wg()()(),jc(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),lO(384,` p-error-limit`),nu(385,`br`),wg()()(),jc(386,`td`,19)(387,`code`,26),lO(388,`boolean`),wg()(),jc(389,`td`,21)(390,`p`)(391,`code`),lO(392,`false`),wg()()(),jc(393,`td`,22)(394,`em`)(395,`strong`),lO(396,`(opcional)`),wg()(),jc(397,`p`),lO(398,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(399,`blockquote`)(400,`p`),lO(401,`Caso essa propriedade seja definida como `),jc(402,`code`),lO(403,`true`),wg(),lO(404,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(405,`tr`,14)(406,`td`,15)(407,`div`,23)(408,`span`,24),lO(409,` p-field-error-message`),nu(410,`br`),wg()()(),jc(411,`td`,19)(412,`code`,25),lO(413,`string`),wg()(),jc(414,`td`,21),lO(415,`-`),wg(),jc(416,`td`,22)(417,`em`)(418,`strong`),lO(419,`(opcional)`),wg()(),jc(420,`p`),lO(421,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),wg(),jc(422,`blockquote`)(423,`p`),lO(424,`Necessário que a propriedade `),jc(425,`code`),lO(426,`p-required`),wg(),lO(427,` esteja habilitada.`),wg()()()(),jc(428,`tr`,14)(429,`td`,15)(430,`div`,23)(431,`span`,24),lO(432,` p-help`),nu(433,`br`),wg()()(),jc(434,`td`,19)(435,`code`,25),lO(436,`string`),wg()(),jc(437,`td`,21),lO(438,`-`),wg(),jc(439,`td`,22)(440,`em`)(441,`strong`),lO(442,`(opcional)`),wg()(),jc(443,`p`),lO(444,`Texto de apoio do campo`),wg()()(),jc(445,`tr`,14)(446,`td`,15)(447,`div`,23)(448,`span`,24),lO(449,` p-indeterminate`),nu(450,`br`),wg()()(),jc(451,`td`,19)(452,`code`,26),lO(453,`boolean`),wg()(),jc(454,`td`,21)(455,`p`)(456,`code`),lO(457,`false`),wg()()(),jc(458,`td`,22)(459,`em`)(460,`strong`),lO(461,`(opcional)`),wg()(),jc(462,`p`),lO(463,`Caso exista a necessidade de usar o valor indeterminado (`),jc(464,`code`),lO(465,`null`),wg(),lO(466,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),jc(467,`code`),lO(468,`p-indeterminate`),wg(),lO(469,` como `),jc(470,`code`),lO(471,`true`),wg(),lO(472,`, por padrão essa propriedade vem desabilitada (`),jc(473,`code`),lO(474,`false`),wg(),lO(475,`).`),wg(),jc(476,`p`),lO(477,`Quando essa propriedade é setada como `),jc(478,`code`),lO(479,`true`),wg(),lO(480,`, o `),jc(481,`em`),lO(482,`po-checkbox-group`),wg(),lO(483,` passa a devolver um objeto completo para o
`),jc(484,`code`),lO(485,`ngModel`),wg(),lO(486,`, diferente do array que contém apenas os valores selecionados.`),wg()()(),jc(487,`tr`,14)(488,`td`,15)(489,`div`,16)(490,`span`,17),lO(491,` (p-keydown)`),nu(492,`br`),wg()()(),jc(493,`td`,19)(494,`code`,20),lO(495,`EventEmitter`),wg()(),jc(496,`td`,21),lO(497,`-`),wg(),jc(498,`td`,22)(499,`em`)(500,`strong`),lO(501,`(opcional)`),wg()(),jc(502,`p`),lO(503,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(504,`code`),lO(505,`KeyboardEvent`),wg(),lO(506,` com informações sobre a tecla.`),wg()()(),jc(507,`tr`,14)(508,`td`,15)(509,`div`,23)(510,`span`,24),lO(511,` p-label`),nu(512,`br`),wg()()(),jc(513,`td`,19)(514,`code`,25),lO(515,`string`),wg()(),jc(516,`td`,21),lO(517,`-`),wg(),jc(518,`td`,22)(519,`em`)(520,`strong`),lO(521,`(opcional)`),wg()(),jc(522,`p`),lO(523,`Label do campo`),wg()()(),jc(524,`tr`,14)(525,`td`,15)(526,`div`,23)(527,`span`,24),lO(528,` p-label-text-wrap`),nu(529,`br`),wg()()(),jc(530,`td`,19)(531,`code`,26),lO(532,`boolean`),wg()(),jc(533,`td`,21)(534,`p`)(535,`code`),lO(536,`false`),wg()()(),jc(537,`td`,22)(538,`em`)(539,`strong`),lO(540,`(opcional)`),wg()(),jc(541,`p`),lO(542,`Habilita a quebra automática do texto da propriedade `),jc(543,`code`),lO(544,`p-label`),wg(),lO(545,`. Quando `),jc(546,`code`),lO(547,`p-label-text-wrap`),wg(),lO(548,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(549,`tr`,14)(550,`td`,15)(551,`div`,23)(552,`span`,24),lO(553,` name`),nu(554,`br`),wg()()(),jc(555,`td`,19)(556,`code`,25),lO(557,`string`),wg()(),jc(558,`td`,21),lO(559,`-`),wg(),jc(560,`td`,22)(561,`p`),lO(562,`Nome dos checkboxes`),wg()()(),jc(563,`tr`,14)(564,`td`,15)(565,`div`,16)(566,`span`,17),lO(567,` (ngModelChange)`),nu(568,`br`),wg()()(),jc(569,`td`,19)(570,`code`,20),lO(571,`EventEmitter`),wg()(),jc(572,`td`,21),lO(573,`-`),wg(),jc(574,`td`,22)(575,`em`)(576,`strong`),lO(577,`(opcional)`),wg()(),jc(578,`p`),lO(579,`Função para atualizar o `),jc(580,`code`),lO(581,`ngModel`),wg(),lO(582,` do componente, necessário quando não for utilizado dentro da tag form.`),wg(),jc(583,`p`),lO(584,`Na versão 12.2.0 do Angular a verificação `),jc(585,`code`),lO(586,`strictTemplates`),wg(),lO(587,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),wg(),jc(588,`pre`)(589,`code`),lO(590,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),wg()()()(),jc(591,`tr`,14)(592,`td`,15)(593,`div`,23)(594,`span`,24),lO(595,` p-optional`),nu(596,`br`),wg()()(),jc(597,`td`,19)(598,`code`,26),lO(599,`boolean`),wg()(),jc(600,`td`,21)(601,`p`)(602,`code`),lO(603,`false`),wg()()(),jc(604,`td`,22)(605,`em`)(606,`strong`),lO(607,`(opcional)`),wg()(),jc(608,`p`),lO(609,`Define se a indicação de campo opcional será exibida.`),wg(),jc(610,`blockquote`)(611,`p`),lO(612,`Não será exibida a indicação se:`),wg()(),jc(613,`ul`)(614,`li`),lO(615,`O campo conter `),jc(616,`code`),lO(617,`p-required`),wg(),lO(618,`;`),wg(),jc(619,`li`),lO(620,`Não possuir `),jc(621,`code`),lO(622,`p-help`),wg(),lO(623,` e/ou `),jc(624,`code`),lO(625,`p-label`),wg(),lO(626,`.`),wg()()()(),jc(627,`tr`,14)(628,`td`,15)(629,`div`,23)(630,`span`,24),lO(631,` p-options`),nu(632,`br`),wg()()(),jc(633,`td`,19)(634,`code`,28),lO(635,`PoCheckboxGroupOption[]`),wg()(),jc(636,`td`,21),lO(637,`-`),wg(),jc(638,`td`,22)(639,`em`)(640,`strong`),lO(641,`(opcional)`),wg()(),jc(642,`p`),lO(643,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),wg()()(),jc(644,`tr`,14)(645,`td`,15)(646,`div`,23)(647,`span`,24),lO(648,` p-helper`),nu(649,`br`),wg()()(),jc(650,`td`,19)(651,`code`,29),lO(652,`PoHelperOptions `),wg(),jc(653,`code`,25),lO(654,` string`),wg()(),jc(655,`td`,21),lO(656,`-`),wg(),jc(657,`td`,22)(658,`em`)(659,`strong`),lO(660,`(opcional)`),wg()(),jc(661,`p`),lO(662,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(663,`code`),lO(664,`p-label`),wg(),lO(665,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(666,`code`),lO(667,`p-label`),wg(),lO(668,`.`),wg(),jc(669,`blockquote`)(670,`p`),lO(671,`Para mais informações acesse: `),jc(672,`a`,30),lO(673,`https://po-ui.io/documentation/po-helper`),wg(),lO(674,`.`),wg()(),jc(675,`blockquote`)(676,`p`),lO(677,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(678,`code`),lO(679,`p-additional-help-tooltip`),wg(),lO(680,` e `),jc(681,`code`),lO(682,`p-additional-help`),wg(),lO(683,`) será ignorado.`),wg()()()(),jc(684,`tr`,14)(685,`td`,15)(686,`div`,23)(687,`span`,24),lO(688,` p-required`),nu(689,`br`),wg()()(),jc(690,`td`,19)(691,`code`,26),lO(692,`boolean`),wg()(),jc(693,`td`,21)(694,`p`)(695,`code`),lO(696,`false`),wg()()(),jc(697,`td`,22)(698,`em`)(699,`strong`),lO(700,`(opcional)`),wg()(),jc(701,`p`),lO(702,`Define que o campo será obrigatório.`),wg()()(),jc(703,`tr`,14)(704,`td`,15)(705,`div`,23)(706,`span`,24),lO(707,` p-show-required`),nu(708,`br`),wg()()(),jc(709,`td`,19)(710,`code`,26),lO(711,`boolean`),wg()(),jc(712,`td`,21),lO(713,`-`),wg(),jc(714,`td`,22)(715,`p`),lO(716,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(717,`blockquote`)(718,`p`),lO(719,`Não será exibida a indicação se:`),wg()(),jc(720,`ul`)(721,`li`),lO(722,`Não possuir `),jc(723,`code`),lO(724,`p-help`),wg(),lO(725,` e/ou `),jc(726,`code`),lO(727,`p-label`),wg(),lO(728,`.`),wg()()()(),jc(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),lO(733,` p-size`),nu(734,`br`),wg()()(),jc(735,`td`,19)(736,`code`,25),lO(737,`string`),wg()(),jc(738,`td`,21)(739,`p`)(740,`code`),lO(741,`medium`),wg()()(),jc(742,`td`,22)(743,`em`)(744,`strong`),lO(745,`(opcional)`),wg()(),jc(746,`p`),lO(747,`Define o tamanho dos checkboxes do componente:`),wg(),jc(748,`ul`)(749,`li`)(750,`code`),lO(751,`small`),wg(),lO(752,`: 16x16 (disponível apenas para acessibilidade AA).`),wg(),jc(753,`li`)(754,`code`),lO(755,`medium`),wg(),lO(756,`: 24x24.`),wg()(),jc(757,`blockquote`)(758,`p`),lO(759,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(760,`code`),lO(761,`medium`),wg(),lO(762,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(763,`a`,31),lO(764,`po-theme`),wg(),lO(765,`.`),wg()()()()(),jc(766,`h3`,10),lO(767,`Métodos`),wg(),jc(768,`table`,32)(769,`tr`,14)(770,`th`,33)(771,`div`,23)(772,`h4`)(773,`span`,24),lO(774,` focus `),wg()()()()(),jc(775,`tr`,22)(776,`td`,22)(777,`p`),lO(778,`Função que atribui foco ao componente.`),wg(),jc(779,`p`),lO(780,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(781,`pre`)(782,`code`),lO(783,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),wg()()()()(),nu(784,`br`),jc(785,`table`,32)(786,`tr`,14)(787,`th`,33)(788,`div`,23)(789,`h4`)(790,`span`,24),lO(791,` showAdditionalHelp `),wg()()()()(),jc(792,`tr`,22)(793,`td`,22)(794,`p`),lO(795,`Método que exibe `),jc(796,`code`),lO(797,`p-helper`),wg(),lO(798,` ou executa a ação definida em `),jc(799,`code`),lO(800,`p-helper{eventOnClick}`),wg(),lO(801,` ou em `),jc(802,`code`),lO(803,`p-additionalHelp`),wg(),lO(804,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(805,`code`),lO(806,`p-keydown`),wg(),lO(807,`.`),wg(),jc(808,`blockquote`)(809,`p`),lO(810,`Exibe ou oculta o conteúdo do componente `),jc(811,`code`),lO(812,`po-helper`),wg(),lO(813,` quando o componente estiver com foco.`),wg()(),jc(814,`pre`)(815,`code`),lO(816,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),wg()(),jc(817,`pre`)(818,`code`),lO(819,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(820,`br`),jc(821,`h3`),lO(822,`Interfaces`),wg(),jc(823,`h4`,34)(824,`code`,5),lO(825,`PoCheckboxGroupOption`),wg()(),jc(826,`div`,2)(827,`p`),lO(828,`Interface para as ações do componente po-checkbox-group.`),wg()(),jc(829,`h4`,10),lO(830,`Propriedades`),wg(),jc(831,`table`,11)(832,`tr`,12)(833,`th`,13),lO(834,`Nome`),wg(),jc(835,`th`,13),lO(836,`Tipo`),wg(),jc(837,`th`,13),lO(838,`Descrição`),wg()(),jc(839,`tr`,14)(840,`td`,15)(841,`div`,23)(842,`span`,24),lO(843,` disabled`),nu(844,`br`),wg()()(),jc(845,`td`,19)(846,`code`,26),lO(847,`boolean`),wg()(),jc(848,`td`,22)(849,`em`)(850,`strong`),lO(851,`(opcional)`),wg()(),jc(852,`p`),lO(853,`Desabilita o checkbox, por padrão as opções sempre estarão habilitadas para o usuário.`),wg(),jc(854,`p`),lO(855,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),wg()()(),jc(856,`tr`,14)(857,`td`,15)(858,`div`,23)(859,`span`,24),lO(860,` label`),nu(861,`br`),wg()()(),jc(862,`td`,19)(863,`code`,25),lO(864,`string`),wg()(),jc(865,`td`,22)(866,`p`),lO(867,`Texto exibido para o usuário ao lado do checkbox.`),wg()()(),jc(868,`tr`,14)(869,`td`,15)(870,`div`,23)(871,`span`,24),lO(872,` value`),nu(873,`br`),wg()()(),jc(874,`td`,19)(875,`code`,25),lO(876,`string`),wg()(),jc(877,`td`,22)(878,`p`),lO(879,`Valor retornado no model.`),wg(),jc(880,`p`),lO(881,`É possível usar os valores `),jc(882,`code`),lO(883,`true`),wg(),lO(884,` e `),jc(885,`code`),lO(886,`false`),wg(),lO(887,`, caso a propriedade `),jc(888,`code`),lO(889,`p-indeterminate`),wg(),lO(890,` esteja setada como `),jc(891,`code`),lO(892,`true`),wg(),lO(893,`
passa a aceitar `),jc(894,`code`),lO(895,`null`),wg(),lO(896,` também, por padrão esse valor sempre será setado como `),jc(897,`code`),lO(898,`false`),wg(),lO(899,`.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ve(a,X){if(a&1){let d=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(d);let n=Fx();return __(n.changeTab(`web`))}),nu(1,`sample-po-checkbox-group-basic-view`)(2,`sample-po-checkbox-group-labs-view`)(3,`sample-po-checkbox-group-password-policy-view`),wg()}if(a&2){let d=Fx();UE(`p-active`,d.activeTab===`web`)}}var Be=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Checkbox Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,n){p&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ve,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return n.changeTab(`doc`)}),nu(4,`sample-po-checkbox-group-doc`),wg()()()),p&2&&(UE(`p-actions`,n.actions),rg(2),Dx(n.hidePoWebSample?-1:2),rg(),UE(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,he,Ee,Se,Ce],encapsulation:2,changeDetection:1})}return a})()}];var ve=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(Be),I1]})}return a})();var ct=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,ve]})}return a})();export{ct as DocPoCheckboxGroupModule};
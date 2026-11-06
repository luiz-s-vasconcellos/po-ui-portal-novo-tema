import{$n as Ak,A as Hoe,Aa as qk,Ar as Ig,B as L4,Cn as oi,Ct as Yoe,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xt as ere,Yi as eF,b as Fu,bi as Uk,ca as jk,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,ta as hF,va as nk,wa as p,xi as VO,ya as nm,yi as U_,zr as Kk}from"./chunk-BQaN6dko.js";import{n as P,t as M}from"./main-SRPMFWZC.js";var ve=()=>({value:`1`,label:`Option 1`});var ke=()=>({value:`2`,label:`Option 2`});var ye=(a,J)=>[a,J];var ue=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-checkbox-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`checkboxGroup`,`p-label`,`PO Checkbox Group`,3,`p-options`]],template:function(p,n){p&1&&_u(0,`po-checkbox-group`,0),p&2&&Rb(`p-options`,Uk(3,ye,jk(1,ve),jk(2,ke)))},dependencies:[w4],encapsulation:2,changeDetection:1})}return a})();var Pe=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-checkbox-group-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Checkbox Group Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-checkbox-group-basic`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Pe,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ue],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`indeterminate`,label:`Indeterminate`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-checkbox-group-labs`]],standalone:!1,decls:26,vars:34,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`checkboxGroup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-indeterminate`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-error-limit`,`p-show-required`,`p-label-text-wrap`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionValue`,`p-clean`,``,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionLabel`,`p-clean`,``,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Option Disabled`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let s=ZO();Jc(0,`po-checkbox-group`,2),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.checkboxGroup,l)||(n.checkboxGroup=l),H_(l)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4),qk(4,`json`),_u(5,`po-info`,5),Zg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`po-input`,6),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.option.value,l)||(n.option.value=l),H_(l)}),Zg(),Jc(10,`po-input`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.option.label,l)||(n.option.label=l),H_(l)}),Zg(),Jc(11,`po-switch`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.option.disabled,l)||(n.option.disabled=l),H_(l)}),Zg(),Jc(12,`div`,3)(13,`po-button`,9),vt(`p-click`,function(){return n.addOption()}),Zg()()(),_u(14,`po-divider`),Jc(15,`form`,null,1)(17,`po-input`,10),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.label,l)||(n.label=l),H_(l)}),Zg(),Jc(18,`po-input`,11),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.help,l)||(n.help=l),H_(l)}),Zg(),Jc(19,`po-input`,12),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.helperText,l)||(n.helperText=l),H_(l)}),Zg(),Jc(20,`po-input`,13),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),H_(l)}),Zg(),Jc(21,`po-checkbox-group`,14),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.properties,l)||(n.properties=l),H_(l)}),Zg(),Jc(22,`po-radio-group`,15),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.columns,l)||(n.columns=l),H_(l)}),Zg(),Jc(23,`po-radio-group`,16),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.size,l)||(n.size=l),H_(l)}),Zg(),Jc(24,`div`,3)(25,`po-button`,17),vt(`p-click`,function(){return n.restore()}),Zg()()()}if(p&2){let s=sk(8);Yb(`ngModel`,n.checkboxGroup),Rb(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-indeterminate`,n.properties.includes(`indeterminate`))(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),Y0(),Ig(3),Rb(`p-value`,Kk(4,32,n.checkboxGroup)),Ig(2),Rb(`p-value`,n.event),Ig(4),Yb(`ngModel`,n.option.value),Y0(),Ig(),Yb(`ngModel`,n.option.label),Y0(),Ig(),Yb(`ngModel`,n.option.disabled),Y0(),Ig(2),Rb(`p-disabled`,s.invalid),Ig(4),Yb(`ngModel`,n.label),Y0(),Ig(),Yb(`ngModel`,n.help),Y0(),Ig(),Yb(`ngModel`,n.helperText),Y0(),Ig(),Yb(`ngModel`,n.fieldErrorMessage),Y0(),Ig(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,n.columns),Rb(`p-options`,n.columnOptions),Y0(),Ig(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Gte,L4,Yoe,hF],encapsulation:2,changeDetection:1})}return a})();var Te=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-checkbox-group-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Checkbox Group Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-checkbox-group
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-checkbox-group-labs`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Te,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,he],encapsulation:2,changeDetection:1})}return a})();var Ee=(()=>{class a{poNotification=p(Fu);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:`1`,label:`Functional menu`},{value:`2`,label:`Online panel`},{value:`3`,label:`Internet browser`},{value:`4`,label:`Browser details`},{value:`5`,label:`Transparent panel`},{value:`6`,label:`Browser refresh`}];systemOptions=[{value:`1`,label:`Audit updates in the data dictionary`},{value:`2`,label:`Audit updates in the user registry`},{value:`3`,label:`Audit authentication / access`},{value:`4`,label:`Audit rejection of access to resources`}];confirm(){this.poNotification.success(`Settings saved successfully!`)}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-checkbox-group-password-policy`]],standalone:!1,decls:19,vars:7,consts:[[`g`,`ngForm`],[1,`po-font-subtitle`],[1,`po-row`],[`name`,`system`,`p-label`,`System features`,1,`po-lg-12`,3,`p-options`],[`name`,`audit`,`p-label`,`Audit rules`,1,`po-lg-12`,3,`p-options`],[`name`,`expiration`,`p-label`,`Password expiration`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`periodExpiration`,`p-label`,`Period (in days)`,`p-maxlength`,`3`,1,`po-lg-6`,3,`p-disabled`],[`name`,`attempts`,`p-label`,`Restrict access attempts`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxAttempts`,`p-label`,`Maximum number of attempts`,`p-maxlength`,`3`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Apply password policy`,1,`po-offset-lg-9`,`po-lg-3`,`po-offset-xl-9`,3,`p-click`]],template:function(p,n){if(p&1){let s=ZO();Jc(0,`div`,1),Tk(1,`Password Rules`),Zg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,2),_u(6,`po-checkbox-group`,3),Zg(),_u(7,`po-divider`),Jc(8,`div`,2),_u(9,`po-checkbox-group`,4),Zg(),_u(10,`po-divider`),Jc(11,`div`,2)(12,`po-switch`,5),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.expiration,l)||(n.expiration=l),H_(l)}),Zg(),_u(13,`po-number`,6),Zg(),Jc(14,`div`,2)(15,`po-switch`,7),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.attempts,l)||(n.attempts=l),H_(l)}),Zg(),Jc(16,`po-number`,8),W0(),Kb(`ngModelChange`,function(l){return U_(s),Ak(n.maxAttempts,l)||(n.maxAttempts=l),H_(l)}),Zg()(),Jc(17,`div`,2)(18,`po-button`,9),vt(`p-click`,function(){return n.confirm()}),Zg()()()}p&2&&(Ig(6),Rb(`p-options`,n.systemOptions),Ig(3),Rb(`p-options`,n.auditOptions),Ig(3),Yb(`ngModel`,n.expiration),Y0(),Ig(),Rb(`p-disabled`,!n.expiration),Ig(2),Yb(`ngModel`,n.attempts),Y0(),Ig(),Yb(`ngModel`,n.maxAttempts),Rb(`p-disabled`,!n.attempts),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,Hoe,L4],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-checkbox-group-password-policy-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Checkbox Group – Security policy`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-font-subtitle">Password Rules</div>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-checkbox-group-password-policy`),Zg(),_u(23,`hr`)),p&2&&(Ig(5),yk(`po-icon `+n.sampleCodeButtonIcon),Ig(),nm(` `,n.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,qe,n.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ee],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-checkbox-group-doc`]],standalone:!1,decls:900,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-radio-group`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoCheckboxGroupOption[]`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`]],template:function(p,n){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoCheckboxGroupComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O componente `),Jc(24,`code`),Tk(25,`po-checkbox-group`),Zg(),Tk(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),Zg(),Jc(27,`blockquote`)(28,`p`),Tk(29,`Para seleção única, utilize o `),Jc(30,`a`,6)(31,`strong`),Tk(32,`PO Radio Group`),Zg()(),Tk(33,`.`),Zg()(),Jc(34,`p`),Tk(35,`Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.`),Zg(),Jc(36,`pre`)(37,`code`),Tk(38,`favorites = ['PO', 'Angular'];
`),Zg()(),Jc(39,`p`),Tk(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Jc(41,`code`),Tk(42,`null`),Zg(),Tk(43,`), ou seja, nem marcado (`),Jc(44,`code`),Tk(45,`true`),Zg(),Tk(46,`) e nem desmarcado (`),Jc(47,`code`),Tk(48,`false`),Zg(),Tk(49,`),
deve setar a propriedade `),Jc(50,`code`),Tk(51,`p-indeterminate`),Zg(),Tk(52,` como `),Jc(53,`code`),Tk(54,`true`),Zg(),Tk(55,`.`),Zg(),Jc(56,`p`),Tk(57,`Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.`),Zg(),Jc(58,`pre`)(59,`code`),Tk(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),Zg()()(),Jc(61,`div`,7)(62,`h4`,8),Tk(63,`Seletor`),Zg(),Jc(64,`pre`,9),Tk(65,`<po-checkbox-group
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
`),Zg()(),Jc(66,`h4`,10),Tk(67,`Propriedades`),Zg(),Jc(68,`table`,11)(69,`tr`,12)(70,`th`,13),Tk(71,`Nome`),Zg(),Jc(72,`th`,13),Tk(73,`Tipo`),Zg(),Jc(74,`th`,13),Tk(75,`Padrão`),Zg(),Jc(76,`th`,13),Tk(77,`Descrição`),Zg()(),Jc(78,`tr`,14)(79,`td`,15)(80,`div`,16)(81,`span`,17),Tk(82,` (p-additional-help)`),_u(83,`br`),Zg()(),Jc(84,`div`,18),Tk(85,`Deprecated`),Zg()(),Jc(86,`td`,19)(87,`code`,20),Tk(88,`EventEmitter`),Zg()(),Jc(89,`td`,21),Tk(90,`-`),Zg(),Jc(91,`td`,22)(92,`em`)(93,`strong`),Tk(94,`(opcional)`),Zg()(),Jc(95,`p`),Tk(96,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(97,`blockquote`)(98,`p`),Tk(99,`Essa propriedade está `),Jc(100,`strong`),Tk(101,`depreciada`),Zg(),Tk(102,` e será removida na versão `),Jc(103,`code`),Tk(104,`23.x.x`),Zg(),Tk(105,`. Recomendamos utilizar a propriedade `),Jc(106,`code`),Tk(107,`p-helper`),Zg(),Tk(108,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(109,`tr`,14)(110,`td`,15)(111,`div`,23)(112,`span`,24),Tk(113,` p-additional-help-tooltip`),_u(114,`br`),Zg()(),Jc(115,`div`,18),Tk(116,`Deprecated`),Zg()(),Jc(117,`td`,19)(118,`code`,25),Tk(119,`string`),Zg()(),Jc(120,`td`,21),Tk(121,`-`),Zg(),Jc(122,`td`,22)(123,`em`)(124,`strong`),Tk(125,`(opcional)`),Zg()(),Jc(126,`p`),Tk(127,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(128,`code`),Tk(129,`po-helper`),Zg(),Tk(130,`.
`),Jc(131,`strong`),Tk(132,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(133,`blockquote`)(134,`p`),Tk(135,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(136,`blockquote`)(137,`p`),Tk(138,`Essa propriedade está `),Jc(139,`strong`),Tk(140,`depreciada`),Zg(),Tk(141,` e será removida na versão `),Jc(142,`code`),Tk(143,`23.x.x`),Zg(),Tk(144,`. Recomendamos utilizar a propriedade `),Jc(145,`code`),Tk(146,`p-helper`),Zg(),Tk(147,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(148,`tr`,14)(149,`td`,15)(150,`div`,23)(151,`span`,24),Tk(152,` p-append-in-body`),_u(153,`br`),Zg()()(),Jc(154,`td`,19)(155,`code`,26),Tk(156,`boolean`),Zg()(),Jc(157,`td`,21)(158,`p`)(159,`code`),Tk(160,`false`),Zg()()(),Jc(161,`td`,22)(162,`em`)(163,`strong`),Tk(164,`(opcional)`),Zg()(),Jc(165,`p`),Tk(166,`Define que o popover (`),Jc(167,`code`),Tk(168,`p-helper`),Zg(),Tk(169,` e/ou `),Jc(170,`code`),Tk(171,`p-error-limit`),Zg(),Tk(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(173,`blockquote`)(174,`p`),Tk(175,`Quando utilizado com `),Jc(176,`code`),Tk(177,`p-helper`),Zg(),Tk(178,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(179,`tr`,14)(180,`td`,15)(181,`div`,23)(182,`span`,24),Tk(183,` p-auto-focus`),_u(184,`br`),Zg()()(),Jc(185,`td`,19)(186,`code`,26),Tk(187,`boolean`),Zg()(),Jc(188,`td`,21)(189,`p`)(190,`code`),Tk(191,`false`),Zg()()(),Jc(192,`td`,22)(193,`em`)(194,`strong`),Tk(195,`(opcional)`),Zg()(),Jc(196,`p`),Tk(197,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(198,`blockquote`)(199,`p`),Tk(200,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(201,`tr`,14)(202,`td`,15)(203,`div`,16)(204,`span`,17),Tk(205,` (p-change)`),_u(206,`br`),Zg()()(),Jc(207,`td`,19)(208,`code`,20),Tk(209,`EventEmitter`),Zg()(),Jc(210,`td`,21),Tk(211,`-`),Zg(),Jc(212,`td`,22)(213,`em`)(214,`strong`),Tk(215,`(opcional)`),Zg()(),Jc(216,`p`),Tk(217,`Evento disparado ao alterar valor do campo`),Zg()()(),Jc(218,`tr`,14)(219,`td`,15)(220,`div`,16)(221,`span`,17),Tk(222,` (p-change-model)`),_u(223,`br`),Zg()()(),Jc(224,`td`,19)(225,`code`,20),Tk(226,`EventEmitter`),Zg()(),Jc(227,`td`,21),Tk(228,`-`),Zg(),Jc(229,`td`,22)(230,`em`)(231,`strong`),Tk(232,`(opcional)`),Zg()(),Jc(233,`p`),Tk(234,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(235,`code`),Tk(236,`setValue`),Zg(),Tk(237,`, `),Jc(238,`code`),Tk(239,`patchValue`),Zg(),Tk(240,`, carregamento assíncrono).`),Zg(),Jc(241,`p`),Tk(242,`Diferentemente do `),Jc(243,`code`),Tk(244,`p-change`),Zg(),Tk(245,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(246,`code`),Tk(247,`p-change-model`),Zg(),Tk(248,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(249,`p`),Tk(250,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(251,`tr`,14)(252,`td`,15)(253,`div`,23)(254,`span`,24),Tk(255,` p-columns`),_u(256,`br`),Zg()()(),Jc(257,`td`,19)(258,`code`,27),Tk(259,`number`),Zg()(),Jc(260,`td`,21)(261,`p`)(262,`code`),Tk(263,`2`),Zg()()(),Jc(264,`td`,22)(265,`em`)(266,`strong`),Tk(267,`(opcional)`),Zg()(),Jc(268,`p`),Tk(269,`Possibilita definir a quantidade de colunas para exibição dos itens do `),Jc(270,`em`),Tk(271,`checkbox`),Zg(),Tk(272,`.`),Zg(),Jc(273,`ul`)(274,`li`),Tk(275,`É possível exibir as opções entre `),Jc(276,`code`),Tk(277,`1`),Zg(),Tk(278,` e `),Jc(279,`code`),Tk(280,`4`),Zg(),Tk(281,` colunas.`),Zg(),Jc(282,`li`),Tk(283,`Para resolução `),Jc(284,`code`),Tk(285,`sm`),Zg(),Tk(286,` a colunagem invariavelmente passa para `),Jc(287,`code`),Tk(288,`1`),Zg(),Tk(289,` coluna.`),Zg(),Jc(290,`li`),Tk(291,`Quando se trata de resolução `),Jc(292,`code`),Tk(293,`md`),Zg(),Tk(294,` e o valor estabelecido para colunas for superior a `),Jc(295,`code`),Tk(296,`2`),Zg(),Tk(297,`,
o `),Jc(298,`em`),Tk(299,`grid system`),Zg(),Tk(300,` será composto por `),Jc(301,`code`),Tk(302,`2`),Zg(),Tk(303,` colunas.`),Zg(),Jc(304,`li`),Tk(305,`Para evitar a quebra de linha, prefira a utilização de `),Jc(306,`code`),Tk(307,`1`),Zg(),Tk(308,` coluna para opções com textos grandes.`),Zg()()()(),Jc(309,`tr`,14)(310,`td`,15)(311,`div`,23)(312,`span`,24),Tk(313,` p-compact-label`),_u(314,`br`),Zg()()(),Jc(315,`td`,19)(316,`code`,26),Tk(317,`boolean`),Zg()(),Jc(318,`td`,21)(319,`p`)(320,`code`),Tk(321,`false`),Zg()()(),Jc(322,`td`,22)(323,`em`)(324,`strong`),Tk(325,`(opcional)`),Zg()(),Jc(326,`p`),Tk(327,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(328,`p`),Tk(329,`Quando habilitado (`),Jc(330,`code`),Tk(331,`true`),Zg(),Tk(332,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(333,`ul`)(334,`li`)(335,`code`),Tk(336,`po-label`),Zg()(),Jc(337,`li`)(338,`code`),Tk(339,`p-requirement (showRequired)`),Zg()(),Jc(340,`li`)(341,`code`),Tk(342,`po-helper`),Zg()()(),Jc(343,`p`),Tk(344,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(345,`p`),Tk(346,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(347,`ul`)(348,`li`)(349,`code`),Tk(350,`--field-container-title-justify`),Zg()(),Jc(351,`li`)(352,`code`),Tk(353,`--field-container-title-flex`),Zg()()(),Jc(354,`p`),Tk(355,`Exemplo:`),Zg(),Jc(356,`pre`)(357,`code`),Tk(358,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(359,`p`),Tk(360,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(361,`tr`,14)(362,`td`,15)(363,`div`,23)(364,`span`,24),Tk(365,` p-disabled`),_u(366,`br`),Zg()()(),Jc(367,`td`,19)(368,`code`,26),Tk(369,`boolean`),Zg()(),Jc(370,`td`,21)(371,`p`)(372,`code`),Tk(373,`false`),Zg()()(),Jc(374,`td`,22)(375,`em`)(376,`strong`),Tk(377,`(opcional)`),Zg()(),Jc(378,`p`),Tk(379,`Desabilita todos os itens do checkbox.`),Zg()()(),Jc(380,`tr`,14)(381,`td`,15)(382,`div`,23)(383,`span`,24),Tk(384,` p-error-limit`),_u(385,`br`),Zg()()(),Jc(386,`td`,19)(387,`code`,26),Tk(388,`boolean`),Zg()(),Jc(389,`td`,21)(390,`p`)(391,`code`),Tk(392,`false`),Zg()()(),Jc(393,`td`,22)(394,`em`)(395,`strong`),Tk(396,`(opcional)`),Zg()(),Jc(397,`p`),Tk(398,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Zg(),Jc(399,`blockquote`)(400,`p`),Tk(401,`Caso essa propriedade seja definida como `),Jc(402,`code`),Tk(403,`true`),Zg(),Tk(404,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Zg()()()(),Jc(405,`tr`,14)(406,`td`,15)(407,`div`,23)(408,`span`,24),Tk(409,` p-field-error-message`),_u(410,`br`),Zg()()(),Jc(411,`td`,19)(412,`code`,25),Tk(413,`string`),Zg()(),Jc(414,`td`,21),Tk(415,`-`),Zg(),Jc(416,`td`,22)(417,`em`)(418,`strong`),Tk(419,`(opcional)`),Zg()(),Jc(420,`p`),Tk(421,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Zg(),Jc(422,`blockquote`)(423,`p`),Tk(424,`Necessário que a propriedade `),Jc(425,`code`),Tk(426,`p-required`),Zg(),Tk(427,` esteja habilitada.`),Zg()()()(),Jc(428,`tr`,14)(429,`td`,15)(430,`div`,23)(431,`span`,24),Tk(432,` p-help`),_u(433,`br`),Zg()()(),Jc(434,`td`,19)(435,`code`,25),Tk(436,`string`),Zg()(),Jc(437,`td`,21),Tk(438,`-`),Zg(),Jc(439,`td`,22)(440,`em`)(441,`strong`),Tk(442,`(opcional)`),Zg()(),Jc(443,`p`),Tk(444,`Texto de apoio do campo`),Zg()()(),Jc(445,`tr`,14)(446,`td`,15)(447,`div`,23)(448,`span`,24),Tk(449,` p-indeterminate`),_u(450,`br`),Zg()()(),Jc(451,`td`,19)(452,`code`,26),Tk(453,`boolean`),Zg()(),Jc(454,`td`,21)(455,`p`)(456,`code`),Tk(457,`false`),Zg()()(),Jc(458,`td`,22)(459,`em`)(460,`strong`),Tk(461,`(opcional)`),Zg()(),Jc(462,`p`),Tk(463,`Caso exista a necessidade de usar o valor indeterminado (`),Jc(464,`code`),Tk(465,`null`),Zg(),Tk(466,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Jc(467,`code`),Tk(468,`p-indeterminate`),Zg(),Tk(469,` como `),Jc(470,`code`),Tk(471,`true`),Zg(),Tk(472,`, por padrão essa propriedade vem desabilitada (`),Jc(473,`code`),Tk(474,`false`),Zg(),Tk(475,`).`),Zg(),Jc(476,`p`),Tk(477,`Quando essa propriedade é setada como `),Jc(478,`code`),Tk(479,`true`),Zg(),Tk(480,`, o `),Jc(481,`em`),Tk(482,`po-checkbox-group`),Zg(),Tk(483,` passa a devolver um objeto completo para o
`),Jc(484,`code`),Tk(485,`ngModel`),Zg(),Tk(486,`, diferente do array que contém apenas os valores selecionados.`),Zg()()(),Jc(487,`tr`,14)(488,`td`,15)(489,`div`,16)(490,`span`,17),Tk(491,` (p-keydown)`),_u(492,`br`),Zg()()(),Jc(493,`td`,19)(494,`code`,20),Tk(495,`EventEmitter`),Zg()(),Jc(496,`td`,21),Tk(497,`-`),Zg(),Jc(498,`td`,22)(499,`em`)(500,`strong`),Tk(501,`(opcional)`),Zg()(),Jc(502,`p`),Tk(503,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(504,`code`),Tk(505,`KeyboardEvent`),Zg(),Tk(506,` com informações sobre a tecla.`),Zg()()(),Jc(507,`tr`,14)(508,`td`,15)(509,`div`,23)(510,`span`,24),Tk(511,` p-label`),_u(512,`br`),Zg()()(),Jc(513,`td`,19)(514,`code`,25),Tk(515,`string`),Zg()(),Jc(516,`td`,21),Tk(517,`-`),Zg(),Jc(518,`td`,22)(519,`em`)(520,`strong`),Tk(521,`(opcional)`),Zg()(),Jc(522,`p`),Tk(523,`Label do campo`),Zg()()(),Jc(524,`tr`,14)(525,`td`,15)(526,`div`,23)(527,`span`,24),Tk(528,` p-label-text-wrap`),_u(529,`br`),Zg()()(),Jc(530,`td`,19)(531,`code`,26),Tk(532,`boolean`),Zg()(),Jc(533,`td`,21)(534,`p`)(535,`code`),Tk(536,`false`),Zg()()(),Jc(537,`td`,22)(538,`em`)(539,`strong`),Tk(540,`(opcional)`),Zg()(),Jc(541,`p`),Tk(542,`Habilita a quebra automática do texto da propriedade `),Jc(543,`code`),Tk(544,`p-label`),Zg(),Tk(545,`. Quando `),Jc(546,`code`),Tk(547,`p-label-text-wrap`),Zg(),Tk(548,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(549,`tr`,14)(550,`td`,15)(551,`div`,23)(552,`span`,24),Tk(553,` name`),_u(554,`br`),Zg()()(),Jc(555,`td`,19)(556,`code`,25),Tk(557,`string`),Zg()(),Jc(558,`td`,21),Tk(559,`-`),Zg(),Jc(560,`td`,22)(561,`p`),Tk(562,`Nome dos checkboxes`),Zg()()(),Jc(563,`tr`,14)(564,`td`,15)(565,`div`,16)(566,`span`,17),Tk(567,` (ngModelChange)`),_u(568,`br`),Zg()()(),Jc(569,`td`,19)(570,`code`,20),Tk(571,`EventEmitter`),Zg()(),Jc(572,`td`,21),Tk(573,`-`),Zg(),Jc(574,`td`,22)(575,`em`)(576,`strong`),Tk(577,`(opcional)`),Zg()(),Jc(578,`p`),Tk(579,`Função para atualizar o `),Jc(580,`code`),Tk(581,`ngModel`),Zg(),Tk(582,` do componente, necessário quando não for utilizado dentro da tag form.`),Zg(),Jc(583,`p`),Tk(584,`Na versão 12.2.0 do Angular a verificação `),Jc(585,`code`),Tk(586,`strictTemplates`),Zg(),Tk(587,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Zg(),Jc(588,`pre`)(589,`code`),Tk(590,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),Zg()()()(),Jc(591,`tr`,14)(592,`td`,15)(593,`div`,23)(594,`span`,24),Tk(595,` p-optional`),_u(596,`br`),Zg()()(),Jc(597,`td`,19)(598,`code`,26),Tk(599,`boolean`),Zg()(),Jc(600,`td`,21)(601,`p`)(602,`code`),Tk(603,`false`),Zg()()(),Jc(604,`td`,22)(605,`em`)(606,`strong`),Tk(607,`(opcional)`),Zg()(),Jc(608,`p`),Tk(609,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(610,`blockquote`)(611,`p`),Tk(612,`Não será exibida a indicação se:`),Zg()(),Jc(613,`ul`)(614,`li`),Tk(615,`O campo conter `),Jc(616,`code`),Tk(617,`p-required`),Zg(),Tk(618,`;`),Zg(),Jc(619,`li`),Tk(620,`Não possuir `),Jc(621,`code`),Tk(622,`p-help`),Zg(),Tk(623,` e/ou `),Jc(624,`code`),Tk(625,`p-label`),Zg(),Tk(626,`.`),Zg()()()(),Jc(627,`tr`,14)(628,`td`,15)(629,`div`,23)(630,`span`,24),Tk(631,` p-options`),_u(632,`br`),Zg()()(),Jc(633,`td`,19)(634,`code`,28),Tk(635,`PoCheckboxGroupOption[]`),Zg()(),Jc(636,`td`,21),Tk(637,`-`),Zg(),Jc(638,`td`,22)(639,`em`)(640,`strong`),Tk(641,`(opcional)`),Zg()(),Jc(642,`p`),Tk(643,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),Zg()()(),Jc(644,`tr`,14)(645,`td`,15)(646,`div`,23)(647,`span`,24),Tk(648,` p-helper`),_u(649,`br`),Zg()()(),Jc(650,`td`,19)(651,`code`,29),Tk(652,`PoHelperOptions `),Zg(),Jc(653,`code`,25),Tk(654,` string`),Zg()(),Jc(655,`td`,21),Tk(656,`-`),Zg(),Jc(657,`td`,22)(658,`em`)(659,`strong`),Tk(660,`(opcional)`),Zg()(),Jc(661,`p`),Tk(662,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(663,`code`),Tk(664,`p-label`),Zg(),Tk(665,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(666,`code`),Tk(667,`p-label`),Zg(),Tk(668,`.`),Zg(),Jc(669,`blockquote`)(670,`p`),Tk(671,`Para mais informações acesse: `),Jc(672,`a`,30),Tk(673,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(674,`.`),Zg()(),Jc(675,`blockquote`)(676,`p`),Tk(677,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(678,`code`),Tk(679,`p-additional-help-tooltip`),Zg(),Tk(680,` e `),Jc(681,`code`),Tk(682,`p-additional-help`),Zg(),Tk(683,`) será ignorado.`),Zg()()()(),Jc(684,`tr`,14)(685,`td`,15)(686,`div`,23)(687,`span`,24),Tk(688,` p-required`),_u(689,`br`),Zg()()(),Jc(690,`td`,19)(691,`code`,26),Tk(692,`boolean`),Zg()(),Jc(693,`td`,21)(694,`p`)(695,`code`),Tk(696,`false`),Zg()()(),Jc(697,`td`,22)(698,`em`)(699,`strong`),Tk(700,`(opcional)`),Zg()(),Jc(701,`p`),Tk(702,`Define que o campo será obrigatório.`),Zg()()(),Jc(703,`tr`,14)(704,`td`,15)(705,`div`,23)(706,`span`,24),Tk(707,` p-show-required`),_u(708,`br`),Zg()()(),Jc(709,`td`,19)(710,`code`,26),Tk(711,`boolean`),Zg()(),Jc(712,`td`,21),Tk(713,`-`),Zg(),Jc(714,`td`,22)(715,`p`),Tk(716,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(717,`blockquote`)(718,`p`),Tk(719,`Não será exibida a indicação se:`),Zg()(),Jc(720,`ul`)(721,`li`),Tk(722,`Não possuir `),Jc(723,`code`),Tk(724,`p-help`),Zg(),Tk(725,` e/ou `),Jc(726,`code`),Tk(727,`p-label`),Zg(),Tk(728,`.`),Zg()()()(),Jc(729,`tr`,14)(730,`td`,15)(731,`div`,23)(732,`span`,24),Tk(733,` p-size`),_u(734,`br`),Zg()()(),Jc(735,`td`,19)(736,`code`,25),Tk(737,`string`),Zg()(),Jc(738,`td`,21)(739,`p`)(740,`code`),Tk(741,`medium`),Zg()()(),Jc(742,`td`,22)(743,`em`)(744,`strong`),Tk(745,`(opcional)`),Zg()(),Jc(746,`p`),Tk(747,`Define o tamanho dos checkboxes do componente:`),Zg(),Jc(748,`ul`)(749,`li`)(750,`code`),Tk(751,`small`),Zg(),Tk(752,`: 16x16 (disponível apenas para acessibilidade AA).`),Zg(),Jc(753,`li`)(754,`code`),Tk(755,`medium`),Zg(),Tk(756,`: 24x24.`),Zg()(),Jc(757,`blockquote`)(758,`p`),Tk(759,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(760,`code`),Tk(761,`medium`),Zg(),Tk(762,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(763,`a`,31),Tk(764,`po-theme`),Zg(),Tk(765,`.`),Zg()()()()(),Jc(766,`h3`,10),Tk(767,`Métodos`),Zg(),Jc(768,`table`,32)(769,`tr`,14)(770,`th`,33)(771,`div`,23)(772,`h4`)(773,`span`,24),Tk(774,` focus `),Zg()()()()(),Jc(775,`tr`,22)(776,`td`,22)(777,`p`),Tk(778,`Função que atribui foco ao componente.`),Zg(),Jc(779,`p`),Tk(780,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(781,`pre`)(782,`code`),Tk(783,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),Zg()()()()(),_u(784,`br`),Jc(785,`table`,32)(786,`tr`,14)(787,`th`,33)(788,`div`,23)(789,`h4`)(790,`span`,24),Tk(791,` showAdditionalHelp `),Zg()()()()(),Jc(792,`tr`,22)(793,`td`,22)(794,`p`),Tk(795,`Método que exibe `),Jc(796,`code`),Tk(797,`p-helper`),Zg(),Tk(798,` ou executa a ação definida em `),Jc(799,`code`),Tk(800,`p-helper{eventOnClick}`),Zg(),Tk(801,` ou em `),Jc(802,`code`),Tk(803,`p-additionalHelp`),Zg(),Tk(804,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(805,`code`),Tk(806,`p-keydown`),Zg(),Tk(807,`.`),Zg(),Jc(808,`blockquote`)(809,`p`),Tk(810,`Exibe ou oculta o conteúdo do componente `),Jc(811,`code`),Tk(812,`po-helper`),Zg(),Tk(813,` quando o componente estiver com foco.`),Zg()(),Jc(814,`pre`)(815,`code`),Tk(816,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),Zg()(),Jc(817,`pre`)(818,`code`),Tk(819,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(820,`br`),Jc(821,`h3`),Tk(822,`Interfaces`),Zg(),Jc(823,`h4`,34)(824,`code`,5),Tk(825,`PoCheckboxGroupOption`),Zg()(),Jc(826,`div`,2)(827,`p`),Tk(828,`Interface para as ações do componente po-checkbox-group.`),Zg()(),Jc(829,`h4`,10),Tk(830,`Propriedades`),Zg(),Jc(831,`table`,11)(832,`tr`,12)(833,`th`,13),Tk(834,`Nome`),Zg(),Jc(835,`th`,13),Tk(836,`Tipo`),Zg(),Jc(837,`th`,13),Tk(838,`Descrição`),Zg()(),Jc(839,`tr`,14)(840,`td`,15)(841,`div`,23)(842,`span`,24),Tk(843,` disabled`),_u(844,`br`),Zg()()(),Jc(845,`td`,19)(846,`code`,26),Tk(847,`boolean`),Zg()(),Jc(848,`td`,22)(849,`em`)(850,`strong`),Tk(851,`(opcional)`),Zg()(),Jc(852,`p`),Tk(853,`Desabilita o checkbox, por padrão as opções sempre estarão habilitadas para o usuário.`),Zg(),Jc(854,`p`),Tk(855,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),Zg()()(),Jc(856,`tr`,14)(857,`td`,15)(858,`div`,23)(859,`span`,24),Tk(860,` label`),_u(861,`br`),Zg()()(),Jc(862,`td`,19)(863,`code`,25),Tk(864,`string`),Zg()(),Jc(865,`td`,22)(866,`p`),Tk(867,`Texto exibido para o usuário ao lado do checkbox.`),Zg()()(),Jc(868,`tr`,14)(869,`td`,15)(870,`div`,23)(871,`span`,24),Tk(872,` value`),_u(873,`br`),Zg()()(),Jc(874,`td`,19)(875,`code`,25),Tk(876,`string`),Zg()(),Jc(877,`td`,22)(878,`p`),Tk(879,`Valor retornado no model.`),Zg(),Jc(880,`p`),Tk(881,`É possível usar os valores `),Jc(882,`code`),Tk(883,`true`),Zg(),Tk(884,` e `),Jc(885,`code`),Tk(886,`false`),Zg(),Tk(887,`, caso a propriedade `),Jc(888,`code`),Tk(889,`p-indeterminate`),Zg(),Tk(890,` esteja setada como `),Jc(891,`code`),Tk(892,`true`),Zg(),Tk(893,`
passa a aceitar `),Jc(894,`code`),Tk(895,`null`),Zg(),Tk(896,` também, por padrão esse valor sempre será setado como `),Jc(897,`code`),Tk(898,`false`),Zg(),Tk(899,`.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function Ae(a,J){if(a&1){let d=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(d);let n=nk();return H_(n.changeTab(`web`))}),_u(1,`sample-po-checkbox-group-basic-view`)(2,`sample-po-checkbox-group-labs-view`)(3,`sample-po-checkbox-group-password-policy-view`),Zg()}if(a&2){let d=nk();Rb(`p-active`,d.activeTab===`web`)}}var Ve=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Checkbox Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(p,n){p&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ae,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),_u(4,`sample-po-checkbox-group-doc`),Zg()()()),p&2&&(Rb(`p-actions`,n.actions),Ig(2),BO(n.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Tze,Qae,ere,be,xe,ge,Se],encapsulation:2,changeDetection:1})}return a})()}];var fe=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[WV.forChild(Ve),WV]})}return a})();var st=(()=>{class a{static ɵfac=function(p){return new(p||a)};static ɵmod=ge$1({type:a});static ɵinj=de({imports:[M,fe]})}return a})();export{st as DocPoCheckboxGroupModule};
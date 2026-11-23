import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I,At as Zte,Dr as Gk,Ea as jk,F as Joe,G as Nf,Gi as Yb,Ha as p,Hr as Lk,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,W as Mze,Wi as YO,Wr as MZ,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,ea as dF,gi as Rb,io as vt,j as I4,k as Goe,li as Qc,qa as qk,ra as de$1,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,tt as R4,vi as Sk,wr as GV,xi as Tk,xr as FO,ya as ik}from"./chunk-BQDTQO8h.js";var Ee=()=>({value:`1`,label:`Option 1`});var ge=()=>({value:`2`,label:`Option 2`});var Se=(l,I)=>[l,I];var re=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`checkboxGroup`,`p-label`,`PO Checkbox Group`,3,`p-options`]],template:function(p,n){p&1&&vu(0,`po-checkbox-group`,0),p&2&&Rb(`p-options`,jk(3,Se,Lk(1,Ee),Lk(2,ge)))},dependencies:[I4],encapsulation:2,changeDetection:1})}return l})();var de=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-checkbox-group-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Checkbox Group Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-checkbox-group-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,re],encapsulation:2,changeDetection:1})}return l})();var me=(()=>{class l{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`indeterminate`,label:`Indeterminate`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(r){this.event=r}restore(){this.helperText=``,this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-labs`]],standalone:!1,decls:26,vars:34,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`checkboxGroup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-indeterminate`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-error-limit`,`p-show-required`,`p-label-text-wrap`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionValue`,`p-clean`,``,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionLabel`,`p-clean`,``,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Option Disabled`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let c=YO();Qc(0,`po-checkbox-group`,2),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.checkboxGroup,a)||(n.checkboxGroup=a),U_(a)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,3),vu(3,`po-info`,4),Gk(4,`json`),vu(5,`po-info`,5),Kg(),vu(6,`po-divider`),Qc(7,`form`,null,0)(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.option.value,a)||(n.option.value=a),U_(a)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.option.label,a)||(n.option.label=a),U_(a)}),Kg(),Qc(11,`po-switch`,8),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.option.disabled,a)||(n.option.disabled=a),U_(a)}),Kg(),Qc(12,`div`,3)(13,`po-button`,9),vt(`p-click`,function(){return n.addOption()}),Kg()()(),vu(14,`po-divider`),Qc(15,`form`,null,1)(17,`po-input`,10),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.label,a)||(n.label=a),U_(a)}),Kg(),Qc(18,`po-input`,11),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.help,a)||(n.help=a),U_(a)}),Kg(),Qc(19,`po-input`,12),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.helperText,a)||(n.helperText=a),U_(a)}),Kg(),Qc(20,`po-input`,13),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.fieldErrorMessage,a)||(n.fieldErrorMessage=a),U_(a)}),Kg(),Qc(21,`po-checkbox-group`,14),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.properties,a)||(n.properties=a),U_(a)}),Kg(),Qc(22,`po-radio-group`,15),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.columns,a)||(n.columns=a),U_(a)}),Kg(),Qc(23,`po-radio-group`,16),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.size,a)||(n.size=a),U_(a)}),Kg(),Qc(24,`div`,3)(25,`po-button`,17),vt(`p-click`,function(){return n.restore()}),Kg()()()}if(p&2){let c=ik(8);Yb(`ngModel`,n.checkboxGroup),Rb(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-indeterminate`,n.properties.includes(`indeterminate`))(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),W0(),wg(3),Rb(`p-value`,qk(4,32,n.checkboxGroup)),wg(2),Rb(`p-value`,n.event),wg(4),Yb(`ngModel`,n.option.value),W0(),wg(),Yb(`ngModel`,n.option.label),W0(),wg(),Yb(`ngModel`,n.option.disabled),W0(),wg(2),Rb(`p-disabled`,c.invalid),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.fieldErrorMessage),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.columns),Rb(`p-options`,n.columnOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizeOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,R4,Joe,dF],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-checkbox-group-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Checkbox Group Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-checkbox-group-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-checkbox-group
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return l})();var ce=(()=>{class l{poNotification=p(Ru);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:`1`,label:`Functional menu`},{value:`2`,label:`Online panel`},{value:`3`,label:`Internet browser`},{value:`4`,label:`Browser details`},{value:`5`,label:`Transparent panel`},{value:`6`,label:`Browser refresh`}];systemOptions=[{value:`1`,label:`Audit updates in the data dictionary`},{value:`2`,label:`Audit updates in the user registry`},{value:`3`,label:`Audit authentication / access`},{value:`4`,label:`Audit rejection of access to resources`}];confirm(){this.poNotification.success(`Settings saved successfully!`)}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-password-policy`]],standalone:!1,decls:19,vars:7,consts:[[`g`,`ngForm`],[1,`po-font-subtitle`],[1,`po-row`],[`name`,`system`,`p-label`,`System features`,1,`po-lg-12`,3,`p-options`],[`name`,`audit`,`p-label`,`Audit rules`,1,`po-lg-12`,3,`p-options`],[`name`,`expiration`,`p-label`,`Password expiration`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`periodExpiration`,`p-label`,`Period (in days)`,`p-maxlength`,`3`,1,`po-lg-6`,3,`p-disabled`],[`name`,`attempts`,`p-label`,`Restrict access attempts`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxAttempts`,`p-label`,`Maximum number of attempts`,`p-maxlength`,`3`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Apply password policy`,1,`po-offset-lg-9`,`po-lg-3`,`po-offset-xl-9`,3,`p-click`]],template:function(p,n){if(p&1){let c=YO();Qc(0,`div`,1),Sk(1,`Password Rules`),Kg(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,2),vu(6,`po-checkbox-group`,3),Kg(),vu(7,`po-divider`),Qc(8,`div`,2),vu(9,`po-checkbox-group`,4),Kg(),vu(10,`po-divider`),Qc(11,`div`,2)(12,`po-switch`,5),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.expiration,a)||(n.expiration=a),U_(a)}),Kg(),vu(13,`po-number`,6),Kg(),Qc(14,`div`,2)(15,`po-switch`,7),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.attempts,a)||(n.attempts=a),U_(a)}),Kg(),Qc(16,`po-number`,8),z0(),Kb(`ngModelChange`,function(a){return B_(c),Tk(n.maxAttempts,a)||(n.maxAttempts=a),U_(a)}),Kg()(),Qc(17,`div`,2)(18,`po-button`,9),vt(`p-click`,function(){return n.confirm()}),Kg()()()}p&2&&(wg(6),Rb(`p-options`,n.systemOptions),wg(3),Rb(`p-options`,n.auditOptions),wg(3),Yb(`ngModel`,n.expiration),W0(),wg(),Rb(`p-disabled`,!n.expiration),wg(2),Yb(`ngModel`,n.attempts),W0(),wg(),Yb(`ngModel`,n.maxAttempts),Rb(`p-disabled`,!n.attempts),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,Goe,R4],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-password-policy-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-checkbox-group-password-policy`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Checkbox Group – Security policy`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-checkbox-group-password-policy`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-font-subtitle">Password Rules</div>

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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-doc`]],standalone:!1,decls:900,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-checkbox-group-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-radio-group`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-indeterminate`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoCheckboxGroupOption[]`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-checkbox-group-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-checkbox-group-option-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-checkbox-group-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-checkbox-group-option-value`,1,`docs-api-properties-row`]],template:function(p,n){p&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoCheckboxGroupComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O componente `),Qc(24,`code`),Sk(25,`po-checkbox-group`),Kg(),Sk(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),Kg(),Qc(27,`blockquote`)(28,`p`),Sk(29,`Para seleção única, utilize o `),Qc(30,`a`,6)(31,`strong`),Sk(32,`PO Radio Group`),Kg()(),Sk(33,`.`),Kg()(),Qc(34,`p`),Sk(35,`Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.`),Kg(),Qc(36,`pre`)(37,`code`),Sk(38,`favorites = ['PO', 'Angular'];
`),Kg()(),Qc(39,`p`),Sk(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Qc(41,`code`),Sk(42,`null`),Kg(),Sk(43,`), ou seja, nem marcado (`),Qc(44,`code`),Sk(45,`true`),Kg(),Sk(46,`) e nem desmarcado (`),Qc(47,`code`),Sk(48,`false`),Kg(),Sk(49,`),
deve setar a propriedade `),Qc(50,`code`),Sk(51,`p-indeterminate`),Kg(),Sk(52,` como `),Qc(53,`code`),Sk(54,`true`),Kg(),Sk(55,`.`),Kg(),Qc(56,`p`),Sk(57,`Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.`),Kg(),Qc(58,`pre`)(59,`code`),Sk(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),Kg()()(),Qc(61,`div`,7)(62,`h4`,8),Sk(63,`Seletor`),Kg(),Qc(64,`pre`,9),Sk(65,`<po-checkbox-group
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
`),Kg()(),Qc(66,`h4`,10),Sk(67,`Propriedades`),Kg(),Qc(68,`table`,11)(69,`tr`,12)(70,`th`,13),Sk(71,`Nome`),Kg(),Qc(72,`th`,13),Sk(73,`Tipo`),Kg(),Qc(74,`th`,13),Sk(75,`Padrão`),Kg(),Qc(76,`th`,13),Sk(77,`Descrição`),Kg()(),Qc(78,`tr`,14)(79,`td`,15)(80,`div`,16)(81,`span`,17),Sk(82,` (p-additional-help)`),vu(83,`br`),Kg()(),Qc(84,`div`,18),Sk(85,`Deprecated`),Kg()(),Qc(86,`td`,19)(87,`code`,20),Sk(88,`EventEmitter`),Kg()(),Qc(89,`td`,21),Sk(90,`-`),Kg(),Qc(91,`td`,22)(92,`em`)(93,`strong`),Sk(94,`(opcional)`),Kg()(),Qc(95,`p`),Sk(96,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(97,`blockquote`)(98,`p`),Sk(99,`Essa propriedade está `),Qc(100,`strong`),Sk(101,`depreciada`),Kg(),Sk(102,` e será removida na versão `),Qc(103,`code`),Sk(104,`23.x.x`),Kg(),Sk(105,`. Recomendamos utilizar a propriedade `),Qc(106,`code`),Sk(107,`p-helper`),Kg(),Sk(108,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(109,`tr`,23)(110,`td`,15)(111,`div`,24)(112,`span`,25),Sk(113,` p-additional-help-tooltip`),vu(114,`br`),Kg()(),Qc(115,`div`,18),Sk(116,`Deprecated`),Kg()(),Qc(117,`td`,19)(118,`code`,26),Sk(119,`string`),Kg()(),Qc(120,`td`,21),Sk(121,`-`),Kg(),Qc(122,`td`,22)(123,`em`)(124,`strong`),Sk(125,`(opcional)`),Kg()(),Qc(126,`p`),Sk(127,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(128,`code`),Sk(129,`po-helper`),Kg(),Sk(130,`.
`),Qc(131,`strong`),Sk(132,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(133,`blockquote`)(134,`p`),Sk(135,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(136,`blockquote`)(137,`p`),Sk(138,`Essa propriedade está `),Qc(139,`strong`),Sk(140,`depreciada`),Kg(),Sk(141,` e será removida na versão `),Qc(142,`code`),Sk(143,`23.x.x`),Kg(),Sk(144,`. Recomendamos utilizar a propriedade `),Qc(145,`code`),Sk(146,`p-helper`),Kg(),Sk(147,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(148,`tr`,27)(149,`td`,15)(150,`div`,24)(151,`span`,25),Sk(152,` p-append-in-body`),vu(153,`br`),Kg()()(),Qc(154,`td`,19)(155,`code`,28),Sk(156,`boolean`),Kg()(),Qc(157,`td`,21)(158,`p`)(159,`code`),Sk(160,`false`),Kg()()(),Qc(161,`td`,22)(162,`em`)(163,`strong`),Sk(164,`(opcional)`),Kg()(),Qc(165,`p`),Sk(166,`Define que o popover (`),Qc(167,`code`),Sk(168,`p-helper`),Kg(),Sk(169,` e/ou `),Qc(170,`code`),Sk(171,`p-error-limit`),Kg(),Sk(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(173,`blockquote`)(174,`p`),Sk(175,`Quando utilizado com `),Qc(176,`code`),Sk(177,`p-helper`),Kg(),Sk(178,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(179,`tr`,29)(180,`td`,15)(181,`div`,24)(182,`span`,25),Sk(183,` p-auto-focus`),vu(184,`br`),Kg()()(),Qc(185,`td`,19)(186,`code`,28),Sk(187,`boolean`),Kg()(),Qc(188,`td`,21)(189,`p`)(190,`code`),Sk(191,`false`),Kg()()(),Qc(192,`td`,22)(193,`em`)(194,`strong`),Sk(195,`(opcional)`),Kg()(),Qc(196,`p`),Sk(197,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(198,`blockquote`)(199,`p`),Sk(200,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(201,`tr`,30)(202,`td`,15)(203,`div`,16)(204,`span`,17),Sk(205,` (p-change)`),vu(206,`br`),Kg()()(),Qc(207,`td`,19)(208,`code`,20),Sk(209,`EventEmitter`),Kg()(),Qc(210,`td`,21),Sk(211,`-`),Kg(),Qc(212,`td`,22)(213,`em`)(214,`strong`),Sk(215,`(opcional)`),Kg()(),Qc(216,`p`),Sk(217,`Evento disparado ao alterar valor do campo`),Kg()()(),Qc(218,`tr`,31)(219,`td`,15)(220,`div`,16)(221,`span`,17),Sk(222,` (p-change-model)`),vu(223,`br`),Kg()()(),Qc(224,`td`,19)(225,`code`,20),Sk(226,`EventEmitter`),Kg()(),Qc(227,`td`,21),Sk(228,`-`),Kg(),Qc(229,`td`,22)(230,`em`)(231,`strong`),Sk(232,`(opcional)`),Kg()(),Qc(233,`p`),Sk(234,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(235,`code`),Sk(236,`setValue`),Kg(),Sk(237,`, `),Qc(238,`code`),Sk(239,`patchValue`),Kg(),Sk(240,`, carregamento assíncrono).`),Kg(),Qc(241,`p`),Sk(242,`Diferentemente do `),Qc(243,`code`),Sk(244,`p-change`),Kg(),Sk(245,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(246,`code`),Sk(247,`p-change-model`),Kg(),Sk(248,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(249,`p`),Sk(250,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(251,`tr`,32)(252,`td`,15)(253,`div`,24)(254,`span`,25),Sk(255,` p-columns`),vu(256,`br`),Kg()()(),Qc(257,`td`,19)(258,`code`,33),Sk(259,`number`),Kg()(),Qc(260,`td`,21)(261,`p`)(262,`code`),Sk(263,`2`),Kg()()(),Qc(264,`td`,22)(265,`em`)(266,`strong`),Sk(267,`(opcional)`),Kg()(),Qc(268,`p`),Sk(269,`Possibilita definir a quantidade de colunas para exibição dos itens do `),Qc(270,`em`),Sk(271,`checkbox`),Kg(),Sk(272,`.`),Kg(),Qc(273,`ul`)(274,`li`),Sk(275,`É possível exibir as opções entre `),Qc(276,`code`),Sk(277,`1`),Kg(),Sk(278,` e `),Qc(279,`code`),Sk(280,`4`),Kg(),Sk(281,` colunas.`),Kg(),Qc(282,`li`),Sk(283,`Para resolução `),Qc(284,`code`),Sk(285,`sm`),Kg(),Sk(286,` a colunagem invariavelmente passa para `),Qc(287,`code`),Sk(288,`1`),Kg(),Sk(289,` coluna.`),Kg(),Qc(290,`li`),Sk(291,`Quando se trata de resolução `),Qc(292,`code`),Sk(293,`md`),Kg(),Sk(294,` e o valor estabelecido para colunas for superior a `),Qc(295,`code`),Sk(296,`2`),Kg(),Sk(297,`,
o `),Qc(298,`em`),Sk(299,`grid system`),Kg(),Sk(300,` será composto por `),Qc(301,`code`),Sk(302,`2`),Kg(),Sk(303,` colunas.`),Kg(),Qc(304,`li`),Sk(305,`Para evitar a quebra de linha, prefira a utilização de `),Qc(306,`code`),Sk(307,`1`),Kg(),Sk(308,` coluna para opções com textos grandes.`),Kg()()()(),Qc(309,`tr`,34)(310,`td`,15)(311,`div`,24)(312,`span`,25),Sk(313,` p-compact-label`),vu(314,`br`),Kg()()(),Qc(315,`td`,19)(316,`code`,28),Sk(317,`boolean`),Kg()(),Qc(318,`td`,21)(319,`p`)(320,`code`),Sk(321,`false`),Kg()()(),Qc(322,`td`,22)(323,`em`)(324,`strong`),Sk(325,`(opcional)`),Kg()(),Qc(326,`p`),Sk(327,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(328,`p`),Sk(329,`Quando habilitado (`),Qc(330,`code`),Sk(331,`true`),Kg(),Sk(332,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(333,`ul`)(334,`li`)(335,`code`),Sk(336,`po-label`),Kg()(),Qc(337,`li`)(338,`code`),Sk(339,`p-requirement (showRequired)`),Kg()(),Qc(340,`li`)(341,`code`),Sk(342,`po-helper`),Kg()()(),Qc(343,`p`),Sk(344,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(345,`p`),Sk(346,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(347,`ul`)(348,`li`)(349,`code`),Sk(350,`--field-container-title-justify`),Kg()(),Qc(351,`li`)(352,`code`),Sk(353,`--field-container-title-flex`),Kg()()(),Qc(354,`p`),Sk(355,`Exemplo:`),Kg(),Qc(356,`pre`)(357,`code`),Sk(358,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(359,`p`),Sk(360,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(361,`tr`,35)(362,`td`,15)(363,`div`,24)(364,`span`,25),Sk(365,` p-disabled`),vu(366,`br`),Kg()()(),Qc(367,`td`,19)(368,`code`,28),Sk(369,`boolean`),Kg()(),Qc(370,`td`,21)(371,`p`)(372,`code`),Sk(373,`false`),Kg()()(),Qc(374,`td`,22)(375,`em`)(376,`strong`),Sk(377,`(opcional)`),Kg()(),Qc(378,`p`),Sk(379,`Desabilita todos os itens do checkbox.`),Kg()()(),Qc(380,`tr`,36)(381,`td`,15)(382,`div`,24)(383,`span`,25),Sk(384,` p-error-limit`),vu(385,`br`),Kg()()(),Qc(386,`td`,19)(387,`code`,28),Sk(388,`boolean`),Kg()(),Qc(389,`td`,21)(390,`p`)(391,`code`),Sk(392,`false`),Kg()()(),Qc(393,`td`,22)(394,`em`)(395,`strong`),Sk(396,`(opcional)`),Kg()(),Qc(397,`p`),Sk(398,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(399,`blockquote`)(400,`p`),Sk(401,`Caso essa propriedade seja definida como `),Qc(402,`code`),Sk(403,`true`),Kg(),Sk(404,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(405,`tr`,37)(406,`td`,15)(407,`div`,24)(408,`span`,25),Sk(409,` p-field-error-message`),vu(410,`br`),Kg()()(),Qc(411,`td`,19)(412,`code`,26),Sk(413,`string`),Kg()(),Qc(414,`td`,21),Sk(415,`-`),Kg(),Qc(416,`td`,22)(417,`em`)(418,`strong`),Sk(419,`(opcional)`),Kg()(),Qc(420,`p`),Sk(421,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(422,`blockquote`)(423,`p`),Sk(424,`Necessário que a propriedade `),Qc(425,`code`),Sk(426,`p-required`),Kg(),Sk(427,` esteja habilitada.`),Kg()()()(),Qc(428,`tr`,38)(429,`td`,15)(430,`div`,24)(431,`span`,25),Sk(432,` p-help`),vu(433,`br`),Kg()()(),Qc(434,`td`,19)(435,`code`,26),Sk(436,`string`),Kg()(),Qc(437,`td`,21),Sk(438,`-`),Kg(),Qc(439,`td`,22)(440,`em`)(441,`strong`),Sk(442,`(opcional)`),Kg()(),Qc(443,`p`),Sk(444,`Texto de apoio do campo`),Kg()()(),Qc(445,`tr`,39)(446,`td`,15)(447,`div`,24)(448,`span`,25),Sk(449,` p-indeterminate`),vu(450,`br`),Kg()()(),Qc(451,`td`,19)(452,`code`,28),Sk(453,`boolean`),Kg()(),Qc(454,`td`,21)(455,`p`)(456,`code`),Sk(457,`false`),Kg()()(),Qc(458,`td`,22)(459,`em`)(460,`strong`),Sk(461,`(opcional)`),Kg()(),Qc(462,`p`),Sk(463,`Caso exista a necessidade de usar o valor indeterminado (`),Qc(464,`code`),Sk(465,`null`),Kg(),Sk(466,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Qc(467,`code`),Sk(468,`p-indeterminate`),Kg(),Sk(469,` como `),Qc(470,`code`),Sk(471,`true`),Kg(),Sk(472,`, por padrão essa propriedade vem desabilitada (`),Qc(473,`code`),Sk(474,`false`),Kg(),Sk(475,`).`),Kg(),Qc(476,`p`),Sk(477,`Quando essa propriedade é setada como `),Qc(478,`code`),Sk(479,`true`),Kg(),Sk(480,`, o `),Qc(481,`em`),Sk(482,`po-checkbox-group`),Kg(),Sk(483,` passa a devolver um objeto completo para o
`),Qc(484,`code`),Sk(485,`ngModel`),Kg(),Sk(486,`, diferente do array que contém apenas os valores selecionados.`),Kg()()(),Qc(487,`tr`,40)(488,`td`,15)(489,`div`,16)(490,`span`,17),Sk(491,` (p-keydown)`),vu(492,`br`),Kg()()(),Qc(493,`td`,19)(494,`code`,20),Sk(495,`EventEmitter`),Kg()(),Qc(496,`td`,21),Sk(497,`-`),Kg(),Qc(498,`td`,22)(499,`em`)(500,`strong`),Sk(501,`(opcional)`),Kg()(),Qc(502,`p`),Sk(503,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(504,`code`),Sk(505,`KeyboardEvent`),Kg(),Sk(506,` com informações sobre a tecla.`),Kg()()(),Qc(507,`tr`,41)(508,`td`,15)(509,`div`,24)(510,`span`,25),Sk(511,` p-label`),vu(512,`br`),Kg()()(),Qc(513,`td`,19)(514,`code`,26),Sk(515,`string`),Kg()(),Qc(516,`td`,21),Sk(517,`-`),Kg(),Qc(518,`td`,22)(519,`em`)(520,`strong`),Sk(521,`(opcional)`),Kg()(),Qc(522,`p`),Sk(523,`Label do campo`),Kg()()(),Qc(524,`tr`,42)(525,`td`,15)(526,`div`,24)(527,`span`,25),Sk(528,` p-label-text-wrap`),vu(529,`br`),Kg()()(),Qc(530,`td`,19)(531,`code`,28),Sk(532,`boolean`),Kg()(),Qc(533,`td`,21)(534,`p`)(535,`code`),Sk(536,`false`),Kg()()(),Qc(537,`td`,22)(538,`em`)(539,`strong`),Sk(540,`(opcional)`),Kg()(),Qc(541,`p`),Sk(542,`Habilita a quebra automática do texto da propriedade `),Qc(543,`code`),Sk(544,`p-label`),Kg(),Sk(545,`. Quando `),Qc(546,`code`),Sk(547,`p-label-text-wrap`),Kg(),Sk(548,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(549,`tr`,43)(550,`td`,15)(551,`div`,24)(552,`span`,25),Sk(553,` name`),vu(554,`br`),Kg()()(),Qc(555,`td`,19)(556,`code`,26),Sk(557,`string`),Kg()(),Qc(558,`td`,21),Sk(559,`-`),Kg(),Qc(560,`td`,22)(561,`p`),Sk(562,`Nome dos checkboxes`),Kg()()(),Qc(563,`tr`,44)(564,`td`,15)(565,`div`,16)(566,`span`,17),Sk(567,` (ngModelChange)`),vu(568,`br`),Kg()()(),Qc(569,`td`,19)(570,`code`,20),Sk(571,`EventEmitter`),Kg()(),Qc(572,`td`,21),Sk(573,`-`),Kg(),Qc(574,`td`,22)(575,`em`)(576,`strong`),Sk(577,`(opcional)`),Kg()(),Qc(578,`p`),Sk(579,`Função para atualizar o `),Qc(580,`code`),Sk(581,`ngModel`),Kg(),Sk(582,` do componente, necessário quando não for utilizado dentro da tag form.`),Kg(),Qc(583,`p`),Sk(584,`Na versão 12.2.0 do Angular a verificação `),Qc(585,`code`),Sk(586,`strictTemplates`),Kg(),Sk(587,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Qc(588,`pre`)(589,`code`),Sk(590,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),Kg()()()(),Qc(591,`tr`,45)(592,`td`,15)(593,`div`,24)(594,`span`,25),Sk(595,` p-optional`),vu(596,`br`),Kg()()(),Qc(597,`td`,19)(598,`code`,28),Sk(599,`boolean`),Kg()(),Qc(600,`td`,21)(601,`p`)(602,`code`),Sk(603,`false`),Kg()()(),Qc(604,`td`,22)(605,`em`)(606,`strong`),Sk(607,`(opcional)`),Kg()(),Qc(608,`p`),Sk(609,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(610,`blockquote`)(611,`p`),Sk(612,`Não será exibida a indicação se:`),Kg()(),Qc(613,`ul`)(614,`li`),Sk(615,`O campo conter `),Qc(616,`code`),Sk(617,`p-required`),Kg(),Sk(618,`;`),Kg(),Qc(619,`li`),Sk(620,`Não possuir `),Qc(621,`code`),Sk(622,`p-help`),Kg(),Sk(623,` e/ou `),Qc(624,`code`),Sk(625,`p-label`),Kg(),Sk(626,`.`),Kg()()()(),Qc(627,`tr`,46)(628,`td`,15)(629,`div`,24)(630,`span`,25),Sk(631,` p-options`),vu(632,`br`),Kg()()(),Qc(633,`td`,19)(634,`code`,47),Sk(635,`PoCheckboxGroupOption[]`),Kg()(),Qc(636,`td`,21),Sk(637,`-`),Kg(),Qc(638,`td`,22)(639,`em`)(640,`strong`),Sk(641,`(opcional)`),Kg()(),Qc(642,`p`),Sk(643,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),Kg()()(),Qc(644,`tr`,48)(645,`td`,15)(646,`div`,24)(647,`span`,25),Sk(648,` p-helper`),vu(649,`br`),Kg()()(),Qc(650,`td`,19)(651,`code`,49),Sk(652,`PoHelperOptions `),Kg(),Qc(653,`code`,26),Sk(654,` string`),Kg()(),Qc(655,`td`,21),Sk(656,`-`),Kg(),Qc(657,`td`,22)(658,`em`)(659,`strong`),Sk(660,`(opcional)`),Kg()(),Qc(661,`p`),Sk(662,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(663,`code`),Sk(664,`p-label`),Kg(),Sk(665,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(666,`code`),Sk(667,`p-label`),Kg(),Sk(668,`.`),Kg(),Qc(669,`blockquote`)(670,`p`),Sk(671,`Para mais informações acesse: `),Qc(672,`a`,50),Sk(673,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(674,`.`),Kg()(),Qc(675,`blockquote`)(676,`p`),Sk(677,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(678,`code`),Sk(679,`p-additional-help-tooltip`),Kg(),Sk(680,` e `),Qc(681,`code`),Sk(682,`p-additional-help`),Kg(),Sk(683,`) será ignorado.`),Kg()()()(),Qc(684,`tr`,51)(685,`td`,15)(686,`div`,24)(687,`span`,25),Sk(688,` p-required`),vu(689,`br`),Kg()()(),Qc(690,`td`,19)(691,`code`,28),Sk(692,`boolean`),Kg()(),Qc(693,`td`,21)(694,`p`)(695,`code`),Sk(696,`false`),Kg()()(),Qc(697,`td`,22)(698,`em`)(699,`strong`),Sk(700,`(opcional)`),Kg()(),Qc(701,`p`),Sk(702,`Define que o campo será obrigatório.`),Kg()()(),Qc(703,`tr`,52)(704,`td`,15)(705,`div`,24)(706,`span`,25),Sk(707,` p-show-required`),vu(708,`br`),Kg()()(),Qc(709,`td`,19)(710,`code`,28),Sk(711,`boolean`),Kg()(),Qc(712,`td`,21),Sk(713,`-`),Kg(),Qc(714,`td`,22)(715,`p`),Sk(716,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(717,`blockquote`)(718,`p`),Sk(719,`Não será exibida a indicação se:`),Kg()(),Qc(720,`ul`)(721,`li`),Sk(722,`Não possuir `),Qc(723,`code`),Sk(724,`p-help`),Kg(),Sk(725,` e/ou `),Qc(726,`code`),Sk(727,`p-label`),Kg(),Sk(728,`.`),Kg()()()(),Qc(729,`tr`,53)(730,`td`,15)(731,`div`,24)(732,`span`,25),Sk(733,` p-size`),vu(734,`br`),Kg()()(),Qc(735,`td`,19)(736,`code`,26),Sk(737,`string`),Kg()(),Qc(738,`td`,21)(739,`p`)(740,`code`),Sk(741,`medium`),Kg()()(),Qc(742,`td`,22)(743,`em`)(744,`strong`),Sk(745,`(opcional)`),Kg()(),Qc(746,`p`),Sk(747,`Define o tamanho dos checkboxes do componente:`),Kg(),Qc(748,`ul`)(749,`li`)(750,`code`),Sk(751,`small`),Kg(),Sk(752,`: 16x16 (disponível apenas para acessibilidade AA).`),Kg(),Qc(753,`li`)(754,`code`),Sk(755,`medium`),Kg(),Sk(756,`: 24x24.`),Kg()(),Qc(757,`blockquote`)(758,`p`),Sk(759,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(760,`code`),Sk(761,`medium`),Kg(),Sk(762,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(763,`a`,54),Sk(764,`po-theme`),Kg(),Sk(765,`.`),Kg()()()()(),Qc(766,`h3`,10),Sk(767,`Métodos`),Kg(),Qc(768,`table`,55)(769,`tr`,56)(770,`th`,57)(771,`div`,24)(772,`h4`)(773,`span`,25),Sk(774,` focus `),Kg()()()()(),Qc(775,`tr`,22)(776,`td`,22)(777,`p`),Sk(778,`Função que atribui foco ao componente.`),Kg(),Qc(779,`p`),Sk(780,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(781,`pre`)(782,`code`),Sk(783,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),Kg()()()()(),vu(784,`br`),Qc(785,`table`,58)(786,`tr`,56)(787,`th`,57)(788,`div`,24)(789,`h4`)(790,`span`,25),Sk(791,` showAdditionalHelp `),Kg()()()()(),Qc(792,`tr`,22)(793,`td`,22)(794,`p`),Sk(795,`Método que exibe `),Qc(796,`code`),Sk(797,`p-helper`),Kg(),Sk(798,` ou executa a ação definida em `),Qc(799,`code`),Sk(800,`p-helper{eventOnClick}`),Kg(),Sk(801,` ou em `),Qc(802,`code`),Sk(803,`p-additionalHelp`),Kg(),Sk(804,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(805,`code`),Sk(806,`p-keydown`),Kg(),Sk(807,`.`),Kg(),Qc(808,`blockquote`)(809,`p`),Sk(810,`Exibe ou oculta o conteúdo do componente `),Qc(811,`code`),Sk(812,`po-helper`),Kg(),Sk(813,` quando o componente estiver com foco.`),Kg()(),Qc(814,`pre`)(815,`code`),Sk(816,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),Kg()(),Qc(817,`pre`)(818,`code`),Sk(819,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(820,`br`),Qc(821,`h3`),Sk(822,`Interfaces`),Kg(),Qc(823,`h4`,59)(824,`code`,5),Sk(825,`PoCheckboxGroupOption`),Kg()(),Qc(826,`div`,2)(827,`p`),Sk(828,`Interface para as ações do componente po-checkbox-group.`),Kg()(),Qc(829,`h4`,10),Sk(830,`Propriedades`),Kg(),Qc(831,`table`,11)(832,`tr`,12)(833,`th`,13),Sk(834,`Nome`),Kg(),Qc(835,`th`,13),Sk(836,`Tipo`),Kg(),Qc(837,`th`,13),Sk(838,`Descrição`),Kg()(),Qc(839,`tr`,60)(840,`td`,15)(841,`div`,24)(842,`span`,25),Sk(843,` disabled`),vu(844,`br`),Kg()()(),Qc(845,`td`,19)(846,`code`,28),Sk(847,`boolean`),Kg()(),Qc(848,`td`,22)(849,`em`)(850,`strong`),Sk(851,`(opcional)`),Kg()(),Qc(852,`p`),Sk(853,`Desabilita o checkbox, por padrão as opções sempre estarão habilitadas para o usuário.`),Kg(),Qc(854,`p`),Sk(855,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),Kg()()(),Qc(856,`tr`,61)(857,`td`,15)(858,`div`,24)(859,`span`,25),Sk(860,` label`),vu(861,`br`),Kg()()(),Qc(862,`td`,19)(863,`code`,26),Sk(864,`string`),Kg()(),Qc(865,`td`,22)(866,`p`),Sk(867,`Texto exibido para o usuário ao lado do checkbox.`),Kg()()(),Qc(868,`tr`,62)(869,`td`,15)(870,`div`,24)(871,`span`,25),Sk(872,` value`),vu(873,`br`),Kg()()(),Qc(874,`td`,19)(875,`code`,26),Sk(876,`string`),Kg()(),Qc(877,`td`,22)(878,`p`),Sk(879,`Valor retornado no model.`),Kg(),Qc(880,`p`),Sk(881,`É possível usar os valores `),Qc(882,`code`),Sk(883,`true`),Kg(),Sk(884,` e `),Qc(885,`code`),Sk(886,`false`),Kg(),Sk(887,`, caso a propriedade `),Qc(888,`code`),Sk(889,`p-indeterminate`),Kg(),Sk(890,` esteja setada como `),Qc(891,`code`),Sk(892,`true`),Kg(),Sk(893,`
passa a aceitar `),Qc(894,`code`),Sk(895,`null`),Kg(),Sk(896,` também, por padrão esse valor sempre será setado como `),Qc(897,`code`),Sk(898,`false`),Kg(),Sk(899,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function _e(l,I){if(l&1&&(Qc(0,`div`,1),vu(1,`sample-po-checkbox-group-basic-view`)(2,`sample-po-checkbox-group-labs-view`)(3,`sample-po-checkbox-group-password-policy-view`),Kg()),l&2){let r=ek();Rb(`hidden`,r.activeTab!==`web`)}}var Ge=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Checkbox Group`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Checkbox Group · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(p,n){p&1&&(Qc(0,`po-page-default`,0),FO(1,_e,4,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-checkbox-group-doc`),Kg()()),p&2&&(Rb(`p-title`,n.title)(`p-actions`,n.actions),wg(),VO(n.hidePoWebSample?-1:1),wg(),Rb(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,de,se,ue,be],encapsulation:2,changeDetection:1})}return l})()}];var he=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[GV.forChild(Ge),GV]})}return l})();var rt=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[M,he]})}return l})();export{rt as DocPoCheckboxGroupModule};
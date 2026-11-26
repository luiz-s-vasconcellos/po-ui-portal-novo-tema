import{m as P,p as M}from"./main-OAHE3DMQ.js";import{A as Goe,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,Oi as Vk,Pi as Wk,Pr as I,Qi as dF,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ca as ge$1,cr as Bk,ea as de$1,er as Ab,fn as oi,it as Ru,jr as H_,li as QL,nt as R4,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,zi as Yk,zr as KO}from"./chunk-CTJH0VS3.js";var Ee=()=>({value:`1`,label:`Option 1`});var ge=()=>({value:`2`,label:`Option 2`});var Se=(l,I)=>[l,I];var re=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`checkboxGroup`,`p-label`,`PO Checkbox Group`,3,`p-options`]],template:function(p,n){p&1&&_u(0,`po-checkbox-group`,0),p&2&&Ab(`p-options`,Bk(3,Se,Vk(1,Ee),Vk(2,ge)))},dependencies:[I4],encapsulation:2,changeDetection:1})}return l})();var de=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-checkbox-group-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Checkbox Group Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-checkbox-group-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,re],encapsulation:2,changeDetection:1})}return l})();var me=(()=>{class l{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`indeterminate`,label:`Indeterminate`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(r){this.event=r}restore(){this.helperText=``,this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-labs`]],standalone:!1,decls:26,vars:34,consts:[[`fOption`,`ngForm`],[`f`,`ngForm`],[`name`,`checkboxGroup`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-indeterminate`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-error-limit`,`p-show-required`,`p-label-text-wrap`,`p-compact-label`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionValue`,`p-clean`,``,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`optionLabel`,`p-clean`,``,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Option Disabled`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add option`,1,`po-lg-2`,`po-md-4`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(p,n){if(p&1){let c=KO();Jc(0,`po-checkbox-group`,2),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.checkboxGroup,a)||(n.checkboxGroup=a),H_(a)}),_t(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4),Wk(4,`json`),_u(5,`po-info`,5),Kg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.option.value,a)||(n.option.value=a),H_(a)}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.option.label,a)||(n.option.label=a),H_(a)}),Kg(),Jc(11,`po-switch`,8),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.option.disabled,a)||(n.option.disabled=a),H_(a)}),Kg(),Jc(12,`div`,3)(13,`po-button`,9),_t(`p-click`,function(){return n.addOption()}),Kg()()(),_u(14,`po-divider`),Jc(15,`form`,null,1)(17,`po-input`,10),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.label,a)||(n.label=a),H_(a)}),Kg(),Jc(18,`po-input`,11),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.help,a)||(n.help=a),H_(a)}),Kg(),Jc(19,`po-input`,12),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.helperText,a)||(n.helperText=a),H_(a)}),Kg(),Jc(20,`po-input`,13),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.fieldErrorMessage,a)||(n.fieldErrorMessage=a),H_(a)}),Kg(),Jc(21,`po-checkbox-group`,14),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.properties,a)||(n.properties=a),H_(a)}),Kg(),Jc(22,`po-radio-group`,15),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.columns,a)||(n.columns=a),H_(a)}),Kg(),Jc(23,`po-radio-group`,16),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.size,a)||(n.size=a),H_(a)}),Kg(),Jc(24,`div`,3)(25,`po-button`,17),_t(`p-click`,function(){return n.restore()}),Kg()()()}if(p&2){let c=ok(8);Kb(`ngModel`,n.checkboxGroup),Ab(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-indeterminate`,n.properties.includes(`indeterminate`))(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-show-required`,n.properties.includes(`showRequired`))(`p-label-text-wrap`,n.properties.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`))(`p-size`,n.size),q0(),wg(3),Ab(`p-value`,Yk(4,32,n.checkboxGroup)),wg(2),Ab(`p-value`,n.event),wg(4),Kb(`ngModel`,n.option.value),q0(),wg(),Kb(`ngModel`,n.option.label),q0(),wg(),Kb(`ngModel`,n.option.disabled),q0(),wg(2),Ab(`p-disabled`,c.invalid),wg(4),Kb(`ngModel`,n.label),q0(),wg(),Kb(`ngModel`,n.help),q0(),wg(),Kb(`ngModel`,n.helperText),q0(),wg(),Kb(`ngModel`,n.fieldErrorMessage),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.columns),Ab(`p-options`,n.columnOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizeOptions),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,R4,Joe,dF],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-checkbox-group-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Checkbox Group Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-checkbox-group-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-checkbox-group
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,me],encapsulation:2,changeDetection:1})}return l})();var ce=(()=>{class l{poNotification=p(Ru);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:`1`,label:`Functional menu`},{value:`2`,label:`Online panel`},{value:`3`,label:`Internet browser`},{value:`4`,label:`Browser details`},{value:`5`,label:`Transparent panel`},{value:`6`,label:`Browser refresh`}];systemOptions=[{value:`1`,label:`Audit updates in the data dictionary`},{value:`2`,label:`Audit updates in the user registry`},{value:`3`,label:`Audit authentication / access`},{value:`4`,label:`Audit rejection of access to resources`}];confirm(){this.poNotification.success(`Settings saved successfully!`)}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-password-policy`]],standalone:!1,decls:19,vars:7,consts:[[`g`,`ngForm`],[1,`po-font-subtitle`],[1,`po-row`],[`name`,`system`,`p-label`,`System features`,1,`po-lg-12`,3,`p-options`],[`name`,`audit`,`p-label`,`Audit rules`,1,`po-lg-12`,3,`p-options`],[`name`,`expiration`,`p-label`,`Password expiration`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`periodExpiration`,`p-label`,`Period (in days)`,`p-maxlength`,`3`,1,`po-lg-6`,3,`p-disabled`],[`name`,`attempts`,`p-label`,`Restrict access attempts`,`p-label-off`,`Desactive`,`p-label-on`,`Actived`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxAttempts`,`p-label`,`Maximum number of attempts`,`p-maxlength`,`3`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Apply password policy`,1,`po-offset-lg-9`,`po-lg-3`,`po-offset-xl-9`,3,`p-click`]],template:function(p,n){if(p&1){let c=KO();Jc(0,`div`,1),Mk(1,`Password Rules`),Kg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,2),_u(6,`po-checkbox-group`,3),Kg(),_u(7,`po-divider`),Jc(8,`div`,2),_u(9,`po-checkbox-group`,4),Kg(),_u(10,`po-divider`),Jc(11,`div`,2)(12,`po-switch`,5),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.expiration,a)||(n.expiration=a),H_(a)}),Kg(),_u(13,`po-number`,6),Kg(),Jc(14,`div`,2)(15,`po-switch`,7),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.attempts,a)||(n.attempts=a),H_(a)}),Kg(),Jc(16,`po-number`,8),G0(),Zb(`ngModelChange`,function(a){return U_(c),Rk(n.maxAttempts,a)||(n.maxAttempts=a),H_(a)}),Kg()(),Jc(17,`div`,2)(18,`po-button`,9),_t(`p-click`,function(){return n.confirm()}),Kg()()()}p&2&&(wg(6),Ab(`p-options`,n.systemOptions),wg(3),Ab(`p-options`,n.auditOptions),wg(3),Kb(`ngModel`,n.expiration),q0(),wg(),Ab(`p-disabled`,!n.expiration),wg(2),Kb(`ngModel`,n.attempts),q0(),wg(),Kb(`ngModel`,n.maxAttempts),Ab(`p-disabled`,!n.attempts),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,Goe,R4],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-password-policy-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-checkbox-group-password-policy`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(p,n){p&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Checkbox Group – Security policy`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-checkbox-group-password-policy`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-font-subtitle">Password Rules</div>

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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(p){return new(p||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-checkbox-group-doc`]],standalone:!1,decls:900,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-checkbox-group-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-radio-group`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-indeterminate`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoCheckboxGroupOption[]`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-checkbox-group-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-checkbox-group-option-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-checkbox-group-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-checkbox-group-option-value`,1,`docs-api-properties-row`]],template:function(p,n){p&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoCheckboxGroupComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,`O componente `),Jc(24,`code`),Mk(25,`po-checkbox-group`),Kg(),Mk(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),Kg(),Jc(27,`blockquote`)(28,`p`),Mk(29,`Para seleção única, utilize o `),Jc(30,`a`,6)(31,`strong`),Mk(32,`PO Radio Group`),Kg()(),Mk(33,`.`),Kg()(),Jc(34,`p`),Mk(35,`Por padrão, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model.`),Kg(),Jc(36,`pre`)(37,`code`),Mk(38,`favorites = ['PO', 'Angular'];
`),Kg()(),Jc(39,`p`),Mk(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),Jc(41,`code`),Mk(42,`null`),Kg(),Mk(43,`), ou seja, nem marcado (`),Jc(44,`code`),Mk(45,`true`),Kg(),Mk(46,`) e nem desmarcado (`),Jc(47,`code`),Mk(48,`false`),Kg(),Mk(49,`),
deve setar a propriedade `),Jc(50,`code`),Mk(51,`p-indeterminate`),Kg(),Mk(52,` como `),Jc(53,`code`),Mk(54,`true`),Kg(),Mk(55,`.`),Kg(),Jc(56,`p`),Mk(57,`Nesse caso, o po-checkbox-group vai retornar um objeto com todas as opções disponíveis e seus valores.`),Kg(),Jc(58,`pre`)(59,`code`),Mk(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),Kg()()(),Jc(61,`div`,7)(62,`h4`,8),Mk(63,`Seletor`),Kg(),Jc(64,`pre`,9),Mk(65,`<po-checkbox-group
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
`),Kg()(),Jc(66,`h4`,10),Mk(67,`Propriedades`),Kg(),Jc(68,`table`,11)(69,`tr`,12)(70,`th`,13),Mk(71,`Nome`),Kg(),Jc(72,`th`,13),Mk(73,`Tipo`),Kg(),Jc(74,`th`,13),Mk(75,`Padrão`),Kg(),Jc(76,`th`,13),Mk(77,`Descrição`),Kg()(),Jc(78,`tr`,14)(79,`td`,15)(80,`div`,16)(81,`span`,17),Mk(82,` (p-additional-help)`),_u(83,`br`),Kg()(),Jc(84,`div`,18),Mk(85,`Deprecated`),Kg()(),Jc(86,`td`,19)(87,`code`,20),Mk(88,`EventEmitter`),Kg()(),Jc(89,`td`,21),Mk(90,`-`),Kg(),Jc(91,`td`,22)(92,`em`)(93,`strong`),Mk(94,`(opcional)`),Kg()(),Jc(95,`p`),Mk(96,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(97,`blockquote`)(98,`p`),Mk(99,`Essa propriedade está `),Jc(100,`strong`),Mk(101,`depreciada`),Kg(),Mk(102,` e será removida na versão `),Jc(103,`code`),Mk(104,`23.x.x`),Kg(),Mk(105,`. Recomendamos utilizar a propriedade `),Jc(106,`code`),Mk(107,`p-helper`),Kg(),Mk(108,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(109,`tr`,23)(110,`td`,15)(111,`div`,24)(112,`span`,25),Mk(113,` p-additional-help-tooltip`),_u(114,`br`),Kg()(),Jc(115,`div`,18),Mk(116,`Deprecated`),Kg()(),Jc(117,`td`,19)(118,`code`,26),Mk(119,`string`),Kg()(),Jc(120,`td`,21),Mk(121,`-`),Kg(),Jc(122,`td`,22)(123,`em`)(124,`strong`),Mk(125,`(opcional)`),Kg()(),Jc(126,`p`),Mk(127,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(128,`code`),Mk(129,`po-helper`),Kg(),Mk(130,`.
`),Jc(131,`strong`),Mk(132,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(133,`blockquote`)(134,`p`),Mk(135,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(136,`blockquote`)(137,`p`),Mk(138,`Essa propriedade está `),Jc(139,`strong`),Mk(140,`depreciada`),Kg(),Mk(141,` e será removida na versão `),Jc(142,`code`),Mk(143,`23.x.x`),Kg(),Mk(144,`. Recomendamos utilizar a propriedade `),Jc(145,`code`),Mk(146,`p-helper`),Kg(),Mk(147,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(148,`tr`,27)(149,`td`,15)(150,`div`,24)(151,`span`,25),Mk(152,` p-append-in-body`),_u(153,`br`),Kg()()(),Jc(154,`td`,19)(155,`code`,28),Mk(156,`boolean`),Kg()(),Jc(157,`td`,21)(158,`p`)(159,`code`),Mk(160,`false`),Kg()()(),Jc(161,`td`,22)(162,`em`)(163,`strong`),Mk(164,`(opcional)`),Kg()(),Jc(165,`p`),Mk(166,`Define que o popover (`),Jc(167,`code`),Mk(168,`p-helper`),Kg(),Mk(169,` e/ou `),Jc(170,`code`),Mk(171,`p-error-limit`),Kg(),Mk(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Jc(173,`blockquote`)(174,`p`),Mk(175,`Quando utilizado com `),Jc(176,`code`),Mk(177,`p-helper`),Kg(),Mk(178,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(179,`tr`,29)(180,`td`,15)(181,`div`,24)(182,`span`,25),Mk(183,` p-auto-focus`),_u(184,`br`),Kg()()(),Jc(185,`td`,19)(186,`code`,28),Mk(187,`boolean`),Kg()(),Jc(188,`td`,21)(189,`p`)(190,`code`),Mk(191,`false`),Kg()()(),Jc(192,`td`,22)(193,`em`)(194,`strong`),Mk(195,`(opcional)`),Kg()(),Jc(196,`p`),Mk(197,`Aplica foco no elemento ao ser iniciado.`),Kg(),Jc(198,`blockquote`)(199,`p`),Mk(200,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Jc(201,`tr`,30)(202,`td`,15)(203,`div`,16)(204,`span`,17),Mk(205,` (p-change)`),_u(206,`br`),Kg()()(),Jc(207,`td`,19)(208,`code`,20),Mk(209,`EventEmitter`),Kg()(),Jc(210,`td`,21),Mk(211,`-`),Kg(),Jc(212,`td`,22)(213,`em`)(214,`strong`),Mk(215,`(opcional)`),Kg()(),Jc(216,`p`),Mk(217,`Evento disparado ao alterar valor do campo`),Kg()()(),Jc(218,`tr`,31)(219,`td`,15)(220,`div`,16)(221,`span`,17),Mk(222,` (p-change-model)`),_u(223,`br`),Kg()()(),Jc(224,`td`,19)(225,`code`,20),Mk(226,`EventEmitter`),Kg()(),Jc(227,`td`,21),Mk(228,`-`),Kg(),Jc(229,`td`,22)(230,`em`)(231,`strong`),Mk(232,`(opcional)`),Kg()(),Jc(233,`p`),Mk(234,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(235,`code`),Mk(236,`setValue`),Kg(),Mk(237,`, `),Jc(238,`code`),Mk(239,`patchValue`),Kg(),Mk(240,`, carregamento assíncrono).`),Kg(),Jc(241,`p`),Mk(242,`Diferentemente do `),Jc(243,`code`),Mk(244,`p-change`),Kg(),Mk(245,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(246,`code`),Mk(247,`p-change-model`),Kg(),Mk(248,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(249,`p`),Mk(250,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(251,`tr`,32)(252,`td`,15)(253,`div`,24)(254,`span`,25),Mk(255,` p-columns`),_u(256,`br`),Kg()()(),Jc(257,`td`,19)(258,`code`,33),Mk(259,`number`),Kg()(),Jc(260,`td`,21)(261,`p`)(262,`code`),Mk(263,`2`),Kg()()(),Jc(264,`td`,22)(265,`em`)(266,`strong`),Mk(267,`(opcional)`),Kg()(),Jc(268,`p`),Mk(269,`Possibilita definir a quantidade de colunas para exibição dos itens do `),Jc(270,`em`),Mk(271,`checkbox`),Kg(),Mk(272,`.`),Kg(),Jc(273,`ul`)(274,`li`),Mk(275,`É possível exibir as opções entre `),Jc(276,`code`),Mk(277,`1`),Kg(),Mk(278,` e `),Jc(279,`code`),Mk(280,`4`),Kg(),Mk(281,` colunas.`),Kg(),Jc(282,`li`),Mk(283,`Para resolução `),Jc(284,`code`),Mk(285,`sm`),Kg(),Mk(286,` a colunagem invariavelmente passa para `),Jc(287,`code`),Mk(288,`1`),Kg(),Mk(289,` coluna.`),Kg(),Jc(290,`li`),Mk(291,`Quando se trata de resolução `),Jc(292,`code`),Mk(293,`md`),Kg(),Mk(294,` e o valor estabelecido para colunas for superior a `),Jc(295,`code`),Mk(296,`2`),Kg(),Mk(297,`,
o `),Jc(298,`em`),Mk(299,`grid system`),Kg(),Mk(300,` será composto por `),Jc(301,`code`),Mk(302,`2`),Kg(),Mk(303,` colunas.`),Kg(),Jc(304,`li`),Mk(305,`Para evitar a quebra de linha, prefira a utilização de `),Jc(306,`code`),Mk(307,`1`),Kg(),Mk(308,` coluna para opções com textos grandes.`),Kg()()()(),Jc(309,`tr`,34)(310,`td`,15)(311,`div`,24)(312,`span`,25),Mk(313,` p-compact-label`),_u(314,`br`),Kg()()(),Jc(315,`td`,19)(316,`code`,28),Mk(317,`boolean`),Kg()(),Jc(318,`td`,21)(319,`p`)(320,`code`),Mk(321,`false`),Kg()()(),Jc(322,`td`,22)(323,`em`)(324,`strong`),Mk(325,`(opcional)`),Kg()(),Jc(326,`p`),Mk(327,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(328,`p`),Mk(329,`Quando habilitado (`),Jc(330,`code`),Mk(331,`true`),Kg(),Mk(332,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(333,`ul`)(334,`li`)(335,`code`),Mk(336,`po-label`),Kg()(),Jc(337,`li`)(338,`code`),Mk(339,`p-requirement (showRequired)`),Kg()(),Jc(340,`li`)(341,`code`),Mk(342,`po-helper`),Kg()()(),Jc(343,`p`),Mk(344,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(345,`p`),Mk(346,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(347,`ul`)(348,`li`)(349,`code`),Mk(350,`--field-container-title-justify`),Kg()(),Jc(351,`li`)(352,`code`),Mk(353,`--field-container-title-flex`),Kg()()(),Jc(354,`p`),Mk(355,`Exemplo:`),Kg(),Jc(356,`pre`)(357,`code`),Mk(358,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(359,`p`),Mk(360,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(361,`tr`,35)(362,`td`,15)(363,`div`,24)(364,`span`,25),Mk(365,` p-disabled`),_u(366,`br`),Kg()()(),Jc(367,`td`,19)(368,`code`,28),Mk(369,`boolean`),Kg()(),Jc(370,`td`,21)(371,`p`)(372,`code`),Mk(373,`false`),Kg()()(),Jc(374,`td`,22)(375,`em`)(376,`strong`),Mk(377,`(opcional)`),Kg()(),Jc(378,`p`),Mk(379,`Desabilita todos os itens do checkbox.`),Kg()()(),Jc(380,`tr`,36)(381,`td`,15)(382,`div`,24)(383,`span`,25),Mk(384,` p-error-limit`),_u(385,`br`),Kg()()(),Jc(386,`td`,19)(387,`code`,28),Mk(388,`boolean`),Kg()(),Jc(389,`td`,21)(390,`p`)(391,`code`),Mk(392,`false`),Kg()()(),Jc(393,`td`,22)(394,`em`)(395,`strong`),Mk(396,`(opcional)`),Kg()(),Jc(397,`p`),Mk(398,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(399,`blockquote`)(400,`p`),Mk(401,`Caso essa propriedade seja definida como `),Jc(402,`code`),Mk(403,`true`),Kg(),Mk(404,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Jc(405,`tr`,37)(406,`td`,15)(407,`div`,24)(408,`span`,25),Mk(409,` p-field-error-message`),_u(410,`br`),Kg()()(),Jc(411,`td`,19)(412,`code`,26),Mk(413,`string`),Kg()(),Jc(414,`td`,21),Mk(415,`-`),Kg(),Jc(416,`td`,22)(417,`em`)(418,`strong`),Mk(419,`(opcional)`),Kg()(),Jc(420,`p`),Mk(421,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Jc(422,`blockquote`)(423,`p`),Mk(424,`Necessário que a propriedade `),Jc(425,`code`),Mk(426,`p-required`),Kg(),Mk(427,` esteja habilitada.`),Kg()()()(),Jc(428,`tr`,38)(429,`td`,15)(430,`div`,24)(431,`span`,25),Mk(432,` p-help`),_u(433,`br`),Kg()()(),Jc(434,`td`,19)(435,`code`,26),Mk(436,`string`),Kg()(),Jc(437,`td`,21),Mk(438,`-`),Kg(),Jc(439,`td`,22)(440,`em`)(441,`strong`),Mk(442,`(opcional)`),Kg()(),Jc(443,`p`),Mk(444,`Texto de apoio do campo`),Kg()()(),Jc(445,`tr`,39)(446,`td`,15)(447,`div`,24)(448,`span`,25),Mk(449,` p-indeterminate`),_u(450,`br`),Kg()()(),Jc(451,`td`,19)(452,`code`,28),Mk(453,`boolean`),Kg()(),Jc(454,`td`,21)(455,`p`)(456,`code`),Mk(457,`false`),Kg()()(),Jc(458,`td`,22)(459,`em`)(460,`strong`),Mk(461,`(opcional)`),Kg()(),Jc(462,`p`),Mk(463,`Caso exista a necessidade de usar o valor indeterminado (`),Jc(464,`code`),Mk(465,`null`),Kg(),Mk(466,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),Jc(467,`code`),Mk(468,`p-indeterminate`),Kg(),Mk(469,` como `),Jc(470,`code`),Mk(471,`true`),Kg(),Mk(472,`, por padrão essa propriedade vem desabilitada (`),Jc(473,`code`),Mk(474,`false`),Kg(),Mk(475,`).`),Kg(),Jc(476,`p`),Mk(477,`Quando essa propriedade é setada como `),Jc(478,`code`),Mk(479,`true`),Kg(),Mk(480,`, o `),Jc(481,`em`),Mk(482,`po-checkbox-group`),Kg(),Mk(483,` passa a devolver um objeto completo para o
`),Jc(484,`code`),Mk(485,`ngModel`),Kg(),Mk(486,`, diferente do array que contém apenas os valores selecionados.`),Kg()()(),Jc(487,`tr`,40)(488,`td`,15)(489,`div`,16)(490,`span`,17),Mk(491,` (p-keydown)`),_u(492,`br`),Kg()()(),Jc(493,`td`,19)(494,`code`,20),Mk(495,`EventEmitter`),Kg()(),Jc(496,`td`,21),Mk(497,`-`),Kg(),Jc(498,`td`,22)(499,`em`)(500,`strong`),Mk(501,`(opcional)`),Kg()(),Jc(502,`p`),Mk(503,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(504,`code`),Mk(505,`KeyboardEvent`),Kg(),Mk(506,` com informações sobre a tecla.`),Kg()()(),Jc(507,`tr`,41)(508,`td`,15)(509,`div`,24)(510,`span`,25),Mk(511,` p-label`),_u(512,`br`),Kg()()(),Jc(513,`td`,19)(514,`code`,26),Mk(515,`string`),Kg()(),Jc(516,`td`,21),Mk(517,`-`),Kg(),Jc(518,`td`,22)(519,`em`)(520,`strong`),Mk(521,`(opcional)`),Kg()(),Jc(522,`p`),Mk(523,`Label do campo`),Kg()()(),Jc(524,`tr`,42)(525,`td`,15)(526,`div`,24)(527,`span`,25),Mk(528,` p-label-text-wrap`),_u(529,`br`),Kg()()(),Jc(530,`td`,19)(531,`code`,28),Mk(532,`boolean`),Kg()(),Jc(533,`td`,21)(534,`p`)(535,`code`),Mk(536,`false`),Kg()()(),Jc(537,`td`,22)(538,`em`)(539,`strong`),Mk(540,`(opcional)`),Kg()(),Jc(541,`p`),Mk(542,`Habilita a quebra automática do texto da propriedade `),Jc(543,`code`),Mk(544,`p-label`),Kg(),Mk(545,`. Quando `),Jc(546,`code`),Mk(547,`p-label-text-wrap`),Kg(),Mk(548,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(549,`tr`,43)(550,`td`,15)(551,`div`,24)(552,`span`,25),Mk(553,` name`),_u(554,`br`),Kg()()(),Jc(555,`td`,19)(556,`code`,26),Mk(557,`string`),Kg()(),Jc(558,`td`,21),Mk(559,`-`),Kg(),Jc(560,`td`,22)(561,`p`),Mk(562,`Nome dos checkboxes`),Kg()()(),Jc(563,`tr`,44)(564,`td`,15)(565,`div`,16)(566,`span`,17),Mk(567,` (ngModelChange)`),_u(568,`br`),Kg()()(),Jc(569,`td`,19)(570,`code`,20),Mk(571,`EventEmitter`),Kg()(),Jc(572,`td`,21),Mk(573,`-`),Kg(),Jc(574,`td`,22)(575,`em`)(576,`strong`),Mk(577,`(opcional)`),Kg()(),Jc(578,`p`),Mk(579,`Função para atualizar o `),Jc(580,`code`),Mk(581,`ngModel`),Kg(),Mk(582,` do componente, necessário quando não for utilizado dentro da tag form.`),Kg(),Jc(583,`p`),Mk(584,`Na versão 12.2.0 do Angular a verificação `),Jc(585,`code`),Mk(586,`strictTemplates`),Kg(),Mk(587,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Jc(588,`pre`)(589,`code`),Mk(590,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),Kg()()()(),Jc(591,`tr`,45)(592,`td`,15)(593,`div`,24)(594,`span`,25),Mk(595,` p-optional`),_u(596,`br`),Kg()()(),Jc(597,`td`,19)(598,`code`,28),Mk(599,`boolean`),Kg()(),Jc(600,`td`,21)(601,`p`)(602,`code`),Mk(603,`false`),Kg()()(),Jc(604,`td`,22)(605,`em`)(606,`strong`),Mk(607,`(opcional)`),Kg()(),Jc(608,`p`),Mk(609,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(610,`blockquote`)(611,`p`),Mk(612,`Não será exibida a indicação se:`),Kg()(),Jc(613,`ul`)(614,`li`),Mk(615,`O campo conter `),Jc(616,`code`),Mk(617,`p-required`),Kg(),Mk(618,`;`),Kg(),Jc(619,`li`),Mk(620,`Não possuir `),Jc(621,`code`),Mk(622,`p-help`),Kg(),Mk(623,` e/ou `),Jc(624,`code`),Mk(625,`p-label`),Kg(),Mk(626,`.`),Kg()()()(),Jc(627,`tr`,46)(628,`td`,15)(629,`div`,24)(630,`span`,25),Mk(631,` p-options`),_u(632,`br`),Kg()()(),Jc(633,`td`,19)(634,`code`,47),Mk(635,`PoCheckboxGroupOption[]`),Kg()(),Jc(636,`td`,21),Mk(637,`-`),Kg(),Jc(638,`td`,22)(639,`em`)(640,`strong`),Mk(641,`(opcional)`),Kg()(),Jc(642,`p`),Mk(643,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),Kg()()(),Jc(644,`tr`,48)(645,`td`,15)(646,`div`,24)(647,`span`,25),Mk(648,` p-helper`),_u(649,`br`),Kg()()(),Jc(650,`td`,19)(651,`code`,49),Mk(652,`PoHelperOptions `),Kg(),Jc(653,`code`,26),Mk(654,` string`),Kg()(),Jc(655,`td`,21),Mk(656,`-`),Kg(),Jc(657,`td`,22)(658,`em`)(659,`strong`),Mk(660,`(opcional)`),Kg()(),Jc(661,`p`),Mk(662,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(663,`code`),Mk(664,`p-label`),Kg(),Mk(665,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(666,`code`),Mk(667,`p-label`),Kg(),Mk(668,`.`),Kg(),Jc(669,`blockquote`)(670,`p`),Mk(671,`Para mais informações acesse: `),Jc(672,`a`,50),Mk(673,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(674,`.`),Kg()(),Jc(675,`blockquote`)(676,`p`),Mk(677,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(678,`code`),Mk(679,`p-additional-help-tooltip`),Kg(),Mk(680,` e `),Jc(681,`code`),Mk(682,`p-additional-help`),Kg(),Mk(683,`) será ignorado.`),Kg()()()(),Jc(684,`tr`,51)(685,`td`,15)(686,`div`,24)(687,`span`,25),Mk(688,` p-required`),_u(689,`br`),Kg()()(),Jc(690,`td`,19)(691,`code`,28),Mk(692,`boolean`),Kg()(),Jc(693,`td`,21)(694,`p`)(695,`code`),Mk(696,`false`),Kg()()(),Jc(697,`td`,22)(698,`em`)(699,`strong`),Mk(700,`(opcional)`),Kg()(),Jc(701,`p`),Mk(702,`Define que o campo será obrigatório.`),Kg()()(),Jc(703,`tr`,52)(704,`td`,15)(705,`div`,24)(706,`span`,25),Mk(707,` p-show-required`),_u(708,`br`),Kg()()(),Jc(709,`td`,19)(710,`code`,28),Mk(711,`boolean`),Kg()(),Jc(712,`td`,21),Mk(713,`-`),Kg(),Jc(714,`td`,22)(715,`p`),Mk(716,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Jc(717,`blockquote`)(718,`p`),Mk(719,`Não será exibida a indicação se:`),Kg()(),Jc(720,`ul`)(721,`li`),Mk(722,`Não possuir `),Jc(723,`code`),Mk(724,`p-help`),Kg(),Mk(725,` e/ou `),Jc(726,`code`),Mk(727,`p-label`),Kg(),Mk(728,`.`),Kg()()()(),Jc(729,`tr`,53)(730,`td`,15)(731,`div`,24)(732,`span`,25),Mk(733,` p-size`),_u(734,`br`),Kg()()(),Jc(735,`td`,19)(736,`code`,26),Mk(737,`string`),Kg()(),Jc(738,`td`,21)(739,`p`)(740,`code`),Mk(741,`medium`),Kg()()(),Jc(742,`td`,22)(743,`em`)(744,`strong`),Mk(745,`(opcional)`),Kg()(),Jc(746,`p`),Mk(747,`Define o tamanho dos checkboxes do componente:`),Kg(),Jc(748,`ul`)(749,`li`)(750,`code`),Mk(751,`small`),Kg(),Mk(752,`: 16x16 (disponível apenas para acessibilidade AA).`),Kg(),Jc(753,`li`)(754,`code`),Mk(755,`medium`),Kg(),Mk(756,`: 24x24.`),Kg()(),Jc(757,`blockquote`)(758,`p`),Mk(759,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(760,`code`),Mk(761,`medium`),Kg(),Mk(762,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(763,`a`,54),Mk(764,`po-theme`),Kg(),Mk(765,`.`),Kg()()()()(),Jc(766,`h3`,10),Mk(767,`Métodos`),Kg(),Jc(768,`table`,55)(769,`tr`,56)(770,`th`,57)(771,`div`,24)(772,`h4`)(773,`span`,25),Mk(774,` focus `),Kg()()()()(),Jc(775,`tr`,22)(776,`td`,22)(777,`p`),Mk(778,`Função que atribui foco ao componente.`),Kg(),Jc(779,`p`),Mk(780,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(781,`pre`)(782,`code`),Mk(783,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),Kg()()()()(),_u(784,`br`),Jc(785,`table`,58)(786,`tr`,56)(787,`th`,57)(788,`div`,24)(789,`h4`)(790,`span`,25),Mk(791,` showAdditionalHelp `),Kg()()()()(),Jc(792,`tr`,22)(793,`td`,22)(794,`p`),Mk(795,`Método que exibe `),Jc(796,`code`),Mk(797,`p-helper`),Kg(),Mk(798,` ou executa a ação definida em `),Jc(799,`code`),Mk(800,`p-helper{eventOnClick}`),Kg(),Mk(801,` ou em `),Jc(802,`code`),Mk(803,`p-additionalHelp`),Kg(),Mk(804,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(805,`code`),Mk(806,`p-keydown`),Kg(),Mk(807,`.`),Kg(),Jc(808,`blockquote`)(809,`p`),Mk(810,`Exibe ou oculta o conteúdo do componente `),Jc(811,`code`),Mk(812,`po-helper`),Kg(),Mk(813,` quando o componente estiver com foco.`),Kg()(),Jc(814,`pre`)(815,`code`),Mk(816,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),Kg()(),Jc(817,`pre`)(818,`code`),Mk(819,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(820,`br`),Jc(821,`h3`),Mk(822,`Interfaces`),Kg(),Jc(823,`h4`,59)(824,`code`,5),Mk(825,`PoCheckboxGroupOption`),Kg()(),Jc(826,`div`,2)(827,`p`),Mk(828,`Interface para as ações do componente po-checkbox-group.`),Kg()(),Jc(829,`h4`,10),Mk(830,`Propriedades`),Kg(),Jc(831,`table`,11)(832,`tr`,12)(833,`th`,13),Mk(834,`Nome`),Kg(),Jc(835,`th`,13),Mk(836,`Tipo`),Kg(),Jc(837,`th`,13),Mk(838,`Descrição`),Kg()(),Jc(839,`tr`,60)(840,`td`,15)(841,`div`,24)(842,`span`,25),Mk(843,` disabled`),_u(844,`br`),Kg()()(),Jc(845,`td`,19)(846,`code`,28),Mk(847,`boolean`),Kg()(),Jc(848,`td`,22)(849,`em`)(850,`strong`),Mk(851,`(opcional)`),Kg()(),Jc(852,`p`),Mk(853,`Desabilita o checkbox, por padrão as opções sempre estarão habilitadas para o usuário.`),Kg(),Jc(854,`p`),Mk(855,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),Kg()()(),Jc(856,`tr`,61)(857,`td`,15)(858,`div`,24)(859,`span`,25),Mk(860,` label`),_u(861,`br`),Kg()()(),Jc(862,`td`,19)(863,`code`,26),Mk(864,`string`),Kg()(),Jc(865,`td`,22)(866,`p`),Mk(867,`Texto exibido para o usuário ao lado do checkbox.`),Kg()()(),Jc(868,`tr`,62)(869,`td`,15)(870,`div`,24)(871,`span`,25),Mk(872,` value`),_u(873,`br`),Kg()()(),Jc(874,`td`,19)(875,`code`,26),Mk(876,`string`),Kg()(),Jc(877,`td`,22)(878,`p`),Mk(879,`Valor retornado no model.`),Kg(),Jc(880,`p`),Mk(881,`É possível usar os valores `),Jc(882,`code`),Mk(883,`true`),Kg(),Mk(884,` e `),Jc(885,`code`),Mk(886,`false`),Kg(),Mk(887,`, caso a propriedade `),Jc(888,`code`),Mk(889,`p-indeterminate`),Kg(),Mk(890,` esteja setada como `),Jc(891,`code`),Mk(892,`true`),Kg(),Mk(893,`
passa a aceitar `),Jc(894,`code`),Mk(895,`null`),Kg(),Mk(896,` também, por padrão esse valor sempre será setado como `),Jc(897,`code`),Mk(898,`false`),Kg(),Mk(899,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function _e(l,I){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-checkbox-group-basic-view`)(2,`sample-po-checkbox-group-labs-view`)(3,`sample-po-checkbox-group-password-policy-view`),Kg()),l&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var Ge=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Checkbox Group`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:p||`web`,this.title=`Checkbox Group · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(p){return new(p||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(p,n){p&1&&(Jc(0,`po-page-default`,0),LO(1,_e,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-checkbox-group-doc`),Kg()()),p&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,de,se,ue,be],encapsulation:2,changeDetection:1})}return l})()}];var he=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[GV.forChild(Ge),GV]})}return l})();var rt=(()=>{class l{static ɵfac=function(p){return new(p||l)};static ɵmod=ge$1({type:l});static ɵinj=de$1({imports:[M,he]})}return l})();export{rt as DocPoCheckboxGroupModule};
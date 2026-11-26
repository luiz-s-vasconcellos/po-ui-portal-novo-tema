import{m as P,p as M}from"./main-RU54IPUI.js";import{$r as No,$t as ia,Ba as q0,Br as Kb,Ci as U_,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Pr as I,Qn as AZ,Tr as G0,V as Ly,Vr as Kg,W as Mze,Wr as LO,Wt as die,Ya as tk,_a as jO,_i as RZ,b as Eo,ca as ge$1,do as xo,ea as de$1,er as Ab,fn as oi,fr as Cu,jr as H_,li as QL,nt as R4,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var ie=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-message`,`Toaster Basic - Information`,`p-type`,`information`,1,`po-md-12`]],template:function(a,n){a&1&&(Jc(0,`div`,0),_u(1,`po-toaster`,1),Kg())},dependencies:[die],encapsulation:2,changeDetection:1})}return i})();var re=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-toaster-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-toaster-basic/sample-po-toaster-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toaster-basic/sample-po-toaster-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Toaster Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-toaster-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-toaster-basic/sample-po-toaster-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-toaster-basic/sample-po-toaster-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ie],encapsulation:2,changeDetection:1})}return i})();var ge=[`toasterRef`];var le=(()=>{class i{poModal;toasterRef;message=`Title Message`;supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`;actionLabel=`action`;type=Eo.Information;mode=Ly.Inline;showIcon=!0;hasAction=!1;action=void 0;properties=[];sizeActions=`medium`;propertiesOptions=[{value:`hide`,label:`Hide`},{value:`showClose`,label:`Show close`}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Eo.Success},{label:`Error`,value:Eo.Error},{label:`Warning`,value:Eo.Warning},{label:`Information`,value:Eo.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0}restore(){this.message=`Title Message`,this.supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`,this.actionLabel=`action`,this.type=Eo.Information,this.mode=Ly.Inline,this.showIcon=!0,this.hasAction=!1,this.action=void 0,this.properties=[],this.sizeActions=`medium`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-labs`]],viewQuery:function(a,n){if(a&1&&Cu(ia,7)(ge,5),a&2){let p;No(p=xo())&&(n.poModal=p.first),No(p=xo())&&(n.toasterRef=p.first)}},standalone:!1,decls:19,vars:19,consts:[[`toasterRef`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-size-actions`,`p-hide`,`p-mode`,`p-message`,`p-support-message`,`p-type`,`p-show-close`,`p-action`,`p-action-label`],[`p-columns`,`4`,`p-label`,`Type`,`name`,`type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Message`,`name`,`message`,`p-clean`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Support Message`,`name`,`supportMessage`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Has Action`,`name`,`action`,1,`po-md-6`,`po-lg-2`,3,`p-change`,`ngModelChange`,`ngModel`],[`p-label`,`Action Label`,`name`,`actionLabel`,`p-clean`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`sizeActions`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(a,n){if(a&1){let p=KO();Jc(0,`div`,2),_u(1,`po-toaster`,3,0),Kg(),_u(3,`po-divider`),Jc(4,`form`,null,1)(6,`po-radio-group`,4),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(n.type,l)||(n.type=l),H_(l)}),Kg(),Jc(7,`po-input`,5),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(n.message,l)||(n.message=l),H_(l)}),Kg(),Jc(8,`po-input`,6),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(n.supportMessage,l)||(n.supportMessage=l),H_(l)}),Kg(),Jc(9,`po-switch`,7),G0(),_t(`p-change`,function(){return n.changeAction()}),Zb(`ngModelChange`,function(l){return U_(p),Rk(n.hasAction,l)||(n.hasAction=l),H_(l)}),Kg(),Jc(10,`po-input`,8),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(n.actionLabel,l)||(n.actionLabel=l),H_(l)}),Kg(),Jc(11,`div`,2)(12,`po-checkbox-group`,9),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(n.properties,l)||(n.properties=l),H_(l)}),Kg(),Jc(13,`po-radio-group`,10),G0(),Zb(`ngModelChange`,function(l){return U_(p),Rk(n.sizeActions,l)||(n.sizeActions=l),H_(l)}),Kg()(),_u(14,`po-divider`),Jc(15,`div`,2)(16,`po-button`,11),_t(`p-click`,function(){return n.restore()}),Kg()()(),Jc(17,`po-modal`,12),Mk(18,` Notification Action `),Kg()}a&2&&(wg(),Ab(`p-size-actions`,n.sizeActions)(`p-hide`,n.properties.includes(`hide`))(`p-mode`,n.mode)(`p-message`,n.message)(`p-support-message`,n.supportMessage)(`p-type`,n.type)(`p-show-close`,n.properties.includes(`showClose`))(`p-action`,n.action)(`p-action-label`,n.actionLabel),wg(5),Kb(`ngModel`,n.type),Ab(`p-options`,n.typeOptions),q0(),wg(),Kb(`ngModel`,n.message),q0(),wg(),Kb(`ngModel`,n.supportMessage),q0(),wg(),Kb(`ngModel`,n.hasAction),q0(),wg(),Kb(`ngModel`,n.actionLabel),q0(),wg(2),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.sizeActions),Ab(`p-options`,n.sizeActionsOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,R4,ia,die],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-toaster-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-toaster-labs/sample-po-toaster-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toaster-labs/sample-po-toaster-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Toaster Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-toaster-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-toaster-labs/sample-po-toaster-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <po-toaster
    #toasterRef
    class="po-md-12"
    [p-size-actions]="sizeActions"
    [p-hide]="properties.includes('hide')"
    [p-mode]="mode"
    [p-message]="message"
    [p-support-message]="supportMessage"
    [p-type]="type"
    [p-show-close]="properties.includes('showClose')"
    [p-action]="action"
    [p-action-label]="actionLabel"
  ></po-toaster>
</div>

<po-divider />

<form #f="ngForm">
  <po-radio-group
    p-columns="4"
    p-label="Type"
    class="po-lg-12"
    name="type"
    [(ngModel)]="type"
    [p-options]="typeOptions"
  ></po-radio-group>

  <po-input p-label="Message" class="po-md-6" name="message" [(ngModel)]="message" p-clean p-required> </po-input>

  <po-input p-label="Support Message" class="po-md-6" name="supportMessage" [(ngModel)]="supportMessage" p-clean>
  </po-input>

  <po-switch
    p-label="Has Action"
    class="po-md-6 po-lg-2"
    (p-change)="changeAction()"
    name="action"
    [(ngModel)]="hasAction"
  >
  </po-switch>

  <po-input p-label="Action Label" class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="actionLabel" p-clean>
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-6"
      name="sizeActions"
      [(ngModel)]="sizeActions"
      p-label="Size actions"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeActionsOptions"
    >
    </po-radio-group>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-button class="po-md-6 po-lg-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-title="PO Notification"> Notification Action </po-modal>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-toaster-labs/sample-po-toaster-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoToasterComponent,
  PoToasterMode,
  PoToasterType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toaster-labs',
  templateUrl: './sample-po-toaster-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterLabsComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild('toasterRef') toasterRef: PoToasterComponent;

  message = 'Title Message';
  supportMessage =
    'Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.';
  actionLabel = 'action';
  type: PoToasterType = PoToasterType.Information;
  mode = PoToasterMode.Inline;
  showIcon = true;
  hasAction = false;
  action = undefined;
  properties: Array<string> = [];
  sizeActions: string = 'medium';

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'hide', label: 'Hide' },
    { value: 'showClose', label: 'Show close' }
  ];

  public readonly sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'Success', value: PoToasterType.Success },
    { label: 'Error', value: PoToasterType.Error },
    { label: 'Warning', value: PoToasterType.Warning },
    { label: 'Information', value: PoToasterType.Information }
  ];

  constructor() {}

  changeAction() {
    if (this.hasAction) {
      this.action = () => this.poModal.open();
    } else {
      this.action = undefined;
    }
  }

  restore() {
    this.message = 'Title Message';
    this.supportMessage =
      'Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.';
    this.actionLabel = 'action';
    this.type = PoToasterType.Information;
    this.mode = PoToasterMode.Inline;
    this.showIcon = true;
    this.hasAction = false;
    this.action = undefined;
    this.properties = [];
    this.sizeActions = 'medium';
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{router=p(An);openDoc(s){this.router.navigate([`/documentation`,s],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-doc`]],standalone:!1,decls:499,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-toaster-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-action`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-action-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-hide`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-hide-change`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-message`,1,`docs-api-properties-row`],[`id`,`prop-p-show-close`,1,`docs-api-properties-row`],[`id`,`prop-p-size-actions`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-support-message`,1,`docs-api-properties-row`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoToasterType`],[`id`,`enum-po-toaster-type`,1,`docs-api-class-name`],[`id`,`enum-po-toaster-type-error`,1,`docs-api-properties-row`],[`id`,`enum-po-toaster-type-information`,1,`docs-api-properties-row`],[`id`,`enum-po-toaster-type-success`,1,`docs-api-properties-row`],[`id`,`enum-po-toaster-type-warning`,1,`docs-api-properties-row`]],template:function(a,n){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoToasterModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-toaster.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoToasterComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O Toaster serve para exibir uma mensagem temporária em linha na interface, podendo ou não ser removida pelos usuários a depender do uso especificado.`),Kg(),Jc(15,`h4`),Mk(16,`Acessibilidade tratada no componente`),Kg(),Jc(17,`p`),Mk(18,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Jc(19,`ul`)(20,`li`),Mk(21,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),Kg(),Jc(22,`li`),Mk(23,`Permitir que o usuário feche facilmente o toaster e não retirar o foco de onde está. (2.2.4: Interrupções (AAA));`),Kg(),Jc(24,`li`),Mk(25,`Preservar o foco visível na navegação via teclado. (2.4.7: Foco visível (A));`),Kg(),Jc(26,`li`),Mk(27,`Áreas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: Área de clique (AAA));`),Kg()(),Jc(28,`h4`),Mk(29,`Tokens customizáveis`),Kg(),Jc(30,`p`),Mk(31,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(32,`blockquote`)(33,`p`),Mk(34,`Para maiores informações, acesse o guia `),Jc(35,`a`,6),Mk(36,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(37,`.`),Kg()(),Jc(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),Mk(42,`Propriedade`),Kg(),Jc(43,`th`),Mk(44,`Descrição`),Kg(),Jc(45,`th`),Mk(46,`Valor Padrão`),Kg()()(),Jc(47,`tbody`)(48,`tr`)(49,`td`)(50,`strong`),Mk(51,`Default Values`),Kg()(),_u(52,`td`)(53,`td`),Kg(),Jc(54,`tr`)(55,`td`)(56,`code`),Mk(57,`--font-family`),Kg()(),Jc(58,`td`),Mk(59,`Família tipográfica usada`),Kg(),Jc(60,`td`)(61,`code`),Mk(62,`var(--font-family-theme)`),Kg()()(),Jc(63,`tr`)(64,`td`)(65,`code`),Mk(66,`--font-color`),Kg()(),Jc(67,`td`),Mk(68,`Cor principal do texto`),Kg(),Jc(69,`td`)(70,`code`),Mk(71,`var(--color-neutral-dark-90)`),Kg()()(),Jc(72,`tr`)(73,`td`)(74,`code`),Mk(75,`--font-color-support`),Kg()(),Jc(76,`td`),Mk(77,`Cor principal do texto de supporte`),Kg(),Jc(78,`td`)(79,`code`),Mk(80,`var(--color-neutral-dark-80)`),Kg()()(),Jc(81,`tr`)(82,`td`)(83,`code`),Mk(84,`--border-radius`),Kg()(),Jc(85,`td`),Mk(86,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(87,`td`)(88,`code`),Mk(89,`var(--border-radius-md)`),Kg()()(),Jc(90,`tr`)(91,`td`)(92,`strong`),Mk(93,`Type Success`),Kg()(),_u(94,`td`)(95,`td`),Kg(),Jc(96,`tr`)(97,`td`)(98,`code`),Mk(99,`--color-success`),Kg()(),Jc(100,`td`),Mk(101,`Cor principal no tipo success`),Kg(),Jc(102,`td`)(103,`code`),Mk(104,`var(--color-feedback-positive-base)`),Kg()()(),Jc(105,`tr`)(106,`td`)(107,`code`),Mk(108,`--background-success`),Kg()(),Jc(109,`td`),Mk(110,`Cor de fundo principal no tipo success`),Kg(),Jc(111,`td`)(112,`code`),Mk(113,`var(--color-feedback-positive-lightest)`),Kg()()(),Jc(114,`tr`)(115,`td`)(116,`code`),Mk(117,`--border-color-success`),Kg()(),Jc(118,`td`),Mk(119,`Cor da borda principal tipo success`),Kg(),Jc(120,`td`)(121,`code`),Mk(122,`var(--color-feedback-positive-lighter)`),Kg()()(),Jc(123,`tr`)(124,`td`)(125,`strong`),Mk(126,`Type Error`),Kg()(),_u(127,`td`)(128,`td`),Kg(),Jc(129,`tr`)(130,`td`)(131,`code`),Mk(132,`--color-error`),Kg()(),Jc(133,`td`),Mk(134,`Cor principal no tipo error`),Kg(),Jc(135,`td`)(136,`code`),Mk(137,`var(--color-feedback-negative-base)`),Kg()()(),Jc(138,`tr`)(139,`td`)(140,`code`),Mk(141,`--background-error`),Kg()(),Jc(142,`td`),Mk(143,`Cor de fundo principal no tipo error`),Kg(),Jc(144,`td`)(145,`code`),Mk(146,`var(--color-feedback-negative-lightest)`),Kg()()(),Jc(147,`tr`)(148,`td`)(149,`code`),Mk(150,`--border-color-error`),Kg()(),Jc(151,`td`),Mk(152,`Cor da borda principal tipo error`),Kg(),Jc(153,`td`)(154,`code`),Mk(155,`var(--color-feedback-negative-lighter)`),Kg()()(),Jc(156,`tr`)(157,`td`)(158,`strong`),Mk(159,`Type Warning`),Kg()(),_u(160,`td`)(161,`td`),Kg(),Jc(162,`tr`)(163,`td`)(164,`code`),Mk(165,`--color-icon-warning`),Kg()(),Jc(166,`td`),Mk(167,`Cor principal do icone no tipo warning`),Kg(),Jc(168,`td`)(169,`code`),Mk(170,`var(--color-neutral-dark-90)`),Kg()()(),Jc(171,`tr`)(172,`td`)(173,`code`),Mk(174,`--color-warning`),Kg()(),Jc(175,`td`),Mk(176,`Cor principal no tipo warning`),Kg(),Jc(177,`td`)(178,`code`),Mk(179,`var(--color-feedback-warning-base)`),Kg()()(),Jc(180,`tr`)(181,`td`)(182,`code`),Mk(183,`--background-warning`),Kg()(),Jc(184,`td`),Mk(185,`Cor de fundo principal no tipo warning`),Kg(),Jc(186,`td`)(187,`code`),Mk(188,`var(--color-feedback-warning-lightest)`),Kg()()(),Jc(189,`tr`)(190,`td`)(191,`code`),Mk(192,`--border-color-warning`),Kg()(),Jc(193,`td`),Mk(194,`Cor da borda principal tipo warning`),Kg(),Jc(195,`td`)(196,`code`),Mk(197,`var(--color-feedback-warning-lighter)`),Kg()()(),Jc(198,`tr`)(199,`td`)(200,`strong`),Mk(201,`Type Info`),Kg()(),_u(202,`td`)(203,`td`),Kg(),Jc(204,`tr`)(205,`td`)(206,`code`),Mk(207,`--color-info`),Kg()(),Jc(208,`td`),Mk(209,`Cor principal no tipo info`),Kg(),Jc(210,`td`)(211,`code`),Mk(212,`var(--color-feedback-info-base)`),Kg()()(),Jc(213,`tr`)(214,`td`)(215,`code`),Mk(216,`--background-info`),Kg()(),Jc(217,`td`),Mk(218,`Cor de fundo principal no tipo info`),Kg(),Jc(219,`td`)(220,`code`),Mk(221,`var(--color-feedback-info-lightest)`),Kg()()(),Jc(222,`tr`)(223,`td`)(224,`code`),Mk(225,`--border-color-info`),Kg()(),Jc(226,`td`),Mk(227,`Cor da borda principal tipo info`),Kg(),Jc(228,`td`)(229,`code`),Mk(230,`var(--color-feedback-info-lighter)`),Kg()()()()()(),Jc(231,`div`,7)(232,`h4`,8),Mk(233,`Seletor`),Kg(),Jc(234,`pre`,9),Mk(235,`<po-toaster
    p-action="Function"
    p-action-label="string"
    p-hide="boolean"
    (p-hide-change)="EventEmitter"
    p-message="string"
    p-show-close="boolean"
    p-size-actions="string"
    p-support-message="string"
    p-type="PoToasterType" >
</po-toaster>
`),Kg()(),Jc(236,`h4`,10),Mk(237,`Propriedades`),Kg(),Jc(238,`table`,11)(239,`tr`,12)(240,`th`,13),Mk(241,`Nome`),Kg(),Jc(242,`th`,13),Mk(243,`Tipo`),Kg(),Jc(244,`th`,13),Mk(245,`Padrão`),Kg(),Jc(246,`th`,13),Mk(247,`Descrição`),Kg()(),Jc(248,`tr`,14)(249,`td`,15)(250,`div`,16)(251,`span`,17),Mk(252,` p-action`),_u(253,`br`),Kg()()(),Jc(254,`td`,18)(255,`code`,19),Mk(256,`Function`),Kg()(),Jc(257,`td`,20),Mk(258,`-`),Kg(),Jc(259,`td`,21)(260,`em`)(261,`strong`),Mk(262,`(opcional)`),Kg()(),Jc(263,`p`),Mk(264,`Ação para a notificação.`),Kg()()(),Jc(265,`tr`,22)(266,`td`,15)(267,`div`,16)(268,`span`,17),Mk(269,` p-action-label`),_u(270,`br`),Kg()()(),Jc(271,`td`,18)(272,`code`,23),Mk(273,`string`),Kg()(),Jc(274,`td`,20),Mk(275,`-`),Kg(),Jc(276,`td`,21)(277,`em`)(278,`strong`),Mk(279,`(opcional)`),Kg()(),Jc(280,`p`),Mk(281,`Label do botão quando houver uma ação definida.`),Kg()()(),Jc(282,`tr`,24)(283,`td`,15)(284,`div`,16)(285,`span`,17),Mk(286,` p-hide`),_u(287,`br`),Kg()()(),Jc(288,`td`,18)(289,`code`,25),Mk(290,`boolean`),Kg()(),Jc(291,`td`,20)(292,`p`)(293,`code`),Mk(294,`false`),Kg()()(),Jc(295,`td`,21)(296,`em`)(297,`strong`),Mk(298,`(opcional)`),Kg()(),Jc(299,`p`),Mk(300,`Define se o Toaster esta invisivel.`),Kg()()(),Jc(301,`tr`,26)(302,`td`,15)(303,`div`,27)(304,`span`,28),Mk(305,` (p-hide-change)`),_u(306,`br`),Kg()()(),Jc(307,`td`,18)(308,`code`,29),Mk(309,`EventEmitter`),Kg()(),Jc(310,`td`,20),Mk(311,`-`),Kg(),Jc(312,`td`,21)(313,`em`)(314,`strong`),Mk(315,`(opcional)`),Kg()(),Jc(316,`p`),Mk(317,`Evento emitido quando o valor de `),Jc(318,`code`),Mk(319,`isHide`),Kg(),Mk(320,` é alterado.`),Kg()()(),Jc(321,`tr`,30)(322,`td`,15)(323,`div`,16)(324,`span`,17),Mk(325,` p-message`),_u(326,`br`),Kg()()(),Jc(327,`td`,18)(328,`code`,23),Mk(329,`string`),Kg()(),Jc(330,`td`,20),Mk(331,`-`),Kg(),Jc(332,`td`,21)(333,`em`)(334,`strong`),Mk(335,`(opcional)`),Kg()(),Jc(336,`p`),Mk(337,`Mensagem a ser exibida na notificação.`),Kg()()(),Jc(338,`tr`,31)(339,`td`,15)(340,`div`,16)(341,`span`,17),Mk(342,` p-show-close`),_u(343,`br`),Kg()()(),Jc(344,`td`,18)(345,`code`,25),Mk(346,`boolean`),Kg()(),Jc(347,`td`,20)(348,`p`)(349,`code`),Mk(350,`true`),Kg()()(),Jc(351,`td`,21)(352,`em`)(353,`strong`),Mk(354,`(opcional)`),Kg()(),Jc(355,`p`),Mk(356,`Exibe botão de fechar no toaster modo inline.`),Kg()()(),Jc(357,`tr`,32)(358,`td`,15)(359,`div`,16)(360,`span`,17),Mk(361,` p-size-actions`),_u(362,`br`),Kg()()(),Jc(363,`td`,18)(364,`code`,23),Mk(365,`string`),Kg()(),Jc(366,`td`,20)(367,`p`)(368,`code`),Mk(369,`medium`),Kg()()(),Jc(370,`td`,21)(371,`em`)(372,`strong`),Mk(373,`(opcional)`),Kg()(),Jc(374,`p`),Mk(375,`Define o tamanho das ações no componente:`),Kg(),Jc(376,`ul`)(377,`li`)(378,`code`),Mk(379,`small`),Kg(),Mk(380,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(381,`li`)(382,`code`),Mk(383,`medium`),Kg(),Mk(384,`: aplica a medida medium de cada componente.`),Kg()(),Jc(385,`blockquote`)(386,`p`),Mk(387,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(388,`code`),Mk(389,`medium`),Kg(),Mk(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(391,`a`,33),Mk(392,`po-theme`),Kg(),Mk(393,`.`),Kg()()()(),Jc(394,`tr`,34)(395,`td`,15)(396,`div`,16)(397,`span`,17),Mk(398,` p-support-message`),_u(399,`br`),Kg()()(),Jc(400,`td`,18)(401,`code`,23),Mk(402,`string`),Kg()(),Jc(403,`td`,20),Mk(404,`-`),Kg(),Jc(405,`td`,21)(406,`em`)(407,`strong`),Mk(408,`(opcional)`),Kg()(),Jc(409,`p`),Mk(410,`Mensagem de suporte a ser exibida na notificação.`),Kg()()(),Jc(411,`tr`,35)(412,`td`,15)(413,`div`,16)(414,`span`,17),Mk(415,` p-type`),_u(416,`br`),Kg()()(),Jc(417,`td`,18)(418,`code`,36),Mk(419,`PoToasterType`),Kg()(),Jc(420,`td`,20)(421,`p`)(422,`code`),Mk(423,`PoToasterType.Information`),Kg()()(),Jc(424,`td`,21)(425,`em`)(426,`strong`),Mk(427,`(opcional)`),Kg()(),Jc(428,`p`),Mk(429,`Determina o tipo de notificação.`),Kg(),Jc(430,`p`),Mk(431,`Valores aceitos: `),Jc(432,`code`),Mk(433,`error`),Kg(),Mk(434,`, `),Jc(435,`code`),Mk(436,`information`),Kg(),Mk(437,`, `),Jc(438,`code`),Mk(439,`success`),Kg(),Mk(440,` e `),Jc(441,`code`),Mk(442,`warning`),Kg(),Mk(443,`.`),Kg()()()(),Jc(444,`h3`),Mk(445,`Enums`),Kg(),Jc(446,`h4`,37)(447,`code`,5),Mk(448,`PoToasterType`),Kg()(),Jc(449,`div`,2)(450,`p`),Mk(451,`Define os tipos possíveis para o `),Jc(452,`code`),Mk(453,`PoToasterComponent`),Kg(),Mk(454,`.`),Kg()(),Jc(455,`h4`,10),Mk(456,`Propriedades`),Kg(),Jc(457,`table`,11)(458,`tr`,12)(459,`th`,13),Mk(460,`Nome`),Kg(),Jc(461,`th`,13),Mk(462,`Descrição`),Kg()(),Jc(463,`tr`,38)(464,`td`,15)(465,`div`,16)(466,`span`,17),Mk(467,` Error`),_u(468,`br`),Kg()()(),Jc(469,`td`,21)(470,`p`),Mk(471,`Tipo de toaster para mensagens de erro.`),Kg()()(),Jc(472,`tr`,39)(473,`td`,15)(474,`div`,16)(475,`span`,17),Mk(476,` Information`),_u(477,`br`),Kg()()(),Jc(478,`td`,21)(479,`p`),Mk(480,`Tipo de toaster para mensagens informativas.`),Kg()()(),Jc(481,`tr`,40)(482,`td`,15)(483,`div`,16)(484,`span`,17),Mk(485,` Success`),_u(486,`br`),Kg()()(),Jc(487,`td`,21)(488,`p`),Mk(489,`Tipo de toaster para mensagens de sucesso.`),Kg()()(),Jc(490,`tr`,41)(491,`td`,15)(492,`div`,16)(493,`span`,17),Mk(494,` Warning`),_u(495,`br`),Kg()()(),Jc(496,`td`,21)(497,`p`),Mk(498,`Tipo de toaster para mensagens de atenção.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Se(i,xe){if(i&1&&(Jc(0,`div`,1),_u(1,`sample-po-toaster-basic-view`)(2,`sample-po-toaster-labs-view`),Kg()),i&2){let s=tk();Ab(`hidden`,s.activeTab!==`web`)}}var fe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;title=`Toaster`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Toaster · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(a,n){a&1&&(Jc(0,`po-page-default`,0),LO(1,Se,3,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-toaster-doc`),Kg()()),a&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,re,se,pe],encapsulation:2,changeDetection:1})}return i})()}];var de=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[GV.forChild(fe),GV]})}return i})();var Qe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[M,de]})}return i})();export{Qe as DocPoToasterModule};
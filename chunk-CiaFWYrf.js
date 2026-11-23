import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I,At as Zte,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,R as Lb,Ti as U_,W as Mze,Wi as YO,Wr as MZ,Yt as die,Zr as No,_o as z0,an as ia,ao as vu,ar as An,b as Eo,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,fo as xo,gi as Rb,io as vt,j as I4,li as Qc,ra as de$1,rr as AZ,si as QL,sn as j4,so as wg,tt as R4,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-BQDTQO8h.js";var ie=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`po-row`],[`p-message`,`Toaster Basic - Information`,`p-type`,`information`,1,`po-md-12`]],template:function(a,n){a&1&&(Qc(0,`div`,0),vu(1,`po-toaster`,1),Kg())},dependencies:[die],encapsulation:2,changeDetection:1})}return i})();var re=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-toaster-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-toaster-basic/sample-po-toaster-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toaster-basic/sample-po-toaster-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Toaster Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-toaster-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-toaster-basic/sample-po-toaster-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-toaster class="po-md-12" p-message="Toaster Basic - Information" p-type="information"></po-toaster>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-toaster-basic/sample-po-toaster-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-toaster-basic',
  templateUrl: './sample-po-toaster-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoToasterBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ie],encapsulation:2,changeDetection:1})}return i})();var ge=[`toasterRef`];var le=(()=>{class i{poModal;toasterRef;message=`Title Message`;supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`;actionLabel=`action`;type=Eo.Information;mode=Lb.Inline;showIcon=!0;hasAction=!1;action=void 0;properties=[];sizeActions=`medium`;propertiesOptions=[{value:`hide`,label:`Hide`},{value:`showClose`,label:`Show close`}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Success`,value:Eo.Success},{label:`Error`,value:Eo.Error},{label:`Warning`,value:Eo.Warning},{label:`Information`,value:Eo.Information}];constructor(){}changeAction(){this.hasAction?this.action=()=>this.poModal.open():this.action=void 0}restore(){this.message=`Title Message`,this.supportMessage=`Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha. Exemplo de uma mensagem bem mais longa que poderia ocupar mais de uma linha.`,this.actionLabel=`action`,this.type=Eo.Information,this.mode=Lb.Inline,this.showIcon=!0,this.hasAction=!1,this.action=void 0,this.properties=[],this.sizeActions=`medium`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-labs`]],viewQuery:function(a,n){if(a&1&&Du(ia,7)(ge,5),a&2){let p;No(p=xo())&&(n.poModal=p.first),No(p=xo())&&(n.toasterRef=p.first)}},standalone:!1,decls:19,vars:19,consts:[[`toasterRef`,``],[`f`,`ngForm`],[1,`po-row`],[1,`po-md-12`,3,`p-size-actions`,`p-hide`,`p-mode`,`p-message`,`p-support-message`,`p-type`,`p-show-close`,`p-action`,`p-action-label`],[`p-columns`,`4`,`p-label`,`Type`,`name`,`type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Message`,`name`,`message`,`p-clean`,``,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Support Message`,`name`,`supportMessage`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Has Action`,`name`,`action`,1,`po-md-6`,`po-lg-2`,3,`p-change`,`ngModelChange`,`ngModel`],[`p-label`,`Action Label`,`name`,`actionLabel`,`p-clean`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`sizeActions`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-6`,`po-lg-3`,3,`p-click`],[`p-title`,`PO Notification`]],template:function(a,n){if(a&1){let p=YO();Qc(0,`div`,2),vu(1,`po-toaster`,3,0),Kg(),vu(3,`po-divider`),Qc(4,`form`,null,1)(6,`po-radio-group`,4),z0(),Kb(`ngModelChange`,function(l){return B_(p),Tk(n.type,l)||(n.type=l),U_(l)}),Kg(),Qc(7,`po-input`,5),z0(),Kb(`ngModelChange`,function(l){return B_(p),Tk(n.message,l)||(n.message=l),U_(l)}),Kg(),Qc(8,`po-input`,6),z0(),Kb(`ngModelChange`,function(l){return B_(p),Tk(n.supportMessage,l)||(n.supportMessage=l),U_(l)}),Kg(),Qc(9,`po-switch`,7),z0(),vt(`p-change`,function(){return n.changeAction()}),Kb(`ngModelChange`,function(l){return B_(p),Tk(n.hasAction,l)||(n.hasAction=l),U_(l)}),Kg(),Qc(10,`po-input`,8),z0(),Kb(`ngModelChange`,function(l){return B_(p),Tk(n.actionLabel,l)||(n.actionLabel=l),U_(l)}),Kg(),Qc(11,`div`,2)(12,`po-checkbox-group`,9),z0(),Kb(`ngModelChange`,function(l){return B_(p),Tk(n.properties,l)||(n.properties=l),U_(l)}),Kg(),Qc(13,`po-radio-group`,10),z0(),Kb(`ngModelChange`,function(l){return B_(p),Tk(n.sizeActions,l)||(n.sizeActions=l),U_(l)}),Kg()(),vu(14,`po-divider`),Qc(15,`div`,2)(16,`po-button`,11),vt(`p-click`,function(){return n.restore()}),Kg()()(),Qc(17,`po-modal`,12),Sk(18,` Notification Action `),Kg()}a&2&&(wg(),Rb(`p-size-actions`,n.sizeActions)(`p-hide`,n.properties.includes(`hide`))(`p-mode`,n.mode)(`p-message`,n.message)(`p-support-message`,n.supportMessage)(`p-type`,n.type)(`p-show-close`,n.properties.includes(`showClose`))(`p-action`,n.action)(`p-action-label`,n.actionLabel),wg(5),Yb(`ngModel`,n.type),Rb(`p-options`,n.typeOptions),W0(),wg(),Yb(`ngModel`,n.message),W0(),wg(),Yb(`ngModel`,n.supportMessage),W0(),wg(),Yb(`ngModel`,n.hasAction),W0(),wg(),Yb(`ngModel`,n.actionLabel),W0(),wg(2),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.sizeActions),Rb(`p-options`,n.sizeActionsOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,R4,ia,die],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-toaster-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-toaster-labs/sample-po-toaster-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-toaster-labs/sample-po-toaster-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,n){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Toaster Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-toaster-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-toaster-labs/sample-po-toaster-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-toaster-labs/sample-po-toaster-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,le],encapsulation:2,changeDetection:1})}return i})();var pe=(()=>{class i{router=p(An);openDoc(s){this.router.navigate([`/documentation`,s],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-toaster-doc`]],standalone:!1,decls:499,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-toaster-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-action`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Function`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-action-label`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-hide`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`event-p-hide-change`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-message`,1,`docs-api-properties-row`],[`id`,`prop-p-show-close`,1,`docs-api-properties-row`],[`id`,`prop-p-size-actions`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-support-message`,1,`docs-api-properties-row`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoToasterType`],[`id`,`enum-po-toaster-type`,1,`docs-api-class-name`],[`id`,`enum-po-toaster-type-error`,1,`docs-api-properties-row`],[`id`,`enum-po-toaster-type-information`,1,`docs-api-properties-row`],[`id`,`enum-po-toaster-type-success`,1,`docs-api-properties-row`],[`id`,`enum-po-toaster-type-warning`,1,`docs-api-properties-row`]],template:function(a,n){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoToasterModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-toaster.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoToasterComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O Toaster serve para exibir uma mensagem temporária em linha na interface, podendo ou não ser removida pelos usuários a depender do uso especificado.`),Kg(),Qc(15,`h4`),Sk(16,`Acessibilidade tratada no componente`),Kg(),Qc(17,`p`),Sk(18,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Qc(19,`ul`)(20,`li`),Sk(21,`Permitir a interação via teclado (2.1.1: Keyboard (A));`),Kg(),Qc(22,`li`),Sk(23,`Permitir que o usuário feche facilmente o toaster e não retirar o foco de onde está. (2.2.4: Interrupções (AAA));`),Kg(),Qc(24,`li`),Sk(25,`Preservar o foco visível na navegação via teclado. (2.4.7: Foco visível (A));`),Kg(),Qc(26,`li`),Sk(27,`Áreas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels (2.5.5: Área de clique (AAA));`),Kg()(),Qc(28,`h4`),Sk(29,`Tokens customizáveis`),Kg(),Qc(30,`p`),Sk(31,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(32,`blockquote`)(33,`p`),Sk(34,`Para maiores informações, acesse o guia `),Qc(35,`a`,6),Sk(36,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(37,`.`),Kg()(),Qc(38,`table`)(39,`thead`)(40,`tr`)(41,`th`),Sk(42,`Propriedade`),Kg(),Qc(43,`th`),Sk(44,`Descrição`),Kg(),Qc(45,`th`),Sk(46,`Valor Padrão`),Kg()()(),Qc(47,`tbody`)(48,`tr`)(49,`td`)(50,`strong`),Sk(51,`Default Values`),Kg()(),vu(52,`td`)(53,`td`),Kg(),Qc(54,`tr`)(55,`td`)(56,`code`),Sk(57,`--font-family`),Kg()(),Qc(58,`td`),Sk(59,`Família tipográfica usada`),Kg(),Qc(60,`td`)(61,`code`),Sk(62,`var(--font-family-theme)`),Kg()()(),Qc(63,`tr`)(64,`td`)(65,`code`),Sk(66,`--font-color`),Kg()(),Qc(67,`td`),Sk(68,`Cor principal do texto`),Kg(),Qc(69,`td`)(70,`code`),Sk(71,`var(--color-neutral-dark-90)`),Kg()()(),Qc(72,`tr`)(73,`td`)(74,`code`),Sk(75,`--font-color-support`),Kg()(),Qc(76,`td`),Sk(77,`Cor principal do texto de supporte`),Kg(),Qc(78,`td`)(79,`code`),Sk(80,`var(--color-neutral-dark-80)`),Kg()()(),Qc(81,`tr`)(82,`td`)(83,`code`),Sk(84,`--border-radius`),Kg()(),Qc(85,`td`),Sk(86,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(87,`td`)(88,`code`),Sk(89,`var(--border-radius-md)`),Kg()()(),Qc(90,`tr`)(91,`td`)(92,`strong`),Sk(93,`Type Success`),Kg()(),vu(94,`td`)(95,`td`),Kg(),Qc(96,`tr`)(97,`td`)(98,`code`),Sk(99,`--color-success`),Kg()(),Qc(100,`td`),Sk(101,`Cor principal no tipo success`),Kg(),Qc(102,`td`)(103,`code`),Sk(104,`var(--color-feedback-positive-base)`),Kg()()(),Qc(105,`tr`)(106,`td`)(107,`code`),Sk(108,`--background-success`),Kg()(),Qc(109,`td`),Sk(110,`Cor de fundo principal no tipo success`),Kg(),Qc(111,`td`)(112,`code`),Sk(113,`var(--color-feedback-positive-lightest)`),Kg()()(),Qc(114,`tr`)(115,`td`)(116,`code`),Sk(117,`--border-color-success`),Kg()(),Qc(118,`td`),Sk(119,`Cor da borda principal tipo success`),Kg(),Qc(120,`td`)(121,`code`),Sk(122,`var(--color-feedback-positive-lighter)`),Kg()()(),Qc(123,`tr`)(124,`td`)(125,`strong`),Sk(126,`Type Error`),Kg()(),vu(127,`td`)(128,`td`),Kg(),Qc(129,`tr`)(130,`td`)(131,`code`),Sk(132,`--color-error`),Kg()(),Qc(133,`td`),Sk(134,`Cor principal no tipo error`),Kg(),Qc(135,`td`)(136,`code`),Sk(137,`var(--color-feedback-negative-base)`),Kg()()(),Qc(138,`tr`)(139,`td`)(140,`code`),Sk(141,`--background-error`),Kg()(),Qc(142,`td`),Sk(143,`Cor de fundo principal no tipo error`),Kg(),Qc(144,`td`)(145,`code`),Sk(146,`var(--color-feedback-negative-lightest)`),Kg()()(),Qc(147,`tr`)(148,`td`)(149,`code`),Sk(150,`--border-color-error`),Kg()(),Qc(151,`td`),Sk(152,`Cor da borda principal tipo error`),Kg(),Qc(153,`td`)(154,`code`),Sk(155,`var(--color-feedback-negative-lighter)`),Kg()()(),Qc(156,`tr`)(157,`td`)(158,`strong`),Sk(159,`Type Warning`),Kg()(),vu(160,`td`)(161,`td`),Kg(),Qc(162,`tr`)(163,`td`)(164,`code`),Sk(165,`--color-icon-warning`),Kg()(),Qc(166,`td`),Sk(167,`Cor principal do icone no tipo warning`),Kg(),Qc(168,`td`)(169,`code`),Sk(170,`var(--color-neutral-dark-90)`),Kg()()(),Qc(171,`tr`)(172,`td`)(173,`code`),Sk(174,`--color-warning`),Kg()(),Qc(175,`td`),Sk(176,`Cor principal no tipo warning`),Kg(),Qc(177,`td`)(178,`code`),Sk(179,`var(--color-feedback-warning-base)`),Kg()()(),Qc(180,`tr`)(181,`td`)(182,`code`),Sk(183,`--background-warning`),Kg()(),Qc(184,`td`),Sk(185,`Cor de fundo principal no tipo warning`),Kg(),Qc(186,`td`)(187,`code`),Sk(188,`var(--color-feedback-warning-lightest)`),Kg()()(),Qc(189,`tr`)(190,`td`)(191,`code`),Sk(192,`--border-color-warning`),Kg()(),Qc(193,`td`),Sk(194,`Cor da borda principal tipo warning`),Kg(),Qc(195,`td`)(196,`code`),Sk(197,`var(--color-feedback-warning-lighter)`),Kg()()(),Qc(198,`tr`)(199,`td`)(200,`strong`),Sk(201,`Type Info`),Kg()(),vu(202,`td`)(203,`td`),Kg(),Qc(204,`tr`)(205,`td`)(206,`code`),Sk(207,`--color-info`),Kg()(),Qc(208,`td`),Sk(209,`Cor principal no tipo info`),Kg(),Qc(210,`td`)(211,`code`),Sk(212,`var(--color-feedback-info-base)`),Kg()()(),Qc(213,`tr`)(214,`td`)(215,`code`),Sk(216,`--background-info`),Kg()(),Qc(217,`td`),Sk(218,`Cor de fundo principal no tipo info`),Kg(),Qc(219,`td`)(220,`code`),Sk(221,`var(--color-feedback-info-lightest)`),Kg()()(),Qc(222,`tr`)(223,`td`)(224,`code`),Sk(225,`--border-color-info`),Kg()(),Qc(226,`td`),Sk(227,`Cor da borda principal tipo info`),Kg(),Qc(228,`td`)(229,`code`),Sk(230,`var(--color-feedback-info-lighter)`),Kg()()()()()(),Qc(231,`div`,7)(232,`h4`,8),Sk(233,`Seletor`),Kg(),Qc(234,`pre`,9),Sk(235,`<po-toaster
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
`),Kg()(),Qc(236,`h4`,10),Sk(237,`Propriedades`),Kg(),Qc(238,`table`,11)(239,`tr`,12)(240,`th`,13),Sk(241,`Nome`),Kg(),Qc(242,`th`,13),Sk(243,`Tipo`),Kg(),Qc(244,`th`,13),Sk(245,`Padrão`),Kg(),Qc(246,`th`,13),Sk(247,`Descrição`),Kg()(),Qc(248,`tr`,14)(249,`td`,15)(250,`div`,16)(251,`span`,17),Sk(252,` p-action`),vu(253,`br`),Kg()()(),Qc(254,`td`,18)(255,`code`,19),Sk(256,`Function`),Kg()(),Qc(257,`td`,20),Sk(258,`-`),Kg(),Qc(259,`td`,21)(260,`em`)(261,`strong`),Sk(262,`(opcional)`),Kg()(),Qc(263,`p`),Sk(264,`Ação para a notificação.`),Kg()()(),Qc(265,`tr`,22)(266,`td`,15)(267,`div`,16)(268,`span`,17),Sk(269,` p-action-label`),vu(270,`br`),Kg()()(),Qc(271,`td`,18)(272,`code`,23),Sk(273,`string`),Kg()(),Qc(274,`td`,20),Sk(275,`-`),Kg(),Qc(276,`td`,21)(277,`em`)(278,`strong`),Sk(279,`(opcional)`),Kg()(),Qc(280,`p`),Sk(281,`Label do botão quando houver uma ação definida.`),Kg()()(),Qc(282,`tr`,24)(283,`td`,15)(284,`div`,16)(285,`span`,17),Sk(286,` p-hide`),vu(287,`br`),Kg()()(),Qc(288,`td`,18)(289,`code`,25),Sk(290,`boolean`),Kg()(),Qc(291,`td`,20)(292,`p`)(293,`code`),Sk(294,`false`),Kg()()(),Qc(295,`td`,21)(296,`em`)(297,`strong`),Sk(298,`(opcional)`),Kg()(),Qc(299,`p`),Sk(300,`Define se o Toaster esta invisivel.`),Kg()()(),Qc(301,`tr`,26)(302,`td`,15)(303,`div`,27)(304,`span`,28),Sk(305,` (p-hide-change)`),vu(306,`br`),Kg()()(),Qc(307,`td`,18)(308,`code`,29),Sk(309,`EventEmitter`),Kg()(),Qc(310,`td`,20),Sk(311,`-`),Kg(),Qc(312,`td`,21)(313,`em`)(314,`strong`),Sk(315,`(opcional)`),Kg()(),Qc(316,`p`),Sk(317,`Evento emitido quando o valor de `),Qc(318,`code`),Sk(319,`isHide`),Kg(),Sk(320,` é alterado.`),Kg()()(),Qc(321,`tr`,30)(322,`td`,15)(323,`div`,16)(324,`span`,17),Sk(325,` p-message`),vu(326,`br`),Kg()()(),Qc(327,`td`,18)(328,`code`,23),Sk(329,`string`),Kg()(),Qc(330,`td`,20),Sk(331,`-`),Kg(),Qc(332,`td`,21)(333,`em`)(334,`strong`),Sk(335,`(opcional)`),Kg()(),Qc(336,`p`),Sk(337,`Mensagem a ser exibida na notificação.`),Kg()()(),Qc(338,`tr`,31)(339,`td`,15)(340,`div`,16)(341,`span`,17),Sk(342,` p-show-close`),vu(343,`br`),Kg()()(),Qc(344,`td`,18)(345,`code`,25),Sk(346,`boolean`),Kg()(),Qc(347,`td`,20)(348,`p`)(349,`code`),Sk(350,`true`),Kg()()(),Qc(351,`td`,21)(352,`em`)(353,`strong`),Sk(354,`(opcional)`),Kg()(),Qc(355,`p`),Sk(356,`Exibe botão de fechar no toaster modo inline.`),Kg()()(),Qc(357,`tr`,32)(358,`td`,15)(359,`div`,16)(360,`span`,17),Sk(361,` p-size-actions`),vu(362,`br`),Kg()()(),Qc(363,`td`,18)(364,`code`,23),Sk(365,`string`),Kg()(),Qc(366,`td`,20)(367,`p`)(368,`code`),Sk(369,`medium`),Kg()()(),Qc(370,`td`,21)(371,`em`)(372,`strong`),Sk(373,`(opcional)`),Kg()(),Qc(374,`p`),Sk(375,`Define o tamanho das ações no componente:`),Kg(),Qc(376,`ul`)(377,`li`)(378,`code`),Sk(379,`small`),Kg(),Sk(380,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(381,`li`)(382,`code`),Sk(383,`medium`),Kg(),Sk(384,`: aplica a medida medium de cada componente.`),Kg()(),Qc(385,`blockquote`)(386,`p`),Sk(387,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(388,`code`),Sk(389,`medium`),Kg(),Sk(390,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(391,`a`,33),Sk(392,`po-theme`),Kg(),Sk(393,`.`),Kg()()()(),Qc(394,`tr`,34)(395,`td`,15)(396,`div`,16)(397,`span`,17),Sk(398,` p-support-message`),vu(399,`br`),Kg()()(),Qc(400,`td`,18)(401,`code`,23),Sk(402,`string`),Kg()(),Qc(403,`td`,20),Sk(404,`-`),Kg(),Qc(405,`td`,21)(406,`em`)(407,`strong`),Sk(408,`(opcional)`),Kg()(),Qc(409,`p`),Sk(410,`Mensagem de suporte a ser exibida na notificação.`),Kg()()(),Qc(411,`tr`,35)(412,`td`,15)(413,`div`,16)(414,`span`,17),Sk(415,` p-type`),vu(416,`br`),Kg()()(),Qc(417,`td`,18)(418,`code`,36),Sk(419,`PoToasterType`),Kg()(),Qc(420,`td`,20)(421,`p`)(422,`code`),Sk(423,`PoToasterType.Information`),Kg()()(),Qc(424,`td`,21)(425,`em`)(426,`strong`),Sk(427,`(opcional)`),Kg()(),Qc(428,`p`),Sk(429,`Determina o tipo de notificação.`),Kg(),Qc(430,`p`),Sk(431,`Valores aceitos: `),Qc(432,`code`),Sk(433,`error`),Kg(),Sk(434,`, `),Qc(435,`code`),Sk(436,`information`),Kg(),Sk(437,`, `),Qc(438,`code`),Sk(439,`success`),Kg(),Sk(440,` e `),Qc(441,`code`),Sk(442,`warning`),Kg(),Sk(443,`.`),Kg()()()(),Qc(444,`h3`),Sk(445,`Enums`),Kg(),Qc(446,`h4`,37)(447,`code`,5),Sk(448,`PoToasterType`),Kg()(),Qc(449,`div`,2)(450,`p`),Sk(451,`Define os tipos possíveis para o `),Qc(452,`code`),Sk(453,`PoToasterComponent`),Kg(),Sk(454,`.`),Kg()(),Qc(455,`h4`,10),Sk(456,`Propriedades`),Kg(),Qc(457,`table`,11)(458,`tr`,12)(459,`th`,13),Sk(460,`Nome`),Kg(),Qc(461,`th`,13),Sk(462,`Descrição`),Kg()(),Qc(463,`tr`,38)(464,`td`,15)(465,`div`,16)(466,`span`,17),Sk(467,` Error`),vu(468,`br`),Kg()()(),Qc(469,`td`,21)(470,`p`),Sk(471,`Tipo de toaster para mensagens de erro.`),Kg()()(),Qc(472,`tr`,39)(473,`td`,15)(474,`div`,16)(475,`span`,17),Sk(476,` Information`),vu(477,`br`),Kg()()(),Qc(478,`td`,21)(479,`p`),Sk(480,`Tipo de toaster para mensagens informativas.`),Kg()()(),Qc(481,`tr`,40)(482,`td`,15)(483,`div`,16)(484,`span`,17),Sk(485,` Success`),vu(486,`br`),Kg()()(),Qc(487,`td`,21)(488,`p`),Sk(489,`Tipo de toaster para mensagens de sucesso.`),Kg()()(),Qc(490,`tr`,41)(491,`td`,15)(492,`div`,16)(493,`span`,17),Sk(494,` Warning`),vu(495,`br`),Kg()()(),Qc(496,`td`,21)(497,`p`),Sk(498,`Tipo de toaster para mensagens de atenção.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Se(i,xe){if(i&1&&(Qc(0,`div`,1),vu(1,`sample-po-toaster-basic-view`)(2,`sample-po-toaster-labs-view`),Kg()),i&2){let s=ek();Rb(`hidden`,s.activeTab!==`web`)}}var fe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;title=`Toaster`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`,this.title=`Toaster · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(a,n){a&1&&(Qc(0,`po-page-default`,0),FO(1,Se,3,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-toaster-doc`),Kg()()),a&2&&(Rb(`p-title`,n.title)(`p-actions`,n.actions),wg(),VO(n.hidePoWebSample?-1:1),wg(),Rb(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,re,se,pe],encapsulation:2,changeDetection:1})}return i})()}];var de=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[GV.forChild(fe),GV]})}return i})();var Qe=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[M,de]})}return i})();export{Qe as DocPoToasterModule};
import{E as ln,S as ea,k as pn,m as P,p as M}from"./main-6GCKJMTQ.js";import{Ba as p,Br as Jn,Fr as H_,Hr as KO,It as bae,Lr as I,Pn as tre,Pt as are,W as Mze,Wr as Kg,Xr as Mk,Yi as _u,Zi as ar,_t as Tze,ar as Ab,co as wg,da as ge,eo as tk,jr as GV,ki as U_,lt as Ss,mr as Cb,oo as vt,or as An,qr as LO,ra as de,wn as q4,ya as jO,yn as oae,zr as Jc}from"./chunk-t_lpM8Oc.js";var W=(()=>{class n{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(i,l){i&1&&_u(0,`po-page-job-scheduler`,0),i&2&&Ab(`p-breadcrumb`,l.breadcrumb)},dependencies:[ea],encapsulation:2,changeDetection:1})}return n})();var G=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-job-scheduler-background-process`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,l){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Job Scheduler - Background Process`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-job-scheduler-background-process`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-background-process',
  templateUrl: './sample-po-page-job-scheduler-background-process.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerBackgroundProcessComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,W],encapsulation:2,changeDetection:1})}return n})();function oe(n,y){if(n&1){let r=KO();Jc(0,`h1`),Mk(1,`Etapa 1`),Kg(),Jc(2,`po-dynamic-form`,4),vt(`p-form`,function(l){U_(r);let x=tk();return H_(x.getFormExample(l))}),Kg()}if(n&2){let r=tk();wg(2),Ab(`p-fields`,r.parametersForm)}}function ne(n,y){if(n&1){let r=KO();Jc(0,`po-table`,5),vt(`p-selected`,function(l){U_(r);let x=tk();return H_(x.selectedItem(l))}),Kg()}if(n&2){let r=tk();Ab(`p-items`,r.items)(`p-selectable`,!0)}}function ie(n,y){if(n&1&&(Jc(0,`po-widget`,6),_u(1,`po-dynamic-view`,7),Kg()),n&2){let r=tk();wg(),Ab(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var X=(()=>{class n{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(i,l){i&1&&(Jc(0,`po-page-job-scheduler`,0),Cb(1,oe,3,1,`ng-template`,1)(2,ne,1,2,`ng-template`,2)(3,ie,2,2,`ng-template`,3),Kg()),i&2&&(Ab(`p-step-execution-last`,!0),wg(),Ab(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),wg(),Ab(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[oae,Tze,q4,bae,ea,ln,pn],encapsulation:2,changeDetection:1})}return n})();var U=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-job-scheduler-directives`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,l){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Job Scheduler - Directives`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-job-scheduler-directives`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-orientation="horizontal"
  [p-step-execution-last]="true"
>
  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="dynamicForm?.form.invalid"
    [p-execution-parameter]="dynamicForm?.form.value"
    p-title="1"
  >
    <h1>Etapa 1</h1>
    <po-dynamic-form [p-fields]="parametersForm" (p-form)="getFormExample($event)"> </po-dynamic-form>
  </ng-template>

  <ng-template
    p-job-scheduler-parameters-template
    [p-disable-advance]="!selectedValue.select.length"
    [p-execution-parameter]="selectedValue"
  >
    <po-table [p-items]="items" [p-selectable]="true" (p-selected)="selectedItem($event)"></po-table>
  </ng-template>
  <ng-template p-job-scheduler-summary-template>
    <po-widget p-title="Par\xE2metros">
      <po-dynamic-view [p-fields]="fieldsSummary" [p-value]="valueSummary"> </po-dynamic-view>
    </po-widget>
  </ng-template>
</po-page-job-scheduler>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-directives',
  templateUrl: './sample-po-page-job-scheduler-directives.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageJobSchedulerDirectivesComponent {
  dynamicForm!: NgForm;
  selectedValue = { select: [] };
  valueSummary;

  parametersForm: Array<PoDynamicFormField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      required: true,
      gridLgColumns: 12,
      gridXlColumns: 12
    }
  ];

  fieldsSummary: Array<PoDynamicViewField> = [
    {
      property: 'version',
      label: 'Vers\xE3o',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'selectedValue',
      label: 'Valor selecionado na tabela',
      isArrayOrObject: true,
      fieldLabel: 'customer',
      gridColumns: 6,
      gridSmColumns: 12
    }
  ];

  items: Array<any> = [
    {
      code: 1200,
      customer: 'Angeloni',
      driver: 'Jos\xE9 Oliveira'
    },
    {
      code: 1355,
      customer: 'Giassi',
      driver: 'Francisco Pereira'
    },
    {
      code: 1496,
      customer: 'Walmart',
      driver: 'Pedro da Costa'
    },
    {
      code: 1712,
      customer: 'Carrefour',
      driver: 'Jo\xE3o da Silva'
    }
  ];

  getFormExample(form: NgForm) {
    this.dynamicForm = form;
  }

  selectedItem(value: any) {
    this.selectedValue.select.push(value);

    this.valueSummary = {
      selectedValue: this.selectedValue.select,
      version: this.dynamicForm.form.value.version
    };
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,X],encapsulation:2,changeDetection:1})}return n})();var Q=(()=>{class n{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(i,l){i&1&&_u(0,`po-page-job-scheduler`,0),i&2&&Ab(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[ea],encapsulation:2})}return n})();var $=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-job-scheduler-flexible-navigation`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,l){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Job Scheduler - Navegação Flexível`),Kg()(),Jc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),_u(8,`sample-po-page-job-scheduler-flexible-navigation`),Kg()(),Jc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Mk(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),Kg(),Jc(13,`div`,7)(14,`pre`,8),Mk(15,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),Kg()()()(),Jc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Mk(19,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),Kg(),Jc(20,`div`,10)(21,`pre`,11),Mk(22,`import { Component } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-job-scheduler-flexible-navigation',
  templateUrl: './sample-po-page-job-scheduler-flexible-navigation.component.html',
  standalone: false
})
export class SamplePoPageJobSchedulerFlexibleNavigationComponent {
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Navega\xE7\xE3o Flex\xEDvel' }]
  };

  parameters: Array<PoDynamicFormField> = [
    {
      property: 'server',
      label: 'Servidor',
      required: true,
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'port',
      label: 'Porta',
      type: 'number',
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'environment',
      label: 'Ambiente',
      options: ['Desenvolvimento', 'Homologa\xE7\xE3o', 'Produ\xE7\xE3o'],
      gridLgColumns: 6,
      gridXlColumns: 6
    },
    {
      property: 'notify',
      label: 'Notificar por e-mail',
      type: 'boolean',
      booleanTrue: 'Sim',
      booleanFalse: 'N\xE3o',
      gridLgColumns: 6,
      gridXlColumns: 6
    }
  ];
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Q],encapsulation:2,changeDetection:1})}return n})();var K=(()=>{class n{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Job Scheduler Parameters Template`,3,`p-click`],[`p-value`,`Job Scheduler Summary Template`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-page-job-scheduler-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-allow-direct-navigation`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-before-send`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-parameters`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`id`,`prop-p-service-api`,1,`docs-api-properties-row`],[`href`,`/documentation/po-dynamic-form`],[`id`,`prop-p-step-execution-last`,1,`docs-api-properties-row`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`id`,`event-p-success`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-job-scheduler-daily`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`id`,`interface-po-job-scheduler-execution-parameter`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-job-scheduler-first-execution`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-monthly`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`id`,`interface-po-job-scheduler-process-id`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-recurrent`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-weekly`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`]],template:function(i,l){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),Kg()(),_u(4,`div`,2),Jc(5,`blockquote`,3)(6,`strong`),Mk(7,`Subcomponentes:`),Kg(),Jc(8,`po-tag`,4),vt(`p-click`,function(){return l.openDoc(`po-job-scheduler-parameters-template`)}),Kg(),Jc(9,`po-tag`,5),vt(`p-click`,function(){return l.openDoc(`po-job-scheduler-summary-template`)}),Kg()(),Jc(10,`h3`,6),Mk(11,`Componente`),Kg(),Jc(12,`h4`,7)(13,`code`,8),Mk(14,`PoPageJobSchedulerComponent`),Kg()(),Jc(15,`div`,2)(16,`p`),Mk(17,`O `),Jc(18,`code`),Mk(19,`po-page-job-scheduler`),Kg(),Mk(20,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),Kg(),Jc(21,`p`),Mk(22,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),Kg(),Jc(23,`p`),Mk(24,`Veja mais sobre os padrões utilizados nas requisições no `),Jc(25,`a`,9),Mk(26,`Guia de implementação de APIs`),Kg(),Mk(27,`.`),Kg(),Jc(28,`h4`),Mk(29,`Tokens customizáveis`),Kg(),Jc(30,`blockquote`)(31,`p`),Mk(32,`Para maiores informações, acesse o guia `),Jc(33,`a`,10),Mk(34,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(35,`.`),Kg()(),Jc(36,`table`)(37,`thead`)(38,`tr`)(39,`th`),Mk(40,`Propriedade`),Kg(),Jc(41,`th`),Mk(42,`Descrição`),Kg(),Jc(43,`th`),Mk(44,`Valor Padrão`),Kg()()(),Jc(45,`tbody`)(46,`tr`)(47,`td`)(48,`strong`),Mk(49,`Header`),Kg()(),_u(50,`td`)(51,`td`),Kg(),Jc(52,`tr`)(53,`td`)(54,`code`),Mk(55,`--padding`),Kg()(),Jc(56,`td`),Mk(57,`Espaçamento do header`),Kg(),Jc(58,`td`)(59,`code`),Mk(60,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Jc(61,`tr`)(62,`td`)(63,`code`),Mk(64,`--gap`),Kg()(),Jc(65,`td`),Mk(66,`Espaçamento entre os breadcrumbs e o título`),Kg(),Jc(67,`td`)(68,`code`),Mk(69,`var(--spacing-md)`),Kg()()(),Jc(70,`tr`)(71,`td`)(72,`code`),Mk(73,`--gap-actions`),Kg()(),Jc(74,`td`),Mk(75,`Espaçamento entre as ações`),Kg(),Jc(76,`td`)(77,`code`),Mk(78,`var(--spacing-xs)`),Kg()()(),Jc(79,`tr`)(80,`td`)(81,`code`),Mk(82,`--font-family`),Kg()(),Jc(83,`td`),Mk(84,`Família tipográfica do título`),Kg(),Jc(85,`td`)(86,`code`),Mk(87,`var(--font-family-theme)`),Kg()()(),Jc(88,`tr`)(89,`td`)(90,`strong`),Mk(91,`Content`),Kg()(),_u(92,`td`)(93,`td`),Kg(),Jc(94,`tr`)(95,`td`)(96,`code`),Mk(97,`--padding-content`),Kg()(),Jc(98,`td`),Mk(99,`Espaçamento do conteúdo`),Kg(),Jc(100,`td`)(101,`code`),Mk(102,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Jc(103,`div`,11)(104,`h4`,12),Mk(105,`Seletor`),Kg(),Jc(106,`pre`,13),Mk(107,`<po-page-job-scheduler
    p-allow-direct-navigation="boolean"
    p-before-send="unknown"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-error)="EventEmitter"
    p-parameters="Array<PoDynamicFormField>"
    p-service-api="string"
    p-step-execution-last="boolean"
    p-orientation="PoStepperOrientation"
    (p-success)="EventEmitter"
    p-title="string" >
</po-page-job-scheduler>
`),Kg()(),Jc(108,`h4`,14),Mk(109,`Propriedades`),Kg(),Jc(110,`table`,15)(111,`tr`,16)(112,`th`,17),Mk(113,`Nome`),Kg(),Jc(114,`th`,17),Mk(115,`Tipo`),Kg(),Jc(116,`th`,17),Mk(117,`Padrão`),Kg(),Jc(118,`th`,17),Mk(119,`Descrição`),Kg()(),Jc(120,`tr`,18)(121,`td`,19)(122,`div`,20)(123,`span`,21),Mk(124,` p-allow-direct-navigation`),_u(125,`br`),Kg()()(),Jc(126,`td`,22)(127,`code`,23),Mk(128,`boolean`),Kg()(),Jc(129,`td`,24)(130,`p`)(131,`code`),Mk(132,`false`),Kg()()(),Jc(133,`td`,25)(134,`em`)(135,`strong`),Mk(136,`(opcional)`),Kg()(),Jc(137,`p`),Mk(138,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),Kg(),Jc(139,`p`),Mk(140,`Quando habilitado (`),Jc(141,`code`),Mk(142,`true`),Kg(),Mk(143,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),Kg(),Jc(144,`blockquote`)(145,`p`),Mk(146,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),Kg()()()(),Jc(147,`tr`,26)(148,`td`,19)(149,`div`,20)(150,`span`,21),Mk(151,` p-before-send`),_u(152,`br`),Kg()()(),Jc(153,`td`,22)(154,`code`,27),Mk(155,`unknown`),Kg()(),Jc(156,`td`,24),Mk(157,`-`),Kg(),Jc(158,`td`,25)(159,`em`)(160,`strong`),Mk(161,`(opcional)`),Kg()(),Jc(162,`p`),Mk(163,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),Kg(),Jc(164,`blockquote`)(165,`p`),Mk(166,`Deve retornar um objeto do tipo `),Jc(167,`code`),Mk(168,`PoPageJobScheduler`),Kg(),Mk(169,` para ser adicionado ao model do PoPageJobScheduler.`),Kg()(),Jc(170,`blockquote`)(171,`p`),Mk(172,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),Jc(173,`code`),Mk(174,`PoJobSchedulerInternal`),Kg(),Mk(175,`.`),Kg()(),Jc(176,`p`),Mk(177,`O contexto da função que será chamada, será o mesmo que o do `),Jc(178,`code`),Mk(179,`PoPageJobScheduler`),Kg(),Mk(180,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Jc(181,`code`),Mk(182,`bind`),Kg(),Mk(183,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Jc(184,`code`),Mk(185,`beforeSend`),Kg(),Mk(186,`:`),Kg(),Jc(187,`pre`)(188,`code`),Mk(189,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),Kg()()()(),Jc(190,`tr`,28)(191,`td`,19)(192,`div`,20)(193,`span`,21),Mk(194,` p-breadcrumb`),_u(195,`br`),Kg()()(),Jc(196,`td`,22)(197,`code`,29),Mk(198,`PoBreadcrumb`),Kg()(),Jc(199,`td`,24),Mk(200,`-`),Kg(),Jc(201,`td`,25)(202,`em`)(203,`strong`),Mk(204,`(opcional)`),Kg()(),Jc(205,`p`),Mk(206,`Objeto com as propriedades do breadcrumb.`),Kg()()(),Jc(207,`tr`,30)(208,`td`,19)(209,`div`,20)(210,`span`,21),Mk(211,` p-components-size`),_u(212,`br`),Kg()()(),Jc(213,`td`,22)(214,`code`,31),Mk(215,`string`),Kg()(),Jc(216,`td`,24)(217,`p`)(218,`code`),Mk(219,`medium`),Kg()()(),Jc(220,`td`,25)(221,`em`)(222,`strong`),Mk(223,`(opcional)`),Kg()(),Jc(224,`p`),Mk(225,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(226,`ul`)(227,`li`)(228,`code`),Mk(229,`small`),Kg(),Mk(230,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(231,`li`)(232,`code`),Mk(233,`medium`),Kg(),Mk(234,`: aplica a medida medium de cada componente.`),Kg()(),Jc(235,`blockquote`)(236,`p`),Mk(237,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(238,`code`),Mk(239,`medium`),Kg(),Mk(240,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(241,`a`,32),Mk(242,`po-theme`),Kg(),Mk(243,`.`),Kg()()()(),Jc(244,`tr`,33)(245,`td`,19)(246,`div`,34)(247,`span`,35),Mk(248,` (p-error)`),_u(249,`br`),Kg()()(),Jc(250,`td`,22)(251,`code`,36),Mk(252,`EventEmitter`),Kg()(),Jc(253,`td`,24),Mk(254,`-`),Kg(),Jc(255,`td`,25)(256,`em`)(257,`strong`),Mk(258,`(opcional)`),Kg()(),Jc(259,`p`),Mk(260,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),Kg()()(),Jc(261,`tr`,37)(262,`td`,19)(263,`div`,20)(264,`span`,21),Mk(265,` p-parameters`),_u(266,`br`),Kg()()(),Jc(267,`td`,22)(268,`code`,38),Mk(269,`Array<PoDynamicFormField>`),Kg()(),Jc(270,`td`,24),Mk(271,`-`),Kg(),Jc(272,`td`,25)(273,`p`),Mk(274,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),Kg(),Jc(275,`p`),Mk(276,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),Kg()()(),Jc(277,`tr`,39)(278,`td`,19)(279,`div`,20)(280,`span`,21),Mk(281,` p-service-api`),_u(282,`br`),Kg()()(),Jc(283,`td`,22)(284,`code`,31),Mk(285,`string`),Kg()(),Jc(286,`td`,24),Mk(287,`-`),Kg(),Jc(288,`td`,25)(289,`p`),Mk(290,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),Kg(),Jc(291,`h4`),Mk(292,`Processos`),Kg(),Jc(293,`p`),Mk(294,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Jc(295,`code`),Mk(296,`GET`),Kg(),Mk(297,` para o endpoint `),Jc(298,`code`),Mk(299,`{service-api}/processes`),Kg(),Mk(300,`, para buscar
essa lista de processos.`),Kg(),Jc(301,`p`),Mk(302,`Este endpoint `),Jc(303,`code`),Mk(304,`{service-api}/processes`),Kg(),Mk(305,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),Kg(),Jc(306,`pre`)(307,`code`),Mk(308,`GET {service-api}/processes
`),Kg()(),Jc(309,`pre`)(310,`code`),Mk(311,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),Kg()(),Jc(312,`p`),Mk(313,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),Kg(),Jc(314,`p`),Mk(315,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Jc(316,`code`),Mk(317,`search`),Kg(),Mk(318,`. Da seguinte forma:`),Kg(),Jc(319,`pre`)(320,`code`),Mk(321,`GET {service-api}/processes?search=relatorio
`),Kg()(),Jc(322,`blockquote`)(323,`p`),Mk(324,`Veja mais sobre paginação e filtros no `),Jc(325,`a`,9),Mk(326,`Guia de implementação de APIs`),Kg(),Mk(327,`.
Caso seja informada a propriedade `),Jc(328,`code`),Mk(329,`p-parameters`),Kg(),Mk(330,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),Kg()(),Jc(331,`p`),Mk(332,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Jc(333,`code`),Mk(334,`{service-api}/processes`),Kg(),Mk(335,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Jc(336,`strong`),Mk(337,`identificador do processo - `),Jc(338,`code`),Mk(339,`processID`),Kg()(),Mk(340,` e ao salvar será enviado um `),Jc(341,`code`),Mk(342,`POST`),Kg(),Mk(343,` para o endpoint difinido `),Jc(344,`code`),Mk(345,`serviceApi`),Kg(),Mk(346,` conforme abaixo:`),Kg(),Jc(347,`pre`)(348,`code`),Mk(349,`POST {service-api}
`),Kg()(),Jc(350,`p`)(351,`em`),Mk(352,`Request payload`),Kg(),Mk(353,` - estrutura de dados enviada no corpo da requisição conforme interface `),Jc(354,`code`),Mk(355,`PoJobScheduler`),Kg(),Mk(356,`:`),Kg(),Jc(357,`pre`)(358,`code`),Mk(359,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),Kg()(),Jc(360,`p`),Mk(361,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),Jc(362,`code`),Mk(363,`GET`),Kg(),Mk(364,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Jc(365,`a`,40),Mk(366,`PoDynamicFormField`),Kg(),Mk(367,`. Porém, caso utilizar a propriedade `),Jc(368,`code`),Mk(369,`p-parameters`),Kg(),Mk(370,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),Kg(),Jc(371,`pre`)(372,`code`),Mk(373,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),Kg()(),Jc(374,`h4`),Mk(375,`Salvar e Atualizar`),Kg(),Jc(376,`p`),Mk(377,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),Jc(378,`em`),Mk(379,`payload`),Kg(),Mk(380,`.
Abaixo uma requisi\xE7\xE3o `),Jc(381,`code`),Mk(382,`POST`),Kg(),Mk(383,` disparada, onde as propriedades do `),Jc(384,`em`),Mk(385,`Job Scheduler`),Kg(),Mk(386,` foram preenchidas:`),Kg(),Jc(387,`pre`)(388,`code`),Mk(389,`POST {service-api}
`),Kg()(),Jc(390,`p`)(391,`em`),Mk(392,`Request payload`),Kg(),Mk(393,` - estrutura de dados enviada no corpo da requisição conforme interface `),Jc(394,`code`),Mk(395,`PoJobScheduler`),Kg(),Mk(396,`:`),Kg(),Jc(397,`pre`)(398,`code`),Mk(399,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),Kg()(),Jc(400,`p`),Mk(401,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),Jc(402,`code`),Mk(403,`id`),Kg(),Mk(404,`.`),Kg(),Jc(405,`p`),Mk(406,`Exemplo de configuração de rota:`),Kg(),Jc(407,`pre`)(408,`code`),Mk(409,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),Kg()(),Jc(410,`p`),Mk(411,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),Kg(),Jc(412,`pre`)(413,`code`),Mk(414,`GET {service-api}/{id}
`),Kg()(),Jc(415,`p`),Mk(416,`Ao atualizar o agendamento, será disparado um `),Jc(417,`code`),Mk(418,`PUT`),Kg(),Mk(419,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Jc(420,`code`),Mk(421,`PUT`),Kg(),Mk(422,` disparada, onde a propriedade `),Jc(423,`em`),Mk(424,`recurrent`),Kg(),Mk(425,` e `),Jc(426,`em`),Mk(427,`daily`),Kg(),Mk(428,` foram atualizadas:`),Kg(),Jc(429,`pre`)(430,`code`),Mk(431,`PUT {service-api}/{id}
`),Kg()(),Jc(432,`p`)(433,`em`),Mk(434,`Request payload`),Kg(),Mk(435,` - estrutura de dados enviada no corpo da requisição conforme interface `),Jc(436,`code`),Mk(437,`PoJobScheduler`),Kg(),Mk(438,`:`),Kg(),Jc(439,`pre`)(440,`code`),Mk(441,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),Kg()()()(),Jc(442,`tr`,41)(443,`td`,19)(444,`div`,20)(445,`span`,21),Mk(446,` p-step-execution-last`),_u(447,`br`),Kg()()(),Jc(448,`td`,22)(449,`code`,23),Mk(450,`boolean`),Kg()(),Jc(451,`td`,24),Mk(452,`-`),Kg(),Jc(453,`td`,25)(454,`em`)(455,`strong`),Mk(456,`(opcional)`),Kg()(),Jc(457,`p`),Mk(458,`Define se o step `),Jc(459,`code`),Mk(460,`Agendamento`),Kg(),Mk(461,` deve ser exibido como o último na sequência de steps`),Kg(),Jc(462,`blockquote`)(463,`p`),Mk(464,`Aplicável apenas quando utilizado `),Jc(465,`code`),Mk(466,`PoJobSchedulerParametersTemplateDirective`),Kg()()()()(),Jc(467,`tr`,42)(468,`td`,19)(469,`div`,20)(470,`span`,21),Mk(471,` p-orientation`),_u(472,`br`),Kg()()(),Jc(473,`td`,22)(474,`code`,43),Mk(475,`PoStepperOrientation`),Kg()(),Jc(476,`td`,24),Mk(477,`-`),Kg(),Jc(478,`td`,25)(479,`em`)(480,`strong`),Mk(481,`(opcional)`),Kg()(),Jc(482,`p`),Mk(483,`Define a orientação de exibição do `),Jc(484,`code`),Mk(485,`po-stepper`),Kg(),Mk(486,`.`),Kg(),Jc(487,`blockquote`)(488,`p`),Mk(489,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),Kg()(),Jc(490,`blockquote`)(491,`p`),Mk(492,`Veja os valores válidos no `),Jc(493,`em`),Mk(494,`enum`),Kg(),Jc(495,`a`,44),Mk(496,`PoStepperOrientation`),Kg(),Mk(497,`.`),Kg()()()(),Jc(498,`tr`,45)(499,`td`,19)(500,`div`,34)(501,`span`,35),Mk(502,` (p-success)`),_u(503,`br`),Kg()()(),Jc(504,`td`,22)(505,`code`,36),Mk(506,`EventEmitter`),Kg()(),Jc(507,`td`,24),Mk(508,`-`),Kg(),Jc(509,`td`,25)(510,`em`)(511,`strong`),Mk(512,`(opcional)`),Kg()(),Jc(513,`p`),Mk(514,`Evento disparado ao concluir o processo de agendamento com sucesso.`),Kg()()(),Jc(515,`tr`,46)(516,`td`,19)(517,`div`,20)(518,`span`,21),Mk(519,` p-title`),_u(520,`br`),Kg()()(),Jc(521,`td`,22)(522,`code`,31),Mk(523,`string`),Kg()(),Jc(524,`td`,24),Mk(525,`-`),Kg(),Jc(526,`td`,25)(527,`p`),Mk(528,`Título da página.`),Kg()()()(),Jc(529,`h3`),Mk(530,`Interfaces`),Kg(),Jc(531,`h4`,47)(532,`code`,8),Mk(533,`PoJobScheduler`),Kg()(),Jc(534,`div`,2)(535,`p`),Mk(536,`Estrutura do `),Jc(537,`em`),Mk(538,`payload`),Kg(),Mk(539,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),Jc(540,`em`),Mk(541,`Job Scheduler`),Kg(),Mk(542,`.`),Kg()(),Jc(543,`h4`,14),Mk(544,`Propriedades`),Kg(),Jc(545,`table`,15)(546,`tr`,16)(547,`th`,17),Mk(548,`Nome`),Kg(),Jc(549,`th`,17),Mk(550,`Tipo`),Kg(),Jc(551,`th`,17),Mk(552,`Descrição`),Kg()(),Jc(553,`tr`,48)(554,`td`,19)(555,`div`,20)(556,`span`,21),Mk(557,` daily`),_u(558,`br`),Kg()()(),Jc(559,`td`,22)(560,`code`,49),Mk(561,`{ hour: number; minute: number;
}`),Kg()(),Jc(562,`td`,25)(563,`em`)(564,`strong`),Mk(565,`(opcional)`),Kg()(),Jc(566,`p`),Mk(567,`Define uma repetição diária.`),Kg()()(),Jc(568,`tr`,50)(569,`td`,19)(570,`div`,20)(571,`span`,21),Mk(572,` executionParameter`),_u(573,`br`),Kg()()(),Jc(574,`td`,22)(575,`code`,51),Mk(576,`object`),Kg()(),Jc(577,`td`,25)(578,`em`)(579,`strong`),Mk(580,`(opcional)`),Kg()(),Jc(581,`p`),Mk(582,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),Kg()()(),Jc(583,`tr`,52)(584,`td`,19)(585,`div`,20)(586,`span`,21),Mk(587,` firstExecution`),_u(588,`br`),Kg()()(),Jc(589,`td`,22)(590,`code`,31),Mk(591,`string`),Kg()(),Jc(592,`td`,25)(593,`em`)(594,`strong`),Mk(595,`(opcional)`),Kg()(),Jc(596,`p`),Mk(597,`Data da primeira execução.`),Kg()()(),Jc(598,`tr`,53)(599,`td`,19)(600,`div`,20)(601,`span`,21),Mk(602,` monthly`),_u(603,`br`),Kg()()(),Jc(604,`td`,22)(605,`code`,54),Mk(606,`{ day: number; hour: number; minute: number;
}`),Kg()(),Jc(607,`td`,25)(608,`em`)(609,`strong`),Mk(610,`(opcional)`),Kg()(),Jc(611,`p`),Mk(612,`Define uma repetição mensal.`),Kg()()(),Jc(613,`tr`,55)(614,`td`,19)(615,`div`,20)(616,`span`,21),Mk(617,` processID`),_u(618,`br`),Kg()()(),Jc(619,`td`,22)(620,`code`,31),Mk(621,`string`),Kg()(),Jc(622,`td`,25)(623,`p`),Mk(624,`Identificador do processo.`),Kg()()(),Jc(625,`tr`,56)(626,`td`,19)(627,`div`,20)(628,`span`,21),Mk(629,` recurrent`),_u(630,`br`),Kg()()(),Jc(631,`td`,22)(632,`code`,23),Mk(633,`boolean`),Kg()(),Jc(634,`td`,25)(635,`em`)(636,`strong`),Mk(637,`(opcional)`),Kg()(),Jc(638,`p`),Mk(639,`Permite uma execução recorrente.`),Kg()()(),Jc(640,`tr`,57)(641,`td`,19)(642,`div`,20)(643,`span`,21),Mk(644,` weekly`),_u(645,`br`),Kg()()(),Jc(646,`td`,22)(647,`code`,58),Mk(648,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),Kg()(),Jc(649,`td`,25)(650,`em`)(651,`strong`),Mk(652,`(opcional)`),Kg()(),Jc(653,`p`),Mk(654,`Define uma repetição semanal.`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return n})();function pe(n,y){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-job-scheduler-background-process-view`)(2,`sample-po-page-job-scheduler-directives-view`)(3,`sample-po-page-job-scheduler-flexible-navigation-view`),Kg()),n&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var se=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Page Job Scheduler`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Page Job Scheduler · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,l){i&1&&(Jc(0,`po-page-default`,0),LO(1,pe,4,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-page-job-scheduler-doc`),Kg()()),i&2&&(Ab(`p-title`,l.title)(`p-actions`,l.actions),wg(),jO(l.hidePoWebSample?-1:1),wg(),Ab(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,G,U,$,K],encapsulation:2,changeDetection:1})}return n})()}];var Z=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(se),GV]})}return n})();var Ne=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,Z]})}return n})();export{Ne as DocPoPageJobSchedulerModule};
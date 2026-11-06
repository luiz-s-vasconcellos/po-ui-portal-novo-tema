import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,Hi as ar,Ja as vt,L as Joe,Li as ZO,Mr as Jc,Ri as Zg,Vi as _u,Wt as bze,Xt as ere,Yi as eF,Zt as fae,at as R4,ea as ge$1,er as An,fi as Rb,fr as Db,gi as Tk,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,rt as Qae,va as nk,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{_ as pn,m as ln,n as P,t as M,u as ea}from"./main-HXZZSDJT.js";var W=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(o,l){o&1&&_u(0,`po-page-job-scheduler`,0),o&2&&Rb(`p-breadcrumb`,l.breadcrumb)},dependencies:[ea],encapsulation:2,changeDetection:1})}return i})();var oe=i=>({"docs-sample-code-tabs":i});var Q=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Job Scheduler - Background Process`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-job-scheduler-background-process`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+l.sampleCodeButtonIcon),Ig(),nm(` `,l.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,oe,l.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,W],encapsulation:2,changeDetection:1})}return i})();function re(i,J){if(i&1){let r=ZO();Jc(0,`h1`),Tk(1,`Etapa 1`),Zg(),Jc(2,`po-dynamic-form`,4),vt(`p-form`,function(l){U_(r);let S=nk();return H_(S.getFormExample(l))}),Zg()}if(i&2){let r=nk();Ig(2),Rb(`p-fields`,r.parametersForm)}}function le(i,J){if(i&1){let r=ZO();Jc(0,`po-table`,5),vt(`p-selected`,function(l){U_(r);let S=nk();return H_(S.selectedItem(l))}),Zg()}if(i&2){let r=nk();Rb(`p-items`,r.items)(`p-selectable`,!0)}}function me(i,J){if(i&1&&(Jc(0,`po-widget`,6),_u(1,`po-dynamic-view`,7),Zg()),i&2){let r=nk();Ig(),Rb(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var $=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(o,l){o&1&&(Jc(0,`po-page-job-scheduler`,0),Db(1,re,3,1,`ng-template`,1)(2,le,1,2,`ng-template`,2)(3,me,2,2,`ng-template`,3),Zg()),o&2&&(Rb(`p-step-execution-last`,!0),Ig(),Rb(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),Ig(),Rb(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[Joe,bze,R4,fae,ea,ln,pn],encapsulation:2,changeDetection:1})}return i})();var pe=i=>({"docs-sample-code-tabs":i});var K=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Job Scheduler - Directives`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-job-scheduler
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-job-scheduler-directives`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+l.sampleCodeButtonIcon),Ig(),nm(` `,l.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,pe,l.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,$],encapsulation:2,changeDetection:1})}return i})();var Y=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(o,l){o&1&&_u(0,`po-page-job-scheduler`,0),o&2&&Rb(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[ea],encapsulation:2})}return i})();var ue=i=>({"docs-sample-code-tabs":i});var Z=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Job Scheduler - Navegação Flexível`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-job-scheduler-flexible-navigation`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+l.sampleCodeButtonIcon),Ig(),nm(` `,l.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ue,l.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Y],encapsulation:2,changeDetection:1})}return i})();var ee=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:650,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`href`,`/documentation/po-dynamic-form`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`object`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`]],template:function(o,l){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),Zg()(),_u(4,`div`,2),Jc(5,`h3`,3),Tk(6,`Componente`),Zg(),Jc(7,`h4`,4)(8,`code`,5),Tk(9,`PoPageJobSchedulerComponent`),Zg()(),Jc(10,`div`,2)(11,`p`),Tk(12,`O `),Jc(13,`code`),Tk(14,`po-page-job-scheduler`),Zg(),Tk(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),Zg(),Jc(16,`p`),Tk(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),Zg(),Jc(18,`p`),Tk(19,`Veja mais sobre os padrões utilizados nas requisições no `),Jc(20,`a`,6),Tk(21,`Guia de implementação de APIs`),Zg(),Tk(22,`.`),Zg(),Jc(23,`h4`),Tk(24,`Tokens customizáveis`),Zg(),Jc(25,`blockquote`)(26,`p`),Tk(27,`Para maiores informações, acesse o guia `),Jc(28,`a`,7),Tk(29,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(30,`.`),Zg()(),Jc(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),Tk(35,`Propriedade`),Zg(),Jc(36,`th`),Tk(37,`Descrição`),Zg(),Jc(38,`th`),Tk(39,`Valor Padrão`),Zg()()(),Jc(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),Tk(44,`Header`),Zg()(),_u(45,`td`)(46,`td`),Zg(),Jc(47,`tr`)(48,`td`)(49,`code`),Tk(50,`--padding`),Zg()(),Jc(51,`td`),Tk(52,`Espaçamento do header`),Zg(),Jc(53,`td`)(54,`code`),Tk(55,`var(--spacing-xs) var(--spacing-md)`),Zg()()(),Jc(56,`tr`)(57,`td`)(58,`code`),Tk(59,`--gap`),Zg()(),Jc(60,`td`),Tk(61,`Espaçamento entre os breadcrumbs e o título`),Zg(),Jc(62,`td`)(63,`code`),Tk(64,`var(--spacing-md)`),Zg()()(),Jc(65,`tr`)(66,`td`)(67,`code`),Tk(68,`--gap-actions`),Zg()(),Jc(69,`td`),Tk(70,`Espaçamento entre as ações`),Zg(),Jc(71,`td`)(72,`code`),Tk(73,`var(--spacing-xs)`),Zg()()(),Jc(74,`tr`)(75,`td`)(76,`code`),Tk(77,`--font-family`),Zg()(),Jc(78,`td`),Tk(79,`Família tipográfica do título`),Zg(),Jc(80,`td`)(81,`code`),Tk(82,`var(--font-family-theme)`),Zg()()(),Jc(83,`tr`)(84,`td`)(85,`strong`),Tk(86,`Content`),Zg()(),_u(87,`td`)(88,`td`),Zg(),Jc(89,`tr`)(90,`td`)(91,`code`),Tk(92,`--padding-content`),Zg()(),Jc(93,`td`),Tk(94,`Espaçamento do conteúdo`),Zg(),Jc(95,`td`)(96,`code`),Tk(97,`var(--spacing-xs) var(--spacing-sm)`),Zg()()()()()(),Jc(98,`div`,8)(99,`h4`,9),Tk(100,`Seletor`),Zg(),Jc(101,`pre`,10),Tk(102,`<po-page-job-scheduler
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
`),Zg()(),Jc(103,`h4`,11),Tk(104,`Propriedades`),Zg(),Jc(105,`table`,12)(106,`tr`,13)(107,`th`,14),Tk(108,`Nome`),Zg(),Jc(109,`th`,14),Tk(110,`Tipo`),Zg(),Jc(111,`th`,14),Tk(112,`Padrão`),Zg(),Jc(113,`th`,14),Tk(114,`Descrição`),Zg()(),Jc(115,`tr`,15)(116,`td`,16)(117,`div`,17)(118,`span`,18),Tk(119,` p-allow-direct-navigation`),_u(120,`br`),Zg()()(),Jc(121,`td`,19)(122,`code`,20),Tk(123,`boolean`),Zg()(),Jc(124,`td`,21)(125,`p`)(126,`code`),Tk(127,`false`),Zg()()(),Jc(128,`td`,22)(129,`em`)(130,`strong`),Tk(131,`(opcional)`),Zg()(),Jc(132,`p`),Tk(133,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),Zg(),Jc(134,`p`),Tk(135,`Quando habilitado (`),Jc(136,`code`),Tk(137,`true`),Zg(),Tk(138,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),Zg(),Jc(139,`blockquote`)(140,`p`),Tk(141,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),Zg()()()(),Jc(142,`tr`,15)(143,`td`,16)(144,`div`,17)(145,`span`,18),Tk(146,` p-before-send`),_u(147,`br`),Zg()()(),Jc(148,`td`,19)(149,`code`,23),Tk(150,`unknown`),Zg()(),Jc(151,`td`,21),Tk(152,`-`),Zg(),Jc(153,`td`,22)(154,`em`)(155,`strong`),Tk(156,`(opcional)`),Zg()(),Jc(157,`p`),Tk(158,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),Zg(),Jc(159,`blockquote`)(160,`p`),Tk(161,`Deve retornar um objeto do tipo `),Jc(162,`code`),Tk(163,`PoPageJobScheduler`),Zg(),Tk(164,` para ser adicionado ao model do PoPageJobScheduler.`),Zg()(),Jc(165,`blockquote`)(166,`p`),Tk(167,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),Jc(168,`code`),Tk(169,`PoJobSchedulerInternal`),Zg(),Tk(170,`.`),Zg()(),Jc(171,`p`),Tk(172,`O contexto da função que será chamada, será o mesmo que o do `),Jc(173,`code`),Tk(174,`PoPageJobScheduler`),Zg(),Tk(175,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Jc(176,`code`),Tk(177,`bind`),Zg(),Tk(178,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Jc(179,`code`),Tk(180,`beforeSend`),Zg(),Tk(181,`:`),Zg(),Jc(182,`pre`)(183,`code`),Tk(184,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),Zg()()()(),Jc(185,`tr`,15)(186,`td`,16)(187,`div`,17)(188,`span`,18),Tk(189,` p-breadcrumb`),_u(190,`br`),Zg()()(),Jc(191,`td`,19)(192,`code`,24),Tk(193,`PoBreadcrumb`),Zg()(),Jc(194,`td`,21),Tk(195,`-`),Zg(),Jc(196,`td`,22)(197,`em`)(198,`strong`),Tk(199,`(opcional)`),Zg()(),Jc(200,`p`),Tk(201,`Objeto com as propriedades do breadcrumb.`),Zg()()(),Jc(202,`tr`,15)(203,`td`,16)(204,`div`,17)(205,`span`,18),Tk(206,` p-components-size`),_u(207,`br`),Zg()()(),Jc(208,`td`,19)(209,`code`,25),Tk(210,`string`),Zg()(),Jc(211,`td`,21)(212,`p`)(213,`code`),Tk(214,`medium`),Zg()()(),Jc(215,`td`,22)(216,`em`)(217,`strong`),Tk(218,`(opcional)`),Zg()(),Jc(219,`p`),Tk(220,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(221,`ul`)(222,`li`)(223,`code`),Tk(224,`small`),Zg(),Tk(225,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(226,`li`)(227,`code`),Tk(228,`medium`),Zg(),Tk(229,`: aplica a medida medium de cada componente.`),Zg()(),Jc(230,`blockquote`)(231,`p`),Tk(232,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(233,`code`),Tk(234,`medium`),Zg(),Tk(235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(236,`a`,26),Tk(237,`po-theme`),Zg(),Tk(238,`.`),Zg()()()(),Jc(239,`tr`,15)(240,`td`,16)(241,`div`,27)(242,`span`,28),Tk(243,` (p-error)`),_u(244,`br`),Zg()()(),Jc(245,`td`,19)(246,`code`,29),Tk(247,`EventEmitter`),Zg()(),Jc(248,`td`,21),Tk(249,`-`),Zg(),Jc(250,`td`,22)(251,`em`)(252,`strong`),Tk(253,`(opcional)`),Zg()(),Jc(254,`p`),Tk(255,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),Zg()()(),Jc(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),Tk(260,` p-parameters`),_u(261,`br`),Zg()()(),Jc(262,`td`,19)(263,`code`,30),Tk(264,`Array<PoDynamicFormField>`),Zg()(),Jc(265,`td`,21),Tk(266,`-`),Zg(),Jc(267,`td`,22)(268,`p`),Tk(269,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),Zg(),Jc(270,`p`),Tk(271,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),Zg()()(),Jc(272,`tr`,15)(273,`td`,16)(274,`div`,17)(275,`span`,18),Tk(276,` p-service-api`),_u(277,`br`),Zg()()(),Jc(278,`td`,19)(279,`code`,25),Tk(280,`string`),Zg()(),Jc(281,`td`,21),Tk(282,`-`),Zg(),Jc(283,`td`,22)(284,`p`),Tk(285,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),Zg(),Jc(286,`h4`),Tk(287,`Processos`),Zg(),Jc(288,`p`),Tk(289,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Jc(290,`code`),Tk(291,`GET`),Zg(),Tk(292,` para o endpoint `),Jc(293,`code`),Tk(294,`{service-api}/processes`),Zg(),Tk(295,`, para buscar
essa lista de processos.`),Zg(),Jc(296,`p`),Tk(297,`Este endpoint `),Jc(298,`code`),Tk(299,`{service-api}/processes`),Zg(),Tk(300,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),Zg(),Jc(301,`pre`)(302,`code`),Tk(303,`GET {service-api}/processes
`),Zg()(),Jc(304,`pre`)(305,`code`),Tk(306,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),Zg()(),Jc(307,`p`),Tk(308,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),Zg(),Jc(309,`p`),Tk(310,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Jc(311,`code`),Tk(312,`search`),Zg(),Tk(313,`. Da seguinte forma:`),Zg(),Jc(314,`pre`)(315,`code`),Tk(316,`GET {service-api}/processes?search=relatorio
`),Zg()(),Jc(317,`blockquote`)(318,`p`),Tk(319,`Veja mais sobre paginação e filtros no `),Jc(320,`a`,6),Tk(321,`Guia de implementação de APIs`),Zg(),Tk(322,`.
Caso seja informada a propriedade `),Jc(323,`code`),Tk(324,`p-parameters`),Zg(),Tk(325,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),Zg()(),Jc(326,`p`),Tk(327,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Jc(328,`code`),Tk(329,`{service-api}/processes`),Zg(),Tk(330,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Jc(331,`strong`),Tk(332,`identificador do processo - `),Jc(333,`code`),Tk(334,`processID`),Zg()(),Tk(335,` e ao salvar será enviado um `),Jc(336,`code`),Tk(337,`POST`),Zg(),Tk(338,` para o endpoint difinido `),Jc(339,`code`),Tk(340,`serviceApi`),Zg(),Tk(341,` conforme abaixo:`),Zg(),Jc(342,`pre`)(343,`code`),Tk(344,`POST {service-api}
`),Zg()(),Jc(345,`p`)(346,`em`),Tk(347,`Request payload`),Zg(),Tk(348,` - estrutura de dados enviada no corpo da requisição conforme interface `),Jc(349,`code`),Tk(350,`PoJobScheduler`),Zg(),Tk(351,`:`),Zg(),Jc(352,`pre`)(353,`code`),Tk(354,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),Zg()(),Jc(355,`p`),Tk(356,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),Jc(357,`code`),Tk(358,`GET`),Zg(),Tk(359,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Jc(360,`a`,31),Tk(361,`PoDynamicFormField`),Zg(),Tk(362,`. Porém, caso utilizar a propriedade `),Jc(363,`code`),Tk(364,`p-parameters`),Zg(),Tk(365,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),Zg(),Jc(366,`pre`)(367,`code`),Tk(368,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),Zg()(),Jc(369,`h4`),Tk(370,`Salvar e Atualizar`),Zg(),Jc(371,`p`),Tk(372,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),Jc(373,`em`),Tk(374,`payload`),Zg(),Tk(375,`.
Abaixo uma requisi\xE7\xE3o `),Jc(376,`code`),Tk(377,`POST`),Zg(),Tk(378,` disparada, onde as propriedades do `),Jc(379,`em`),Tk(380,`Job Scheduler`),Zg(),Tk(381,` foram preenchidas:`),Zg(),Jc(382,`pre`)(383,`code`),Tk(384,`POST {service-api}
`),Zg()(),Jc(385,`p`)(386,`em`),Tk(387,`Request payload`),Zg(),Tk(388,` - estrutura de dados enviada no corpo da requisição conforme interface `),Jc(389,`code`),Tk(390,`PoJobScheduler`),Zg(),Tk(391,`:`),Zg(),Jc(392,`pre`)(393,`code`),Tk(394,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),Zg()(),Jc(395,`p`),Tk(396,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),Jc(397,`code`),Tk(398,`id`),Zg(),Tk(399,`.`),Zg(),Jc(400,`p`),Tk(401,`Exemplo de configuração de rota:`),Zg(),Jc(402,`pre`)(403,`code`),Tk(404,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),Zg()(),Jc(405,`p`),Tk(406,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),Zg(),Jc(407,`pre`)(408,`code`),Tk(409,`GET {service-api}/{id}
`),Zg()(),Jc(410,`p`),Tk(411,`Ao atualizar o agendamento, será disparado um `),Jc(412,`code`),Tk(413,`PUT`),Zg(),Tk(414,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Jc(415,`code`),Tk(416,`PUT`),Zg(),Tk(417,` disparada, onde a propriedade `),Jc(418,`em`),Tk(419,`recurrent`),Zg(),Tk(420,` e `),Jc(421,`em`),Tk(422,`daily`),Zg(),Tk(423,` foram atualizadas:`),Zg(),Jc(424,`pre`)(425,`code`),Tk(426,`PUT {service-api}/{id}
`),Zg()(),Jc(427,`p`)(428,`em`),Tk(429,`Request payload`),Zg(),Tk(430,` - estrutura de dados enviada no corpo da requisição conforme interface `),Jc(431,`code`),Tk(432,`PoJobScheduler`),Zg(),Tk(433,`:`),Zg(),Jc(434,`pre`)(435,`code`),Tk(436,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),Zg()()()(),Jc(437,`tr`,15)(438,`td`,16)(439,`div`,17)(440,`span`,18),Tk(441,` p-step-execution-last`),_u(442,`br`),Zg()()(),Jc(443,`td`,19)(444,`code`,20),Tk(445,`boolean`),Zg()(),Jc(446,`td`,21),Tk(447,`-`),Zg(),Jc(448,`td`,22)(449,`em`)(450,`strong`),Tk(451,`(opcional)`),Zg()(),Jc(452,`p`),Tk(453,`Define se o step `),Jc(454,`code`),Tk(455,`Agendamento`),Zg(),Tk(456,` deve ser exibido como o último na sequência de steps`),Zg(),Jc(457,`blockquote`)(458,`p`),Tk(459,`Aplicável apenas quando utilizado `),Jc(460,`code`),Tk(461,`PoJobSchedulerParametersTemplateDirective`),Zg()()()()(),Jc(462,`tr`,15)(463,`td`,16)(464,`div`,17)(465,`span`,18),Tk(466,` p-orientation`),_u(467,`br`),Zg()()(),Jc(468,`td`,19)(469,`code`,32),Tk(470,`PoStepperOrientation`),Zg()(),Jc(471,`td`,21),Tk(472,`-`),Zg(),Jc(473,`td`,22)(474,`em`)(475,`strong`),Tk(476,`(opcional)`),Zg()(),Jc(477,`p`),Tk(478,`Define a orientação de exibição do `),Jc(479,`code`),Tk(480,`po-stepper`),Zg(),Tk(481,`.`),Zg(),Jc(482,`blockquote`)(483,`p`),Tk(484,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),Zg()(),Jc(485,`blockquote`)(486,`p`),Tk(487,`Veja os valores válidos no `),Jc(488,`em`),Tk(489,`enum`),Zg(),Jc(490,`a`,33),Tk(491,`PoStepperOrientation`),Zg(),Tk(492,`.`),Zg()()()(),Jc(493,`tr`,15)(494,`td`,16)(495,`div`,27)(496,`span`,28),Tk(497,` (p-success)`),_u(498,`br`),Zg()()(),Jc(499,`td`,19)(500,`code`,29),Tk(501,`EventEmitter`),Zg()(),Jc(502,`td`,21),Tk(503,`-`),Zg(),Jc(504,`td`,22)(505,`em`)(506,`strong`),Tk(507,`(opcional)`),Zg()(),Jc(508,`p`),Tk(509,`Evento disparado ao concluir o processo de agendamento com sucesso.`),Zg()()(),Jc(510,`tr`,15)(511,`td`,16)(512,`div`,17)(513,`span`,18),Tk(514,` p-title`),_u(515,`br`),Zg()()(),Jc(516,`td`,19)(517,`code`,25),Tk(518,`string`),Zg()(),Jc(519,`td`,21),Tk(520,`-`),Zg(),Jc(521,`td`,22)(522,`p`),Tk(523,`Título da página.`),Zg()()()(),Jc(524,`h3`),Tk(525,`Interfaces`),Zg(),Jc(526,`h4`,34)(527,`code`,5),Tk(528,`PoJobScheduler`),Zg()(),Jc(529,`div`,2)(530,`p`),Tk(531,`Estrutura do `),Jc(532,`em`),Tk(533,`payload`),Zg(),Tk(534,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),Jc(535,`em`),Tk(536,`Job Scheduler`),Zg(),Tk(537,`.`),Zg()(),Jc(538,`h4`,11),Tk(539,`Propriedades`),Zg(),Jc(540,`table`,12)(541,`tr`,13)(542,`th`,14),Tk(543,`Nome`),Zg(),Jc(544,`th`,14),Tk(545,`Tipo`),Zg(),Jc(546,`th`,14),Tk(547,`Descrição`),Zg()(),Jc(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),Tk(552,` daily`),_u(553,`br`),Zg()()(),Jc(554,`td`,19)(555,`code`,35),Tk(556,`{ hour: number; minute: number;
}`),Zg()(),Jc(557,`td`,22)(558,`em`)(559,`strong`),Tk(560,`(opcional)`),Zg()(),Jc(561,`p`),Tk(562,`Define uma repetição diária.`),Zg()()(),Jc(563,`tr`,15)(564,`td`,16)(565,`div`,17)(566,`span`,18),Tk(567,` executionParameter`),_u(568,`br`),Zg()()(),Jc(569,`td`,19)(570,`code`,36),Tk(571,`object`),Zg()(),Jc(572,`td`,22)(573,`em`)(574,`strong`),Tk(575,`(opcional)`),Zg()(),Jc(576,`p`),Tk(577,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),Zg()()(),Jc(578,`tr`,15)(579,`td`,16)(580,`div`,17)(581,`span`,18),Tk(582,` firstExecution`),_u(583,`br`),Zg()()(),Jc(584,`td`,19)(585,`code`,25),Tk(586,`string`),Zg()(),Jc(587,`td`,22)(588,`em`)(589,`strong`),Tk(590,`(opcional)`),Zg()(),Jc(591,`p`),Tk(592,`Data da primeira execução.`),Zg()()(),Jc(593,`tr`,15)(594,`td`,16)(595,`div`,17)(596,`span`,18),Tk(597,` monthly`),_u(598,`br`),Zg()()(),Jc(599,`td`,19)(600,`code`,37),Tk(601,`{ day: number; hour: number; minute: number;
}`),Zg()(),Jc(602,`td`,22)(603,`em`)(604,`strong`),Tk(605,`(opcional)`),Zg()(),Jc(606,`p`),Tk(607,`Define uma repetição mensal.`),Zg()()(),Jc(608,`tr`,15)(609,`td`,16)(610,`div`,17)(611,`span`,18),Tk(612,` processID`),_u(613,`br`),Zg()()(),Jc(614,`td`,19)(615,`code`,25),Tk(616,`string`),Zg()(),Jc(617,`td`,22)(618,`p`),Tk(619,`Identificador do processo.`),Zg()()(),Jc(620,`tr`,15)(621,`td`,16)(622,`div`,17)(623,`span`,18),Tk(624,` recurrent`),_u(625,`br`),Zg()()(),Jc(626,`td`,19)(627,`code`,20),Tk(628,`boolean`),Zg()(),Jc(629,`td`,22)(630,`em`)(631,`strong`),Tk(632,`(opcional)`),Zg()(),Jc(633,`p`),Tk(634,`Permite uma execução recorrente.`),Zg()()(),Jc(635,`tr`,15)(636,`td`,16)(637,`div`,17)(638,`span`,18),Tk(639,` weekly`),_u(640,`br`),Zg()()(),Jc(641,`td`,19)(642,`code`,38),Tk(643,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),Zg()(),Jc(644,`td`,22)(645,`em`)(646,`strong`),Tk(647,`(opcional)`),Zg()(),Jc(648,`p`),Tk(649,`Define uma repetição semanal.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function ge(i,J){if(i&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let l=nk();return H_(l.changeTab(`web`))}),_u(1,`sample-po-page-job-scheduler-background-process-view`)(2,`sample-po-page-job-scheduler-directives-view`)(3,`sample-po-page-job-scheduler-flexible-navigation-view`),Zg()}if(i&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var Se=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Job Scheduler`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,l){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,ge,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),_u(4,`sample-po-page-job-scheduler-doc`),Zg()()()),o&2&&(Rb(`p-actions`,l.actions),Ig(2),BO(l.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Q,K,Z,ee],encapsulation:2,changeDetection:1})}return i})()}];var ne=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[WV.forChild(Se),WV]})}return i})();var Oe=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,ne]})}return i})();export{Oe as DocPoPageJobSchedulerModule};
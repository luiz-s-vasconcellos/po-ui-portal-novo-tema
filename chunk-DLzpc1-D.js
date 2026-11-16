import{E as ln,S as ea,k as pn,m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,It as bae,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,W as Mze,Zi as ar,_t as Tze,ar as An,ci as QP,cr as B_,da as gk,gi as Rb,hr as Db,io as vu,ji as Vk,li as Qc,na as de,oo as wg,ro as vt,sa as ek,ua as ge$1,vi as Sk,wn as q4,wr as GV,xr as FO,yn as oae}from"./chunk-DtUf9FxZ.js";var W=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Background Process Scheduler`}]};static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process`]],standalone:!1,decls:1,vars:1,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Background Process Scheduler`,3,`p-breadcrumb`]],template:function(o,l){o&1&&vu(0,`po-page-job-scheduler`,0),o&2&&Rb(`p-breadcrumb`,l.breadcrumb)},dependencies:[ea],encapsulation:2,changeDetection:1})}return i})();var oe=i=>({"docs-sample-code-tabs":i});var Q=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-background-process-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-job-scheduler-background-process`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Job Scheduler - Background Process`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Background Process Scheduler"
  [p-breadcrumb]="breadcrumb"
>
</po-page-job-scheduler>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-job-scheduler-background-process/sample-po-page-job-scheduler-background-process.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-job-scheduler-background-process`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,oe,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,W],encapsulation:2,changeDetection:1})}return i})();function re(i,k){if(i&1){let r=YO();Qc(0,`h1`),Sk(1,`Etapa 1`),Kg(),Qc(2,`po-dynamic-form`,4),vt(`p-form`,function(l){B_(r);let S=ek();return U_(S.getFormExample(l))}),Kg()}if(i&2){let r=ek();wg(2),Rb(`p-fields`,r.parametersForm)}}function le(i,k){if(i&1){let r=YO();Qc(0,`po-table`,5),vt(`p-selected`,function(l){B_(r);let S=ek();return U_(S.selectedItem(l))}),Kg()}if(i&2){let r=ek();Rb(`p-items`,r.items)(`p-selectable`,!0)}}function me(i,k){if(i&1&&(Qc(0,`po-widget`,6),vu(1,`po-dynamic-view`,7),Kg()),i&2){let r=ek();wg(),Rb(`p-fields`,r.fieldsSummary)(`p-value`,r.valueSummary)}}var $=(()=>{class i{dynamicForm;selectedValue={select:[]};valueSummary;parametersForm=[{property:`version`,label:`Versão`,required:!0,gridLgColumns:12,gridXlColumns:12}];fieldsSummary=[{property:`version`,label:`Versão`,gridColumns:6,gridSmColumns:12},{property:`selectedValue`,label:`Valor selecionado na tabela`,isArrayOrObject:!0,fieldLabel:`customer`,gridColumns:6,gridSmColumns:12}];items=[{code:1200,customer:`Angeloni`,driver:`José Oliveira`},{code:1355,customer:`Giassi`,driver:`Francisco Pereira`},{code:1496,customer:`Walmart`,driver:`Pedro da Costa`},{code:1712,customer:`Carrefour`,driver:`João da Silva`}];getFormExample(r){this.dynamicForm=r}selectedItem(r){this.selectedValue.select.push(r),this.valueSummary={selectedValue:this.selectedValue.select,version:this.dynamicForm.form.value.version}}static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-directives`]],standalone:!1,decls:4,vars:5,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-orientation`,`horizontal`,3,`p-step-execution-last`],[`p-job-scheduler-parameters-template`,``,`p-title`,`1`,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-parameters-template`,``,3,`p-disable-advance`,`p-execution-parameter`],[`p-job-scheduler-summary-template`,``],[3,`p-form`,`p-fields`],[3,`p-selected`,`p-items`,`p-selectable`],[`p-title`,`Parâmetros`],[3,`p-fields`,`p-value`]],template:function(o,l){o&1&&(Qc(0,`po-page-job-scheduler`,0),Db(1,re,3,1,`ng-template`,1)(2,le,1,2,`ng-template`,2)(3,me,2,2,`ng-template`,3),Kg()),o&2&&(Rb(`p-step-execution-last`,!0),wg(),Rb(`p-disable-advance`,l.dynamicForm?.form.invalid)(`p-execution-parameter`,l.dynamicForm?.form.value),wg(),Rb(`p-disable-advance`,!l.selectedValue.select.length)(`p-execution-parameter`,l.selectedValue))},dependencies:[oae,Tze,q4,bae,ea,ln,pn],encapsulation:2,changeDetection:1})}return i})();var pe=i=>({"docs-sample-code-tabs":i});var K=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-directives-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-job-scheduler-directives`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Job Scheduler - Directives`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-job-scheduler
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
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-job-scheduler-directives/sample-po-page-job-scheduler-directives.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-job-scheduler-directives`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,pe,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,$],encapsulation:2,changeDetection:1})}return i})();var Y=(()=>{class i{breadcrumb={items:[{label:`Home`,link:`/`},{label:`Pipelines`,link:`/`},{label:`Navegação Flexível`}]};parameters=[{property:`server`,label:`Servidor`,required:!0,gridLgColumns:6,gridXlColumns:6},{property:`port`,label:`Porta`,type:`number`,gridLgColumns:6,gridXlColumns:6},{property:`environment`,label:`Ambiente`,options:[`Desenvolvimento`,`Homologação`,`Produção`],gridLgColumns:6,gridXlColumns:6},{property:`notify`,label:`Notificar por e-mail`,type:`boolean`,booleanTrue:`Sim`,booleanFalse:`Não`,gridLgColumns:6,gridXlColumns:6}];static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation`]],standalone:!1,decls:1,vars:3,consts:[[`p-service-api`,`https://po-sample-api.onrender.com/v1/scheduler`,`p-title`,`Navegação Flexível no Agendamento`,3,`p-allow-direct-navigation`,`p-breadcrumb`,`p-parameters`]],template:function(o,l){o&1&&vu(0,`po-page-job-scheduler`,0),o&2&&Rb(`p-allow-direct-navigation`,!0)(`p-breadcrumb`,l.breadcrumb)(`p-parameters`,l.parameters)},dependencies:[ea],encapsulation:2})}return i})();var ue=i=>({"docs-sample-code-tabs":i});var Z=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-flexible-navigation-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-page-job-scheduler-flexible-navigation`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Job Scheduler - Navegação Flexível`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<po-page-job-scheduler
  p-service-api="https://po-sample-api.onrender.com/v1/scheduler"
  p-title="Navega\xE7\xE3o Flex\xEDvel no Agendamento"
  [p-allow-direct-navigation]="true"
  [p-breadcrumb]="breadcrumb"
  [p-parameters]="parameters"
>
</po-page-job-scheduler>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-page-job-scheduler-flexible-navigation/sample-po-page-job-scheduler-flexible-navigation.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component } from '@angular/core';

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
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-page-job-scheduler-flexible-navigation`),Kg(),vu(23,`hr`)),o&2&&(wg(5),gk(`po-icon `+l.sampleCodeButtonIcon),wg(),tm(` `,l.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ue,l.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Y],encapsulation:2,changeDetection:1})}return i})();var ee=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-page-job-scheduler-doc`]],standalone:!1,decls:659,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-job-scheduler-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`guides/api`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-allow-direct-navigation`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-before-send`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-parameters`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[`id`,`prop-p-service-api`,1,`docs-api-properties-row`],[`href`,`/documentation/po-dynamic-form`],[`id`,`prop-p-step-execution-last`,1,`docs-api-properties-row`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoStepperOrientation`],[`href`,`documentation/po-stepper#stepperOrientation`],[`id`,`event-p-success`,1,`docs-api-properties-row`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-job-scheduler-daily`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`id`,`interface-po-job-scheduler-execution-parameter`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-job-scheduler-first-execution`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-monthly`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`day:`,`number;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[`id`,`interface-po-job-scheduler-process-id`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-recurrent`,1,`docs-api-properties-row`],[`id`,`interface-po-job-scheduler-weekly`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`daysOfWeek:`,`Array<string>;`,`hour:`,`number;`,`minute:`,`number;`,`}`],[1,`docs-api-h3`,`docs-api-subcomponents-title`],[1,`docs-api-subcomponents`],[`href`,`/documentation/po-job-scheduler-parameters-template?view=doc`],[`href`,`/documentation/po-job-scheduler-summary-template?view=doc`]],template:function(o,l){o&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageJobSchedulerModule } from '@po-ui/ng-templates';`),Kg()(),vu(4,`div`,2),Qc(5,`h3`,3),Sk(6,`Componente`),Kg(),Qc(7,`h4`,4)(8,`code`,5),Sk(9,`PoPageJobSchedulerComponent`),Kg()(),Qc(10,`div`,2)(11,`p`),Sk(12,`O `),Qc(13,`code`),Sk(14,`po-page-job-scheduler`),Kg(),Sk(15,` \xE9 uma p\xE1gina para cria\xE7\xE3o e atualiza\xE7\xE3o de agendamentos da execu\xE7\xE3o de processos (Job Scheduler),
como por exemplo: a gera\xE7\xE3o da folha de pagamento dos funcion\xE1rios.`),Kg(),Qc(16,`p`),Sk(17,`Para utilizar esta p\xE1gina, basta informar o servi\xE7o (endpoint) para consumo,
sem a necessidade de criar componentes e tratamentos dos dados.`),Kg(),Qc(18,`p`),Sk(19,`Veja mais sobre os padrões utilizados nas requisições no `),Qc(20,`a`,6),Sk(21,`Guia de implementação de APIs`),Kg(),Sk(22,`.`),Kg(),Qc(23,`h4`),Sk(24,`Tokens customizáveis`),Kg(),Qc(25,`blockquote`)(26,`p`),Sk(27,`Para maiores informações, acesse o guia `),Qc(28,`a`,7),Sk(29,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(30,`.`),Kg()(),Qc(31,`table`)(32,`thead`)(33,`tr`)(34,`th`),Sk(35,`Propriedade`),Kg(),Qc(36,`th`),Sk(37,`Descrição`),Kg(),Qc(38,`th`),Sk(39,`Valor Padrão`),Kg()()(),Qc(40,`tbody`)(41,`tr`)(42,`td`)(43,`strong`),Sk(44,`Header`),Kg()(),vu(45,`td`)(46,`td`),Kg(),Qc(47,`tr`)(48,`td`)(49,`code`),Sk(50,`--padding`),Kg()(),Qc(51,`td`),Sk(52,`Espaçamento do header`),Kg(),Qc(53,`td`)(54,`code`),Sk(55,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Qc(56,`tr`)(57,`td`)(58,`code`),Sk(59,`--gap`),Kg()(),Qc(60,`td`),Sk(61,`Espaçamento entre os breadcrumbs e o título`),Kg(),Qc(62,`td`)(63,`code`),Sk(64,`var(--spacing-md)`),Kg()()(),Qc(65,`tr`)(66,`td`)(67,`code`),Sk(68,`--gap-actions`),Kg()(),Qc(69,`td`),Sk(70,`Espaçamento entre as ações`),Kg(),Qc(71,`td`)(72,`code`),Sk(73,`var(--spacing-xs)`),Kg()()(),Qc(74,`tr`)(75,`td`)(76,`code`),Sk(77,`--font-family`),Kg()(),Qc(78,`td`),Sk(79,`Família tipográfica do título`),Kg(),Qc(80,`td`)(81,`code`),Sk(82,`var(--font-family-theme)`),Kg()()(),Qc(83,`tr`)(84,`td`)(85,`strong`),Sk(86,`Content`),Kg()(),vu(87,`td`)(88,`td`),Kg(),Qc(89,`tr`)(90,`td`)(91,`code`),Sk(92,`--padding-content`),Kg()(),Qc(93,`td`),Sk(94,`Espaçamento do conteúdo`),Kg(),Qc(95,`td`)(96,`code`),Sk(97,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Qc(98,`div`,8)(99,`h4`,9),Sk(100,`Seletor`),Kg(),Qc(101,`pre`,10),Sk(102,`<po-page-job-scheduler
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
`),Kg()(),Qc(103,`h4`,11),Sk(104,`Propriedades`),Kg(),Qc(105,`table`,12)(106,`tr`,13)(107,`th`,14),Sk(108,`Nome`),Kg(),Qc(109,`th`,14),Sk(110,`Tipo`),Kg(),Qc(111,`th`,14),Sk(112,`Padrão`),Kg(),Qc(113,`th`,14),Sk(114,`Descrição`),Kg()(),Qc(115,`tr`,15)(116,`td`,16)(117,`div`,17)(118,`span`,18),Sk(119,` p-allow-direct-navigation`),vu(120,`br`),Kg()()(),Qc(121,`td`,19)(122,`code`,20),Sk(123,`boolean`),Kg()(),Qc(124,`td`,21)(125,`p`)(126,`code`),Sk(127,`false`),Kg()()(),Qc(128,`td`,22)(129,`em`)(130,`strong`),Sk(131,`(opcional)`),Kg()(),Qc(132,`p`),Sk(133,`Permite a navega\xE7\xE3o direta ao clicar em um step (passo) previamente preenchido e validado,
sem a necessidade de retornar passo a passo utilizando o bot\xE3o "Voltar".`),Kg(),Qc(134,`p`),Sk(135,`Quando habilitado (`),Qc(136,`code`),Sk(137,`true`),Kg(),Sk(138,`), o usu\xE1rio pode clicar diretamente em qualquer step anterior
que j\xE1 tenha sido conclu\xEDdo para retornar a ele imediatamente.`),Kg(),Qc(139,`blockquote`)(140,`p`),Sk(141,`Steps futuros (ainda n\xE3o preenchidos) permanecer\xE3o bloqueados para clique,
independentemente do valor desta propriedade.`),Kg()()()(),Qc(142,`tr`,23)(143,`td`,16)(144,`div`,17)(145,`span`,18),Sk(146,` p-before-send`),vu(147,`br`),Kg()()(),Qc(148,`td`,19)(149,`code`,24),Sk(150,`unknown`),Kg()(),Qc(151,`td`,21),Sk(152,`-`),Kg(),Qc(153,`td`,22)(154,`em`)(155,`strong`),Sk(156,`(opcional)`),Kg()(),Qc(157,`p`),Sk(158,`Fun\xE7\xE3o chamada ap\xF3s realizar a confirma\xE7\xE3o da execu\xE7\xE3o no PoPageJobScheduler.
Permite alterar os valores do model do PoPageJobScheduler antes de realizar o envio para a Api.`),Kg(),Qc(159,`blockquote`)(160,`p`),Sk(161,`Deve retornar um objeto do tipo `),Qc(162,`code`),Sk(163,`PoPageJobScheduler`),Kg(),Sk(164,` para ser adicionado ao model do PoPageJobScheduler.`),Kg()(),Qc(165,`blockquote`)(166,`p`),Sk(167,`Ao ser disparada, a mesma receberá por parâmetro o model do PoPageJobScheduler de interface `),Qc(168,`code`),Sk(169,`PoJobSchedulerInternal`),Kg(),Sk(170,`.`),Kg()(),Qc(171,`p`),Sk(172,`O contexto da função que será chamada, será o mesmo que o do `),Qc(173,`code`),Sk(174,`PoPageJobScheduler`),Kg(),Sk(175,`, ent\xE3o para poder alterar
para o contexto do componente que o est\xE1 utilizando, pode ser utilizado a propriedade `),Qc(176,`code`),Sk(177,`bind`),Kg(),Sk(178,` do Javascript.
Por exemplo, para a fun\xE7\xE3o `),Qc(179,`code`),Sk(180,`beforeSend`),Kg(),Sk(181,`:`),Kg(),Qc(182,`pre`)(183,`code`),Sk(184,`<po-page-job-scheduler [p-service-api]="serviceApi" [p-parameters]="params" [p-before-send]="beforeSend.bind(this)">
...
</po-page-job-scheduler>
`),Kg()()()(),Qc(185,`tr`,25)(186,`td`,16)(187,`div`,17)(188,`span`,18),Sk(189,` p-breadcrumb`),vu(190,`br`),Kg()()(),Qc(191,`td`,19)(192,`code`,26),Sk(193,`PoBreadcrumb`),Kg()(),Qc(194,`td`,21),Sk(195,`-`),Kg(),Qc(196,`td`,22)(197,`em`)(198,`strong`),Sk(199,`(opcional)`),Kg()(),Qc(200,`p`),Sk(201,`Objeto com as propriedades do breadcrumb.`),Kg()()(),Qc(202,`tr`,27)(203,`td`,16)(204,`div`,17)(205,`span`,18),Sk(206,` p-components-size`),vu(207,`br`),Kg()()(),Qc(208,`td`,19)(209,`code`,28),Sk(210,`string`),Kg()(),Qc(211,`td`,21)(212,`p`)(213,`code`),Sk(214,`medium`),Kg()()(),Qc(215,`td`,22)(216,`em`)(217,`strong`),Sk(218,`(opcional)`),Kg()(),Qc(219,`p`),Sk(220,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(221,`ul`)(222,`li`)(223,`code`),Sk(224,`small`),Kg(),Sk(225,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(226,`li`)(227,`code`),Sk(228,`medium`),Kg(),Sk(229,`: aplica a medida medium de cada componente.`),Kg()(),Qc(230,`blockquote`)(231,`p`),Sk(232,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(233,`code`),Sk(234,`medium`),Kg(),Sk(235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(236,`a`,29),Sk(237,`po-theme`),Kg(),Sk(238,`.`),Kg()()()(),Qc(239,`tr`,30)(240,`td`,16)(241,`div`,31)(242,`span`,32),Sk(243,` (p-error)`),vu(244,`br`),Kg()()(),Qc(245,`td`,19)(246,`code`,33),Sk(247,`EventEmitter`),Kg()(),Qc(248,`td`,21),Sk(249,`-`),Kg(),Qc(250,`td`,22)(251,`em`)(252,`strong`),Sk(253,`(opcional)`),Kg()(),Qc(254,`p`),Sk(255,`Evento disparado ao ocorrer um erro impossibilitando a conclus\xE3o do agendamento.
Para este evento ser\xE1 passado como par\xE2metro os detalhes do erro.`),Kg()()(),Qc(256,`tr`,34)(257,`td`,16)(258,`div`,17)(259,`span`,18),Sk(260,` p-parameters`),vu(261,`br`),Kg()()(),Qc(262,`td`,19)(263,`code`,35),Sk(264,`Array<PoDynamicFormField>`),Kg()(),Qc(265,`td`,21),Sk(266,`-`),Kg(),Qc(267,`td`,22)(268,`p`),Sk(269,`Parâmetros que serão utilizados para criação e edição dos agendamentos.`),Kg(),Qc(270,`p`),Sk(271,`Ao utilizar esta propriedade, o componente não buscará automaticamente os parâmetros da API e o campo para preenchimento do processo não será exibido.`),Kg()()(),Qc(272,`tr`,36)(273,`td`,16)(274,`div`,17)(275,`span`,18),Sk(276,` p-service-api`),vu(277,`br`),Kg()()(),Qc(278,`td`,19)(279,`code`,28),Sk(280,`string`),Kg()(),Qc(281,`td`,21),Sk(282,`-`),Kg(),Qc(283,`td`,22)(284,`p`),Sk(285,`Endpoint usado pelo componente para busca dos processos e parâmetros que serão utilizados para criação e edição dos agendamentos.`),Kg(),Qc(286,`h4`),Sk(287,`Processos`),Kg(),Qc(288,`p`),Sk(289,`Os processos s\xE3o as tarefas que estar\xE3o dispon\xEDveis para o usu\xE1rio poder fazer os agendamentos.
Ao inicializar o componente, ser\xE1 feito uma requisi\xE7\xE3o `),Qc(290,`code`),Sk(291,`GET`),Kg(),Sk(292,` para o endpoint `),Qc(293,`code`),Sk(294,`{service-api}/processes`),Kg(),Sk(295,`, para buscar
essa lista de processos.`),Kg(),Qc(296,`p`),Sk(297,`Este endpoint `),Qc(298,`code`),Sk(299,`{service-api}/processes`),Kg(),Sk(300,` deve retornar uma lista de objetos que seguem a definição de dados abaixo:`),Kg(),Qc(301,`pre`)(302,`code`),Sk(303,`GET {service-api}/processes
`),Kg()(),Qc(304,`pre`)(305,`code`),Sk(306,`{
  items: [
    { "processID": "ac4f", "description": "Gerar folha de pagamento" },
    { "processID": "df6l", "description": "Relat\xF3rio de imposto a recolher" },
    { "processID": "dk3p", "description": "T\xEDtulos em aberto" },
  ]
}
`),Kg()(),Qc(307,`p`),Sk(308,`Desta forma será renderizado um componente para selecionar o processo e/ou filtrá-los.`),Kg(),Qc(309,`p`),Sk(310,`Para realizar o filtro de busca do processo, ser\xE1 feita uma requisi\xE7\xE3o enviando o conte\xFAdo digitado na busca atrav\xE9s do
par\xE2metro `),Qc(311,`code`),Sk(312,`search`),Kg(),Sk(313,`. Da seguinte forma:`),Kg(),Qc(314,`pre`)(315,`code`),Sk(316,`GET {service-api}/processes?search=relatorio
`),Kg()(),Qc(317,`blockquote`)(318,`p`),Sk(319,`Veja mais sobre paginação e filtros no `),Qc(320,`a`,6),Sk(321,`Guia de implementação de APIs`),Kg(),Sk(322,`.
Caso seja informada a propriedade `),Qc(323,`code`),Sk(324,`p-parameters`),Kg(),Sk(325,` não serão realizadas as requisições de processos e nem de parametros automaticamente.`),Kg()(),Qc(326,`p`),Sk(327,`Tamb\xE9m \xE9 poss\xEDvel fazer um agendamento de um processo espec\xEDfico, sem que seja necess\xE1rio um endpoint para busca desses
processos. Ent\xE3o, caso o endpoint `),Qc(328,`code`),Sk(329,`{service-api}/processes`),Kg(),Sk(330,` n\xE3o seja v\xE1lido, ser\xE1 apresentado um campo de entrada de
texto para o usu\xE1rio informar diretamente
o `),Qc(331,`strong`),Sk(332,`identificador do processo - `),Qc(333,`code`),Sk(334,`processID`),Kg()(),Sk(335,` e ao salvar será enviado um `),Qc(336,`code`),Sk(337,`POST`),Kg(),Sk(338,` para o endpoint difinido `),Qc(339,`code`),Sk(340,`serviceApi`),Kg(),Sk(341,` conforme abaixo:`),Kg(),Qc(342,`pre`)(343,`code`),Sk(344,`POST {service-api}
`),Kg()(),Qc(345,`p`)(346,`em`),Sk(347,`Request payload`),Kg(),Sk(348,` - estrutura de dados enviada no corpo da requisição conforme interface `),Qc(349,`code`),Sk(350,`PoJobScheduler`),Kg(),Sk(351,`:`),Kg(),Qc(352,`pre`)(353,`code`),Sk(354,`{
  "daily": { "hour": 10, "minute": 12 },
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405"
  ...
}
`),Kg()(),Qc(355,`p`),Sk(356,`Caso seja necessário informar parâmetros e adicionar configurações no processo selecionado, será realizado um `),Qc(357,`code`),Sk(358,`GET`),Kg(),Sk(359,`
como exemplificado abaixo. Os par\xE2metros devem retornar uma lista de objetos que seguem a interface
`),Qc(360,`a`,37),Sk(361,`PoDynamicFormField`),Kg(),Sk(362,`. Porém, caso utilizar a propriedade `),Qc(363,`code`),Sk(364,`p-parameters`),Kg(),Sk(365,` o componente n\xE3o
realizar\xE1 a busca autom\xE1tica e o campo de processos n\xE3o ser\xE1 exibido.`),Kg(),Qc(366,`pre`)(367,`code`),Sk(368,`GET {service-api}/processes/:id/parameters
...
{
  items: [
    { "property": "vencimento", type: "date" },
    { "property": "imposto-retido", "label": "Imposto Retido", type: "boolean" }
  ]
}
`),Kg()(),Qc(369,`h4`),Sk(370,`Salvar e Atualizar`),Kg(),Qc(371,`p`),Sk(372,`Para salvar o agendamento, será feita uma requisição de criação, passando os valores preenchidos pelo usuário via `),Qc(373,`em`),Sk(374,`payload`),Kg(),Sk(375,`.
Abaixo uma requisi\xE7\xE3o `),Qc(376,`code`),Sk(377,`POST`),Kg(),Sk(378,` disparada, onde as propriedades do `),Qc(379,`em`),Sk(380,`Job Scheduler`),Kg(),Sk(381,` foram preenchidas:`),Kg(),Qc(382,`pre`)(383,`code`),Sk(384,`POST {service-api}
`),Kg()(),Qc(385,`p`)(386,`em`),Sk(387,`Request payload`),Kg(),Sk(388,` - estrutura de dados enviada no corpo da requisição conforme interface `),Qc(389,`code`),Sk(390,`PoJobScheduler`),Kg(),Sk(391,`:`),Kg(),Qc(392,`pre`)(393,`code`),Sk(394,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),Kg()(),Qc(395,`p`),Sk(396,`Caso queira que o componente carregue um agendamento já existente, deve ser incluído um parâmetro na rota chamado `),Qc(397,`code`),Sk(398,`id`),Kg(),Sk(399,`.`),Kg(),Qc(400,`p`),Sk(401,`Exemplo de configuração de rota:`),Kg(),Qc(402,`pre`)(403,`code`),Sk(404,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: ExampleJobSchedulerComponent },
  ...
],
`),Kg()(),Qc(405,`p`),Sk(406,`Baseado nisso, na inicialização do template será disparado uma requisição para buscar o recurso que será editado.`),Kg(),Qc(407,`pre`)(408,`code`),Sk(409,`GET {service-api}/{id}
`),Kg()(),Qc(410,`p`),Sk(411,`Ao atualizar o agendamento, será disparado um `),Qc(412,`code`),Sk(413,`PUT`),Kg(),Sk(414,` com os dados preenchidos.
Veja abaixo uma requisi\xE7\xE3o `),Qc(415,`code`),Sk(416,`PUT`),Kg(),Sk(417,` disparada, onde a propriedade `),Qc(418,`em`),Sk(419,`recurrent`),Kg(),Sk(420,` e `),Qc(421,`em`),Sk(422,`daily`),Kg(),Sk(423,` foram atualizadas:`),Kg(),Qc(424,`pre`)(425,`code`),Sk(426,`PUT {service-api}/{id}
`),Kg()(),Qc(427,`p`)(428,`em`),Sk(429,`Request payload`),Kg(),Sk(430,` - estrutura de dados enviada no corpo da requisição conforme interface `),Qc(431,`code`),Sk(432,`PoJobScheduler`),Kg(),Sk(433,`:`),Kg(),Qc(434,`pre`)(435,`code`),Sk(436,`{
  "firstExecution": "2018-12-07T00:00:01-00:00",
  "recurrent": true,
  "processID": "ac0405",
  "monthly": { "day": 1, "hour": 10, "minute": 0 },
  "processID": "ac0405",
  "rangeExecutions: { "frequency": { "type": "hour", "value": 2 }, "rangeLimit": { "hour": 18, "minute": 0, "day": 20 } }
}
`),Kg()()()(),Qc(437,`tr`,38)(438,`td`,16)(439,`div`,17)(440,`span`,18),Sk(441,` p-step-execution-last`),vu(442,`br`),Kg()()(),Qc(443,`td`,19)(444,`code`,20),Sk(445,`boolean`),Kg()(),Qc(446,`td`,21),Sk(447,`-`),Kg(),Qc(448,`td`,22)(449,`em`)(450,`strong`),Sk(451,`(opcional)`),Kg()(),Qc(452,`p`),Sk(453,`Define se o step `),Qc(454,`code`),Sk(455,`Agendamento`),Kg(),Sk(456,` deve ser exibido como o último na sequência de steps`),Kg(),Qc(457,`blockquote`)(458,`p`),Sk(459,`Aplicável apenas quando utilizado `),Qc(460,`code`),Sk(461,`PoJobSchedulerParametersTemplateDirective`),Kg()()()()(),Qc(462,`tr`,39)(463,`td`,16)(464,`div`,17)(465,`span`,18),Sk(466,` p-orientation`),vu(467,`br`),Kg()()(),Qc(468,`td`,19)(469,`code`,40),Sk(470,`PoStepperOrientation`),Kg()(),Qc(471,`td`,21),Sk(472,`-`),Kg(),Qc(473,`td`,22)(474,`em`)(475,`strong`),Sk(476,`(opcional)`),Kg()(),Qc(477,`p`),Sk(478,`Define a orientação de exibição do `),Qc(479,`code`),Sk(480,`po-stepper`),Kg(),Sk(481,`.`),Kg(),Qc(482,`blockquote`)(483,`p`),Sk(484,`Quando não utilizada, segue o comportamento com base nas dimensões da tela.`),Kg()(),Qc(485,`blockquote`)(486,`p`),Sk(487,`Veja os valores válidos no `),Qc(488,`em`),Sk(489,`enum`),Kg(),Qc(490,`a`,41),Sk(491,`PoStepperOrientation`),Kg(),Sk(492,`.`),Kg()()()(),Qc(493,`tr`,42)(494,`td`,16)(495,`div`,31)(496,`span`,32),Sk(497,` (p-success)`),vu(498,`br`),Kg()()(),Qc(499,`td`,19)(500,`code`,33),Sk(501,`EventEmitter`),Kg()(),Qc(502,`td`,21),Sk(503,`-`),Kg(),Qc(504,`td`,22)(505,`em`)(506,`strong`),Sk(507,`(opcional)`),Kg()(),Qc(508,`p`),Sk(509,`Evento disparado ao concluir o processo de agendamento com sucesso.`),Kg()()(),Qc(510,`tr`,43)(511,`td`,16)(512,`div`,17)(513,`span`,18),Sk(514,` p-title`),vu(515,`br`),Kg()()(),Qc(516,`td`,19)(517,`code`,28),Sk(518,`string`),Kg()(),Qc(519,`td`,21),Sk(520,`-`),Kg(),Qc(521,`td`,22)(522,`p`),Sk(523,`Título da página.`),Kg()()()(),Qc(524,`h3`),Sk(525,`Interfaces`),Kg(),Qc(526,`h4`,44)(527,`code`,5),Sk(528,`PoJobScheduler`),Kg()(),Qc(529,`div`,2)(530,`p`),Sk(531,`Estrutura do `),Qc(532,`em`),Sk(533,`payload`),Kg(),Sk(534,` enviado nas requisições para salvar e/ou atualizar as tarefas do `),Qc(535,`em`),Sk(536,`Job Scheduler`),Kg(),Sk(537,`.`),Kg()(),Qc(538,`h4`,11),Sk(539,`Propriedades`),Kg(),Qc(540,`table`,12)(541,`tr`,13)(542,`th`,14),Sk(543,`Nome`),Kg(),Qc(544,`th`,14),Sk(545,`Tipo`),Kg(),Qc(546,`th`,14),Sk(547,`Descrição`),Kg()(),Qc(548,`tr`,45)(549,`td`,16)(550,`div`,17)(551,`span`,18),Sk(552,` daily`),vu(553,`br`),Kg()()(),Qc(554,`td`,19)(555,`code`,46),Sk(556,`{ hour: number; minute: number;
}`),Kg()(),Qc(557,`td`,22)(558,`em`)(559,`strong`),Sk(560,`(opcional)`),Kg()(),Qc(561,`p`),Sk(562,`Define uma repetição diária.`),Kg()()(),Qc(563,`tr`,47)(564,`td`,16)(565,`div`,17)(566,`span`,18),Sk(567,` executionParameter`),vu(568,`br`),Kg()()(),Qc(569,`td`,19)(570,`code`,48),Sk(571,`object`),Kg()(),Qc(572,`td`,22)(573,`em`)(574,`strong`),Sk(575,`(opcional)`),Kg()(),Qc(576,`p`),Sk(577,`Objeto contendo os nomes das propriedades dos parâmetros e os valores preenchidos pelo usuário.`),Kg()()(),Qc(578,`tr`,49)(579,`td`,16)(580,`div`,17)(581,`span`,18),Sk(582,` firstExecution`),vu(583,`br`),Kg()()(),Qc(584,`td`,19)(585,`code`,28),Sk(586,`string`),Kg()(),Qc(587,`td`,22)(588,`em`)(589,`strong`),Sk(590,`(opcional)`),Kg()(),Qc(591,`p`),Sk(592,`Data da primeira execução.`),Kg()()(),Qc(593,`tr`,50)(594,`td`,16)(595,`div`,17)(596,`span`,18),Sk(597,` monthly`),vu(598,`br`),Kg()()(),Qc(599,`td`,19)(600,`code`,51),Sk(601,`{ day: number; hour: number; minute: number;
}`),Kg()(),Qc(602,`td`,22)(603,`em`)(604,`strong`),Sk(605,`(opcional)`),Kg()(),Qc(606,`p`),Sk(607,`Define uma repetição mensal.`),Kg()()(),Qc(608,`tr`,52)(609,`td`,16)(610,`div`,17)(611,`span`,18),Sk(612,` processID`),vu(613,`br`),Kg()()(),Qc(614,`td`,19)(615,`code`,28),Sk(616,`string`),Kg()(),Qc(617,`td`,22)(618,`p`),Sk(619,`Identificador do processo.`),Kg()()(),Qc(620,`tr`,53)(621,`td`,16)(622,`div`,17)(623,`span`,18),Sk(624,` recurrent`),vu(625,`br`),Kg()()(),Qc(626,`td`,19)(627,`code`,20),Sk(628,`boolean`),Kg()(),Qc(629,`td`,22)(630,`em`)(631,`strong`),Sk(632,`(opcional)`),Kg()(),Qc(633,`p`),Sk(634,`Permite uma execução recorrente.`),Kg()()(),Qc(635,`tr`,54)(636,`td`,16)(637,`div`,17)(638,`span`,18),Sk(639,` weekly`),vu(640,`br`),Kg()()(),Qc(641,`td`,19)(642,`code`,55),Sk(643,`{ daysOfWeek: Array<string>; hour: number; minute: number;
}`),Kg()(),Qc(644,`td`,22)(645,`em`)(646,`strong`),Sk(647,`(opcional)`),Kg()(),Qc(648,`p`),Sk(649,`Define uma repetição semanal.`),Kg()()()(),Qc(650,`h3`,56),Sk(651,`Subcomponentes`),Kg(),Qc(652,`ul`,57)(653,`li`)(654,`a`,58),Sk(655,`Job Scheduler Parameters Template`),Kg()(),Qc(656,`li`)(657,`a`,59),Sk(658,`Job Scheduler Summary Template`),Kg()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function ge(i,k){if(i&1){let r=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(r);let l=ek();return U_(l.changeTab(`web`))}),vu(1,`sample-po-page-job-scheduler-background-process-view`)(2,`sample-po-page-job-scheduler-directives-view`)(3,`sample-po-page-job-scheduler-flexible-navigation-view`),Kg()}if(i&2){let r=ek();Rb(`p-active`,r.activeTab===`web`)}}var Se=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:o||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Job Scheduler`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,l){o&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ge,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-page-job-scheduler-doc`),Kg()()()),o&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,Q,K,Z,ee],encapsulation:2,changeDetection:1})}return i})()}];var ne=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[GV.forChild(Se),GV]})}return i})();var Oe=(()=>{class i{static ɵfac=function(o){return new(o||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,ne]})}return i})();export{Oe as DocPoPageJobSchedulerModule};
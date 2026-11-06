import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ri as Zg,Vi as _u,Xr as No,Xt as ere,Yi as eF,ca as jk,dr as Cu,ea as ge,eo as xo,er as An,fi as Rb,gi as Tk,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,rt as Qae,va as nk,xi as VO,ya as nm,yi as U_}from"./chunk-BQaN6dko.js";import{n as P,s as Xn,t as M}from"./main-SRPMFWZC.js";var J=()=>({property:`id`,label:`User ID`});var X=a=>[a];var O=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-title`,`Po Page Dynamic Edit`,`p-service-api`,`https://po-sample-api.onrender.com/v1/people`,3,`p-fields`]],template:function(o,r){o&1&&_u(0,`po-page-dynamic-edit`,0),o&2&&Rb(`p-fields`,Bk(2,X,jk(1,J)))},dependencies:[Xn],encapsulation:2,changeDetection:1})}return a})();var ee=a=>({"docs-sample-code-tabs":a});var H=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,r){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Dynamic Edit Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return r.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-dynamic-edit-basic`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+r.sampleCodeButtonIcon),Ig(),nm(` `,r.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ee,r.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,O],encapsulation:2,changeDetection:1})}return a})();var ie=[`dynamicEdit`];var V=(()=>{class a{dynamicEdit;serviceApi=`https://po-sample-api.onrender.com/v1/people`;actions={save:`/documentation/po-page-dynamic-detail`,saveNew:`/documentation/po-page-dynamic-edit`};literals={pageActionCancel:`Descartar`,pageActionSave:`Gravar`,pageActionSaveNew:`Gravar e novo`};breadcrumb={items:[{label:`Home`,link:`/`},{label:`People`,link:`/documentation/po-page-dynamic-table`},{label:`Edit`}]};fields=[{property:`status`,divider:`Status`,options:[`active`,`inactive`]},{property:`id`,label:`User ID`,key:!0,required:!0},{property:`name`,divider:`Personal data`,required:!0},{property:`nickname`},{property:`email`,label:`E-mail`},{property:`birthdate`,label:`Birth date`,type:`date`,errorMessage:`Invalid date.`,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthdate`)},{property:`genre`,options:[`female`,`male`,`others`],gridLgColumns:6},{property:`nationality`},{property:`birthPlace`,label:`Place of birth`},{property:`graduation`},{property:`father`,label:"Father`s name",divider:`Relationship`,gridMdColumns:4,gridLgColumns:4},{property:`mother`,label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:`street`,divider:`Address`,gridColumns:4},{property:`city`,optionsService:`https://po-sample-api.onrender.com/v1/cities?transform=true`,offsetColumns:4,gridColumns:4}];onKeyDown(d,o){o.code===`F9`&&this.dynamicEdit.showAdditionalHelp(d)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-user`]],viewQuery:function(o,r){if(o&1&&Cu(ie,7),o&2){let g;No(g=xo())&&(r.dynamicEdit=g.first)}},standalone:!1,decls:2,vars:6,consts:[[`dynamicEdit`,``],[`p-title`,`User edit`,3,`p-auto-router`,`p-actions`,`p-breadcrumb`,`p-fields`,`p-literals`,`p-service-api`]],template:function(o,r){o&1&&_u(0,`po-page-dynamic-edit`,1,0),o&2&&Rb(`p-auto-router`,!0)(`p-actions`,r.actions)(`p-breadcrumb`,r.breadcrumb)(`p-fields`,r.fields)(`p-literals`,r.literals)(`p-service-api`,r.serviceApi)},dependencies:[Xn],encapsulation:2,changeDetection:1})}return a})();var ae=a=>({"docs-sample-code-tabs":a});var G=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,r){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Dynamic Edit - User`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return r.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-dynamic-edit-user`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+r.sampleCodeButtonIcon),Ig(),nm(` `,r.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ae,r.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,V],encapsulation:2,changeDetection:1})}return a})();var K=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-page-dynamic-edit-doc`]],standalone:!1,decls:1475,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditActions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageDynamicEditField>`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditOptions)`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditBeforeCancel)`],[`href`,`https://po-ui.io/guides/api#successMessages`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSave)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSaveNew)`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id?:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`any`],[`href`,`https://po-ui.io/documentation/po-dynamic-form`],[`id`,`po-page-dynamic-edit-metadata`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,r){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do template do po-page-dynamic-detail.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoPageDynamicEditComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O `),Jc(15,`code`),Tk(16,`po-page-dynamic-edit`),Zg(),Tk(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),Zg(),Jc(18,`h3`),Tk(19,`Utilização via rota`),Zg(),Jc(20,`p`),Tk(21,`Ao utilizar as rotas para inicializar o template, o `),Jc(22,`code`),Tk(23,`page-dynamic-edit`),Zg(),Tk(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),Zg(),Jc(25,`p`),Tk(26,`Exemplo de utilização:`),Zg(),Jc(27,`p`),Tk(28,`Arquivo de configuração de rotas da aplicação: `),Jc(29,`code`),Tk(30,`app-routing.module.ts`),Zg()(),Jc(31,`pre`)(32,`code`),Tk(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),Zg()(),Jc(34,`p`),Tk(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),Zg(),Jc(36,`p`),Tk(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),Zg(),Jc(38,`blockquote`)(39,`p`),Tk(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),Zg()(),Jc(41,`p`),Tk(42,`Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `),Jc(43,`code`),Tk(44,`id`),Zg(),Tk(45,`:`),Zg(),Jc(46,`pre`)(47,`code`),Tk(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),Zg()(),Jc(49,`p`),Tk(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),Zg(),Jc(51,`p`),Tk(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),Jc(53,`a`,6),Tk(54,`PoPageDynamicEditMetadata`),Zg(),Tk(55,`. Por exemplo:`),Zg(),Jc(56,`pre`)(57,`code`),Tk(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),Zg()(),Jc(59,`blockquote`)(60,`p`),Tk(61,`Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `),Jc(62,`code`),Tk(63,`serviceApi`),Zg(),Tk(64,` da seguinte forma:`),Zg()(),Jc(65,`pre`)(66,`code`),Tk(67,`GET {end-point}/metadata?type=edit&version={version}
`),Zg()(),Jc(68,`h4`),Tk(69,`Tokens customizáveis`),Zg(),Jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),Tk(74,`Propriedade`),Zg(),Jc(75,`th`),Tk(76,`Descrição`),Zg(),Jc(77,`th`),Tk(78,`Valor Padrão`),Zg()()(),Jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),Tk(83,`Header`),Zg()(),_u(84,`td`)(85,`td`),Zg(),Jc(86,`tr`)(87,`td`)(88,`code`),Tk(89,`--padding`),Zg()(),Jc(90,`td`),Tk(91,`Espaçamento do header`),Zg(),Jc(92,`td`)(93,`code`),Tk(94,`var(--spacing-xs) var(--spacing-md)`),Zg()()(),Jc(95,`tr`)(96,`td`)(97,`code`),Tk(98,`--gap`),Zg()(),Jc(99,`td`),Tk(100,`Espaçamento entre os breadcrumbs e o título`),Zg(),Jc(101,`td`)(102,`code`),Tk(103,`var(--spacing-md)`),Zg()()(),Jc(104,`tr`)(105,`td`)(106,`code`),Tk(107,`--gap-actions`),Zg()(),Jc(108,`td`),Tk(109,`Espaçamento entre as ações`),Zg(),Jc(110,`td`)(111,`code`),Tk(112,`var(--spacing-xs)`),Zg()()(),Jc(113,`tr`)(114,`td`)(115,`code`),Tk(116,`--font-family`),Zg()(),Jc(117,`td`),Tk(118,`Família tipográfica do título`),Zg(),Jc(119,`td`)(120,`code`),Tk(121,`var(--font-family-theme)`),Zg()()(),Jc(122,`tr`)(123,`td`)(124,`strong`),Tk(125,`Content`),Zg()(),_u(126,`td`)(127,`td`),Zg(),Jc(128,`tr`)(129,`td`)(130,`code`),Tk(131,`--padding-content`),Zg()(),Jc(132,`td`),Tk(133,`Espaçamento do conteúdo`),Zg(),Jc(134,`td`)(135,`code`),Tk(136,`var(--spacing-xs) var(--spacing-sm)`),Zg()()()()()(),Jc(137,`div`,7)(138,`h4`,8),Tk(139,`Seletor`),Zg(),Jc(140,`pre`,9),Tk(141,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="unknown"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),Zg()(),Jc(142,`h4`,10),Tk(143,`Propriedades`),Zg(),Jc(144,`table`,11)(145,`tr`,12)(146,`th`,13),Tk(147,`Nome`),Zg(),Jc(148,`th`,13),Tk(149,`Tipo`),Zg(),Jc(150,`th`,13),Tk(151,`Padrão`),Zg(),Jc(152,`th`,13),Tk(153,`Descrição`),Zg()(),Jc(154,`tr`,14)(155,`td`,15)(156,`div`,16)(157,`span`,17),Tk(158,` p-actions`),_u(159,`br`),Zg()()(),Jc(160,`td`,18)(161,`code`,19),Tk(162,`PoPageDynamicEditActions`),Zg()(),Jc(163,`td`,20),Tk(164,`-`),Zg(),Jc(165,`td`,21)(166,`em`)(167,`strong`),Tk(168,`(opcional)`),Zg()(),Jc(169,`p`),Tk(170,`Ações da página.`),Zg()()(),Jc(171,`tr`,14)(172,`td`,15)(173,`div`,16)(174,`span`,17),Tk(175,` p-auto-router`),_u(176,`br`),Zg()()(),Jc(177,`td`,18)(178,`code`,22),Tk(179,`boolean`),Zg()(),Jc(180,`td`,20)(181,`p`),Tk(182,`false`),Zg()(),Jc(183,`td`,21)(184,`em`)(185,`strong`),Tk(186,`(opcional)`),Zg()(),Jc(187,`p`),Tk(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),Zg(),Jc(189,`blockquote`)(190,`p`),Tk(191,`Para o correto funcionamento não pode haver nenhum rota coringa (`),Jc(192,`code`),Tk(193,`**`),Zg(),Tk(194,`) especificada.`),Zg()()()(),Jc(195,`tr`,14)(196,`td`,15)(197,`div`,16)(198,`span`,17),Tk(199,` p-breadcrumb`),_u(200,`br`),Zg()()(),Jc(201,`td`,18)(202,`code`,23),Tk(203,`PoBreadcrumb`),Zg()(),Jc(204,`td`,20),Tk(205,`-`),Zg(),Jc(206,`td`,21)(207,`em`)(208,`strong`),Tk(209,`(opcional)`),Zg()(),Jc(210,`p`),Tk(211,`Objeto com propriedades do breadcrumb.`),Zg()()(),Jc(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),Tk(216,` p-components-size`),_u(217,`br`),Zg()()(),Jc(218,`td`,18)(219,`code`,24),Tk(220,`string`),Zg()(),Jc(221,`td`,20)(222,`p`)(223,`code`),Tk(224,`medium`),Zg()()(),Jc(225,`td`,21)(226,`em`)(227,`strong`),Tk(228,`(opcional)`),Zg()(),Jc(229,`p`),Tk(230,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(231,`ul`)(232,`li`)(233,`code`),Tk(234,`small`),Zg(),Tk(235,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(236,`li`)(237,`code`),Tk(238,`medium`),Zg(),Tk(239,`: aplica a medida medium de cada componente.`),Zg()(),Jc(240,`blockquote`)(241,`p`),Tk(242,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(243,`code`),Tk(244,`medium`),Zg(),Tk(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(246,`a`,25),Tk(247,`po-theme`),Zg(),Tk(248,`.`),Zg()()()(),Jc(249,`tr`,14)(250,`td`,15)(251,`div`,16)(252,`span`,17),Tk(253,` p-fields`),_u(254,`br`),Zg()()(),Jc(255,`td`,18)(256,`code`,26),Tk(257,`Array<PoPageDynamicEditField>`),Zg()(),Jc(258,`td`,20),Tk(259,`-`),Zg(),Jc(260,`td`,21)(261,`p`),Tk(262,`Lista dos campos usados na tabela e busca avançada.`),Zg()()(),Jc(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),Tk(267,` p-literals`),_u(268,`br`),Zg()()(),Jc(269,`td`,18)(270,`code`,27),Tk(271,`PoPageDynamicEditLiterals`),Zg()(),Jc(272,`td`,20),Tk(273,`-`),Zg(),Jc(274,`td`,21)(275,`em`)(276,`strong`),Tk(277,`(opcional)`),Zg()(),Jc(278,`p`),Tk(279,`Objeto com as literais usadas no `),Jc(280,`code`),Tk(281,`po-page-dynamic-edit`),Zg(),Tk(282,`.`),Zg(),Jc(283,`p`),Tk(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),Zg(),Jc(285,`pre`)(286,`code`),Tk(287,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),Zg()(),Jc(288,`p`),Tk(289,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(290,`pre`)(291,`code`),Tk(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),Zg()(),Jc(293,`blockquote`)(294,`p`),Tk(295,`O valor padrão será traduzido de acordo com o idioma configurado no `),Jc(296,`a`,28)(297,`code`),Tk(298,`PoI18nService`),Zg()(),Tk(299,` ou `),Jc(300,`em`),Tk(301,`browser`),Zg(),Tk(302,`.`),Zg()()()(),Jc(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),Tk(307,` p-notification-type`),_u(308,`br`),Zg()()(),Jc(309,`td`,18)(310,`code`,24),Tk(311,`string`),Zg()(),Jc(312,`td`,20)(313,`p`),Tk(314,`warning`),Zg()(),Jc(315,`td`,21)(316,`em`)(317,`strong`),Tk(318,`(opcional)`),Zg()(),Jc(319,`p`),Tk(320,`Tipo da notificação.`),Zg(),Jc(321,`p`),Tk(322,`É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.`),Zg(),Jc(323,`pre`)(324,`code`),Tk(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),Zg()(),Jc(326,`blockquote`)(327,`p`),Tk(328,`Os valores aceitos são 'warning' e 'error'.`),Zg()()()(),Jc(329,`tr`,14)(330,`td`,15)(331,`div`,16)(332,`span`,17),Tk(333,` p-load`),_u(334,`br`),Zg()()(),Jc(335,`td`,18)(336,`code`,24),Tk(337,`string `),Zg(),Jc(338,`code`,29),Tk(339,` (() => PoPageDynamicEditOptions)`),Zg()(),Jc(340,`td`,20),Tk(341,`-`),Zg(),Jc(342,`td`,21)(343,`p`),Tk(344,`Função ou serviço que será executado na inicialização do componente.`),Zg(),Jc(345,`p`),Tk(346,`A propriedade aceita os seguintes tipos:`),Zg(),Jc(347,`ul`)(348,`li`)(349,`code`),Tk(350,`string`),Zg(),Tk(351,`: `),Jc(352,`em`),Tk(353,`Endpoint`),Zg(),Tk(354,` usado pelo componente para requisição via `),Jc(355,`code`),Tk(356,`POST`),Zg(),Tk(357,`.`),Zg(),Jc(358,`li`)(359,`code`),Tk(360,`function`),Zg(),Tk(361,`: Método que será executado.`),Zg()(),Jc(362,`p`),Tk(363,`O retorno desta função deve ser do tipo `),Jc(364,`code`),Tk(365,`PoPageDynamicEditOptions`),Zg(),Tk(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),Zg(),Jc(367,`p`),Tk(368,`Por exemplo:`),Zg(),Jc(369,`pre`)(370,`code`),Tk(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),Zg()(),Jc(372,`p`),Tk(373,`Para referenciar a sua função utilize a propriedade `),Jc(374,`code`),Tk(375,`bind`),Zg(),Tk(376,`, por exemplo:`),Zg(),Jc(377,`pre`)(378,`code`),Tk(379,`[p-load]="onLoadOptions.bind(this)"
`),Zg()()()(),Jc(380,`tr`,14)(381,`td`,15)(382,`div`,16)(383,`span`,17),Tk(384,` p-load-data`),_u(385,`br`),Zg()()(),Jc(386,`td`,18)(387,`code`,30),Tk(388,`unknown`),Zg()(),Jc(389,`td`,20),Tk(390,`-`),Zg(),Jc(391,`td`,21)(392,`em`)(393,`strong`),Tk(394,`(opcional)`),Zg()(),Jc(395,`p`),Tk(396,`Função que será executada após ser realizada a busca dos dados.`),Zg(),Jc(397,`p`),Tk(398,`A propriedade aceita os seguintes tipos:`),Zg(),Jc(399,`ul`)(400,`li`)(401,`code`),Tk(402,`function`),Zg(),Tk(403,`: Método que será executado.`),Zg()(),Jc(404,`p`),Tk(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),Zg(),Jc(406,`p`),Tk(407,`Por exemplo:`),Zg(),Jc(408,`pre`)(409,`code`),Tk(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),Zg()(),Jc(411,`p`),Tk(412,`Para referenciar a sua função utilize a propriedade `),Jc(413,`code`),Tk(414,`bind`),Zg(),Tk(415,`, por exemplo:`),Zg(),Jc(416,`pre`)(417,`code`),Tk(418,`[p-load-data]="onLoadCustom.bind(this)"
`),Zg()()()(),Jc(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),Tk(423,` p-service-api`),_u(424,`br`),Zg()()(),Jc(425,`td`,18)(426,`code`,24),Tk(427,`string`),Zg()(),Jc(428,`td`,20),Tk(429,`-`),Zg(),Jc(430,`td`,21)(431,`p`),Tk(432,`Endpoint usado pelo template para requisição do recurso que será exibido para edição.`),Zg(),Jc(433,`p`),Tk(434,`Para as ações de `),Jc(435,`code`),Tk(436,`save`),Zg(),Tk(437,` e `),Jc(438,`code`),Tk(439,`saveNew`),Zg(),Tk(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),Zg(),Jc(441,`blockquote`)(442,`p`)(443,`code`),Tk(444,`POST {end-point}`),Zg()()(),Jc(445,`pre`)(446,`code`),Tk(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),Zg()(),Jc(448,`p`),Tk(449,`Resquisição disparada, onde a propriedade `),Jc(450,`code`),Tk(451,`name`),Zg(),Tk(452,` e `),Jc(453,`code`),Tk(454,`city`),Zg(),Tk(455,` foram preenchidas:`),Zg(),Jc(456,`pre`)(457,`code`),Tk(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),Zg()(),Jc(459,`p`),Tk(460,`Request payload:`),Zg(),Jc(461,`pre`)(462,`code`),Tk(463,`{ "name": "Fulano", "city": "Smallville" }
`),Zg()(),Jc(464,`p`),Tk(465,`Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `),Jc(466,`code`),Tk(467,`id`),Zg(),Tk(468,`.`),Zg(),Jc(469,`p`),Tk(470,`Exemplo de configuração de rota:`),Zg(),Jc(471,`pre`)(472,`code`),Tk(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),Zg()(),Jc(474,`p`),Tk(475,`Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.`),Zg(),Jc(476,`blockquote`)(477,`p`)(478,`code`),Tk(479,`GET {end-point}/{id}`),Zg()()(),Jc(480,`p`),Tk(481,`Nos métodos de `),Jc(482,`code`),Tk(483,`save`),Zg(),Tk(484,` e `),Jc(485,`code`),Tk(486,`saveNew`),Zg(),Tk(487,`, ao invés de um `),Jc(488,`code`),Tk(489,`POST`),Zg(),Tk(490,`, será disparado um `),Jc(491,`code`),Tk(492,`PUT`),Zg(),Tk(493,`.`),Zg(),Jc(494,`p`),Tk(495,`Resquisição disparada, onde a propriedade `),Jc(496,`code`),Tk(497,`name`),Zg(),Tk(498,` e `),Jc(499,`code`),Tk(500,`city`),Zg(),Tk(501,` foram preenchidas / atualizadas, e o `),Jc(502,`code`),Tk(503,`id`),Zg(),Tk(504,` da url é 2:`),Zg(),Jc(505,`pre`)(506,`code`),Tk(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),Zg()(),Jc(508,`p`),Tk(509,`Request payload:`),Zg(),Jc(510,`pre`)(511,`code`),Tk(512,`{ "name": "Fulano", "city": "Metropolis" }
`),Zg()()()(),Jc(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),Tk(517,` p-title`),_u(518,`br`),Zg()()(),Jc(519,`td`,18)(520,`code`,24),Tk(521,`string`),Zg()(),Jc(522,`td`,20),Tk(523,`-`),Zg(),Jc(524,`td`,21)(525,`p`),Tk(526,`Título da página.`),Zg()()()(),Jc(527,`h3`,10),Tk(528,`Métodos`),Zg(),Jc(529,`table`,31)(530,`tr`,14)(531,`th`,32)(532,`div`,16)(533,`h4`)(534,`span`,17),Tk(535,` showAdditionalHelp `),Zg()()()()(),Jc(536,`tr`,21)(537,`td`,21)(538,`p`),Tk(539,`Método que exibe `),Jc(540,`code`),Tk(541,`p-helper`),Zg(),Tk(542,` ou executa a ação definida em `),Jc(543,`code`),Tk(544,`p-helper{eventOnClick}`),Zg(),Tk(545,` ou em `),Jc(546,`code`),Tk(547,`p-additionalHelp`),Zg(),Tk(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(549,`code`),Tk(550,`keydown`),Zg(),Tk(551,`.`),Zg(),Jc(552,`pre`)(553,`code`),Tk(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),Zg()()()()(),Jc(555,`h5`)(556,`b`),Tk(557,`Parâmetros`),Zg()(),Jc(558,`table`,11)(559,`tr`,12)(560,`th`,13),Tk(561,`Nome`),Zg(),Jc(562,`th`,13),Tk(563,`Tipo`),Zg(),Jc(564,`th`,13),Tk(565,`Descrição`),Zg()(),Jc(566,`tr`,14)(567,`td`,15),Tk(568,` property`),Zg(),Jc(569,`td`,18)(570,`code`,33),Tk(571,` string `),Zg()(),Jc(572,`td`,21)(573,`p`),Tk(574,`Identificador da coluna.`),Zg()()()(),_u(575,`br`),Jc(576,`h3`),Tk(577,`Interfaces`),Zg(),Jc(578,`h4`,34)(579,`code`,5),Tk(580,`PoPageDynamicEditActions`),Zg()(),Jc(581,`div`,2)(582,`p`),Tk(583,`Interface para as ações do componente po-page-dynamic-edit.`),Zg()(),Jc(584,`h4`,10),Tk(585,`Propriedades`),Zg(),Jc(586,`table`,11)(587,`tr`,12)(588,`th`,13),Tk(589,`Nome`),Zg(),Jc(590,`th`,13),Tk(591,`Tipo`),Zg(),Jc(592,`th`,13),Tk(593,`Descrição`),Zg()(),Jc(594,`tr`,14)(595,`td`,15)(596,`div`,16)(597,`span`,17),Tk(598,` beforeCancel`),_u(599,`br`),Zg()()(),Jc(600,`td`,18)(601,`code`,24),Tk(602,`string `),Zg(),Jc(603,`code`,35),Tk(604,` (() => PoPageDynamicEditBeforeCancel)`),Zg()(),Jc(605,`td`,21)(606,`em`)(607,`strong`),Tk(608,`(opcional)`),Zg()(),Jc(609,`p`),Tk(610,`Rota ou método que será chamado antes de executar a ação de cancelamento (cancel).`),Zg(),Jc(611,`p`),Tk(612,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Jc(613,`code`),Tk(614,`PoPageDynamicEditBeforeCancel`),Zg(),Tk(615,`.`),Zg(),Jc(616,`blockquote`)(617,`p`),Tk(618,`A url será chamada via POST`),Zg()(),Jc(619,`p`),Tk(620,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Jc(621,`strong`),Tk(622,`beforeCancel`),Zg(),Tk(623,`
ou definir a mensagem no atributo `),Jc(624,`code`),Tk(625,`_messages`),Zg(),Tk(626,` na resposta da API conforme definido
em `),Jc(627,`a`,36),Tk(628,`Guia de implementação de APIs`),Zg()()()(),Jc(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),Tk(633,` beforeSave`),_u(634,`br`),Zg()()(),Jc(635,`td`,18)(636,`code`,24),Tk(637,`string `),Zg(),Jc(638,`code`,37),Tk(639,` ((resource: any, id: string) => PoPageDynamicEditBeforeSave)`),Zg()(),Jc(640,`td`,21)(641,`em`)(642,`strong`),Tk(643,`(opcional)`),Zg()(),Jc(644,`p`),Tk(645,`Rota ou método que será chamado antes de salvar um recurso (save).`),Zg(),Jc(646,`p`),Tk(647,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Jc(648,`code`),Tk(649,`PoPageDynamicEditBeforeSave`),Zg(),Tk(650,`.`),Zg(),Jc(651,`blockquote`)(652,`p`),Tk(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Jc(654,`code`),Tk(655,`POST {beforeSave}/{key}`),Zg(),Tk(656,`.`),Zg()(),Jc(657,`p`),Tk(658,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Jc(659,`strong`),Tk(660,`beforeSave`),Zg(),Tk(661,`
ou definir a mensagem no atributo `),Jc(662,`code`),Tk(663,`_messages`),Zg(),Tk(664,` na resposta da API conforme definido
em `),Jc(665,`a`,36),Tk(666,`Guia de implementação de APIs`),Zg()()()(),Jc(667,`tr`,14)(668,`td`,15)(669,`div`,16)(670,`span`,17),Tk(671,` beforeSaveNew`),_u(672,`br`),Zg()()(),Jc(673,`td`,18)(674,`code`,24),Tk(675,`string `),Zg(),Jc(676,`code`,38),Tk(677,` ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)`),Zg()(),Jc(678,`td`,21)(679,`em`)(680,`strong`),Tk(681,`(opcional)`),Zg()(),Jc(682,`p`),Tk(683,`Rota ou método que será chamado antes de executar o evento salvar e abrir novo registro (saveNew).`),Zg(),Jc(684,`p`),Tk(685,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),Jc(686,`code`),Tk(687,`PoPageDynamicEditBeforeSaveNew`),Zg(),Tk(688,`.`),Zg(),Jc(689,`blockquote`)(690,`p`),Tk(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),Jc(692,`code`),Tk(693,`POST {beforeSave}/{key}`),Zg(),Tk(694,`.`),Zg()(),Jc(695,`p`),Tk(696,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),Jc(697,`strong`),Tk(698,`beforeSaveNew`),Zg(),Tk(699,`
ou definir a mensagem no atributo `),Jc(700,`code`),Tk(701,`_messages`),Zg(),Tk(702,` na resposta da API conforme definido
em `),Jc(703,`a`,36),Tk(704,`Guia de implementação de APIs`),Zg()()()(),Jc(705,`tr`,14)(706,`td`,15)(707,`div`,16)(708,`span`,17),Tk(709,` cancel`),_u(710,`br`),Zg()()(),Jc(711,`td`,18)(712,`code`,24),Tk(713,`string `),Zg(),Jc(714,`code`,22),Tk(715,` boolean `),Zg(),Jc(716,`code`,39),Tk(717,` Function`),Zg()(),Jc(718,`td`,21)(719,`em`)(720,`strong`),Tk(721,`(opcional)`),Zg()(),Jc(722,`p`),Tk(723,`Rota de redirecionamento para ação de cancelar, caso não seja especificada será usado o comando `),Jc(724,`code`),Tk(725,`navigator.back()`),Zg(),Tk(726,`.`),Zg(),Jc(727,`blockquote`)(728,`p`),Tk(729,`Se passada uma função, é responsabilidade do desenvolvedor implementar a navegação ou outro comportamento desejado.`),Zg()(),Jc(730,`blockquote`)(731,`p`),Tk(732,`Caso queira esconder a ação deve ser passado o valor `),Jc(733,`code`),Tk(734,`false`),Zg(),Tk(735,`;`),Zg()(),Jc(736,`pre`)(737,`code`),Tk(738,`actions = {
  cancel: '/'
};
`),Zg()()()(),Jc(739,`tr`,14)(740,`td`,15)(741,`div`,16)(742,`span`,17),Tk(743,` save`),_u(744,`br`),Zg()()(),Jc(745,`td`,18)(746,`code`,24),Tk(747,`string `),Zg(),Jc(748,`code`,40),Tk(749,` ((resource: any, id: string) => void)`),Zg()(),Jc(750,`td`,21)(751,`em`)(752,`strong`),Tk(753,`(opcional)`),Zg()(),Jc(754,`p`),Tk(755,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),Zg(),Jc(756,`p`),Tk(757,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),Zg(),Jc(758,`blockquote`)(759,`p`),Tk(760,`A rota pode conter um parâmetro chamando id.`),Zg()(),Jc(761,`pre`)(762,`code`),Tk(763,`actions = {
  save: 'detail/:id'
};
`),Zg()(),Jc(764,`p`),Tk(765,`Se for passado um método:`),Zg(),Jc(766,`ul`)(767,`li`),Tk(768,`receberá como parâmetro na chamada do método o recurso, por exemplo: `),Jc(769,`code`),Tk(770,`{ email: 'example@email.com' }`),Zg(),Tk(771,`.`),Zg(),Jc(772,`li`),Tk(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),Zg()()()(),Jc(774,`tr`,14)(775,`td`,15)(776,`div`,16)(777,`span`,17),Tk(778,` saveNew`),_u(779,`br`),Zg()()(),Jc(780,`td`,18)(781,`code`,24),Tk(782,`string `),Zg(),Jc(783,`code`,41),Tk(784,` ((resource: any, id?: string) => void)`),Zg()(),Jc(785,`td`,21)(786,`em`)(787,`strong`),Tk(788,`(opcional)`),Zg()(),Jc(789,`p`),Tk(790,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),Zg(),Jc(791,`p`),Tk(792,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),Zg(),Jc(793,`blockquote`)(794,`p`),Tk(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),Zg()(),Jc(796,`pre`)(797,`code`),Tk(798,`actions = {
  saveNew: 'new'
};
`),Zg()(),Jc(799,`p`),Tk(800,`A rota pode conter um parâmetro id.`),Zg(),Jc(801,`pre`)(802,`code`),Tk(803,`actions = {
  saveNew: 'edit/:id'
};
`),Zg()(),Jc(804,`p`),Tk(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),Zg()()()(),Jc(806,`h4`,34)(807,`code`,5),Tk(808,`PoPageDynamicEditBeforeCancel`),Zg()(),Jc(809,`div`,2)(810,`p`),Tk(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Jc(812,`code`),Tk(813,`beforeCancel`),Zg(),Tk(814,`.`),Zg()(),Jc(815,`h4`,10),Tk(816,`Propriedades`),Zg(),Jc(817,`table`,11)(818,`tr`,12)(819,`th`,13),Tk(820,`Nome`),Zg(),Jc(821,`th`,13),Tk(822,`Tipo`),Zg(),Jc(823,`th`,13),Tk(824,`Descrição`),Zg()(),Jc(825,`tr`,14)(826,`td`,15)(827,`div`,16)(828,`span`,17),Tk(829,` allowAction`),_u(830,`br`),Zg()()(),Jc(831,`td`,18)(832,`code`,22),Tk(833,`boolean`),Zg()(),Jc(834,`td`,21)(835,`em`)(836,`strong`),Tk(837,`(opcional)`),Zg()(),Jc(838,`p`),Tk(839,`Define se deve ou não executar a ação de cancelamento de edição da página (cancel)`),Zg()()(),Jc(840,`tr`,14)(841,`td`,15)(842,`div`,16)(843,`span`,17),Tk(844,` newUrl`),_u(845,`br`),Zg()()(),Jc(846,`td`,18)(847,`code`,24),Tk(848,`string`),Zg()(),Jc(849,`td`,21)(850,`em`)(851,`strong`),Tk(852,`(opcional)`),Zg()(),Jc(853,`p`),Tk(854,`Nova rota para navegação que substituirá a definida anteriormente em `),Jc(855,`code`),Tk(856,`cancel`),Zg(),Tk(857,`.`),Zg()()()(),Jc(858,`h4`,34)(859,`code`,5),Tk(860,`PoPageDynamicEditBeforeSaveNew`),Zg()(),Jc(861,`div`,2)(862,`p`),Tk(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Jc(864,`code`),Tk(865,`beforeSaveNew`),Zg(),Tk(866,`.`),Zg()(),Jc(867,`h4`,10),Tk(868,`Propriedades`),Zg(),Jc(869,`table`,11)(870,`tr`,12)(871,`th`,13),Tk(872,`Nome`),Zg(),Jc(873,`th`,13),Tk(874,`Tipo`),Zg(),Jc(875,`th`,13),Tk(876,`Descrição`),Zg()(),Jc(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),Tk(881,` allowAction`),_u(882,`br`),Zg()()(),Jc(883,`td`,18)(884,`code`,22),Tk(885,`boolean`),Zg()(),Jc(886,`td`,21)(887,`em`)(888,`strong`),Tk(889,`(opcional)`),Zg()(),Jc(890,`p`),Tk(891,`Define se deve ou não executar a ação salvar e novo (saveNew).`),Zg()()(),Jc(892,`tr`,14)(893,`td`,15)(894,`div`,16)(895,`span`,17),Tk(896,` newUrl`),_u(897,`br`),Zg()()(),Jc(898,`td`,18)(899,`code`,24),Tk(900,`string`),Zg()(),Jc(901,`td`,21)(902,`em`)(903,`strong`),Tk(904,`(opcional)`),Zg()(),Jc(905,`p`),Tk(906,`Nova rota de redirecionamento, que substituirá a rota definida anteriormente em `),Jc(907,`code`),Tk(908,`saveNew`),Zg(),Tk(909,`.`),Zg()()(),Jc(910,`tr`,14)(911,`td`,15)(912,`div`,16)(913,`span`,17),Tk(914,` resource`),_u(915,`br`),Zg()()(),Jc(916,`td`,18)(917,`code`,42),Tk(918,`any`),Zg()(),Jc(919,`td`,21)(920,`em`)(921,`strong`),Tk(922,`(opcional)`),Zg()(),Jc(923,`p`),Tk(924,`Recurso atualizado.`),Zg(),Jc(925,`p`),Tk(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),Jc(927,`code`),Tk(928,`key: true`),Zg(),Tk(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),Zg(),Jc(930,`ul`)(931,`li`)(932,`p`),Tk(933,`recurso anterior com a propriedade id foi que definida como `),Jc(934,`em`),Tk(935,`key`),Zg(),Tk(936,`:`),Zg(),Jc(937,`pre`)(938,`code`),Tk(939,`{ id: 1, name: 'Ane' }
`),Zg()()(),Jc(940,`li`)(941,`p`),Tk(942,`recurso retornado no `),Jc(943,`code`),Tk(944,`beforeSaveNew`),Zg(),Tk(945,`:`),Zg(),Jc(946,`pre`)(947,`code`),Tk(948,`{ id: 50, age: 23 }
`),Zg()()(),Jc(949,`li`)(950,`p`),Tk(951,`Mesclagem do recurso:`),Zg(),Jc(952,`pre`)(953,`code`),Tk(954,`{ id: 1, name: 'Ane', age: 23 }
`),Zg()()()(),Jc(955,`blockquote`)(956,`p`),Tk(957,`Caso `),Jc(958,`code`),Tk(959,`allowAction`),Zg(),Tk(960,` seja `),Jc(961,`code`),Tk(962,`false`),Zg(),Tk(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),Zg()()()()(),Jc(964,`h4`,34)(965,`code`,5),Tk(966,`PoPageDynamicEditBeforeSave`),Zg()(),Jc(967,`div`,2)(968,`p`),Tk(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),Jc(970,`code`),Tk(971,`beforeSave`),Zg(),Tk(972,`.`),Zg()(),Jc(973,`h4`,10),Tk(974,`Propriedades`),Zg(),Jc(975,`table`,11)(976,`tr`,12)(977,`th`,13),Tk(978,`Nome`),Zg(),Jc(979,`th`,13),Tk(980,`Tipo`),Zg(),Jc(981,`th`,13),Tk(982,`Descrição`),Zg()(),Jc(983,`tr`,14)(984,`td`,15)(985,`div`,16)(986,`span`,17),Tk(987,` allowAction`),_u(988,`br`),Zg()()(),Jc(989,`td`,18)(990,`code`,22),Tk(991,`boolean`),Zg()(),Jc(992,`td`,21)(993,`em`)(994,`strong`),Tk(995,`(opcional)`),Zg()(),Jc(996,`p`),Tk(997,`Define se deve ou não executar a ação salvar (save).`),Zg()()(),Jc(998,`tr`,14)(999,`td`,15)(1e3,`div`,16)(1001,`span`,17),Tk(1002,` newUrl`),_u(1003,`br`),Zg()()(),Jc(1004,`td`,18)(1005,`code`,24),Tk(1006,`string`),Zg()(),Jc(1007,`td`,21)(1008,`em`)(1009,`strong`),Tk(1010,`(opcional)`),Zg()(),Jc(1011,`p`),Tk(1012,`Nova rota para salvar o recurso, que substituirá a rota definida anteriormente em `),Jc(1013,`code`),Tk(1014,`save`),Zg(),Tk(1015,`.`),Zg()()(),Jc(1016,`tr`,14)(1017,`td`,15)(1018,`div`,16)(1019,`span`,17),Tk(1020,` resource`),_u(1021,`br`),Zg()()(),Jc(1022,`td`,18)(1023,`code`,42),Tk(1024,`any`),Zg()(),Jc(1025,`td`,21)(1026,`em`)(1027,`strong`),Tk(1028,`(opcional)`),Zg()(),Jc(1029,`p`),Tk(1030,`Recurso atualizado.`),Zg(),Jc(1031,`p`),Tk(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),Zg(),Jc(1033,`ul`)(1034,`li`)(1035,`p`),Tk(1036,`recurso anterior:`),Zg(),Jc(1037,`pre`)(1038,`code`),Tk(1039,`{ name: 'Ane' }
`),Zg()()(),Jc(1040,`li`)(1041,`p`),Tk(1042,`recurso retornado no `),Jc(1043,`code`),Tk(1044,`beforeSave`),Zg(),Tk(1045,`:`),Zg(),Jc(1046,`pre`)(1047,`code`),Tk(1048,`{ age: 23 }
`),Zg()()(),Jc(1049,`li`)(1050,`p`),Tk(1051,`Mesclagem do recurso:`),Zg(),Jc(1052,`pre`)(1053,`code`),Tk(1054,`{ name: 'Ane', age: 23 }
`),Zg()()()(),Jc(1055,`blockquote`)(1056,`p`),Tk(1057,`Caso `),Jc(1058,`code`),Tk(1059,`allowAction`),Zg(),Tk(1060,` seja `),Jc(1061,`code`),Tk(1062,`false`),Zg(),Tk(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),Zg()()()()(),Jc(1064,`h4`,34)(1065,`code`,5),Tk(1066,`PoPageDynamicEditField`),Zg()(),Jc(1067,`div`,2)(1068,`p`),Tk(1069,`Interface dos fields usados para compor o template `),Jc(1070,`code`),Tk(1071,`po-page-dynamic-edit`),Zg(),Tk(1072,`.
Herda as defini\xE7\xF5es da interface
`),Jc(1073,`a`,43),Tk(1074,`PoDynamicFormField`),Zg(),Tk(1075,`.`),Zg()(),Jc(1076,`h4`,10),Tk(1077,`Propriedades`),Zg(),Jc(1078,`table`,11)(1079,`tr`,12)(1080,`th`,13),Tk(1081,`Nome`),Zg(),Jc(1082,`th`,13),Tk(1083,`Tipo`),Zg(),Jc(1084,`th`,13),Tk(1085,`Descrição`),Zg()(),Jc(1086,`tr`,14)(1087,`td`,15)(1088,`div`,16)(1089,`span`,17),Tk(1090,` duplicate`),_u(1091,`br`),Zg()()(),Jc(1092,`td`,18)(1093,`code`,22),Tk(1094,`boolean`),Zg()(),Jc(1095,`td`,21)(1096,`em`)(1097,`strong`),Tk(1098,`(opcional)`),Zg()(),Jc(1099,`p`),Tk(1100,`Indica se o campo será duplicado caso seja executada a ação de duplicação.`),Zg()()()(),Jc(1101,`h4`,34)(1102,`code`,5),Tk(1103,`PoPageDynamicEditLiterals`),Zg()(),Jc(1104,`div`,2)(1105,`p`),Tk(1106,`Interface para definição das literais usadas no `),Jc(1107,`code`),Tk(1108,`po-page-dynamic-edit`),Zg(),Tk(1109,`.`),Zg()(),Jc(1110,`h4`,10),Tk(1111,`Propriedades`),Zg(),Jc(1112,`table`,11)(1113,`tr`,12)(1114,`th`,13),Tk(1115,`Nome`),Zg(),Jc(1116,`th`,13),Tk(1117,`Tipo`),Zg(),Jc(1118,`th`,13),Tk(1119,`Descrição`),Zg()(),Jc(1120,`tr`,14)(1121,`td`,15)(1122,`div`,16)(1123,`span`,17),Tk(1124,` cancelConfirmMessage`),_u(1125,`br`),Zg()()(),Jc(1126,`td`,18)(1127,`code`,24),Tk(1128,`string`),Zg()(),Jc(1129,`td`,21)(1130,`em`)(1131,`strong`),Tk(1132,`(opcional)`),Zg()(),Jc(1133,`p`),Tk(1134,`Texto exibido na mensagem de cancelamento da inclusão/edição.`),Zg()()(),Jc(1135,`tr`,14)(1136,`td`,15)(1137,`div`,16)(1138,`span`,17),Tk(1139,` detailActionNew`),_u(1140,`br`),Zg()()(),Jc(1141,`td`,18)(1142,`code`,24),Tk(1143,`string`),Zg()(),Jc(1144,`td`,21)(1145,`em`)(1146,`strong`),Tk(1147,`(opcional)`),Zg()(),Jc(1148,`p`),Tk(1149,`Rótulo exibido no botão `),Jc(1150,`code`),Tk(1151,`Novo`),Zg(),Tk(1152,`.`),Zg()()(),Jc(1153,`tr`,14)(1154,`td`,15)(1155,`div`,16)(1156,`span`,17),Tk(1157,` pageActionCancel`),_u(1158,`br`),Zg()()(),Jc(1159,`td`,18)(1160,`code`,24),Tk(1161,`string`),Zg()(),Jc(1162,`td`,21)(1163,`em`)(1164,`strong`),Tk(1165,`(opcional)`),Zg()(),Jc(1166,`p`),Tk(1167,`Rótulo exibido no botão `),Jc(1168,`code`),Tk(1169,`Cancelar`),Zg(),Tk(1170,`.`),Zg()()(),Jc(1171,`tr`,14)(1172,`td`,15)(1173,`div`,16)(1174,`span`,17),Tk(1175,` pageActionSave`),_u(1176,`br`),Zg()()(),Jc(1177,`td`,18)(1178,`code`,24),Tk(1179,`string`),Zg()(),Jc(1180,`td`,21)(1181,`em`)(1182,`strong`),Tk(1183,`(opcional)`),Zg()(),Jc(1184,`p`),Tk(1185,`Rótulo exibido no botão `),Jc(1186,`code`),Tk(1187,`Salvar`),Zg(),Tk(1188,`.`),Zg()()(),Jc(1189,`tr`,14)(1190,`td`,15)(1191,`div`,16)(1192,`span`,17),Tk(1193,` pageActionSaveNew`),_u(1194,`br`),Zg()()(),Jc(1195,`td`,18)(1196,`code`,24),Tk(1197,`string`),Zg()(),Jc(1198,`td`,21)(1199,`em`)(1200,`strong`),Tk(1201,`(opcional)`),Zg()(),Jc(1202,`p`),Tk(1203,`Rótulo exibido no botão `),Jc(1204,`code`),Tk(1205,`Salvar e novo`),Zg(),Tk(1206,`.`),Zg()()(),Jc(1207,`tr`,14)(1208,`td`,15)(1209,`div`,16)(1210,`span`,17),Tk(1211,` registerNotFound`),_u(1212,`br`),Zg()()(),Jc(1213,`td`,18)(1214,`code`,24),Tk(1215,`string`),Zg()(),Jc(1216,`td`,21)(1217,`em`)(1218,`strong`),Tk(1219,`(opcional)`),Zg()(),Jc(1220,`p`),Tk(1221,`Texto exibido para resgistro não encontrado.`),Zg()()(),Jc(1222,`tr`,14)(1223,`td`,15)(1224,`div`,16)(1225,`span`,17),Tk(1226,` saveNotificationError`),_u(1227,`br`),Zg()()(),Jc(1228,`td`,18)(1229,`code`,24),Tk(1230,`string`),Zg()(),Jc(1231,`td`,21)(1232,`em`)(1233,`strong`),Tk(1234,`(opcional)`),Zg()(),Jc(1235,`p`),Tk(1236,`Texto exibido para ocorrência de alguma inconsistência ao salvar.`),Zg()()(),Jc(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),Tk(1241,` saveNotificationSuccessSave`),_u(1242,`br`),Zg()()(),Jc(1243,`td`,18)(1244,`code`,24),Tk(1245,`string`),Zg()(),Jc(1246,`td`,21)(1247,`em`)(1248,`strong`),Tk(1249,`(opcional)`),Zg()(),Jc(1250,`p`),Tk(1251,`Texto exibido para recurso salvo com sucesso.`),Zg()()(),Jc(1252,`tr`,14)(1253,`td`,15)(1254,`div`,16)(1255,`span`,17),Tk(1256,` saveNotificationSuccessUpdate`),_u(1257,`br`),Zg()()(),Jc(1258,`td`,18)(1259,`code`,24),Tk(1260,`string`),Zg()(),Jc(1261,`td`,21)(1262,`em`)(1263,`strong`),Tk(1264,`(opcional)`),Zg()(),Jc(1265,`p`),Tk(1266,`Texto exibido para recurso atualizado com sucesso.`),Zg()()(),Jc(1267,`tr`,14)(1268,`td`,15)(1269,`div`,16)(1270,`span`,17),Tk(1271,` saveNotificationWarning`),_u(1272,`br`),Zg()()(),Jc(1273,`td`,18)(1274,`code`,24),Tk(1275,`string`),Zg()(),Jc(1276,`td`,21)(1277,`em`)(1278,`strong`),Tk(1279,`(opcional)`),Zg()(),Jc(1280,`p`),Tk(1281,`Texto exibido para adivertência de formulário preenchido de forma incorreta.`),Zg()()()(),Jc(1282,`h4`,34)(1283,`code`,5),Tk(1284,`PoPageDynamicEditMetadata`),Zg()(),Jc(1285,`div`,2)(1286,`p`),Tk(1287,`Interface para as propriedades de uma página dinâmica. `),_u(1288,`a`,44),Zg()(),Jc(1289,`h4`,10),Tk(1290,`Propriedades`),Zg(),Jc(1291,`table`,11)(1292,`tr`,12)(1293,`th`,13),Tk(1294,`Nome`),Zg(),Jc(1295,`th`,13),Tk(1296,`Tipo`),Zg(),Jc(1297,`th`,13),Tk(1298,`Descrição`),Zg()(),Jc(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),Tk(1303,` actions`),_u(1304,`br`),Zg()()(),Jc(1305,`td`,18)(1306,`code`,19),Tk(1307,`PoPageDynamicEditActions`),Zg()(),Jc(1308,`td`,21)(1309,`em`)(1310,`strong`),Tk(1311,`(opcional)`),Zg()(),Jc(1312,`p`),Tk(1313,`Ações que o usuário poderá executar na página através de botões.`),Zg()()(),Jc(1314,`tr`,14)(1315,`td`,15)(1316,`div`,16)(1317,`span`,17),Tk(1318,` autoRouter`),_u(1319,`br`),Zg()()(),Jc(1320,`td`,18)(1321,`code`,22),Tk(1322,`boolean`),Zg()(),Jc(1323,`td`,21)(1324,`em`)(1325,`strong`),Tk(1326,`(opcional)`),Zg()(),Jc(1327,`p`),Tk(1328,`Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `),Jc(1329,`code`),Tk(1330,`p-actions`),Zg()(),Jc(1331,`p`),Tk(1332,`As rotas criadas serão baseadas na propriedade `),Jc(1333,`code`),Tk(1334,`p-actions`),Zg(),Tk(1335,`.`),Zg(),Jc(1336,`blockquote`)(1337,`p`),Tk(1338,`Para o correto funcionamento não pode haver nenhuma rota coringa (`),Jc(1339,`code`),Tk(1340,`**`),Zg(),Tk(1341,`) especificada.`),Zg()()()(),Jc(1342,`tr`,14)(1343,`td`,15)(1344,`div`,16)(1345,`span`,17),Tk(1346,` breadcrumb`),_u(1347,`br`),Zg()()(),Jc(1348,`td`,18)(1349,`code`,23),Tk(1350,`PoBreadcrumb`),Zg()(),Jc(1351,`td`,21)(1352,`em`)(1353,`strong`),Tk(1354,`(opcional)`),Zg()(),Jc(1355,`p`),Tk(1356,`Objeto com propriedades do breadcrumb.`),Zg()()(),Jc(1357,`tr`,14)(1358,`td`,15)(1359,`div`,16)(1360,`span`,17),Tk(1361,` fields`),_u(1362,`br`),Zg()()(),Jc(1363,`td`,18)(1364,`code`,26),Tk(1365,`Array<PoPageDynamicEditField>`),Zg()(),Jc(1366,`td`,21)(1367,`em`)(1368,`strong`),Tk(1369,`(opcional)`),Zg()(),Jc(1370,`p`),Tk(1371,`Lista dos campos usados.`),Zg()()(),Jc(1372,`tr`,14)(1373,`td`,15)(1374,`div`,16)(1375,`span`,17),Tk(1376,` title`),_u(1377,`br`),Zg()()(),Jc(1378,`td`,18)(1379,`code`,24),Tk(1380,`string`),Zg()(),Jc(1381,`td`,21)(1382,`em`)(1383,`strong`),Tk(1384,`(opcional)`),Zg()(),Jc(1385,`p`),Tk(1386,`Título da página.`),Zg()()(),Jc(1387,`tr`,14)(1388,`td`,15)(1389,`div`,16)(1390,`span`,17),Tk(1391,` version`),_u(1392,`br`),Zg()()(),Jc(1393,`td`,18)(1394,`code`,45),Tk(1395,`number`),Zg()(),Jc(1396,`td`,21)(1397,`p`),Tk(1398,`Versão do metadado devolvido pelo backend.`),Zg()()()(),Jc(1399,`h4`,34)(1400,`code`,5),Tk(1401,`PoPageDynamicEditOptions`),Zg()(),Jc(1402,`div`,2)(1403,`p`),Tk(1404,`Interface para as propriedades de uma página dinâmica.`),Zg()(),Jc(1405,`h4`,10),Tk(1406,`Propriedades`),Zg(),Jc(1407,`table`,11)(1408,`tr`,12)(1409,`th`,13),Tk(1410,`Nome`),Zg(),Jc(1411,`th`,13),Tk(1412,`Tipo`),Zg(),Jc(1413,`th`,13),Tk(1414,`Descrição`),Zg()(),Jc(1415,`tr`,14)(1416,`td`,15)(1417,`div`,16)(1418,`span`,17),Tk(1419,` actions`),_u(1420,`br`),Zg()()(),Jc(1421,`td`,18)(1422,`code`,19),Tk(1423,`PoPageDynamicEditActions`),Zg()(),Jc(1424,`td`,21)(1425,`em`)(1426,`strong`),Tk(1427,`(opcional)`),Zg()(),Jc(1428,`p`),Tk(1429,`Ações que o usuário poderá executar na página através de botões.`),Zg()()(),Jc(1430,`tr`,14)(1431,`td`,15)(1432,`div`,16)(1433,`span`,17),Tk(1434,` breadcrumb`),_u(1435,`br`),Zg()()(),Jc(1436,`td`,18)(1437,`code`,23),Tk(1438,`PoBreadcrumb`),Zg()(),Jc(1439,`td`,21)(1440,`em`)(1441,`strong`),Tk(1442,`(opcional)`),Zg()(),Jc(1443,`p`),Tk(1444,`Objeto com propriedades do breadcrumb.`),Zg()()(),Jc(1445,`tr`,14)(1446,`td`,15)(1447,`div`,16)(1448,`span`,17),Tk(1449,` fields`),_u(1450,`br`),Zg()()(),Jc(1451,`td`,18)(1452,`code`,26),Tk(1453,`Array<PoPageDynamicEditField>`),Zg()(),Jc(1454,`td`,21)(1455,`em`)(1456,`strong`),Tk(1457,`(opcional)`),Zg()(),Jc(1458,`p`),Tk(1459,`Lista dos campos usados.`),Zg()()(),Jc(1460,`tr`,14)(1461,`td`,15)(1462,`div`,16)(1463,`span`,17),Tk(1464,` title`),_u(1465,`br`),Zg()()(),Jc(1466,`td`,18)(1467,`code`,24),Tk(1468,`string`),Zg()(),Jc(1469,`td`,21)(1470,`em`)(1471,`strong`),Tk(1472,`(opcional)`),Zg()(),Jc(1473,`p`),Tk(1474,`Título da página.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function re(a,le){if(a&1){let d=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(d);let r=nk();return H_(r.changeTab(`web`))}),_u(1,`sample-po-page-dynamic-edit-basic-view`)(2,`sample-po-page-dynamic-edit-user-view`),Zg()}if(a&2){let d=nk();Rb(`p-active`,d.activeTab===`web`)}}var me=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,o){this.route=d,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let o=d.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Dynamic Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,r){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,re,3,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),_u(4,`sample-po-page-dynamic-edit-doc`),Zg()()()),o&2&&(Rb(`p-actions`,r.actions),Ig(2),BO(r.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,r.activeTab===`doc`))},dependencies:[Tze,Qae,ere,H,G,K],encapsulation:2,changeDetection:1})}return a})()}];var W=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(me),WV]})}return a})();var qe=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,W]})}return a})();export{qe as DocPoPageDynamicEditModule};
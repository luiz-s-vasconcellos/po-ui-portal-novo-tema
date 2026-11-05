import{Ai as _O,Da as pe,Fa as rg,Ga as vx,Ha as v_,Ii as b,Mr as I1,Ra as ue,Si as Xx,Wa as vo,Xt as ere,Ya as wg,aa as iu,ai as Sn,dr as DO,gr as Dx,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,nr as Ag,qr as Ok,ro as yo,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu}from"./chunk-VuVfKKNQ.js";import{n as P,s as Xn,t as M}from"./main-7FOYFSS2.js";var X=()=>({property:`id`,label:`User ID`});var Z=a=>[a];var R=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-title`,`Po Page Dynamic Edit`,`p-service-api`,`https://po-sample-api.onrender.com/v1/people`,3,`p-fields`]],template:function(o,r){o&1&&nu(0,`po-page-dynamic-edit`,0),o&2&&UE(`p-fields`,DO(2,Z,_O(1,X)))},dependencies:[Xn],encapsulation:2,changeDetection:1})}return a})();var te=a=>({"docs-sample-code-tabs":a});var V=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,r){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Dynamic Edit Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-dynamic-edit-basic`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,te,r.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,R],encapsulation:2,changeDetection:1})}return a})();var ne=[`dynamicEdit`];var G=(()=>{class a{dynamicEdit;serviceApi=`https://po-sample-api.onrender.com/v1/people`;actions={save:`/documentation/po-page-dynamic-detail`,saveNew:`/documentation/po-page-dynamic-edit`};literals={pageActionCancel:`Descartar`,pageActionSave:`Gravar`,pageActionSaveNew:`Gravar e novo`};breadcrumb={items:[{label:`Home`,link:`/`},{label:`People`,link:`/documentation/po-page-dynamic-table`},{label:`Edit`}]};fields=[{property:`status`,divider:`Status`,options:[`active`,`inactive`]},{property:`id`,label:`User ID`,key:!0,required:!0},{property:`name`,divider:`Personal data`,required:!0},{property:`nickname`},{property:`email`,label:`E-mail`},{property:`birthdate`,label:`Birth date`,type:`date`,errorMessage:`Invalid date.`,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthdate`)},{property:`genre`,options:[`female`,`male`,`others`],gridLgColumns:6},{property:`nationality`},{property:`birthPlace`,label:`Place of birth`},{property:`graduation`},{property:`father`,label:"Father`s name",divider:`Relationship`,gridMdColumns:4,gridLgColumns:4},{property:`mother`,label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:`street`,divider:`Address`,gridColumns:4},{property:`city`,optionsService:`https://po-sample-api.onrender.com/v1/cities?transform=true`,offsetColumns:4,gridColumns:4}];onKeyDown(d,o){o.code===`F9`&&this.dynamicEdit.showAdditionalHelp(d)}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-user`]],viewQuery:function(o,r){if(o&1&&iu(ne,7),o&2){let g;yo(g=vo())&&(r.dynamicEdit=g.first)}},standalone:!1,decls:2,vars:6,consts:[[`dynamicEdit`,``],[`p-title`,`User edit`,3,`p-auto-router`,`p-actions`,`p-breadcrumb`,`p-fields`,`p-literals`,`p-service-api`]],template:function(o,r){o&1&&nu(0,`po-page-dynamic-edit`,1,0),o&2&&UE(`p-auto-router`,!0)(`p-actions`,r.actions)(`p-breadcrumb`,r.breadcrumb)(`p-fields`,r.fields)(`p-literals`,r.literals)(`p-service-api`,r.serviceApi)},dependencies:[Xn],encapsulation:2,changeDetection:1})}return a})();var oe=a=>({"docs-sample-code-tabs":a});var K=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(o,r){o&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Dynamic Edit - User`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-dynamic-edit
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-page-dynamic-edit-user`),wg(),nu(23,`hr`)),o&2&&(rg(5),Xx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,oe,r.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,G],encapsulation:2,changeDetection:1})}return a})();var Y=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-page-dynamic-edit-doc`]],standalone:!1,decls:1475,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditActions`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPageDynamicEditField>`],[`pan`,``,1,`docs-api-property-type`,`PoPageDynamicEditLiterals`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditOptions)`],[`pan`,``,1,`docs-api-property-type`,`unknown`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(()`,`=>`,`PoPageDynamicEditBeforeCancel)`],[`href`,`https://po-ui.io/guides/api#successMessages`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSave)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`PoPageDynamicEditBeforeSaveNew)`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`((resource:`,`any,`,`id?:`,`string)`,`=>`,`void)`],[`pan`,``,1,`docs-api-property-type`,`any`],[`href`,`https://po-ui.io/documentation/po-dynamic-form`],[`id`,`po-page-dynamic-edit-metadata`],[`pan`,``,1,`docs-api-property-type`,`number`]],template:function(o,r){o&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do template do po-page-dynamic-detail.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoPageDynamicEditComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O `),jc(15,`code`),lO(16,`po-page-dynamic-edit`),wg(),lO(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),wg(),jc(18,`h3`),lO(19,`Utilização via rota`),wg(),jc(20,`p`),lO(21,`Ao utilizar as rotas para inicializar o template, o `),jc(22,`code`),lO(23,`page-dynamic-edit`),wg(),lO(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),wg(),jc(25,`p`),lO(26,`Exemplo de utilização:`),wg(),jc(27,`p`),lO(28,`Arquivo de configuração de rotas da aplicação: `),jc(29,`code`),lO(30,`app-routing.module.ts`),wg()(),jc(31,`pre`)(32,`code`),lO(33,`const routes: Routes = [
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
`),wg()(),jc(34,`p`),lO(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),wg(),jc(36,`p`),lO(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),wg(),jc(38,`blockquote`)(39,`p`),lO(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),wg()(),jc(41,`p`),lO(42,`Para carregar com um recurso já existente, deve-se ser incluído um parâmetro na rota chamado `),jc(43,`code`),lO(44,`id`),wg(),lO(45,`:`),wg(),jc(46,`pre`)(47,`code`),lO(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),wg()(),jc(49,`p`),lO(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),wg(),jc(51,`p`),lO(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),jc(53,`a`,6),lO(54,`PoPageDynamicEditMetadata`),wg(),lO(55,`. Por exemplo:`),wg(),jc(56,`pre`)(57,`code`),lO(58,` {
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
`),wg()(),jc(59,`blockquote`)(60,`p`),lO(61,`Caso o endpoint dos metadados não seja especificado, será feito uma requisição utilizando o `),jc(62,`code`),lO(63,`serviceApi`),wg(),lO(64,` da seguinte forma:`),wg()(),jc(65,`pre`)(66,`code`),lO(67,`GET {end-point}/metadata?type=edit&version={version}
`),wg()(),jc(68,`h4`),lO(69,`Tokens customizáveis`),wg(),jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),lO(74,`Propriedade`),wg(),jc(75,`th`),lO(76,`Descrição`),wg(),jc(77,`th`),lO(78,`Valor Padrão`),wg()()(),jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`strong`),lO(83,`Header`),wg()(),nu(84,`td`)(85,`td`),wg(),jc(86,`tr`)(87,`td`)(88,`code`),lO(89,`--padding`),wg()(),jc(90,`td`),lO(91,`Espaçamento do header`),wg(),jc(92,`td`)(93,`code`),lO(94,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(95,`tr`)(96,`td`)(97,`code`),lO(98,`--gap`),wg()(),jc(99,`td`),lO(100,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(101,`td`)(102,`code`),lO(103,`var(--spacing-md)`),wg()()(),jc(104,`tr`)(105,`td`)(106,`code`),lO(107,`--gap-actions`),wg()(),jc(108,`td`),lO(109,`Espaçamento entre as ações`),wg(),jc(110,`td`)(111,`code`),lO(112,`var(--spacing-xs)`),wg()()(),jc(113,`tr`)(114,`td`)(115,`code`),lO(116,`--font-family`),wg()(),jc(117,`td`),lO(118,`Família tipográfica do título`),wg(),jc(119,`td`)(120,`code`),lO(121,`var(--font-family-theme)`),wg()()(),jc(122,`tr`)(123,`td`)(124,`strong`),lO(125,`Content`),wg()(),nu(126,`td`)(127,`td`),wg(),jc(128,`tr`)(129,`td`)(130,`code`),lO(131,`--padding-content`),wg()(),jc(132,`td`),lO(133,`Espaçamento do conteúdo`),wg(),jc(134,`td`)(135,`code`),lO(136,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(137,`div`,7)(138,`h4`,8),lO(139,`Seletor`),wg(),jc(140,`pre`,9),lO(141,`<po-page-dynamic-edit
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
`),wg()(),jc(142,`h4`,10),lO(143,`Propriedades`),wg(),jc(144,`table`,11)(145,`tr`,12)(146,`th`,13),lO(147,`Nome`),wg(),jc(148,`th`,13),lO(149,`Tipo`),wg(),jc(150,`th`,13),lO(151,`Padrão`),wg(),jc(152,`th`,13),lO(153,`Descrição`),wg()(),jc(154,`tr`,14)(155,`td`,15)(156,`div`,16)(157,`span`,17),lO(158,` p-actions`),nu(159,`br`),wg()()(),jc(160,`td`,18)(161,`code`,19),lO(162,`PoPageDynamicEditActions`),wg()(),jc(163,`td`,20),lO(164,`-`),wg(),jc(165,`td`,21)(166,`em`)(167,`strong`),lO(168,`(opcional)`),wg()(),jc(169,`p`),lO(170,`Ações da página.`),wg()()(),jc(171,`tr`,14)(172,`td`,15)(173,`div`,16)(174,`span`,17),lO(175,` p-auto-router`),nu(176,`br`),wg()()(),jc(177,`td`,18)(178,`code`,22),lO(179,`boolean`),wg()(),jc(180,`td`,20)(181,`p`),lO(182,`false`),wg()(),jc(183,`td`,21)(184,`em`)(185,`strong`),lO(186,`(opcional)`),wg()(),jc(187,`p`),lO(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),wg(),jc(189,`blockquote`)(190,`p`),lO(191,`Para o correto funcionamento não pode haver nenhum rota coringa (`),jc(192,`code`),lO(193,`**`),wg(),lO(194,`) especificada.`),wg()()()(),jc(195,`tr`,14)(196,`td`,15)(197,`div`,16)(198,`span`,17),lO(199,` p-breadcrumb`),nu(200,`br`),wg()()(),jc(201,`td`,18)(202,`code`,23),lO(203,`PoBreadcrumb`),wg()(),jc(204,`td`,20),lO(205,`-`),wg(),jc(206,`td`,21)(207,`em`)(208,`strong`),lO(209,`(opcional)`),wg()(),jc(210,`p`),lO(211,`Objeto com propriedades do breadcrumb.`),wg()()(),jc(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),lO(216,` p-components-size`),nu(217,`br`),wg()()(),jc(218,`td`,18)(219,`code`,24),lO(220,`string`),wg()(),jc(221,`td`,20)(222,`p`)(223,`code`),lO(224,`medium`),wg()()(),jc(225,`td`,21)(226,`em`)(227,`strong`),lO(228,`(opcional)`),wg()(),jc(229,`p`),lO(230,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(231,`ul`)(232,`li`)(233,`code`),lO(234,`small`),wg(),lO(235,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(236,`li`)(237,`code`),lO(238,`medium`),wg(),lO(239,`: aplica a medida medium de cada componente.`),wg()(),jc(240,`blockquote`)(241,`p`),lO(242,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(243,`code`),lO(244,`medium`),wg(),lO(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(246,`a`,25),lO(247,`po-theme`),wg(),lO(248,`.`),wg()()()(),jc(249,`tr`,14)(250,`td`,15)(251,`div`,16)(252,`span`,17),lO(253,` p-fields`),nu(254,`br`),wg()()(),jc(255,`td`,18)(256,`code`,26),lO(257,`Array<PoPageDynamicEditField>`),wg()(),jc(258,`td`,20),lO(259,`-`),wg(),jc(260,`td`,21)(261,`p`),lO(262,`Lista dos campos usados na tabela e busca avançada.`),wg()()(),jc(263,`tr`,14)(264,`td`,15)(265,`div`,16)(266,`span`,17),lO(267,` p-literals`),nu(268,`br`),wg()()(),jc(269,`td`,18)(270,`code`,27),lO(271,`PoPageDynamicEditLiterals`),wg()(),jc(272,`td`,20),lO(273,`-`),wg(),jc(274,`td`,21)(275,`em`)(276,`strong`),lO(277,`(opcional)`),wg()(),jc(278,`p`),lO(279,`Objeto com as literais usadas no `),jc(280,`code`),lO(281,`po-page-dynamic-edit`),wg(),lO(282,`.`),wg(),jc(283,`p`),lO(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),wg(),jc(285,`pre`)(286,`code`),lO(287,`const customLiterals: PoPageDynamicEditLiterals = {
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
`),wg()(),jc(288,`p`),lO(289,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(290,`pre`)(291,`code`),lO(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),wg()(),jc(293,`blockquote`)(294,`p`),lO(295,`O valor padrão será traduzido de acordo com o idioma configurado no `),jc(296,`a`,28)(297,`code`),lO(298,`PoI18nService`),wg()(),lO(299,` ou `),jc(300,`em`),lO(301,`browser`),wg(),lO(302,`.`),wg()()()(),jc(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),lO(307,` p-notification-type`),nu(308,`br`),wg()()(),jc(309,`td`,18)(310,`code`,24),lO(311,`string`),wg()(),jc(312,`td`,20)(313,`p`),lO(314,`warning`),wg()(),jc(315,`td`,21)(316,`em`)(317,`strong`),lO(318,`(opcional)`),wg()(),jc(319,`p`),lO(320,`Tipo da notificação.`),wg(),jc(321,`p`),lO(322,`É possivel definir o tipo de notificação que será exibido quando houver algum campo inválido no formulário.`),wg(),jc(323,`pre`)(324,`code`),lO(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),wg()(),jc(326,`blockquote`)(327,`p`),lO(328,`Os valores aceitos são 'warning' e 'error'.`),wg()()()(),jc(329,`tr`,14)(330,`td`,15)(331,`div`,16)(332,`span`,17),lO(333,` p-load`),nu(334,`br`),wg()()(),jc(335,`td`,18)(336,`code`,24),lO(337,`string `),wg(),jc(338,`code`,29),lO(339,` (() => PoPageDynamicEditOptions)`),wg()(),jc(340,`td`,20),lO(341,`-`),wg(),jc(342,`td`,21)(343,`p`),lO(344,`Função ou serviço que será executado na inicialização do componente.`),wg(),jc(345,`p`),lO(346,`A propriedade aceita os seguintes tipos:`),wg(),jc(347,`ul`)(348,`li`)(349,`code`),lO(350,`string`),wg(),lO(351,`: `),jc(352,`em`),lO(353,`Endpoint`),wg(),lO(354,` usado pelo componente para requisição via `),jc(355,`code`),lO(356,`POST`),wg(),lO(357,`.`),wg(),jc(358,`li`)(359,`code`),lO(360,`function`),wg(),lO(361,`: Método que será executado.`),wg()(),jc(362,`p`),lO(363,`O retorno desta função deve ser do tipo `),jc(364,`code`),lO(365,`PoPageDynamicEditOptions`),wg(),lO(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),wg(),jc(367,`p`),lO(368,`Por exemplo:`),wg(),jc(369,`pre`)(370,`code`),lO(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),wg()(),jc(372,`p`),lO(373,`Para referenciar a sua função utilize a propriedade `),jc(374,`code`),lO(375,`bind`),wg(),lO(376,`, por exemplo:`),wg(),jc(377,`pre`)(378,`code`),lO(379,`[p-load]="onLoadOptions.bind(this)"
`),wg()()()(),jc(380,`tr`,14)(381,`td`,15)(382,`div`,16)(383,`span`,17),lO(384,` p-load-data`),nu(385,`br`),wg()()(),jc(386,`td`,18)(387,`code`,30),lO(388,`unknown`),wg()(),jc(389,`td`,20),lO(390,`-`),wg(),jc(391,`td`,21)(392,`em`)(393,`strong`),lO(394,`(opcional)`),wg()(),jc(395,`p`),lO(396,`Função que será executada após ser realizada a busca dos dados.`),wg(),jc(397,`p`),lO(398,`A propriedade aceita os seguintes tipos:`),wg(),jc(399,`ul`)(400,`li`)(401,`code`),lO(402,`function`),wg(),lO(403,`: Método que será executado.`),wg()(),jc(404,`p`),lO(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),wg(),jc(406,`p`),lO(407,`Por exemplo:`),wg(),jc(408,`pre`)(409,`code`),lO(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),wg()(),jc(411,`p`),lO(412,`Para referenciar a sua função utilize a propriedade `),jc(413,`code`),lO(414,`bind`),wg(),lO(415,`, por exemplo:`),wg(),jc(416,`pre`)(417,`code`),lO(418,`[p-load-data]="onLoadCustom.bind(this)"
`),wg()()()(),jc(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),lO(423,` p-service-api`),nu(424,`br`),wg()()(),jc(425,`td`,18)(426,`code`,24),lO(427,`string`),wg()(),jc(428,`td`,20),lO(429,`-`),wg(),jc(430,`td`,21)(431,`p`),lO(432,`Endpoint usado pelo template para requisição do recurso que será exibido para edição.`),wg(),jc(433,`p`),lO(434,`Para as ações de `),jc(435,`code`),lO(436,`save`),wg(),lO(437,` e `),jc(438,`code`),lO(439,`saveNew`),wg(),lO(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),wg(),jc(441,`blockquote`)(442,`p`)(443,`code`),lO(444,`POST {end-point}`),wg()()(),jc(445,`pre`)(446,`code`),lO(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),wg()(),jc(448,`p`),lO(449,`Resquisição disparada, onde a propriedade `),jc(450,`code`),lO(451,`name`),wg(),lO(452,` e `),jc(453,`code`),lO(454,`city`),wg(),lO(455,` foram preenchidas:`),wg(),jc(456,`pre`)(457,`code`),lO(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),wg()(),jc(459,`p`),lO(460,`Request payload:`),wg(),jc(461,`pre`)(462,`code`),lO(463,`{ "name": "Fulano", "city": "Smallville" }
`),wg()(),jc(464,`p`),lO(465,`Caso queira que o template carregue um recurso já existente, deve-se ser incluído um parametro na rota chamado `),jc(466,`code`),lO(467,`id`),wg(),lO(468,`.`),wg(),jc(469,`p`),lO(470,`Exemplo de configuração de rota:`),wg(),jc(471,`pre`)(472,`code`),lO(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),wg()(),jc(474,`p`),lO(475,`Baseado nisso, na inicialização do template, será disparado uma requisição para buscar o recurso que será editado.`),wg(),jc(476,`blockquote`)(477,`p`)(478,`code`),lO(479,`GET {end-point}/{id}`),wg()()(),jc(480,`p`),lO(481,`Nos métodos de `),jc(482,`code`),lO(483,`save`),wg(),lO(484,` e `),jc(485,`code`),lO(486,`saveNew`),wg(),lO(487,`, ao invés de um `),jc(488,`code`),lO(489,`POST`),wg(),lO(490,`, será disparado um `),jc(491,`code`),lO(492,`PUT`),wg(),lO(493,`.`),wg(),jc(494,`p`),lO(495,`Resquisição disparada, onde a propriedade `),jc(496,`code`),lO(497,`name`),wg(),lO(498,` e `),jc(499,`code`),lO(500,`city`),wg(),lO(501,` foram preenchidas / atualizadas, e o `),jc(502,`code`),lO(503,`id`),wg(),lO(504,` da url é 2:`),wg(),jc(505,`pre`)(506,`code`),lO(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),wg()(),jc(508,`p`),lO(509,`Request payload:`),wg(),jc(510,`pre`)(511,`code`),lO(512,`{ "name": "Fulano", "city": "Metropolis" }
`),wg()()()(),jc(513,`tr`,14)(514,`td`,15)(515,`div`,16)(516,`span`,17),lO(517,` p-title`),nu(518,`br`),wg()()(),jc(519,`td`,18)(520,`code`,24),lO(521,`string`),wg()(),jc(522,`td`,20),lO(523,`-`),wg(),jc(524,`td`,21)(525,`p`),lO(526,`Título da página.`),wg()()()(),jc(527,`h3`,10),lO(528,`Métodos`),wg(),jc(529,`table`,31)(530,`tr`,14)(531,`th`,32)(532,`div`,16)(533,`h4`)(534,`span`,17),lO(535,` showAdditionalHelp `),wg()()()()(),jc(536,`tr`,21)(537,`td`,21)(538,`p`),lO(539,`Método que exibe `),jc(540,`code`),lO(541,`p-helper`),wg(),lO(542,` ou executa a ação definida em `),jc(543,`code`),lO(544,`p-helper{eventOnClick}`),wg(),lO(545,` ou em `),jc(546,`code`),lO(547,`p-additionalHelp`),wg(),lO(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(549,`code`),lO(550,`keydown`),wg(),lO(551,`.`),wg(),jc(552,`pre`)(553,`code`),lO(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
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
`),wg()()()()(),jc(555,`h5`)(556,`b`),lO(557,`Parâmetros`),wg()(),jc(558,`table`,11)(559,`tr`,12)(560,`th`,13),lO(561,`Nome`),wg(),jc(562,`th`,13),lO(563,`Tipo`),wg(),jc(564,`th`,13),lO(565,`Descrição`),wg()(),jc(566,`tr`,14)(567,`td`,15),lO(568,` property`),wg(),jc(569,`td`,18)(570,`code`,33),lO(571,` string `),wg()(),jc(572,`td`,21)(573,`p`),lO(574,`Identificador da coluna.`),wg()()()(),nu(575,`br`),jc(576,`h3`),lO(577,`Interfaces`),wg(),jc(578,`h4`,34)(579,`code`,5),lO(580,`PoPageDynamicEditActions`),wg()(),jc(581,`div`,2)(582,`p`),lO(583,`Interface para as ações do componente po-page-dynamic-edit.`),wg()(),jc(584,`h4`,10),lO(585,`Propriedades`),wg(),jc(586,`table`,11)(587,`tr`,12)(588,`th`,13),lO(589,`Nome`),wg(),jc(590,`th`,13),lO(591,`Tipo`),wg(),jc(592,`th`,13),lO(593,`Descrição`),wg()(),jc(594,`tr`,14)(595,`td`,15)(596,`div`,16)(597,`span`,17),lO(598,` beforeCancel`),nu(599,`br`),wg()()(),jc(600,`td`,18)(601,`code`,24),lO(602,`string `),wg(),jc(603,`code`,35),lO(604,` (() => PoPageDynamicEditBeforeCancel)`),wg()(),jc(605,`td`,21)(606,`em`)(607,`strong`),lO(608,`(opcional)`),wg()(),jc(609,`p`),lO(610,`Rota ou método que será chamado antes de executar a ação de cancelamento (cancel).`),wg(),jc(611,`p`),lO(612,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),jc(613,`code`),lO(614,`PoPageDynamicEditBeforeCancel`),wg(),lO(615,`.`),wg(),jc(616,`blockquote`)(617,`p`),lO(618,`A url será chamada via POST`),wg()(),jc(619,`p`),lO(620,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),jc(621,`strong`),lO(622,`beforeCancel`),wg(),lO(623,`
ou definir a mensagem no atributo `),jc(624,`code`),lO(625,`_messages`),wg(),lO(626,` na resposta da API conforme definido
em `),jc(627,`a`,36),lO(628,`Guia de implementação de APIs`),wg()()()(),jc(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),lO(633,` beforeSave`),nu(634,`br`),wg()()(),jc(635,`td`,18)(636,`code`,24),lO(637,`string `),wg(),jc(638,`code`,37),lO(639,` ((resource: any, id: string) => PoPageDynamicEditBeforeSave)`),wg()(),jc(640,`td`,21)(641,`em`)(642,`strong`),lO(643,`(opcional)`),wg()(),jc(644,`p`),lO(645,`Rota ou método que será chamado antes de salvar um recurso (save).`),wg(),jc(646,`p`),lO(647,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),jc(648,`code`),lO(649,`PoPageDynamicEditBeforeSave`),wg(),lO(650,`.`),wg(),jc(651,`blockquote`)(652,`p`),lO(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),jc(654,`code`),lO(655,`POST {beforeSave}/{key}`),wg(),lO(656,`.`),wg()(),jc(657,`p`),lO(658,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),jc(659,`strong`),lO(660,`beforeSave`),wg(),lO(661,`
ou definir a mensagem no atributo `),jc(662,`code`),lO(663,`_messages`),wg(),lO(664,` na resposta da API conforme definido
em `),jc(665,`a`,36),lO(666,`Guia de implementação de APIs`),wg()()()(),jc(667,`tr`,14)(668,`td`,15)(669,`div`,16)(670,`span`,17),lO(671,` beforeSaveNew`),nu(672,`br`),wg()()(),jc(673,`td`,18)(674,`code`,24),lO(675,`string `),wg(),jc(676,`code`,38),lO(677,` ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)`),wg()(),jc(678,`td`,21)(679,`em`)(680,`strong`),lO(681,`(opcional)`),wg()(),jc(682,`p`),lO(683,`Rota ou método que será chamado antes de executar o evento salvar e abrir novo registro (saveNew).`),wg(),jc(684,`p`),lO(685,`Tanto o método como a API receberão o recurso e devem retornar um objeto com a definição de `),jc(686,`code`),lO(687,`PoPageDynamicEditBeforeSaveNew`),wg(),lO(688,`.`),wg(),jc(689,`blockquote`)(690,`p`),lO(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),jc(692,`code`),lO(693,`POST {beforeSave}/{key}`),wg(),lO(694,`.`),wg()(),jc(695,`p`),lO(696,`Caso o desenvolvedor queira que apareça alguma mensagem nessa ação ele pode criá-la na função chamada pela `),jc(697,`strong`),lO(698,`beforeSaveNew`),wg(),lO(699,`
ou definir a mensagem no atributo `),jc(700,`code`),lO(701,`_messages`),wg(),lO(702,` na resposta da API conforme definido
em `),jc(703,`a`,36),lO(704,`Guia de implementação de APIs`),wg()()()(),jc(705,`tr`,14)(706,`td`,15)(707,`div`,16)(708,`span`,17),lO(709,` cancel`),nu(710,`br`),wg()()(),jc(711,`td`,18)(712,`code`,24),lO(713,`string `),wg(),jc(714,`code`,22),lO(715,` boolean `),wg(),jc(716,`code`,39),lO(717,` Function`),wg()(),jc(718,`td`,21)(719,`em`)(720,`strong`),lO(721,`(opcional)`),wg()(),jc(722,`p`),lO(723,`Rota de redirecionamento para ação de cancelar, caso não seja especificada será usado o comando `),jc(724,`code`),lO(725,`navigator.back()`),wg(),lO(726,`.`),wg(),jc(727,`blockquote`)(728,`p`),lO(729,`Se passada uma função, é responsabilidade do desenvolvedor implementar a navegação ou outro comportamento desejado.`),wg()(),jc(730,`blockquote`)(731,`p`),lO(732,`Caso queira esconder a ação deve ser passado o valor `),jc(733,`code`),lO(734,`false`),wg(),lO(735,`;`),wg()(),jc(736,`pre`)(737,`code`),lO(738,`actions = {
  cancel: '/'
};
`),wg()()()(),jc(739,`tr`,14)(740,`td`,15)(741,`div`,16)(742,`span`,17),lO(743,` save`),nu(744,`br`),wg()()(),jc(745,`td`,18)(746,`code`,24),lO(747,`string `),wg(),jc(748,`code`,40),lO(749,` ((resource: any, id: string) => void)`),wg()(),jc(750,`td`,21)(751,`em`)(752,`strong`),lO(753,`(opcional)`),wg()(),jc(754,`p`),lO(755,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),wg(),jc(756,`p`),lO(757,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),wg(),jc(758,`blockquote`)(759,`p`),lO(760,`A rota pode conter um parâmetro chamando id.`),wg()(),jc(761,`pre`)(762,`code`),lO(763,`actions = {
  save: 'detail/:id'
};
`),wg()(),jc(764,`p`),lO(765,`Se for passado um método:`),wg(),jc(766,`ul`)(767,`li`),lO(768,`receberá como parâmetro na chamada do método o recurso, por exemplo: `),jc(769,`code`),lO(770,`{ email: 'example@email.com' }`),wg(),lO(771,`.`),wg(),jc(772,`li`),lO(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),wg()()()(),jc(774,`tr`,14)(775,`td`,15)(776,`div`,16)(777,`span`,17),lO(778,` saveNew`),nu(779,`br`),wg()()(),jc(780,`td`,18)(781,`code`,24),lO(782,`string `),wg(),jc(783,`code`,41),lO(784,` ((resource: any, id?: string) => void)`),wg()(),jc(785,`td`,21)(786,`em`)(787,`strong`),lO(788,`(opcional)`),wg()(),jc(789,`p`),lO(790,`Rota de redirecionamento ou método para executar o envio dos dados ao servidor.`),wg(),jc(791,`p`),lO(792,`A rota de redirecionamento será executada após a confirmação de gravação do registro.`),wg(),jc(793,`blockquote`)(794,`p`),lO(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),wg()(),jc(796,`pre`)(797,`code`),lO(798,`actions = {
  saveNew: 'new'
};
`),wg()(),jc(799,`p`),lO(800,`A rota pode conter um parâmetro id.`),wg(),jc(801,`pre`)(802,`code`),lO(803,`actions = {
  saveNew: 'edit/:id'
};
`),wg()(),jc(804,`p`),lO(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),wg()()()(),jc(806,`h4`,34)(807,`code`,5),lO(808,`PoPageDynamicEditBeforeCancel`),wg()(),jc(809,`div`,2)(810,`p`),lO(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),jc(812,`code`),lO(813,`beforeCancel`),wg(),lO(814,`.`),wg()(),jc(815,`h4`,10),lO(816,`Propriedades`),wg(),jc(817,`table`,11)(818,`tr`,12)(819,`th`,13),lO(820,`Nome`),wg(),jc(821,`th`,13),lO(822,`Tipo`),wg(),jc(823,`th`,13),lO(824,`Descrição`),wg()(),jc(825,`tr`,14)(826,`td`,15)(827,`div`,16)(828,`span`,17),lO(829,` allowAction`),nu(830,`br`),wg()()(),jc(831,`td`,18)(832,`code`,22),lO(833,`boolean`),wg()(),jc(834,`td`,21)(835,`em`)(836,`strong`),lO(837,`(opcional)`),wg()(),jc(838,`p`),lO(839,`Define se deve ou não executar a ação de cancelamento de edição da página (cancel)`),wg()()(),jc(840,`tr`,14)(841,`td`,15)(842,`div`,16)(843,`span`,17),lO(844,` newUrl`),nu(845,`br`),wg()()(),jc(846,`td`,18)(847,`code`,24),lO(848,`string`),wg()(),jc(849,`td`,21)(850,`em`)(851,`strong`),lO(852,`(opcional)`),wg()(),jc(853,`p`),lO(854,`Nova rota para navegação que substituirá a definida anteriormente em `),jc(855,`code`),lO(856,`cancel`),wg(),lO(857,`.`),wg()()()(),jc(858,`h4`,34)(859,`code`,5),lO(860,`PoPageDynamicEditBeforeSaveNew`),wg()(),jc(861,`div`,2)(862,`p`),lO(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),jc(864,`code`),lO(865,`beforeSaveNew`),wg(),lO(866,`.`),wg()(),jc(867,`h4`,10),lO(868,`Propriedades`),wg(),jc(869,`table`,11)(870,`tr`,12)(871,`th`,13),lO(872,`Nome`),wg(),jc(873,`th`,13),lO(874,`Tipo`),wg(),jc(875,`th`,13),lO(876,`Descrição`),wg()(),jc(877,`tr`,14)(878,`td`,15)(879,`div`,16)(880,`span`,17),lO(881,` allowAction`),nu(882,`br`),wg()()(),jc(883,`td`,18)(884,`code`,22),lO(885,`boolean`),wg()(),jc(886,`td`,21)(887,`em`)(888,`strong`),lO(889,`(opcional)`),wg()(),jc(890,`p`),lO(891,`Define se deve ou não executar a ação salvar e novo (saveNew).`),wg()()(),jc(892,`tr`,14)(893,`td`,15)(894,`div`,16)(895,`span`,17),lO(896,` newUrl`),nu(897,`br`),wg()()(),jc(898,`td`,18)(899,`code`,24),lO(900,`string`),wg()(),jc(901,`td`,21)(902,`em`)(903,`strong`),lO(904,`(opcional)`),wg()(),jc(905,`p`),lO(906,`Nova rota de redirecionamento, que substituirá a rota definida anteriormente em `),jc(907,`code`),lO(908,`saveNew`),wg(),lO(909,`.`),wg()()(),jc(910,`tr`,14)(911,`td`,15)(912,`div`,16)(913,`span`,17),lO(914,` resource`),nu(915,`br`),wg()()(),jc(916,`td`,18)(917,`code`,42),lO(918,`any`),wg()(),jc(919,`td`,21)(920,`em`)(921,`strong`),lO(922,`(opcional)`),wg()(),jc(923,`p`),lO(924,`Recurso atualizado.`),wg(),jc(925,`p`),lO(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),jc(927,`code`),lO(928,`key: true`),wg(),lO(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),wg(),jc(930,`ul`)(931,`li`)(932,`p`),lO(933,`recurso anterior com a propriedade id foi que definida como `),jc(934,`em`),lO(935,`key`),wg(),lO(936,`:`),wg(),jc(937,`pre`)(938,`code`),lO(939,`{ id: 1, name: 'Ane' }
`),wg()()(),jc(940,`li`)(941,`p`),lO(942,`recurso retornado no `),jc(943,`code`),lO(944,`beforeSaveNew`),wg(),lO(945,`:`),wg(),jc(946,`pre`)(947,`code`),lO(948,`{ id: 50, age: 23 }
`),wg()()(),jc(949,`li`)(950,`p`),lO(951,`Mesclagem do recurso:`),wg(),jc(952,`pre`)(953,`code`),lO(954,`{ id: 1, name: 'Ane', age: 23 }
`),wg()()()(),jc(955,`blockquote`)(956,`p`),lO(957,`Caso `),jc(958,`code`),lO(959,`allowAction`),wg(),lO(960,` seja `),jc(961,`code`),lO(962,`false`),wg(),lO(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),wg()()()()(),jc(964,`h4`,34)(965,`code`,5),lO(966,`PoPageDynamicEditBeforeSave`),wg()(),jc(967,`div`,2)(968,`p`),lO(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),jc(970,`code`),lO(971,`beforeSave`),wg(),lO(972,`.`),wg()(),jc(973,`h4`,10),lO(974,`Propriedades`),wg(),jc(975,`table`,11)(976,`tr`,12)(977,`th`,13),lO(978,`Nome`),wg(),jc(979,`th`,13),lO(980,`Tipo`),wg(),jc(981,`th`,13),lO(982,`Descrição`),wg()(),jc(983,`tr`,14)(984,`td`,15)(985,`div`,16)(986,`span`,17),lO(987,` allowAction`),nu(988,`br`),wg()()(),jc(989,`td`,18)(990,`code`,22),lO(991,`boolean`),wg()(),jc(992,`td`,21)(993,`em`)(994,`strong`),lO(995,`(opcional)`),wg()(),jc(996,`p`),lO(997,`Define se deve ou não executar a ação salvar (save).`),wg()()(),jc(998,`tr`,14)(999,`td`,15)(1e3,`div`,16)(1001,`span`,17),lO(1002,` newUrl`),nu(1003,`br`),wg()()(),jc(1004,`td`,18)(1005,`code`,24),lO(1006,`string`),wg()(),jc(1007,`td`,21)(1008,`em`)(1009,`strong`),lO(1010,`(opcional)`),wg()(),jc(1011,`p`),lO(1012,`Nova rota para salvar o recurso, que substituirá a rota definida anteriormente em `),jc(1013,`code`),lO(1014,`save`),wg(),lO(1015,`.`),wg()()(),jc(1016,`tr`,14)(1017,`td`,15)(1018,`div`,16)(1019,`span`,17),lO(1020,` resource`),nu(1021,`br`),wg()()(),jc(1022,`td`,18)(1023,`code`,42),lO(1024,`any`),wg()(),jc(1025,`td`,21)(1026,`em`)(1027,`strong`),lO(1028,`(opcional)`),wg()(),jc(1029,`p`),lO(1030,`Recurso atualizado.`),wg(),jc(1031,`p`),lO(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),wg(),jc(1033,`ul`)(1034,`li`)(1035,`p`),lO(1036,`recurso anterior:`),wg(),jc(1037,`pre`)(1038,`code`),lO(1039,`{ name: 'Ane' }
`),wg()()(),jc(1040,`li`)(1041,`p`),lO(1042,`recurso retornado no `),jc(1043,`code`),lO(1044,`beforeSave`),wg(),lO(1045,`:`),wg(),jc(1046,`pre`)(1047,`code`),lO(1048,`{ age: 23 }
`),wg()()(),jc(1049,`li`)(1050,`p`),lO(1051,`Mesclagem do recurso:`),wg(),jc(1052,`pre`)(1053,`code`),lO(1054,`{ name: 'Ane', age: 23 }
`),wg()()()(),jc(1055,`blockquote`)(1056,`p`),lO(1057,`Caso `),jc(1058,`code`),lO(1059,`allowAction`),wg(),lO(1060,` seja `),jc(1061,`code`),lO(1062,`false`),wg(),lO(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),wg()()()()(),jc(1064,`h4`,34)(1065,`code`,5),lO(1066,`PoPageDynamicEditField`),wg()(),jc(1067,`div`,2)(1068,`p`),lO(1069,`Interface dos fields usados para compor o template `),jc(1070,`code`),lO(1071,`po-page-dynamic-edit`),wg(),lO(1072,`.
Herda as defini\xE7\xF5es da interface
`),jc(1073,`a`,43),lO(1074,`PoDynamicFormField`),wg(),lO(1075,`.`),wg()(),jc(1076,`h4`,10),lO(1077,`Propriedades`),wg(),jc(1078,`table`,11)(1079,`tr`,12)(1080,`th`,13),lO(1081,`Nome`),wg(),jc(1082,`th`,13),lO(1083,`Tipo`),wg(),jc(1084,`th`,13),lO(1085,`Descrição`),wg()(),jc(1086,`tr`,14)(1087,`td`,15)(1088,`div`,16)(1089,`span`,17),lO(1090,` duplicate`),nu(1091,`br`),wg()()(),jc(1092,`td`,18)(1093,`code`,22),lO(1094,`boolean`),wg()(),jc(1095,`td`,21)(1096,`em`)(1097,`strong`),lO(1098,`(opcional)`),wg()(),jc(1099,`p`),lO(1100,`Indica se o campo será duplicado caso seja executada a ação de duplicação.`),wg()()()(),jc(1101,`h4`,34)(1102,`code`,5),lO(1103,`PoPageDynamicEditLiterals`),wg()(),jc(1104,`div`,2)(1105,`p`),lO(1106,`Interface para definição das literais usadas no `),jc(1107,`code`),lO(1108,`po-page-dynamic-edit`),wg(),lO(1109,`.`),wg()(),jc(1110,`h4`,10),lO(1111,`Propriedades`),wg(),jc(1112,`table`,11)(1113,`tr`,12)(1114,`th`,13),lO(1115,`Nome`),wg(),jc(1116,`th`,13),lO(1117,`Tipo`),wg(),jc(1118,`th`,13),lO(1119,`Descrição`),wg()(),jc(1120,`tr`,14)(1121,`td`,15)(1122,`div`,16)(1123,`span`,17),lO(1124,` cancelConfirmMessage`),nu(1125,`br`),wg()()(),jc(1126,`td`,18)(1127,`code`,24),lO(1128,`string`),wg()(),jc(1129,`td`,21)(1130,`em`)(1131,`strong`),lO(1132,`(opcional)`),wg()(),jc(1133,`p`),lO(1134,`Texto exibido na mensagem de cancelamento da inclusão/edição.`),wg()()(),jc(1135,`tr`,14)(1136,`td`,15)(1137,`div`,16)(1138,`span`,17),lO(1139,` detailActionNew`),nu(1140,`br`),wg()()(),jc(1141,`td`,18)(1142,`code`,24),lO(1143,`string`),wg()(),jc(1144,`td`,21)(1145,`em`)(1146,`strong`),lO(1147,`(opcional)`),wg()(),jc(1148,`p`),lO(1149,`Rótulo exibido no botão `),jc(1150,`code`),lO(1151,`Novo`),wg(),lO(1152,`.`),wg()()(),jc(1153,`tr`,14)(1154,`td`,15)(1155,`div`,16)(1156,`span`,17),lO(1157,` pageActionCancel`),nu(1158,`br`),wg()()(),jc(1159,`td`,18)(1160,`code`,24),lO(1161,`string`),wg()(),jc(1162,`td`,21)(1163,`em`)(1164,`strong`),lO(1165,`(opcional)`),wg()(),jc(1166,`p`),lO(1167,`Rótulo exibido no botão `),jc(1168,`code`),lO(1169,`Cancelar`),wg(),lO(1170,`.`),wg()()(),jc(1171,`tr`,14)(1172,`td`,15)(1173,`div`,16)(1174,`span`,17),lO(1175,` pageActionSave`),nu(1176,`br`),wg()()(),jc(1177,`td`,18)(1178,`code`,24),lO(1179,`string`),wg()(),jc(1180,`td`,21)(1181,`em`)(1182,`strong`),lO(1183,`(opcional)`),wg()(),jc(1184,`p`),lO(1185,`Rótulo exibido no botão `),jc(1186,`code`),lO(1187,`Salvar`),wg(),lO(1188,`.`),wg()()(),jc(1189,`tr`,14)(1190,`td`,15)(1191,`div`,16)(1192,`span`,17),lO(1193,` pageActionSaveNew`),nu(1194,`br`),wg()()(),jc(1195,`td`,18)(1196,`code`,24),lO(1197,`string`),wg()(),jc(1198,`td`,21)(1199,`em`)(1200,`strong`),lO(1201,`(opcional)`),wg()(),jc(1202,`p`),lO(1203,`Rótulo exibido no botão `),jc(1204,`code`),lO(1205,`Salvar e novo`),wg(),lO(1206,`.`),wg()()(),jc(1207,`tr`,14)(1208,`td`,15)(1209,`div`,16)(1210,`span`,17),lO(1211,` registerNotFound`),nu(1212,`br`),wg()()(),jc(1213,`td`,18)(1214,`code`,24),lO(1215,`string`),wg()(),jc(1216,`td`,21)(1217,`em`)(1218,`strong`),lO(1219,`(opcional)`),wg()(),jc(1220,`p`),lO(1221,`Texto exibido para resgistro não encontrado.`),wg()()(),jc(1222,`tr`,14)(1223,`td`,15)(1224,`div`,16)(1225,`span`,17),lO(1226,` saveNotificationError`),nu(1227,`br`),wg()()(),jc(1228,`td`,18)(1229,`code`,24),lO(1230,`string`),wg()(),jc(1231,`td`,21)(1232,`em`)(1233,`strong`),lO(1234,`(opcional)`),wg()(),jc(1235,`p`),lO(1236,`Texto exibido para ocorrência de alguma inconsistência ao salvar.`),wg()()(),jc(1237,`tr`,14)(1238,`td`,15)(1239,`div`,16)(1240,`span`,17),lO(1241,` saveNotificationSuccessSave`),nu(1242,`br`),wg()()(),jc(1243,`td`,18)(1244,`code`,24),lO(1245,`string`),wg()(),jc(1246,`td`,21)(1247,`em`)(1248,`strong`),lO(1249,`(opcional)`),wg()(),jc(1250,`p`),lO(1251,`Texto exibido para recurso salvo com sucesso.`),wg()()(),jc(1252,`tr`,14)(1253,`td`,15)(1254,`div`,16)(1255,`span`,17),lO(1256,` saveNotificationSuccessUpdate`),nu(1257,`br`),wg()()(),jc(1258,`td`,18)(1259,`code`,24),lO(1260,`string`),wg()(),jc(1261,`td`,21)(1262,`em`)(1263,`strong`),lO(1264,`(opcional)`),wg()(),jc(1265,`p`),lO(1266,`Texto exibido para recurso atualizado com sucesso.`),wg()()(),jc(1267,`tr`,14)(1268,`td`,15)(1269,`div`,16)(1270,`span`,17),lO(1271,` saveNotificationWarning`),nu(1272,`br`),wg()()(),jc(1273,`td`,18)(1274,`code`,24),lO(1275,`string`),wg()(),jc(1276,`td`,21)(1277,`em`)(1278,`strong`),lO(1279,`(opcional)`),wg()(),jc(1280,`p`),lO(1281,`Texto exibido para adivertência de formulário preenchido de forma incorreta.`),wg()()()(),jc(1282,`h4`,34)(1283,`code`,5),lO(1284,`PoPageDynamicEditMetadata`),wg()(),jc(1285,`div`,2)(1286,`p`),lO(1287,`Interface para as propriedades de uma página dinâmica. `),nu(1288,`a`,44),wg()(),jc(1289,`h4`,10),lO(1290,`Propriedades`),wg(),jc(1291,`table`,11)(1292,`tr`,12)(1293,`th`,13),lO(1294,`Nome`),wg(),jc(1295,`th`,13),lO(1296,`Tipo`),wg(),jc(1297,`th`,13),lO(1298,`Descrição`),wg()(),jc(1299,`tr`,14)(1300,`td`,15)(1301,`div`,16)(1302,`span`,17),lO(1303,` actions`),nu(1304,`br`),wg()()(),jc(1305,`td`,18)(1306,`code`,19),lO(1307,`PoPageDynamicEditActions`),wg()(),jc(1308,`td`,21)(1309,`em`)(1310,`strong`),lO(1311,`(opcional)`),wg()(),jc(1312,`p`),lO(1313,`Ações que o usuário poderá executar na página através de botões.`),wg()()(),jc(1314,`tr`,14)(1315,`td`,15)(1316,`div`,16)(1317,`span`,17),lO(1318,` autoRouter`),nu(1319,`br`),wg()()(),jc(1320,`td`,18)(1321,`code`,22),lO(1322,`boolean`),wg()(),jc(1323,`td`,21)(1324,`em`)(1325,`strong`),lO(1326,`(opcional)`),wg()(),jc(1327,`p`),lO(1328,`Cria automaticamente as rotas de edição (novo/duplicate) e detalhes caso sejam definidas ações na propriedade `),jc(1329,`code`),lO(1330,`p-actions`),wg()(),jc(1331,`p`),lO(1332,`As rotas criadas serão baseadas na propriedade `),jc(1333,`code`),lO(1334,`p-actions`),wg(),lO(1335,`.`),wg(),jc(1336,`blockquote`)(1337,`p`),lO(1338,`Para o correto funcionamento não pode haver nenhuma rota coringa (`),jc(1339,`code`),lO(1340,`**`),wg(),lO(1341,`) especificada.`),wg()()()(),jc(1342,`tr`,14)(1343,`td`,15)(1344,`div`,16)(1345,`span`,17),lO(1346,` breadcrumb`),nu(1347,`br`),wg()()(),jc(1348,`td`,18)(1349,`code`,23),lO(1350,`PoBreadcrumb`),wg()(),jc(1351,`td`,21)(1352,`em`)(1353,`strong`),lO(1354,`(opcional)`),wg()(),jc(1355,`p`),lO(1356,`Objeto com propriedades do breadcrumb.`),wg()()(),jc(1357,`tr`,14)(1358,`td`,15)(1359,`div`,16)(1360,`span`,17),lO(1361,` fields`),nu(1362,`br`),wg()()(),jc(1363,`td`,18)(1364,`code`,26),lO(1365,`Array<PoPageDynamicEditField>`),wg()(),jc(1366,`td`,21)(1367,`em`)(1368,`strong`),lO(1369,`(opcional)`),wg()(),jc(1370,`p`),lO(1371,`Lista dos campos usados.`),wg()()(),jc(1372,`tr`,14)(1373,`td`,15)(1374,`div`,16)(1375,`span`,17),lO(1376,` title`),nu(1377,`br`),wg()()(),jc(1378,`td`,18)(1379,`code`,24),lO(1380,`string`),wg()(),jc(1381,`td`,21)(1382,`em`)(1383,`strong`),lO(1384,`(opcional)`),wg()(),jc(1385,`p`),lO(1386,`Título da página.`),wg()()(),jc(1387,`tr`,14)(1388,`td`,15)(1389,`div`,16)(1390,`span`,17),lO(1391,` version`),nu(1392,`br`),wg()()(),jc(1393,`td`,18)(1394,`code`,45),lO(1395,`number`),wg()(),jc(1396,`td`,21)(1397,`p`),lO(1398,`Versão do metadado devolvido pelo backend.`),wg()()()(),jc(1399,`h4`,34)(1400,`code`,5),lO(1401,`PoPageDynamicEditOptions`),wg()(),jc(1402,`div`,2)(1403,`p`),lO(1404,`Interface para as propriedades de uma página dinâmica.`),wg()(),jc(1405,`h4`,10),lO(1406,`Propriedades`),wg(),jc(1407,`table`,11)(1408,`tr`,12)(1409,`th`,13),lO(1410,`Nome`),wg(),jc(1411,`th`,13),lO(1412,`Tipo`),wg(),jc(1413,`th`,13),lO(1414,`Descrição`),wg()(),jc(1415,`tr`,14)(1416,`td`,15)(1417,`div`,16)(1418,`span`,17),lO(1419,` actions`),nu(1420,`br`),wg()()(),jc(1421,`td`,18)(1422,`code`,19),lO(1423,`PoPageDynamicEditActions`),wg()(),jc(1424,`td`,21)(1425,`em`)(1426,`strong`),lO(1427,`(opcional)`),wg()(),jc(1428,`p`),lO(1429,`Ações que o usuário poderá executar na página através de botões.`),wg()()(),jc(1430,`tr`,14)(1431,`td`,15)(1432,`div`,16)(1433,`span`,17),lO(1434,` breadcrumb`),nu(1435,`br`),wg()()(),jc(1436,`td`,18)(1437,`code`,23),lO(1438,`PoBreadcrumb`),wg()(),jc(1439,`td`,21)(1440,`em`)(1441,`strong`),lO(1442,`(opcional)`),wg()(),jc(1443,`p`),lO(1444,`Objeto com propriedades do breadcrumb.`),wg()()(),jc(1445,`tr`,14)(1446,`td`,15)(1447,`div`,16)(1448,`span`,17),lO(1449,` fields`),nu(1450,`br`),wg()()(),jc(1451,`td`,18)(1452,`code`,26),lO(1453,`Array<PoPageDynamicEditField>`),wg()(),jc(1454,`td`,21)(1455,`em`)(1456,`strong`),lO(1457,`(opcional)`),wg()(),jc(1458,`p`),lO(1459,`Lista dos campos usados.`),wg()()(),jc(1460,`tr`,14)(1461,`td`,15)(1462,`div`,16)(1463,`span`,17),lO(1464,` title`),nu(1465,`br`),wg()()(),jc(1466,`td`,18)(1467,`code`,24),lO(1468,`string`),wg()(),jc(1469,`td`,21)(1470,`em`)(1471,`strong`),lO(1472,`(opcional)`),wg()(),jc(1473,`p`),lO(1474,`Título da página.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function me(a,pe){if(a&1){let d=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(d);let r=Fx();return __(r.changeTab(`web`))}),nu(1,`sample-po-page-dynamic-edit-basic-view`)(2,`sample-po-page-dynamic-edit-user-view`),wg()}if(a&2){let d=Fx();UE(`p-active`,d.activeTab===`web`)}}var le=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,o){this.route=d,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let o=d.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Dynamic Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,r){o&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,me,3,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(4,`sample-po-page-dynamic-edit-doc`),wg()()()),o&2&&(UE(`p-actions`,r.actions),rg(2),Dx(r.hidePoWebSample?-1:2),rg(),UE(`p-active`,r.activeTab===`doc`))},dependencies:[Tze,Qae,ere,V,K,Y],encapsulation:2,changeDetection:1})}return a})()}];var Q=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[I1.forChild(le),I1]})}return a})();var ke=(()=>{class a{static ɵfac=function(o){return new(o||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[M,Q]})}return a})();export{ke as DocPoPageDynamicEditModule};
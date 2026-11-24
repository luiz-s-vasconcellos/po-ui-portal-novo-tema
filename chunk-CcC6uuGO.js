import{m as P,p as M$1}from"./main-5NWS7DIP.js";import{$i as ar,Fn as tre,Hr as Jn,Kr as Kg,Pt as are,Qr as Mk,Sa as jO,U as Mze,Va as p,Vr as Jc,Yr as LO,Zi as _u,_ as Dze,aa as de,ar as Ab,co as wg,eo as tk,jr as GV,or as An,pa as ge,zr as I$1}from"./chunk-DdK63a0t.js";var G=(()=>{class o{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:`id`,label:`Código`,align:`right`,readonly:!0,freeze:!0,width:120},{property:`name`,label:`Nome`,width:`200px`,required:!0},{property:`occupation`,label:`Cargo`,width:150},{property:`email`,label:`E-mail`,width:100,required:!0},{property:`status`,label:`Status`,align:`center`,width:80},{property:`lastActivity`,label:`Última atividade`,align:`center`,width:140}];data=[{id:629131,name:`Jhonatas Silvano`,occupation:`Developer`,email:`jhonatas.silvano@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:78492341,name:`Rafael Gonçalvez`,occupation:`Engineer`,email:`rafael.goncalvez@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-10`},{id:986434,name:`Nicoli Pereira`,occupation:`Developer`,email:`nicoli.pereira@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:4235652,name:`Mauricio João Mendez`,occupation:`Developer`,email:`mauricio.joao@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-23`},{id:629131,name:`Leandro Oliveira`,occupation:`Engineer`,email:`leandro.oliveira@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-30`}];onBeforeSave(a,n){return a.occupation!==`Engineer`}onAfterSave(a){}onBeforeRemove(a){return!0}onAfterRemove(a){}onBeforeInsert(a){return!0}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-grid-basic`]],standalone:!1,decls:1,vars:3,consts:[[3,`p-row-actions`,`p-data`,`p-columns`]],template:function(n,d){n&1&&_u(0,`po-grid`,0),n&2&&Ab(`p-row-actions`,d.rowActions)(`p-data`,d.data)(`p-columns`,d.columns)},dependencies:[Dze],encapsulation:2,changeDetection:1})}return o})();var B=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-grid-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-grid-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-grid-basic/sample-po-grid-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-grid-basic/sample-po-grid-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,d){n&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Grid Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-grid-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-grid-basic/sample-po-grid-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-grid-basic/sample-po-grid-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-grid-basic',
  templateUrl: './sample-po-grid-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoGridBasicComponent {
  rowActions = {
    beforeSave: this.onBeforeSave.bind(this),
    afterSave: this.onAfterSave.bind(this),
    beforeRemove: this.onBeforeRemove.bind(this),
    afterRemove: this.onAfterRemove.bind(this),
    beforeInsert: this.onBeforeInsert.bind(this)
  };

  columns = [
    { property: 'id', label: 'C\xF3digo', align: 'right', readonly: true, freeze: true, width: 120 },
    { property: 'name', label: 'Nome', width: '200px', required: true },
    { property: 'occupation', label: 'Cargo', width: 150 },
    { property: 'email', label: 'E-mail', width: 100, required: true },
    { property: 'status', label: 'Status', align: 'center', width: 80 },
    { property: 'lastActivity', label: '\xDAltima atividade', align: 'center', width: 140 }
  ];

  data = [
    {
      id: 629131,
      name: 'Jhonatas Silvano',
      occupation: 'Developer',
      email: 'jhonatas.silvano@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-12'
    },
    {
      id: 78492341,
      name: 'Rafael Gon\xE7alvez',
      occupation: 'Engineer',
      email: 'rafael.goncalvez@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-10'
    },
    {
      id: 986434,
      name: 'Nicoli Pereira',
      occupation: 'Developer',
      email: 'nicoli.pereira@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-12-12'
    },
    {
      id: 4235652,
      name: 'Mauricio Jo\xE3o Mendez',
      occupation: 'Developer',
      email: 'mauricio.joao@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-11-23'
    },
    {
      id: 629131,
      name: 'Leandro Oliveira',
      occupation: 'Engineer',
      email: 'leandro.oliveira@po-ui.com.br',
      status: 'Active',
      lastActivity: '2018-11-30'
    }
  ];

  onBeforeSave(row: any, old: any) {
    return row.occupation !== 'Engineer';
  }

  onAfterSave(row) {
    // console.log('onAfterSave(new): ', row);
  }

  onBeforeRemove(row) {
    // console.log('onBeforeRemove: ', row);

    return true;
  }

  onAfterRemove(row) {
    // console.log('onAfterRemove: ', row);
  }

  onBeforeInsert(row) {
    // console.log('onBeforeInsert: ', row);

    return true;
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,G],encapsulation:2,changeDetection:1})}return o})();var M=(()=>{class o{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-grid-doc`]],standalone:!1,decls:217,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-grid-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-data`,1,`docs-api-properties-row`],[`id`,`prop-p-row-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoGridRowActions`],[`id`,`interface-po-grid-row-actions`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-grid-row-actions-after-remove`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`id`,`interface-po-grid-row-actions-after-save`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`void`],[`id`,`interface-po-grid-row-actions-before-insert`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`boolean`],[`id`,`interface-po-grid-row-actions-before-remove`,1,`docs-api-properties-row`],[`id`,`interface-po-grid-row-actions-before-save`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(updatedRow:`,`any,`,`originalRow:`,`any)`,`=>`,`boolean`]],template:function(n,d){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoGridModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-grid.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoGridComponent`),Kg()(),Jc(12,`div`,2)(13,`blockquote`)(14,`p`),Mk(15,`Componente em desenvolvimento, podendo haver BREAKING CHANGES nas próximas versões.`),Kg()(),Jc(16,`p`),Mk(17,`Componente grid.`),Kg(),Jc(18,`p`),Mk(19,`Ações / atalhos:`),Kg(),Jc(20,`ul`)(21,`li`),Mk(22,`ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;`),Kg(),Jc(23,`li`),Mk(24,`ARROW-DOWN: Navega para celula inferior;`),Kg(),Jc(25,`li`),Mk(26,`ARROW-RIGHT: Navega para celula direita;`),Kg(),Jc(27,`li`),Mk(28,`ARROW-LEFT: Navega para celula esquerda;`),Kg(),Jc(29,`li`),Mk(30,`TAB: Navega para próxima celula;`),Kg(),Jc(31,`li`),Mk(32,`SHIFT+TAB: Navega para celula anterior;`),Kg(),Jc(33,`li`),Mk(34,`CTRL+DEL: Remove linha;`),Kg(),Jc(35,`li`),Mk(36,`DEL/BACKSPACE: Limpa celula;`),Kg(),Jc(37,`li`),Mk(38,`ENTER: Edita linha com valor atual/Confirma edição da celula;`),Kg(),Jc(39,`li`),Mk(40,`DOUBLE-CLICK: Edita linha com valor atual;`),Kg(),Jc(41,`li`),Mk(42,`ESC: Cancela edição da celula / Cancela inserção de linhas em branco;`),Kg(),Jc(43,`li`),Mk(44,`A..Z/0..9: Inicia edição com valor em branco.`),Kg()()(),Jc(45,`div`,6)(46,`h4`,7),Mk(47,`Seletor`),Kg(),Jc(48,`pre`,8),Mk(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),Kg()(),Jc(50,`h4`,9),Mk(51,`Propriedades`),Kg(),Jc(52,`table`,10)(53,`tr`,11)(54,`th`,12),Mk(55,`Nome`),Kg(),Jc(56,`th`,12),Mk(57,`Tipo`),Kg(),Jc(58,`th`,12),Mk(59,`Padrão`),Kg(),Jc(60,`th`,12),Mk(61,`Descrição`),Kg()(),Jc(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),Mk(66,` p-columns`),_u(67,`br`),Kg()()(),Jc(68,`td`,17)(69,`code`,18),Mk(70,`Array<any>`),Kg()(),Jc(71,`td`,19),Mk(72,`-`),Kg(),Jc(73,`td`,20)(74,`p`),Mk(75,`Colunas exibidas no grid.`),Kg()()(),Jc(76,`tr`,21)(77,`td`,14)(78,`div`,15)(79,`span`,16),Mk(80,` p-data`),_u(81,`br`),Kg()()(),Jc(82,`td`,17)(83,`code`,18),Mk(84,`Array<any>`),Kg()(),Jc(85,`td`,19),Mk(86,`-`),Kg(),Jc(87,`td`,20)(88,`p`),Mk(89,`Lista com os dados que serão exibidos no grid.`),Kg()()(),Jc(90,`tr`,22)(91,`td`,14)(92,`div`,15)(93,`span`,16),Mk(94,` p-row-actions`),_u(95,`br`),Kg()()(),Jc(96,`td`,17)(97,`code`,23),Mk(98,`PoGridRowActions`),Kg()(),Jc(99,`td`,19),Mk(100,`-`),Kg(),Jc(101,`td`,20)(102,`p`),Mk(103,`Ações disparadas quando uma linha do grid é manipulada.`),Kg()()()(),Jc(104,`h3`),Mk(105,`Interfaces`),Kg(),Jc(106,`h4`,24)(107,`code`,5),Mk(108,`PoGridRowActions`),Kg()(),Jc(109,`div`,2)(110,`p`),Mk(111,`Ações executadas durante a manipulação das linhas do grid.`),Kg()(),Jc(112,`h4`,9),Mk(113,`Propriedades`),Kg(),Jc(114,`table`,10)(115,`tr`,11)(116,`th`,12),Mk(117,`Nome`),Kg(),Jc(118,`th`,12),Mk(119,`Tipo`),Kg(),Jc(120,`th`,12),Mk(121,`Descrição`),Kg()(),Jc(122,`tr`,25)(123,`td`,14)(124,`div`,15)(125,`span`,16),Mk(126,` afterRemove`),_u(127,`br`),Kg()()(),Jc(128,`td`,17)(129,`code`,26),Mk(130,`() => void`),Kg()(),Jc(131,`td`,20)(132,`em`)(133,`strong`),Mk(134,`(opcional)`),Kg()(),Jc(135,`p`),Mk(136,`Método executado após uma linha do grid ser removida.`),Kg()()(),Jc(137,`tr`,27)(138,`td`,14)(139,`div`,15)(140,`span`,16),Mk(141,` afterSave`),_u(142,`br`),Kg()()(),Jc(143,`td`,17)(144,`code`,28),Mk(145,`(row: any) => void`),Kg()(),Jc(146,`td`,20)(147,`em`)(148,`strong`),Mk(149,`(opcional)`),Kg()(),Jc(150,`p`),Mk(151,`Método executado após uma linha do grid ser salva, ao ser executado, o método irá receber um objeto com os dados atualizados.`),Kg()()(),Jc(152,`tr`,29)(153,`td`,14)(154,`div`,15)(155,`span`,16),Mk(156,` beforeInsert`),_u(157,`br`),Kg()()(),Jc(158,`td`,17)(159,`code`,30),Mk(160,`(row: any) => boolean`),Kg()(),Jc(161,`td`,20)(162,`em`)(163,`strong`),Mk(164,`(opcional)`),Kg()(),Jc(165,`p`),Mk(166,`Método executado antes de uma nova linha ser inserida no grid, se o método retornar algo diferente de `),Jc(167,`code`),Mk(168,`true`),Kg(),Mk(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),Kg(),Jc(170,`p`),Mk(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),Kg(),Jc(172,`pre`)(173,`code`),Mk(174,`rowActions: PoGridRowActions = {
  beforeInsert: this.onBeforeInsert.bind(this);
  ...
};

// Inicia a linha j\xE1 com as propriedades \`name\` e \`created\` preenchidas.
onBeforeInsert(row: any) {
  row.name = 'Fulano';
  row.created = '2018-20-12';
  ...

  return true;
}
`),Kg()()()(),Jc(175,`tr`,31)(176,`td`,14)(177,`div`,15)(178,`span`,16),Mk(179,` beforeRemove`),_u(180,`br`),Kg()()(),Jc(181,`td`,17)(182,`code`,30),Mk(183,`(row: any) => boolean`),Kg()(),Jc(184,`td`,20)(185,`em`)(186,`strong`),Mk(187,`(opcional)`),Kg()(),Jc(188,`p`),Mk(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Jc(190,`code`),Mk(191,`true`),Kg(),Mk(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),Kg()()(),Jc(193,`tr`,32)(194,`td`,14)(195,`div`,15)(196,`span`,16),Mk(197,` beforeSave`),_u(198,`br`),Kg()()(),Jc(199,`td`,17)(200,`code`,33),Mk(201,`(updatedRow: any, originalRow: any) => boolean`),Kg()(),Jc(202,`td`,20)(203,`em`)(204,`strong`),Mk(205,`(opcional)`),Kg()(),Jc(206,`p`),Mk(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Jc(208,`code`),Mk(209,`true`),Kg(),Mk(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),Kg(),Jc(211,`blockquote`)(212,`p`),Mk(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),Kg()(),Jc(214,`pre`)(215,`code`),Mk(216,`rowActions: PoGridRowActions = {
  beforeSave: this.onBeforeSave.bind(this);
  ...
};

onBeforeSave(updatedRow: any, originalRow: any) {
  // Verifica se a propriedade \`name\` foi alterada.
  if (updatedRow.name !== originalRow.name) {
    return false;
  }

  // Verifica se \xE9 menor de idade
  if (updatedRow.age < 18) {
    return false;
  }
  ...

  updatedRow.updated = '2018-20-12';

  return true;
}
`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function z(o,k){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-grid-basic-view`),Kg()),o&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var L=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;title=`Grid`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Grid · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(n,d){n&1&&(Jc(0,`po-page-default`,0),LO(1,z,2,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-grid-doc`),Kg()()),n&2&&(Ab(`p-title`,d.title)(`p-actions`,d.actions),wg(),jO(d.hidePoWebSample?-1:1),wg(),Ab(`hidden`,d.activeTab!==`doc`))},dependencies:[Mze,B,M],encapsulation:2,changeDetection:1})}return o})()}];var I=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(L),GV]})}return o})();var re=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M$1,I]})}return o})();export{re as DocPoGridModule};
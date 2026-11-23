import{m as P,p as M$1}from"./main-RBGX2DMP.js";import{Ar as I$1,Ha as p,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Qi as ar,W as Mze,_ as Dze,ao as vu,ar as An,ca as ek,da as ge,gi as Rb,li as Qc,ra as de,so as wg,vi as Sk,wr as GV,xr as FO}from"./chunk-BQDTQO8h.js";var G=(()=>{class o{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:`id`,label:`Código`,align:`right`,readonly:!0,freeze:!0,width:120},{property:`name`,label:`Nome`,width:`200px`,required:!0},{property:`occupation`,label:`Cargo`,width:150},{property:`email`,label:`E-mail`,width:100,required:!0},{property:`status`,label:`Status`,align:`center`,width:80},{property:`lastActivity`,label:`Última atividade`,align:`center`,width:140}];data=[{id:629131,name:`Jhonatas Silvano`,occupation:`Developer`,email:`jhonatas.silvano@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:78492341,name:`Rafael Gonçalvez`,occupation:`Engineer`,email:`rafael.goncalvez@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-10`},{id:986434,name:`Nicoli Pereira`,occupation:`Developer`,email:`nicoli.pereira@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:4235652,name:`Mauricio João Mendez`,occupation:`Developer`,email:`mauricio.joao@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-23`},{id:629131,name:`Leandro Oliveira`,occupation:`Engineer`,email:`leandro.oliveira@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-30`}];onBeforeSave(a,n){return a.occupation!==`Engineer`}onAfterSave(a){}onBeforeRemove(a){return!0}onAfterRemove(a){}onBeforeInsert(a){return!0}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-grid-basic`]],standalone:!1,decls:1,vars:3,consts:[[3,`p-row-actions`,`p-data`,`p-columns`]],template:function(n,d){n&1&&vu(0,`po-grid`,0),n&2&&Rb(`p-row-actions`,d.rowActions)(`p-data`,d.data)(`p-columns`,d.columns)},dependencies:[Dze],encapsulation:2,changeDetection:1})}return o})();var B=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-grid-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-grid-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-grid-basic/sample-po-grid-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-grid-basic/sample-po-grid-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(n,d){n&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Grid Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-grid-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-grid-basic/sample-po-grid-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-grid-basic/sample-po-grid-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,G],encapsulation:2,changeDetection:1})}return o})();var M=(()=>{class o{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-grid-doc`]],standalone:!1,decls:217,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-grid-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-data`,1,`docs-api-properties-row`],[`id`,`prop-p-row-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoGridRowActions`],[`id`,`interface-po-grid-row-actions`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-grid-row-actions-after-remove`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`id`,`interface-po-grid-row-actions-after-save`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`void`],[`id`,`interface-po-grid-row-actions-before-insert`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`boolean`],[`id`,`interface-po-grid-row-actions-before-remove`,1,`docs-api-properties-row`],[`id`,`interface-po-grid-row-actions-before-save`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`(updatedRow:`,`any,`,`originalRow:`,`any)`,`=>`,`boolean`]],template:function(n,d){n&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoGridModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-grid.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoGridComponent`),Kg()(),Qc(12,`div`,2)(13,`blockquote`)(14,`p`),Sk(15,`Componente em desenvolvimento, podendo haver BREAKING CHANGES nas próximas versões.`),Kg()(),Qc(16,`p`),Sk(17,`Componente grid.`),Kg(),Qc(18,`p`),Sk(19,`Ações / atalhos:`),Kg(),Qc(20,`ul`)(21,`li`),Sk(22,`ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;`),Kg(),Qc(23,`li`),Sk(24,`ARROW-DOWN: Navega para celula inferior;`),Kg(),Qc(25,`li`),Sk(26,`ARROW-RIGHT: Navega para celula direita;`),Kg(),Qc(27,`li`),Sk(28,`ARROW-LEFT: Navega para celula esquerda;`),Kg(),Qc(29,`li`),Sk(30,`TAB: Navega para próxima celula;`),Kg(),Qc(31,`li`),Sk(32,`SHIFT+TAB: Navega para celula anterior;`),Kg(),Qc(33,`li`),Sk(34,`CTRL+DEL: Remove linha;`),Kg(),Qc(35,`li`),Sk(36,`DEL/BACKSPACE: Limpa celula;`),Kg(),Qc(37,`li`),Sk(38,`ENTER: Edita linha com valor atual/Confirma edição da celula;`),Kg(),Qc(39,`li`),Sk(40,`DOUBLE-CLICK: Edita linha com valor atual;`),Kg(),Qc(41,`li`),Sk(42,`ESC: Cancela edição da celula / Cancela inserção de linhas em branco;`),Kg(),Qc(43,`li`),Sk(44,`A..Z/0..9: Inicia edição com valor em branco.`),Kg()()(),Qc(45,`div`,6)(46,`h4`,7),Sk(47,`Seletor`),Kg(),Qc(48,`pre`,8),Sk(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),Kg()(),Qc(50,`h4`,9),Sk(51,`Propriedades`),Kg(),Qc(52,`table`,10)(53,`tr`,11)(54,`th`,12),Sk(55,`Nome`),Kg(),Qc(56,`th`,12),Sk(57,`Tipo`),Kg(),Qc(58,`th`,12),Sk(59,`Padrão`),Kg(),Qc(60,`th`,12),Sk(61,`Descrição`),Kg()(),Qc(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),Sk(66,` p-columns`),vu(67,`br`),Kg()()(),Qc(68,`td`,17)(69,`code`,18),Sk(70,`Array<any>`),Kg()(),Qc(71,`td`,19),Sk(72,`-`),Kg(),Qc(73,`td`,20)(74,`p`),Sk(75,`Colunas exibidas no grid.`),Kg()()(),Qc(76,`tr`,21)(77,`td`,14)(78,`div`,15)(79,`span`,16),Sk(80,` p-data`),vu(81,`br`),Kg()()(),Qc(82,`td`,17)(83,`code`,18),Sk(84,`Array<any>`),Kg()(),Qc(85,`td`,19),Sk(86,`-`),Kg(),Qc(87,`td`,20)(88,`p`),Sk(89,`Lista com os dados que serão exibidos no grid.`),Kg()()(),Qc(90,`tr`,22)(91,`td`,14)(92,`div`,15)(93,`span`,16),Sk(94,` p-row-actions`),vu(95,`br`),Kg()()(),Qc(96,`td`,17)(97,`code`,23),Sk(98,`PoGridRowActions`),Kg()(),Qc(99,`td`,19),Sk(100,`-`),Kg(),Qc(101,`td`,20)(102,`p`),Sk(103,`Ações disparadas quando uma linha do grid é manipulada.`),Kg()()()(),Qc(104,`h3`),Sk(105,`Interfaces`),Kg(),Qc(106,`h4`,24)(107,`code`,5),Sk(108,`PoGridRowActions`),Kg()(),Qc(109,`div`,2)(110,`p`),Sk(111,`Ações executadas durante a manipulação das linhas do grid.`),Kg()(),Qc(112,`h4`,9),Sk(113,`Propriedades`),Kg(),Qc(114,`table`,10)(115,`tr`,11)(116,`th`,12),Sk(117,`Nome`),Kg(),Qc(118,`th`,12),Sk(119,`Tipo`),Kg(),Qc(120,`th`,12),Sk(121,`Descrição`),Kg()(),Qc(122,`tr`,25)(123,`td`,14)(124,`div`,15)(125,`span`,16),Sk(126,` afterRemove`),vu(127,`br`),Kg()()(),Qc(128,`td`,17)(129,`code`,26),Sk(130,`() => void`),Kg()(),Qc(131,`td`,20)(132,`em`)(133,`strong`),Sk(134,`(opcional)`),Kg()(),Qc(135,`p`),Sk(136,`Método executado após uma linha do grid ser removida.`),Kg()()(),Qc(137,`tr`,27)(138,`td`,14)(139,`div`,15)(140,`span`,16),Sk(141,` afterSave`),vu(142,`br`),Kg()()(),Qc(143,`td`,17)(144,`code`,28),Sk(145,`(row: any) => void`),Kg()(),Qc(146,`td`,20)(147,`em`)(148,`strong`),Sk(149,`(opcional)`),Kg()(),Qc(150,`p`),Sk(151,`Método executado após uma linha do grid ser salva, ao ser executado, o método irá receber um objeto com os dados atualizados.`),Kg()()(),Qc(152,`tr`,29)(153,`td`,14)(154,`div`,15)(155,`span`,16),Sk(156,` beforeInsert`),vu(157,`br`),Kg()()(),Qc(158,`td`,17)(159,`code`,30),Sk(160,`(row: any) => boolean`),Kg()(),Qc(161,`td`,20)(162,`em`)(163,`strong`),Sk(164,`(opcional)`),Kg()(),Qc(165,`p`),Sk(166,`Método executado antes de uma nova linha ser inserida no grid, se o método retornar algo diferente de `),Qc(167,`code`),Sk(168,`true`),Kg(),Sk(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),Kg(),Qc(170,`p`),Sk(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),Kg(),Qc(172,`pre`)(173,`code`),Sk(174,`rowActions: PoGridRowActions = {
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
`),Kg()()()(),Qc(175,`tr`,31)(176,`td`,14)(177,`div`,15)(178,`span`,16),Sk(179,` beforeRemove`),vu(180,`br`),Kg()()(),Qc(181,`td`,17)(182,`code`,30),Sk(183,`(row: any) => boolean`),Kg()(),Qc(184,`td`,20)(185,`em`)(186,`strong`),Sk(187,`(opcional)`),Kg()(),Qc(188,`p`),Sk(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Qc(190,`code`),Sk(191,`true`),Kg(),Sk(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),Kg()()(),Qc(193,`tr`,32)(194,`td`,14)(195,`div`,15)(196,`span`,16),Sk(197,` beforeSave`),vu(198,`br`),Kg()()(),Qc(199,`td`,17)(200,`code`,33),Sk(201,`(updatedRow: any, originalRow: any) => boolean`),Kg()(),Qc(202,`td`,20)(203,`em`)(204,`strong`),Sk(205,`(opcional)`),Kg()(),Qc(206,`p`),Sk(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Qc(208,`code`),Sk(209,`true`),Kg(),Sk(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),Kg(),Qc(211,`blockquote`)(212,`p`),Sk(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),Kg()(),Qc(214,`pre`)(215,`code`),Sk(216,`rowActions: PoGridRowActions = {
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
`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function z(o,k){if(o&1&&(Qc(0,`div`,1),vu(1,`sample-po-grid-basic-view`),Kg()),o&2){let a=ek();Rb(`hidden`,a.activeTab!==`web`)}}var L=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;title=`Grid`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Grid · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(n,d){n&1&&(Qc(0,`po-page-default`,0),FO(1,z,2,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-grid-doc`),Kg()()),n&2&&(Rb(`p-title`,d.title)(`p-actions`,d.actions),wg(),VO(d.hidePoWebSample?-1:1),wg(),Rb(`hidden`,d.activeTab!==`doc`))},dependencies:[Mze,B,M],encapsulation:2,changeDetection:1})}return o})()}];var I=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(L),GV]})}return o})();var re=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M$1,I]})}return o})();export{re as DocPoGridModule};
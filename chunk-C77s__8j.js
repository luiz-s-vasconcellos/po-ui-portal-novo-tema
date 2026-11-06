import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ri as Zg,Vi as _u,Xt as ere,Yi as eF,ea as ge,er as An,fi as Rb,gi as Tk,h as Cze,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,rt as Qae,va as nk,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var N=(()=>{class n{rowActions={beforeSave:this.onBeforeSave.bind(this),afterSave:this.onAfterSave.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),beforeInsert:this.onBeforeInsert.bind(this)};columns=[{property:`id`,label:`Código`,align:`right`,readonly:!0,freeze:!0,width:120},{property:`name`,label:`Nome`,width:`200px`,required:!0},{property:`occupation`,label:`Cargo`,width:150},{property:`email`,label:`E-mail`,width:100,required:!0},{property:`status`,label:`Status`,align:`center`,width:80},{property:`lastActivity`,label:`Última atividade`,align:`center`,width:140}];data=[{id:629131,name:`Jhonatas Silvano`,occupation:`Developer`,email:`jhonatas.silvano@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:78492341,name:`Rafael Gonçalvez`,occupation:`Engineer`,email:`rafael.goncalvez@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-10`},{id:986434,name:`Nicoli Pereira`,occupation:`Developer`,email:`nicoli.pereira@po-ui.com.br`,status:`Active`,lastActivity:`2018-12-12`},{id:4235652,name:`Mauricio João Mendez`,occupation:`Developer`,email:`mauricio.joao@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-23`},{id:629131,name:`Leandro Oliveira`,occupation:`Engineer`,email:`leandro.oliveira@po-ui.com.br`,status:`Active`,lastActivity:`2018-11-30`}];onBeforeSave(a,o){return a.occupation!==`Engineer`}onAfterSave(a){}onBeforeRemove(a){return!0}onAfterRemove(a){}onBeforeInsert(a){return!0}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-grid-basic`]],standalone:!1,decls:1,vars:3,consts:[[3,`p-row-actions`,`p-data`,`p-columns`]],template:function(o,l){o&1&&_u(0,`po-grid`,0),o&2&&Rb(`p-row-actions`,l.rowActions)(`p-data`,l.data)(`p-columns`,l.columns)},dependencies:[Cze],encapsulation:2,changeDetection:1})}return n})();var V=n=>({"docs-sample-code-tabs":n});var j=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-grid-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(o,l){o&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Grid Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return l.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-grid-basic/sample-po-grid-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-grid [p-row-actions]="rowActions" [p-data]="data" [p-columns]="columns"> </po-grid>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-grid-basic/sample-po-grid-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-grid-basic`),Zg(),_u(23,`hr`)),o&2&&(Ig(5),yk(`po-icon `+l.sampleCodeButtonIcon),Ig(),nm(` `,l.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,V,l.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,N],encapsulation:2,changeDetection:1})}return n})();var k=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-grid-doc`]],standalone:!1,decls:217,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoGridRowActions`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`()`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any)`,`=>`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(updatedRow:`,`any,`,`originalRow:`,`any)`,`=>`,`boolean`]],template:function(o,l){o&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoGridModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-grid.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoGridComponent`),Zg()(),Jc(12,`div`,2)(13,`blockquote`)(14,`p`),Tk(15,`Componente em desenvolvimento, podendo haver BREAKING CHANGES nas próximas versões.`),Zg()(),Jc(16,`p`),Tk(17,`Componente grid.`),Zg(),Jc(18,`p`),Tk(19,`Ações / atalhos:`),Zg(),Jc(20,`ul`)(21,`li`),Tk(22,`ARROW-UP: Navega para celula superior / Na ultima linha adiciona uma linha em branco no grid;`),Zg(),Jc(23,`li`),Tk(24,`ARROW-DOWN: Navega para celula inferior;`),Zg(),Jc(25,`li`),Tk(26,`ARROW-RIGHT: Navega para celula direita;`),Zg(),Jc(27,`li`),Tk(28,`ARROW-LEFT: Navega para celula esquerda;`),Zg(),Jc(29,`li`),Tk(30,`TAB: Navega para próxima celula;`),Zg(),Jc(31,`li`),Tk(32,`SHIFT+TAB: Navega para celula anterior;`),Zg(),Jc(33,`li`),Tk(34,`CTRL+DEL: Remove linha;`),Zg(),Jc(35,`li`),Tk(36,`DEL/BACKSPACE: Limpa celula;`),Zg(),Jc(37,`li`),Tk(38,`ENTER: Edita linha com valor atual/Confirma edição da celula;`),Zg(),Jc(39,`li`),Tk(40,`DOUBLE-CLICK: Edita linha com valor atual;`),Zg(),Jc(41,`li`),Tk(42,`ESC: Cancela edição da celula / Cancela inserção de linhas em branco;`),Zg(),Jc(43,`li`),Tk(44,`A..Z/0..9: Inicia edição com valor em branco.`),Zg()()(),Jc(45,`div`,6)(46,`h4`,7),Tk(47,`Seletor`),Zg(),Jc(48,`pre`,8),Tk(49,`<po-grid
    p-columns="Array<any>"
    p-data="Array<any>"
    p-row-actions="PoGridRowActions" >
</po-grid>
`),Zg()(),Jc(50,`h4`,9),Tk(51,`Propriedades`),Zg(),Jc(52,`table`,10)(53,`tr`,11)(54,`th`,12),Tk(55,`Nome`),Zg(),Jc(56,`th`,12),Tk(57,`Tipo`),Zg(),Jc(58,`th`,12),Tk(59,`Padrão`),Zg(),Jc(60,`th`,12),Tk(61,`Descrição`),Zg()(),Jc(62,`tr`,13)(63,`td`,14)(64,`div`,15)(65,`span`,16),Tk(66,` p-columns`),_u(67,`br`),Zg()()(),Jc(68,`td`,17)(69,`code`,18),Tk(70,`Array<any>`),Zg()(),Jc(71,`td`,19),Tk(72,`-`),Zg(),Jc(73,`td`,20)(74,`p`),Tk(75,`Colunas exibidas no grid.`),Zg()()(),Jc(76,`tr`,13)(77,`td`,14)(78,`div`,15)(79,`span`,16),Tk(80,` p-data`),_u(81,`br`),Zg()()(),Jc(82,`td`,17)(83,`code`,18),Tk(84,`Array<any>`),Zg()(),Jc(85,`td`,19),Tk(86,`-`),Zg(),Jc(87,`td`,20)(88,`p`),Tk(89,`Lista com os dados que serão exibidos no grid.`),Zg()()(),Jc(90,`tr`,13)(91,`td`,14)(92,`div`,15)(93,`span`,16),Tk(94,` p-row-actions`),_u(95,`br`),Zg()()(),Jc(96,`td`,17)(97,`code`,21),Tk(98,`PoGridRowActions`),Zg()(),Jc(99,`td`,19),Tk(100,`-`),Zg(),Jc(101,`td`,20)(102,`p`),Tk(103,`Ações disparadas quando uma linha do grid é manipulada.`),Zg()()()(),Jc(104,`h3`),Tk(105,`Interfaces`),Zg(),Jc(106,`h4`,22)(107,`code`,5),Tk(108,`PoGridRowActions`),Zg()(),Jc(109,`div`,2)(110,`p`),Tk(111,`Ações executadas durante a manipulação das linhas do grid.`),Zg()(),Jc(112,`h4`,9),Tk(113,`Propriedades`),Zg(),Jc(114,`table`,10)(115,`tr`,11)(116,`th`,12),Tk(117,`Nome`),Zg(),Jc(118,`th`,12),Tk(119,`Tipo`),Zg(),Jc(120,`th`,12),Tk(121,`Descrição`),Zg()(),Jc(122,`tr`,13)(123,`td`,14)(124,`div`,15)(125,`span`,16),Tk(126,` afterRemove`),_u(127,`br`),Zg()()(),Jc(128,`td`,17)(129,`code`,23),Tk(130,`() => void`),Zg()(),Jc(131,`td`,20)(132,`em`)(133,`strong`),Tk(134,`(opcional)`),Zg()(),Jc(135,`p`),Tk(136,`Método executado após uma linha do grid ser removida.`),Zg()()(),Jc(137,`tr`,13)(138,`td`,14)(139,`div`,15)(140,`span`,16),Tk(141,` afterSave`),_u(142,`br`),Zg()()(),Jc(143,`td`,17)(144,`code`,24),Tk(145,`(row: any) => void`),Zg()(),Jc(146,`td`,20)(147,`em`)(148,`strong`),Tk(149,`(opcional)`),Zg()(),Jc(150,`p`),Tk(151,`Método executado após uma linha do grid ser salva, ao ser executado, o método irá receber um objeto com os dados atualizados.`),Zg()()(),Jc(152,`tr`,13)(153,`td`,14)(154,`div`,15)(155,`span`,16),Tk(156,` beforeInsert`),_u(157,`br`),Zg()()(),Jc(158,`td`,17)(159,`code`,25),Tk(160,`(row: any) => boolean`),Zg()(),Jc(161,`td`,20)(162,`em`)(163,`strong`),Tk(164,`(opcional)`),Zg()(),Jc(165,`p`),Tk(166,`Método executado antes de uma nova linha ser inserida no grid, se o método retornar algo diferente de `),Jc(167,`code`),Tk(168,`true`),Zg(),Tk(169,` a a\xE7\xE3o
ser\xE1 cancelada e a linha n\xE3o ser\xE1 inserida.`),Zg(),Jc(170,`p`),Tk(171,`Ao ser executado o m\xE9todo ir\xE1 receber a refer\xEAncia do objeto que ser\xE1 inserido, dessa forma \xE9 poss\xEDvel informar valores
para esse objeto.`),Zg(),Jc(172,`pre`)(173,`code`),Tk(174,`rowActions: PoGridRowActions = {
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
`),Zg()()()(),Jc(175,`tr`,13)(176,`td`,14)(177,`div`,15)(178,`span`,16),Tk(179,` beforeRemove`),_u(180,`br`),Zg()()(),Jc(181,`td`,17)(182,`code`,25),Tk(183,`(row: any) => boolean`),Zg()(),Jc(184,`td`,20)(185,`em`)(186,`strong`),Tk(187,`(opcional)`),Zg()(),Jc(188,`p`),Tk(189,`M\xE9todo executado antes de uma linha ser removida do grid, ao ser executado, o m\xE9todo ir\xE1 receber uma c\xF3pia do objeto
com os dados da linha que ser\xE1 removida, se o m\xE9todo retornar algo diferente de `),Jc(190,`code`),Tk(191,`true`),Zg(),Tk(192,` a a\xE7\xE3o ser\xE1 cancelada e a linha
n\xE3o ser\xE1 removida.`),Zg()()(),Jc(193,`tr`,13)(194,`td`,14)(195,`div`,15)(196,`span`,16),Tk(197,` beforeSave`),_u(198,`br`),Zg()()(),Jc(199,`td`,17)(200,`code`,26),Tk(201,`(updatedRow: any, originalRow: any) => boolean`),Zg()(),Jc(202,`td`,20)(203,`em`)(204,`strong`),Tk(205,`(opcional)`),Zg()(),Jc(206,`p`),Tk(207,`M\xE9todo executado antes de uma linha ser atualizada, ao ser executado, o m\xE9todo ir\xE1 receber um objeto com os dados atualizados
e um objeto com uma c\xF3pia dos dados originais, se o m\xE9todo retornar algo diferente de `),Jc(208,`code`),Tk(209,`true`),Zg(),Tk(210,` a a\xE7\xE3o ser\xE1 cancelada e
a linha n\xE3o ser\xE1 atualizada permanecendo em edi\xE7\xE3o / inser\xE7\xE3o.`),Zg(),Jc(211,`blockquote`)(212,`p`),Tk(213,`Caso n\xE3o seja permitido a atualiza\xE7\xE3o da linha, a sugest\xE3o \xE9 que seja apresentada uma mensagem ao usu\xE1rio informando
o motivo.`),Zg()(),Jc(214,`pre`)(215,`code`),Tk(216,`rowActions: PoGridRowActions = {
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
`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function K(n,Z){if(n&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let l=nk();return H_(l.changeTab(`web`))}),_u(1,`sample-po-grid-basic-view`),Zg()}if(n&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var U=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(o){return new(o||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Grid`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(o,l){o&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,K,2,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),_u(4,`sample-po-grid-doc`),Zg()()()),o&2&&(Rb(`p-actions`,l.actions),Ig(2),BO(l.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Tze,Qae,ere,j,k],encapsulation:2,changeDetection:1})}return n})()}];var L=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[WV.forChild(U),WV]})}return n})();var ce=(()=>{class n{static ɵfac=function(o){return new(o||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,L]})}return n})();export{ce as DocPoGridModule};
import{n as P,t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fr as Jc,Gn as yb,H as Mze,Hi as ar,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,P as Joe,Pr as JL,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,an as j4,cr as Bk,ea as ge,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,jr as I,k as Goe,no as yk,nr as An,qa as vt,qi as de$1,tr as Ak,va as nk,vn as oi,xi as VO,ya as nm}from"./chunk-BJubg121.js";var te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(a,i){a&1&&_u(0,`po-info`,0)},dependencies:[Joe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o});var oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Info Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-info-basic/sample-po-info-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-info-basic/sample-po-info-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-info-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,de,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,te],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:yb.Horizontal},{label:`Vertical`,value:yb.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let u=ZO();_u(0,`po-info`,1)(1,`po-divider`),Jc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),W0(),Zb(`ngModelChange`,function(p){return H_(u),Ak(i.label,p)||(i.label=p),$_(p)}),Zg(),Jc(6,`po-input`,4),W0(),Zb(`ngModelChange`,function(p){return H_(u),Ak(i.value,p)||(i.value=p),$_(p)}),Zg()(),Jc(7,`div`,2)(8,`po-input`,5),W0(),Zb(`ngModelChange`,function(p){return H_(u),Ak(i.url,p)||(i.url=p),$_(p)}),Zg(),Jc(9,`po-number`,6),W0(),Zb(`ngModelChange`,function(p){return H_(u),Ak(i.labelSize,p)||(i.labelSize=p),$_(p)}),Zg(),Jc(10,`po-radio-group`,7),W0(),Zb(`ngModelChange`,function(p){return H_(u),Ak(i.orientation,p)||(i.orientation=p),$_(p)}),Zg()(),Jc(11,`div`,2)(12,`po-button`,8),vt(`p-click`,function(){return i.restore()}),Zg()()()}a&2&&(Ab(`p-label`,i.label)(`p-label-size`,i.labelSize)(`p-orientation`,i.orientation)(`p-url`,i.url)(`p-value`,i.value),Ig(5),Kb(`ngModel`,i.label),Y0(),Ig(),Kb(`ngModel`,i.value),Y0(),Ig(2),Kb(`ngModel`,i.url),Y0(),Ig(),Kb(`ngModel`,i.labelSize),Y0(),Ig(),Kb(`ngModel`,i.orientation),Ab(`p-options`,i.orientationOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,j4,Goe,Zte,Joe],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Info Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-info-labs/sample-po-info-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
</po-info>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-4 po-md-6" name="url" [(ngModel)]="url" p-clean p-label="Url"> </po-input>

    <po-number
      class="po-lg-2 po-md-6"
      name="labelSize"
      [(ngModel)]="labelSize"
      p-clean
      p-label="Label size"
      p-max="11"
      p-min="1"
    >
    </po-number>

    <po-radio-group
      class="po-lg-6 po-md-12"
      name="orientation"
      [(ngModel)]="orientation"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-info-labs/sample-po-info-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoInfoOrientation, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-info-labs',
  templateUrl: './sample-po-info-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoLabsComponent implements OnInit {
  label: string;
  labelSize: number;
  orientation: PoInfoOrientation;
  url: string;
  value: string;

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoInfoOrientation.Horizontal },
    { label: 'Vertical', value: PoInfoOrientation.Vertical }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = 'PO Info';
    this.labelSize = undefined;
    this.orientation = undefined;
    this.url = undefined;
    this.value = undefined;
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-info-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,fe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ie],encapsulation:2,changeDetection:1})}return o})();var le=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoInfoModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-info.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoInfoComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),Zg()(),Jc(15,`div`,6)(16,`h4`,7),Tk(17,`Seletor`),Zg(),Jc(18,`pre`,8),Tk(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),Zg()(),Jc(20,`h4`,9),Tk(21,`Propriedades`),Zg(),Jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),Tk(25,`Nome`),Zg(),Jc(26,`th`,12),Tk(27,`Tipo`),Zg(),Jc(28,`th`,12),Tk(29,`Padrão`),Zg(),Jc(30,`th`,12),Tk(31,`Descrição`),Zg()(),Jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),Tk(36,` p-label`),_u(37,`br`),Zg()()(),Jc(38,`td`,17)(39,`code`,18),Tk(40,`string`),Zg()(),Jc(41,`td`,19),Tk(42,`-`),Zg(),Jc(43,`td`,20)(44,`p`),Tk(45,`Valor do rótulo a ser exibido.`),Zg()()(),Jc(46,`tr`,13)(47,`td`,14)(48,`div`,15)(49,`span`,16),Tk(50,` p-label-size`),_u(51,`br`),Zg()()(),Jc(52,`td`,17)(53,`code`,21),Tk(54,`number`),Zg()(),Jc(55,`td`,19),Tk(56,`-`),Zg(),Jc(57,`td`,20)(58,`em`)(59,`strong`),Tk(60,`(opcional)`),Zg()(),Jc(61,`p`),Tk(62,`Quantidade de `),Jc(63,`a`,22),Tk(64,`colunas`),Zg(),Tk(65,` usadas para a exibição da `),Jc(66,`code`),Tk(67,`p-label`),Zg(),Tk(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),Zg(),Jc(69,`p`),Tk(70,`Valores válidos:`),Zg(),Jc(71,`ul`)(72,`li`)(73,`code`),Tk(74,`[1 .. 11]`),Zg()()(),Jc(75,`blockquote`)(76,`p`),Tk(77,`A propriedade `),Jc(78,`code`),Tk(79,`p-value`),Zg(),Tk(80,` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.`),Zg()()()(),Jc(81,`tr`,13)(82,`td`,14)(83,`div`,15)(84,`span`,16),Tk(85,` p-orientation`),_u(86,`br`),Zg()()(),Jc(87,`td`,17)(88,`code`,23),Tk(89,`PoInfoOrientation`),Zg()(),Jc(90,`td`,19)(91,`p`)(92,`code`),Tk(93,`vertical`),Zg()()(),Jc(94,`td`,20)(95,`em`)(96,`strong`),Tk(97,`(opcional)`),Zg()(),Jc(98,`p`),Tk(99,`Define o layout de exibição.`),Zg(),Jc(100,`blockquote`)(101,`p`),Tk(102,`Quando definido na horizontal, pode-se utilizar a propriedade `),Jc(103,`code`),Tk(104,`p-label-size`),Zg(),Tk(105,` para um maior controle das informações exibidas.`),Zg()()()(),Jc(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),Tk(110,` p-size`),_u(111,`br`),Zg()()(),Jc(112,`td`,17)(113,`code`,18),Tk(114,`string`),Zg()(),Jc(115,`td`,19)(116,`p`)(117,`code`),Tk(118,`medium`),Zg()()(),Jc(119,`td`,20)(120,`em`)(121,`strong`),Tk(122,`(opcional)`),Zg()(),Jc(123,`p`),Tk(124,`Define o tamanho do componente entre `),Jc(125,`code`),Tk(126,`small`),Zg(),Tk(127,` ou `),Jc(128,`code`),Tk(129,`medium`),Zg(),Tk(130,`.`),Zg(),Jc(131,`blockquote`)(132,`p`),Tk(133,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(134,`code`),Tk(135,`medium`),Zg(),Tk(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(137,`a`,24),Tk(138,`po-theme`),Zg(),Tk(139,`.`),Zg()()()(),Jc(140,`tr`,13)(141,`td`,14)(142,`div`,15)(143,`span`,16),Tk(144,` p-url`),_u(145,`br`),Zg()()(),Jc(146,`td`,17)(147,`code`,18),Tk(148,`string`),Zg()(),Jc(149,`td`,19),Tk(150,`-`),Zg(),Jc(151,`td`,20)(152,`em`)(153,`strong`),Tk(154,`(opcional)`),Zg()(),Jc(155,`p`),Tk(156,`Ao informar uma URL, o conteúdo será exibido na forma de um `),Jc(157,`em`),Tk(158,`link`),Zg(),Tk(159,` e ao ser clicado será redirecionado para a URL informada.`),Zg(),Jc(160,`blockquote`)(161,`p`),Tk(162,`Caso informar `),Jc(163,`code`),Tk(164,`http://`),Zg(),Tk(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Jc(166,`code`),Tk(167,`/customers`),Zg(),Tk(168,`, será aberto na aba atual.`),Zg()()()(),Jc(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),Tk(173,` p-value`),_u(174,`br`),Zg()()(),Jc(175,`td`,17)(176,`code`,18),Tk(177,`string`),Zg()(),Jc(178,`td`,19),Tk(179,`-`),Zg(),Jc(180,`td`,20)(181,`em`)(182,`strong`),Tk(183,`(opcional)`),Zg()(),Jc(184,`p`),Tk(185,`Valor do conteúdo a ser exibido.`),Zg()()()(),Jc(186,`h3`),Tk(187,`Enums`),Zg(),Jc(188,`h4`,4)(189,`code`,5),Tk(190,`PoInfoOrientation`),Zg()(),Jc(191,`div`,2)(192,`p`),Tk(193,`Define os tipos de orientações disponíveis para o `),Jc(194,`code`),Tk(195,`po-info`),Zg(),Tk(196,`.`),Zg()(),Jc(197,`h4`,9),Tk(198,`Propriedades`),Zg(),Jc(199,`table`,10)(200,`tr`,11)(201,`th`,12),Tk(202,`Nome`),Zg(),Jc(203,`th`,12),Tk(204,`Descrição`),Zg()(),Jc(205,`tr`,13)(206,`td`,14)(207,`div`,15)(208,`span`,16),Tk(209,` Horizontal`),_u(210,`br`),Zg()()(),Jc(211,`td`,20)(212,`p`),Tk(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),Zg()()(),Jc(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),Tk(218,` Vertical`),_u(219,`br`),Zg()()(),Jc(220,`td`,20)(221,`p`),Tk(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Se(o,Ce){if(o&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(r);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-info-basic-view`)(2,`sample-po-info-labs-view`),Zg()}if(o&2){let r=nk();Ab(`p-active`,r.activeTab===`web`)}}var he=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Info`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Se,3,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-info-doc`),Zg()()()),a&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,oe,ae,le],encapsulation:2,changeDetection:1})}return o})()}];var pe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[WV.forChild(he),WV]})}return o})();var qe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,pe]})}return o})();export{qe as DocPoInfoModule};
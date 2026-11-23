import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I,At as Zte,F as Joe,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,Jn as yb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,W as Mze,Wi as YO,Wr as MZ,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge,gi as Rb,io as vt,k as Goe,li as Qc,ra as de$1,rr as AZ,si as QL,sn as j4,so as wg,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-BQDTQO8h.js";var Z=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(i,a){i&1&&vu(0,`po-info`,0)},dependencies:[Joe],encapsulation:2,changeDetection:1})}return o})();var ee=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-info-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-info-basic/sample-po-info-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-info-basic/sample-po-info-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Info Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-info-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-info-basic/sample-po-info-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-info-basic/sample-po-info-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,Z],encapsulation:2,changeDetection:1})}return o})();var te=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:yb.Horizontal},{label:`Vertical`,value:yb.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(i,a){if(i&1){let C=YO();vu(0,`po-info`,1)(1,`po-divider`),Qc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),z0(),Kb(`ngModelChange`,function(p){return B_(C),Tk(a.label,p)||(a.label=p),U_(p)}),Kg(),Qc(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(p){return B_(C),Tk(a.value,p)||(a.value=p),U_(p)}),Kg()(),Qc(7,`div`,2)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(p){return B_(C),Tk(a.url,p)||(a.url=p),U_(p)}),Kg(),Qc(9,`po-number`,6),z0(),Kb(`ngModelChange`,function(p){return B_(C),Tk(a.labelSize,p)||(a.labelSize=p),U_(p)}),Kg(),Qc(10,`po-radio-group`,7),z0(),Kb(`ngModelChange`,function(p){return B_(C),Tk(a.orientation,p)||(a.orientation=p),U_(p)}),Kg()(),Qc(11,`div`,2)(12,`po-button`,8),vt(`p-click`,function(){return a.restore()}),Kg()()()}i&2&&(Rb(`p-label`,a.label)(`p-label-size`,a.labelSize)(`p-orientation`,a.orientation)(`p-url`,a.url)(`p-value`,a.value),wg(5),Yb(`ngModel`,a.label),W0(),wg(),Yb(`ngModel`,a.value),W0(),wg(2),Yb(`ngModel`,a.url),W0(),wg(),Yb(`ngModel`,a.labelSize),W0(),wg(),Yb(`ngModel`,a.orientation),Rb(`p-options`,a.orientationOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Goe,Zte,Joe],encapsulation:2,changeDetection:1})}return o})();var ne=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-info-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-info-labs/sample-po-info-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-info-labs/sample-po-info-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Info Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-info-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-info-labs/sample-po-info-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-info-labs/sample-po-info-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,te],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-info-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-label-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-url`,1,`docs-api-properties-row`],[`id`,`prop-p-value`,1,`docs-api-properties-row`],[`id`,`enum-po-info-orientation`,1,`docs-api-class-name`],[`id`,`enum-po-info-orientation-horizontal`,1,`docs-api-properties-row`],[`id`,`enum-po-info-orientation-vertical`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoInfoModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-info.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoInfoComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),Kg()(),Qc(15,`div`,6)(16,`h4`,7),Sk(17,`Seletor`),Kg(),Qc(18,`pre`,8),Sk(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),Kg()(),Qc(20,`h4`,9),Sk(21,`Propriedades`),Kg(),Qc(22,`table`,10)(23,`tr`,11)(24,`th`,12),Sk(25,`Nome`),Kg(),Qc(26,`th`,12),Sk(27,`Tipo`),Kg(),Qc(28,`th`,12),Sk(29,`Padrão`),Kg(),Qc(30,`th`,12),Sk(31,`Descrição`),Kg()(),Qc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),Sk(36,` p-label`),vu(37,`br`),Kg()()(),Qc(38,`td`,17)(39,`code`,18),Sk(40,`string`),Kg()(),Qc(41,`td`,19),Sk(42,`-`),Kg(),Qc(43,`td`,20)(44,`p`),Sk(45,`Valor do rótulo a ser exibido.`),Kg()()(),Qc(46,`tr`,21)(47,`td`,14)(48,`div`,15)(49,`span`,16),Sk(50,` p-label-size`),vu(51,`br`),Kg()()(),Qc(52,`td`,17)(53,`code`,22),Sk(54,`number`),Kg()(),Qc(55,`td`,19),Sk(56,`-`),Kg(),Qc(57,`td`,20)(58,`em`)(59,`strong`),Sk(60,`(opcional)`),Kg()(),Qc(61,`p`),Sk(62,`Quantidade de `),Qc(63,`a`,23),Sk(64,`colunas`),Kg(),Sk(65,` usadas para a exibição da `),Qc(66,`code`),Sk(67,`p-label`),Kg(),Sk(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),Kg(),Qc(69,`p`),Sk(70,`Valores válidos:`),Kg(),Qc(71,`ul`)(72,`li`)(73,`code`),Sk(74,`[1 .. 11]`),Kg()()(),Qc(75,`blockquote`)(76,`p`),Sk(77,`A propriedade `),Qc(78,`code`),Sk(79,`p-value`),Kg(),Sk(80,` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.`),Kg()()()(),Qc(81,`tr`,24)(82,`td`,14)(83,`div`,15)(84,`span`,16),Sk(85,` p-orientation`),vu(86,`br`),Kg()()(),Qc(87,`td`,17)(88,`code`,25),Sk(89,`PoInfoOrientation`),Kg()(),Qc(90,`td`,19)(91,`p`)(92,`code`),Sk(93,`vertical`),Kg()()(),Qc(94,`td`,20)(95,`em`)(96,`strong`),Sk(97,`(opcional)`),Kg()(),Qc(98,`p`),Sk(99,`Define o layout de exibição.`),Kg(),Qc(100,`blockquote`)(101,`p`),Sk(102,`Quando definido na horizontal, pode-se utilizar a propriedade `),Qc(103,`code`),Sk(104,`p-label-size`),Kg(),Sk(105,` para um maior controle das informações exibidas.`),Kg()()()(),Qc(106,`tr`,26)(107,`td`,14)(108,`div`,15)(109,`span`,16),Sk(110,` p-size`),vu(111,`br`),Kg()()(),Qc(112,`td`,17)(113,`code`,18),Sk(114,`string`),Kg()(),Qc(115,`td`,19)(116,`p`)(117,`code`),Sk(118,`medium`),Kg()()(),Qc(119,`td`,20)(120,`em`)(121,`strong`),Sk(122,`(opcional)`),Kg()(),Qc(123,`p`),Sk(124,`Define o tamanho do componente entre `),Qc(125,`code`),Sk(126,`small`),Kg(),Sk(127,` ou `),Qc(128,`code`),Sk(129,`medium`),Kg(),Sk(130,`.`),Kg(),Qc(131,`blockquote`)(132,`p`),Sk(133,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(134,`code`),Sk(135,`medium`),Kg(),Sk(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(137,`a`,27),Sk(138,`po-theme`),Kg(),Sk(139,`.`),Kg()()()(),Qc(140,`tr`,28)(141,`td`,14)(142,`div`,15)(143,`span`,16),Sk(144,` p-url`),vu(145,`br`),Kg()()(),Qc(146,`td`,17)(147,`code`,18),Sk(148,`string`),Kg()(),Qc(149,`td`,19),Sk(150,`-`),Kg(),Qc(151,`td`,20)(152,`em`)(153,`strong`),Sk(154,`(opcional)`),Kg()(),Qc(155,`p`),Sk(156,`Ao informar uma URL, o conteúdo será exibido na forma de um `),Qc(157,`em`),Sk(158,`link`),Kg(),Sk(159,` e ao ser clicado será redirecionado para a URL informada.`),Kg(),Qc(160,`blockquote`)(161,`p`),Sk(162,`Caso informar `),Qc(163,`code`),Sk(164,`http://`),Kg(),Sk(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),Qc(166,`code`),Sk(167,`/customers`),Kg(),Sk(168,`, será aberto na aba atual.`),Kg()()()(),Qc(169,`tr`,29)(170,`td`,14)(171,`div`,15)(172,`span`,16),Sk(173,` p-value`),vu(174,`br`),Kg()()(),Qc(175,`td`,17)(176,`code`,18),Sk(177,`string`),Kg()(),Qc(178,`td`,19),Sk(179,`-`),Kg(),Qc(180,`td`,20)(181,`em`)(182,`strong`),Sk(183,`(opcional)`),Kg()(),Qc(184,`p`),Sk(185,`Valor do conteúdo a ser exibido.`),Kg()()()(),Qc(186,`h3`),Sk(187,`Enums`),Kg(),Qc(188,`h4`,30)(189,`code`,5),Sk(190,`PoInfoOrientation`),Kg()(),Qc(191,`div`,2)(192,`p`),Sk(193,`Define os tipos de orientações disponíveis para o `),Qc(194,`code`),Sk(195,`po-info`),Kg(),Sk(196,`.`),Kg()(),Qc(197,`h4`,9),Sk(198,`Propriedades`),Kg(),Qc(199,`table`,10)(200,`tr`,11)(201,`th`,12),Sk(202,`Nome`),Kg(),Qc(203,`th`,12),Sk(204,`Descrição`),Kg()(),Qc(205,`tr`,31)(206,`td`,14)(207,`div`,15)(208,`span`,16),Sk(209,` Horizontal`),vu(210,`br`),Kg()()(),Qc(211,`td`,20)(212,`p`),Sk(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),Kg()()(),Qc(214,`tr`,32)(215,`td`,14)(216,`div`,15)(217,`span`,16),Sk(218,` Vertical`),vu(219,`br`),Kg()()(),Qc(220,`td`,20)(221,`p`),Sk(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function de(o,ue){if(o&1&&(Qc(0,`div`,1),vu(1,`sample-po-info-basic-view`)(2,`sample-po-info-labs-view`),Kg()),o&2){let r=ek();Rb(`hidden`,r.activeTab!==`web`)}}var ce=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;title=`Info`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Info · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,a){i&1&&(Qc(0,`po-page-default`,0),FO(1,de,3,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-info-doc`),Kg()()),i&2&&(Rb(`p-title`,a.title)(`p-actions`,a.actions),wg(),VO(a.hidePoWebSample?-1:1),wg(),Rb(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,ee,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var ae=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[GV.forChild(ce),GV]})}return o})();var He=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,ae]})}return o})();export{He as DocPoInfoModule};
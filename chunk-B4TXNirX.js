import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I,At as Zte,F as Joe,G as Nf,Ii as WL,Ir as Kb,Jn as yb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,ji as Vk,k as Goe,li as Qc,na as de,oo as wg,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,ua as ge,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var oe=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(a,i){a&1&&vu(0,`po-info`,0)},dependencies:[Joe],encapsulation:2,changeDetection:1})}return n})();var ce=n=>({"docs-sample-code-tabs":n});var ie=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-info-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-info-basic/sample-po-info-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-info-basic/sample-po-info-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Info Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-info-basic/sample-po-info-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-info-basic/sample-po-info-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-info-basic`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ce,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,oe],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:yb.Horizontal},{label:`Vertical`,value:yb.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let u=YO();vu(0,`po-info`,1)(1,`po-divider`),Qc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),z0(),Kb(`ngModelChange`,function(r){return B_(u),Tk(i.label,r)||(i.label=r),U_(r)}),Kg(),Qc(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(r){return B_(u),Tk(i.value,r)||(i.value=r),U_(r)}),Kg()(),Qc(7,`div`,2)(8,`po-input`,5),z0(),Kb(`ngModelChange`,function(r){return B_(u),Tk(i.url,r)||(i.url=r),U_(r)}),Kg(),Qc(9,`po-number`,6),z0(),Kb(`ngModelChange`,function(r){return B_(u),Tk(i.labelSize,r)||(i.labelSize=r),U_(r)}),Kg(),Qc(10,`po-radio-group`,7),z0(),Kb(`ngModelChange`,function(r){return B_(u),Tk(i.orientation,r)||(i.orientation=r),U_(r)}),Kg()(),Qc(11,`div`,2)(12,`po-button`,8),vt(`p-click`,function(){return i.restore()}),Kg()()()}a&2&&(Rb(`p-label`,i.label)(`p-label-size`,i.labelSize)(`p-orientation`,i.orientation)(`p-url`,i.url)(`p-value`,i.value),wg(5),Yb(`ngModel`,i.label),W0(),wg(),Yb(`ngModel`,i.value),W0(),wg(2),Yb(`ngModel`,i.url),W0(),wg(),Yb(`ngModel`,i.labelSize),W0(),wg(),Yb(`ngModel`,i.orientation),Rb(`p-options`,i.orientationOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,j4,Goe,Zte,Joe],encapsulation:2,changeDetection:1})}return n})();var be=n=>({"docs-sample-code-tabs":n});var le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-info-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-info-labs/sample-po-info-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-info-labs/sample-po-info-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Info Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-info-labs/sample-po-info-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-info-labs`),Kg(),vu(25,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,be,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ae],encapsulation:2,changeDetection:1})}return n})();var pe=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-info-component`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-label-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`id`,`prop-p-orientation`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-url`,1,`docs-api-properties-row`],[`id`,`prop-p-value`,1,`docs-api-properties-row`],[`id`,`enum-po-info-orientation`,1,`docs-api-class-name`],[`id`,`enum-po-info-orientation-horizontal`,1,`docs-api-properties-row`],[`id`,`enum-po-info-orientation-vertical`,1,`docs-api-properties-row`]],template:function(a,i){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoInfoModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-info.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoInfoComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
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
Caso informar um caminho relativo, exemplo: `),Qc(166,`code`),Sk(167,`/customers`),Kg(),Sk(168,`, será aberto na aba atual.`),Kg()()()(),Qc(169,`tr`,29)(170,`td`,14)(171,`div`,15)(172,`span`,16),Sk(173,` p-value`),vu(174,`br`),Kg()()(),Qc(175,`td`,17)(176,`code`,18),Sk(177,`string`),Kg()(),Qc(178,`td`,19),Sk(179,`-`),Kg(),Qc(180,`td`,20)(181,`em`)(182,`strong`),Sk(183,`(opcional)`),Kg()(),Qc(184,`p`),Sk(185,`Valor do conteúdo a ser exibido.`),Kg()()()(),Qc(186,`h3`),Sk(187,`Enums`),Kg(),Qc(188,`h4`,30)(189,`code`,5),Sk(190,`PoInfoOrientation`),Kg()(),Qc(191,`div`,2)(192,`p`),Sk(193,`Define os tipos de orientações disponíveis para o `),Qc(194,`code`),Sk(195,`po-info`),Kg(),Sk(196,`.`),Kg()(),Qc(197,`h4`,9),Sk(198,`Propriedades`),Kg(),Qc(199,`table`,10)(200,`tr`,11)(201,`th`,12),Sk(202,`Nome`),Kg(),Qc(203,`th`,12),Sk(204,`Descrição`),Kg()(),Qc(205,`tr`,31)(206,`td`,14)(207,`div`,15)(208,`span`,16),Sk(209,` Horizontal`),vu(210,`br`),Kg()()(),Qc(211,`td`,20)(212,`p`),Sk(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),Kg()()(),Qc(214,`tr`,32)(215,`td`,14)(216,`div`,15)(217,`span`,16),Sk(218,` Vertical`),vu(219,`br`),Kg()()(),Qc(220,`td`,20)(221,`p`),Sk(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Se(n,ve){if(n&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-info-basic-view`)(2,`sample-po-info-labs-view`),Kg()}if(n&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var Ce=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Info`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Se,3,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-info-doc`),Kg()()()),a&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ie,le,pe],encapsulation:2,changeDetection:1})}return n})()}];var me=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(Ce),GV]})}return n})();var Ge=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,me]})}return n})();export{Ge as DocPoInfoModule};
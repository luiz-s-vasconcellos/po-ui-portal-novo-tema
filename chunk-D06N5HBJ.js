import{A as Hoe,Cn as oi,Ct as Yoe,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,ai as Sn,dr as DO,gr as Dx,ht as U4,ia as ir,in as hb,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var te=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Info`,`p-value`,`Value`]],template:function(a,i){a&1&&nu(0,`po-info`,0)},dependencies:[Yoe],encapsulation:2,changeDetection:1})}return o})();var de=o=>({"docs-sample-code-tabs":o});var oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Info Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-info-basic/sample-po-info-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-info p-label="PO Info" p-value="Value"> </po-info>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-info-basic/sample-po-info-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-info-basic',
  templateUrl: './sample-po-info-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInfoBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-info-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,de,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,te],encapsulation:2,changeDetection:1})}return o})();var ie=(()=>{class o{label;labelSize;orientation;url;value;orientationOptions=[{label:`Horizontal`,value:hb.Horizontal},{label:`Vertical`,value:hb.Vertical}];ngOnInit(){this.restore()}restore(){this.label=`PO Info`,this.labelSize=void 0,this.orientation=void 0,this.url=void 0,this.value=void 0}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-labs`]],standalone:!1,decls:13,vars:11,consts:[[`f`,`ngForm`],[3,`p-label`,`p-label-size`,`p-orientation`,`p-url`,`p-value`],[1,`po-row`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`Url`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`labelSize`,`p-clean`,``,`p-label`,`Label size`,`p-max`,`11`,`p-min`,`1`,1,`po-lg-2`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`orientation`,`p-label`,`Orientation`,1,`po-lg-6`,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-md-3`,3,`p-click`]],template:function(a,i){if(a&1){let u=Ax();nu(0,`po-info`,1)(1,`po-divider`),jc(2,`form`,null,0)(4,`div`,2)(5,`po-input`,3),r0(),ab(`ngModelChange`,function(p){return v_(u),uO(i.label,p)||(i.label=p),__(p)}),wg(),jc(6,`po-input`,4),r0(),ab(`ngModelChange`,function(p){return v_(u),uO(i.value,p)||(i.value=p),__(p)}),wg()(),jc(7,`div`,2)(8,`po-input`,5),r0(),ab(`ngModelChange`,function(p){return v_(u),uO(i.url,p)||(i.url=p),__(p)}),wg(),jc(9,`po-number`,6),r0(),ab(`ngModelChange`,function(p){return v_(u),uO(i.labelSize,p)||(i.labelSize=p),__(p)}),wg(),jc(10,`po-radio-group`,7),r0(),ab(`ngModelChange`,function(p){return v_(u),uO(i.orientation,p)||(i.orientation=p),__(p)}),wg()(),jc(11,`div`,2)(12,`po-button`,8),mt(`p-click`,function(){return i.restore()}),wg()()()}a&2&&(UE(`p-label`,i.label)(`p-label-size`,i.labelSize)(`p-orientation`,i.orientation)(`p-url`,i.url)(`p-value`,i.value),rg(5),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.value),o0(),rg(2),sb(`ngModel`,i.url),o0(),rg(),sb(`ngModel`,i.labelSize),o0(),rg(),sb(`ngModel`,i.orientation),UE(`p-options`,i.orientationOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,U4,Hoe,Gte,Yoe],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Info Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-info-labs/sample-po-info-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-info [p-label]="label" [p-label-size]="labelSize" [p-orientation]="orientation" [p-url]="url" [p-value]="value">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-info-labs/sample-po-info-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-info-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,fe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,ie],encapsulation:2,changeDetection:1})}return o})();var le=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-info-doc`]],standalone:!1,decls:223,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/guides/grid-system`],[`pan`,``,1,`docs-api-property-type`,`PoInfoOrientation`],[`href`,`https://po-ui.io/documentation/po-theme`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoInfoModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-info.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoInfoComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,` Este componente tem como objetivo renderizar valores na tela no estilo label na parte superior e
valor na parte inferior. Facilita a exibi\xE7\xE3o de dados pois vem com layout padr\xE3o PO.`),wg()(),jc(15,`div`,6)(16,`h4`,7),lO(17,`Seletor`),wg(),jc(18,`pre`,8),lO(19,`<po-info
    p-label="string"
    p-label-size="number"
    p-orientation="PoInfoOrientation"
    p-size="string"
    p-url="string"
    p-value="string" >
</po-info>
`),wg()(),jc(20,`h4`,9),lO(21,`Propriedades`),wg(),jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),lO(25,`Nome`),wg(),jc(26,`th`,12),lO(27,`Tipo`),wg(),jc(28,`th`,12),lO(29,`Padrão`),wg(),jc(30,`th`,12),lO(31,`Descrição`),wg()(),jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),lO(36,` p-label`),nu(37,`br`),wg()()(),jc(38,`td`,17)(39,`code`,18),lO(40,`string`),wg()(),jc(41,`td`,19),lO(42,`-`),wg(),jc(43,`td`,20)(44,`p`),lO(45,`Valor do rótulo a ser exibido.`),wg()()(),jc(46,`tr`,13)(47,`td`,14)(48,`div`,15)(49,`span`,16),lO(50,` p-label-size`),nu(51,`br`),wg()()(),jc(52,`td`,17)(53,`code`,21),lO(54,`number`),wg()(),jc(55,`td`,19),lO(56,`-`),wg(),jc(57,`td`,20)(58,`em`)(59,`strong`),lO(60,`(opcional)`),wg()(),jc(61,`p`),lO(62,`Quantidade de `),jc(63,`a`,22),lO(64,`colunas`),wg(),lO(65,` usadas para a exibição da `),jc(66,`code`),lO(67,`p-label`),wg(),lO(68,` quando o componente for
utilizado na orienta\xE7\xE3o horizontal.`),wg(),jc(69,`p`),lO(70,`Valores válidos:`),wg(),jc(71,`ul`)(72,`li`)(73,`code`),lO(74,`[1 .. 11]`),wg()()(),jc(75,`blockquote`)(76,`p`),lO(77,`A propriedade `),jc(78,`code`),lO(79,`p-value`),wg(),lO(80,` recebe o número de colunas restantes, por exemplo, se definido 3 colunas a mesma assume 9 colunas.`),wg()()()(),jc(81,`tr`,13)(82,`td`,14)(83,`div`,15)(84,`span`,16),lO(85,` p-orientation`),nu(86,`br`),wg()()(),jc(87,`td`,17)(88,`code`,23),lO(89,`PoInfoOrientation`),wg()(),jc(90,`td`,19)(91,`p`)(92,`code`),lO(93,`vertical`),wg()()(),jc(94,`td`,20)(95,`em`)(96,`strong`),lO(97,`(opcional)`),wg()(),jc(98,`p`),lO(99,`Define o layout de exibição.`),wg(),jc(100,`blockquote`)(101,`p`),lO(102,`Quando definido na horizontal, pode-se utilizar a propriedade `),jc(103,`code`),lO(104,`p-label-size`),wg(),lO(105,` para um maior controle das informações exibidas.`),wg()()()(),jc(106,`tr`,13)(107,`td`,14)(108,`div`,15)(109,`span`,16),lO(110,` p-size`),nu(111,`br`),wg()()(),jc(112,`td`,17)(113,`code`,18),lO(114,`string`),wg()(),jc(115,`td`,19)(116,`p`)(117,`code`),lO(118,`medium`),wg()()(),jc(119,`td`,20)(120,`em`)(121,`strong`),lO(122,`(opcional)`),wg()(),jc(123,`p`),lO(124,`Define o tamanho do componente entre `),jc(125,`code`),lO(126,`small`),wg(),lO(127,` ou `),jc(128,`code`),lO(129,`medium`),wg(),lO(130,`.`),wg(),jc(131,`blockquote`)(132,`p`),lO(133,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(134,`code`),lO(135,`medium`),wg(),lO(136,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(137,`a`,24),lO(138,`po-theme`),wg(),lO(139,`.`),wg()()()(),jc(140,`tr`,13)(141,`td`,14)(142,`div`,15)(143,`span`,16),lO(144,` p-url`),nu(145,`br`),wg()()(),jc(146,`td`,17)(147,`code`,18),lO(148,`string`),wg()(),jc(149,`td`,19),lO(150,`-`),wg(),jc(151,`td`,20)(152,`em`)(153,`strong`),lO(154,`(opcional)`),wg()(),jc(155,`p`),lO(156,`Ao informar uma URL, o conteúdo será exibido na forma de um `),jc(157,`em`),lO(158,`link`),wg(),lO(159,` e ao ser clicado será redirecionado para a URL informada.`),wg(),jc(160,`blockquote`)(161,`p`),lO(162,`Caso informar `),jc(163,`code`),lO(164,`http://`),wg(),lO(165,` ser\xE1 aberto uma nova aba.
Caso informar um caminho relativo, exemplo: `),jc(166,`code`),lO(167,`/customers`),wg(),lO(168,`, será aberto na aba atual.`),wg()()()(),jc(169,`tr`,13)(170,`td`,14)(171,`div`,15)(172,`span`,16),lO(173,` p-value`),nu(174,`br`),wg()()(),jc(175,`td`,17)(176,`code`,18),lO(177,`string`),wg()(),jc(178,`td`,19),lO(179,`-`),wg(),jc(180,`td`,20)(181,`em`)(182,`strong`),lO(183,`(opcional)`),wg()(),jc(184,`p`),lO(185,`Valor do conteúdo a ser exibido.`),wg()()()(),jc(186,`h3`),lO(187,`Enums`),wg(),jc(188,`h4`,4)(189,`code`,5),lO(190,`PoInfoOrientation`),wg()(),jc(191,`div`,2)(192,`p`),lO(193,`Define os tipos de orientações disponíveis para o `),jc(194,`code`),lO(195,`po-info`),wg(),lO(196,`.`),wg()(),jc(197,`h4`,9),lO(198,`Propriedades`),wg(),jc(199,`table`,10)(200,`tr`,11)(201,`th`,12),lO(202,`Nome`),wg(),jc(203,`th`,12),lO(204,`Descrição`),wg()(),jc(205,`tr`,13)(206,`td`,14)(207,`div`,15)(208,`span`,16),lO(209,` Horizontal`),nu(210,`br`),wg()()(),jc(211,`td`,20)(212,`p`),lO(213,`O valor será exibido na horizontal, ao lado direito em relação ao label.`),wg()()(),jc(214,`tr`,13)(215,`td`,14)(216,`div`,15)(217,`span`,16),lO(218,` Vertical`),nu(219,`br`),wg()()(),jc(220,`td`,20)(221,`p`),lO(222,`Exibe o valor na vertical, ou seja, abaixo do label.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function he(o,Ce){if(o&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-info-basic-view`)(2,`sample-po-info-labs-view`),wg()}if(o&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var Se=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Info`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,he,3,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-info-doc`),wg()()()),a&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,oe,ae,le],encapsulation:2,changeDetection:1})}return o})()}];var pe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[I1.forChild(Se),I1]})}return o})();var qe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[M,pe]})}return o})();export{qe as DocPoInfoModule};
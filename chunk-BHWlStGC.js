import{m as P,p as M}from"./main-ZE6YMYJ4.js";import{Er as GV,Gi as _t,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Pr as I$1,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,ca as ge,ea as de,er as Ab,lt as Ss,qr as Mk,ro as wg,tr as An}from"./chunk-CTJH0VS3.js";var C=(()=>{class o{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:178,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[`data-tour`,`api-related`,1,`docs-api-related`],[`p-value`,`Table`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-table-row-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-table-row-template-show`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-table-row-template-arrow-direction`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`],[`id`,`enum-po-table-row-template-arrow-direction`,1,`docs-api-class-name`],[`id`,`enum-po-table-row-template-arrow-direction-left`,1,`docs-api-properties-row`],[`id`,`enum-po-table-row-template-arrow-direction-right`,1,`docs-api-properties-row`]],template:function(n,l){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-table`),Kg()(),Jc(7,`blockquote`,3)(8,`strong`),Mk(9,`Faz parte de:`),Kg(),Jc(10,`po-tag`,4),_t(`p-click`,function(){return l.openDoc(`po-table`)}),Kg()(),Jc(11,`h3`,5),Mk(12,`Componente`),Kg(),Jc(13,`h4`,6)(14,`code`,7),Mk(15,`PoTableRowTemplateDirective`),Kg()(),Jc(16,`div`,2)(17,`p`),Mk(18,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),Kg(),Jc(19,`blockquote`)(20,`p`),Mk(21,`Quando utilizada, sobrepõe as funcionalidade básicas do `),Jc(22,`em`),Mk(23,`master-detail`),Kg(),Mk(24,`.`),Kg()(),Jc(25,`p`),Mk(26,`Em seu uso, deve-se utilizar como parâmetro a referência da `),Jc(27,`em`),Mk(28,`linha`),Kg(),Mk(29,` e/ou `),Jc(30,`em`),Mk(31,`índice`),Kg(),Mk(32,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),Kg(),Jc(33,`ul`)(34,`li`),Mk(35,`Linha: `),Jc(36,`code`),Mk(37,`row`),Kg(),Mk(38,` determina o item da linha corrente.`),Kg(),Jc(39,`li`),Mk(40,`Índice: `),Jc(41,`code`),Mk(42,`rowIndex`),Kg(),Mk(43,` determina o índice da linha corrente.`),Kg()(),Jc(44,`p`),Mk(45,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Jc(46,`em`),Mk(47,`syntax sugar`),Kg(),Mk(48,`. Veja a seguir ambos, respectivamente:`),Kg(),Jc(49,`pre`)(50,`code`),Mk(51,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),Kg()(),Jc(52,`pre`)(53,`code`),Mk(54,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),Kg()(),Jc(55,`p`),Mk(56,`A diretiva `),Jc(57,`strong`),Mk(58,`p-table-row-template`),Kg(),Mk(59,`, possibilita também que determinada linha apresente ou não seu `),Jc(60,`em`),Mk(61,`template`),Kg(),Mk(62,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Jc(63,`code`),Mk(64,`p-table-row-template-show`),Kg(),Mk(65,`,
a mesma deve retornar um valor do tipo `),Jc(66,`em`),Mk(67,`boolean`),Kg(),Mk(68,`. Veja o exemplo a seguir:`),Kg(),Jc(69,`pre`)(70,`code`),Mk(71,`...
@Component({
   selector: 'app-root',
   templateUrl: \`
     ...
     <po-table
       [p-columns]="columns"
       [p-items]="items">
         <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isUndelivered">
           <detail-row [row]="rowItem"> </detail-row>
         </div>
     ...
   \`
})
export class AppComponent {
   public dataTable = [{
     code: 1200,
     product: 'Rice',
     costumer: 'Supermarket 1',
     quantity: 3,
     status: 'delivered',
     license_plate: 'MDJD9191',
     batch_product: 18041822,
     driver: 'Jos\xE9 Oliveira'
   }, {
     code: 1355,
     product: 'Bean',
     costumer: 'Supermarket 2',
     quantity: 1,
     status: 'transport',
     license_plate: 'XXA5454',
     batch_product: 18041821,
     driver: 'Francisco Pereira'
   }];

   isUndelivered(row, index: number) {
     return row.status !== 'delivered';
   }
}
`),Kg()(),Jc(72,`blockquote`)(73,`p`),Mk(74,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),Jc(75,`code`),Mk(76,`status`),Kg(),Mk(77,`
n\xE3o correspondam \xE0 `),Jc(78,`em`),Mk(79,`delivered`),Kg(),Mk(80,`.`),Kg()()(),Jc(81,`div`,8)(82,`h4`,9),Mk(83,`Seletor`),Kg(),Jc(84,`pre`,10),Mk(85,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),Kg()(),Jc(86,`h4`,11),Mk(87,`Propriedades`),Kg(),Jc(88,`table`,12)(89,`tr`,13)(90,`th`,14),Mk(91,`Nome`),Kg(),Jc(92,`th`,14),Mk(93,`Tipo`),Kg(),Jc(94,`th`,14),Mk(95,`Padrão`),Kg(),Jc(96,`th`,14),Mk(97,`Descrição`),Kg()(),Jc(98,`tr`,15)(99,`td`,16)(100,`div`,17)(101,`span`,18),Mk(102,` p-table-row-template-show`),_u(103,`br`),Kg()()(),Jc(104,`td`,19)(105,`code`,20),Mk(106,`(row: any, index: number) => boolean`),Kg()(),Jc(107,`td`,21)(108,`p`)(109,`code`),Mk(110,`true`),Kg()()(),Jc(111,`td`,22)(112,`em`)(113,`strong`),Mk(114,`(opcional)`),Kg()(),Jc(115,`p`),Mk(116,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),Kg(),Jc(117,`p`),Mk(118,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),Kg()()(),Jc(119,`tr`,23)(120,`td`,16)(121,`div`,17)(122,`span`,18),Mk(123,` p-table-row-template-arrow-direction`),_u(124,`br`),Kg()()(),Jc(125,`td`,19)(126,`code`,24),Mk(127,`PoTableRowTemplateArrowDirection`),Kg()(),Jc(128,`td`,21)(129,`p`)(130,`code`),Mk(131,`'LEFT'`),Kg()()(),Jc(132,`td`,22)(133,`em`)(134,`strong`),Mk(135,`(opcional)`),Kg()(),Jc(136,`p`),Mk(137,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),Kg()()()(),Jc(138,`h3`),Mk(139,`Enums`),Kg(),Jc(140,`h4`,25)(141,`code`,7),Mk(142,`PoTableRowTemplateArrowDirection`),Kg()(),Jc(143,`div`,2)(144,`p`),Mk(145,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),Kg()(),Jc(146,`h4`,11),Mk(147,`Propriedades`),Kg(),Jc(148,`table`,12)(149,`tr`,13)(150,`th`,14),Mk(151,`Nome`),Kg(),Jc(152,`th`,14),Mk(153,`Descrição`),Kg()(),Jc(154,`tr`,26)(155,`td`,16)(156,`div`,17)(157,`span`,18),Mk(158,` Left`),_u(159,`br`),Kg()()(),Jc(160,`td`,22)(161,`p`),Mk(162,`Posiciona a `),Jc(163,`em`),Mk(164,`arrow`),Kg(),Mk(165,` na esquerda. (Padrão)`),Kg()()(),Jc(166,`tr`,27)(167,`td`,16)(168,`div`,17)(169,`span`,18),Mk(170,` Right`),_u(171,`br`),Kg()()(),Jc(172,`td`,22)(173,`p`),Mk(174,`Posiciona a `),Jc(175,`em`),Mk(176,`arrow`),Kg(),Mk(177,` na direita`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return o})();function I(o,F){if(o&1&&_u(0,`div`,1),o&2){let a=tk();Ab(`hidden`,a.activeTab!==`web`)}}var k=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`Table Row Template`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Table Row Template · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(n,l){n&1&&(Jc(0,`po-page-default`,0),LO(1,I,1,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-table-row-template-doc`),Kg()()),n&2&&(Ab(`p-title`,l.title)(`p-actions`,l.actions),wg(),jO(l.hidePoWebSample?-1:1),wg(),Ab(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,C],encapsulation:2,changeDetection:1})}return o})()}];var q=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(k),GV]})}return o})();var Z=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,q]})}return o})();export{Z as DocPoTableRowTemplateModule};
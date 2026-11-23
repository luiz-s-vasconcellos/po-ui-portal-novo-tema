import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I$1,Ha as p,Lr as Kg,Oi as VO,Pr as Jn,Qi as ar,W as Mze,ao as vu,ar as An,ca as ek,da as ge,gi as Rb,io as vt,li as Qc,lt as Ss,ra as de,so as wg,vi as Sk,wr as GV,xr as FO}from"./chunk-BQDTQO8h.js";var C=(()=>{class o{router=p(An);openDoc(a){this.router.navigate([`/documentation`,a],{queryParams:{view:`doc`}})}static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:178,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Table`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-table-row-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-table-row-template-show`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-table-row-template-arrow-direction`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`],[`id`,`enum-po-table-row-template-arrow-direction`,1,`docs-api-class-name`],[`id`,`enum-po-table-row-template-arrow-direction-left`,1,`docs-api-properties-row`],[`id`,`enum-po-table-row-template-arrow-direction-right`,1,`docs-api-properties-row`]],template:function(n,l){n&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-table`),Kg()(),Qc(7,`blockquote`,3)(8,`strong`),Sk(9,`Faz parte de:`),Kg(),Qc(10,`po-tag`,4),vt(`p-click`,function(){return l.openDoc(`po-table`)}),Kg()(),Qc(11,`h3`,5),Sk(12,`Componente`),Kg(),Qc(13,`h4`,6)(14,`code`,7),Sk(15,`PoTableRowTemplateDirective`),Kg()(),Qc(16,`div`,2)(17,`p`),Sk(18,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),Kg(),Qc(19,`blockquote`)(20,`p`),Sk(21,`Quando utilizada, sobrepõe as funcionalidade básicas do `),Qc(22,`em`),Sk(23,`master-detail`),Kg(),Sk(24,`.`),Kg()(),Qc(25,`p`),Sk(26,`Em seu uso, deve-se utilizar como parâmetro a referência da `),Qc(27,`em`),Sk(28,`linha`),Kg(),Sk(29,` e/ou `),Qc(30,`em`),Sk(31,`índice`),Kg(),Sk(32,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),Kg(),Qc(33,`ul`)(34,`li`),Sk(35,`Linha: `),Qc(36,`code`),Sk(37,`row`),Kg(),Sk(38,` determina o item da linha corrente.`),Kg(),Qc(39,`li`),Sk(40,`Índice: `),Qc(41,`code`),Sk(42,`rowIndex`),Kg(),Sk(43,` determina o índice da linha corrente.`),Kg()(),Qc(44,`p`),Sk(45,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Qc(46,`em`),Sk(47,`syntax sugar`),Kg(),Sk(48,`. Veja a seguir ambos, respectivamente:`),Kg(),Qc(49,`pre`)(50,`code`),Sk(51,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),Kg()(),Qc(52,`pre`)(53,`code`),Sk(54,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),Kg()(),Qc(55,`p`),Sk(56,`A diretiva `),Qc(57,`strong`),Sk(58,`p-table-row-template`),Kg(),Sk(59,`, possibilita também que determinada linha apresente ou não seu `),Qc(60,`em`),Sk(61,`template`),Kg(),Sk(62,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Qc(63,`code`),Sk(64,`p-table-row-template-show`),Kg(),Sk(65,`,
a mesma deve retornar um valor do tipo `),Qc(66,`em`),Sk(67,`boolean`),Kg(),Sk(68,`. Veja o exemplo a seguir:`),Kg(),Qc(69,`pre`)(70,`code`),Sk(71,`...
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
`),Kg()(),Qc(72,`blockquote`)(73,`p`),Sk(74,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),Qc(75,`code`),Sk(76,`status`),Kg(),Sk(77,`
n\xE3o correspondam \xE0 `),Qc(78,`em`),Sk(79,`delivered`),Kg(),Sk(80,`.`),Kg()()(),Qc(81,`div`,8)(82,`h4`,9),Sk(83,`Seletor`),Kg(),Qc(84,`pre`,10),Sk(85,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),Kg()(),Qc(86,`h4`,11),Sk(87,`Propriedades`),Kg(),Qc(88,`table`,12)(89,`tr`,13)(90,`th`,14),Sk(91,`Nome`),Kg(),Qc(92,`th`,14),Sk(93,`Tipo`),Kg(),Qc(94,`th`,14),Sk(95,`Padrão`),Kg(),Qc(96,`th`,14),Sk(97,`Descrição`),Kg()(),Qc(98,`tr`,15)(99,`td`,16)(100,`div`,17)(101,`span`,18),Sk(102,` p-table-row-template-show`),vu(103,`br`),Kg()()(),Qc(104,`td`,19)(105,`code`,20),Sk(106,`(row: any, index: number) => boolean`),Kg()(),Qc(107,`td`,21)(108,`p`)(109,`code`),Sk(110,`true`),Kg()()(),Qc(111,`td`,22)(112,`em`)(113,`strong`),Sk(114,`(opcional)`),Kg()(),Qc(115,`p`),Sk(116,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),Kg(),Qc(117,`p`),Sk(118,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),Kg()()(),Qc(119,`tr`,23)(120,`td`,16)(121,`div`,17)(122,`span`,18),Sk(123,` p-table-row-template-arrow-direction`),vu(124,`br`),Kg()()(),Qc(125,`td`,19)(126,`code`,24),Sk(127,`PoTableRowTemplateArrowDirection`),Kg()(),Qc(128,`td`,21)(129,`p`)(130,`code`),Sk(131,`'LEFT'`),Kg()()(),Qc(132,`td`,22)(133,`em`)(134,`strong`),Sk(135,`(opcional)`),Kg()(),Qc(136,`p`),Sk(137,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),Kg()()()(),Qc(138,`h3`),Sk(139,`Enums`),Kg(),Qc(140,`h4`,25)(141,`code`,7),Sk(142,`PoTableRowTemplateArrowDirection`),Kg()(),Qc(143,`div`,2)(144,`p`),Sk(145,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),Kg()(),Qc(146,`h4`,11),Sk(147,`Propriedades`),Kg(),Qc(148,`table`,12)(149,`tr`,13)(150,`th`,14),Sk(151,`Nome`),Kg(),Qc(152,`th`,14),Sk(153,`Descrição`),Kg()(),Qc(154,`tr`,26)(155,`td`,16)(156,`div`,17)(157,`span`,18),Sk(158,` Left`),vu(159,`br`),Kg()()(),Qc(160,`td`,22)(161,`p`),Sk(162,`Posiciona a `),Qc(163,`em`),Sk(164,`arrow`),Kg(),Sk(165,` na esquerda. (Padrão)`),Kg()()(),Qc(166,`tr`,27)(167,`td`,16)(168,`div`,17)(169,`span`,18),Sk(170,` Right`),vu(171,`br`),Kg()()(),Qc(172,`td`,22)(173,`p`),Sk(174,`Posiciona a `),Qc(175,`em`),Sk(176,`arrow`),Kg(),Sk(177,` na direita`),Kg()()()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return o})();function I(o,F){if(o&1&&vu(0,`div`,1),o&2){let a=ek();Rb(`hidden`,a.activeTab!==`web`)}}var k=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;title=`Table Row Template`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`,this.title=`Table Row Template · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(n,l){n&1&&(Qc(0,`po-page-default`,0),FO(1,I,1,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-table-row-template-doc`),Kg()()),n&2&&(Rb(`p-title`,l.title)(`p-actions`,l.actions),wg(),VO(l.hidePoWebSample?-1:1),wg(),Rb(`hidden`,l.activeTab!==`doc`))},dependencies:[Mze,C],encapsulation:2,changeDetection:1})}return o})()}];var q=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(k),GV]})}return o})();var Z=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,q]})}return o})();export{Z as DocPoTableRowTemplateModule};
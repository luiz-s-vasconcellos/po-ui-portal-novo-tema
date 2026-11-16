import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I$1,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var q=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:179,vars:0,consts:[[1,`docs-api`],[1,`docs-api-part-of`],[`href`,`/documentation/po-table?view=doc`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-table-row-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-table-row-template-show`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-table-row-template-arrow-direction`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`],[`id`,`enum-po-table-row-template-arrow-direction`,1,`docs-api-class-name`],[`id`,`enum-po-table-row-template-arrow-direction-left`,1,`docs-api-properties-row`],[`id`,`enum-po-table-row-template-arrow-direction-right`,1,`docs-api-properties-row`]],template:function(n,r){n&1&&(Qc(0,`div`,0)(1,`p`,1),Sk(2,` Faz parte de `),Qc(3,`a`,2),Sk(4,`Table`),Kg(),Sk(5,`. `),Kg(),Qc(6,`p`,3)(7,`code`),Sk(8,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Qc(9,`div`,4)(10,`p`),Sk(11,`Módulo do componente po-table`),Kg()(),Qc(12,`h3`,5),Sk(13,`Componente`),Kg(),Qc(14,`h4`,6)(15,`code`,7),Sk(16,`PoTableRowTemplateDirective`),Kg()(),Qc(17,`div`,4)(18,`p`),Sk(19,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),Kg(),Qc(20,`blockquote`)(21,`p`),Sk(22,`Quando utilizada, sobrepõe as funcionalidade básicas do `),Qc(23,`em`),Sk(24,`master-detail`),Kg(),Sk(25,`.`),Kg()(),Qc(26,`p`),Sk(27,`Em seu uso, deve-se utilizar como parâmetro a referência da `),Qc(28,`em`),Sk(29,`linha`),Kg(),Sk(30,` e/ou `),Qc(31,`em`),Sk(32,`índice`),Kg(),Sk(33,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),Kg(),Qc(34,`ul`)(35,`li`),Sk(36,`Linha: `),Qc(37,`code`),Sk(38,`row`),Kg(),Sk(39,` determina o item da linha corrente.`),Kg(),Qc(40,`li`),Sk(41,`Índice: `),Qc(42,`code`),Sk(43,`rowIndex`),Kg(),Sk(44,` determina o índice da linha corrente.`),Kg()(),Qc(45,`p`),Sk(46,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Qc(47,`em`),Sk(48,`syntax sugar`),Kg(),Sk(49,`. Veja a seguir ambos, respectivamente:`),Kg(),Qc(50,`pre`)(51,`code`),Sk(52,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),Kg()(),Qc(53,`pre`)(54,`code`),Sk(55,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),Kg()(),Qc(56,`p`),Sk(57,`A diretiva `),Qc(58,`strong`),Sk(59,`p-table-row-template`),Kg(),Sk(60,`, possibilita também que determinada linha apresente ou não seu `),Qc(61,`em`),Sk(62,`template`),Kg(),Sk(63,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Qc(64,`code`),Sk(65,`p-table-row-template-show`),Kg(),Sk(66,`,
a mesma deve retornar um valor do tipo `),Qc(67,`em`),Sk(68,`boolean`),Kg(),Sk(69,`. Veja o exemplo a seguir:`),Kg(),Qc(70,`pre`)(71,`code`),Sk(72,`...
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
`),Kg()(),Qc(73,`blockquote`)(74,`p`),Sk(75,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),Qc(76,`code`),Sk(77,`status`),Kg(),Sk(78,`
n\xE3o correspondam \xE0 `),Qc(79,`em`),Sk(80,`delivered`),Kg(),Sk(81,`.`),Kg()()(),Qc(82,`div`,8)(83,`h4`,9),Sk(84,`Seletor`),Kg(),Qc(85,`pre`,10),Sk(86,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),Kg()(),Qc(87,`h4`,11),Sk(88,`Propriedades`),Kg(),Qc(89,`table`,12)(90,`tr`,13)(91,`th`,14),Sk(92,`Nome`),Kg(),Qc(93,`th`,14),Sk(94,`Tipo`),Kg(),Qc(95,`th`,14),Sk(96,`Padrão`),Kg(),Qc(97,`th`,14),Sk(98,`Descrição`),Kg()(),Qc(99,`tr`,15)(100,`td`,16)(101,`div`,17)(102,`span`,18),Sk(103,` p-table-row-template-show`),vu(104,`br`),Kg()()(),Qc(105,`td`,19)(106,`code`,20),Sk(107,`(row: any, index: number) => boolean`),Kg()(),Qc(108,`td`,21)(109,`p`)(110,`code`),Sk(111,`true`),Kg()()(),Qc(112,`td`,22)(113,`em`)(114,`strong`),Sk(115,`(opcional)`),Kg()(),Qc(116,`p`),Sk(117,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),Kg(),Qc(118,`p`),Sk(119,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),Kg()()(),Qc(120,`tr`,23)(121,`td`,16)(122,`div`,17)(123,`span`,18),Sk(124,` p-table-row-template-arrow-direction`),vu(125,`br`),Kg()()(),Qc(126,`td`,19)(127,`code`,24),Sk(128,`PoTableRowTemplateArrowDirection`),Kg()(),Qc(129,`td`,21)(130,`p`)(131,`code`),Sk(132,`'LEFT'`),Kg()()(),Qc(133,`td`,22)(134,`em`)(135,`strong`),Sk(136,`(opcional)`),Kg()(),Qc(137,`p`),Sk(138,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),Kg()()()(),Qc(139,`h3`),Sk(140,`Enums`),Kg(),Qc(141,`h4`,25)(142,`code`,7),Sk(143,`PoTableRowTemplateArrowDirection`),Kg()(),Qc(144,`div`,4)(145,`p`),Sk(146,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),Kg()(),Qc(147,`h4`,11),Sk(148,`Propriedades`),Kg(),Qc(149,`table`,12)(150,`tr`,13)(151,`th`,14),Sk(152,`Nome`),Kg(),Qc(153,`th`,14),Sk(154,`Descrição`),Kg()(),Qc(155,`tr`,26)(156,`td`,16)(157,`div`,17)(158,`span`,18),Sk(159,` Left`),vu(160,`br`),Kg()()(),Qc(161,`td`,22)(162,`p`),Sk(163,`Posiciona a `),Qc(164,`em`),Sk(165,`arrow`),Kg(),Sk(166,` na esquerda. (Padrão)`),Kg()()(),Qc(167,`tr`,27)(168,`td`,16)(169,`div`,17)(170,`span`,18),Sk(171,` Right`),vu(172,`br`),Kg()()(),Qc(173,`td`,22)(174,`p`),Sk(175,`Posiciona a `),Qc(176,`em`),Sk(177,`arrow`),Kg(),Sk(178,` na direita`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function F(o,A){if(o&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let r=ek();return U_(r.changeTab(`web`))}),Kg()}if(o&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var k=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Row Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,r){n&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,F,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),vu(4,`sample-po-table-row-template-doc`),Kg()()()),n&2&&(Rb(`p-actions`,r.actions),wg(2),VO(r.hidePoWebSample?-1:2),wg(),Rb(`p-active`,r.activeTab===`doc`))},dependencies:[Mze,tre,are,q],encapsulation:2,changeDetection:1})}return o})()}];var I=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[GV.forChild(k),GV]})}return o})();var Y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,I]})}return o})();export{Y as DocPoTableRowTemplateModule};
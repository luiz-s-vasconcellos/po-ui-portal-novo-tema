import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ri as Zg,Vi as _u,ea as ge,er as An,fi as Rb,gi as Tk,kr as I$1,nr as BO,qi as de,va as nk,xi as VO,yi as U_}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var q=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:174,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`]],template:function(n,r){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoTableModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-table`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoTableRowTemplateDirective`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),Zg(),Jc(15,`blockquote`)(16,`p`),Tk(17,`Quando utilizada, sobrepõe as funcionalidade básicas do `),Jc(18,`em`),Tk(19,`master-detail`),Zg(),Tk(20,`.`),Zg()(),Jc(21,`p`),Tk(22,`Em seu uso, deve-se utilizar como parâmetro a referência da `),Jc(23,`em`),Tk(24,`linha`),Zg(),Tk(25,` e/ou `),Jc(26,`em`),Tk(27,`índice`),Zg(),Tk(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),Zg(),Jc(29,`ul`)(30,`li`),Tk(31,`Linha: `),Jc(32,`code`),Tk(33,`row`),Zg(),Tk(34,` determina o item da linha corrente.`),Zg(),Jc(35,`li`),Tk(36,`Índice: `),Jc(37,`code`),Tk(38,`rowIndex`),Zg(),Tk(39,` determina o índice da linha corrente.`),Zg()(),Jc(40,`p`),Tk(41,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Jc(42,`em`),Tk(43,`syntax sugar`),Zg(),Tk(44,`. Veja a seguir ambos, respectivamente:`),Zg(),Jc(45,`pre`)(46,`code`),Tk(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),Zg()(),Jc(48,`pre`)(49,`code`),Tk(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),Zg()(),Jc(51,`p`),Tk(52,`A diretiva `),Jc(53,`strong`),Tk(54,`p-table-row-template`),Zg(),Tk(55,`, possibilita também que determinada linha apresente ou não seu `),Jc(56,`em`),Tk(57,`template`),Zg(),Tk(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),Jc(59,`code`),Tk(60,`p-table-row-template-show`),Zg(),Tk(61,`,
a mesma deve retornar um valor do tipo `),Jc(62,`em`),Tk(63,`boolean`),Zg(),Tk(64,`. Veja o exemplo a seguir:`),Zg(),Jc(65,`pre`)(66,`code`),Tk(67,`...
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
`),Zg()(),Jc(68,`blockquote`)(69,`p`),Tk(70,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),Jc(71,`code`),Tk(72,`status`),Zg(),Tk(73,`
n\xE3o correspondam \xE0 `),Jc(74,`em`),Tk(75,`delivered`),Zg(),Tk(76,`.`),Zg()()(),Jc(77,`div`,6)(78,`h4`,7),Tk(79,`Seletor`),Zg(),Jc(80,`pre`,8),Tk(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),Zg()(),Jc(82,`h4`,9),Tk(83,`Propriedades`),Zg(),Jc(84,`table`,10)(85,`tr`,11)(86,`th`,12),Tk(87,`Nome`),Zg(),Jc(88,`th`,12),Tk(89,`Tipo`),Zg(),Jc(90,`th`,12),Tk(91,`Padrão`),Zg(),Jc(92,`th`,12),Tk(93,`Descrição`),Zg()(),Jc(94,`tr`,13)(95,`td`,14)(96,`div`,15)(97,`span`,16),Tk(98,` p-table-row-template-show`),_u(99,`br`),Zg()()(),Jc(100,`td`,17)(101,`code`,18),Tk(102,`(row: any, index: number) => boolean`),Zg()(),Jc(103,`td`,19)(104,`p`)(105,`code`),Tk(106,`true`),Zg()()(),Jc(107,`td`,20)(108,`em`)(109,`strong`),Tk(110,`(opcional)`),Zg()(),Jc(111,`p`),Tk(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),Zg(),Jc(113,`p`),Tk(114,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),Zg()()(),Jc(115,`tr`,13)(116,`td`,14)(117,`div`,15)(118,`span`,16),Tk(119,` p-table-row-template-arrow-direction`),_u(120,`br`),Zg()()(),Jc(121,`td`,17)(122,`code`,21),Tk(123,`PoTableRowTemplateArrowDirection`),Zg()(),Jc(124,`td`,19)(125,`p`)(126,`code`),Tk(127,`'LEFT'`),Zg()()(),Jc(128,`td`,20)(129,`em`)(130,`strong`),Tk(131,`(opcional)`),Zg()(),Jc(132,`p`),Tk(133,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),Zg()()()(),Jc(134,`h3`),Tk(135,`Enums`),Zg(),Jc(136,`h4`,4)(137,`code`,5),Tk(138,`PoTableRowTemplateArrowDirection`),Zg()(),Jc(139,`div`,2)(140,`p`),Tk(141,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),Zg()(),Jc(142,`h4`,9),Tk(143,`Propriedades`),Zg(),Jc(144,`table`,10)(145,`tr`,11)(146,`th`,12),Tk(147,`Nome`),Zg(),Jc(148,`th`,12),Tk(149,`Descrição`),Zg()(),Jc(150,`tr`,13)(151,`td`,14)(152,`div`,15)(153,`span`,16),Tk(154,` Left`),_u(155,`br`),Zg()()(),Jc(156,`td`,20)(157,`p`),Tk(158,`Posiciona a `),Jc(159,`em`),Tk(160,`arrow`),Zg(),Tk(161,` na esquerda. (Padrão)`),Zg()()(),Jc(162,`tr`,13)(163,`td`,14)(164,`div`,15)(165,`span`,16),Tk(166,` Right`),_u(167,`br`),Zg()()(),Jc(168,`td`,20)(169,`p`),Tk(170,`Posiciona a `),Jc(171,`em`),Tk(172,`arrow`),Zg(),Tk(173,` na direita`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function k(o,A){if(o&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let r=nk();return H_(r.changeTab(`web`))}),Zg()}if(o&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var F=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Row Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,r){n&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,k,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return r.changeTab(`doc`)}),_u(4,`sample-po-table-row-template-doc`),Zg()()()),n&2&&(Rb(`p-actions`,r.actions),Ig(2),BO(r.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,r.activeTab===`doc`))},dependencies:[Mze,tre,are,q],encapsulation:2,changeDetection:1})}return o})()}];var I=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(F),WV]})}return o})();var Y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,I]})}return o})();export{Y as DocPoTableRowTemplateModule};
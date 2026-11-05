import{Ai as Zn,Ia as rg,Ka as vx,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Sa as nu,Tr as Fx,Ua as v_,Xa as wg,_r as Dx,_t as Vze,aa as ir,ca as jc,di as UE,ha as lO,ir as Ax,ln as lre,oi as Sn,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var q=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-table-row-template-doc`]],standalone:!1,decls:174,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`(row:`,`any,`,`index:`,`number)`,`=>`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`PoTableRowTemplateArrowDirection`]],template:function(n,r){n&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoTableModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-table`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoTableRowTemplateDirective`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`Esta diretiva permite que seja apresentada informa\xE7\xF5es adicionais a respeito de uma determinada linha de
dados, de forma que possam ser exibidas e ocultadas atrav\xE9s do bot\xE3o de acionamento.`),wg(),jc(15,`blockquote`)(16,`p`),lO(17,`Quando utilizada, sobrepõe as funcionalidade básicas do `),jc(18,`em`),lO(19,`master-detail`),wg(),lO(20,`.`),wg()(),jc(21,`p`),lO(22,`Em seu uso, deve-se utilizar como parâmetro a referência da `),jc(23,`em`),lO(24,`linha`),wg(),lO(25,` e/ou `),jc(26,`em`),lO(27,`índice`),wg(),lO(28,`, sendo por padr\xE3o linha. Caso n\xE3o seja declarado,
o componente n\xE3o exibir\xE1 conte\xFAdo.`),wg(),jc(29,`ul`)(30,`li`),lO(31,`Linha: `),jc(32,`code`),lO(33,`row`),wg(),lO(34,` determina o item da linha corrente.`),wg(),jc(35,`li`),lO(36,`Índice: `),jc(37,`code`),lO(38,`rowIndex`),wg(),lO(39,` determina o índice da linha corrente.`),wg()(),jc(40,`p`),lO(41,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),jc(42,`em`),lO(43,`syntax sugar`),wg(),lO(44,`. Veja a seguir ambos, respectivamente:`),wg(),jc(45,`pre`)(46,`code`),lO(47,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-row-template let-rowItem let-i="rowIndex" [p-table-row-template-show]="isShow">
      <detail-row [row]="rowItem"></detail-row>
    </ng-template>
...
`),wg()(),jc(48,`pre`)(49,`code`),lO(50,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <div *p-table-row-template="let rowItem, let i=rowIndex">
      <detail-row [row]="rowItem"></detail-row>
    </div>
...
`),wg()(),jc(51,`p`),lO(52,`A diretiva `),jc(53,`strong`),lO(54,`p-table-row-template`),wg(),lO(55,`, possibilita também que determinada linha apresente ou não seu `),jc(56,`em`),lO(57,`template`),wg(),lO(58,`. Para isto,
\xE9 necess\xE1rio atribuir a refer\xEAncia da fun\xE7\xE3o que faz esta verifica\xE7\xE3o, \xE0 propriedade `),jc(59,`code`),lO(60,`p-table-row-template-show`),wg(),lO(61,`,
a mesma deve retornar um valor do tipo `),jc(62,`em`),lO(63,`boolean`),wg(),lO(64,`. Veja o exemplo a seguir:`),wg(),jc(65,`pre`)(66,`code`),lO(67,`...
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
`),wg()(),jc(68,`blockquote`)(69,`p`),lO(70,`No exemplo acima, somente será disponibilizado os detalhes de informações nas linhas cujo o valor de `),jc(71,`code`),lO(72,`status`),wg(),lO(73,`
n\xE3o correspondam \xE0 `),jc(74,`em`),lO(75,`delivered`),wg(),lO(76,`.`),wg()()(),jc(77,`div`,6)(78,`h4`,7),lO(79,`Seletor`),wg(),jc(80,`pre`,8),lO(81,`<[p-table-row-template]
    p-table-row-template-show="(row: any, index: number) => boolean"
    p-table-row-template-arrow-direction="PoTableRowTemplateArrowDirection" >
</[p-table-row-template]>
`),wg()(),jc(82,`h4`,9),lO(83,`Propriedades`),wg(),jc(84,`table`,10)(85,`tr`,11)(86,`th`,12),lO(87,`Nome`),wg(),jc(88,`th`,12),lO(89,`Tipo`),wg(),jc(90,`th`,12),lO(91,`Padrão`),wg(),jc(92,`th`,12),lO(93,`Descrição`),wg()(),jc(94,`tr`,13)(95,`td`,14)(96,`div`,15)(97,`span`,16),lO(98,` p-table-row-template-show`),nu(99,`br`),wg()()(),jc(100,`td`,17)(101,`code`,18),lO(102,`(row: any, index: number) => boolean`),wg()(),jc(103,`td`,19)(104,`p`)(105,`code`),lO(106,`true`),wg()()(),jc(107,`td`,20)(108,`em`)(109,`strong`),lO(110,`(opcional)`),wg()(),jc(111,`p`),lO(112,`Fun\xE7\xE3o que deve retornar um valor booleano, informando se apresentar\xE1 o template da linha.
Ser\xE3o passados o objeto da linha e o indice da mesma por par\xE2metro, para que seja poss\xEDvel
tomar uma decis\xE3o a partir do objeto da linha corrente.`),wg(),jc(113,`p`),lO(114,`Caso não ser utilizado esta propriedade, serão apresentados todos os detalhes das linhas.`),wg()()(),jc(115,`tr`,13)(116,`td`,14)(117,`div`,15)(118,`span`,16),lO(119,` p-table-row-template-arrow-direction`),nu(120,`br`),wg()()(),jc(121,`td`,17)(122,`code`,21),lO(123,`PoTableRowTemplateArrowDirection`),wg()(),jc(124,`td`,19)(125,`p`)(126,`code`),lO(127,`'LEFT'`),wg()()(),jc(128,`td`,20)(129,`em`)(130,`strong`),lO(131,`(opcional)`),wg()(),jc(132,`p`),lO(133,`Propriedade responsável por informar a posição do colapse que abrirá os detalhes da linha.`),wg()()()(),jc(134,`h3`),lO(135,`Enums`),wg(),jc(136,`h4`,4)(137,`code`,5),lO(138,`PoTableRowTemplateArrowDirection`),wg()(),jc(139,`div`,2)(140,`p`),lO(141,`Define a posição da arrow que expande o * row template* na tabela, será exibida na esquerda ou direita.`),wg()(),jc(142,`h4`,9),lO(143,`Propriedades`),wg(),jc(144,`table`,10)(145,`tr`,11)(146,`th`,12),lO(147,`Nome`),wg(),jc(148,`th`,12),lO(149,`Descrição`),wg()(),jc(150,`tr`,13)(151,`td`,14)(152,`div`,15)(153,`span`,16),lO(154,` Left`),nu(155,`br`),wg()()(),jc(156,`td`,20)(157,`p`),lO(158,`Posiciona a `),jc(159,`em`),lO(160,`arrow`),wg(),lO(161,` na esquerda. (Padrão)`),wg()()(),jc(162,`tr`,13)(163,`td`,14)(164,`div`,15)(165,`span`,16),lO(166,` Right`),nu(167,`br`),wg()()(),jc(168,`td`,20)(169,`p`),lO(170,`Posiciona a `),jc(171,`em`),lO(172,`arrow`),wg(),lO(173,` na direita`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function k(o,A){if(o&1){let a=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(a);let r=Fx();return __(r.changeTab(`web`))}),wg()}if(o&2){let a=Fx();UE(`p-active`,a.activeTab===`web`)}}var F=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Row Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,r){n&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,k,1,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(4,`sample-po-table-row-template-doc`),wg()()()),n&2&&(UE(`p-actions`,r.actions),rg(2),Dx(r.hidePoWebSample?-1:2),rg(),UE(`p-active`,r.activeTab===`doc`))},dependencies:[Vze,lre,ure,q],encapsulation:2,changeDetection:1})}return o})()}];var I=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[I1.forChild(F),I1]})}return o})();var Y=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[M,I]})}return o})();export{Y as DocPoTableRowTemplateModule};
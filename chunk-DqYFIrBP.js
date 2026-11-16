import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I$1,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var k=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-table-column-template-doc`]],standalone:!1,decls:99,vars:0,consts:[[1,`docs-api`],[1,`docs-api-part-of`],[`href`,`/documentation/po-table?view=doc`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-table-column-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`language-html`],[1,`language-typescript`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-property`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`]],template:function(a,l){a&1&&(Qc(0,`div`,0)(1,`p`,1),Sk(2,` Faz parte de `),Qc(3,`a`,2),Sk(4,`Table`),Kg(),Sk(5,`. `),Kg(),Qc(6,`p`,3)(7,`code`),Sk(8,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Qc(9,`div`,4)(10,`p`),Sk(11,`Módulo do componente po-table`),Kg()(),Qc(12,`h3`,5),Sk(13,`Componente`),Kg(),Qc(14,`h4`,6)(15,`code`,7),Sk(16,`PoTableColumnTemplateDirective`),Kg()(),Qc(17,`div`,4)(18,`p`),Sk(19,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),Kg(),Qc(20,`p`),Sk(21,`Em seu uso, deve-se utilizar como par\xE2metro de entrada o input [p-property], o qual \xE9 respons\xE1vel por informar ao PO-TABLE qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),Kg(),Qc(22,`p`),Sk(23,`Retorno:`),Kg(),Qc(24,`ul`)(25,`li`),Sk(26,`value: valor referente ao conteúdo da linha corrente.`),Kg()(),Qc(27,`p`),Sk(28,`Modo de uso:`),Kg(),Qc(29,`pre`)(30,`code`,8),Sk(31,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template p-table-column-template [p-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),Kg()(),Qc(32,`blockquote`)(33,`p`),Sk(34,`No exemplo acima, todas as células correspondentes a coluna `),Qc(35,`code`),Sk(36,`status`),Kg(),Sk(37,` terão o conteúdo alterado para `),Qc(38,`code`),Sk(39,"<h1>${value}</h1>"),Kg(),Sk(40,`,
sendo que `),Qc(41,`code`),Sk(42,`value`),Kg(),Sk(43,` refere-se ao conteúdo da linha.`),Kg()(),Qc(44,`pre`)(45,`code`,8),Sk(46,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
  <ng-template  p-table-column-template [p-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</po-table>
...
`),Kg()(),Qc(47,`blockquote`)(48,`p`),Sk(49,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),Kg()(),Qc(50,`p`),Sk(51,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),Kg(),Qc(52,`pre`)(53,`code`,9),Sk(54,`...
export class AppComponent {

   targetProperty= 'status';

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED'
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED'
   }];

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...
`),Kg()(),Qc(55,`blockquote`)(56,`p`),Sk(57,`Observação: Sempre adicionar o `),Qc(58,`strong`),Sk(59,`type`),Kg(),Sk(60,` da coluna que deseja manipular com a directiva como `),Qc(61,`code`),Sk(62,`columnTemplate`),Kg()()()(),Qc(63,`div`,10)(64,`h4`,11),Sk(65,`Seletor`),Kg(),Qc(66,`pre`,12),Sk(67,`<[p-table-column-template]
    p-property="string" >
</[p-table-column-template]>
`),Kg()(),Qc(68,`h4`,13),Sk(69,`Propriedades`),Kg(),Qc(70,`table`,14)(71,`tr`,15)(72,`th`,16),Sk(73,`Nome`),Kg(),Qc(74,`th`,16),Sk(75,`Tipo`),Kg(),Qc(76,`th`,16),Sk(77,`Padrão`),Kg(),Qc(78,`th`,16),Sk(79,`Descrição`),Kg()(),Qc(80,`tr`,17)(81,`td`,18)(82,`div`,19)(83,`span`,20),Sk(84,` p-property`),vu(85,`br`),Kg()()(),Qc(86,`td`,21)(87,`code`,22),Sk(88,`string`),Kg()(),Qc(89,`td`,23),Sk(90,`-`),Kg(),Qc(91,`td`,24)(92,`em`)(93,`strong`),Sk(94,`(opcional)`),Kg()(),Qc(95,`p`),Sk(96,`Variável responsável por armazenar a property da coluna da tabela que será adicionado o template.`),Kg(),Qc(97,`p`),Sk(98,`Caso não seja informada esta propriedade, serão apresentados normalmente os dados da coluna.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function I(n,j){if(n&1){let i=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(i);let l=ek();return U_(l.changeTab(`web`))}),Kg()}if(n&2){let i=ek();Rb(`p-active`,i.activeTab===`web`)}}var N=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(i,a){this.route=i,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(i=>{let a=i.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(i){this.router.navigate([],{queryParams:{view:i},queryParamsHandling:`merge`}),this.activeTab=i}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||n)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Column Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,l){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,I,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-table-column-template-doc`),Kg()()()),a&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,k],encapsulation:2,changeDetection:1})}return n})()}];var A=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(N),GV]})}return n})();var X=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,A]})}return n})();export{X as DocPoTableColumnTemplateModule};
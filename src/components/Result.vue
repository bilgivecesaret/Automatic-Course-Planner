<template>
<div class="planner">
    <table cellpadding="0" cellspacing="0" id="sheet0" class="sheet0 gridlines">
        <col class="col0" />
        <col class="col1" />
        <col class="col2" />
        <col class="col3" />
        <col class="col4" />
        <col class="col5" />
        <col class="col6" />
        <col class="col7" />
        <col class="col8" />
        <col class="col9" />
        <tbody>
            <tr class="rowTitle1">
                <td class="column0 style6 header" colspan="10">{{ facultyTitle }}</td>
            </tr>
            <tr class="rowTitle2">
                <td class="column0 style6 header" colspan="10">{{ semerterTitle() }}</td>
            </tr>
            <tr class="rowTitle3">
                <td class="column0 style6" colspan="2"></td>
                <td class="column2 style6 header" colspan="2">{{ years[0] }}</td>
                <td class="column4 style6 header" colspan="2">{{ years[1] }}</td>
                <td class="column6 style6 header" colspan="2">{{ years[2] }}</td>
                <td class="column8 style6 header" colspan="2">{{ years[3] }}</td>
            </tr>
            <tr class="row1">
                <td class="column0 style1 header" rowspan="9">{{ days[0] }}</td>
                <td class="column1 style1 header">{{ timeSlots.lesson1 }}</td>
                <td class="column2 style1"> {{ plan[0] }} </td>
                <td class="column3 style1"> {{ plan[1] }} </td>
                <td class="column4 style1"> {{ plan[2] }} </td>
                <td class="column5 style1"> {{ plan[3] }} </td>
                <td class="column6 style1"> {{ plan[4] }} </td>
                <td class="column7 style1"> {{ plan[5] }} </td>
                <td class="column8 style1"> {{ plan[6] }} </td>
                <td class="column9 style1"> {{ plan[7] }} </td>
            </tr>
            <tr class="row2">
                <td class="column1 style1 header">{{ timeSlots.lesson2 }}</td>
                <td class="column2 style1"> {{ plan[8] }} </td>
                <td class="column3 style1"> {{ plan[9] }} </td>
                <td class="column4 style1"> {{ plan[10] }} </td>
                <td class="column5 style1"> {{ plan[11] }} </td>
                <td class="column6 style1"> {{ plan[12] }} </td>
                <td class="column7 style1"> {{ plan[13] }} </td>
                <td class="column8 style1"> {{ plan[14] }} </td>
                <td class="column9 style1"> {{ plan[15] }} </td>
            </tr>
            <tr class="row3">
                <td class="column1 style1 header">{{ timeSlots.lesson3 }}</td>
                <td class="column2 style1"> {{ plan[16] }} </td>
                <td class="column3 style1"> {{ plan[17] }} </td>
                <td class="column4 style1"> {{ plan[18] }} </td>
                <td class="column5 style1"> {{ plan[19] }} </td>
                <td class="column6 style1"> {{ plan[20] }} </td>
                <td class="column7 style1"> {{ plan[21] }} </td>
                <td class="column8 style1"> {{ plan[22] }} </td>
                <td class="column9 style1"> {{ plan[23] }} </td>
            </tr>
            <tr class="row4">
                <td class="column1 style1 header">{{ timeSlots.lesson4 }}</td>
                <td class="column2 style1"> {{ plan[24] }} </td>
                <td class="column3 style1"> {{ plan[25] }} </td>
                <td class="column4 style1"> {{ plan[26] }} </td>
                <td class="column5 style1"> {{ plan[27] }} </td>
                <td class="column6 style1"> {{ plan[28] }} </td>
                <td class="column7 style1"> {{ plan[29] }} </td>
                <td class="column8 style1"> {{ plan[30] }} </td>
                <td class="column9 style1"> {{ plan[31] }} </td>
            </tr>
            <tr class="row5">
                <td class="column1 style1 header">{{ timeSlots.lesson5 }}</td>
                <td class="column2 style1"> {{ plan[32] }} </td>
                <td class="column3 style1"> {{ plan[33] }} </td>
                <td class="column4 style1"> {{ plan[34] }} </td>
                <td class="column5 style1"> {{ plan[35] }} </td>
                <td class="column6 style1"> {{ plan[36] }} </td>
                <td class="column7 style1"> {{ plan[37] }} </td>
                <td class="column8 style1"> {{ plan[38] }} </td>
                <td class="column9 style1"> {{ plan[39] }} </td>
            </tr>
            <tr class="row6">
                <td class="column1 style1 header">{{ timeSlots.lesson6 }}</td>
                <td class="column2 style1"> {{ plan[40] }} </td>
                <td class="column3 style1"> {{ plan[41] }} </td>
                <td class="column4 style1"> {{ plan[42] }} </td>
                <td class="column5 style1"> {{ plan[43] }} </td>
                <td class="column6 style1"> {{ plan[44] }} </td>
                <td class="column7 style1"> {{ plan[45] }} </td>
                <td class="column8 style1"> {{ plan[46] }} </td>
                <td class="column9 style1"> {{ plan[47] }} </td>
            </tr>
            <tr class="row7">
                <td class="column1 style1 header">{{ timeSlots.lesson7 }}</td>
                <td class="column2 style1"> {{ plan[48] }} </td>
                <td class="column3 style1"> {{ plan[49] }} </td>
                <td class="column4 style1"> {{ plan[50] }} </td>
                <td class="column5 style1"> {{ plan[51] }} </td>
                <td class="column6 style1"> {{ plan[52] }} </td>
                <td class="column7 style1"> {{ plan[53] }} </td>
                <td class="column8 style1"> {{ plan[54] }} </td>
                <td class="column9 style1"> {{ plan[55] }} </td>
            </tr>
            <tr class="row8">
                <td class="column1 style1 header">{{ timeSlots.lesson8 }}</td>
                <td class="column2 style1"> {{ plan[56] }} </td>
                <td class="column3 style1"> {{ plan[57] }} </td>
                <td class="column4 style1"> {{ plan[58] }} </td>
                <td class="column5 style1"> {{ plan[59] }} </td>
                <td class="column6 style1"> {{ plan[60] }} </td>
                <td class="column7 style1"> {{ plan[61] }} </td>
                <td class="column8 style1"> {{ plan[62] }} </td>
                <td class="column9 style1"> {{ plan[63] }} </td>
            </tr>
            <tr class="row9">
                <td class="column1 style1 header">{{ timeSlots.lesson9 }}</td>
                <td class="column2 style1"> {{ plan[64] }} </td>
                <td class="column3 style1"> {{ plan[65] }} </td>
                <td class="column4 style1"> {{ plan[66] }} </td>
                <td class="column5 style1"> {{ plan[67] }} </td>
                <td class="column6 style1"> {{ plan[68] }} </td>
                <td class="column7 style1"> {{ plan[69] }} </td>
                <td class="column8 style1"> {{ plan[70] }} </td>
                <td class="column9 style1"> {{ plan[71] }} </td>
            </tr>
            <tr class="row10">
                <td class="column0 style2 header" rowspan="9">{{ days[1] }}</td>
                <td class="column1 style2 header">{{ timeSlots.lesson1 }}</td>
                <td class="column2 style2"> {{ plan[72] }} </td>
                <td class="column3 style2"> {{ plan[73] }} </td>
                <td class="column4 style2"> {{ plan[74] }} </td>
                <td class="column5 style2"> {{ plan[75] }} </td>
                <td class="column6 style2"> {{ plan[76] }} </td>
                <td class="column7 style2"> {{ plan[77] }} </td>
                <td class="column8 style2"> {{ plan[78] }} </td>
                <td class="column9 style2"> {{ plan[79] }} </td>
            </tr>
            <tr class="row11">
                <td class="column1 style2 header">{{ timeSlots.lesson2 }}</td>
                <td class="column2 style2"> {{ plan[80] }} </td>
                <td class="column3 style2"> {{ plan[81] }} </td>
                <td class="column4 style2"> {{ plan[82] }} </td>
                <td class="column5 style2"> {{ plan[83] }} </td>
                <td class="column6 style2"> {{ plan[84] }} </td>
                <td class="column7 style2"> {{ plan[85] }} </td>
                <td class="column8 style2"> {{ plan[86] }} </td>
                <td class="column9 style2"> {{ plan[87] }} </td>
            </tr>
            <tr class="row12">
                <td class="column1 style2 header">{{ timeSlots.lesson3 }}</td>
                <td class="column2 style2"> {{ plan[88] }} </td>
                <td class="column3 style2"> {{ plan[89] }} </td>
                <td class="column4 style2"> {{ plan[90] }} </td>
                <td class="column5 style2"> {{ plan[91] }} </td>
                <td class="column6 style2"> {{ plan[92] }} </td>
                <td class="column7 style2"> {{ plan[93] }} </td>
                <td class="column8 style2"> {{ plan[94] }} </td>
                <td class="column9 style2"> {{ plan[95] }} </td>
            </tr>
            <tr class="row13">
                <td class="column1 style2 header">{{ timeSlots.lesson4 }}</td>
                <td class="column2 style2"> {{ plan[96] }} </td>
                <td class="column3 style2"> {{ plan[97] }} </td>
                <td class="column4 style2"> {{ plan[98] }} </td>
                <td class="column5 style2"> {{ plan[99] }} </td>
                <td class="column6 style2"> {{ plan[100] }} </td>
                <td class="column7 style2"> {{ plan[101] }} </td>
                <td class="column8 style2"> {{ plan[102] }} </td>
                <td class="column9 style2"> {{ plan[103] }} </td>
            </tr>
            <tr class="row14">
                <td class="column1 style2 header">{{ timeSlots.lesson5 }}</td>
                <td class="column2 style2"> {{ plan[104] }} </td>
                <td class="column3 style2"> {{ plan[105] }} </td>
                <td class="column4 style2"> {{ plan[106] }} </td>
                <td class="column5 style2"> {{ plan[107] }} </td>
                <td class="column6 style2"> {{ plan[108] }} </td>
                <td class="column7 style2"> {{ plan[109] }} </td>
                <td class="column8 style2"> {{ plan[110] }} </td>
                <td class="column9 style2"> {{ plan[111] }} </td>
            </tr>
            <tr class="row15">
                <td class="column1 style2 header">{{ timeSlots.lesson6 }}</td>
                <td class="column2 style2"> {{ plan[112] }} </td>
                <td class="column3 style2"> {{ plan[113] }} </td>
                <td class="column4 style2"> {{ plan[114] }} </td>
                <td class="column5 style2"> {{ plan[115] }} </td>
                <td class="column6 style2"> {{ plan[116] }} </td>
                <td class="column7 style2"> {{ plan[117] }} </td>
                <td class="column8 style2"> {{ plan[118] }} </td>
                <td class="column9 style2"> {{ plan[119] }} </td>
            </tr>
            <tr class="row16">
                <td class="column1 style2 header">{{ timeSlots.lesson7 }}</td>
                <td class="column2 style2"> {{ plan[120] }} </td>
                <td class="column3 style2"> {{ plan[121] }} </td>
                <td class="column4 style2"> {{ plan[122] }} </td>
                <td class="column5 style2"> {{ plan[123] }} </td>
                <td class="column6 style2"> {{ plan[124] }} </td>
                <td class="column7 style2"> {{ plan[125] }} </td>
                <td class="column8 style2"> {{ plan[126] }} </td>
                <td class="column9 style2"> {{ plan[127] }} </td>
            </tr>
            <tr class="row17">
                <td class="column1 style2 header">{{ timeSlots.lesson8 }}</td>
                <td class="column2 style2"> {{ plan[128] }} </td>
                <td class="column3 style2"> {{ plan[129] }} </td>
                <td class="column4 style2"> {{ plan[130] }} </td>
                <td class="column5 style2"> {{ plan[131] }} </td>
                <td class="column6 style2"> {{ plan[132] }} </td>
                <td class="column7 style2"> {{ plan[133] }} </td>
                <td class="column8 style2"> {{ plan[134] }} </td>
                <td class="column9 style2"> {{ plan[135] }} </td>
            </tr>
            <tr class="row18">
                <td class="column1 style2 header">{{ timeSlots.lesson9 }}</td>
                <td class="column2 style2"> {{ plan[136] }} </td>
                <td class="column3 style2"> {{ plan[137] }} </td>
                <td class="column4 style2"> {{ plan[138] }} </td>
                <td class="column5 style2"> {{ plan[139] }} </td>
                <td class="column6 style2"> {{ plan[140] }} </td>
                <td class="column7 style2"> {{ plan[141] }} </td>
                <td class="column8 style2"> {{ plan[142] }} </td>
                <td class="column9 style2"> {{ plan[143] }} </td>
            </tr>
            <tr class="row19">
                <td class="column0 style3 header" rowspan="9">{{ days[2] }}</td>
                <td class="column1 style3 header">{{ timeSlots.lesson1 }}</td>
                <td class="column2 style3"> {{ plan[144] }} </td>
                <td class="column3 style3"> {{ plan[145] }} </td>
                <td class="column4 style3"> {{ plan[146] }} </td>
                <td class="column5 style3"> {{ plan[147] }} </td>
                <td class="column6 style3"> {{ plan[148] }} </td>
                <td class="column7 style3"> {{ plan[149] }} </td>
                <td class="column8 style3"> {{ plan[150] }} </td>
                <td class="column9 style3"> {{ plan[151] }} </td>
            </tr>
            <tr class="row20">
                <td class="column1 style3 header">{{ timeSlots.lesson2 }}</td>
                <td class="column2 style3"> {{ plan[152] }} </td>
                <td class="column3 style3"> {{ plan[153] }} </td>
                <td class="column4 style3"> {{ plan[154] }} </td>
                <td class="column5 style3"> {{ plan[155] }} </td>
                <td class="column6 style3"> {{ plan[156] }} </td>
                <td class="column7 style3"> {{ plan[157] }} </td>
                <td class="column8 style3"> {{ plan[158] }} </td>
                <td class="column9 style3"> {{ plan[159] }} </td>
            </tr>
            <tr class="row21">
                <td class="column1 style3 header">{{ timeSlots.lesson3 }}</td>
                <td class="column2 style3"> {{ plan[160] }} </td>
                <td class="column3 style3"> {{ plan[161] }} </td>
                <td class="column4 style3"> {{ plan[162] }} </td>
                <td class="column5 style3"> {{ plan[163] }} </td>
                <td class="column6 style3"> {{ plan[164] }} </td>
                <td class="column7 style3"> {{ plan[165] }} </td>
                <td class="column8 style3"> {{ plan[166] }} </td>
                <td class="column9 style3"> {{ plan[167] }} </td>
            </tr>
            <tr class="row22">
                <td class="column1 style3 header">{{ timeSlots.lesson4 }}</td>
                <td class="column2 style3"> {{ plan[168] }} </td>
                <td class="column3 style3"> {{ plan[169] }} </td>
                <td class="column4 style3"> {{ plan[170] }} </td>
                <td class="column5 style3"> {{ plan[171] }} </td>
                <td class="column6 style3"> {{ plan[172] }} </td>
                <td class="column7 style3"> {{ plan[173] }} </td>
                <td class="column8 style3"> {{ plan[174] }} </td>
                <td class="column9 style3"> {{ plan[175] }} </td>
            </tr>
            <tr class="row23">
                <td class="column1 style3 header">{{ timeSlots.lesson5 }}</td>
                <td class="column2 style3"> {{ plan[176] }} </td>
                <td class="column3 style3"> {{ plan[177] }} </td>
                <td class="column4 style3"> {{ plan[178] }} </td>
                <td class="column5 style3"> {{ plan[179] }} </td>
                <td class="column6 style3"> {{ plan[180] }} </td>
                <td class="column7 style3"> {{ plan[181] }} </td>
                <td class="column8 style3"> {{ plan[182] }} </td>
                <td class="column9 style3"> {{ plan[183] }} </td>
            </tr>
            <tr class="row24">
                <td class="column1 style3 header">{{ timeSlots.lesson6 }}</td>
                <td class="column2 style3"> {{ plan[184] }} </td>
                <td class="column3 style3"> {{ plan[185] }} </td>
                <td class="column4 style3"> {{ plan[186] }} </td>
                <td class="column5 style3"> {{ plan[187] }} </td>
                <td class="column6 style3"> {{ plan[188] }} </td>
                <td class="column7 style3"> {{ plan[189] }} </td>
                <td class="column8 style3"> {{ plan[190] }} </td>
                <td class="column9 style3"> {{ plan[191] }} </td>
            </tr>
            <tr class="row25">
                <td class="column1 style3 header">{{ timeSlots.lesson7 }}</td>
                <td class="column2 style3"> {{ plan[192] }} </td>
                <td class="column3 style3"> {{ plan[193] }} </td>
                <td class="column4 style3"> {{ plan[194] }} </td>
                <td class="column5 style3"> {{ plan[195] }} </td>
                <td class="column6 style3"> {{ plan[196] }} </td>
                <td class="column7 style3"> {{ plan[197] }} </td>
                <td class="column8 style3"> {{ plan[198] }} </td>
                <td class="column9 style3"> {{ plan[199] }} </td>
            </tr>
            <tr class="row26">
                <td class="column1 style3 header">{{ timeSlots.lesson8 }}</td>
                <td class="column2 style3"> {{ plan[200] }} </td>
                <td class="column3 style3"> {{ plan[201] }} </td>
                <td class="column4 style3"> {{ plan[202] }} </td>
                <td class="column5 style3"> {{ plan[203] }} </td>
                <td class="column6 style3"> {{ plan[204] }} </td>
                <td class="column7 style3"> {{ plan[205] }} </td>
                <td class="column8 style3"> {{ plan[206] }} </td>
                <td class="column9 style3"> {{ plan[207] }} </td>
            </tr>
            <tr class="row27">
                <td class="column1 style3 header">{{ timeSlots.lesson9 }}</td>
                <td class="column2 style3"> {{ plan[208] }} </td>
                <td class="column3 style3"> {{ plan[209] }} </td>
                <td class="column4 style3"> {{ plan[210] }} </td>
                <td class="column5 style3"> {{ plan[211] }} </td>
                <td class="column6 style3"> {{ plan[212] }} </td>
                <td class="column7 style3"> {{ plan[213] }} </td>
                <td class="column8 style3"> {{ plan[214] }} </td>
                <td class="column9 style3"> {{ plan[215] }} </td>
            </tr>
            <tr class="row28">
                <td class="column0 style4 header" rowspan="9">{{ days[3] }}</td>
                <td class="column1 style4 header">{{ timeSlots.lesson1 }}</td>
                <td class="column2 style4"> {{ plan[216] }} </td>
                <td class="column3 style4"> {{ plan[217] }} </td>
                <td class="column4 style4"> {{ plan[218] }} </td>
                <td class="column5 style4"> {{ plan[219] }} </td>
                <td class="column6 style4"> {{ plan[220] }} </td>
                <td class="column7 style4"> {{ plan[221] }} </td>
                <td class="column8 style4"> {{ plan[222] }} </td>
                <td class="column9 style4"> {{ plan[223] }} </td>
            </tr>
            <tr class="row29">
                <td class="column1 style4 header">{{ timeSlots.lesson2 }}</td>
                <td class="column2 style4"> {{ plan[224] }} </td>
                <td class="column3 style4"> {{ plan[225] }} </td>
                <td class="column4 style4"> {{ plan[226] }} </td>
                <td class="column5 style4"> {{ plan[227] }} </td>
                <td class="column6 style4"> {{ plan[228] }} </td>
                <td class="column7 style4"> {{ plan[229] }} </td>
                <td class="column8 style4"> {{ plan[230] }} </td>
                <td class="column9 style4"> {{ plan[231] }} </td>
            </tr>
            <tr class="row30">
                <td class="column1 style4 header">{{ timeSlots.lesson3 }}</td>
                <td class="column2 style4"> {{ plan[232] }} </td>
                <td class="column3 style4"> {{ plan[233] }} </td>
                <td class="column4 style4"> {{ plan[234] }} </td>
                <td class="column5 style4"> {{ plan[235] }} </td>
                <td class="column6 style4"> {{ plan[236] }} </td>
                <td class="column7 style4"> {{ plan[237] }} </td>
                <td class="column8 style4"> {{ plan[238] }} </td>
                <td class="column9 style4"> {{ plan[239] }} </td>
            </tr>
            <tr class="row31">
                <td class="column1 style4 header">{{ timeSlots.lesson4 }}</td>
                <td class="column2 style4"> {{ plan[240] }} </td>
                <td class="column3 style4"> {{ plan[241] }} </td>
                <td class="column4 style4"> {{ plan[242] }} </td>
                <td class="column5 style4"> {{ plan[243] }} </td>
                <td class="column6 style4"> {{ plan[244] }} </td>
                <td class="column7 style4"> {{ plan[245] }} </td>
                <td class="column8 style4"> {{ plan[246] }} </td>
                <td class="column9 style4"> {{ plan[247] }} </td>
            </tr>
            <tr class="row32">
                <td class="column1 style4 header">{{ timeSlots.lesson5 }}</td>
                <td class="column2 style4"> {{ plan[248] }} </td>
                <td class="column3 style4"> {{ plan[249] }} </td>
                <td class="column4 style4"> {{ plan[250] }} </td>
                <td class="column5 style4"> {{ plan[251] }} </td>
                <td class="column6 style4"> {{ plan[252] }} </td>
                <td class="column7 style4"> {{ plan[253] }} </td>
                <td class="column8 style4"> {{ plan[254] }} </td>
                <td class="column9 style4"> {{ plan[255] }} </td>
            </tr>
            <tr class="row33">
                <td class="column1 style4 header">{{ timeSlots.lesson6 }}</td>
                <td class="column2 style4"> {{ plan[256] }} </td>
                <td class="column3 style4"> {{ plan[257] }} </td>
                <td class="column4 style4"> {{ plan[258] }} </td>
                <td class="column5 style4"> {{ plan[259] }} </td>
                <td class="column6 style4"> {{ plan[260] }} </td>
                <td class="column7 style4"> {{ plan[261] }} </td>
                <td class="column8 style4"> {{ plan[262] }} </td>
                <td class="column9 style4"> {{ plan[263] }} </td>
            </tr>
            <tr class="row34">
                <td class="column1 style4 header">{{ timeSlots.lesson7 }}</td>
                <td class="column2 style4"> {{ plan[264] }} </td>
                <td class="column3 style4"> {{ plan[265] }} </td>
                <td class="column4 style4"> {{ plan[266] }} </td>
                <td class="column5 style4"> {{ plan[267] }} </td>
                <td class="column6 style4"> {{ plan[268] }} </td>
                <td class="column7 style4"> {{ plan[269] }} </td>
                <td class="column8 style4"> {{ plan[270] }} </td>
                <td class="column9 style4"> {{ plan[271] }} </td>
            </tr>
            <tr class="row35">
                <td class="column1 style4 header">{{ timeSlots.lesson8 }}</td>
                <td class="column2 style4"> {{ plan[272] }} </td>
                <td class="column3 style4"> {{ plan[273] }} </td>
                <td class="column4 style4"> {{ plan[274] }} </td>
                <td class="column5 style4"> {{ plan[275] }} </td>
                <td class="column6 style4"> {{ plan[276] }} </td>
                <td class="column7 style4"> {{ plan[277] }} </td>
                <td class="column8 style4"> {{ plan[278] }} </td>
                <td class="column9 style4"> {{ plan[279] }} </td>
            </tr>
            <tr class="row36">
                <td class="column1 style4 header">{{ timeSlots.lesson9 }}</td>
                <td class="column2 style4"> {{ plan[280] }} </td>
                <td class="column3 style4"> {{ plan[281] }} </td>
                <td class="column4 style4"> {{ plan[282] }} </td>
                <td class="column5 style4"> {{ plan[283] }} </td>
                <td class="column6 style4"> {{ plan[284] }} </td>
                <td class="column7 style4"> {{ plan[285] }} </td>
                <td class="column8 style4"> {{ plan[286] }} </td>
                <td class="column9 style4"> {{ plan[287] }} </td>
            </tr>
            <tr class="row37">
                <td class="column0 style5 header" rowspan="9">{{ days[4] }}</td>
                <td class="column1 style5 header">{{ timeSlots.lesson1 }}</td>
                <td class="column2 style5"> {{ plan[288] }} </td>
                <td class="column3 style5"> {{ plan[289] }} </td>
                <td class="column4 style5"> {{ plan[290] }} </td>
                <td class="column5 style5"> {{ plan[291] }} </td>
                <td class="column6 style5"> {{ plan[292] }} </td>
                <td class="column7 style5"> {{ plan[293] }} </td>
                <td class="column8 style5"> {{ plan[294] }} </td>
                <td class="column9 style5"> {{ plan[295] }} </td>
            </tr>
            <tr class="row38">
                <td class="column1 style5 header">{{ timeSlots.lesson2 }}</td>
                <td class="column2 style5"> {{ plan[296] }} </td>
                <td class="column3 style5"> {{ plan[297] }} </td>
                <td class="column4 style5"> {{ plan[298] }} </td>
                <td class="column5 style5"> {{ plan[299] }} </td>
                <td class="column6 style5"> {{ plan[300] }} </td>
                <td class="column7 style5"> {{ plan[301] }} </td>
                <td class="column8 style5"> {{ plan[302] }} </td>
                <td class="column9 style5"> {{ plan[303] }} </td>
            </tr>
            <tr class="row39">
                <td class="column1 style5 header">{{ timeSlots.lesson3 }}</td>
                <td class="column2 style5"> {{ plan[304] }} </td>
                <td class="column3 style5"> {{ plan[305] }} </td>
                <td class="column4 style5"> {{ plan[306] }} </td>
                <td class="column5 style5"> {{ plan[307] }} </td>
                <td class="column6 style5"> {{ plan[308] }} </td>
                <td class="column7 style5"> {{ plan[309] }} </td>
                <td class="column8 style5"> {{ plan[310] }} </td>
                <td class="column9 style5"> {{ plan[311] }} </td>
            </tr>
            <tr class="row40">
                <td class="column1 style5 header">{{ timeSlots.lesson4 }}</td>
                <td class="column2 style5"> {{ plan[312] }} </td>
                <td class="column3 style5"> {{ plan[313] }} </td>
                <td class="column4 style5"> {{ plan[314] }} </td>
                <td class="column5 style5"> {{ plan[315] }} </td>
                <td class="column6 style5"> {{ plan[316] }} </td>
                <td class="column7 style5"> {{ plan[317] }} </td>
                <td class="column8 style5"> {{ plan[318] }} </td>
                <td class="column9 style5"> {{ plan[319] }} </td>
            </tr>
            <tr class="row41">
                <td class="column1 style5 header">{{ timeSlots.lesson5 }}</td>
                <td class="column2 style5"> {{ plan[320] }} </td>
                <td class="column3 style5"> {{ plan[321] }} </td>
                <td class="column4 style5"> {{ plan[322] }} </td>
                <td class="column5 style5"> {{ plan[323] }} </td>
                <td class="column6 style5"> {{ plan[324] }} </td>
                <td class="column7 style5"> {{ plan[325] }} </td>
                <td class="column8 style5"> {{ plan[326] }} </td>
                <td class="column9 style5"> {{ plan[327] }} </td>
            </tr>
            <tr class="row42">
                <td class="column1 style5 header">{{ timeSlots.lesson6 }}</td>
                <td class="column2 style5"> {{ plan[328] }} </td>
                <td class="column3 style5"> {{ plan[329] }} </td>
                <td class="column4 style5"> {{ plan[330] }} </td>
                <td class="column5 style5"> {{ plan[331] }} </td>
                <td class="column6 style5"> {{ plan[332] }} </td>
                <td class="column7 style5"> {{ plan[333] }} </td>
                <td class="column8 style5"> {{ plan[334] }} </td>
                <td class="column9 style5"> {{ plan[335] }} </td>
            </tr>
            <tr class="row43">
                <td class="column1 style5 header">{{ timeSlots.lesson7 }}</td>
                <td class="column2 style5"> {{ plan[336] }} </td>
                <td class="column3 style5"> {{ plan[337] }} </td>
                <td class="column4 style5"> {{ plan[338] }} </td>
                <td class="column5 style5"> {{ plan[339] }} </td>
                <td class="column6 style5"> {{ plan[340] }} </td>
                <td class="column7 style5"> {{ plan[341] }} </td>
                <td class="column8 style5"> {{ plan[342] }} </td>
                <td class="column9 style5"> {{ plan[343] }} </td>
            </tr>
            <tr class="row44">
                <td class="column1 style5 header">{{ timeSlots.lesson8 }}</td>
                <td class="column2 style5"> {{ plan[344] }} </td>
                <td class="column3 style5"> {{ plan[345] }} </td>
                <td class="column4 style5"> {{ plan[346] }} </td>
                <td class="column5 style5"> {{ plan[347] }} </td>
                <td class="column6 style5"> {{ plan[348] }} </td>
                <td class="column7 style5"> {{ plan[349] }} </td>
                <td class="column8 style5"> {{ plan[350] }} </td>
                <td class="column9 style5"> {{ plan[351] }} </td>
            </tr>
            <tr class="row45">
                <td class="column1 style5 header">{{ timeSlots.lesson9 }}</td>
                <td class="column2 style5"> {{ plan[352] }} </td>
                <td class="column3 style5"> {{ plan[353] }} </td>
                <td class="column4 style5"> {{ plan[354] }} </td>
                <td class="column5 style5"> {{ plan[355] }} </td>
                <td class="column6 style5"> {{ plan[356] }} </td>
                <td class="column7 style5"> {{ plan[357] }} </td>
                <td class="column8 style5"> {{ plan[358] }} </td>
                <td class="column9 style5"> {{ plan[359] }} </td>
            </tr>
        </tbody>
    </table>
</div>
<div>
    <button type="button" class="result button" v-on:click="update">Make Plan</button>
</div>
</template>

<script>
import {initialPlan, placeService} from '@/my-js-codes';
export default {
    data() {
        return {
            facultyTitle: "ANKARA YILDIRIM BEYAZIT UNIVERSITY FACULTY OF ENGINEERING AND NATURAL SCIENCES",
            semesterTitleFirstPart: "2023 - 2024 SPRING",
            semerterTitleSecondPart: "SEMESTER WEEKLY SCHEDULE (COMPUTER ENGINEERING DEPARTMENT)",
            years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            timeSlots: {
                lesson1: "08:30 - 09:20",
                lesson2: "09:30 - 10:20",
                lesson3: "10:30 - 11:20",
                lesson4: "11:30 - 12:20",
                lesson5: "12:30 - 13:20",
                lesson6: "13:30 - 14:20",
                lesson7: "14:30 - 15:20",
                lesson8: "15:30 - 16:20",
                lesson9: "16:30 - 17:20"
            },
            plan:initialPlan()
        };
    },
    methods: {
        semerterTitle() {
            return this.semesterTitleFirstPart + " " + this.semerterTitleSecondPart;
        },
        update(){            
            placeService(this.plan);     
        }  
    }
};


</script>
<style src="./src/assets/result.css" />
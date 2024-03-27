<template>
        <table cellpadding="0" cellspacing="0" id="sheet0" class="sheet0 gridlines">
            <col class="col0">
            <col class="col1">
            <col class="col2">
            <col class="col3">
            <col class="col4">
            <col class="col5">
            <col class="col6">
            <col class="col7">
            <col class="col8">
            <col class="col9">
            <tbody>
            <tr class="row0">
                <td class="column0 style6 header" colspan="10"> {{facultyTitle}} </td>
            </tr>
            <tr class="row1">
                <td class="column0 style6 header" colspan="10"> {{ semerterTitle }} </td>
            </tr>
            <tr class="row2">
                <td class="column0 style6" colspan="2"></td>
                <td class="column2 style6 header" colspan="2">{{years[0]}}</td>  
                <td class="column4 style6 header" colspan="2">{{years[1]}}</td>
                <td class="column6 style6 header" colspan="2">{{years[2]}}</td>
                <td class="column8 style6 header" colspan="2">{{years[3]}}</td>
            </tr>
            <tr class="row3">
                <td class="column0 style1 header" rowspan="8">{{days[0]}}</td>
                <td class="column1 style1 header">{{timeSlots.lesson1}}</td>
                <td class="column2 style1" rowspan="3">CENG113</td>
                <td class="column3 style1" rowspan="3">DB412</td>
                <td class="column4 style1"></td>
                <td class="column5 style1"></td>
                <td class="column6 style1" rowspan="3">CENG306</td>
                <td class="column7 style1" rowspan="3">B515</td>
                <td class="column8 style1" rowspan="3">CENG418</td>
                <td class="column9 style1" rowspan="3">B310</td>
            </tr>
            <tr class="row4">
                <td class="column1 style1 header">{{timeSlots.lesson2}}</td>
                <td class="column4 style1"></td>
                <td class="column5 style1"></td>
            </tr>
            <tr class="row5">
                <td class="column1 style1 header">{{timeSlots.lesson3}}</td>
                <td class="column4 style1"></td>
                <td class="column5 style1"></td>
            </tr>
            <tr class="row6">
                <td class="column1 style1 header">{{timeSlots.lesson4}}</td>
                <td class="column2 style1 "></td>
                <td class="column3 style1"></td>
                <td class="column4 style1"></td>
                <td class="column5 style1"></td>
                <td class="column6 style1"></td>
                <td class="column7 style1"></td>
                <td class="column8 style1" rowspan="2">CENG404</td>
                <td class="column9 style1" rowspan="2">A222</td>
            </tr>
            <tr class="row7">
                <td class="column1 style1 header">{{timeSlots.lesson5}}</td>
                <td class="column2 style1" rowspan="2">CENG114 LAB</td>
                <td class="column3 style1" rowspan="2">AB417</td>
                <td class="column4 style1"></td>
                <td class="column5 style1"></td>
                <td class="column6 style1"></td>
                <td class="column7 style1"></td>
            </tr>
            <tr class="row8">
                <td class="column1 style1 header">{{timeSlots.lesson6}}</td>
                <td class="column4 style1"></td>
                <td class="column5 style1"></td>
                <td class="column6 style1" rowspan="3">CENG342</td>
                <td class="column7 style1" rowspan="3">A203</td>
                <td class="column8 style1"></td>
                <td class="column9 style1"></td>
            </tr>
            <tr class="row9">
                <td class="column1 style1 header">{{timeSlots.lesson7}}</td>
                <td class="column2 style1" rowspan="2"></td>
                <td class="column3 style1" rowspan="2"></td>
                <td class="column4 style1" rowspan="2">CENG202</td>
                <td class="column5 style1" rowspan="2">C111</td>
                <td class="column8 style1"></td>
                <td class="column9 style1"></td>
            </tr>
            <tr class="row10">
                <td class="column1 style1 header">{{timeSlots.lesson8}}</td>
                <td class="column8 style1"></td>
                <td class="column9 style1"></td>
            </tr>
            <tr class="row11">
                <td class="column0 style2 header" rowspan="8">{{days[1]}}</td>
                <td class="column1 style2 header">{{timeSlots.lesson1}}</td>
                <td class="column2 style2"></td>
                <td class="column3 style2"></td>
                <td class="column4 style2"></td>
                <td class="column5 style2"></td>
                <td class="column6 style2"></td>
                <td class="column7 style2"></td>
                <td class="column8 style2" rowspan="3">CENG442</td>
                <td class="column9 style2" rowspan="3">A303</td>
            </tr>
            <tr class="row12">
                <td class="column1 style2 header">{{timeSlots.lesson2}}</td>
                <td class="column2 style2"></td>
                <td class="column3 style2"></td>
                <td class="column4 style2"></td>
                <td class="column5 style2"></td>
                <td class="column6 style2"></td>
                <td class="column7 style2"></td>
            </tr>
            <tr class="row13">
                <td class="column1 style2 header">{{timeSlots.lesson3}}</td>
                <td class="column2 style2"></td>
                <td class="column3 style2"></td>
                <td class="column4 style2" rowspan="2">ENGR202</td>
                <td class="column5 style2" rowspan="2">B413</td>
                <td class="column6 style2"></td>
                <td class="column7 style2"></td>
            </tr>
            <tr class="row14">
                <td class="column1 style2 header">{{timeSlots.lesson4}}</td>
                <td class="column2 style2" rowspan="3">PHYS102</td>
                <td class="column3 style2" rowspan="3">C111</td>
                <td class="column6 style2" rowspan="3">CENG302</td>
                <td class="column7 style2" rowspan="3">DB412</td>
                <td class="column8 style2"></td>
                <td class="column9 style2"></td>
            </tr>
            <tr class="row15">
                <td class="column1 style2 header">{{timeSlots.lesson5}}</td>
                <td class="column4 style2"></td>
                <td class="column5 style2"></td>
                <td class="column8 style2"></td>
                <td class="column9 style2"></td>
            </tr>
            <tr class="row16">
                <td class="column1 style2 header">{{timeSlots.lesson6}}</td>
                <td class="column4 style2"></td>
                <td class="column5 style2"></td>
                <td class="column8 style2"></td>
                <td class="column9 style2"></td>
            </tr>
            <tr class="row17">
                <td class="column1 style2 header">{{timeSlots.lesson7}}</td>
                <td class="column2 style2"></td>
                <td class="column3 style2"></td>
                <td class="column4 style2" rowspan="2">CENG206</td>
                <td class="column5 style2" rowspan="2">DB412</td>
                <td class="column6 style2"></td>
                <td class="column7 style2"></td>
                <td class="column8 style2"></td>
                <td class="column9 style2"></td>
            </tr>
            <tr class="row18">
                <td class="column1 style2 header">{{timeSlots.lesson8}}</td>
                <td class="column2 style2">TDL 102</td>
                <td class="column3 style2">ONLINE</td>
                <td class="column6 style2"></td>
                <td class="column7 style2"></td>
                <td class="column8 style2"></td>
                <td class="column9 style2"></td>
            </tr>
            <tr class="row19">
                <td class="column0 style3 header" rowspan="8">{{days[2]}}</td>
                <td class="column1 style3 header">{{timeSlots.lesson1}}</td>
                <td class="column2 style3" rowspan="3">CENG114</td>
                <td class="column3 style3" rowspan="3">B515</td>
                <td class="column4 style3"></td>
                <td class="column5 style3"></td>
                <td class="column6 style3" rowspan="3">CENG415</td>
                <td class="column7 style3" rowspan="3">C502</td>
                <td class="column8 style3" rowspan="3">CENG462</td>
                <td class="column9 style3" rowspan="3">A422</td>
            </tr>
            <tr class="row20">
                <td class="column1 style3 header">{{timeSlots.lesson2}}</td>
                <td class="column4 style3"></td>
                <td class="column5 style3"></td>
            </tr>
            <tr class="row21">
                <td class="column1 style3 header">{{timeSlots.lesson3}}</td>
                <td class="column4 style3" rowspan="2">ENGR258</td>
                <td class="column5 style3" rowspan="2">B413</td>
            </tr>
            <tr class="row22">
                <td class="column1 style3 header">{{timeSlots.lesson4}}</td>
                <td class="column2 style3" rowspan="2"></td>
                <td class="column3 style3" rowspan="2"></td>
                <td class="column6 style3"></td>
                <td class="column7 style3"></td>
                <td class="column8 style3"></td>
                <td class="column9 style3"></td>
            </tr>
            <tr class="row23">
                <td class="column1 style3 header">{{timeSlots.lesson5}}</td>
                <td class="column4 style3" rowspan="3">CENG204</td>
                <td class="column5 style3" rowspan="3">B413</td>
                <td class="column6 style3"></td>
                <td class="column7 style3"></td>
                <td class="column8 style3"></td>
                <td class="column9 style3"></td>
            </tr>
            <tr class="row24">
                <td class="column1 style3 header">{{timeSlots.lesson6}}</td>
                <td class="column2 style3" rowspan="2">CENG113 LAB</td>
                <td class="column3 style3" rowspan="2">AB417</td>
                <td class="column6 style3" rowspan="3">CENG325</td>
                <td class="column7 style3" rowspan="3">C502</td>
                <td class="column8 style3"></td>
                <td class="column9 style3"></td>
            </tr>
            <tr class="row25">
                <td class="column1 style3 header">{{timeSlots.lesson7}}</td>
                <td class="column8 style3"></td>
                <td class="column9 style3"></td>
            </tr>
            <tr class="row26">
                <td class="column1 style3 header">{{timeSlots.lesson8}}</td>
                <td class="column2 style3"></td>
                <td class="column3 style3"></td>
                <td class="column4 style3"></td>
                <td class="column5 style3"></td>
                <td class="column8 style3"></td>
                <td class="column9 style3"></td>
            </tr>
            <tr class="row27">
                <td class="column0 style4 header" rowspan="8">{{days[3]}}</td>
                <td class="column1 style4 header">{{timeSlots.lesson1}}</td>
                <td class="column2 style4" rowspan="3">MATH104</td>
                <td class="column3 style4" rowspan="3">DB412</td>
                <td class="column4 style4"></td>
                <td class="column5 style4"></td>
                <td class="column6 style4"></td>
                <td class="column7 style4"></td>
                <td class="column8 style4" rowspan="3">CENG441</td>
                <td class="column9 style4" rowspan="3">C502</td>
            </tr>
            <tr class="row28">
                <td class="column1 style4 header">{{timeSlots.lesson2}}</td>
                <td class="column4 style4" rowspan="2">CENG202 LAB</td>
                <td class="column5 style4" rowspan="2">AB417</td>
                <td class="column6 style4"></td>
                <td class="column7 style4"></td>
            </tr>
            <tr class="row29">
                <td class="column1 style4 header">{{timeSlots.lesson3}}</td>
                <td class="column6 style4"></td>
                <td class="column7 style4"></td>
            </tr>
            <tr class="row30">
                <td class="column1 style4 header">{{timeSlots.lesson4}}</td>
                <td class="column2 style4" rowspan="2">MATH102</td>
                <td class="column3 style4" rowspan="2">C111</td>
                <td class="column4 style4" rowspan="2"></td>
                <td class="column5 style4" rowspan="2"></td>
                <td class="column6 style4"></td>
                <td class="column7 style4"></td>
                <td class="column8 style4" rowspan="3">CENG428</td>
                <td class="column9 style4" rowspan="3">C502</td>
            </tr>
            <tr class="row31">
                <td class="column1 style4 header">{{timeSlots.lesson5}}</td>
                <td class="column6 style4"></td>
                <td class="column7 style4"></td>
            </tr>
            <tr class="row32">
                <td class="column1 style4 header">{{timeSlots.lesson6}}</td>
                <td class="column2 style4" rowspan="3">PHYS104</td>
                <td class="column3 style4" rowspan="3">LAB</td>
                <td class="column4 style4" rowspan="2"></td>
                <td class="column5 style4" rowspan="2"></td>
                <td class="column6 style4" rowspan="3">CENG304</td>
                <td class="column7 style4" rowspan="3">C503</td>
            </tr>
            <tr class="row33">
                <td class="column1 style4 header">{{timeSlots.lesson7}}</td>
                <td class="column8 style4"></td>
                <td class="column9 style4"></td>
            </tr>
            <tr class="row34">
                <td class="column1 style4 header">{{timeSlots.lesson8}}</td>
                <td class="column4 style4"></td>
                <td class="column5 style4"></td>
                <td class="column8 style4">ENGR450</td>
                <td class="column9 style4">C502</td>
            </tr>
            <tr class="row35">
                <td class="column0 style5 header" rowspan="8">{{days[4]}}</td>
                <td class="column1 style5 header">{{timeSlots.lesson1}}</td>
                <td class="column2 style5" rowspan="3">ENG102</td>
                <td class="column3 style5" rowspan="3">ONLINE</td>
                <td class="column4 style5"></td>
                <td class="column5 style5"></td>
                <td class="column6 style5"></td>
                <td class="column7 style5"></td>
                <td class="column8 style5" rowspan="3">ENGR404</td>
                <td class="column9 style5" rowspan="3">B515</td>
            </tr>
            <tr class="row36">
                <td class="column1 style5 header">{{timeSlots.lesson2}}</td>
                <td class="column4 style5"></td>
                <td class="column5 style5"></td>
                <td class="column6 style5"></td>
                <td class="column7 style5"></td>
            </tr>
            <tr class="row37">
                <td class="column1 style5 header">{{timeSlots.lesson3}}</td>
                <td class="column4 style5" rowspan="2">ENGR202</td>
                <td class="column5 style5" rowspan="2">C111</td>
                <td class="column6 style5"></td>
                <td class="column7 style5"></td>
            </tr>
            <tr class="row38">
                <td class="column1 style5 header">{{timeSlots.lesson4}}</td>
                <td class="column2 style5"></td>
                <td class="column3 style5"></td>
                <td class="column6 style5"></td>
                <td class="column7 style5"></td>
                <td class="column8 style5"></td>
                <td class="column9 style5"></td>
            </tr>
            <tr class="row39">
                <td class="column1 style5 header">{{timeSlots.lesson5}}</td>
                <td class="column2 style5"></td>
                <td class="column3 style5"></td>
                <td class="column4 style5"></td>
                <td class="column5 style5"></td>
                <td class="column6 style5"></td>
                <td class="column7 style5"></td>
                <td class="column8 style5"></td>
                <td class="column9 style5"></td>
            </tr>
            <tr class="row40">
                <td class="column1 style5 header">{{timeSlots.lesson6}}</td>
                <td class="column2 style5" rowspan="2">MATH102</td>
                <td class="column3 style5" rowspan="2">C111</td>
                <td class="column4 style5"></td>
                <td class="column5 style5"></td>
                <td class="column6 style5" rowspan="3">CENG311</td>
                <td class="column7 style5" rowspan="3">C403</td>
                <td class="column8 style5"></td>
                <td class="column9 style5"></td>
            </tr>
            <tr class="row41">
                <td class="column1 style5 header">{{timeSlots.lesson7}}</td>
                <td class="column4 style5"></td>
                <td class="column5 style5"></td>
                <td class="column8 style5"></td>
                <td class="column9 style5"></td>
            </tr>
            <tr class="row42">
                <td class="column1 style5 header">{{timeSlots.lesson8}}</td>
                <td class="column2 style5"></td>
                <td class="column3 style5"></td>
                <td class="column4 style5"></td>
                <td class="column5 style5"></td>
                <td class="column8 style5"></td>
                <td class="column9 style5"></td>
            </tr>
            </tbody>
        </table>
</template>

<script>
export default{
    data(){
        return{
            facultyTitle:"ANKARA YILDIRIM BEYAZIT UNIVERSITY FACULTY OF ENGINEERING AND NATURAL SCIENCES",
            semesterTitleFirstPart: "2023 - 2024 SPRING",
            semerterTitleSecondPart:"SEMESTER WEEKLY SCHEDULE (COMPUTER ENGINEERING DEPARTMENT)",
            years: ["1st Year","2nd Year","3rd Year","4th Year"],
            days: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            timeSlots:{
                lesson1 : "08:30 - 09:20",
                lesson2 : "09:30 - 10:20",
                lesson3 : "10:30 - 11:20",
                lesson4 : "11:30 - 12:20",
                lesson5 : "12:30 - 13:20",
                lesson6 : "13:30 - 14:20",
                lesson7 : "14:30 - 15:20",
                lesson8 : "15:30 - 16:20"
            }
        }
    },
    methods:{

    },
    computed:{
        semerterTitle: function(){
            return this.semesterTitleFirstPart+ " " + this.semerterTitleSecondPart; 
        }
    }
}
</script>
<template>
    <div>
        <div id="search-form">
            <h4><icon name="save"></icon> ครั้งที่จัดสอบ > เพิ่ม/แก้ไข/ลบ ครั้งที่จัดสอบ</h4>
            <b-form>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ปีการศึกษา</label>
                    <div class="col-sm-2">
                        <b-form-input type="text"></b-form-input>
                    </div>
                    <label class="col-sm-2 col-form-label">ภาคการศึกษา</label>
                    <div class="col-sm-2">
                        <b-form-select class="form-control-plaintext" size="sm"></b-form-select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ครั้งที่จัดสอบ</label>
                    <div class="col-sm-2">
                        <b-form-input type="text"></b-form-input>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                            <label class="form-check-label" for="inlineRadio1">ใช้งาน</label>
                        </div>
                    </div>
                </div>
                
            </b-form>
            <div id="button-group-form">
                <b-button variant="warning">ค้นหา</b-button>
                <b-button variant="warning">บันทึก</b-button>
            </div>
        </div>
        <div id="grid-form">
            <b-table bordered hover :items="itemsProcess" :fields="fieldsProcess"></b-table>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data () {
        return {
            fieldsProcess: [ 'ลำดับ', 'ปีการศึกษา', 'ภาคการศึกษา', 'ครั้งที่', 'ใช้งาน', 'หมายเหตุ'],
            itemsProcess: []
        }
    },
    created() {
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
}
</script>
<style lang="scss">
#search-form{
    background-color: #FFF;
    padding: 40px 40px 20px 40px;
}
#grid-form{
    background-color: #FFF;
    padding: 0px 40px 40px 40px;
}
#button-group-form{
    text-align: center;
}
h4{
    border-bottom: 1px solid #eee;
    padding-bottom: 9px;
}
.nav-link.active {
    background-color: orange !important;
    color:#000 !important;
}
.nav-link{
    background-color: #ccc !important; 
    color:#000 !important;
}
th{
    background-color: orange;
    text-align: center;
}
</style>

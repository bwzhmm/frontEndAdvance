<template>
  <div>
    <div class="table_head">
      <h4>账号管理</h4>
      <div>
        <el-input v-model="queryName" class="query-picker" placeholder="请输入姓名" clearable></el-input>
        <el-button @click="handleQuery()" type="primary" size="small">查询</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" type="index" align="center"></el-table-column>
      <el-table-column prop="ORGNAME" label="部门" align="center"></el-table-column>
      <el-table-column prop="NAME" label="姓名" align="center"></el-table-column>
      <el-table-column prop="SEX" label="性别" align="center">
        <template slot-scope="scope">{{ scope.row.SEX=='2'?"女":scope.row.SEX=='1'&&'男'||'-'}}</template>
      </el-table-column>
      <el-table-column prop="LOGINNAME" label="登录账号" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        :total="total"
        :page-size="pagesize"
        :current-page="currentPage"
        layout="sizes,prev, pager, next"
        :page-sizes="[10, 20, 50, 100,200]"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { fetchUserList, resetPassword } from "@/api/user";
export default {
  data() {
    return {
      queryName: "",
      tableData: [],
      total: 0,
      pagesize: 10,
      currentPage: 1
    };
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    handleEdit(row) {
      this.$confirm("确认重置该用户的密码吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
        showCancelButton: false
      })
        .then(() => {
          let param = {
            data: JSON.stringify({
              ID: row.ID
            })
          };
          resetPassword(param).then(res => {
            if (res.success) {
              this.$message({
                message: "重置密码成功！",
                type: "success"
              });
            }
          });
        })
        .catch(() => {});
    },

    getUserList() {
      let param = {
        data: JSON.stringify({
          STATUS: "1",
          ORGID: "",
          NAME: this.queryName
        }),
        limit: this.pagesize,
        page: this.currentPage
      };
      fetchUserList(param).then(res => {
        this.total = res.total;
        this.tableData = res.items;
      });
    },
    handleQuery() {
      this.currentPage = 1;
      this.getUserList();
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.currentPage = 1;
      this.getUserList();
    },

    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.getUserList();
    }
  }
};
</script>

<style lang="less" scoped>
.table_head {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
}
.query-picker {
  width: 200px;
  display: inline-block;
  margin-right: 20px;
}
</style>
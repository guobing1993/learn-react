const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body');
const app = new Koa();


router.get('/', function(next) {
    this.body = 'hello koa !'
});

router.get('/api', function(next) {
    this.body = 'test data'
});
router.get('/api/1', function(next) {
    this.body = 'test data 1'
});
router.get('/api/2', function(next) {
    this.body = {
        a: 1,
        b: '123'
    }
});
app.use(koaBody({
    multipart: true, // 支持文件上传
    encoding: 'gzip',
    formidable: {
        uploadDir: path.join(__dirname, 'public/upload/'), // 设置文件上传目录
        keepExtensions: true, // 保持文件的后缀
        maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
        onFileBegin: (name, file) => { // 文件上传前的设置
            // console.log(`name: ${name}`);
            // console.log(file);
        },
    }
}));

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
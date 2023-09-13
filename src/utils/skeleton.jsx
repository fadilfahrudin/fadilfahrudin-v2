
export default function onLoadData() {
    const loading = document.querySelectorAll('.loading');
    loading.forEach((item) => {
        item.classList.remove('loading');
    })

    const loadItem = document.querySelectorAll('.load-item');
    loadItem.forEach((item) => {
        item.classList.remove('load-item');
    })
    const icLoad = document.querySelectorAll('.icon-load');
    icLoad.forEach((item) => {
        item.classList.remove('icon-load')
    })
    const pLoad = document.querySelectorAll('.p-load');
    pLoad.forEach((item) => {
        item.classList.remove('p-load');
    })
    return null;
}
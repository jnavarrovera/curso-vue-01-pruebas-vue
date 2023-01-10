<template>
    <div class="card">
        <slot name="picture"></slot>
        <slot name="header"></slot>
        <slot name="body"></slot>

        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
.card {
    min-height: 200px;
    border: 1px solid black;
    border-radius: 1rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
}

.footer {
    width: 100%;
    background-color: blanchedalmond;
    padding: 2px;
    text-align: end;
    border-radius: 1rem;
}
</style>
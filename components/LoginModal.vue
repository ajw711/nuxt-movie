<template>
  <div class="modal-backdrop" @click.self="emitClose">
    <div class="modal-content p-4">
      <h4 class="mb-4 text-center">소셜 로그인</h4>
      <button
        class="btn btn-warning w-100 mb-2 text-white"
        @click="loginWith('kakao')"
      >
        kakao 로그인
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
const emitClose = () => emit("close");

const loginWith = (provider: "kakao") => {
  const url = {
    kakao: "https//",
  }[provider];

  window.location.href = url;
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  border-radius: 8px;
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>

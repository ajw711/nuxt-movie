<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary" ref="navRef">
    <div class="container d-flex align-items-center justify-content-between">
      <a class="navbar-brand" href="#">Movie</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">영화목록</a>
        </li>

        <li class="nav-item dropdown" @click="toggleDropdown('cinema')">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            :aria-expanded="isDropdownOpen.cinema"
            href="#"
            @click.prevent
          >
            영화관
          </a>
          <ul
            class="dropdown-menu"
            :class="{ show: isDropdownOpen.cinema }"
          >
            <li>
              <a class="dropdown-item" href="#" @click.prevent="goPage('/cgv')">CGV</a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="goPage('/lottecinema')">롯데시네마</a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="goPage('/megabox')">메가박스</a>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown" @click="toggleDropdown('actor')">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            :aria-expanded="isDropdownOpen.actor"
            href="#"
            @click.prevent
          >
            배우
          </a>
          <ul
            class="dropdown-menu"
            :class="{ show: isDropdownOpen.actor }"
          >
            <li><a class="dropdown-item" href="#">배우 목록</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown" @click="toggleDropdown('event')">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            :aria-expanded="isDropdownOpen.event"
            href="#"
            @click.prevent
          >
            이벤트
          </a>
          <ul
            class="dropdown-menu"
            :class="{ show: isDropdownOpen.event }"
          >
            <li><a class="dropdown-item" href="#">당첨자 발표</a></li>
            <li><a class="dropdown-item" href="#">종료된 이벤트</a></li>
            <li><a class="dropdown-item" href="#">제휴 할인</a></li>
          </ul>
        </li>
      </ul>
      <div>
        <a class="nav-link text-white" href="#" @click.prevent="showLoginModal = true">로그인</a>
        <LoginModal v-if="showLoginModal" @close="showLoginModal = false" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNavigation } from '~/hooks/useNavigation'
import { onMounted, onBeforeUnmount } from 'vue'
import LoginModal from '~/components/LoginModal.vue'

const { goPage } = useNavigation()
const showLoginModal = ref(false)

const isDropdownOpen = ref<Record<DropdownKey, boolean>>({
  cinema: false,
  actor: false,
  event: false,
});


const navRef = ref<HTMLElement | null>(null)


onMounted ( () => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (event: MouseEvent) => {
  if (navRef.value && !navRef.value.contains(event.target as Node)) {
    for (const key in isDropdownOpen.value) {
    const k = key as keyof typeof isDropdownOpen.value;
    isDropdownOpen.value[k] = false;
    }
  }
}

type DropdownKey = 'cinema' | 'actor' | 'event';

const toggleDropdown = (name: DropdownKey) => {
  for (const key in isDropdownOpen.value) {
    if (key !== name) isDropdownOpen.value[key as DropdownKey] = false;
  }
  isDropdownOpen.value[name] = !isDropdownOpen.value[name];
}

</script>

<style scoped>
/* 부트스트랩 dropdown 메뉴 기본 스타일 유지하면서 show 클래스 조작 */
.dropdown-menu {
  display: none;
}
.dropdown-menu.show {
  display: block;
}
</style>

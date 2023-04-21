<template>
  <div class="xl:container mx-auto dark:text-white">
    <div class="landing">
      <div class="flex flex-col items-start gap-2">
        <h1 class="text-5xl font-bold uppercase">
          Lego <span class="text-violet-700">gen</span>
        </h1>

        <p class="text-3xl">Create your own avatar, your way!</p>

        <router-link to="/generate">
          <button
            class="mt-4 text-2xl py-3 px-20 bg-violet-700 rounded-xl hover:opacity-50 ease-linear duration-150 relative"
          >
            Generate

            <v-icon
              name="fa-chevron-right"
              class="absolute right-3 -translate-y-1/2 top-1/2"
            />
          </button>
        </router-link>
      </div>

      <div class="landing__images">
        <div class="landing__images__item">
          <img
            src="@/assets/characters/1.png"
            alt=""
            class="border-2 border-violet-700"
          />
        </div>
        <div class="landing__images__item">
          <img
            src="@/assets/characters/2.png"
            alt=""
            class="border-2 border-violet-700"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing {
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  &__images {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    position: relative;
    height: 100%;

    &__item {
      position: absolute;

      img {
        object-position: center;
        object-fit: contain;
        border-radius: 2rem;
      }

      &:nth-child(1) {
        z-index: 1;
      }

      &:nth-child(2) {
        left: 15rem;
        top: 15rem;
      }
    }
  }
}
</style>

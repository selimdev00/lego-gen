<template>
  <div class="xl:container mx-auto">
    <h1 class="text-5xl text-center font-bold uppercase mb-6">
      Lego <span class="text-violet-700">gen</span>
    </h1>

    <div class="about__content">
      <div class="flex flex-col gap-4">
        <img src="@/assets/characters/1.png" alt="" />

        <img src="@/assets/characters/2.png" alt="" />
      </div>

      <div class="text-4xl flex flex-col gap-4">
        <p>
          Introducing our innovative app that allows you to
          <span class="text-violet-700">create your own unique avatar</span> by
          customizing various elements such as hairstyles, eyebrows, facial
          features, clothing, and more! Our user-friendly interface makes it
          easy for anyone to design their own avatar in minutes.
        </p>

        <p>
          Once you have created your perfect avatar, you can export it as a PNG
          image with just one click. We even offer URL sync functionality, which
          means
          <span class="text-violet-700"
            >you can share your avatar with friends and family</span
          >
          by simply sharing the URL.
        </p>

        <p>
          With our app, you have complete control over every detail of your
          avatar's appearance. You can mix and match different elements to
          create a truly unique character that represents your personality and
          style.
        </p>

        <p>
          Our app is perfect for gamers, social media enthusiasts, or anyone who
          wants to create a fun and personalized avatar.
          <span class="text-violet-700"
            >So why wait? Start designing your own avatar today and show the
            world your creative side!</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  &__content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
  }
}
</style>

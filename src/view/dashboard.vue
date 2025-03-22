<template>
  <div class="flex flex-col min-h-screen">
    <!-- 状态栏 -->
    <div class="w-full h-12 border flex items-center px-4">
      <span class="text-sm">Load:<b class="text-success">%</b></span>
      <div class="divider divider-horizontal mx-3"></div>
      <span class="text-sm">Member:8/8</span>
    </div>

    <div class="flex-1 flex">
      <div class="flex-1 mockup-window border-base-300 m-2">
        <div class="grid place-content-center border-t border-base-300 h-full">
          <server-panel type="left" />
        </div>
      </div>

      <div class="divider divider-horizontal"></div>

      <div class="flex-1 mockup-window border-base-300 m-2">
        <div class="grid place-content-center border-t border-base-300 h-full">
          <server-panel type="right" />
        </div>
      </div>
    </div>
  </div>
</template>
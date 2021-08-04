# Dependency Injection

## Within a module

<p align="center"><img src=""/></p>

## Across modules

<p align="center"><img src=""/></p>

`Export` it in the module decorators `exports` property:

```js
@Module({
  providers: [PowerService],
  // to make this class available to other modules
  exports: [PowerService],
})
```

`Import` it in the other module like this:

```js
// power module imports
import { PowerModule } from '../power/power.module';

@Module({
  providers: [CpuService],
  imports: [PowerModule], // 👈 CONNECTING TWO MODULES
})
// This way we have connected the two modules
// NOW, the CPU module will automatically have access to the exported services
// from the all the modules listed in the imports array
```
